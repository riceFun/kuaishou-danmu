# 快手直播间弹幕获取工具

这是一个用于获取快手直播间弹幕数据的 TypeScript 工具。

## 功能特点

- 支持连接快手直播间
- 实时获取弹幕消息
- 支持优雅退出
- 类型安全

## 安装

```bash
# 安装依赖
npm install
```

## 使用方法

1. 修改 `src/index.ts` 中的直播间地址
2. 运行程序：

```bash
# 开发模式运行
npm run dev

# 或者构建后运行
npm run build
npm start
```

## 注意事项

- 需要 Node.js 环境
- 由于快手可能会更新其 API，如果遇到连接问题，请检查 WebSocket 连接地址的获取逻辑
- 建议使用最新版本的 Chrome 浏览器访问直播间

## 许可证

MIT 