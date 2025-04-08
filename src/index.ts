import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { Browser, Page, HTTPRequest } from 'puppeteer';

// 添加 stealth 插件
puppeteer.use(StealthPlugin());

interface DanmuMessage {
  type: string;
  content: string;
  userId: string;
  userName: string;
  timestamp: number;
}

interface PuppeteerWebSocket {
  url(): string;
  on(event: 'framesent', callback: (data: string) => void): void;
  on(event: 'framereceived', callback: (data: string) => void): void;
}

class KuaishouLiveDanmu {
  private browser: Browser | null = null;
  private page: Page | null = null;
  private liveUrl: string;

  constructor(liveUrl: string) {
    this.liveUrl = liveUrl;
  }

  private async sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private async simulateHumanBehavior(page: Page): Promise<void> {
    // 随机鼠标移动
    const viewport = await page.viewport();
    if (viewport) {
      const { width, height } = viewport;
      const points = [
        { x: width * 0.2, y: height * 0.2 },
        { x: width * 0.5, y: height * 0.3 },
        { x: width * 0.8, y: height * 0.4 },
        { x: width * 0.3, y: height * 0.6 },
        { x: width * 0.7, y: height * 0.7 }
      ];

      for (const point of points) {
        await page.mouse.move(
          point.x + (Math.random() * 50 - 25),
          point.y + (Math.random() * 50 - 25),
          { steps: 25 }
        );
        await this.sleep(500 + Math.random() * 1000);
      }
    }

    // 随机滚动
    await page.evaluate(() => {
      const scrollAmount = Math.floor(Math.random() * 300);
      document.documentElement.scrollBy(0, scrollAmount);
    });
    await this.sleep(1000 + Math.random() * 2000);
  }

  public async connect(): Promise<void> {
    try {
      // 启动浏览器
      this.browser = await puppeteer.launch({
        headless: false,
        channel: 'chrome',
        defaultViewport: null,
        args: [
          '--no-sandbox',
          '--disable-setuid-sandbox',
          '--disable-dev-shm-usage',
          '--start-maximized'
        ]
      });

      // 创建新页面
      this.page = await this.browser.newPage();

      // 设置视窗大小
      await this.page.setViewport({ 
        width: 1280, 
        height: 720, 
        deviceScaleFactor: 1 
      });

      // 设置用户代理
      await this.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36');

      // 监听 WebSocket 消息
      await this.page.setRequestInterception(true);
      
      this.page.on('request', (request: HTTPRequest) => {
        request.continue();
      });

      // 监听 WebSocket 帧
      this.page.on('websocket', ((ws: unknown) => {
        const websocket = ws as PuppeteerWebSocket;
        console.log('WebSocket 已连接:', websocket.url());

        websocket.on('framesent', (data: string) => {
          try {
            const message = JSON.parse(data);
            if (message.type === 'danmu') {
              const danmu: DanmuMessage = {
                type: 'danmu',
                content: message.content,
                userId: message.userId,
                userName: message.userName,
                timestamp: Date.now(),
              };
              console.log(`[${danmu.userName}]: ${danmu.content}`);
            }
          } catch (error) {
            // 忽略非 JSON 消息
          }
        });

        websocket.on('framereceived', (data: string) => {
          try {
            const message = JSON.parse(data);
            if (message.type === 'danmu') {
              const danmu: DanmuMessage = {
                type: 'danmu',
                content: message.content,
                userId: message.userId,
                userName: message.userName,
                timestamp: Date.now(),
              };
              console.log(`[${danmu.userName}]: ${danmu.content}`);
            }
          } catch (error) {
            // 忽略非 JSON 消息
          }
        });
      }) as any);

      console.log('正在连接到直播间...');
      
      // 先访问主页
      await this.page.goto('https://live.kuaishou.com', { 
        waitUntil: 'networkidle2',
        timeout: 60000
      });
      
      // 模拟真人行为
      await this.simulateHumanBehavior(this.page);
      
      // 随机等待
      await this.sleep(2000 + Math.random() * 3000);
      
      // 访问直播间
      await this.page.goto(this.liveUrl, {
        waitUntil: 'networkidle2',
        timeout: 60000
      });

      console.log('已连接到直播间');

    } catch (error) {
      console.error('连接失败:', error);
      await this.disconnect();
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    if (this.page) {
      await this.page.close();
      this.page = null;
    }
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
    console.log('已断开连接');
  }
}

// 使用示例
const liveUrl = 'https://live.kuaishou.com/u/Zb17742603930';
const danmu = new KuaishouLiveDanmu(liveUrl);

// 启动程序
danmu.connect().catch(console.error);

// 优雅退出
process.on('SIGINT', async () => {
  console.log('正在关闭连接...');
  await danmu.disconnect();
  process.exit(0);
}); 