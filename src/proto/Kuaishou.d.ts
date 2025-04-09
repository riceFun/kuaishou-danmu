import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace chat. */
export namespace chat {

    /** Properties of a Kuaishou. */
    interface IKuaishou {
    }

    /** Represents a Kuaishou. */
    class Kuaishou implements IKuaishou {

        /**
         * Constructs a new Kuaishou.
         * @param [properties] Properties to set
         */
        constructor(properties?: chat.IKuaishou);

        /**
         * Creates a new Kuaishou instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Kuaishou instance
         */
        public static create(properties?: chat.IKuaishou): chat.Kuaishou;

        /**
         * Encodes the specified Kuaishou message. Does not implicitly {@link chat.Kuaishou.verify|verify} messages.
         * @param message Kuaishou message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: chat.IKuaishou, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Kuaishou message, length delimited. Does not implicitly {@link chat.Kuaishou.verify|verify} messages.
         * @param message Kuaishou message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: chat.IKuaishou, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Kuaishou message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Kuaishou
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou;

        /**
         * Decodes a Kuaishou message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Kuaishou
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou;

        /**
         * Verifies a Kuaishou message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Kuaishou message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Kuaishou
         */
        public static fromObject(object: { [k: string]: any }): chat.Kuaishou;

        /**
         * Creates a plain object from a Kuaishou message. Also converts values to other types if specified.
         * @param message Kuaishou
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: chat.Kuaishou, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Kuaishou to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Kuaishou
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Kuaishou {

        /** Properties of a SimpleUserInfo. */
        interface ISimpleUserInfo {

            /** SimpleUserInfo principalId */
            principalId?: (string|null);

            /** SimpleUserInfo userName */
            userName?: (string|null);

            /** SimpleUserInfo headUrl */
            headUrl?: (string|null);
        }

        /** Represents a SimpleUserInfo. */
        class SimpleUserInfo implements ISimpleUserInfo {

            /**
             * Constructs a new SimpleUserInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISimpleUserInfo);

            /** SimpleUserInfo principalId. */
            public principalId: string;

            /** SimpleUserInfo userName. */
            public userName: string;

            /** SimpleUserInfo headUrl. */
            public headUrl: string;

            /**
             * Creates a new SimpleUserInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SimpleUserInfo instance
             */
            public static create(properties?: chat.Kuaishou.ISimpleUserInfo): chat.Kuaishou.SimpleUserInfo;

            /**
             * Encodes the specified SimpleUserInfo message. Does not implicitly {@link chat.Kuaishou.SimpleUserInfo.verify|verify} messages.
             * @param message SimpleUserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISimpleUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SimpleUserInfo message, length delimited. Does not implicitly {@link chat.Kuaishou.SimpleUserInfo.verify|verify} messages.
             * @param message SimpleUserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISimpleUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SimpleUserInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SimpleUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SimpleUserInfo;

            /**
             * Decodes a SimpleUserInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SimpleUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SimpleUserInfo;

            /**
             * Verifies a SimpleUserInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SimpleUserInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SimpleUserInfo
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SimpleUserInfo;

            /**
             * Creates a plain object from a SimpleUserInfo message. Also converts values to other types if specified.
             * @param message SimpleUserInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SimpleUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SimpleUserInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SimpleUserInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** WebLiveAssistantType enum. */
        enum WebLiveAssistantType {
            UNKNOWN_ASSISTANT_TYPE = 0,
            SUPER = 1,
            JUNIOR = 2
        }

        /** Properties of a LiveAudienceState. */
        interface ILiveAudienceState {

            /** LiveAudienceState isFromFansTop */
            isFromFansTop?: (boolean|null);

            /** LiveAudienceState isKoi */
            isKoi?: (boolean|null);

            /** LiveAudienceState assistantType */
            assistantType?: (chat.Kuaishou.LiveAudienceState.AssistantType|null);

            /** LiveAudienceState fansGroupIntimacyLevel */
            fansGroupIntimacyLevel?: (number|null);

            /** LiveAudienceState nameplate */
            nameplate?: (chat.Kuaishou.IGzoneNameplate|null);

            /** LiveAudienceState liveFansGroupState */
            liveFansGroupState?: (chat.Kuaishou.ILiveFansGroupState|null);

            /** LiveAudienceState wealthGrade */
            wealthGrade?: (number|null);

            /** LiveAudienceState badgeKey */
            badgeKey?: (string|null);
        }

        /** Represents a LiveAudienceState. */
        class LiveAudienceState implements ILiveAudienceState {

            /**
             * Constructs a new LiveAudienceState.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ILiveAudienceState);

            /** LiveAudienceState isFromFansTop. */
            public isFromFansTop: boolean;

            /** LiveAudienceState isKoi. */
            public isKoi: boolean;

            /** LiveAudienceState assistantType. */
            public assistantType: chat.Kuaishou.LiveAudienceState.AssistantType;

            /** LiveAudienceState fansGroupIntimacyLevel. */
            public fansGroupIntimacyLevel: number;

            /** LiveAudienceState nameplate. */
            public nameplate?: (chat.Kuaishou.IGzoneNameplate|null);

            /** LiveAudienceState liveFansGroupState. */
            public liveFansGroupState?: (chat.Kuaishou.ILiveFansGroupState|null);

            /** LiveAudienceState wealthGrade. */
            public wealthGrade: number;

            /** LiveAudienceState badgeKey. */
            public badgeKey: string;

            /**
             * Creates a new LiveAudienceState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiveAudienceState instance
             */
            public static create(properties?: chat.Kuaishou.ILiveAudienceState): chat.Kuaishou.LiveAudienceState;

            /**
             * Encodes the specified LiveAudienceState message. Does not implicitly {@link chat.Kuaishou.LiveAudienceState.verify|verify} messages.
             * @param message LiveAudienceState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ILiveAudienceState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LiveAudienceState message, length delimited. Does not implicitly {@link chat.Kuaishou.LiveAudienceState.verify|verify} messages.
             * @param message LiveAudienceState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ILiveAudienceState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiveAudienceState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiveAudienceState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.LiveAudienceState;

            /**
             * Decodes a LiveAudienceState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LiveAudienceState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.LiveAudienceState;

            /**
             * Verifies a LiveAudienceState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LiveAudienceState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LiveAudienceState
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.LiveAudienceState;

            /**
             * Creates a plain object from a LiveAudienceState message. Also converts values to other types if specified.
             * @param message LiveAudienceState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.LiveAudienceState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LiveAudienceState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LiveAudienceState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace LiveAudienceState {

            /** AssistantType enum. */
            enum AssistantType {
                UNKNOWN_ASSISTANT_TYPE = 0,
                SUPER = 1,
                JUNIOR = 2
            }
        }

        /** Properties of a GzoneNameplate. */
        interface IGzoneNameplate {

            /** GzoneNameplate id */
            id?: (number|Long|null);

            /** GzoneNameplate name */
            name?: (string|null);

            /** GzoneNameplate urls */
            urls?: (chat.Kuaishou.IPicUrl|null);
        }

        /** Represents a GzoneNameplate. */
        class GzoneNameplate implements IGzoneNameplate {

            /**
             * Constructs a new GzoneNameplate.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IGzoneNameplate);

            /** GzoneNameplate id. */
            public id: (number|Long);

            /** GzoneNameplate name. */
            public name: string;

            /** GzoneNameplate urls. */
            public urls?: (chat.Kuaishou.IPicUrl|null);

            /**
             * Creates a new GzoneNameplate instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GzoneNameplate instance
             */
            public static create(properties?: chat.Kuaishou.IGzoneNameplate): chat.Kuaishou.GzoneNameplate;

            /**
             * Encodes the specified GzoneNameplate message. Does not implicitly {@link chat.Kuaishou.GzoneNameplate.verify|verify} messages.
             * @param message GzoneNameplate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IGzoneNameplate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GzoneNameplate message, length delimited. Does not implicitly {@link chat.Kuaishou.GzoneNameplate.verify|verify} messages.
             * @param message GzoneNameplate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IGzoneNameplate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GzoneNameplate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GzoneNameplate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.GzoneNameplate;

            /**
             * Decodes a GzoneNameplate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GzoneNameplate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.GzoneNameplate;

            /**
             * Verifies a GzoneNameplate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GzoneNameplate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GzoneNameplate
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.GzoneNameplate;

            /**
             * Creates a plain object from a GzoneNameplate message. Also converts values to other types if specified.
             * @param message GzoneNameplate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.GzoneNameplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GzoneNameplate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GzoneNameplate
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LiveFansGroupState. */
        interface ILiveFansGroupState {

            /** LiveFansGroupState intimacyLevel */
            intimacyLevel?: (number|null);

            /** LiveFansGroupState enterRoomSpecialEffect */
            enterRoomSpecialEffect?: (number|null);
        }

        /** Represents a LiveFansGroupState. */
        class LiveFansGroupState implements ILiveFansGroupState {

            /**
             * Constructs a new LiveFansGroupState.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ILiveFansGroupState);

            /** LiveFansGroupState intimacyLevel. */
            public intimacyLevel: number;

            /** LiveFansGroupState enterRoomSpecialEffect. */
            public enterRoomSpecialEffect: number;

            /**
             * Creates a new LiveFansGroupState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiveFansGroupState instance
             */
            public static create(properties?: chat.Kuaishou.ILiveFansGroupState): chat.Kuaishou.LiveFansGroupState;

            /**
             * Encodes the specified LiveFansGroupState message. Does not implicitly {@link chat.Kuaishou.LiveFansGroupState.verify|verify} messages.
             * @param message LiveFansGroupState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ILiveFansGroupState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LiveFansGroupState message, length delimited. Does not implicitly {@link chat.Kuaishou.LiveFansGroupState.verify|verify} messages.
             * @param message LiveFansGroupState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ILiveFansGroupState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiveFansGroupState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiveFansGroupState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.LiveFansGroupState;

            /**
             * Decodes a LiveFansGroupState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LiveFansGroupState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.LiveFansGroupState;

            /**
             * Verifies a LiveFansGroupState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LiveFansGroupState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LiveFansGroupState
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.LiveFansGroupState;

            /**
             * Creates a plain object from a LiveFansGroupState message. Also converts values to other types if specified.
             * @param message LiveFansGroupState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.LiveFansGroupState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LiveFansGroupState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LiveFansGroupState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CSWebEnterRoom. */
        interface ICSWebEnterRoom {

            /** CSWebEnterRoom token */
            token?: (string|null);

            /** CSWebEnterRoom liveStreamId */
            liveStreamId?: (string|null);

            /** CSWebEnterRoom reconnectCount */
            reconnectCount?: (number|null);

            /** CSWebEnterRoom lastErrorCode */
            lastErrorCode?: (number|null);

            /** CSWebEnterRoom expTag */
            expTag?: (string|null);

            /** CSWebEnterRoom attach */
            attach?: (string|null);

            /** CSWebEnterRoom pageId */
            pageId?: (string|null);

            /** CSWebEnterRoom kpn */
            kpn?: (string|null);

            /** CSWebEnterRoom kpf */
            kpf?: (string|null);
        }

        /** Represents a CSWebEnterRoom. */
        class CSWebEnterRoom implements ICSWebEnterRoom {

            /**
             * Constructs a new CSWebEnterRoom.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ICSWebEnterRoom);

            /** CSWebEnterRoom token. */
            public token: string;

            /** CSWebEnterRoom liveStreamId. */
            public liveStreamId: string;

            /** CSWebEnterRoom reconnectCount. */
            public reconnectCount: number;

            /** CSWebEnterRoom lastErrorCode. */
            public lastErrorCode: number;

            /** CSWebEnterRoom expTag. */
            public expTag: string;

            /** CSWebEnterRoom attach. */
            public attach: string;

            /** CSWebEnterRoom pageId. */
            public pageId: string;

            /** CSWebEnterRoom kpn. */
            public kpn: string;

            /** CSWebEnterRoom kpf. */
            public kpf: string;

            /**
             * Creates a new CSWebEnterRoom instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CSWebEnterRoom instance
             */
            public static create(properties?: chat.Kuaishou.ICSWebEnterRoom): chat.Kuaishou.CSWebEnterRoom;

            /**
             * Encodes the specified CSWebEnterRoom message. Does not implicitly {@link chat.Kuaishou.CSWebEnterRoom.verify|verify} messages.
             * @param message CSWebEnterRoom message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ICSWebEnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CSWebEnterRoom message, length delimited. Does not implicitly {@link chat.Kuaishou.CSWebEnterRoom.verify|verify} messages.
             * @param message CSWebEnterRoom message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ICSWebEnterRoom, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CSWebEnterRoom message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CSWebEnterRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.CSWebEnterRoom;

            /**
             * Decodes a CSWebEnterRoom message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CSWebEnterRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.CSWebEnterRoom;

            /**
             * Verifies a CSWebEnterRoom message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CSWebEnterRoom message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CSWebEnterRoom
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.CSWebEnterRoom;

            /**
             * Creates a plain object from a CSWebEnterRoom message. Also converts values to other types if specified.
             * @param message CSWebEnterRoom
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.CSWebEnterRoom, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CSWebEnterRoom to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CSWebEnterRoom
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebEnterRoomAck. */
        interface ISCWebEnterRoomAck {

            /** SCWebEnterRoomAck minReconnectMs */
            minReconnectMs?: (number|Long|null);

            /** SCWebEnterRoomAck maxReconnectMs */
            maxReconnectMs?: (number|Long|null);

            /** SCWebEnterRoomAck heartbeatIntervalMs */
            heartbeatIntervalMs?: (number|Long|null);
        }

        /** Represents a SCWebEnterRoomAck. */
        class SCWebEnterRoomAck implements ISCWebEnterRoomAck {

            /**
             * Constructs a new SCWebEnterRoomAck.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebEnterRoomAck);

            /** SCWebEnterRoomAck minReconnectMs. */
            public minReconnectMs: (number|Long);

            /** SCWebEnterRoomAck maxReconnectMs. */
            public maxReconnectMs: (number|Long);

            /** SCWebEnterRoomAck heartbeatIntervalMs. */
            public heartbeatIntervalMs: (number|Long);

            /**
             * Creates a new SCWebEnterRoomAck instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebEnterRoomAck instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebEnterRoomAck): chat.Kuaishou.SCWebEnterRoomAck;

            /**
             * Encodes the specified SCWebEnterRoomAck message. Does not implicitly {@link chat.Kuaishou.SCWebEnterRoomAck.verify|verify} messages.
             * @param message SCWebEnterRoomAck message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebEnterRoomAck, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebEnterRoomAck message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebEnterRoomAck.verify|verify} messages.
             * @param message SCWebEnterRoomAck message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebEnterRoomAck, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebEnterRoomAck message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebEnterRoomAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebEnterRoomAck;

            /**
             * Decodes a SCWebEnterRoomAck message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebEnterRoomAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebEnterRoomAck;

            /**
             * Verifies a SCWebEnterRoomAck message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebEnterRoomAck message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebEnterRoomAck
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebEnterRoomAck;

            /**
             * Creates a plain object from a SCWebEnterRoomAck message. Also converts values to other types if specified.
             * @param message SCWebEnterRoomAck
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebEnterRoomAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebEnterRoomAck to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebEnterRoomAck
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CSWebHeartbeat. */
        interface ICSWebHeartbeat {

            /** CSWebHeartbeat timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a CSWebHeartbeat. */
        class CSWebHeartbeat implements ICSWebHeartbeat {

            /**
             * Constructs a new CSWebHeartbeat.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ICSWebHeartbeat);

            /** CSWebHeartbeat timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new CSWebHeartbeat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CSWebHeartbeat instance
             */
            public static create(properties?: chat.Kuaishou.ICSWebHeartbeat): chat.Kuaishou.CSWebHeartbeat;

            /**
             * Encodes the specified CSWebHeartbeat message. Does not implicitly {@link chat.Kuaishou.CSWebHeartbeat.verify|verify} messages.
             * @param message CSWebHeartbeat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ICSWebHeartbeat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CSWebHeartbeat message, length delimited. Does not implicitly {@link chat.Kuaishou.CSWebHeartbeat.verify|verify} messages.
             * @param message CSWebHeartbeat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ICSWebHeartbeat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CSWebHeartbeat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CSWebHeartbeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.CSWebHeartbeat;

            /**
             * Decodes a CSWebHeartbeat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CSWebHeartbeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.CSWebHeartbeat;

            /**
             * Verifies a CSWebHeartbeat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CSWebHeartbeat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CSWebHeartbeat
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.CSWebHeartbeat;

            /**
             * Creates a plain object from a CSWebHeartbeat message. Also converts values to other types if specified.
             * @param message CSWebHeartbeat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.CSWebHeartbeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CSWebHeartbeat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CSWebHeartbeat
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebHeartbeatAck. */
        interface ISCWebHeartbeatAck {

            /** SCWebHeartbeatAck timestamp */
            timestamp?: (number|Long|null);

            /** SCWebHeartbeatAck clientTimestamp */
            clientTimestamp?: (number|Long|null);
        }

        /** Represents a SCWebHeartbeatAck. */
        class SCWebHeartbeatAck implements ISCWebHeartbeatAck {

            /**
             * Constructs a new SCWebHeartbeatAck.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebHeartbeatAck);

            /** SCWebHeartbeatAck timestamp. */
            public timestamp: (number|Long);

            /** SCWebHeartbeatAck clientTimestamp. */
            public clientTimestamp: (number|Long);

            /**
             * Creates a new SCWebHeartbeatAck instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebHeartbeatAck instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebHeartbeatAck): chat.Kuaishou.SCWebHeartbeatAck;

            /**
             * Encodes the specified SCWebHeartbeatAck message. Does not implicitly {@link chat.Kuaishou.SCWebHeartbeatAck.verify|verify} messages.
             * @param message SCWebHeartbeatAck message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebHeartbeatAck, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebHeartbeatAck message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebHeartbeatAck.verify|verify} messages.
             * @param message SCWebHeartbeatAck message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebHeartbeatAck, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebHeartbeatAck message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebHeartbeatAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebHeartbeatAck;

            /**
             * Decodes a SCWebHeartbeatAck message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebHeartbeatAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebHeartbeatAck;

            /**
             * Verifies a SCWebHeartbeatAck message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebHeartbeatAck message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebHeartbeatAck
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebHeartbeatAck;

            /**
             * Creates a plain object from a SCWebHeartbeatAck message. Also converts values to other types if specified.
             * @param message SCWebHeartbeatAck
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebHeartbeatAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebHeartbeatAck to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebHeartbeatAck
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebError. */
        interface ISCWebError {

            /** SCWebError code */
            code?: (number|null);

            /** SCWebError msg */
            msg?: (string|null);

            /** SCWebError subCode */
            subCode?: (number|null);
        }

        /** Represents a SCWebError. */
        class SCWebError implements ISCWebError {

            /**
             * Constructs a new SCWebError.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebError);

            /** SCWebError code. */
            public code: number;

            /** SCWebError msg. */
            public msg: string;

            /** SCWebError subCode. */
            public subCode: number;

            /**
             * Creates a new SCWebError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebError instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebError): chat.Kuaishou.SCWebError;

            /**
             * Encodes the specified SCWebError message. Does not implicitly {@link chat.Kuaishou.SCWebError.verify|verify} messages.
             * @param message SCWebError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebError message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebError.verify|verify} messages.
             * @param message SCWebError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebError;

            /**
             * Decodes a SCWebError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebError;

            /**
             * Verifies a SCWebError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebError
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebError;

            /**
             * Creates a plain object from a SCWebError message. Also converts values to other types if specified.
             * @param message SCWebError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebError
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CSWebError. */
        interface ICSWebError {

            /** CSWebError code */
            code?: (number|null);

            /** CSWebError msg */
            msg?: (string|null);
        }

        /** Represents a CSWebError. */
        class CSWebError implements ICSWebError {

            /**
             * Constructs a new CSWebError.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ICSWebError);

            /** CSWebError code. */
            public code: number;

            /** CSWebError msg. */
            public msg: string;

            /**
             * Creates a new CSWebError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CSWebError instance
             */
            public static create(properties?: chat.Kuaishou.ICSWebError): chat.Kuaishou.CSWebError;

            /**
             * Encodes the specified CSWebError message. Does not implicitly {@link chat.Kuaishou.CSWebError.verify|verify} messages.
             * @param message CSWebError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ICSWebError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CSWebError message, length delimited. Does not implicitly {@link chat.Kuaishou.CSWebError.verify|verify} messages.
             * @param message CSWebError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ICSWebError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CSWebError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CSWebError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.CSWebError;

            /**
             * Decodes a CSWebError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CSWebError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.CSWebError;

            /**
             * Verifies a CSWebError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CSWebError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CSWebError
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.CSWebError;

            /**
             * Creates a plain object from a CSWebError message. Also converts values to other types if specified.
             * @param message CSWebError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.CSWebError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CSWebError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CSWebError
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** WebUserPauseType enum. */
        enum WebUserPauseType {
            UNKNOWN_USER_PAUSE_TYPE = 0,
            BACKGROUND = 1
        }

        /** Properties of a CSWebUserPause. */
        interface ICSWebUserPause {

            /** CSWebUserPause time */
            time?: (number|Long|null);

            /** CSWebUserPause pauseType */
            pauseType?: (chat.Kuaishou.WebUserPauseType|null);
        }

        /** Represents a CSWebUserPause. */
        class CSWebUserPause implements ICSWebUserPause {

            /**
             * Constructs a new CSWebUserPause.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ICSWebUserPause);

            /** CSWebUserPause time. */
            public time: (number|Long);

            /** CSWebUserPause pauseType. */
            public pauseType: chat.Kuaishou.WebUserPauseType;

            /**
             * Creates a new CSWebUserPause instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CSWebUserPause instance
             */
            public static create(properties?: chat.Kuaishou.ICSWebUserPause): chat.Kuaishou.CSWebUserPause;

            /**
             * Encodes the specified CSWebUserPause message. Does not implicitly {@link chat.Kuaishou.CSWebUserPause.verify|verify} messages.
             * @param message CSWebUserPause message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ICSWebUserPause, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CSWebUserPause message, length delimited. Does not implicitly {@link chat.Kuaishou.CSWebUserPause.verify|verify} messages.
             * @param message CSWebUserPause message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ICSWebUserPause, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CSWebUserPause message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CSWebUserPause
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.CSWebUserPause;

            /**
             * Decodes a CSWebUserPause message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CSWebUserPause
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.CSWebUserPause;

            /**
             * Verifies a CSWebUserPause message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CSWebUserPause message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CSWebUserPause
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.CSWebUserPause;

            /**
             * Creates a plain object from a CSWebUserPause message. Also converts values to other types if specified.
             * @param message CSWebUserPause
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.CSWebUserPause, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CSWebUserPause to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CSWebUserPause
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CSWebUserExit. */
        interface ICSWebUserExit {

            /** CSWebUserExit time */
            time?: (number|Long|null);
        }

        /** Represents a CSWebUserExit. */
        class CSWebUserExit implements ICSWebUserExit {

            /**
             * Constructs a new CSWebUserExit.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ICSWebUserExit);

            /** CSWebUserExit time. */
            public time: (number|Long);

            /**
             * Creates a new CSWebUserExit instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CSWebUserExit instance
             */
            public static create(properties?: chat.Kuaishou.ICSWebUserExit): chat.Kuaishou.CSWebUserExit;

            /**
             * Encodes the specified CSWebUserExit message. Does not implicitly {@link chat.Kuaishou.CSWebUserExit.verify|verify} messages.
             * @param message CSWebUserExit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ICSWebUserExit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CSWebUserExit message, length delimited. Does not implicitly {@link chat.Kuaishou.CSWebUserExit.verify|verify} messages.
             * @param message CSWebUserExit message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ICSWebUserExit, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CSWebUserExit message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CSWebUserExit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.CSWebUserExit;

            /**
             * Decodes a CSWebUserExit message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CSWebUserExit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.CSWebUserExit;

            /**
             * Verifies a CSWebUserExit message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CSWebUserExit message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CSWebUserExit
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.CSWebUserExit;

            /**
             * Creates a plain object from a CSWebUserExit message. Also converts values to other types if specified.
             * @param message CSWebUserExit
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.CSWebUserExit, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CSWebUserExit to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CSWebUserExit
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** WebPauseType enum. */
        enum WebPauseType {
            UNKNOWN_PAUSE_TYPE = 0,
            TELEPHONE = 1,
            SHARE = 2
        }

        /** Properties of a SCWebAuthorPause. */
        interface ISCWebAuthorPause {

            /** SCWebAuthorPause time */
            time?: (number|Long|null);

            /** SCWebAuthorPause pauseType */
            pauseType?: (chat.Kuaishou.WebPauseType|null);
        }

        /** Represents a SCWebAuthorPause. */
        class SCWebAuthorPause implements ISCWebAuthorPause {

            /**
             * Constructs a new SCWebAuthorPause.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebAuthorPause);

            /** SCWebAuthorPause time. */
            public time: (number|Long);

            /** SCWebAuthorPause pauseType. */
            public pauseType: chat.Kuaishou.WebPauseType;

            /**
             * Creates a new SCWebAuthorPause instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebAuthorPause instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebAuthorPause): chat.Kuaishou.SCWebAuthorPause;

            /**
             * Encodes the specified SCWebAuthorPause message. Does not implicitly {@link chat.Kuaishou.SCWebAuthorPause.verify|verify} messages.
             * @param message SCWebAuthorPause message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebAuthorPause, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebAuthorPause message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebAuthorPause.verify|verify} messages.
             * @param message SCWebAuthorPause message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebAuthorPause, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebAuthorPause message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebAuthorPause
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebAuthorPause;

            /**
             * Decodes a SCWebAuthorPause message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebAuthorPause
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebAuthorPause;

            /**
             * Verifies a SCWebAuthorPause message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebAuthorPause message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebAuthorPause
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebAuthorPause;

            /**
             * Creates a plain object from a SCWebAuthorPause message. Also converts values to other types if specified.
             * @param message SCWebAuthorPause
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebAuthorPause, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebAuthorPause to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebAuthorPause
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebAuthorResume. */
        interface ISCWebAuthorResume {

            /** SCWebAuthorResume time */
            time?: (number|Long|null);
        }

        /** Represents a SCWebAuthorResume. */
        class SCWebAuthorResume implements ISCWebAuthorResume {

            /**
             * Constructs a new SCWebAuthorResume.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebAuthorResume);

            /** SCWebAuthorResume time. */
            public time: (number|Long);

            /**
             * Creates a new SCWebAuthorResume instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebAuthorResume instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebAuthorResume): chat.Kuaishou.SCWebAuthorResume;

            /**
             * Encodes the specified SCWebAuthorResume message. Does not implicitly {@link chat.Kuaishou.SCWebAuthorResume.verify|verify} messages.
             * @param message SCWebAuthorResume message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebAuthorResume, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebAuthorResume message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebAuthorResume.verify|verify} messages.
             * @param message SCWebAuthorResume message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebAuthorResume, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebAuthorResume message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebAuthorResume
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebAuthorResume;

            /**
             * Decodes a SCWebAuthorResume message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebAuthorResume
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebAuthorResume;

            /**
             * Verifies a SCWebAuthorResume message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebAuthorResume message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebAuthorResume
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebAuthorResume;

            /**
             * Creates a plain object from a SCWebAuthorResume message. Also converts values to other types if specified.
             * @param message SCWebAuthorResume
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebAuthorResume, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebAuthorResume to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebAuthorResume
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebPipStarted. */
        interface ISCWebPipStarted {

            /** SCWebPipStarted time */
            time?: (number|Long|null);
        }

        /** Represents a SCWebPipStarted. */
        class SCWebPipStarted implements ISCWebPipStarted {

            /**
             * Constructs a new SCWebPipStarted.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebPipStarted);

            /** SCWebPipStarted time. */
            public time: (number|Long);

            /**
             * Creates a new SCWebPipStarted instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebPipStarted instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebPipStarted): chat.Kuaishou.SCWebPipStarted;

            /**
             * Encodes the specified SCWebPipStarted message. Does not implicitly {@link chat.Kuaishou.SCWebPipStarted.verify|verify} messages.
             * @param message SCWebPipStarted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebPipStarted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebPipStarted message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebPipStarted.verify|verify} messages.
             * @param message SCWebPipStarted message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebPipStarted, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebPipStarted message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebPipStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebPipStarted;

            /**
             * Decodes a SCWebPipStarted message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebPipStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebPipStarted;

            /**
             * Verifies a SCWebPipStarted message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebPipStarted message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebPipStarted
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebPipStarted;

            /**
             * Creates a plain object from a SCWebPipStarted message. Also converts values to other types if specified.
             * @param message SCWebPipStarted
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebPipStarted, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebPipStarted to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebPipStarted
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebPipEnded. */
        interface ISCWebPipEnded {

            /** SCWebPipEnded time */
            time?: (number|Long|null);
        }

        /** Represents a SCWebPipEnded. */
        class SCWebPipEnded implements ISCWebPipEnded {

            /**
             * Constructs a new SCWebPipEnded.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebPipEnded);

            /** SCWebPipEnded time. */
            public time: (number|Long);

            /**
             * Creates a new SCWebPipEnded instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebPipEnded instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebPipEnded): chat.Kuaishou.SCWebPipEnded;

            /**
             * Encodes the specified SCWebPipEnded message. Does not implicitly {@link chat.Kuaishou.SCWebPipEnded.verify|verify} messages.
             * @param message SCWebPipEnded message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebPipEnded, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebPipEnded message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebPipEnded.verify|verify} messages.
             * @param message SCWebPipEnded message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebPipEnded, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebPipEnded message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebPipEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebPipEnded;

            /**
             * Decodes a SCWebPipEnded message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebPipEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebPipEnded;

            /**
             * Verifies a SCWebPipEnded message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebPipEnded message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebPipEnded
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebPipEnded;

            /**
             * Creates a plain object from a SCWebPipEnded message. Also converts values to other types if specified.
             * @param message SCWebPipEnded
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebPipEnded, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebPipEnded to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebPipEnded
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebFeedPush. */
        interface ISCWebFeedPush {

            /** SCWebFeedPush displayWatchingCount */
            displayWatchingCount?: (string|null);

            /** SCWebFeedPush displayLikeCount */
            displayLikeCount?: (string|null);

            /** SCWebFeedPush pendingLikeCount */
            pendingLikeCount?: (number|Long|null);

            /** SCWebFeedPush pushInterval */
            pushInterval?: (number|Long|null);

            /** SCWebFeedPush commentFeeds */
            commentFeeds?: (chat.Kuaishou.IWebCommentFeed|null);

            /** SCWebFeedPush commentCursor */
            commentCursor?: (string|null);

            /** SCWebFeedPush comboCommentFeed */
            comboCommentFeed?: (chat.Kuaishou.IWebComboCommentFeed|null);

            /** SCWebFeedPush likeFeeds */
            likeFeeds?: (chat.Kuaishou.IWebLikeFeed|null);

            /** SCWebFeedPush giftFeeds */
            giftFeeds?: (chat.Kuaishou.IWebGiftFeed|null);

            /** SCWebFeedPush giftCursor */
            giftCursor?: (string|null);

            /** SCWebFeedPush systemNoticeFeeds */
            systemNoticeFeeds?: (chat.Kuaishou.IWebSystemNoticeFeed|null);

            /** SCWebFeedPush shareFeeds */
            shareFeeds?: (chat.Kuaishou.IWebShareFeed|null);
        }

        /** Represents a SCWebFeedPush. */
        class SCWebFeedPush implements ISCWebFeedPush {

            /**
             * Constructs a new SCWebFeedPush.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebFeedPush);

            /** SCWebFeedPush displayWatchingCount. */
            public displayWatchingCount: string;

            /** SCWebFeedPush displayLikeCount. */
            public displayLikeCount: string;

            /** SCWebFeedPush pendingLikeCount. */
            public pendingLikeCount: (number|Long);

            /** SCWebFeedPush pushInterval. */
            public pushInterval: (number|Long);

            /** SCWebFeedPush commentFeeds. */
            public commentFeeds?: (chat.Kuaishou.IWebCommentFeed|null);

            /** SCWebFeedPush commentCursor. */
            public commentCursor: string;

            /** SCWebFeedPush comboCommentFeed. */
            public comboCommentFeed?: (chat.Kuaishou.IWebComboCommentFeed|null);

            /** SCWebFeedPush likeFeeds. */
            public likeFeeds?: (chat.Kuaishou.IWebLikeFeed|null);

            /** SCWebFeedPush giftFeeds. */
            public giftFeeds?: (chat.Kuaishou.IWebGiftFeed|null);

            /** SCWebFeedPush giftCursor. */
            public giftCursor: string;

            /** SCWebFeedPush systemNoticeFeeds. */
            public systemNoticeFeeds?: (chat.Kuaishou.IWebSystemNoticeFeed|null);

            /** SCWebFeedPush shareFeeds. */
            public shareFeeds?: (chat.Kuaishou.IWebShareFeed|null);

            /**
             * Creates a new SCWebFeedPush instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebFeedPush instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebFeedPush): chat.Kuaishou.SCWebFeedPush;

            /**
             * Encodes the specified SCWebFeedPush message. Does not implicitly {@link chat.Kuaishou.SCWebFeedPush.verify|verify} messages.
             * @param message SCWebFeedPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebFeedPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebFeedPush message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebFeedPush.verify|verify} messages.
             * @param message SCWebFeedPush message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebFeedPush, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebFeedPush message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebFeedPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebFeedPush;

            /**
             * Decodes a SCWebFeedPush message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebFeedPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebFeedPush;

            /**
             * Verifies a SCWebFeedPush message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebFeedPush message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebFeedPush
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebFeedPush;

            /**
             * Creates a plain object from a SCWebFeedPush message. Also converts values to other types if specified.
             * @param message SCWebFeedPush
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebFeedPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebFeedPush to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebFeedPush
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WebLikeFeed. */
        interface IWebLikeFeed {

            /** WebLikeFeed id */
            id?: (string|null);

            /** WebLikeFeed user */
            user?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebLikeFeed sortRank */
            sortRank?: (number|Long|null);

            /** WebLikeFeed deviceHash */
            deviceHash?: (string|null);
        }

        /** Represents a WebLikeFeed. */
        class WebLikeFeed implements IWebLikeFeed {

            /**
             * Constructs a new WebLikeFeed.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IWebLikeFeed);

            /** WebLikeFeed id. */
            public id: string;

            /** WebLikeFeed user. */
            public user?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebLikeFeed sortRank. */
            public sortRank: (number|Long);

            /** WebLikeFeed deviceHash. */
            public deviceHash: string;

            /**
             * Creates a new WebLikeFeed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WebLikeFeed instance
             */
            public static create(properties?: chat.Kuaishou.IWebLikeFeed): chat.Kuaishou.WebLikeFeed;

            /**
             * Encodes the specified WebLikeFeed message. Does not implicitly {@link chat.Kuaishou.WebLikeFeed.verify|verify} messages.
             * @param message WebLikeFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IWebLikeFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WebLikeFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.WebLikeFeed.verify|verify} messages.
             * @param message WebLikeFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IWebLikeFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WebLikeFeed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WebLikeFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.WebLikeFeed;

            /**
             * Decodes a WebLikeFeed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WebLikeFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.WebLikeFeed;

            /**
             * Verifies a WebLikeFeed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WebLikeFeed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WebLikeFeed
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.WebLikeFeed;

            /**
             * Creates a plain object from a WebLikeFeed message. Also converts values to other types if specified.
             * @param message WebLikeFeed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.WebLikeFeed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WebLikeFeed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WebLikeFeed
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** WebCommentFeedShowType enum. */
        enum WebCommentFeedShowType {
            FEED_SHOW_UNKNOWN = 0,
            FEED_SHOW_NORMAL = 1,
            FEED_HIDDEN = 2
        }

        /** Properties of a WebCommentFeed. */
        interface IWebCommentFeed {

            /** WebCommentFeed id */
            id?: (string|null);

            /** WebCommentFeed user */
            user?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebCommentFeed content */
            content?: (string|null);

            /** WebCommentFeed deviceHash */
            deviceHash?: (string|null);

            /** WebCommentFeed sortRank */
            sortRank?: (number|Long|null);

            /** WebCommentFeed color */
            color?: (string|null);

            /** WebCommentFeed showType */
            showType?: (chat.Kuaishou.WebCommentFeedShowType|null);

            /** WebCommentFeed senderState */
            senderState?: (chat.Kuaishou.ILiveAudienceState|null);
        }

        /** Represents a WebCommentFeed. */
        class WebCommentFeed implements IWebCommentFeed {

            /**
             * Constructs a new WebCommentFeed.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IWebCommentFeed);

            /** WebCommentFeed id. */
            public id: string;

            /** WebCommentFeed user. */
            public user?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebCommentFeed content. */
            public content: string;

            /** WebCommentFeed deviceHash. */
            public deviceHash: string;

            /** WebCommentFeed sortRank. */
            public sortRank: (number|Long);

            /** WebCommentFeed color. */
            public color: string;

            /** WebCommentFeed showType. */
            public showType: chat.Kuaishou.WebCommentFeedShowType;

            /** WebCommentFeed senderState. */
            public senderState?: (chat.Kuaishou.ILiveAudienceState|null);

            /**
             * Creates a new WebCommentFeed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WebCommentFeed instance
             */
            public static create(properties?: chat.Kuaishou.IWebCommentFeed): chat.Kuaishou.WebCommentFeed;

            /**
             * Encodes the specified WebCommentFeed message. Does not implicitly {@link chat.Kuaishou.WebCommentFeed.verify|verify} messages.
             * @param message WebCommentFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IWebCommentFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WebCommentFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.WebCommentFeed.verify|verify} messages.
             * @param message WebCommentFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IWebCommentFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WebCommentFeed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WebCommentFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.WebCommentFeed;

            /**
             * Decodes a WebCommentFeed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WebCommentFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.WebCommentFeed;

            /**
             * Verifies a WebCommentFeed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WebCommentFeed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WebCommentFeed
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.WebCommentFeed;

            /**
             * Creates a plain object from a WebCommentFeed message. Also converts values to other types if specified.
             * @param message WebCommentFeed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.WebCommentFeed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WebCommentFeed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WebCommentFeed
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WebComboCommentFeed. */
        interface IWebComboCommentFeed {

            /** WebComboCommentFeed id */
            id?: (string|null);

            /** WebComboCommentFeed content */
            content?: (string|null);

            /** WebComboCommentFeed comboCount */
            comboCount?: (number|null);
        }

        /** Represents a WebComboCommentFeed. */
        class WebComboCommentFeed implements IWebComboCommentFeed {

            /**
             * Constructs a new WebComboCommentFeed.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IWebComboCommentFeed);

            /** WebComboCommentFeed id. */
            public id: string;

            /** WebComboCommentFeed content. */
            public content: string;

            /** WebComboCommentFeed comboCount. */
            public comboCount: number;

            /**
             * Creates a new WebComboCommentFeed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WebComboCommentFeed instance
             */
            public static create(properties?: chat.Kuaishou.IWebComboCommentFeed): chat.Kuaishou.WebComboCommentFeed;

            /**
             * Encodes the specified WebComboCommentFeed message. Does not implicitly {@link chat.Kuaishou.WebComboCommentFeed.verify|verify} messages.
             * @param message WebComboCommentFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IWebComboCommentFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WebComboCommentFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.WebComboCommentFeed.verify|verify} messages.
             * @param message WebComboCommentFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IWebComboCommentFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WebComboCommentFeed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WebComboCommentFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.WebComboCommentFeed;

            /**
             * Decodes a WebComboCommentFeed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WebComboCommentFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.WebComboCommentFeed;

            /**
             * Verifies a WebComboCommentFeed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WebComboCommentFeed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WebComboCommentFeed
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.WebComboCommentFeed;

            /**
             * Creates a plain object from a WebComboCommentFeed message. Also converts values to other types if specified.
             * @param message WebComboCommentFeed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.WebComboCommentFeed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WebComboCommentFeed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WebComboCommentFeed
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WebSystemNoticeFeed. */
        interface IWebSystemNoticeFeed {

            /** WebSystemNoticeFeed id */
            id?: (string|null);

            /** WebSystemNoticeFeed user */
            user?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebSystemNoticeFeed time */
            time?: (number|Long|null);

            /** WebSystemNoticeFeed content */
            content?: (string|null);

            /** WebSystemNoticeFeed displayDuration */
            displayDuration?: (number|Long|null);

            /** WebSystemNoticeFeed sortRank */
            sortRank?: (number|Long|null);

            /** WebSystemNoticeFeed displayType */
            displayType?: (chat.Kuaishou.WebSystemNoticeFeed.DisplayType|null);
        }

        /** Represents a WebSystemNoticeFeed. */
        class WebSystemNoticeFeed implements IWebSystemNoticeFeed {

            /**
             * Constructs a new WebSystemNoticeFeed.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IWebSystemNoticeFeed);

            /** WebSystemNoticeFeed id. */
            public id: string;

            /** WebSystemNoticeFeed user. */
            public user?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebSystemNoticeFeed time. */
            public time: (number|Long);

            /** WebSystemNoticeFeed content. */
            public content: string;

            /** WebSystemNoticeFeed displayDuration. */
            public displayDuration: (number|Long);

            /** WebSystemNoticeFeed sortRank. */
            public sortRank: (number|Long);

            /** WebSystemNoticeFeed displayType. */
            public displayType: chat.Kuaishou.WebSystemNoticeFeed.DisplayType;

            /**
             * Creates a new WebSystemNoticeFeed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WebSystemNoticeFeed instance
             */
            public static create(properties?: chat.Kuaishou.IWebSystemNoticeFeed): chat.Kuaishou.WebSystemNoticeFeed;

            /**
             * Encodes the specified WebSystemNoticeFeed message. Does not implicitly {@link chat.Kuaishou.WebSystemNoticeFeed.verify|verify} messages.
             * @param message WebSystemNoticeFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IWebSystemNoticeFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WebSystemNoticeFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.WebSystemNoticeFeed.verify|verify} messages.
             * @param message WebSystemNoticeFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IWebSystemNoticeFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WebSystemNoticeFeed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WebSystemNoticeFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.WebSystemNoticeFeed;

            /**
             * Decodes a WebSystemNoticeFeed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WebSystemNoticeFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.WebSystemNoticeFeed;

            /**
             * Verifies a WebSystemNoticeFeed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WebSystemNoticeFeed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WebSystemNoticeFeed
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.WebSystemNoticeFeed;

            /**
             * Creates a plain object from a WebSystemNoticeFeed message. Also converts values to other types if specified.
             * @param message WebSystemNoticeFeed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.WebSystemNoticeFeed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WebSystemNoticeFeed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WebSystemNoticeFeed
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace WebSystemNoticeFeed {

            /** DisplayType enum. */
            enum DisplayType {
                UNKNOWN_DISPLAY_TYPE = 0,
                COMMENT = 1,
                ALERT = 2,
                TOAST = 3
            }
        }

        /** Properties of a WebGiftFeed. */
        interface IWebGiftFeed {

            /** WebGiftFeed id */
            id?: (string|null);

            /** WebGiftFeed user */
            user?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebGiftFeed time */
            time?: (number|Long|null);

            /** WebGiftFeed giftId */
            giftId?: (number|null);

            /** WebGiftFeed sortRank */
            sortRank?: (number|Long|null);

            /** WebGiftFeed mergeKey */
            mergeKey?: (string|null);

            /** WebGiftFeed batchSize */
            batchSize?: (number|null);

            /** WebGiftFeed comboCount */
            comboCount?: (number|null);

            /** WebGiftFeed rank */
            rank?: (number|null);

            /** WebGiftFeed expireDuration */
            expireDuration?: (number|Long|null);

            /** WebGiftFeed clientTimestamp */
            clientTimestamp?: (number|Long|null);

            /** WebGiftFeed slotDisplayDuration */
            slotDisplayDuration?: (number|Long|null);

            /** WebGiftFeed starLevel */
            starLevel?: (number|null);

            /** WebGiftFeed styleType */
            styleType?: (chat.Kuaishou.WebGiftFeed.StyleType|null);

            /** WebGiftFeed liveAssistantType */
            liveAssistantType?: (chat.Kuaishou.WebLiveAssistantType|null);

            /** WebGiftFeed deviceHash */
            deviceHash?: (string|null);

            /** WebGiftFeed danmakuDisplay */
            danmakuDisplay?: (boolean|null);
        }

        /** Represents a WebGiftFeed. */
        class WebGiftFeed implements IWebGiftFeed {

            /**
             * Constructs a new WebGiftFeed.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IWebGiftFeed);

            /** WebGiftFeed id. */
            public id: string;

            /** WebGiftFeed user. */
            public user?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebGiftFeed time. */
            public time: (number|Long);

            /** WebGiftFeed giftId. */
            public giftId: number;

            /** WebGiftFeed sortRank. */
            public sortRank: (number|Long);

            /** WebGiftFeed mergeKey. */
            public mergeKey: string;

            /** WebGiftFeed batchSize. */
            public batchSize: number;

            /** WebGiftFeed comboCount. */
            public comboCount: number;

            /** WebGiftFeed rank. */
            public rank: number;

            /** WebGiftFeed expireDuration. */
            public expireDuration: (number|Long);

            /** WebGiftFeed clientTimestamp. */
            public clientTimestamp: (number|Long);

            /** WebGiftFeed slotDisplayDuration. */
            public slotDisplayDuration: (number|Long);

            /** WebGiftFeed starLevel. */
            public starLevel: number;

            /** WebGiftFeed styleType. */
            public styleType: chat.Kuaishou.WebGiftFeed.StyleType;

            /** WebGiftFeed liveAssistantType. */
            public liveAssistantType: chat.Kuaishou.WebLiveAssistantType;

            /** WebGiftFeed deviceHash. */
            public deviceHash: string;

            /** WebGiftFeed danmakuDisplay. */
            public danmakuDisplay: boolean;

            /**
             * Creates a new WebGiftFeed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WebGiftFeed instance
             */
            public static create(properties?: chat.Kuaishou.IWebGiftFeed): chat.Kuaishou.WebGiftFeed;

            /**
             * Encodes the specified WebGiftFeed message. Does not implicitly {@link chat.Kuaishou.WebGiftFeed.verify|verify} messages.
             * @param message WebGiftFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IWebGiftFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WebGiftFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.WebGiftFeed.verify|verify} messages.
             * @param message WebGiftFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IWebGiftFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WebGiftFeed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WebGiftFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.WebGiftFeed;

            /**
             * Decodes a WebGiftFeed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WebGiftFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.WebGiftFeed;

            /**
             * Verifies a WebGiftFeed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WebGiftFeed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WebGiftFeed
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.WebGiftFeed;

            /**
             * Creates a plain object from a WebGiftFeed message. Also converts values to other types if specified.
             * @param message WebGiftFeed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.WebGiftFeed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WebGiftFeed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WebGiftFeed
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace WebGiftFeed {

            /** StyleType enum. */
            enum StyleType {
                UNKNOWN_STYLE = 0,
                BATCH_STAR_0 = 1,
                BATCH_STAR_1 = 2,
                BATCH_STAR_2 = 3,
                BATCH_STAR_3 = 4,
                BATCH_STAR_4 = 5,
                BATCH_STAR_5 = 6,
                BATCH_STAR_6 = 7
            }
        }

        /** Properties of a SCWebRefreshWallet. */
        interface ISCWebRefreshWallet {
        }

        /** Represents a SCWebRefreshWallet. */
        class SCWebRefreshWallet implements ISCWebRefreshWallet {

            /**
             * Constructs a new SCWebRefreshWallet.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebRefreshWallet);

            /**
             * Creates a new SCWebRefreshWallet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebRefreshWallet instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebRefreshWallet): chat.Kuaishou.SCWebRefreshWallet;

            /**
             * Encodes the specified SCWebRefreshWallet message. Does not implicitly {@link chat.Kuaishou.SCWebRefreshWallet.verify|verify} messages.
             * @param message SCWebRefreshWallet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebRefreshWallet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebRefreshWallet message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebRefreshWallet.verify|verify} messages.
             * @param message SCWebRefreshWallet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebRefreshWallet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebRefreshWallet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebRefreshWallet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebRefreshWallet;

            /**
             * Decodes a SCWebRefreshWallet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebRefreshWallet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebRefreshWallet;

            /**
             * Verifies a SCWebRefreshWallet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebRefreshWallet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebRefreshWallet
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebRefreshWallet;

            /**
             * Creates a plain object from a SCWebRefreshWallet message. Also converts values to other types if specified.
             * @param message SCWebRefreshWallet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebRefreshWallet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebRefreshWallet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebRefreshWallet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebCurrentRedPackFeed. */
        interface ISCWebCurrentRedPackFeed {

            /** SCWebCurrentRedPackFeed redPack */
            redPack?: (chat.Kuaishou.IWebRedPackInfo|null);
        }

        /** Represents a SCWebCurrentRedPackFeed. */
        class SCWebCurrentRedPackFeed implements ISCWebCurrentRedPackFeed {

            /**
             * Constructs a new SCWebCurrentRedPackFeed.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebCurrentRedPackFeed);

            /** SCWebCurrentRedPackFeed redPack. */
            public redPack?: (chat.Kuaishou.IWebRedPackInfo|null);

            /**
             * Creates a new SCWebCurrentRedPackFeed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebCurrentRedPackFeed instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebCurrentRedPackFeed): chat.Kuaishou.SCWebCurrentRedPackFeed;

            /**
             * Encodes the specified SCWebCurrentRedPackFeed message. Does not implicitly {@link chat.Kuaishou.SCWebCurrentRedPackFeed.verify|verify} messages.
             * @param message SCWebCurrentRedPackFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebCurrentRedPackFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebCurrentRedPackFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebCurrentRedPackFeed.verify|verify} messages.
             * @param message SCWebCurrentRedPackFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebCurrentRedPackFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebCurrentRedPackFeed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebCurrentRedPackFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebCurrentRedPackFeed;

            /**
             * Decodes a SCWebCurrentRedPackFeed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebCurrentRedPackFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebCurrentRedPackFeed;

            /**
             * Verifies a SCWebCurrentRedPackFeed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebCurrentRedPackFeed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebCurrentRedPackFeed
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebCurrentRedPackFeed;

            /**
             * Creates a plain object from a SCWebCurrentRedPackFeed message. Also converts values to other types if specified.
             * @param message SCWebCurrentRedPackFeed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebCurrentRedPackFeed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebCurrentRedPackFeed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebCurrentRedPackFeed
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** WebRedPackCoverType enum. */
        enum WebRedPackCoverType {
            UNKNOWN_COVER_TYPE = 0,
            NORMAL_COVER = 1,
            PRETTY_COVER = 2
        }

        /** Properties of a WebRedPackInfo. */
        interface IWebRedPackInfo {

            /** WebRedPackInfo id */
            id?: (string|null);

            /** WebRedPackInfo author */
            author?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebRedPackInfo balance */
            balance?: (number|Long|null);

            /** WebRedPackInfo openTime */
            openTime?: (number|Long|null);

            /** WebRedPackInfo currentTime */
            currentTime?: (number|Long|null);

            /** WebRedPackInfo grabToken */
            grabToken?: (string|null);

            /** WebRedPackInfo needSendRequest */
            needSendRequest?: (boolean|null);

            /** WebRedPackInfo requestDelayMillis */
            requestDelayMillis?: (number|Long|null);

            /** WebRedPackInfo luckiestDelayMillis */
            luckiestDelayMillis?: (number|Long|null);

            /** WebRedPackInfo coverType */
            coverType?: (chat.Kuaishou.WebRedPackCoverType|null);
        }

        /** Represents a WebRedPackInfo. */
        class WebRedPackInfo implements IWebRedPackInfo {

            /**
             * Constructs a new WebRedPackInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IWebRedPackInfo);

            /** WebRedPackInfo id. */
            public id: string;

            /** WebRedPackInfo author. */
            public author?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebRedPackInfo balance. */
            public balance: (number|Long);

            /** WebRedPackInfo openTime. */
            public openTime: (number|Long);

            /** WebRedPackInfo currentTime. */
            public currentTime: (number|Long);

            /** WebRedPackInfo grabToken. */
            public grabToken: string;

            /** WebRedPackInfo needSendRequest. */
            public needSendRequest: boolean;

            /** WebRedPackInfo requestDelayMillis. */
            public requestDelayMillis: (number|Long);

            /** WebRedPackInfo luckiestDelayMillis. */
            public luckiestDelayMillis: (number|Long);

            /** WebRedPackInfo coverType. */
            public coverType: chat.Kuaishou.WebRedPackCoverType;

            /**
             * Creates a new WebRedPackInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WebRedPackInfo instance
             */
            public static create(properties?: chat.Kuaishou.IWebRedPackInfo): chat.Kuaishou.WebRedPackInfo;

            /**
             * Encodes the specified WebRedPackInfo message. Does not implicitly {@link chat.Kuaishou.WebRedPackInfo.verify|verify} messages.
             * @param message WebRedPackInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IWebRedPackInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WebRedPackInfo message, length delimited. Does not implicitly {@link chat.Kuaishou.WebRedPackInfo.verify|verify} messages.
             * @param message WebRedPackInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IWebRedPackInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WebRedPackInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WebRedPackInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.WebRedPackInfo;

            /**
             * Decodes a WebRedPackInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WebRedPackInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.WebRedPackInfo;

            /**
             * Verifies a WebRedPackInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WebRedPackInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WebRedPackInfo
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.WebRedPackInfo;

            /**
             * Creates a plain object from a WebRedPackInfo message. Also converts values to other types if specified.
             * @param message WebRedPackInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.WebRedPackInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WebRedPackInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WebRedPackInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WebWatchingUserInfo. */
        interface IWebWatchingUserInfo {

            /** WebWatchingUserInfo user */
            user?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebWatchingUserInfo offline */
            offline?: (boolean|null);

            /** WebWatchingUserInfo tuhao */
            tuhao?: (boolean|null);

            /** WebWatchingUserInfo liveAssistantType */
            liveAssistantType?: (chat.Kuaishou.WebLiveAssistantType|null);

            /** WebWatchingUserInfo displayKsCoin */
            displayKsCoin?: (string|null);
        }

        /** Represents a WebWatchingUserInfo. */
        class WebWatchingUserInfo implements IWebWatchingUserInfo {

            /**
             * Constructs a new WebWatchingUserInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IWebWatchingUserInfo);

            /** WebWatchingUserInfo user. */
            public user?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebWatchingUserInfo offline. */
            public offline: boolean;

            /** WebWatchingUserInfo tuhao. */
            public tuhao: boolean;

            /** WebWatchingUserInfo liveAssistantType. */
            public liveAssistantType: chat.Kuaishou.WebLiveAssistantType;

            /** WebWatchingUserInfo displayKsCoin. */
            public displayKsCoin: string;

            /**
             * Creates a new WebWatchingUserInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WebWatchingUserInfo instance
             */
            public static create(properties?: chat.Kuaishou.IWebWatchingUserInfo): chat.Kuaishou.WebWatchingUserInfo;

            /**
             * Encodes the specified WebWatchingUserInfo message. Does not implicitly {@link chat.Kuaishou.WebWatchingUserInfo.verify|verify} messages.
             * @param message WebWatchingUserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IWebWatchingUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WebWatchingUserInfo message, length delimited. Does not implicitly {@link chat.Kuaishou.WebWatchingUserInfo.verify|verify} messages.
             * @param message WebWatchingUserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IWebWatchingUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WebWatchingUserInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WebWatchingUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.WebWatchingUserInfo;

            /**
             * Decodes a WebWatchingUserInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WebWatchingUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.WebWatchingUserInfo;

            /**
             * Verifies a WebWatchingUserInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WebWatchingUserInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WebWatchingUserInfo
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.WebWatchingUserInfo;

            /**
             * Creates a plain object from a WebWatchingUserInfo message. Also converts values to other types if specified.
             * @param message WebWatchingUserInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.WebWatchingUserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WebWatchingUserInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WebWatchingUserInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebLiveWatchingUsers. */
        interface ISCWebLiveWatchingUsers {

            /** SCWebLiveWatchingUsers watchingUser */
            watchingUser?: (chat.Kuaishou.IWebWatchingUserInfo|null);

            /** SCWebLiveWatchingUsers displayWatchingCount */
            displayWatchingCount?: (string|null);

            /** SCWebLiveWatchingUsers pendingDuration */
            pendingDuration?: (number|Long|null);
        }

        /** Represents a SCWebLiveWatchingUsers. */
        class SCWebLiveWatchingUsers implements ISCWebLiveWatchingUsers {

            /**
             * Constructs a new SCWebLiveWatchingUsers.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebLiveWatchingUsers);

            /** SCWebLiveWatchingUsers watchingUser. */
            public watchingUser?: (chat.Kuaishou.IWebWatchingUserInfo|null);

            /** SCWebLiveWatchingUsers displayWatchingCount. */
            public displayWatchingCount: string;

            /** SCWebLiveWatchingUsers pendingDuration. */
            public pendingDuration: (number|Long);

            /**
             * Creates a new SCWebLiveWatchingUsers instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebLiveWatchingUsers instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebLiveWatchingUsers): chat.Kuaishou.SCWebLiveWatchingUsers;

            /**
             * Encodes the specified SCWebLiveWatchingUsers message. Does not implicitly {@link chat.Kuaishou.SCWebLiveWatchingUsers.verify|verify} messages.
             * @param message SCWebLiveWatchingUsers message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebLiveWatchingUsers, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebLiveWatchingUsers message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebLiveWatchingUsers.verify|verify} messages.
             * @param message SCWebLiveWatchingUsers message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebLiveWatchingUsers, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebLiveWatchingUsers message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebLiveWatchingUsers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebLiveWatchingUsers;

            /**
             * Decodes a SCWebLiveWatchingUsers message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebLiveWatchingUsers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebLiveWatchingUsers;

            /**
             * Verifies a SCWebLiveWatchingUsers message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebLiveWatchingUsers message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebLiveWatchingUsers
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebLiveWatchingUsers;

            /**
             * Creates a plain object from a SCWebLiveWatchingUsers message. Also converts values to other types if specified.
             * @param message SCWebLiveWatchingUsers
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebLiveWatchingUsers, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebLiveWatchingUsers to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebLiveWatchingUsers
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a WebShareFeed. */
        interface IWebShareFeed {

            /** WebShareFeed id */
            id?: (string|null);

            /** WebShareFeed user */
            user?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebShareFeed time */
            time?: (number|Long|null);

            /** WebShareFeed thirdPartyPlatform */
            thirdPartyPlatform?: (number|null);

            /** WebShareFeed sortRank */
            sortRank?: (number|Long|null);

            /** WebShareFeed liveAssistantType */
            liveAssistantType?: (chat.Kuaishou.WebLiveAssistantType|null);

            /** WebShareFeed deviceHash */
            deviceHash?: (string|null);
        }

        /** Represents a WebShareFeed. */
        class WebShareFeed implements IWebShareFeed {

            /**
             * Constructs a new WebShareFeed.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IWebShareFeed);

            /** WebShareFeed id. */
            public id: string;

            /** WebShareFeed user. */
            public user?: (chat.Kuaishou.ISimpleUserInfo|null);

            /** WebShareFeed time. */
            public time: (number|Long);

            /** WebShareFeed thirdPartyPlatform. */
            public thirdPartyPlatform: number;

            /** WebShareFeed sortRank. */
            public sortRank: (number|Long);

            /** WebShareFeed liveAssistantType. */
            public liveAssistantType: chat.Kuaishou.WebLiveAssistantType;

            /** WebShareFeed deviceHash. */
            public deviceHash: string;

            /**
             * Creates a new WebShareFeed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WebShareFeed instance
             */
            public static create(properties?: chat.Kuaishou.IWebShareFeed): chat.Kuaishou.WebShareFeed;

            /**
             * Encodes the specified WebShareFeed message. Does not implicitly {@link chat.Kuaishou.WebShareFeed.verify|verify} messages.
             * @param message WebShareFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IWebShareFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WebShareFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.WebShareFeed.verify|verify} messages.
             * @param message WebShareFeed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IWebShareFeed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WebShareFeed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WebShareFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.WebShareFeed;

            /**
             * Decodes a WebShareFeed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WebShareFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.WebShareFeed;

            /**
             * Verifies a WebShareFeed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WebShareFeed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WebShareFeed
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.WebShareFeed;

            /**
             * Creates a plain object from a WebShareFeed message. Also converts values to other types if specified.
             * @param message WebShareFeed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.WebShareFeed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WebShareFeed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for WebShareFeed
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebSuspectedViolation. */
        interface ISCWebSuspectedViolation {

            /** SCWebSuspectedViolation suspectedViolation */
            suspectedViolation?: (boolean|null);
        }

        /** Represents a SCWebSuspectedViolation. */
        class SCWebSuspectedViolation implements ISCWebSuspectedViolation {

            /**
             * Constructs a new SCWebSuspectedViolation.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebSuspectedViolation);

            /** SCWebSuspectedViolation suspectedViolation. */
            public suspectedViolation: boolean;

            /**
             * Creates a new SCWebSuspectedViolation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebSuspectedViolation instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebSuspectedViolation): chat.Kuaishou.SCWebSuspectedViolation;

            /**
             * Encodes the specified SCWebSuspectedViolation message. Does not implicitly {@link chat.Kuaishou.SCWebSuspectedViolation.verify|verify} messages.
             * @param message SCWebSuspectedViolation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebSuspectedViolation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebSuspectedViolation message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebSuspectedViolation.verify|verify} messages.
             * @param message SCWebSuspectedViolation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebSuspectedViolation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebSuspectedViolation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebSuspectedViolation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebSuspectedViolation;

            /**
             * Decodes a SCWebSuspectedViolation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebSuspectedViolation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebSuspectedViolation;

            /**
             * Verifies a SCWebSuspectedViolation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebSuspectedViolation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebSuspectedViolation
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebSuspectedViolation;

            /**
             * Creates a plain object from a SCWebSuspectedViolation message. Also converts values to other types if specified.
             * @param message SCWebSuspectedViolation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebSuspectedViolation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebSuspectedViolation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebSuspectedViolation
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebGuessOpened. */
        interface ISCWebGuessOpened {

            /** SCWebGuessOpened time */
            time?: (number|Long|null);

            /** SCWebGuessOpened guessId */
            guessId?: (string|null);

            /** SCWebGuessOpened submitDeadline */
            submitDeadline?: (number|Long|null);

            /** SCWebGuessOpened displayMaxDelayMillis */
            displayMaxDelayMillis?: (number|Long|null);
        }

        /** Represents a SCWebGuessOpened. */
        class SCWebGuessOpened implements ISCWebGuessOpened {

            /**
             * Constructs a new SCWebGuessOpened.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebGuessOpened);

            /** SCWebGuessOpened time. */
            public time: (number|Long);

            /** SCWebGuessOpened guessId. */
            public guessId: string;

            /** SCWebGuessOpened submitDeadline. */
            public submitDeadline: (number|Long);

            /** SCWebGuessOpened displayMaxDelayMillis. */
            public displayMaxDelayMillis: (number|Long);

            /**
             * Creates a new SCWebGuessOpened instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebGuessOpened instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebGuessOpened): chat.Kuaishou.SCWebGuessOpened;

            /**
             * Encodes the specified SCWebGuessOpened message. Does not implicitly {@link chat.Kuaishou.SCWebGuessOpened.verify|verify} messages.
             * @param message SCWebGuessOpened message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebGuessOpened, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebGuessOpened message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebGuessOpened.verify|verify} messages.
             * @param message SCWebGuessOpened message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebGuessOpened, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebGuessOpened message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebGuessOpened
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebGuessOpened;

            /**
             * Decodes a SCWebGuessOpened message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebGuessOpened
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebGuessOpened;

            /**
             * Verifies a SCWebGuessOpened message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebGuessOpened message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebGuessOpened
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebGuessOpened;

            /**
             * Creates a plain object from a SCWebGuessOpened message. Also converts values to other types if specified.
             * @param message SCWebGuessOpened
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebGuessOpened, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebGuessOpened to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebGuessOpened
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebGuessClosed. */
        interface ISCWebGuessClosed {

            /** SCWebGuessClosed time */
            time?: (number|Long|null);

            /** SCWebGuessClosed guessId */
            guessId?: (string|null);

            /** SCWebGuessClosed displayMaxDelayMillis */
            displayMaxDelayMillis?: (number|Long|null);
        }

        /** Represents a SCWebGuessClosed. */
        class SCWebGuessClosed implements ISCWebGuessClosed {

            /**
             * Constructs a new SCWebGuessClosed.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebGuessClosed);

            /** SCWebGuessClosed time. */
            public time: (number|Long);

            /** SCWebGuessClosed guessId. */
            public guessId: string;

            /** SCWebGuessClosed displayMaxDelayMillis. */
            public displayMaxDelayMillis: (number|Long);

            /**
             * Creates a new SCWebGuessClosed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebGuessClosed instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebGuessClosed): chat.Kuaishou.SCWebGuessClosed;

            /**
             * Encodes the specified SCWebGuessClosed message. Does not implicitly {@link chat.Kuaishou.SCWebGuessClosed.verify|verify} messages.
             * @param message SCWebGuessClosed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebGuessClosed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebGuessClosed message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebGuessClosed.verify|verify} messages.
             * @param message SCWebGuessClosed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebGuessClosed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebGuessClosed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebGuessClosed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebGuessClosed;

            /**
             * Decodes a SCWebGuessClosed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebGuessClosed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebGuessClosed;

            /**
             * Verifies a SCWebGuessClosed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebGuessClosed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebGuessClosed
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebGuessClosed;

            /**
             * Creates a plain object from a SCWebGuessClosed message. Also converts values to other types if specified.
             * @param message SCWebGuessClosed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebGuessClosed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebGuessClosed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebGuessClosed
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebRideChanged. */
        interface ISCWebRideChanged {

            /** SCWebRideChanged rideId */
            rideId?: (string|null);

            /** SCWebRideChanged requestMaxDelayMillis */
            requestMaxDelayMillis?: (number|null);
        }

        /** Represents a SCWebRideChanged. */
        class SCWebRideChanged implements ISCWebRideChanged {

            /**
             * Constructs a new SCWebRideChanged.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebRideChanged);

            /** SCWebRideChanged rideId. */
            public rideId: string;

            /** SCWebRideChanged requestMaxDelayMillis. */
            public requestMaxDelayMillis: number;

            /**
             * Creates a new SCWebRideChanged instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebRideChanged instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebRideChanged): chat.Kuaishou.SCWebRideChanged;

            /**
             * Encodes the specified SCWebRideChanged message. Does not implicitly {@link chat.Kuaishou.SCWebRideChanged.verify|verify} messages.
             * @param message SCWebRideChanged message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebRideChanged, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebRideChanged message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebRideChanged.verify|verify} messages.
             * @param message SCWebRideChanged message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebRideChanged, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebRideChanged message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebRideChanged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebRideChanged;

            /**
             * Decodes a SCWebRideChanged message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebRideChanged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebRideChanged;

            /**
             * Verifies a SCWebRideChanged message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebRideChanged message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebRideChanged
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebRideChanged;

            /**
             * Creates a plain object from a SCWebRideChanged message. Also converts values to other types if specified.
             * @param message SCWebRideChanged
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebRideChanged, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebRideChanged to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebRideChanged
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebBetChanged. */
        interface ISCWebBetChanged {

            /** SCWebBetChanged maxDelayMillis */
            maxDelayMillis?: (number|Long|null);
        }

        /** Represents a SCWebBetChanged. */
        class SCWebBetChanged implements ISCWebBetChanged {

            /**
             * Constructs a new SCWebBetChanged.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebBetChanged);

            /** SCWebBetChanged maxDelayMillis. */
            public maxDelayMillis: (number|Long);

            /**
             * Creates a new SCWebBetChanged instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebBetChanged instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebBetChanged): chat.Kuaishou.SCWebBetChanged;

            /**
             * Encodes the specified SCWebBetChanged message. Does not implicitly {@link chat.Kuaishou.SCWebBetChanged.verify|verify} messages.
             * @param message SCWebBetChanged message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebBetChanged, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebBetChanged message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebBetChanged.verify|verify} messages.
             * @param message SCWebBetChanged message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebBetChanged, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebBetChanged message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebBetChanged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebBetChanged;

            /**
             * Decodes a SCWebBetChanged message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebBetChanged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebBetChanged;

            /**
             * Verifies a SCWebBetChanged message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebBetChanged message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebBetChanged
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebBetChanged;

            /**
             * Creates a plain object from a SCWebBetChanged message. Also converts values to other types if specified.
             * @param message SCWebBetChanged
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebBetChanged, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebBetChanged to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebBetChanged
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCWebBetClosed. */
        interface ISCWebBetClosed {

            /** SCWebBetClosed maxDelayMillis */
            maxDelayMillis?: (number|Long|null);
        }

        /** Represents a SCWebBetClosed. */
        class SCWebBetClosed implements ISCWebBetClosed {

            /**
             * Constructs a new SCWebBetClosed.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebBetClosed);

            /** SCWebBetClosed maxDelayMillis. */
            public maxDelayMillis: (number|Long);

            /**
             * Creates a new SCWebBetClosed instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebBetClosed instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebBetClosed): chat.Kuaishou.SCWebBetClosed;

            /**
             * Encodes the specified SCWebBetClosed message. Does not implicitly {@link chat.Kuaishou.SCWebBetClosed.verify|verify} messages.
             * @param message SCWebBetClosed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebBetClosed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebBetClosed message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebBetClosed.verify|verify} messages.
             * @param message SCWebBetClosed message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebBetClosed, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebBetClosed message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebBetClosed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebBetClosed;

            /**
             * Decodes a SCWebBetClosed message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebBetClosed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebBetClosed;

            /**
             * Verifies a SCWebBetClosed message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebBetClosed message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebBetClosed
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebBetClosed;

            /**
             * Creates a plain object from a SCWebBetClosed message. Also converts values to other types if specified.
             * @param message SCWebBetClosed
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebBetClosed, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebBetClosed to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebBetClosed
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ConfigSwitchItem. */
        interface IConfigSwitchItem {

            /** ConfigSwitchItem configSwitchType */
            configSwitchType?: (chat.Kuaishou.ConfigSwitchItem.ConfigSwitchType|null);

            /** ConfigSwitchItem value */
            value?: (boolean|null);
        }

        /** Represents a ConfigSwitchItem. */
        class ConfigSwitchItem implements IConfigSwitchItem {

            /**
             * Constructs a new ConfigSwitchItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IConfigSwitchItem);

            /** ConfigSwitchItem configSwitchType. */
            public configSwitchType: chat.Kuaishou.ConfigSwitchItem.ConfigSwitchType;

            /** ConfigSwitchItem value. */
            public value: boolean;

            /**
             * Creates a new ConfigSwitchItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ConfigSwitchItem instance
             */
            public static create(properties?: chat.Kuaishou.IConfigSwitchItem): chat.Kuaishou.ConfigSwitchItem;

            /**
             * Encodes the specified ConfigSwitchItem message. Does not implicitly {@link chat.Kuaishou.ConfigSwitchItem.verify|verify} messages.
             * @param message ConfigSwitchItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IConfigSwitchItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ConfigSwitchItem message, length delimited. Does not implicitly {@link chat.Kuaishou.ConfigSwitchItem.verify|verify} messages.
             * @param message ConfigSwitchItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IConfigSwitchItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ConfigSwitchItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ConfigSwitchItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.ConfigSwitchItem;

            /**
             * Decodes a ConfigSwitchItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ConfigSwitchItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.ConfigSwitchItem;

            /**
             * Verifies a ConfigSwitchItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ConfigSwitchItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ConfigSwitchItem
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.ConfigSwitchItem;

            /**
             * Creates a plain object from a ConfigSwitchItem message. Also converts values to other types if specified.
             * @param message ConfigSwitchItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.ConfigSwitchItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ConfigSwitchItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ConfigSwitchItem
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ConfigSwitchItem {

            /** ConfigSwitchType enum. */
            enum ConfigSwitchType {
                UNKNOWN = 0,
                HIDE_BARRAGE = 1,
                HIDE_SPECIAL_EFFECT = 2
            }
        }

        /** Properties of a SCWebLiveSpecialAccountConfigState. */
        interface ISCWebLiveSpecialAccountConfigState {

            /** SCWebLiveSpecialAccountConfigState configSwitchItem */
            configSwitchItem?: (chat.Kuaishou.IConfigSwitchItem|null);

            /** SCWebLiveSpecialAccountConfigState timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a SCWebLiveSpecialAccountConfigState. */
        class SCWebLiveSpecialAccountConfigState implements ISCWebLiveSpecialAccountConfigState {

            /**
             * Constructs a new SCWebLiveSpecialAccountConfigState.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCWebLiveSpecialAccountConfigState);

            /** SCWebLiveSpecialAccountConfigState configSwitchItem. */
            public configSwitchItem?: (chat.Kuaishou.IConfigSwitchItem|null);

            /** SCWebLiveSpecialAccountConfigState timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new SCWebLiveSpecialAccountConfigState instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCWebLiveSpecialAccountConfigState instance
             */
            public static create(properties?: chat.Kuaishou.ISCWebLiveSpecialAccountConfigState): chat.Kuaishou.SCWebLiveSpecialAccountConfigState;

            /**
             * Encodes the specified SCWebLiveSpecialAccountConfigState message. Does not implicitly {@link chat.Kuaishou.SCWebLiveSpecialAccountConfigState.verify|verify} messages.
             * @param message SCWebLiveSpecialAccountConfigState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCWebLiveSpecialAccountConfigState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCWebLiveSpecialAccountConfigState message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebLiveSpecialAccountConfigState.verify|verify} messages.
             * @param message SCWebLiveSpecialAccountConfigState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCWebLiveSpecialAccountConfigState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCWebLiveSpecialAccountConfigState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCWebLiveSpecialAccountConfigState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCWebLiveSpecialAccountConfigState;

            /**
             * Decodes a SCWebLiveSpecialAccountConfigState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCWebLiveSpecialAccountConfigState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCWebLiveSpecialAccountConfigState;

            /**
             * Verifies a SCWebLiveSpecialAccountConfigState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCWebLiveSpecialAccountConfigState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCWebLiveSpecialAccountConfigState
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCWebLiveSpecialAccountConfigState;

            /**
             * Creates a plain object from a SCWebLiveSpecialAccountConfigState message. Also converts values to other types if specified.
             * @param message SCWebLiveSpecialAccountConfigState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCWebLiveSpecialAccountConfigState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCWebLiveSpecialAccountConfigState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCWebLiveSpecialAccountConfigState
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a LiveCdnNodeView. */
        interface ILiveCdnNodeView {

            /** LiveCdnNodeView cdn */
            cdn?: (string|null);

            /** LiveCdnNodeView url */
            url?: (string|null);

            /** LiveCdnNodeView freeTraffic */
            freeTraffic?: (boolean|null);
        }

        /** Represents a LiveCdnNodeView. */
        class LiveCdnNodeView implements ILiveCdnNodeView {

            /**
             * Constructs a new LiveCdnNodeView.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ILiveCdnNodeView);

            /** LiveCdnNodeView cdn. */
            public cdn: string;

            /** LiveCdnNodeView url. */
            public url: string;

            /** LiveCdnNodeView freeTraffic. */
            public freeTraffic: boolean;

            /**
             * Creates a new LiveCdnNodeView instance using the specified properties.
             * @param [properties] Properties to set
             * @returns LiveCdnNodeView instance
             */
            public static create(properties?: chat.Kuaishou.ILiveCdnNodeView): chat.Kuaishou.LiveCdnNodeView;

            /**
             * Encodes the specified LiveCdnNodeView message. Does not implicitly {@link chat.Kuaishou.LiveCdnNodeView.verify|verify} messages.
             * @param message LiveCdnNodeView message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ILiveCdnNodeView, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified LiveCdnNodeView message, length delimited. Does not implicitly {@link chat.Kuaishou.LiveCdnNodeView.verify|verify} messages.
             * @param message LiveCdnNodeView message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ILiveCdnNodeView, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a LiveCdnNodeView message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns LiveCdnNodeView
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.LiveCdnNodeView;

            /**
             * Decodes a LiveCdnNodeView message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns LiveCdnNodeView
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.LiveCdnNodeView;

            /**
             * Verifies a LiveCdnNodeView message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a LiveCdnNodeView message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns LiveCdnNodeView
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.LiveCdnNodeView;

            /**
             * Creates a plain object from a LiveCdnNodeView message. Also converts values to other types if specified.
             * @param message LiveCdnNodeView
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.LiveCdnNodeView, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this LiveCdnNodeView to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for LiveCdnNodeView
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an AuditAudienceMask. */
        interface IAuditAudienceMask {

            /** AuditAudienceMask iconCdnNodeView */
            iconCdnNodeView?: (chat.Kuaishou.ILiveCdnNodeView|null);

            /** AuditAudienceMask title */
            title?: (string|null);

            /** AuditAudienceMask detail */
            detail?: (string|null);
        }

        /** Represents an AuditAudienceMask. */
        class AuditAudienceMask implements IAuditAudienceMask {

            /**
             * Constructs a new AuditAudienceMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IAuditAudienceMask);

            /** AuditAudienceMask iconCdnNodeView. */
            public iconCdnNodeView?: (chat.Kuaishou.ILiveCdnNodeView|null);

            /** AuditAudienceMask title. */
            public title: string;

            /** AuditAudienceMask detail. */
            public detail: string;

            /**
             * Creates a new AuditAudienceMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AuditAudienceMask instance
             */
            public static create(properties?: chat.Kuaishou.IAuditAudienceMask): chat.Kuaishou.AuditAudienceMask;

            /**
             * Encodes the specified AuditAudienceMask message. Does not implicitly {@link chat.Kuaishou.AuditAudienceMask.verify|verify} messages.
             * @param message AuditAudienceMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IAuditAudienceMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified AuditAudienceMask message, length delimited. Does not implicitly {@link chat.Kuaishou.AuditAudienceMask.verify|verify} messages.
             * @param message AuditAudienceMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IAuditAudienceMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an AuditAudienceMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AuditAudienceMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.AuditAudienceMask;

            /**
             * Decodes an AuditAudienceMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AuditAudienceMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.AuditAudienceMask;

            /**
             * Verifies an AuditAudienceMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AuditAudienceMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AuditAudienceMask
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.AuditAudienceMask;

            /**
             * Creates a plain object from an AuditAudienceMask message. Also converts values to other types if specified.
             * @param message AuditAudienceMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.AuditAudienceMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AuditAudienceMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for AuditAudienceMask
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCLiveWarningMaskStatusChangedAudience. */
        interface ISCLiveWarningMaskStatusChangedAudience {

            /** SCLiveWarningMaskStatusChangedAudience displayMask */
            displayMask?: (boolean|null);

            /** SCLiveWarningMaskStatusChangedAudience warningMask */
            warningMask?: (chat.Kuaishou.IAuditAudienceMask|null);
        }

        /** Represents a SCLiveWarningMaskStatusChangedAudience. */
        class SCLiveWarningMaskStatusChangedAudience implements ISCLiveWarningMaskStatusChangedAudience {

            /**
             * Constructs a new SCLiveWarningMaskStatusChangedAudience.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCLiveWarningMaskStatusChangedAudience);

            /** SCLiveWarningMaskStatusChangedAudience displayMask. */
            public displayMask: boolean;

            /** SCLiveWarningMaskStatusChangedAudience warningMask. */
            public warningMask?: (chat.Kuaishou.IAuditAudienceMask|null);

            /**
             * Creates a new SCLiveWarningMaskStatusChangedAudience instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCLiveWarningMaskStatusChangedAudience instance
             */
            public static create(properties?: chat.Kuaishou.ISCLiveWarningMaskStatusChangedAudience): chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience;

            /**
             * Encodes the specified SCLiveWarningMaskStatusChangedAudience message. Does not implicitly {@link chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience.verify|verify} messages.
             * @param message SCLiveWarningMaskStatusChangedAudience message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCLiveWarningMaskStatusChangedAudience, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCLiveWarningMaskStatusChangedAudience message, length delimited. Does not implicitly {@link chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience.verify|verify} messages.
             * @param message SCLiveWarningMaskStatusChangedAudience message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCLiveWarningMaskStatusChangedAudience, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCLiveWarningMaskStatusChangedAudience message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCLiveWarningMaskStatusChangedAudience
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience;

            /**
             * Decodes a SCLiveWarningMaskStatusChangedAudience message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCLiveWarningMaskStatusChangedAudience
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience;

            /**
             * Verifies a SCLiveWarningMaskStatusChangedAudience message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCLiveWarningMaskStatusChangedAudience message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCLiveWarningMaskStatusChangedAudience
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience;

            /**
             * Creates a plain object from a SCLiveWarningMaskStatusChangedAudience message. Also converts values to other types if specified.
             * @param message SCLiveWarningMaskStatusChangedAudience
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCLiveWarningMaskStatusChangedAudience to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCLiveWarningMaskStatusChangedAudience
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** PayloadType enum. */
        enum PayloadType {
            UNKNOWN = 0,
            CS_HEARTBEAT = 1,
            CS_ERROR = 3,
            CS_PING = 4,
            PS_HOST_INFO = 51,
            SC_HEARTBEAT_ACK = 101,
            SC_ECHO = 102,
            SC_ERROR = 103,
            SC_PING_ACK = 104,
            SC_INFO = 105,
            CS_ENTER_ROOM = 200,
            CS_USER_PAUSE = 201,
            CS_USER_EXIT = 202,
            CS_AUTHOR_PUSH_TRAFFIC_ZERO = 203,
            CS_HORSE_RACING = 204,
            CS_RACE_LOSE = 205,
            CS_VOIP_SIGNAL = 206,
            SC_ENTER_ROOM_ACK = 300,
            SC_AUTHOR_PAUSE = 301,
            SC_AUTHOR_RESUME = 302,
            SC_AUTHOR_PUSH_TRAFFIC_ZERO = 303,
            SC_AUTHOR_HEARTBEAT_MISS = 304,
            SC_PIP_STARTED = 305,
            SC_PIP_ENDED = 306,
            SC_HORSE_RACING_ACK = 307,
            SC_VOIP_SIGNAL = 308,
            SC_FEED_PUSH = 310,
            SC_ASSISTANT_STATUS = 311,
            SC_REFRESH_WALLET = 312,
            SC_LIVE_CHAT_CALL = 320,
            SC_LIVE_CHAT_CALL_ACCEPTED = 321,
            SC_LIVE_CHAT_CALL_REJECTED = 322,
            SC_LIVE_CHAT_READY = 323,
            SC_LIVE_CHAT_GUEST_END = 324,
            SC_LIVE_CHAT_ENDED = 325,
            SC_RENDERING_MAGIC_FACE_DISABLE = 326,
            SC_RENDERING_MAGIC_FACE_ENABLE = 327,
            SC_RED_PACK_FEED = 330,
            SC_LIVE_WATCHING_LIST = 340,
            SC_LIVE_QUIZ_QUESTION_ASKED = 350,
            SC_LIVE_QUIZ_QUESTION_REVIEWED = 351,
            SC_LIVE_QUIZ_SYNC = 352,
            SC_LIVE_QUIZ_ENDED = 353,
            SC_LIVE_QUIZ_WINNERS = 354,
            SC_SUSPECTED_VIOLATION = 355,
            SC_SHOP_OPENED = 360,
            SC_SHOP_CLOSED = 361,
            SC_GUESS_OPENED = 370,
            SC_GUESS_CLOSED = 371,
            SC_PK_INVITATION = 380,
            SC_PK_STATISTIC = 381,
            SC_RIDDLE_OPENED = 390,
            SC_RIDDLE_CLOESED = 391,
            SC_RIDE_CHANGED = 412,
            SC_BET_CHANGED = 441,
            SC_BET_CLOSED = 442,
            SC_LIVE_SPECIAL_ACCOUNT_CONFIG_STATE = 645,
            SC_LIVE_WARNING_MASK_STATUS_CHANGED_AUDIENCE = 758
        }

        /** Properties of a SocketMessage. */
        interface ISocketMessage {

            /** SocketMessage payloadType */
            payloadType?: (chat.Kuaishou.PayloadType|null);

            /** SocketMessage compressionType */
            compressionType?: (chat.Kuaishou.SocketMessage.CompressionType|null);

            /** SocketMessage payload */
            payload?: (Uint8Array|null);
        }

        /** Represents a SocketMessage. */
        class SocketMessage implements ISocketMessage {

            /**
             * Constructs a new SocketMessage.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISocketMessage);

            /** SocketMessage payloadType. */
            public payloadType: chat.Kuaishou.PayloadType;

            /** SocketMessage compressionType. */
            public compressionType: chat.Kuaishou.SocketMessage.CompressionType;

            /** SocketMessage payload. */
            public payload: Uint8Array;

            /**
             * Creates a new SocketMessage instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SocketMessage instance
             */
            public static create(properties?: chat.Kuaishou.ISocketMessage): chat.Kuaishou.SocketMessage;

            /**
             * Encodes the specified SocketMessage message. Does not implicitly {@link chat.Kuaishou.SocketMessage.verify|verify} messages.
             * @param message SocketMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISocketMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SocketMessage message, length delimited. Does not implicitly {@link chat.Kuaishou.SocketMessage.verify|verify} messages.
             * @param message SocketMessage message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISocketMessage, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SocketMessage message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SocketMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SocketMessage;

            /**
             * Decodes a SocketMessage message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SocketMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SocketMessage;

            /**
             * Verifies a SocketMessage message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SocketMessage message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SocketMessage
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SocketMessage;

            /**
             * Creates a plain object from a SocketMessage message. Also converts values to other types if specified.
             * @param message SocketMessage
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SocketMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SocketMessage to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SocketMessage
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SocketMessage {

            /** CompressionType enum. */
            enum CompressionType {
                UNKNOWN = 0,
                NONE = 1,
                GZIP = 2,
                AES = 3
            }
        }

        /** Properties of a CSHeartbeat. */
        interface ICSHeartbeat {

            /** CSHeartbeat timestamp */
            timestamp?: (number|Long|null);
        }

        /** Represents a CSHeartbeat. */
        class CSHeartbeat implements ICSHeartbeat {

            /**
             * Constructs a new CSHeartbeat.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ICSHeartbeat);

            /** CSHeartbeat timestamp. */
            public timestamp: (number|Long);

            /**
             * Creates a new CSHeartbeat instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CSHeartbeat instance
             */
            public static create(properties?: chat.Kuaishou.ICSHeartbeat): chat.Kuaishou.CSHeartbeat;

            /**
             * Encodes the specified CSHeartbeat message. Does not implicitly {@link chat.Kuaishou.CSHeartbeat.verify|verify} messages.
             * @param message CSHeartbeat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ICSHeartbeat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CSHeartbeat message, length delimited. Does not implicitly {@link chat.Kuaishou.CSHeartbeat.verify|verify} messages.
             * @param message CSHeartbeat message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ICSHeartbeat, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CSHeartbeat message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CSHeartbeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.CSHeartbeat;

            /**
             * Decodes a CSHeartbeat message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CSHeartbeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.CSHeartbeat;

            /**
             * Verifies a CSHeartbeat message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CSHeartbeat message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CSHeartbeat
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.CSHeartbeat;

            /**
             * Creates a plain object from a CSHeartbeat message. Also converts values to other types if specified.
             * @param message CSHeartbeat
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.CSHeartbeat, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CSHeartbeat to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CSHeartbeat
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCHeartbeatAck. */
        interface ISCHeartbeatAck {

            /** SCHeartbeatAck timestamp */
            timestamp?: (number|Long|null);

            /** SCHeartbeatAck clientTimestamp */
            clientTimestamp?: (number|Long|null);
        }

        /** Represents a SCHeartbeatAck. */
        class SCHeartbeatAck implements ISCHeartbeatAck {

            /**
             * Constructs a new SCHeartbeatAck.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCHeartbeatAck);

            /** SCHeartbeatAck timestamp. */
            public timestamp: (number|Long);

            /** SCHeartbeatAck clientTimestamp. */
            public clientTimestamp: (number|Long);

            /**
             * Creates a new SCHeartbeatAck instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCHeartbeatAck instance
             */
            public static create(properties?: chat.Kuaishou.ISCHeartbeatAck): chat.Kuaishou.SCHeartbeatAck;

            /**
             * Encodes the specified SCHeartbeatAck message. Does not implicitly {@link chat.Kuaishou.SCHeartbeatAck.verify|verify} messages.
             * @param message SCHeartbeatAck message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCHeartbeatAck, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCHeartbeatAck message, length delimited. Does not implicitly {@link chat.Kuaishou.SCHeartbeatAck.verify|verify} messages.
             * @param message SCHeartbeatAck message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCHeartbeatAck, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCHeartbeatAck message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCHeartbeatAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCHeartbeatAck;

            /**
             * Decodes a SCHeartbeatAck message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCHeartbeatAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCHeartbeatAck;

            /**
             * Verifies a SCHeartbeatAck message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCHeartbeatAck message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCHeartbeatAck
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCHeartbeatAck;

            /**
             * Creates a plain object from a SCHeartbeatAck message. Also converts values to other types if specified.
             * @param message SCHeartbeatAck
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCHeartbeatAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCHeartbeatAck to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCHeartbeatAck
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCError. */
        interface ISCError {

            /** SCError code */
            code?: (number|null);

            /** SCError msg */
            msg?: (string|null);

            /** SCError subCode */
            subCode?: (number|null);
        }

        /** Represents a SCError. */
        class SCError implements ISCError {

            /**
             * Constructs a new SCError.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCError);

            /** SCError code. */
            public code: number;

            /** SCError msg. */
            public msg: string;

            /** SCError subCode. */
            public subCode: number;

            /**
             * Creates a new SCError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCError instance
             */
            public static create(properties?: chat.Kuaishou.ISCError): chat.Kuaishou.SCError;

            /**
             * Encodes the specified SCError message. Does not implicitly {@link chat.Kuaishou.SCError.verify|verify} messages.
             * @param message SCError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCError message, length delimited. Does not implicitly {@link chat.Kuaishou.SCError.verify|verify} messages.
             * @param message SCError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCError;

            /**
             * Decodes a SCError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCError;

            /**
             * Verifies a SCError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCError
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCError;

            /**
             * Creates a plain object from a SCError message. Also converts values to other types if specified.
             * @param message SCError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCError
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCInfo. */
        interface ISCInfo {

            /** SCInfo code */
            code?: (number|null);

            /** SCInfo msg */
            msg?: (string|null);
        }

        /** Represents a SCInfo. */
        class SCInfo implements ISCInfo {

            /**
             * Constructs a new SCInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCInfo);

            /** SCInfo code. */
            public code: number;

            /** SCInfo msg. */
            public msg: string;

            /**
             * Creates a new SCInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCInfo instance
             */
            public static create(properties?: chat.Kuaishou.ISCInfo): chat.Kuaishou.SCInfo;

            /**
             * Encodes the specified SCInfo message. Does not implicitly {@link chat.Kuaishou.SCInfo.verify|verify} messages.
             * @param message SCInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCInfo message, length delimited. Does not implicitly {@link chat.Kuaishou.SCInfo.verify|verify} messages.
             * @param message SCInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCInfo;

            /**
             * Decodes a SCInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCInfo;

            /**
             * Verifies a SCInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCInfo
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCInfo;

            /**
             * Creates a plain object from a SCInfo message. Also converts values to other types if specified.
             * @param message SCInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CSError. */
        interface ICSError {

            /** CSError code */
            code?: (number|null);
        }

        /** Represents a CSError. */
        class CSError implements ICSError {

            /**
             * Constructs a new CSError.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ICSError);

            /** CSError code. */
            public code: number;

            /**
             * Creates a new CSError instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CSError instance
             */
            public static create(properties?: chat.Kuaishou.ICSError): chat.Kuaishou.CSError;

            /**
             * Encodes the specified CSError message. Does not implicitly {@link chat.Kuaishou.CSError.verify|verify} messages.
             * @param message CSError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ICSError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CSError message, length delimited. Does not implicitly {@link chat.Kuaishou.CSError.verify|verify} messages.
             * @param message CSError message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ICSError, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CSError message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CSError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.CSError;

            /**
             * Decodes a CSError message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CSError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.CSError;

            /**
             * Verifies a CSError message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CSError message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CSError
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.CSError;

            /**
             * Creates a plain object from a CSError message. Also converts values to other types if specified.
             * @param message CSError
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.CSError, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CSError to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CSError
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CSPing. */
        interface ICSPing {

            /** CSPing echoData */
            echoData?: (string|null);

            /** CSPing clientId */
            clientId?: (chat.Kuaishou.ClientId|null);

            /** CSPing deviceId */
            deviceId?: (string|null);

            /** CSPing appVer */
            appVer?: (string|null);
        }

        /** Represents a CSPing. */
        class CSPing implements ICSPing {

            /**
             * Constructs a new CSPing.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ICSPing);

            /** CSPing echoData. */
            public echoData: string;

            /** CSPing clientId. */
            public clientId: chat.Kuaishou.ClientId;

            /** CSPing deviceId. */
            public deviceId: string;

            /** CSPing appVer. */
            public appVer: string;

            /**
             * Creates a new CSPing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CSPing instance
             */
            public static create(properties?: chat.Kuaishou.ICSPing): chat.Kuaishou.CSPing;

            /**
             * Encodes the specified CSPing message. Does not implicitly {@link chat.Kuaishou.CSPing.verify|verify} messages.
             * @param message CSPing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ICSPing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CSPing message, length delimited. Does not implicitly {@link chat.Kuaishou.CSPing.verify|verify} messages.
             * @param message CSPing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ICSPing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CSPing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CSPing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.CSPing;

            /**
             * Decodes a CSPing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CSPing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.CSPing;

            /**
             * Verifies a CSPing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CSPing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CSPing
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.CSPing;

            /**
             * Creates a plain object from a CSPing message. Also converts values to other types if specified.
             * @param message CSPing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.CSPing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CSPing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CSPing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCPingAck. */
        interface ISCPingAck {

            /** SCPingAck echoData */
            echoData?: (string|null);
        }

        /** Represents a SCPingAck. */
        class SCPingAck implements ISCPingAck {

            /**
             * Constructs a new SCPingAck.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCPingAck);

            /** SCPingAck echoData. */
            public echoData: string;

            /**
             * Creates a new SCPingAck instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCPingAck instance
             */
            public static create(properties?: chat.Kuaishou.ISCPingAck): chat.Kuaishou.SCPingAck;

            /**
             * Encodes the specified SCPingAck message. Does not implicitly {@link chat.Kuaishou.SCPingAck.verify|verify} messages.
             * @param message SCPingAck message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCPingAck, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCPingAck message, length delimited. Does not implicitly {@link chat.Kuaishou.SCPingAck.verify|verify} messages.
             * @param message SCPingAck message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCPingAck, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCPingAck message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCPingAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCPingAck;

            /**
             * Decodes a SCPingAck message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCPingAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCPingAck;

            /**
             * Verifies a SCPingAck message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCPingAck message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCPingAck
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCPingAck;

            /**
             * Creates a plain object from a SCPingAck message. Also converts values to other types if specified.
             * @param message SCPingAck
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCPingAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCPingAck to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCPingAck
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a SCEcho. */
        interface ISCEcho {

            /** SCEcho content */
            content?: (string|null);
        }

        /** Represents a SCEcho. */
        class SCEcho implements ISCEcho {

            /**
             * Constructs a new SCEcho.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.ISCEcho);

            /** SCEcho content. */
            public content: string;

            /**
             * Creates a new SCEcho instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SCEcho instance
             */
            public static create(properties?: chat.Kuaishou.ISCEcho): chat.Kuaishou.SCEcho;

            /**
             * Encodes the specified SCEcho message. Does not implicitly {@link chat.Kuaishou.SCEcho.verify|verify} messages.
             * @param message SCEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.ISCEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SCEcho message, length delimited. Does not implicitly {@link chat.Kuaishou.SCEcho.verify|verify} messages.
             * @param message SCEcho message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.ISCEcho, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SCEcho message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SCEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.SCEcho;

            /**
             * Decodes a SCEcho message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SCEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.SCEcho;

            /**
             * Verifies a SCEcho message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SCEcho message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SCEcho
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.SCEcho;

            /**
             * Creates a plain object from a SCEcho message. Also converts values to other types if specified.
             * @param message SCEcho
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.SCEcho, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SCEcho to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SCEcho
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PSHostInfo. */
        interface IPSHostInfo {

            /** PSHostInfo ip */
            ip?: (string|null);

            /** PSHostInfo port */
            port?: (number|null);
        }

        /** Represents a PSHostInfo. */
        class PSHostInfo implements IPSHostInfo {

            /**
             * Constructs a new PSHostInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IPSHostInfo);

            /** PSHostInfo ip. */
            public ip: string;

            /** PSHostInfo port. */
            public port: number;

            /**
             * Creates a new PSHostInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PSHostInfo instance
             */
            public static create(properties?: chat.Kuaishou.IPSHostInfo): chat.Kuaishou.PSHostInfo;

            /**
             * Encodes the specified PSHostInfo message. Does not implicitly {@link chat.Kuaishou.PSHostInfo.verify|verify} messages.
             * @param message PSHostInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IPSHostInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PSHostInfo message, length delimited. Does not implicitly {@link chat.Kuaishou.PSHostInfo.verify|verify} messages.
             * @param message PSHostInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IPSHostInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PSHostInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PSHostInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.PSHostInfo;

            /**
             * Decodes a PSHostInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PSHostInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.PSHostInfo;

            /**
             * Verifies a PSHostInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PSHostInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PSHostInfo
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.PSHostInfo;

            /**
             * Creates a plain object from a PSHostInfo message. Also converts values to other types if specified.
             * @param message PSHostInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.PSHostInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PSHostInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PSHostInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PicUrl. */
        interface IPicUrl {

            /** PicUrl cdn */
            cdn?: (string|null);

            /** PicUrl url */
            url?: (string|null);

            /** PicUrl urlPattern */
            urlPattern?: (string|null);

            /** PicUrl ip */
            ip?: (string|null);
        }

        /** Represents a PicUrl. */
        class PicUrl implements IPicUrl {

            /**
             * Constructs a new PicUrl.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IPicUrl);

            /** PicUrl cdn. */
            public cdn: string;

            /** PicUrl url. */
            public url: string;

            /** PicUrl urlPattern. */
            public urlPattern: string;

            /** PicUrl ip. */
            public ip: string;

            /**
             * Creates a new PicUrl instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PicUrl instance
             */
            public static create(properties?: chat.Kuaishou.IPicUrl): chat.Kuaishou.PicUrl;

            /**
             * Encodes the specified PicUrl message. Does not implicitly {@link chat.Kuaishou.PicUrl.verify|verify} messages.
             * @param message PicUrl message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IPicUrl, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PicUrl message, length delimited. Does not implicitly {@link chat.Kuaishou.PicUrl.verify|verify} messages.
             * @param message PicUrl message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IPicUrl, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PicUrl message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PicUrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.PicUrl;

            /**
             * Decodes a PicUrl message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PicUrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.PicUrl;

            /**
             * Verifies a PicUrl message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PicUrl message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PicUrl
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.PicUrl;

            /**
             * Creates a plain object from a PicUrl message. Also converts values to other types if specified.
             * @param message PicUrl
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.PicUrl, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PicUrl to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PicUrl
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a UserInfo. */
        interface IUserInfo {

            /** UserInfo userId */
            userId?: (number|Long|null);

            /** UserInfo userName */
            userName?: (string|null);

            /** UserInfo userGender */
            userGender?: (string|null);

            /** UserInfo userText */
            userText?: (string|null);

            /** UserInfo headUrls */
            headUrls?: (chat.Kuaishou.IPicUrl|null);

            /** UserInfo verified */
            verified?: (boolean|null);

            /** UserInfo sUserId */
            sUserId?: (string|null);

            /** UserInfo httpsHeadUrls */
            httpsHeadUrls?: (chat.Kuaishou.IPicUrl|null);

            /** UserInfo kwaiId */
            kwaiId?: (string|null);
        }

        /** Represents a UserInfo. */
        class UserInfo implements IUserInfo {

            /**
             * Constructs a new UserInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: chat.Kuaishou.IUserInfo);

            /** UserInfo userId. */
            public userId: (number|Long);

            /** UserInfo userName. */
            public userName: string;

            /** UserInfo userGender. */
            public userGender: string;

            /** UserInfo userText. */
            public userText: string;

            /** UserInfo headUrls. */
            public headUrls?: (chat.Kuaishou.IPicUrl|null);

            /** UserInfo verified. */
            public verified: boolean;

            /** UserInfo sUserId. */
            public sUserId: string;

            /** UserInfo httpsHeadUrls. */
            public httpsHeadUrls?: (chat.Kuaishou.IPicUrl|null);

            /** UserInfo kwaiId. */
            public kwaiId: string;

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserInfo instance
             */
            public static create(properties?: chat.Kuaishou.IUserInfo): chat.Kuaishou.UserInfo;

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link chat.Kuaishou.UserInfo.verify|verify} messages.
             * @param message UserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: chat.Kuaishou.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link chat.Kuaishou.UserInfo.verify|verify} messages.
             * @param message UserInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: chat.Kuaishou.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): chat.Kuaishou.UserInfo;

            /**
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): chat.Kuaishou.UserInfo;

            /**
             * Verifies a UserInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserInfo
             */
            public static fromObject(object: { [k: string]: any }): chat.Kuaishou.UserInfo;

            /**
             * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
             * @param message UserInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: chat.Kuaishou.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UserInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** ClientId enum. */
        enum ClientId {
            NONE = 0,
            IPHONE = 1,
            ANDROID = 2,
            WEB = 3,
            PC = 6,
            IPHONE_LIVE_MATE = 8,
            ANDROID_LIVE_MATE = 9
        }
    }
}
