/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const chat = $root.chat = (() => {

    /**
     * Namespace chat.
     * @exports chat
     * @namespace
     */
    const chat = {};

    chat.Kuaishou = (function() {

        /**
         * Properties of a Kuaishou.
         * @memberof chat
         * @interface IKuaishou
         */

        /**
         * Constructs a new Kuaishou.
         * @memberof chat
         * @classdesc Represents a Kuaishou.
         * @implements IKuaishou
         * @constructor
         * @param {chat.IKuaishou=} [properties] Properties to set
         */
        function Kuaishou(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Kuaishou instance using the specified properties.
         * @function create
         * @memberof chat.Kuaishou
         * @static
         * @param {chat.IKuaishou=} [properties] Properties to set
         * @returns {chat.Kuaishou} Kuaishou instance
         */
        Kuaishou.create = function create(properties) {
            return new Kuaishou(properties);
        };

        /**
         * Encodes the specified Kuaishou message. Does not implicitly {@link chat.Kuaishou.verify|verify} messages.
         * @function encode
         * @memberof chat.Kuaishou
         * @static
         * @param {chat.IKuaishou} message Kuaishou message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Kuaishou.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Kuaishou message, length delimited. Does not implicitly {@link chat.Kuaishou.verify|verify} messages.
         * @function encodeDelimited
         * @memberof chat.Kuaishou
         * @static
         * @param {chat.IKuaishou} message Kuaishou message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Kuaishou.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Kuaishou message from the specified reader or buffer.
         * @function decode
         * @memberof chat.Kuaishou
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {chat.Kuaishou} Kuaishou
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Kuaishou.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Kuaishou message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof chat.Kuaishou
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {chat.Kuaishou} Kuaishou
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Kuaishou.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Kuaishou message.
         * @function verify
         * @memberof chat.Kuaishou
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Kuaishou.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Kuaishou message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof chat.Kuaishou
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {chat.Kuaishou} Kuaishou
         */
        Kuaishou.fromObject = function fromObject(object) {
            if (object instanceof $root.chat.Kuaishou)
                return object;
            return new $root.chat.Kuaishou();
        };

        /**
         * Creates a plain object from a Kuaishou message. Also converts values to other types if specified.
         * @function toObject
         * @memberof chat.Kuaishou
         * @static
         * @param {chat.Kuaishou} message Kuaishou
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Kuaishou.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Kuaishou to JSON.
         * @function toJSON
         * @memberof chat.Kuaishou
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Kuaishou.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Kuaishou
         * @function getTypeUrl
         * @memberof chat.Kuaishou
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Kuaishou.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/chat.Kuaishou";
        };

        Kuaishou.SimpleUserInfo = (function() {

            /**
             * Properties of a SimpleUserInfo.
             * @memberof chat.Kuaishou
             * @interface ISimpleUserInfo
             * @property {string|null} [principalId] SimpleUserInfo principalId
             * @property {string|null} [userName] SimpleUserInfo userName
             * @property {string|null} [headUrl] SimpleUserInfo headUrl
             */

            /**
             * Constructs a new SimpleUserInfo.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SimpleUserInfo.
             * @implements ISimpleUserInfo
             * @constructor
             * @param {chat.Kuaishou.ISimpleUserInfo=} [properties] Properties to set
             */
            function SimpleUserInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SimpleUserInfo principalId.
             * @member {string} principalId
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @instance
             */
            SimpleUserInfo.prototype.principalId = "";

            /**
             * SimpleUserInfo userName.
             * @member {string} userName
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @instance
             */
            SimpleUserInfo.prototype.userName = "";

            /**
             * SimpleUserInfo headUrl.
             * @member {string} headUrl
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @instance
             */
            SimpleUserInfo.prototype.headUrl = "";

            /**
             * Creates a new SimpleUserInfo instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @static
             * @param {chat.Kuaishou.ISimpleUserInfo=} [properties] Properties to set
             * @returns {chat.Kuaishou.SimpleUserInfo} SimpleUserInfo instance
             */
            SimpleUserInfo.create = function create(properties) {
                return new SimpleUserInfo(properties);
            };

            /**
             * Encodes the specified SimpleUserInfo message. Does not implicitly {@link chat.Kuaishou.SimpleUserInfo.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @static
             * @param {chat.Kuaishou.ISimpleUserInfo} message SimpleUserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimpleUserInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.principalId != null && Object.hasOwnProperty.call(message, "principalId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.principalId);
                if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
                if (message.headUrl != null && Object.hasOwnProperty.call(message, "headUrl"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.headUrl);
                return writer;
            };

            /**
             * Encodes the specified SimpleUserInfo message, length delimited. Does not implicitly {@link chat.Kuaishou.SimpleUserInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @static
             * @param {chat.Kuaishou.ISimpleUserInfo} message SimpleUserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SimpleUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SimpleUserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SimpleUserInfo} SimpleUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimpleUserInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SimpleUserInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.principalId = reader.string();
                            break;
                        }
                    case 2: {
                            message.userName = reader.string();
                            break;
                        }
                    case 3: {
                            message.headUrl = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SimpleUserInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SimpleUserInfo} SimpleUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SimpleUserInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SimpleUserInfo message.
             * @function verify
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SimpleUserInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.principalId != null && message.hasOwnProperty("principalId"))
                    if (!$util.isString(message.principalId))
                        return "principalId: string expected";
                if (message.userName != null && message.hasOwnProperty("userName"))
                    if (!$util.isString(message.userName))
                        return "userName: string expected";
                if (message.headUrl != null && message.hasOwnProperty("headUrl"))
                    if (!$util.isString(message.headUrl))
                        return "headUrl: string expected";
                return null;
            };

            /**
             * Creates a SimpleUserInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SimpleUserInfo} SimpleUserInfo
             */
            SimpleUserInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SimpleUserInfo)
                    return object;
                let message = new $root.chat.Kuaishou.SimpleUserInfo();
                if (object.principalId != null)
                    message.principalId = String(object.principalId);
                if (object.userName != null)
                    message.userName = String(object.userName);
                if (object.headUrl != null)
                    message.headUrl = String(object.headUrl);
                return message;
            };

            /**
             * Creates a plain object from a SimpleUserInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @static
             * @param {chat.Kuaishou.SimpleUserInfo} message SimpleUserInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SimpleUserInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.principalId = "";
                    object.userName = "";
                    object.headUrl = "";
                }
                if (message.principalId != null && message.hasOwnProperty("principalId"))
                    object.principalId = message.principalId;
                if (message.userName != null && message.hasOwnProperty("userName"))
                    object.userName = message.userName;
                if (message.headUrl != null && message.hasOwnProperty("headUrl"))
                    object.headUrl = message.headUrl;
                return object;
            };

            /**
             * Converts this SimpleUserInfo to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SimpleUserInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SimpleUserInfo
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SimpleUserInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SimpleUserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SimpleUserInfo";
            };

            return SimpleUserInfo;
        })();

        /**
         * WebLiveAssistantType enum.
         * @name chat.Kuaishou.WebLiveAssistantType
         * @enum {number}
         * @property {number} UNKNOWN_ASSISTANT_TYPE=0 UNKNOWN_ASSISTANT_TYPE value
         * @property {number} SUPER=1 SUPER value
         * @property {number} JUNIOR=2 JUNIOR value
         */
        Kuaishou.WebLiveAssistantType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_ASSISTANT_TYPE"] = 0;
            values[valuesById[1] = "SUPER"] = 1;
            values[valuesById[2] = "JUNIOR"] = 2;
            return values;
        })();

        Kuaishou.LiveAudienceState = (function() {

            /**
             * Properties of a LiveAudienceState.
             * @memberof chat.Kuaishou
             * @interface ILiveAudienceState
             * @property {boolean|null} [isFromFansTop] LiveAudienceState isFromFansTop
             * @property {boolean|null} [isKoi] LiveAudienceState isKoi
             * @property {chat.Kuaishou.LiveAudienceState.AssistantType|null} [assistantType] LiveAudienceState assistantType
             * @property {number|null} [fansGroupIntimacyLevel] LiveAudienceState fansGroupIntimacyLevel
             * @property {chat.Kuaishou.IGzoneNameplate|null} [nameplate] LiveAudienceState nameplate
             * @property {chat.Kuaishou.ILiveFansGroupState|null} [liveFansGroupState] LiveAudienceState liveFansGroupState
             * @property {number|null} [wealthGrade] LiveAudienceState wealthGrade
             * @property {string|null} [badgeKey] LiveAudienceState badgeKey
             */

            /**
             * Constructs a new LiveAudienceState.
             * @memberof chat.Kuaishou
             * @classdesc Represents a LiveAudienceState.
             * @implements ILiveAudienceState
             * @constructor
             * @param {chat.Kuaishou.ILiveAudienceState=} [properties] Properties to set
             */
            function LiveAudienceState(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LiveAudienceState isFromFansTop.
             * @member {boolean} isFromFansTop
             * @memberof chat.Kuaishou.LiveAudienceState
             * @instance
             */
            LiveAudienceState.prototype.isFromFansTop = false;

            /**
             * LiveAudienceState isKoi.
             * @member {boolean} isKoi
             * @memberof chat.Kuaishou.LiveAudienceState
             * @instance
             */
            LiveAudienceState.prototype.isKoi = false;

            /**
             * LiveAudienceState assistantType.
             * @member {chat.Kuaishou.LiveAudienceState.AssistantType} assistantType
             * @memberof chat.Kuaishou.LiveAudienceState
             * @instance
             */
            LiveAudienceState.prototype.assistantType = 0;

            /**
             * LiveAudienceState fansGroupIntimacyLevel.
             * @member {number} fansGroupIntimacyLevel
             * @memberof chat.Kuaishou.LiveAudienceState
             * @instance
             */
            LiveAudienceState.prototype.fansGroupIntimacyLevel = 0;

            /**
             * LiveAudienceState nameplate.
             * @member {chat.Kuaishou.IGzoneNameplate|null|undefined} nameplate
             * @memberof chat.Kuaishou.LiveAudienceState
             * @instance
             */
            LiveAudienceState.prototype.nameplate = null;

            /**
             * LiveAudienceState liveFansGroupState.
             * @member {chat.Kuaishou.ILiveFansGroupState|null|undefined} liveFansGroupState
             * @memberof chat.Kuaishou.LiveAudienceState
             * @instance
             */
            LiveAudienceState.prototype.liveFansGroupState = null;

            /**
             * LiveAudienceState wealthGrade.
             * @member {number} wealthGrade
             * @memberof chat.Kuaishou.LiveAudienceState
             * @instance
             */
            LiveAudienceState.prototype.wealthGrade = 0;

            /**
             * LiveAudienceState badgeKey.
             * @member {string} badgeKey
             * @memberof chat.Kuaishou.LiveAudienceState
             * @instance
             */
            LiveAudienceState.prototype.badgeKey = "";

            /**
             * Creates a new LiveAudienceState instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.LiveAudienceState
             * @static
             * @param {chat.Kuaishou.ILiveAudienceState=} [properties] Properties to set
             * @returns {chat.Kuaishou.LiveAudienceState} LiveAudienceState instance
             */
            LiveAudienceState.create = function create(properties) {
                return new LiveAudienceState(properties);
            };

            /**
             * Encodes the specified LiveAudienceState message. Does not implicitly {@link chat.Kuaishou.LiveAudienceState.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.LiveAudienceState
             * @static
             * @param {chat.Kuaishou.ILiveAudienceState} message LiveAudienceState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiveAudienceState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.isFromFansTop != null && Object.hasOwnProperty.call(message, "isFromFansTop"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isFromFansTop);
                if (message.isKoi != null && Object.hasOwnProperty.call(message, "isKoi"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isKoi);
                if (message.assistantType != null && Object.hasOwnProperty.call(message, "assistantType"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.assistantType);
                if (message.fansGroupIntimacyLevel != null && Object.hasOwnProperty.call(message, "fansGroupIntimacyLevel"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.fansGroupIntimacyLevel);
                if (message.nameplate != null && Object.hasOwnProperty.call(message, "nameplate"))
                    $root.chat.Kuaishou.GzoneNameplate.encode(message.nameplate, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.liveFansGroupState != null && Object.hasOwnProperty.call(message, "liveFansGroupState"))
                    $root.chat.Kuaishou.LiveFansGroupState.encode(message.liveFansGroupState, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                if (message.wealthGrade != null && Object.hasOwnProperty.call(message, "wealthGrade"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.wealthGrade);
                if (message.badgeKey != null && Object.hasOwnProperty.call(message, "badgeKey"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.badgeKey);
                return writer;
            };

            /**
             * Encodes the specified LiveAudienceState message, length delimited. Does not implicitly {@link chat.Kuaishou.LiveAudienceState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.LiveAudienceState
             * @static
             * @param {chat.Kuaishou.ILiveAudienceState} message LiveAudienceState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiveAudienceState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LiveAudienceState message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.LiveAudienceState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.LiveAudienceState} LiveAudienceState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiveAudienceState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.LiveAudienceState();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.isFromFansTop = reader.bool();
                            break;
                        }
                    case 2: {
                            message.isKoi = reader.bool();
                            break;
                        }
                    case 3: {
                            message.assistantType = reader.int32();
                            break;
                        }
                    case 4: {
                            message.fansGroupIntimacyLevel = reader.uint32();
                            break;
                        }
                    case 5: {
                            message.nameplate = $root.chat.Kuaishou.GzoneNameplate.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.liveFansGroupState = $root.chat.Kuaishou.LiveFansGroupState.decode(reader, reader.uint32());
                            break;
                        }
                    case 7: {
                            message.wealthGrade = reader.uint32();
                            break;
                        }
                    case 8: {
                            message.badgeKey = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LiveAudienceState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.LiveAudienceState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.LiveAudienceState} LiveAudienceState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiveAudienceState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LiveAudienceState message.
             * @function verify
             * @memberof chat.Kuaishou.LiveAudienceState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LiveAudienceState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.isFromFansTop != null && message.hasOwnProperty("isFromFansTop"))
                    if (typeof message.isFromFansTop !== "boolean")
                        return "isFromFansTop: boolean expected";
                if (message.isKoi != null && message.hasOwnProperty("isKoi"))
                    if (typeof message.isKoi !== "boolean")
                        return "isKoi: boolean expected";
                if (message.assistantType != null && message.hasOwnProperty("assistantType"))
                    switch (message.assistantType) {
                    default:
                        return "assistantType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.fansGroupIntimacyLevel != null && message.hasOwnProperty("fansGroupIntimacyLevel"))
                    if (!$util.isInteger(message.fansGroupIntimacyLevel))
                        return "fansGroupIntimacyLevel: integer expected";
                if (message.nameplate != null && message.hasOwnProperty("nameplate")) {
                    let error = $root.chat.Kuaishou.GzoneNameplate.verify(message.nameplate);
                    if (error)
                        return "nameplate." + error;
                }
                if (message.liveFansGroupState != null && message.hasOwnProperty("liveFansGroupState")) {
                    let error = $root.chat.Kuaishou.LiveFansGroupState.verify(message.liveFansGroupState);
                    if (error)
                        return "liveFansGroupState." + error;
                }
                if (message.wealthGrade != null && message.hasOwnProperty("wealthGrade"))
                    if (!$util.isInteger(message.wealthGrade))
                        return "wealthGrade: integer expected";
                if (message.badgeKey != null && message.hasOwnProperty("badgeKey"))
                    if (!$util.isString(message.badgeKey))
                        return "badgeKey: string expected";
                return null;
            };

            /**
             * Creates a LiveAudienceState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.LiveAudienceState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.LiveAudienceState} LiveAudienceState
             */
            LiveAudienceState.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.LiveAudienceState)
                    return object;
                let message = new $root.chat.Kuaishou.LiveAudienceState();
                if (object.isFromFansTop != null)
                    message.isFromFansTop = Boolean(object.isFromFansTop);
                if (object.isKoi != null)
                    message.isKoi = Boolean(object.isKoi);
                switch (object.assistantType) {
                default:
                    if (typeof object.assistantType === "number") {
                        message.assistantType = object.assistantType;
                        break;
                    }
                    break;
                case "UNKNOWN_ASSISTANT_TYPE":
                case 0:
                    message.assistantType = 0;
                    break;
                case "SUPER":
                case 1:
                    message.assistantType = 1;
                    break;
                case "JUNIOR":
                case 2:
                    message.assistantType = 2;
                    break;
                }
                if (object.fansGroupIntimacyLevel != null)
                    message.fansGroupIntimacyLevel = object.fansGroupIntimacyLevel >>> 0;
                if (object.nameplate != null) {
                    if (typeof object.nameplate !== "object")
                        throw TypeError(".chat.Kuaishou.LiveAudienceState.nameplate: object expected");
                    message.nameplate = $root.chat.Kuaishou.GzoneNameplate.fromObject(object.nameplate);
                }
                if (object.liveFansGroupState != null) {
                    if (typeof object.liveFansGroupState !== "object")
                        throw TypeError(".chat.Kuaishou.LiveAudienceState.liveFansGroupState: object expected");
                    message.liveFansGroupState = $root.chat.Kuaishou.LiveFansGroupState.fromObject(object.liveFansGroupState);
                }
                if (object.wealthGrade != null)
                    message.wealthGrade = object.wealthGrade >>> 0;
                if (object.badgeKey != null)
                    message.badgeKey = String(object.badgeKey);
                return message;
            };

            /**
             * Creates a plain object from a LiveAudienceState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.LiveAudienceState
             * @static
             * @param {chat.Kuaishou.LiveAudienceState} message LiveAudienceState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LiveAudienceState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.isFromFansTop = false;
                    object.isKoi = false;
                    object.assistantType = options.enums === String ? "UNKNOWN_ASSISTANT_TYPE" : 0;
                    object.fansGroupIntimacyLevel = 0;
                    object.nameplate = null;
                    object.liveFansGroupState = null;
                    object.wealthGrade = 0;
                    object.badgeKey = "";
                }
                if (message.isFromFansTop != null && message.hasOwnProperty("isFromFansTop"))
                    object.isFromFansTop = message.isFromFansTop;
                if (message.isKoi != null && message.hasOwnProperty("isKoi"))
                    object.isKoi = message.isKoi;
                if (message.assistantType != null && message.hasOwnProperty("assistantType"))
                    object.assistantType = options.enums === String ? $root.chat.Kuaishou.LiveAudienceState.AssistantType[message.assistantType] === undefined ? message.assistantType : $root.chat.Kuaishou.LiveAudienceState.AssistantType[message.assistantType] : message.assistantType;
                if (message.fansGroupIntimacyLevel != null && message.hasOwnProperty("fansGroupIntimacyLevel"))
                    object.fansGroupIntimacyLevel = message.fansGroupIntimacyLevel;
                if (message.nameplate != null && message.hasOwnProperty("nameplate"))
                    object.nameplate = $root.chat.Kuaishou.GzoneNameplate.toObject(message.nameplate, options);
                if (message.liveFansGroupState != null && message.hasOwnProperty("liveFansGroupState"))
                    object.liveFansGroupState = $root.chat.Kuaishou.LiveFansGroupState.toObject(message.liveFansGroupState, options);
                if (message.wealthGrade != null && message.hasOwnProperty("wealthGrade"))
                    object.wealthGrade = message.wealthGrade;
                if (message.badgeKey != null && message.hasOwnProperty("badgeKey"))
                    object.badgeKey = message.badgeKey;
                return object;
            };

            /**
             * Converts this LiveAudienceState to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.LiveAudienceState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LiveAudienceState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LiveAudienceState
             * @function getTypeUrl
             * @memberof chat.Kuaishou.LiveAudienceState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LiveAudienceState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.LiveAudienceState";
            };

            /**
             * AssistantType enum.
             * @name chat.Kuaishou.LiveAudienceState.AssistantType
             * @enum {number}
             * @property {number} UNKNOWN_ASSISTANT_TYPE=0 UNKNOWN_ASSISTANT_TYPE value
             * @property {number} SUPER=1 SUPER value
             * @property {number} JUNIOR=2 JUNIOR value
             */
            LiveAudienceState.AssistantType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_ASSISTANT_TYPE"] = 0;
                values[valuesById[1] = "SUPER"] = 1;
                values[valuesById[2] = "JUNIOR"] = 2;
                return values;
            })();

            return LiveAudienceState;
        })();

        Kuaishou.GzoneNameplate = (function() {

            /**
             * Properties of a GzoneNameplate.
             * @memberof chat.Kuaishou
             * @interface IGzoneNameplate
             * @property {number|Long|null} [id] GzoneNameplate id
             * @property {string|null} [name] GzoneNameplate name
             * @property {chat.Kuaishou.IPicUrl|null} [urls] GzoneNameplate urls
             */

            /**
             * Constructs a new GzoneNameplate.
             * @memberof chat.Kuaishou
             * @classdesc Represents a GzoneNameplate.
             * @implements IGzoneNameplate
             * @constructor
             * @param {chat.Kuaishou.IGzoneNameplate=} [properties] Properties to set
             */
            function GzoneNameplate(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GzoneNameplate id.
             * @member {number|Long} id
             * @memberof chat.Kuaishou.GzoneNameplate
             * @instance
             */
            GzoneNameplate.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * GzoneNameplate name.
             * @member {string} name
             * @memberof chat.Kuaishou.GzoneNameplate
             * @instance
             */
            GzoneNameplate.prototype.name = "";

            /**
             * GzoneNameplate urls.
             * @member {chat.Kuaishou.IPicUrl|null|undefined} urls
             * @memberof chat.Kuaishou.GzoneNameplate
             * @instance
             */
            GzoneNameplate.prototype.urls = null;

            /**
             * Creates a new GzoneNameplate instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.GzoneNameplate
             * @static
             * @param {chat.Kuaishou.IGzoneNameplate=} [properties] Properties to set
             * @returns {chat.Kuaishou.GzoneNameplate} GzoneNameplate instance
             */
            GzoneNameplate.create = function create(properties) {
                return new GzoneNameplate(properties);
            };

            /**
             * Encodes the specified GzoneNameplate message. Does not implicitly {@link chat.Kuaishou.GzoneNameplate.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.GzoneNameplate
             * @static
             * @param {chat.Kuaishou.IGzoneNameplate} message GzoneNameplate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GzoneNameplate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
                if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
                if (message.urls != null && Object.hasOwnProperty.call(message, "urls"))
                    $root.chat.Kuaishou.PicUrl.encode(message.urls, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified GzoneNameplate message, length delimited. Does not implicitly {@link chat.Kuaishou.GzoneNameplate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.GzoneNameplate
             * @static
             * @param {chat.Kuaishou.IGzoneNameplate} message GzoneNameplate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GzoneNameplate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GzoneNameplate message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.GzoneNameplate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.GzoneNameplate} GzoneNameplate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GzoneNameplate.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.GzoneNameplate();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.int64();
                            break;
                        }
                    case 2: {
                            message.name = reader.string();
                            break;
                        }
                    case 3: {
                            message.urls = $root.chat.Kuaishou.PicUrl.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a GzoneNameplate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.GzoneNameplate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.GzoneNameplate} GzoneNameplate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GzoneNameplate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GzoneNameplate message.
             * @function verify
             * @memberof chat.Kuaishou.GzoneNameplate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GzoneNameplate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                        return "id: integer|Long expected";
                if (message.name != null && message.hasOwnProperty("name"))
                    if (!$util.isString(message.name))
                        return "name: string expected";
                if (message.urls != null && message.hasOwnProperty("urls")) {
                    let error = $root.chat.Kuaishou.PicUrl.verify(message.urls);
                    if (error)
                        return "urls." + error;
                }
                return null;
            };

            /**
             * Creates a GzoneNameplate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.GzoneNameplate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.GzoneNameplate} GzoneNameplate
             */
            GzoneNameplate.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.GzoneNameplate)
                    return object;
                let message = new $root.chat.Kuaishou.GzoneNameplate();
                if (object.id != null)
                    if ($util.Long)
                        (message.id = $util.Long.fromValue(object.id)).unsigned = false;
                    else if (typeof object.id === "string")
                        message.id = parseInt(object.id, 10);
                    else if (typeof object.id === "number")
                        message.id = object.id;
                    else if (typeof object.id === "object")
                        message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
                if (object.name != null)
                    message.name = String(object.name);
                if (object.urls != null) {
                    if (typeof object.urls !== "object")
                        throw TypeError(".chat.Kuaishou.GzoneNameplate.urls: object expected");
                    message.urls = $root.chat.Kuaishou.PicUrl.fromObject(object.urls);
                }
                return message;
            };

            /**
             * Creates a plain object from a GzoneNameplate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.GzoneNameplate
             * @static
             * @param {chat.Kuaishou.GzoneNameplate} message GzoneNameplate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GzoneNameplate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.id = options.longs === String ? "0" : 0;
                    object.name = "";
                    object.urls = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    if (typeof message.id === "number")
                        object.id = options.longs === String ? String(message.id) : message.id;
                    else
                        object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
                if (message.name != null && message.hasOwnProperty("name"))
                    object.name = message.name;
                if (message.urls != null && message.hasOwnProperty("urls"))
                    object.urls = $root.chat.Kuaishou.PicUrl.toObject(message.urls, options);
                return object;
            };

            /**
             * Converts this GzoneNameplate to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.GzoneNameplate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GzoneNameplate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GzoneNameplate
             * @function getTypeUrl
             * @memberof chat.Kuaishou.GzoneNameplate
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GzoneNameplate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.GzoneNameplate";
            };

            return GzoneNameplate;
        })();

        Kuaishou.LiveFansGroupState = (function() {

            /**
             * Properties of a LiveFansGroupState.
             * @memberof chat.Kuaishou
             * @interface ILiveFansGroupState
             * @property {number|null} [intimacyLevel] LiveFansGroupState intimacyLevel
             * @property {number|null} [enterRoomSpecialEffect] LiveFansGroupState enterRoomSpecialEffect
             */

            /**
             * Constructs a new LiveFansGroupState.
             * @memberof chat.Kuaishou
             * @classdesc Represents a LiveFansGroupState.
             * @implements ILiveFansGroupState
             * @constructor
             * @param {chat.Kuaishou.ILiveFansGroupState=} [properties] Properties to set
             */
            function LiveFansGroupState(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LiveFansGroupState intimacyLevel.
             * @member {number} intimacyLevel
             * @memberof chat.Kuaishou.LiveFansGroupState
             * @instance
             */
            LiveFansGroupState.prototype.intimacyLevel = 0;

            /**
             * LiveFansGroupState enterRoomSpecialEffect.
             * @member {number} enterRoomSpecialEffect
             * @memberof chat.Kuaishou.LiveFansGroupState
             * @instance
             */
            LiveFansGroupState.prototype.enterRoomSpecialEffect = 0;

            /**
             * Creates a new LiveFansGroupState instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.LiveFansGroupState
             * @static
             * @param {chat.Kuaishou.ILiveFansGroupState=} [properties] Properties to set
             * @returns {chat.Kuaishou.LiveFansGroupState} LiveFansGroupState instance
             */
            LiveFansGroupState.create = function create(properties) {
                return new LiveFansGroupState(properties);
            };

            /**
             * Encodes the specified LiveFansGroupState message. Does not implicitly {@link chat.Kuaishou.LiveFansGroupState.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.LiveFansGroupState
             * @static
             * @param {chat.Kuaishou.ILiveFansGroupState} message LiveFansGroupState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiveFansGroupState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.intimacyLevel != null && Object.hasOwnProperty.call(message, "intimacyLevel"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.intimacyLevel);
                if (message.enterRoomSpecialEffect != null && Object.hasOwnProperty.call(message, "enterRoomSpecialEffect"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.enterRoomSpecialEffect);
                return writer;
            };

            /**
             * Encodes the specified LiveFansGroupState message, length delimited. Does not implicitly {@link chat.Kuaishou.LiveFansGroupState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.LiveFansGroupState
             * @static
             * @param {chat.Kuaishou.ILiveFansGroupState} message LiveFansGroupState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiveFansGroupState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LiveFansGroupState message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.LiveFansGroupState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.LiveFansGroupState} LiveFansGroupState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiveFansGroupState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.LiveFansGroupState();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.intimacyLevel = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.enterRoomSpecialEffect = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LiveFansGroupState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.LiveFansGroupState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.LiveFansGroupState} LiveFansGroupState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiveFansGroupState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LiveFansGroupState message.
             * @function verify
             * @memberof chat.Kuaishou.LiveFansGroupState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LiveFansGroupState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.intimacyLevel != null && message.hasOwnProperty("intimacyLevel"))
                    if (!$util.isInteger(message.intimacyLevel))
                        return "intimacyLevel: integer expected";
                if (message.enterRoomSpecialEffect != null && message.hasOwnProperty("enterRoomSpecialEffect"))
                    if (!$util.isInteger(message.enterRoomSpecialEffect))
                        return "enterRoomSpecialEffect: integer expected";
                return null;
            };

            /**
             * Creates a LiveFansGroupState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.LiveFansGroupState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.LiveFansGroupState} LiveFansGroupState
             */
            LiveFansGroupState.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.LiveFansGroupState)
                    return object;
                let message = new $root.chat.Kuaishou.LiveFansGroupState();
                if (object.intimacyLevel != null)
                    message.intimacyLevel = object.intimacyLevel >>> 0;
                if (object.enterRoomSpecialEffect != null)
                    message.enterRoomSpecialEffect = object.enterRoomSpecialEffect >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a LiveFansGroupState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.LiveFansGroupState
             * @static
             * @param {chat.Kuaishou.LiveFansGroupState} message LiveFansGroupState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LiveFansGroupState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.intimacyLevel = 0;
                    object.enterRoomSpecialEffect = 0;
                }
                if (message.intimacyLevel != null && message.hasOwnProperty("intimacyLevel"))
                    object.intimacyLevel = message.intimacyLevel;
                if (message.enterRoomSpecialEffect != null && message.hasOwnProperty("enterRoomSpecialEffect"))
                    object.enterRoomSpecialEffect = message.enterRoomSpecialEffect;
                return object;
            };

            /**
             * Converts this LiveFansGroupState to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.LiveFansGroupState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LiveFansGroupState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LiveFansGroupState
             * @function getTypeUrl
             * @memberof chat.Kuaishou.LiveFansGroupState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LiveFansGroupState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.LiveFansGroupState";
            };

            return LiveFansGroupState;
        })();

        Kuaishou.CSWebEnterRoom = (function() {

            /**
             * Properties of a CSWebEnterRoom.
             * @memberof chat.Kuaishou
             * @interface ICSWebEnterRoom
             * @property {string|null} [token] CSWebEnterRoom token
             * @property {string|null} [liveStreamId] CSWebEnterRoom liveStreamId
             * @property {number|null} [reconnectCount] CSWebEnterRoom reconnectCount
             * @property {number|null} [lastErrorCode] CSWebEnterRoom lastErrorCode
             * @property {string|null} [expTag] CSWebEnterRoom expTag
             * @property {string|null} [attach] CSWebEnterRoom attach
             * @property {string|null} [pageId] CSWebEnterRoom pageId
             * @property {string|null} [kpn] CSWebEnterRoom kpn
             * @property {string|null} [kpf] CSWebEnterRoom kpf
             */

            /**
             * Constructs a new CSWebEnterRoom.
             * @memberof chat.Kuaishou
             * @classdesc Represents a CSWebEnterRoom.
             * @implements ICSWebEnterRoom
             * @constructor
             * @param {chat.Kuaishou.ICSWebEnterRoom=} [properties] Properties to set
             */
            function CSWebEnterRoom(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CSWebEnterRoom token.
             * @member {string} token
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @instance
             */
            CSWebEnterRoom.prototype.token = "";

            /**
             * CSWebEnterRoom liveStreamId.
             * @member {string} liveStreamId
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @instance
             */
            CSWebEnterRoom.prototype.liveStreamId = "";

            /**
             * CSWebEnterRoom reconnectCount.
             * @member {number} reconnectCount
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @instance
             */
            CSWebEnterRoom.prototype.reconnectCount = 0;

            /**
             * CSWebEnterRoom lastErrorCode.
             * @member {number} lastErrorCode
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @instance
             */
            CSWebEnterRoom.prototype.lastErrorCode = 0;

            /**
             * CSWebEnterRoom expTag.
             * @member {string} expTag
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @instance
             */
            CSWebEnterRoom.prototype.expTag = "";

            /**
             * CSWebEnterRoom attach.
             * @member {string} attach
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @instance
             */
            CSWebEnterRoom.prototype.attach = "";

            /**
             * CSWebEnterRoom pageId.
             * @member {string} pageId
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @instance
             */
            CSWebEnterRoom.prototype.pageId = "";

            /**
             * CSWebEnterRoom kpn.
             * @member {string} kpn
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @instance
             */
            CSWebEnterRoom.prototype.kpn = "";

            /**
             * CSWebEnterRoom kpf.
             * @member {string} kpf
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @instance
             */
            CSWebEnterRoom.prototype.kpf = "";

            /**
             * Creates a new CSWebEnterRoom instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @static
             * @param {chat.Kuaishou.ICSWebEnterRoom=} [properties] Properties to set
             * @returns {chat.Kuaishou.CSWebEnterRoom} CSWebEnterRoom instance
             */
            CSWebEnterRoom.create = function create(properties) {
                return new CSWebEnterRoom(properties);
            };

            /**
             * Encodes the specified CSWebEnterRoom message. Does not implicitly {@link chat.Kuaishou.CSWebEnterRoom.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @static
             * @param {chat.Kuaishou.ICSWebEnterRoom} message CSWebEnterRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSWebEnterRoom.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.token);
                if (message.liveStreamId != null && Object.hasOwnProperty.call(message, "liveStreamId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.liveStreamId);
                if (message.reconnectCount != null && Object.hasOwnProperty.call(message, "reconnectCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.reconnectCount);
                if (message.lastErrorCode != null && Object.hasOwnProperty.call(message, "lastErrorCode"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.lastErrorCode);
                if (message.expTag != null && Object.hasOwnProperty.call(message, "expTag"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.expTag);
                if (message.attach != null && Object.hasOwnProperty.call(message, "attach"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.attach);
                if (message.pageId != null && Object.hasOwnProperty.call(message, "pageId"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.pageId);
                if (message.kpn != null && Object.hasOwnProperty.call(message, "kpn"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.kpn);
                if (message.kpf != null && Object.hasOwnProperty.call(message, "kpf"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.kpf);
                return writer;
            };

            /**
             * Encodes the specified CSWebEnterRoom message, length delimited. Does not implicitly {@link chat.Kuaishou.CSWebEnterRoom.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @static
             * @param {chat.Kuaishou.ICSWebEnterRoom} message CSWebEnterRoom message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSWebEnterRoom.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CSWebEnterRoom message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.CSWebEnterRoom} CSWebEnterRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSWebEnterRoom.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.CSWebEnterRoom();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.token = reader.string();
                            break;
                        }
                    case 2: {
                            message.liveStreamId = reader.string();
                            break;
                        }
                    case 3: {
                            message.reconnectCount = reader.uint32();
                            break;
                        }
                    case 4: {
                            message.lastErrorCode = reader.uint32();
                            break;
                        }
                    case 5: {
                            message.expTag = reader.string();
                            break;
                        }
                    case 6: {
                            message.attach = reader.string();
                            break;
                        }
                    case 7: {
                            message.pageId = reader.string();
                            break;
                        }
                    case 8: {
                            message.kpn = reader.string();
                            break;
                        }
                    case 9: {
                            message.kpf = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CSWebEnterRoom message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.CSWebEnterRoom} CSWebEnterRoom
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSWebEnterRoom.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CSWebEnterRoom message.
             * @function verify
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CSWebEnterRoom.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.token != null && message.hasOwnProperty("token"))
                    if (!$util.isString(message.token))
                        return "token: string expected";
                if (message.liveStreamId != null && message.hasOwnProperty("liveStreamId"))
                    if (!$util.isString(message.liveStreamId))
                        return "liveStreamId: string expected";
                if (message.reconnectCount != null && message.hasOwnProperty("reconnectCount"))
                    if (!$util.isInteger(message.reconnectCount))
                        return "reconnectCount: integer expected";
                if (message.lastErrorCode != null && message.hasOwnProperty("lastErrorCode"))
                    if (!$util.isInteger(message.lastErrorCode))
                        return "lastErrorCode: integer expected";
                if (message.expTag != null && message.hasOwnProperty("expTag"))
                    if (!$util.isString(message.expTag))
                        return "expTag: string expected";
                if (message.attach != null && message.hasOwnProperty("attach"))
                    if (!$util.isString(message.attach))
                        return "attach: string expected";
                if (message.pageId != null && message.hasOwnProperty("pageId"))
                    if (!$util.isString(message.pageId))
                        return "pageId: string expected";
                if (message.kpn != null && message.hasOwnProperty("kpn"))
                    if (!$util.isString(message.kpn))
                        return "kpn: string expected";
                if (message.kpf != null && message.hasOwnProperty("kpf"))
                    if (!$util.isString(message.kpf))
                        return "kpf: string expected";
                return null;
            };

            /**
             * Creates a CSWebEnterRoom message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.CSWebEnterRoom} CSWebEnterRoom
             */
            CSWebEnterRoom.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.CSWebEnterRoom)
                    return object;
                let message = new $root.chat.Kuaishou.CSWebEnterRoom();
                if (object.token != null)
                    message.token = String(object.token);
                if (object.liveStreamId != null)
                    message.liveStreamId = String(object.liveStreamId);
                if (object.reconnectCount != null)
                    message.reconnectCount = object.reconnectCount >>> 0;
                if (object.lastErrorCode != null)
                    message.lastErrorCode = object.lastErrorCode >>> 0;
                if (object.expTag != null)
                    message.expTag = String(object.expTag);
                if (object.attach != null)
                    message.attach = String(object.attach);
                if (object.pageId != null)
                    message.pageId = String(object.pageId);
                if (object.kpn != null)
                    message.kpn = String(object.kpn);
                if (object.kpf != null)
                    message.kpf = String(object.kpf);
                return message;
            };

            /**
             * Creates a plain object from a CSWebEnterRoom message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @static
             * @param {chat.Kuaishou.CSWebEnterRoom} message CSWebEnterRoom
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CSWebEnterRoom.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.token = "";
                    object.liveStreamId = "";
                    object.reconnectCount = 0;
                    object.lastErrorCode = 0;
                    object.expTag = "";
                    object.attach = "";
                    object.pageId = "";
                    object.kpn = "";
                    object.kpf = "";
                }
                if (message.token != null && message.hasOwnProperty("token"))
                    object.token = message.token;
                if (message.liveStreamId != null && message.hasOwnProperty("liveStreamId"))
                    object.liveStreamId = message.liveStreamId;
                if (message.reconnectCount != null && message.hasOwnProperty("reconnectCount"))
                    object.reconnectCount = message.reconnectCount;
                if (message.lastErrorCode != null && message.hasOwnProperty("lastErrorCode"))
                    object.lastErrorCode = message.lastErrorCode;
                if (message.expTag != null && message.hasOwnProperty("expTag"))
                    object.expTag = message.expTag;
                if (message.attach != null && message.hasOwnProperty("attach"))
                    object.attach = message.attach;
                if (message.pageId != null && message.hasOwnProperty("pageId"))
                    object.pageId = message.pageId;
                if (message.kpn != null && message.hasOwnProperty("kpn"))
                    object.kpn = message.kpn;
                if (message.kpf != null && message.hasOwnProperty("kpf"))
                    object.kpf = message.kpf;
                return object;
            };

            /**
             * Converts this CSWebEnterRoom to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CSWebEnterRoom.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CSWebEnterRoom
             * @function getTypeUrl
             * @memberof chat.Kuaishou.CSWebEnterRoom
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CSWebEnterRoom.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.CSWebEnterRoom";
            };

            return CSWebEnterRoom;
        })();

        Kuaishou.SCWebEnterRoomAck = (function() {

            /**
             * Properties of a SCWebEnterRoomAck.
             * @memberof chat.Kuaishou
             * @interface ISCWebEnterRoomAck
             * @property {number|Long|null} [minReconnectMs] SCWebEnterRoomAck minReconnectMs
             * @property {number|Long|null} [maxReconnectMs] SCWebEnterRoomAck maxReconnectMs
             * @property {number|Long|null} [heartbeatIntervalMs] SCWebEnterRoomAck heartbeatIntervalMs
             */

            /**
             * Constructs a new SCWebEnterRoomAck.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebEnterRoomAck.
             * @implements ISCWebEnterRoomAck
             * @constructor
             * @param {chat.Kuaishou.ISCWebEnterRoomAck=} [properties] Properties to set
             */
            function SCWebEnterRoomAck(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebEnterRoomAck minReconnectMs.
             * @member {number|Long} minReconnectMs
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @instance
             */
            SCWebEnterRoomAck.prototype.minReconnectMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SCWebEnterRoomAck maxReconnectMs.
             * @member {number|Long} maxReconnectMs
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @instance
             */
            SCWebEnterRoomAck.prototype.maxReconnectMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SCWebEnterRoomAck heartbeatIntervalMs.
             * @member {number|Long} heartbeatIntervalMs
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @instance
             */
            SCWebEnterRoomAck.prototype.heartbeatIntervalMs = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SCWebEnterRoomAck instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @static
             * @param {chat.Kuaishou.ISCWebEnterRoomAck=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebEnterRoomAck} SCWebEnterRoomAck instance
             */
            SCWebEnterRoomAck.create = function create(properties) {
                return new SCWebEnterRoomAck(properties);
            };

            /**
             * Encodes the specified SCWebEnterRoomAck message. Does not implicitly {@link chat.Kuaishou.SCWebEnterRoomAck.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @static
             * @param {chat.Kuaishou.ISCWebEnterRoomAck} message SCWebEnterRoomAck message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebEnterRoomAck.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.minReconnectMs != null && Object.hasOwnProperty.call(message, "minReconnectMs"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.minReconnectMs);
                if (message.maxReconnectMs != null && Object.hasOwnProperty.call(message, "maxReconnectMs"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.maxReconnectMs);
                if (message.heartbeatIntervalMs != null && Object.hasOwnProperty.call(message, "heartbeatIntervalMs"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.heartbeatIntervalMs);
                return writer;
            };

            /**
             * Encodes the specified SCWebEnterRoomAck message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebEnterRoomAck.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @static
             * @param {chat.Kuaishou.ISCWebEnterRoomAck} message SCWebEnterRoomAck message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebEnterRoomAck.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebEnterRoomAck message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebEnterRoomAck} SCWebEnterRoomAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebEnterRoomAck.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebEnterRoomAck();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.minReconnectMs = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.maxReconnectMs = reader.uint64();
                            break;
                        }
                    case 3: {
                            message.heartbeatIntervalMs = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebEnterRoomAck message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebEnterRoomAck} SCWebEnterRoomAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebEnterRoomAck.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebEnterRoomAck message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebEnterRoomAck.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.minReconnectMs != null && message.hasOwnProperty("minReconnectMs"))
                    if (!$util.isInteger(message.minReconnectMs) && !(message.minReconnectMs && $util.isInteger(message.minReconnectMs.low) && $util.isInteger(message.minReconnectMs.high)))
                        return "minReconnectMs: integer|Long expected";
                if (message.maxReconnectMs != null && message.hasOwnProperty("maxReconnectMs"))
                    if (!$util.isInteger(message.maxReconnectMs) && !(message.maxReconnectMs && $util.isInteger(message.maxReconnectMs.low) && $util.isInteger(message.maxReconnectMs.high)))
                        return "maxReconnectMs: integer|Long expected";
                if (message.heartbeatIntervalMs != null && message.hasOwnProperty("heartbeatIntervalMs"))
                    if (!$util.isInteger(message.heartbeatIntervalMs) && !(message.heartbeatIntervalMs && $util.isInteger(message.heartbeatIntervalMs.low) && $util.isInteger(message.heartbeatIntervalMs.high)))
                        return "heartbeatIntervalMs: integer|Long expected";
                return null;
            };

            /**
             * Creates a SCWebEnterRoomAck message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebEnterRoomAck} SCWebEnterRoomAck
             */
            SCWebEnterRoomAck.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebEnterRoomAck)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebEnterRoomAck();
                if (object.minReconnectMs != null)
                    if ($util.Long)
                        (message.minReconnectMs = $util.Long.fromValue(object.minReconnectMs)).unsigned = true;
                    else if (typeof object.minReconnectMs === "string")
                        message.minReconnectMs = parseInt(object.minReconnectMs, 10);
                    else if (typeof object.minReconnectMs === "number")
                        message.minReconnectMs = object.minReconnectMs;
                    else if (typeof object.minReconnectMs === "object")
                        message.minReconnectMs = new $util.LongBits(object.minReconnectMs.low >>> 0, object.minReconnectMs.high >>> 0).toNumber(true);
                if (object.maxReconnectMs != null)
                    if ($util.Long)
                        (message.maxReconnectMs = $util.Long.fromValue(object.maxReconnectMs)).unsigned = true;
                    else if (typeof object.maxReconnectMs === "string")
                        message.maxReconnectMs = parseInt(object.maxReconnectMs, 10);
                    else if (typeof object.maxReconnectMs === "number")
                        message.maxReconnectMs = object.maxReconnectMs;
                    else if (typeof object.maxReconnectMs === "object")
                        message.maxReconnectMs = new $util.LongBits(object.maxReconnectMs.low >>> 0, object.maxReconnectMs.high >>> 0).toNumber(true);
                if (object.heartbeatIntervalMs != null)
                    if ($util.Long)
                        (message.heartbeatIntervalMs = $util.Long.fromValue(object.heartbeatIntervalMs)).unsigned = true;
                    else if (typeof object.heartbeatIntervalMs === "string")
                        message.heartbeatIntervalMs = parseInt(object.heartbeatIntervalMs, 10);
                    else if (typeof object.heartbeatIntervalMs === "number")
                        message.heartbeatIntervalMs = object.heartbeatIntervalMs;
                    else if (typeof object.heartbeatIntervalMs === "object")
                        message.heartbeatIntervalMs = new $util.LongBits(object.heartbeatIntervalMs.low >>> 0, object.heartbeatIntervalMs.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SCWebEnterRoomAck message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @static
             * @param {chat.Kuaishou.SCWebEnterRoomAck} message SCWebEnterRoomAck
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebEnterRoomAck.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.minReconnectMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.minReconnectMs = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.maxReconnectMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.maxReconnectMs = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.heartbeatIntervalMs = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.heartbeatIntervalMs = options.longs === String ? "0" : 0;
                }
                if (message.minReconnectMs != null && message.hasOwnProperty("minReconnectMs"))
                    if (typeof message.minReconnectMs === "number")
                        object.minReconnectMs = options.longs === String ? String(message.minReconnectMs) : message.minReconnectMs;
                    else
                        object.minReconnectMs = options.longs === String ? $util.Long.prototype.toString.call(message.minReconnectMs) : options.longs === Number ? new $util.LongBits(message.minReconnectMs.low >>> 0, message.minReconnectMs.high >>> 0).toNumber(true) : message.minReconnectMs;
                if (message.maxReconnectMs != null && message.hasOwnProperty("maxReconnectMs"))
                    if (typeof message.maxReconnectMs === "number")
                        object.maxReconnectMs = options.longs === String ? String(message.maxReconnectMs) : message.maxReconnectMs;
                    else
                        object.maxReconnectMs = options.longs === String ? $util.Long.prototype.toString.call(message.maxReconnectMs) : options.longs === Number ? new $util.LongBits(message.maxReconnectMs.low >>> 0, message.maxReconnectMs.high >>> 0).toNumber(true) : message.maxReconnectMs;
                if (message.heartbeatIntervalMs != null && message.hasOwnProperty("heartbeatIntervalMs"))
                    if (typeof message.heartbeatIntervalMs === "number")
                        object.heartbeatIntervalMs = options.longs === String ? String(message.heartbeatIntervalMs) : message.heartbeatIntervalMs;
                    else
                        object.heartbeatIntervalMs = options.longs === String ? $util.Long.prototype.toString.call(message.heartbeatIntervalMs) : options.longs === Number ? new $util.LongBits(message.heartbeatIntervalMs.low >>> 0, message.heartbeatIntervalMs.high >>> 0).toNumber(true) : message.heartbeatIntervalMs;
                return object;
            };

            /**
             * Converts this SCWebEnterRoomAck to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebEnterRoomAck.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebEnterRoomAck
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebEnterRoomAck
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebEnterRoomAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebEnterRoomAck";
            };

            return SCWebEnterRoomAck;
        })();

        Kuaishou.CSWebHeartbeat = (function() {

            /**
             * Properties of a CSWebHeartbeat.
             * @memberof chat.Kuaishou
             * @interface ICSWebHeartbeat
             * @property {number|Long|null} [timestamp] CSWebHeartbeat timestamp
             */

            /**
             * Constructs a new CSWebHeartbeat.
             * @memberof chat.Kuaishou
             * @classdesc Represents a CSWebHeartbeat.
             * @implements ICSWebHeartbeat
             * @constructor
             * @param {chat.Kuaishou.ICSWebHeartbeat=} [properties] Properties to set
             */
            function CSWebHeartbeat(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CSWebHeartbeat timestamp.
             * @member {number|Long} timestamp
             * @memberof chat.Kuaishou.CSWebHeartbeat
             * @instance
             */
            CSWebHeartbeat.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new CSWebHeartbeat instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.CSWebHeartbeat
             * @static
             * @param {chat.Kuaishou.ICSWebHeartbeat=} [properties] Properties to set
             * @returns {chat.Kuaishou.CSWebHeartbeat} CSWebHeartbeat instance
             */
            CSWebHeartbeat.create = function create(properties) {
                return new CSWebHeartbeat(properties);
            };

            /**
             * Encodes the specified CSWebHeartbeat message. Does not implicitly {@link chat.Kuaishou.CSWebHeartbeat.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.CSWebHeartbeat
             * @static
             * @param {chat.Kuaishou.ICSWebHeartbeat} message CSWebHeartbeat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSWebHeartbeat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified CSWebHeartbeat message, length delimited. Does not implicitly {@link chat.Kuaishou.CSWebHeartbeat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.CSWebHeartbeat
             * @static
             * @param {chat.Kuaishou.ICSWebHeartbeat} message CSWebHeartbeat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSWebHeartbeat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CSWebHeartbeat message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.CSWebHeartbeat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.CSWebHeartbeat} CSWebHeartbeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSWebHeartbeat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.CSWebHeartbeat();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.timestamp = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CSWebHeartbeat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.CSWebHeartbeat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.CSWebHeartbeat} CSWebHeartbeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSWebHeartbeat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CSWebHeartbeat message.
             * @function verify
             * @memberof chat.Kuaishou.CSWebHeartbeat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CSWebHeartbeat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a CSWebHeartbeat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.CSWebHeartbeat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.CSWebHeartbeat} CSWebHeartbeat
             */
            CSWebHeartbeat.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.CSWebHeartbeat)
                    return object;
                let message = new $root.chat.Kuaishou.CSWebHeartbeat();
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a CSWebHeartbeat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.CSWebHeartbeat
             * @static
             * @param {chat.Kuaishou.CSWebHeartbeat} message CSWebHeartbeat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CSWebHeartbeat.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                return object;
            };

            /**
             * Converts this CSWebHeartbeat to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.CSWebHeartbeat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CSWebHeartbeat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CSWebHeartbeat
             * @function getTypeUrl
             * @memberof chat.Kuaishou.CSWebHeartbeat
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CSWebHeartbeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.CSWebHeartbeat";
            };

            return CSWebHeartbeat;
        })();

        Kuaishou.SCWebHeartbeatAck = (function() {

            /**
             * Properties of a SCWebHeartbeatAck.
             * @memberof chat.Kuaishou
             * @interface ISCWebHeartbeatAck
             * @property {number|Long|null} [timestamp] SCWebHeartbeatAck timestamp
             * @property {number|Long|null} [clientTimestamp] SCWebHeartbeatAck clientTimestamp
             */

            /**
             * Constructs a new SCWebHeartbeatAck.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebHeartbeatAck.
             * @implements ISCWebHeartbeatAck
             * @constructor
             * @param {chat.Kuaishou.ISCWebHeartbeatAck=} [properties] Properties to set
             */
            function SCWebHeartbeatAck(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebHeartbeatAck timestamp.
             * @member {number|Long} timestamp
             * @memberof chat.Kuaishou.SCWebHeartbeatAck
             * @instance
             */
            SCWebHeartbeatAck.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SCWebHeartbeatAck clientTimestamp.
             * @member {number|Long} clientTimestamp
             * @memberof chat.Kuaishou.SCWebHeartbeatAck
             * @instance
             */
            SCWebHeartbeatAck.prototype.clientTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SCWebHeartbeatAck instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebHeartbeatAck
             * @static
             * @param {chat.Kuaishou.ISCWebHeartbeatAck=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebHeartbeatAck} SCWebHeartbeatAck instance
             */
            SCWebHeartbeatAck.create = function create(properties) {
                return new SCWebHeartbeatAck(properties);
            };

            /**
             * Encodes the specified SCWebHeartbeatAck message. Does not implicitly {@link chat.Kuaishou.SCWebHeartbeatAck.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebHeartbeatAck
             * @static
             * @param {chat.Kuaishou.ISCWebHeartbeatAck} message SCWebHeartbeatAck message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebHeartbeatAck.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
                if (message.clientTimestamp != null && Object.hasOwnProperty.call(message, "clientTimestamp"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.clientTimestamp);
                return writer;
            };

            /**
             * Encodes the specified SCWebHeartbeatAck message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebHeartbeatAck.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebHeartbeatAck
             * @static
             * @param {chat.Kuaishou.ISCWebHeartbeatAck} message SCWebHeartbeatAck message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebHeartbeatAck.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebHeartbeatAck message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebHeartbeatAck
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebHeartbeatAck} SCWebHeartbeatAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebHeartbeatAck.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebHeartbeatAck();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.timestamp = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.clientTimestamp = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebHeartbeatAck message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebHeartbeatAck
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebHeartbeatAck} SCWebHeartbeatAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebHeartbeatAck.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebHeartbeatAck message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebHeartbeatAck
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebHeartbeatAck.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                if (message.clientTimestamp != null && message.hasOwnProperty("clientTimestamp"))
                    if (!$util.isInteger(message.clientTimestamp) && !(message.clientTimestamp && $util.isInteger(message.clientTimestamp.low) && $util.isInteger(message.clientTimestamp.high)))
                        return "clientTimestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a SCWebHeartbeatAck message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebHeartbeatAck
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebHeartbeatAck} SCWebHeartbeatAck
             */
            SCWebHeartbeatAck.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebHeartbeatAck)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebHeartbeatAck();
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                if (object.clientTimestamp != null)
                    if ($util.Long)
                        (message.clientTimestamp = $util.Long.fromValue(object.clientTimestamp)).unsigned = true;
                    else if (typeof object.clientTimestamp === "string")
                        message.clientTimestamp = parseInt(object.clientTimestamp, 10);
                    else if (typeof object.clientTimestamp === "number")
                        message.clientTimestamp = object.clientTimestamp;
                    else if (typeof object.clientTimestamp === "object")
                        message.clientTimestamp = new $util.LongBits(object.clientTimestamp.low >>> 0, object.clientTimestamp.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SCWebHeartbeatAck message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebHeartbeatAck
             * @static
             * @param {chat.Kuaishou.SCWebHeartbeatAck} message SCWebHeartbeatAck
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebHeartbeatAck.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.clientTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.clientTimestamp = options.longs === String ? "0" : 0;
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                if (message.clientTimestamp != null && message.hasOwnProperty("clientTimestamp"))
                    if (typeof message.clientTimestamp === "number")
                        object.clientTimestamp = options.longs === String ? String(message.clientTimestamp) : message.clientTimestamp;
                    else
                        object.clientTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.clientTimestamp) : options.longs === Number ? new $util.LongBits(message.clientTimestamp.low >>> 0, message.clientTimestamp.high >>> 0).toNumber(true) : message.clientTimestamp;
                return object;
            };

            /**
             * Converts this SCWebHeartbeatAck to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebHeartbeatAck
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebHeartbeatAck.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebHeartbeatAck
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebHeartbeatAck
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebHeartbeatAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebHeartbeatAck";
            };

            return SCWebHeartbeatAck;
        })();

        Kuaishou.SCWebError = (function() {

            /**
             * Properties of a SCWebError.
             * @memberof chat.Kuaishou
             * @interface ISCWebError
             * @property {number|null} [code] SCWebError code
             * @property {string|null} [msg] SCWebError msg
             * @property {number|null} [subCode] SCWebError subCode
             */

            /**
             * Constructs a new SCWebError.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebError.
             * @implements ISCWebError
             * @constructor
             * @param {chat.Kuaishou.ISCWebError=} [properties] Properties to set
             */
            function SCWebError(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebError code.
             * @member {number} code
             * @memberof chat.Kuaishou.SCWebError
             * @instance
             */
            SCWebError.prototype.code = 0;

            /**
             * SCWebError msg.
             * @member {string} msg
             * @memberof chat.Kuaishou.SCWebError
             * @instance
             */
            SCWebError.prototype.msg = "";

            /**
             * SCWebError subCode.
             * @member {number} subCode
             * @memberof chat.Kuaishou.SCWebError
             * @instance
             */
            SCWebError.prototype.subCode = 0;

            /**
             * Creates a new SCWebError instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebError
             * @static
             * @param {chat.Kuaishou.ISCWebError=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebError} SCWebError instance
             */
            SCWebError.create = function create(properties) {
                return new SCWebError(properties);
            };

            /**
             * Encodes the specified SCWebError message. Does not implicitly {@link chat.Kuaishou.SCWebError.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebError
             * @static
             * @param {chat.Kuaishou.ISCWebError} message SCWebError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                if (message.subCode != null && Object.hasOwnProperty.call(message, "subCode"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.subCode);
                return writer;
            };

            /**
             * Encodes the specified SCWebError message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebError
             * @static
             * @param {chat.Kuaishou.ISCWebError} message SCWebError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebError message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebError} SCWebError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebError();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.code = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.msg = reader.string();
                            break;
                        }
                    case 3: {
                            message.subCode = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebError} SCWebError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebError message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                if (message.subCode != null && message.hasOwnProperty("subCode"))
                    if (!$util.isInteger(message.subCode))
                        return "subCode: integer expected";
                return null;
            };

            /**
             * Creates a SCWebError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebError} SCWebError
             */
            SCWebError.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebError)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebError();
                if (object.code != null)
                    message.code = object.code >>> 0;
                if (object.msg != null)
                    message.msg = String(object.msg);
                if (object.subCode != null)
                    message.subCode = object.subCode >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SCWebError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebError
             * @static
             * @param {chat.Kuaishou.SCWebError} message SCWebError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.code = 0;
                    object.msg = "";
                    object.subCode = 0;
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                if (message.subCode != null && message.hasOwnProperty("subCode"))
                    object.subCode = message.subCode;
                return object;
            };

            /**
             * Converts this SCWebError to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebError
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebError
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebError";
            };

            return SCWebError;
        })();

        Kuaishou.CSWebError = (function() {

            /**
             * Properties of a CSWebError.
             * @memberof chat.Kuaishou
             * @interface ICSWebError
             * @property {number|null} [code] CSWebError code
             * @property {string|null} [msg] CSWebError msg
             */

            /**
             * Constructs a new CSWebError.
             * @memberof chat.Kuaishou
             * @classdesc Represents a CSWebError.
             * @implements ICSWebError
             * @constructor
             * @param {chat.Kuaishou.ICSWebError=} [properties] Properties to set
             */
            function CSWebError(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CSWebError code.
             * @member {number} code
             * @memberof chat.Kuaishou.CSWebError
             * @instance
             */
            CSWebError.prototype.code = 0;

            /**
             * CSWebError msg.
             * @member {string} msg
             * @memberof chat.Kuaishou.CSWebError
             * @instance
             */
            CSWebError.prototype.msg = "";

            /**
             * Creates a new CSWebError instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.CSWebError
             * @static
             * @param {chat.Kuaishou.ICSWebError=} [properties] Properties to set
             * @returns {chat.Kuaishou.CSWebError} CSWebError instance
             */
            CSWebError.create = function create(properties) {
                return new CSWebError(properties);
            };

            /**
             * Encodes the specified CSWebError message. Does not implicitly {@link chat.Kuaishou.CSWebError.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.CSWebError
             * @static
             * @param {chat.Kuaishou.ICSWebError} message CSWebError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSWebError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };

            /**
             * Encodes the specified CSWebError message, length delimited. Does not implicitly {@link chat.Kuaishou.CSWebError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.CSWebError
             * @static
             * @param {chat.Kuaishou.ICSWebError} message CSWebError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSWebError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CSWebError message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.CSWebError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.CSWebError} CSWebError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSWebError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.CSWebError();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.code = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.msg = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CSWebError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.CSWebError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.CSWebError} CSWebError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSWebError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CSWebError message.
             * @function verify
             * @memberof chat.Kuaishou.CSWebError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CSWebError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };

            /**
             * Creates a CSWebError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.CSWebError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.CSWebError} CSWebError
             */
            CSWebError.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.CSWebError)
                    return object;
                let message = new $root.chat.Kuaishou.CSWebError();
                if (object.code != null)
                    message.code = object.code >>> 0;
                if (object.msg != null)
                    message.msg = String(object.msg);
                return message;
            };

            /**
             * Creates a plain object from a CSWebError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.CSWebError
             * @static
             * @param {chat.Kuaishou.CSWebError} message CSWebError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CSWebError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.code = 0;
                    object.msg = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                return object;
            };

            /**
             * Converts this CSWebError to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.CSWebError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CSWebError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CSWebError
             * @function getTypeUrl
             * @memberof chat.Kuaishou.CSWebError
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CSWebError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.CSWebError";
            };

            return CSWebError;
        })();

        /**
         * WebUserPauseType enum.
         * @name chat.Kuaishou.WebUserPauseType
         * @enum {number}
         * @property {number} UNKNOWN_USER_PAUSE_TYPE=0 UNKNOWN_USER_PAUSE_TYPE value
         * @property {number} BACKGROUND=1 BACKGROUND value
         */
        Kuaishou.WebUserPauseType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_USER_PAUSE_TYPE"] = 0;
            values[valuesById[1] = "BACKGROUND"] = 1;
            return values;
        })();

        Kuaishou.CSWebUserPause = (function() {

            /**
             * Properties of a CSWebUserPause.
             * @memberof chat.Kuaishou
             * @interface ICSWebUserPause
             * @property {number|Long|null} [time] CSWebUserPause time
             * @property {chat.Kuaishou.WebUserPauseType|null} [pauseType] CSWebUserPause pauseType
             */

            /**
             * Constructs a new CSWebUserPause.
             * @memberof chat.Kuaishou
             * @classdesc Represents a CSWebUserPause.
             * @implements ICSWebUserPause
             * @constructor
             * @param {chat.Kuaishou.ICSWebUserPause=} [properties] Properties to set
             */
            function CSWebUserPause(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CSWebUserPause time.
             * @member {number|Long} time
             * @memberof chat.Kuaishou.CSWebUserPause
             * @instance
             */
            CSWebUserPause.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * CSWebUserPause pauseType.
             * @member {chat.Kuaishou.WebUserPauseType} pauseType
             * @memberof chat.Kuaishou.CSWebUserPause
             * @instance
             */
            CSWebUserPause.prototype.pauseType = 0;

            /**
             * Creates a new CSWebUserPause instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.CSWebUserPause
             * @static
             * @param {chat.Kuaishou.ICSWebUserPause=} [properties] Properties to set
             * @returns {chat.Kuaishou.CSWebUserPause} CSWebUserPause instance
             */
            CSWebUserPause.create = function create(properties) {
                return new CSWebUserPause(properties);
            };

            /**
             * Encodes the specified CSWebUserPause message. Does not implicitly {@link chat.Kuaishou.CSWebUserPause.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.CSWebUserPause
             * @static
             * @param {chat.Kuaishou.ICSWebUserPause} message CSWebUserPause message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSWebUserPause.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.time);
                if (message.pauseType != null && Object.hasOwnProperty.call(message, "pauseType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pauseType);
                return writer;
            };

            /**
             * Encodes the specified CSWebUserPause message, length delimited. Does not implicitly {@link chat.Kuaishou.CSWebUserPause.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.CSWebUserPause
             * @static
             * @param {chat.Kuaishou.ICSWebUserPause} message CSWebUserPause message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSWebUserPause.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CSWebUserPause message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.CSWebUserPause
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.CSWebUserPause} CSWebUserPause
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSWebUserPause.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.CSWebUserPause();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.time = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.pauseType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CSWebUserPause message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.CSWebUserPause
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.CSWebUserPause} CSWebUserPause
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSWebUserPause.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CSWebUserPause message.
             * @function verify
             * @memberof chat.Kuaishou.CSWebUserPause
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CSWebUserPause.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                if (message.pauseType != null && message.hasOwnProperty("pauseType"))
                    switch (message.pauseType) {
                    default:
                        return "pauseType: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                return null;
            };

            /**
             * Creates a CSWebUserPause message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.CSWebUserPause
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.CSWebUserPause} CSWebUserPause
             */
            CSWebUserPause.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.CSWebUserPause)
                    return object;
                let message = new $root.chat.Kuaishou.CSWebUserPause();
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                switch (object.pauseType) {
                default:
                    if (typeof object.pauseType === "number") {
                        message.pauseType = object.pauseType;
                        break;
                    }
                    break;
                case "UNKNOWN_USER_PAUSE_TYPE":
                case 0:
                    message.pauseType = 0;
                    break;
                case "BACKGROUND":
                case 1:
                    message.pauseType = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a CSWebUserPause message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.CSWebUserPause
             * @static
             * @param {chat.Kuaishou.CSWebUserPause} message CSWebUserPause
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CSWebUserPause.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                    object.pauseType = options.enums === String ? "UNKNOWN_USER_PAUSE_TYPE" : 0;
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                if (message.pauseType != null && message.hasOwnProperty("pauseType"))
                    object.pauseType = options.enums === String ? $root.chat.Kuaishou.WebUserPauseType[message.pauseType] === undefined ? message.pauseType : $root.chat.Kuaishou.WebUserPauseType[message.pauseType] : message.pauseType;
                return object;
            };

            /**
             * Converts this CSWebUserPause to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.CSWebUserPause
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CSWebUserPause.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CSWebUserPause
             * @function getTypeUrl
             * @memberof chat.Kuaishou.CSWebUserPause
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CSWebUserPause.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.CSWebUserPause";
            };

            return CSWebUserPause;
        })();

        Kuaishou.CSWebUserExit = (function() {

            /**
             * Properties of a CSWebUserExit.
             * @memberof chat.Kuaishou
             * @interface ICSWebUserExit
             * @property {number|Long|null} [time] CSWebUserExit time
             */

            /**
             * Constructs a new CSWebUserExit.
             * @memberof chat.Kuaishou
             * @classdesc Represents a CSWebUserExit.
             * @implements ICSWebUserExit
             * @constructor
             * @param {chat.Kuaishou.ICSWebUserExit=} [properties] Properties to set
             */
            function CSWebUserExit(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CSWebUserExit time.
             * @member {number|Long} time
             * @memberof chat.Kuaishou.CSWebUserExit
             * @instance
             */
            CSWebUserExit.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new CSWebUserExit instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.CSWebUserExit
             * @static
             * @param {chat.Kuaishou.ICSWebUserExit=} [properties] Properties to set
             * @returns {chat.Kuaishou.CSWebUserExit} CSWebUserExit instance
             */
            CSWebUserExit.create = function create(properties) {
                return new CSWebUserExit(properties);
            };

            /**
             * Encodes the specified CSWebUserExit message. Does not implicitly {@link chat.Kuaishou.CSWebUserExit.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.CSWebUserExit
             * @static
             * @param {chat.Kuaishou.ICSWebUserExit} message CSWebUserExit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSWebUserExit.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.time);
                return writer;
            };

            /**
             * Encodes the specified CSWebUserExit message, length delimited. Does not implicitly {@link chat.Kuaishou.CSWebUserExit.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.CSWebUserExit
             * @static
             * @param {chat.Kuaishou.ICSWebUserExit} message CSWebUserExit message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSWebUserExit.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CSWebUserExit message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.CSWebUserExit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.CSWebUserExit} CSWebUserExit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSWebUserExit.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.CSWebUserExit();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.time = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CSWebUserExit message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.CSWebUserExit
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.CSWebUserExit} CSWebUserExit
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSWebUserExit.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CSWebUserExit message.
             * @function verify
             * @memberof chat.Kuaishou.CSWebUserExit
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CSWebUserExit.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                return null;
            };

            /**
             * Creates a CSWebUserExit message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.CSWebUserExit
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.CSWebUserExit} CSWebUserExit
             */
            CSWebUserExit.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.CSWebUserExit)
                    return object;
                let message = new $root.chat.Kuaishou.CSWebUserExit();
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a CSWebUserExit message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.CSWebUserExit
             * @static
             * @param {chat.Kuaishou.CSWebUserExit} message CSWebUserExit
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CSWebUserExit.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                return object;
            };

            /**
             * Converts this CSWebUserExit to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.CSWebUserExit
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CSWebUserExit.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CSWebUserExit
             * @function getTypeUrl
             * @memberof chat.Kuaishou.CSWebUserExit
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CSWebUserExit.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.CSWebUserExit";
            };

            return CSWebUserExit;
        })();

        /**
         * WebPauseType enum.
         * @name chat.Kuaishou.WebPauseType
         * @enum {number}
         * @property {number} UNKNOWN_PAUSE_TYPE=0 UNKNOWN_PAUSE_TYPE value
         * @property {number} TELEPHONE=1 TELEPHONE value
         * @property {number} SHARE=2 SHARE value
         */
        Kuaishou.WebPauseType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_PAUSE_TYPE"] = 0;
            values[valuesById[1] = "TELEPHONE"] = 1;
            values[valuesById[2] = "SHARE"] = 2;
            return values;
        })();

        Kuaishou.SCWebAuthorPause = (function() {

            /**
             * Properties of a SCWebAuthorPause.
             * @memberof chat.Kuaishou
             * @interface ISCWebAuthorPause
             * @property {number|Long|null} [time] SCWebAuthorPause time
             * @property {chat.Kuaishou.WebPauseType|null} [pauseType] SCWebAuthorPause pauseType
             */

            /**
             * Constructs a new SCWebAuthorPause.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebAuthorPause.
             * @implements ISCWebAuthorPause
             * @constructor
             * @param {chat.Kuaishou.ISCWebAuthorPause=} [properties] Properties to set
             */
            function SCWebAuthorPause(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebAuthorPause time.
             * @member {number|Long} time
             * @memberof chat.Kuaishou.SCWebAuthorPause
             * @instance
             */
            SCWebAuthorPause.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SCWebAuthorPause pauseType.
             * @member {chat.Kuaishou.WebPauseType} pauseType
             * @memberof chat.Kuaishou.SCWebAuthorPause
             * @instance
             */
            SCWebAuthorPause.prototype.pauseType = 0;

            /**
             * Creates a new SCWebAuthorPause instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebAuthorPause
             * @static
             * @param {chat.Kuaishou.ISCWebAuthorPause=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebAuthorPause} SCWebAuthorPause instance
             */
            SCWebAuthorPause.create = function create(properties) {
                return new SCWebAuthorPause(properties);
            };

            /**
             * Encodes the specified SCWebAuthorPause message. Does not implicitly {@link chat.Kuaishou.SCWebAuthorPause.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebAuthorPause
             * @static
             * @param {chat.Kuaishou.ISCWebAuthorPause} message SCWebAuthorPause message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebAuthorPause.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.time);
                if (message.pauseType != null && Object.hasOwnProperty.call(message, "pauseType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pauseType);
                return writer;
            };

            /**
             * Encodes the specified SCWebAuthorPause message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebAuthorPause.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebAuthorPause
             * @static
             * @param {chat.Kuaishou.ISCWebAuthorPause} message SCWebAuthorPause message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebAuthorPause.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebAuthorPause message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebAuthorPause
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebAuthorPause} SCWebAuthorPause
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebAuthorPause.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebAuthorPause();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.time = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.pauseType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebAuthorPause message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebAuthorPause
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebAuthorPause} SCWebAuthorPause
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebAuthorPause.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebAuthorPause message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebAuthorPause
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebAuthorPause.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                if (message.pauseType != null && message.hasOwnProperty("pauseType"))
                    switch (message.pauseType) {
                    default:
                        return "pauseType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates a SCWebAuthorPause message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebAuthorPause
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebAuthorPause} SCWebAuthorPause
             */
            SCWebAuthorPause.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebAuthorPause)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebAuthorPause();
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                switch (object.pauseType) {
                default:
                    if (typeof object.pauseType === "number") {
                        message.pauseType = object.pauseType;
                        break;
                    }
                    break;
                case "UNKNOWN_PAUSE_TYPE":
                case 0:
                    message.pauseType = 0;
                    break;
                case "TELEPHONE":
                case 1:
                    message.pauseType = 1;
                    break;
                case "SHARE":
                case 2:
                    message.pauseType = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a SCWebAuthorPause message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebAuthorPause
             * @static
             * @param {chat.Kuaishou.SCWebAuthorPause} message SCWebAuthorPause
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebAuthorPause.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                    object.pauseType = options.enums === String ? "UNKNOWN_PAUSE_TYPE" : 0;
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                if (message.pauseType != null && message.hasOwnProperty("pauseType"))
                    object.pauseType = options.enums === String ? $root.chat.Kuaishou.WebPauseType[message.pauseType] === undefined ? message.pauseType : $root.chat.Kuaishou.WebPauseType[message.pauseType] : message.pauseType;
                return object;
            };

            /**
             * Converts this SCWebAuthorPause to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebAuthorPause
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebAuthorPause.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebAuthorPause
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebAuthorPause
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebAuthorPause.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebAuthorPause";
            };

            return SCWebAuthorPause;
        })();

        Kuaishou.SCWebAuthorResume = (function() {

            /**
             * Properties of a SCWebAuthorResume.
             * @memberof chat.Kuaishou
             * @interface ISCWebAuthorResume
             * @property {number|Long|null} [time] SCWebAuthorResume time
             */

            /**
             * Constructs a new SCWebAuthorResume.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebAuthorResume.
             * @implements ISCWebAuthorResume
             * @constructor
             * @param {chat.Kuaishou.ISCWebAuthorResume=} [properties] Properties to set
             */
            function SCWebAuthorResume(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebAuthorResume time.
             * @member {number|Long} time
             * @memberof chat.Kuaishou.SCWebAuthorResume
             * @instance
             */
            SCWebAuthorResume.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SCWebAuthorResume instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebAuthorResume
             * @static
             * @param {chat.Kuaishou.ISCWebAuthorResume=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebAuthorResume} SCWebAuthorResume instance
             */
            SCWebAuthorResume.create = function create(properties) {
                return new SCWebAuthorResume(properties);
            };

            /**
             * Encodes the specified SCWebAuthorResume message. Does not implicitly {@link chat.Kuaishou.SCWebAuthorResume.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebAuthorResume
             * @static
             * @param {chat.Kuaishou.ISCWebAuthorResume} message SCWebAuthorResume message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebAuthorResume.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.time);
                return writer;
            };

            /**
             * Encodes the specified SCWebAuthorResume message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebAuthorResume.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebAuthorResume
             * @static
             * @param {chat.Kuaishou.ISCWebAuthorResume} message SCWebAuthorResume message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebAuthorResume.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebAuthorResume message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebAuthorResume
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebAuthorResume} SCWebAuthorResume
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebAuthorResume.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebAuthorResume();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.time = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebAuthorResume message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebAuthorResume
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebAuthorResume} SCWebAuthorResume
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebAuthorResume.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebAuthorResume message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebAuthorResume
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebAuthorResume.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                return null;
            };

            /**
             * Creates a SCWebAuthorResume message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebAuthorResume
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebAuthorResume} SCWebAuthorResume
             */
            SCWebAuthorResume.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebAuthorResume)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebAuthorResume();
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SCWebAuthorResume message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebAuthorResume
             * @static
             * @param {chat.Kuaishou.SCWebAuthorResume} message SCWebAuthorResume
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebAuthorResume.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                return object;
            };

            /**
             * Converts this SCWebAuthorResume to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebAuthorResume
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebAuthorResume.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebAuthorResume
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebAuthorResume
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebAuthorResume.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebAuthorResume";
            };

            return SCWebAuthorResume;
        })();

        Kuaishou.SCWebPipStarted = (function() {

            /**
             * Properties of a SCWebPipStarted.
             * @memberof chat.Kuaishou
             * @interface ISCWebPipStarted
             * @property {number|Long|null} [time] SCWebPipStarted time
             */

            /**
             * Constructs a new SCWebPipStarted.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebPipStarted.
             * @implements ISCWebPipStarted
             * @constructor
             * @param {chat.Kuaishou.ISCWebPipStarted=} [properties] Properties to set
             */
            function SCWebPipStarted(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebPipStarted time.
             * @member {number|Long} time
             * @memberof chat.Kuaishou.SCWebPipStarted
             * @instance
             */
            SCWebPipStarted.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SCWebPipStarted instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebPipStarted
             * @static
             * @param {chat.Kuaishou.ISCWebPipStarted=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebPipStarted} SCWebPipStarted instance
             */
            SCWebPipStarted.create = function create(properties) {
                return new SCWebPipStarted(properties);
            };

            /**
             * Encodes the specified SCWebPipStarted message. Does not implicitly {@link chat.Kuaishou.SCWebPipStarted.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebPipStarted
             * @static
             * @param {chat.Kuaishou.ISCWebPipStarted} message SCWebPipStarted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebPipStarted.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.time);
                return writer;
            };

            /**
             * Encodes the specified SCWebPipStarted message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebPipStarted.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebPipStarted
             * @static
             * @param {chat.Kuaishou.ISCWebPipStarted} message SCWebPipStarted message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebPipStarted.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebPipStarted message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebPipStarted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebPipStarted} SCWebPipStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebPipStarted.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebPipStarted();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.time = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebPipStarted message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebPipStarted
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebPipStarted} SCWebPipStarted
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebPipStarted.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebPipStarted message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebPipStarted
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebPipStarted.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                return null;
            };

            /**
             * Creates a SCWebPipStarted message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebPipStarted
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebPipStarted} SCWebPipStarted
             */
            SCWebPipStarted.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebPipStarted)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebPipStarted();
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SCWebPipStarted message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebPipStarted
             * @static
             * @param {chat.Kuaishou.SCWebPipStarted} message SCWebPipStarted
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebPipStarted.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                return object;
            };

            /**
             * Converts this SCWebPipStarted to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebPipStarted
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebPipStarted.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebPipStarted
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebPipStarted
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebPipStarted.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebPipStarted";
            };

            return SCWebPipStarted;
        })();

        Kuaishou.SCWebPipEnded = (function() {

            /**
             * Properties of a SCWebPipEnded.
             * @memberof chat.Kuaishou
             * @interface ISCWebPipEnded
             * @property {number|Long|null} [time] SCWebPipEnded time
             */

            /**
             * Constructs a new SCWebPipEnded.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebPipEnded.
             * @implements ISCWebPipEnded
             * @constructor
             * @param {chat.Kuaishou.ISCWebPipEnded=} [properties] Properties to set
             */
            function SCWebPipEnded(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebPipEnded time.
             * @member {number|Long} time
             * @memberof chat.Kuaishou.SCWebPipEnded
             * @instance
             */
            SCWebPipEnded.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SCWebPipEnded instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebPipEnded
             * @static
             * @param {chat.Kuaishou.ISCWebPipEnded=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebPipEnded} SCWebPipEnded instance
             */
            SCWebPipEnded.create = function create(properties) {
                return new SCWebPipEnded(properties);
            };

            /**
             * Encodes the specified SCWebPipEnded message. Does not implicitly {@link chat.Kuaishou.SCWebPipEnded.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebPipEnded
             * @static
             * @param {chat.Kuaishou.ISCWebPipEnded} message SCWebPipEnded message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebPipEnded.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.time);
                return writer;
            };

            /**
             * Encodes the specified SCWebPipEnded message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebPipEnded.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebPipEnded
             * @static
             * @param {chat.Kuaishou.ISCWebPipEnded} message SCWebPipEnded message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebPipEnded.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebPipEnded message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebPipEnded
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebPipEnded} SCWebPipEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebPipEnded.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebPipEnded();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.time = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebPipEnded message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebPipEnded
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebPipEnded} SCWebPipEnded
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebPipEnded.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebPipEnded message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebPipEnded
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebPipEnded.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                return null;
            };

            /**
             * Creates a SCWebPipEnded message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebPipEnded
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebPipEnded} SCWebPipEnded
             */
            SCWebPipEnded.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebPipEnded)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebPipEnded();
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SCWebPipEnded message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebPipEnded
             * @static
             * @param {chat.Kuaishou.SCWebPipEnded} message SCWebPipEnded
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebPipEnded.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                return object;
            };

            /**
             * Converts this SCWebPipEnded to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebPipEnded
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebPipEnded.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebPipEnded
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebPipEnded
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebPipEnded.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebPipEnded";
            };

            return SCWebPipEnded;
        })();

        Kuaishou.SCWebFeedPush = (function() {

            /**
             * Properties of a SCWebFeedPush.
             * @memberof chat.Kuaishou
             * @interface ISCWebFeedPush
             * @property {string|null} [displayWatchingCount] SCWebFeedPush displayWatchingCount
             * @property {string|null} [displayLikeCount] SCWebFeedPush displayLikeCount
             * @property {number|Long|null} [pendingLikeCount] SCWebFeedPush pendingLikeCount
             * @property {number|Long|null} [pushInterval] SCWebFeedPush pushInterval
             * @property {chat.Kuaishou.IWebCommentFeed|null} [commentFeeds] SCWebFeedPush commentFeeds
             * @property {string|null} [commentCursor] SCWebFeedPush commentCursor
             * @property {chat.Kuaishou.IWebComboCommentFeed|null} [comboCommentFeed] SCWebFeedPush comboCommentFeed
             * @property {chat.Kuaishou.IWebLikeFeed|null} [likeFeeds] SCWebFeedPush likeFeeds
             * @property {chat.Kuaishou.IWebGiftFeed|null} [giftFeeds] SCWebFeedPush giftFeeds
             * @property {string|null} [giftCursor] SCWebFeedPush giftCursor
             * @property {chat.Kuaishou.IWebSystemNoticeFeed|null} [systemNoticeFeeds] SCWebFeedPush systemNoticeFeeds
             * @property {chat.Kuaishou.IWebShareFeed|null} [shareFeeds] SCWebFeedPush shareFeeds
             */

            /**
             * Constructs a new SCWebFeedPush.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebFeedPush.
             * @implements ISCWebFeedPush
             * @constructor
             * @param {chat.Kuaishou.ISCWebFeedPush=} [properties] Properties to set
             */
            function SCWebFeedPush(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebFeedPush displayWatchingCount.
             * @member {string} displayWatchingCount
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             */
            SCWebFeedPush.prototype.displayWatchingCount = "";

            /**
             * SCWebFeedPush displayLikeCount.
             * @member {string} displayLikeCount
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             */
            SCWebFeedPush.prototype.displayLikeCount = "";

            /**
             * SCWebFeedPush pendingLikeCount.
             * @member {number|Long} pendingLikeCount
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             */
            SCWebFeedPush.prototype.pendingLikeCount = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SCWebFeedPush pushInterval.
             * @member {number|Long} pushInterval
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             */
            SCWebFeedPush.prototype.pushInterval = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SCWebFeedPush commentFeeds.
             * @member {chat.Kuaishou.IWebCommentFeed|null|undefined} commentFeeds
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             */
            SCWebFeedPush.prototype.commentFeeds = null;

            /**
             * SCWebFeedPush commentCursor.
             * @member {string} commentCursor
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             */
            SCWebFeedPush.prototype.commentCursor = "";

            /**
             * SCWebFeedPush comboCommentFeed.
             * @member {chat.Kuaishou.IWebComboCommentFeed|null|undefined} comboCommentFeed
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             */
            SCWebFeedPush.prototype.comboCommentFeed = null;

            /**
             * SCWebFeedPush likeFeeds.
             * @member {chat.Kuaishou.IWebLikeFeed|null|undefined} likeFeeds
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             */
            SCWebFeedPush.prototype.likeFeeds = null;

            /**
             * SCWebFeedPush giftFeeds.
             * @member {chat.Kuaishou.IWebGiftFeed|null|undefined} giftFeeds
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             */
            SCWebFeedPush.prototype.giftFeeds = null;

            /**
             * SCWebFeedPush giftCursor.
             * @member {string} giftCursor
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             */
            SCWebFeedPush.prototype.giftCursor = "";

            /**
             * SCWebFeedPush systemNoticeFeeds.
             * @member {chat.Kuaishou.IWebSystemNoticeFeed|null|undefined} systemNoticeFeeds
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             */
            SCWebFeedPush.prototype.systemNoticeFeeds = null;

            /**
             * SCWebFeedPush shareFeeds.
             * @member {chat.Kuaishou.IWebShareFeed|null|undefined} shareFeeds
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             */
            SCWebFeedPush.prototype.shareFeeds = null;

            /**
             * Creates a new SCWebFeedPush instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @static
             * @param {chat.Kuaishou.ISCWebFeedPush=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebFeedPush} SCWebFeedPush instance
             */
            SCWebFeedPush.create = function create(properties) {
                return new SCWebFeedPush(properties);
            };

            /**
             * Encodes the specified SCWebFeedPush message. Does not implicitly {@link chat.Kuaishou.SCWebFeedPush.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @static
             * @param {chat.Kuaishou.ISCWebFeedPush} message SCWebFeedPush message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebFeedPush.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.displayWatchingCount != null && Object.hasOwnProperty.call(message, "displayWatchingCount"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.displayWatchingCount);
                if (message.displayLikeCount != null && Object.hasOwnProperty.call(message, "displayLikeCount"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayLikeCount);
                if (message.pendingLikeCount != null && Object.hasOwnProperty.call(message, "pendingLikeCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.pendingLikeCount);
                if (message.pushInterval != null && Object.hasOwnProperty.call(message, "pushInterval"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.pushInterval);
                if (message.commentFeeds != null && Object.hasOwnProperty.call(message, "commentFeeds"))
                    $root.chat.Kuaishou.WebCommentFeed.encode(message.commentFeeds, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.commentCursor != null && Object.hasOwnProperty.call(message, "commentCursor"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.commentCursor);
                if (message.comboCommentFeed != null && Object.hasOwnProperty.call(message, "comboCommentFeed"))
                    $root.chat.Kuaishou.WebComboCommentFeed.encode(message.comboCommentFeed, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                if (message.likeFeeds != null && Object.hasOwnProperty.call(message, "likeFeeds"))
                    $root.chat.Kuaishou.WebLikeFeed.encode(message.likeFeeds, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.giftFeeds != null && Object.hasOwnProperty.call(message, "giftFeeds"))
                    $root.chat.Kuaishou.WebGiftFeed.encode(message.giftFeeds, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                if (message.giftCursor != null && Object.hasOwnProperty.call(message, "giftCursor"))
                    writer.uint32(/* id 10, wireType 2 =*/82).string(message.giftCursor);
                if (message.systemNoticeFeeds != null && Object.hasOwnProperty.call(message, "systemNoticeFeeds"))
                    $root.chat.Kuaishou.WebSystemNoticeFeed.encode(message.systemNoticeFeeds, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                if (message.shareFeeds != null && Object.hasOwnProperty.call(message, "shareFeeds"))
                    $root.chat.Kuaishou.WebShareFeed.encode(message.shareFeeds, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SCWebFeedPush message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebFeedPush.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @static
             * @param {chat.Kuaishou.ISCWebFeedPush} message SCWebFeedPush message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebFeedPush.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebFeedPush message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebFeedPush} SCWebFeedPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebFeedPush.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebFeedPush();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.displayWatchingCount = reader.string();
                            break;
                        }
                    case 2: {
                            message.displayLikeCount = reader.string();
                            break;
                        }
                    case 3: {
                            message.pendingLikeCount = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.pushInterval = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.commentFeeds = $root.chat.Kuaishou.WebCommentFeed.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.commentCursor = reader.string();
                            break;
                        }
                    case 7: {
                            message.comboCommentFeed = $root.chat.Kuaishou.WebComboCommentFeed.decode(reader, reader.uint32());
                            break;
                        }
                    case 8: {
                            message.likeFeeds = $root.chat.Kuaishou.WebLikeFeed.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.giftFeeds = $root.chat.Kuaishou.WebGiftFeed.decode(reader, reader.uint32());
                            break;
                        }
                    case 10: {
                            message.giftCursor = reader.string();
                            break;
                        }
                    case 11: {
                            message.systemNoticeFeeds = $root.chat.Kuaishou.WebSystemNoticeFeed.decode(reader, reader.uint32());
                            break;
                        }
                    case 12: {
                            message.shareFeeds = $root.chat.Kuaishou.WebShareFeed.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebFeedPush message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebFeedPush} SCWebFeedPush
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebFeedPush.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebFeedPush message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebFeedPush.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.displayWatchingCount != null && message.hasOwnProperty("displayWatchingCount"))
                    if (!$util.isString(message.displayWatchingCount))
                        return "displayWatchingCount: string expected";
                if (message.displayLikeCount != null && message.hasOwnProperty("displayLikeCount"))
                    if (!$util.isString(message.displayLikeCount))
                        return "displayLikeCount: string expected";
                if (message.pendingLikeCount != null && message.hasOwnProperty("pendingLikeCount"))
                    if (!$util.isInteger(message.pendingLikeCount) && !(message.pendingLikeCount && $util.isInteger(message.pendingLikeCount.low) && $util.isInteger(message.pendingLikeCount.high)))
                        return "pendingLikeCount: integer|Long expected";
                if (message.pushInterval != null && message.hasOwnProperty("pushInterval"))
                    if (!$util.isInteger(message.pushInterval) && !(message.pushInterval && $util.isInteger(message.pushInterval.low) && $util.isInteger(message.pushInterval.high)))
                        return "pushInterval: integer|Long expected";
                if (message.commentFeeds != null && message.hasOwnProperty("commentFeeds")) {
                    let error = $root.chat.Kuaishou.WebCommentFeed.verify(message.commentFeeds);
                    if (error)
                        return "commentFeeds." + error;
                }
                if (message.commentCursor != null && message.hasOwnProperty("commentCursor"))
                    if (!$util.isString(message.commentCursor))
                        return "commentCursor: string expected";
                if (message.comboCommentFeed != null && message.hasOwnProperty("comboCommentFeed")) {
                    let error = $root.chat.Kuaishou.WebComboCommentFeed.verify(message.comboCommentFeed);
                    if (error)
                        return "comboCommentFeed." + error;
                }
                if (message.likeFeeds != null && message.hasOwnProperty("likeFeeds")) {
                    let error = $root.chat.Kuaishou.WebLikeFeed.verify(message.likeFeeds);
                    if (error)
                        return "likeFeeds." + error;
                }
                if (message.giftFeeds != null && message.hasOwnProperty("giftFeeds")) {
                    let error = $root.chat.Kuaishou.WebGiftFeed.verify(message.giftFeeds);
                    if (error)
                        return "giftFeeds." + error;
                }
                if (message.giftCursor != null && message.hasOwnProperty("giftCursor"))
                    if (!$util.isString(message.giftCursor))
                        return "giftCursor: string expected";
                if (message.systemNoticeFeeds != null && message.hasOwnProperty("systemNoticeFeeds")) {
                    let error = $root.chat.Kuaishou.WebSystemNoticeFeed.verify(message.systemNoticeFeeds);
                    if (error)
                        return "systemNoticeFeeds." + error;
                }
                if (message.shareFeeds != null && message.hasOwnProperty("shareFeeds")) {
                    let error = $root.chat.Kuaishou.WebShareFeed.verify(message.shareFeeds);
                    if (error)
                        return "shareFeeds." + error;
                }
                return null;
            };

            /**
             * Creates a SCWebFeedPush message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebFeedPush} SCWebFeedPush
             */
            SCWebFeedPush.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebFeedPush)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebFeedPush();
                if (object.displayWatchingCount != null)
                    message.displayWatchingCount = String(object.displayWatchingCount);
                if (object.displayLikeCount != null)
                    message.displayLikeCount = String(object.displayLikeCount);
                if (object.pendingLikeCount != null)
                    if ($util.Long)
                        (message.pendingLikeCount = $util.Long.fromValue(object.pendingLikeCount)).unsigned = true;
                    else if (typeof object.pendingLikeCount === "string")
                        message.pendingLikeCount = parseInt(object.pendingLikeCount, 10);
                    else if (typeof object.pendingLikeCount === "number")
                        message.pendingLikeCount = object.pendingLikeCount;
                    else if (typeof object.pendingLikeCount === "object")
                        message.pendingLikeCount = new $util.LongBits(object.pendingLikeCount.low >>> 0, object.pendingLikeCount.high >>> 0).toNumber(true);
                if (object.pushInterval != null)
                    if ($util.Long)
                        (message.pushInterval = $util.Long.fromValue(object.pushInterval)).unsigned = true;
                    else if (typeof object.pushInterval === "string")
                        message.pushInterval = parseInt(object.pushInterval, 10);
                    else if (typeof object.pushInterval === "number")
                        message.pushInterval = object.pushInterval;
                    else if (typeof object.pushInterval === "object")
                        message.pushInterval = new $util.LongBits(object.pushInterval.low >>> 0, object.pushInterval.high >>> 0).toNumber(true);
                if (object.commentFeeds != null) {
                    if (typeof object.commentFeeds !== "object")
                        throw TypeError(".chat.Kuaishou.SCWebFeedPush.commentFeeds: object expected");
                    message.commentFeeds = $root.chat.Kuaishou.WebCommentFeed.fromObject(object.commentFeeds);
                }
                if (object.commentCursor != null)
                    message.commentCursor = String(object.commentCursor);
                if (object.comboCommentFeed != null) {
                    if (typeof object.comboCommentFeed !== "object")
                        throw TypeError(".chat.Kuaishou.SCWebFeedPush.comboCommentFeed: object expected");
                    message.comboCommentFeed = $root.chat.Kuaishou.WebComboCommentFeed.fromObject(object.comboCommentFeed);
                }
                if (object.likeFeeds != null) {
                    if (typeof object.likeFeeds !== "object")
                        throw TypeError(".chat.Kuaishou.SCWebFeedPush.likeFeeds: object expected");
                    message.likeFeeds = $root.chat.Kuaishou.WebLikeFeed.fromObject(object.likeFeeds);
                }
                if (object.giftFeeds != null) {
                    if (typeof object.giftFeeds !== "object")
                        throw TypeError(".chat.Kuaishou.SCWebFeedPush.giftFeeds: object expected");
                    message.giftFeeds = $root.chat.Kuaishou.WebGiftFeed.fromObject(object.giftFeeds);
                }
                if (object.giftCursor != null)
                    message.giftCursor = String(object.giftCursor);
                if (object.systemNoticeFeeds != null) {
                    if (typeof object.systemNoticeFeeds !== "object")
                        throw TypeError(".chat.Kuaishou.SCWebFeedPush.systemNoticeFeeds: object expected");
                    message.systemNoticeFeeds = $root.chat.Kuaishou.WebSystemNoticeFeed.fromObject(object.systemNoticeFeeds);
                }
                if (object.shareFeeds != null) {
                    if (typeof object.shareFeeds !== "object")
                        throw TypeError(".chat.Kuaishou.SCWebFeedPush.shareFeeds: object expected");
                    message.shareFeeds = $root.chat.Kuaishou.WebShareFeed.fromObject(object.shareFeeds);
                }
                return message;
            };

            /**
             * Creates a plain object from a SCWebFeedPush message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @static
             * @param {chat.Kuaishou.SCWebFeedPush} message SCWebFeedPush
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebFeedPush.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.displayWatchingCount = "";
                    object.displayLikeCount = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.pendingLikeCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.pendingLikeCount = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.pushInterval = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.pushInterval = options.longs === String ? "0" : 0;
                    object.commentFeeds = null;
                    object.commentCursor = "";
                    object.comboCommentFeed = null;
                    object.likeFeeds = null;
                    object.giftFeeds = null;
                    object.giftCursor = "";
                    object.systemNoticeFeeds = null;
                    object.shareFeeds = null;
                }
                if (message.displayWatchingCount != null && message.hasOwnProperty("displayWatchingCount"))
                    object.displayWatchingCount = message.displayWatchingCount;
                if (message.displayLikeCount != null && message.hasOwnProperty("displayLikeCount"))
                    object.displayLikeCount = message.displayLikeCount;
                if (message.pendingLikeCount != null && message.hasOwnProperty("pendingLikeCount"))
                    if (typeof message.pendingLikeCount === "number")
                        object.pendingLikeCount = options.longs === String ? String(message.pendingLikeCount) : message.pendingLikeCount;
                    else
                        object.pendingLikeCount = options.longs === String ? $util.Long.prototype.toString.call(message.pendingLikeCount) : options.longs === Number ? new $util.LongBits(message.pendingLikeCount.low >>> 0, message.pendingLikeCount.high >>> 0).toNumber(true) : message.pendingLikeCount;
                if (message.pushInterval != null && message.hasOwnProperty("pushInterval"))
                    if (typeof message.pushInterval === "number")
                        object.pushInterval = options.longs === String ? String(message.pushInterval) : message.pushInterval;
                    else
                        object.pushInterval = options.longs === String ? $util.Long.prototype.toString.call(message.pushInterval) : options.longs === Number ? new $util.LongBits(message.pushInterval.low >>> 0, message.pushInterval.high >>> 0).toNumber(true) : message.pushInterval;
                if (message.commentFeeds != null && message.hasOwnProperty("commentFeeds"))
                    object.commentFeeds = $root.chat.Kuaishou.WebCommentFeed.toObject(message.commentFeeds, options);
                if (message.commentCursor != null && message.hasOwnProperty("commentCursor"))
                    object.commentCursor = message.commentCursor;
                if (message.comboCommentFeed != null && message.hasOwnProperty("comboCommentFeed"))
                    object.comboCommentFeed = $root.chat.Kuaishou.WebComboCommentFeed.toObject(message.comboCommentFeed, options);
                if (message.likeFeeds != null && message.hasOwnProperty("likeFeeds"))
                    object.likeFeeds = $root.chat.Kuaishou.WebLikeFeed.toObject(message.likeFeeds, options);
                if (message.giftFeeds != null && message.hasOwnProperty("giftFeeds"))
                    object.giftFeeds = $root.chat.Kuaishou.WebGiftFeed.toObject(message.giftFeeds, options);
                if (message.giftCursor != null && message.hasOwnProperty("giftCursor"))
                    object.giftCursor = message.giftCursor;
                if (message.systemNoticeFeeds != null && message.hasOwnProperty("systemNoticeFeeds"))
                    object.systemNoticeFeeds = $root.chat.Kuaishou.WebSystemNoticeFeed.toObject(message.systemNoticeFeeds, options);
                if (message.shareFeeds != null && message.hasOwnProperty("shareFeeds"))
                    object.shareFeeds = $root.chat.Kuaishou.WebShareFeed.toObject(message.shareFeeds, options);
                return object;
            };

            /**
             * Converts this SCWebFeedPush to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebFeedPush.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebFeedPush
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebFeedPush
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebFeedPush.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebFeedPush";
            };

            return SCWebFeedPush;
        })();

        Kuaishou.WebLikeFeed = (function() {

            /**
             * Properties of a WebLikeFeed.
             * @memberof chat.Kuaishou
             * @interface IWebLikeFeed
             * @property {string|null} [id] WebLikeFeed id
             * @property {chat.Kuaishou.ISimpleUserInfo|null} [user] WebLikeFeed user
             * @property {number|Long|null} [sortRank] WebLikeFeed sortRank
             * @property {string|null} [deviceHash] WebLikeFeed deviceHash
             */

            /**
             * Constructs a new WebLikeFeed.
             * @memberof chat.Kuaishou
             * @classdesc Represents a WebLikeFeed.
             * @implements IWebLikeFeed
             * @constructor
             * @param {chat.Kuaishou.IWebLikeFeed=} [properties] Properties to set
             */
            function WebLikeFeed(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebLikeFeed id.
             * @member {string} id
             * @memberof chat.Kuaishou.WebLikeFeed
             * @instance
             */
            WebLikeFeed.prototype.id = "";

            /**
             * WebLikeFeed user.
             * @member {chat.Kuaishou.ISimpleUserInfo|null|undefined} user
             * @memberof chat.Kuaishou.WebLikeFeed
             * @instance
             */
            WebLikeFeed.prototype.user = null;

            /**
             * WebLikeFeed sortRank.
             * @member {number|Long} sortRank
             * @memberof chat.Kuaishou.WebLikeFeed
             * @instance
             */
            WebLikeFeed.prototype.sortRank = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebLikeFeed deviceHash.
             * @member {string} deviceHash
             * @memberof chat.Kuaishou.WebLikeFeed
             * @instance
             */
            WebLikeFeed.prototype.deviceHash = "";

            /**
             * Creates a new WebLikeFeed instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.WebLikeFeed
             * @static
             * @param {chat.Kuaishou.IWebLikeFeed=} [properties] Properties to set
             * @returns {chat.Kuaishou.WebLikeFeed} WebLikeFeed instance
             */
            WebLikeFeed.create = function create(properties) {
                return new WebLikeFeed(properties);
            };

            /**
             * Encodes the specified WebLikeFeed message. Does not implicitly {@link chat.Kuaishou.WebLikeFeed.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.WebLikeFeed
             * @static
             * @param {chat.Kuaishou.IWebLikeFeed} message WebLikeFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebLikeFeed.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.chat.Kuaishou.SimpleUserInfo.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.sortRank != null && Object.hasOwnProperty.call(message, "sortRank"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.sortRank);
                if (message.deviceHash != null && Object.hasOwnProperty.call(message, "deviceHash"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceHash);
                return writer;
            };

            /**
             * Encodes the specified WebLikeFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.WebLikeFeed.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.WebLikeFeed
             * @static
             * @param {chat.Kuaishou.IWebLikeFeed} message WebLikeFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebLikeFeed.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebLikeFeed message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.WebLikeFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.WebLikeFeed} WebLikeFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebLikeFeed.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.WebLikeFeed();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.user = $root.chat.Kuaishou.SimpleUserInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.sortRank = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.deviceHash = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WebLikeFeed message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.WebLikeFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.WebLikeFeed} WebLikeFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebLikeFeed.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebLikeFeed message.
             * @function verify
             * @memberof chat.Kuaishou.WebLikeFeed
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebLikeFeed.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    let error = $root.chat.Kuaishou.SimpleUserInfo.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.sortRank != null && message.hasOwnProperty("sortRank"))
                    if (!$util.isInteger(message.sortRank) && !(message.sortRank && $util.isInteger(message.sortRank.low) && $util.isInteger(message.sortRank.high)))
                        return "sortRank: integer|Long expected";
                if (message.deviceHash != null && message.hasOwnProperty("deviceHash"))
                    if (!$util.isString(message.deviceHash))
                        return "deviceHash: string expected";
                return null;
            };

            /**
             * Creates a WebLikeFeed message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.WebLikeFeed
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.WebLikeFeed} WebLikeFeed
             */
            WebLikeFeed.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.WebLikeFeed)
                    return object;
                let message = new $root.chat.Kuaishou.WebLikeFeed();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".chat.Kuaishou.WebLikeFeed.user: object expected");
                    message.user = $root.chat.Kuaishou.SimpleUserInfo.fromObject(object.user);
                }
                if (object.sortRank != null)
                    if ($util.Long)
                        (message.sortRank = $util.Long.fromValue(object.sortRank)).unsigned = true;
                    else if (typeof object.sortRank === "string")
                        message.sortRank = parseInt(object.sortRank, 10);
                    else if (typeof object.sortRank === "number")
                        message.sortRank = object.sortRank;
                    else if (typeof object.sortRank === "object")
                        message.sortRank = new $util.LongBits(object.sortRank.low >>> 0, object.sortRank.high >>> 0).toNumber(true);
                if (object.deviceHash != null)
                    message.deviceHash = String(object.deviceHash);
                return message;
            };

            /**
             * Creates a plain object from a WebLikeFeed message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.WebLikeFeed
             * @static
             * @param {chat.Kuaishou.WebLikeFeed} message WebLikeFeed
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebLikeFeed.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.user = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.sortRank = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.sortRank = options.longs === String ? "0" : 0;
                    object.deviceHash = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.chat.Kuaishou.SimpleUserInfo.toObject(message.user, options);
                if (message.sortRank != null && message.hasOwnProperty("sortRank"))
                    if (typeof message.sortRank === "number")
                        object.sortRank = options.longs === String ? String(message.sortRank) : message.sortRank;
                    else
                        object.sortRank = options.longs === String ? $util.Long.prototype.toString.call(message.sortRank) : options.longs === Number ? new $util.LongBits(message.sortRank.low >>> 0, message.sortRank.high >>> 0).toNumber(true) : message.sortRank;
                if (message.deviceHash != null && message.hasOwnProperty("deviceHash"))
                    object.deviceHash = message.deviceHash;
                return object;
            };

            /**
             * Converts this WebLikeFeed to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.WebLikeFeed
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebLikeFeed.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WebLikeFeed
             * @function getTypeUrl
             * @memberof chat.Kuaishou.WebLikeFeed
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebLikeFeed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.WebLikeFeed";
            };

            return WebLikeFeed;
        })();

        /**
         * WebCommentFeedShowType enum.
         * @name chat.Kuaishou.WebCommentFeedShowType
         * @enum {number}
         * @property {number} FEED_SHOW_UNKNOWN=0 FEED_SHOW_UNKNOWN value
         * @property {number} FEED_SHOW_NORMAL=1 FEED_SHOW_NORMAL value
         * @property {number} FEED_HIDDEN=2 FEED_HIDDEN value
         */
        Kuaishou.WebCommentFeedShowType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FEED_SHOW_UNKNOWN"] = 0;
            values[valuesById[1] = "FEED_SHOW_NORMAL"] = 1;
            values[valuesById[2] = "FEED_HIDDEN"] = 2;
            return values;
        })();

        Kuaishou.WebCommentFeed = (function() {

            /**
             * Properties of a WebCommentFeed.
             * @memberof chat.Kuaishou
             * @interface IWebCommentFeed
             * @property {string|null} [id] WebCommentFeed id
             * @property {chat.Kuaishou.ISimpleUserInfo|null} [user] WebCommentFeed user
             * @property {string|null} [content] WebCommentFeed content
             * @property {string|null} [deviceHash] WebCommentFeed deviceHash
             * @property {number|Long|null} [sortRank] WebCommentFeed sortRank
             * @property {string|null} [color] WebCommentFeed color
             * @property {chat.Kuaishou.WebCommentFeedShowType|null} [showType] WebCommentFeed showType
             * @property {chat.Kuaishou.ILiveAudienceState|null} [senderState] WebCommentFeed senderState
             */

            /**
             * Constructs a new WebCommentFeed.
             * @memberof chat.Kuaishou
             * @classdesc Represents a WebCommentFeed.
             * @implements IWebCommentFeed
             * @constructor
             * @param {chat.Kuaishou.IWebCommentFeed=} [properties] Properties to set
             */
            function WebCommentFeed(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebCommentFeed id.
             * @member {string} id
             * @memberof chat.Kuaishou.WebCommentFeed
             * @instance
             */
            WebCommentFeed.prototype.id = "";

            /**
             * WebCommentFeed user.
             * @member {chat.Kuaishou.ISimpleUserInfo|null|undefined} user
             * @memberof chat.Kuaishou.WebCommentFeed
             * @instance
             */
            WebCommentFeed.prototype.user = null;

            /**
             * WebCommentFeed content.
             * @member {string} content
             * @memberof chat.Kuaishou.WebCommentFeed
             * @instance
             */
            WebCommentFeed.prototype.content = "";

            /**
             * WebCommentFeed deviceHash.
             * @member {string} deviceHash
             * @memberof chat.Kuaishou.WebCommentFeed
             * @instance
             */
            WebCommentFeed.prototype.deviceHash = "";

            /**
             * WebCommentFeed sortRank.
             * @member {number|Long} sortRank
             * @memberof chat.Kuaishou.WebCommentFeed
             * @instance
             */
            WebCommentFeed.prototype.sortRank = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebCommentFeed color.
             * @member {string} color
             * @memberof chat.Kuaishou.WebCommentFeed
             * @instance
             */
            WebCommentFeed.prototype.color = "";

            /**
             * WebCommentFeed showType.
             * @member {chat.Kuaishou.WebCommentFeedShowType} showType
             * @memberof chat.Kuaishou.WebCommentFeed
             * @instance
             */
            WebCommentFeed.prototype.showType = 0;

            /**
             * WebCommentFeed senderState.
             * @member {chat.Kuaishou.ILiveAudienceState|null|undefined} senderState
             * @memberof chat.Kuaishou.WebCommentFeed
             * @instance
             */
            WebCommentFeed.prototype.senderState = null;

            /**
             * Creates a new WebCommentFeed instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.WebCommentFeed
             * @static
             * @param {chat.Kuaishou.IWebCommentFeed=} [properties] Properties to set
             * @returns {chat.Kuaishou.WebCommentFeed} WebCommentFeed instance
             */
            WebCommentFeed.create = function create(properties) {
                return new WebCommentFeed(properties);
            };

            /**
             * Encodes the specified WebCommentFeed message. Does not implicitly {@link chat.Kuaishou.WebCommentFeed.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.WebCommentFeed
             * @static
             * @param {chat.Kuaishou.IWebCommentFeed} message WebCommentFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebCommentFeed.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.chat.Kuaishou.SimpleUserInfo.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
                if (message.deviceHash != null && Object.hasOwnProperty.call(message, "deviceHash"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.deviceHash);
                if (message.sortRank != null && Object.hasOwnProperty.call(message, "sortRank"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.sortRank);
                if (message.color != null && Object.hasOwnProperty.call(message, "color"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.color);
                if (message.showType != null && Object.hasOwnProperty.call(message, "showType"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.showType);
                if (message.senderState != null && Object.hasOwnProperty.call(message, "senderState"))
                    $root.chat.Kuaishou.LiveAudienceState.encode(message.senderState, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified WebCommentFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.WebCommentFeed.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.WebCommentFeed
             * @static
             * @param {chat.Kuaishou.IWebCommentFeed} message WebCommentFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebCommentFeed.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebCommentFeed message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.WebCommentFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.WebCommentFeed} WebCommentFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebCommentFeed.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.WebCommentFeed();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.user = $root.chat.Kuaishou.SimpleUserInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.content = reader.string();
                            break;
                        }
                    case 4: {
                            message.deviceHash = reader.string();
                            break;
                        }
                    case 5: {
                            message.sortRank = reader.uint64();
                            break;
                        }
                    case 6: {
                            message.color = reader.string();
                            break;
                        }
                    case 7: {
                            message.showType = reader.int32();
                            break;
                        }
                    case 8: {
                            message.senderState = $root.chat.Kuaishou.LiveAudienceState.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WebCommentFeed message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.WebCommentFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.WebCommentFeed} WebCommentFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebCommentFeed.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebCommentFeed message.
             * @function verify
             * @memberof chat.Kuaishou.WebCommentFeed
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebCommentFeed.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    let error = $root.chat.Kuaishou.SimpleUserInfo.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.deviceHash != null && message.hasOwnProperty("deviceHash"))
                    if (!$util.isString(message.deviceHash))
                        return "deviceHash: string expected";
                if (message.sortRank != null && message.hasOwnProperty("sortRank"))
                    if (!$util.isInteger(message.sortRank) && !(message.sortRank && $util.isInteger(message.sortRank.low) && $util.isInteger(message.sortRank.high)))
                        return "sortRank: integer|Long expected";
                if (message.color != null && message.hasOwnProperty("color"))
                    if (!$util.isString(message.color))
                        return "color: string expected";
                if (message.showType != null && message.hasOwnProperty("showType"))
                    switch (message.showType) {
                    default:
                        return "showType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.senderState != null && message.hasOwnProperty("senderState")) {
                    let error = $root.chat.Kuaishou.LiveAudienceState.verify(message.senderState);
                    if (error)
                        return "senderState." + error;
                }
                return null;
            };

            /**
             * Creates a WebCommentFeed message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.WebCommentFeed
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.WebCommentFeed} WebCommentFeed
             */
            WebCommentFeed.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.WebCommentFeed)
                    return object;
                let message = new $root.chat.Kuaishou.WebCommentFeed();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".chat.Kuaishou.WebCommentFeed.user: object expected");
                    message.user = $root.chat.Kuaishou.SimpleUserInfo.fromObject(object.user);
                }
                if (object.content != null)
                    message.content = String(object.content);
                if (object.deviceHash != null)
                    message.deviceHash = String(object.deviceHash);
                if (object.sortRank != null)
                    if ($util.Long)
                        (message.sortRank = $util.Long.fromValue(object.sortRank)).unsigned = true;
                    else if (typeof object.sortRank === "string")
                        message.sortRank = parseInt(object.sortRank, 10);
                    else if (typeof object.sortRank === "number")
                        message.sortRank = object.sortRank;
                    else if (typeof object.sortRank === "object")
                        message.sortRank = new $util.LongBits(object.sortRank.low >>> 0, object.sortRank.high >>> 0).toNumber(true);
                if (object.color != null)
                    message.color = String(object.color);
                switch (object.showType) {
                default:
                    if (typeof object.showType === "number") {
                        message.showType = object.showType;
                        break;
                    }
                    break;
                case "FEED_SHOW_UNKNOWN":
                case 0:
                    message.showType = 0;
                    break;
                case "FEED_SHOW_NORMAL":
                case 1:
                    message.showType = 1;
                    break;
                case "FEED_HIDDEN":
                case 2:
                    message.showType = 2;
                    break;
                }
                if (object.senderState != null) {
                    if (typeof object.senderState !== "object")
                        throw TypeError(".chat.Kuaishou.WebCommentFeed.senderState: object expected");
                    message.senderState = $root.chat.Kuaishou.LiveAudienceState.fromObject(object.senderState);
                }
                return message;
            };

            /**
             * Creates a plain object from a WebCommentFeed message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.WebCommentFeed
             * @static
             * @param {chat.Kuaishou.WebCommentFeed} message WebCommentFeed
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebCommentFeed.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.user = null;
                    object.content = "";
                    object.deviceHash = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.sortRank = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.sortRank = options.longs === String ? "0" : 0;
                    object.color = "";
                    object.showType = options.enums === String ? "FEED_SHOW_UNKNOWN" : 0;
                    object.senderState = null;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.chat.Kuaishou.SimpleUserInfo.toObject(message.user, options);
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.deviceHash != null && message.hasOwnProperty("deviceHash"))
                    object.deviceHash = message.deviceHash;
                if (message.sortRank != null && message.hasOwnProperty("sortRank"))
                    if (typeof message.sortRank === "number")
                        object.sortRank = options.longs === String ? String(message.sortRank) : message.sortRank;
                    else
                        object.sortRank = options.longs === String ? $util.Long.prototype.toString.call(message.sortRank) : options.longs === Number ? new $util.LongBits(message.sortRank.low >>> 0, message.sortRank.high >>> 0).toNumber(true) : message.sortRank;
                if (message.color != null && message.hasOwnProperty("color"))
                    object.color = message.color;
                if (message.showType != null && message.hasOwnProperty("showType"))
                    object.showType = options.enums === String ? $root.chat.Kuaishou.WebCommentFeedShowType[message.showType] === undefined ? message.showType : $root.chat.Kuaishou.WebCommentFeedShowType[message.showType] : message.showType;
                if (message.senderState != null && message.hasOwnProperty("senderState"))
                    object.senderState = $root.chat.Kuaishou.LiveAudienceState.toObject(message.senderState, options);
                return object;
            };

            /**
             * Converts this WebCommentFeed to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.WebCommentFeed
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebCommentFeed.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WebCommentFeed
             * @function getTypeUrl
             * @memberof chat.Kuaishou.WebCommentFeed
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebCommentFeed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.WebCommentFeed";
            };

            return WebCommentFeed;
        })();

        Kuaishou.WebComboCommentFeed = (function() {

            /**
             * Properties of a WebComboCommentFeed.
             * @memberof chat.Kuaishou
             * @interface IWebComboCommentFeed
             * @property {string|null} [id] WebComboCommentFeed id
             * @property {string|null} [content] WebComboCommentFeed content
             * @property {number|null} [comboCount] WebComboCommentFeed comboCount
             */

            /**
             * Constructs a new WebComboCommentFeed.
             * @memberof chat.Kuaishou
             * @classdesc Represents a WebComboCommentFeed.
             * @implements IWebComboCommentFeed
             * @constructor
             * @param {chat.Kuaishou.IWebComboCommentFeed=} [properties] Properties to set
             */
            function WebComboCommentFeed(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebComboCommentFeed id.
             * @member {string} id
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @instance
             */
            WebComboCommentFeed.prototype.id = "";

            /**
             * WebComboCommentFeed content.
             * @member {string} content
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @instance
             */
            WebComboCommentFeed.prototype.content = "";

            /**
             * WebComboCommentFeed comboCount.
             * @member {number} comboCount
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @instance
             */
            WebComboCommentFeed.prototype.comboCount = 0;

            /**
             * Creates a new WebComboCommentFeed instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @static
             * @param {chat.Kuaishou.IWebComboCommentFeed=} [properties] Properties to set
             * @returns {chat.Kuaishou.WebComboCommentFeed} WebComboCommentFeed instance
             */
            WebComboCommentFeed.create = function create(properties) {
                return new WebComboCommentFeed(properties);
            };

            /**
             * Encodes the specified WebComboCommentFeed message. Does not implicitly {@link chat.Kuaishou.WebComboCommentFeed.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @static
             * @param {chat.Kuaishou.IWebComboCommentFeed} message WebComboCommentFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebComboCommentFeed.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                if (message.comboCount != null && Object.hasOwnProperty.call(message, "comboCount"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.comboCount);
                return writer;
            };

            /**
             * Encodes the specified WebComboCommentFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.WebComboCommentFeed.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @static
             * @param {chat.Kuaishou.IWebComboCommentFeed} message WebComboCommentFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebComboCommentFeed.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebComboCommentFeed message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.WebComboCommentFeed} WebComboCommentFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebComboCommentFeed.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.WebComboCommentFeed();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.content = reader.string();
                            break;
                        }
                    case 3: {
                            message.comboCount = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WebComboCommentFeed message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.WebComboCommentFeed} WebComboCommentFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebComboCommentFeed.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebComboCommentFeed message.
             * @function verify
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebComboCommentFeed.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.comboCount != null && message.hasOwnProperty("comboCount"))
                    if (!$util.isInteger(message.comboCount))
                        return "comboCount: integer expected";
                return null;
            };

            /**
             * Creates a WebComboCommentFeed message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.WebComboCommentFeed} WebComboCommentFeed
             */
            WebComboCommentFeed.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.WebComboCommentFeed)
                    return object;
                let message = new $root.chat.Kuaishou.WebComboCommentFeed();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.content != null)
                    message.content = String(object.content);
                if (object.comboCount != null)
                    message.comboCount = object.comboCount >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a WebComboCommentFeed message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @static
             * @param {chat.Kuaishou.WebComboCommentFeed} message WebComboCommentFeed
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebComboCommentFeed.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.content = "";
                    object.comboCount = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.comboCount != null && message.hasOwnProperty("comboCount"))
                    object.comboCount = message.comboCount;
                return object;
            };

            /**
             * Converts this WebComboCommentFeed to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebComboCommentFeed.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WebComboCommentFeed
             * @function getTypeUrl
             * @memberof chat.Kuaishou.WebComboCommentFeed
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebComboCommentFeed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.WebComboCommentFeed";
            };

            return WebComboCommentFeed;
        })();

        Kuaishou.WebSystemNoticeFeed = (function() {

            /**
             * Properties of a WebSystemNoticeFeed.
             * @memberof chat.Kuaishou
             * @interface IWebSystemNoticeFeed
             * @property {string|null} [id] WebSystemNoticeFeed id
             * @property {chat.Kuaishou.ISimpleUserInfo|null} [user] WebSystemNoticeFeed user
             * @property {number|Long|null} [time] WebSystemNoticeFeed time
             * @property {string|null} [content] WebSystemNoticeFeed content
             * @property {number|Long|null} [displayDuration] WebSystemNoticeFeed displayDuration
             * @property {number|Long|null} [sortRank] WebSystemNoticeFeed sortRank
             * @property {chat.Kuaishou.WebSystemNoticeFeed.DisplayType|null} [displayType] WebSystemNoticeFeed displayType
             */

            /**
             * Constructs a new WebSystemNoticeFeed.
             * @memberof chat.Kuaishou
             * @classdesc Represents a WebSystemNoticeFeed.
             * @implements IWebSystemNoticeFeed
             * @constructor
             * @param {chat.Kuaishou.IWebSystemNoticeFeed=} [properties] Properties to set
             */
            function WebSystemNoticeFeed(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebSystemNoticeFeed id.
             * @member {string} id
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @instance
             */
            WebSystemNoticeFeed.prototype.id = "";

            /**
             * WebSystemNoticeFeed user.
             * @member {chat.Kuaishou.ISimpleUserInfo|null|undefined} user
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @instance
             */
            WebSystemNoticeFeed.prototype.user = null;

            /**
             * WebSystemNoticeFeed time.
             * @member {number|Long} time
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @instance
             */
            WebSystemNoticeFeed.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebSystemNoticeFeed content.
             * @member {string} content
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @instance
             */
            WebSystemNoticeFeed.prototype.content = "";

            /**
             * WebSystemNoticeFeed displayDuration.
             * @member {number|Long} displayDuration
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @instance
             */
            WebSystemNoticeFeed.prototype.displayDuration = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebSystemNoticeFeed sortRank.
             * @member {number|Long} sortRank
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @instance
             */
            WebSystemNoticeFeed.prototype.sortRank = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebSystemNoticeFeed displayType.
             * @member {chat.Kuaishou.WebSystemNoticeFeed.DisplayType} displayType
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @instance
             */
            WebSystemNoticeFeed.prototype.displayType = 0;

            /**
             * Creates a new WebSystemNoticeFeed instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @static
             * @param {chat.Kuaishou.IWebSystemNoticeFeed=} [properties] Properties to set
             * @returns {chat.Kuaishou.WebSystemNoticeFeed} WebSystemNoticeFeed instance
             */
            WebSystemNoticeFeed.create = function create(properties) {
                return new WebSystemNoticeFeed(properties);
            };

            /**
             * Encodes the specified WebSystemNoticeFeed message. Does not implicitly {@link chat.Kuaishou.WebSystemNoticeFeed.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @static
             * @param {chat.Kuaishou.IWebSystemNoticeFeed} message WebSystemNoticeFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebSystemNoticeFeed.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.chat.Kuaishou.SimpleUserInfo.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.time);
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
                if (message.displayDuration != null && Object.hasOwnProperty.call(message, "displayDuration"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.displayDuration);
                if (message.sortRank != null && Object.hasOwnProperty.call(message, "sortRank"))
                    writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.sortRank);
                if (message.displayType != null && Object.hasOwnProperty.call(message, "displayType"))
                    writer.uint32(/* id 7, wireType 0 =*/56).int32(message.displayType);
                return writer;
            };

            /**
             * Encodes the specified WebSystemNoticeFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.WebSystemNoticeFeed.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @static
             * @param {chat.Kuaishou.IWebSystemNoticeFeed} message WebSystemNoticeFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebSystemNoticeFeed.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebSystemNoticeFeed message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.WebSystemNoticeFeed} WebSystemNoticeFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebSystemNoticeFeed.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.WebSystemNoticeFeed();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.user = $root.chat.Kuaishou.SimpleUserInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.time = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.content = reader.string();
                            break;
                        }
                    case 5: {
                            message.displayDuration = reader.uint64();
                            break;
                        }
                    case 6: {
                            message.sortRank = reader.uint64();
                            break;
                        }
                    case 7: {
                            message.displayType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WebSystemNoticeFeed message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.WebSystemNoticeFeed} WebSystemNoticeFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebSystemNoticeFeed.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebSystemNoticeFeed message.
             * @function verify
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebSystemNoticeFeed.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    let error = $root.chat.Kuaishou.SimpleUserInfo.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                if (message.displayDuration != null && message.hasOwnProperty("displayDuration"))
                    if (!$util.isInteger(message.displayDuration) && !(message.displayDuration && $util.isInteger(message.displayDuration.low) && $util.isInteger(message.displayDuration.high)))
                        return "displayDuration: integer|Long expected";
                if (message.sortRank != null && message.hasOwnProperty("sortRank"))
                    if (!$util.isInteger(message.sortRank) && !(message.sortRank && $util.isInteger(message.sortRank.low) && $util.isInteger(message.sortRank.high)))
                        return "sortRank: integer|Long expected";
                if (message.displayType != null && message.hasOwnProperty("displayType"))
                    switch (message.displayType) {
                    default:
                        return "displayType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                return null;
            };

            /**
             * Creates a WebSystemNoticeFeed message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.WebSystemNoticeFeed} WebSystemNoticeFeed
             */
            WebSystemNoticeFeed.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.WebSystemNoticeFeed)
                    return object;
                let message = new $root.chat.Kuaishou.WebSystemNoticeFeed();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".chat.Kuaishou.WebSystemNoticeFeed.user: object expected");
                    message.user = $root.chat.Kuaishou.SimpleUserInfo.fromObject(object.user);
                }
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                if (object.content != null)
                    message.content = String(object.content);
                if (object.displayDuration != null)
                    if ($util.Long)
                        (message.displayDuration = $util.Long.fromValue(object.displayDuration)).unsigned = true;
                    else if (typeof object.displayDuration === "string")
                        message.displayDuration = parseInt(object.displayDuration, 10);
                    else if (typeof object.displayDuration === "number")
                        message.displayDuration = object.displayDuration;
                    else if (typeof object.displayDuration === "object")
                        message.displayDuration = new $util.LongBits(object.displayDuration.low >>> 0, object.displayDuration.high >>> 0).toNumber(true);
                if (object.sortRank != null)
                    if ($util.Long)
                        (message.sortRank = $util.Long.fromValue(object.sortRank)).unsigned = true;
                    else if (typeof object.sortRank === "string")
                        message.sortRank = parseInt(object.sortRank, 10);
                    else if (typeof object.sortRank === "number")
                        message.sortRank = object.sortRank;
                    else if (typeof object.sortRank === "object")
                        message.sortRank = new $util.LongBits(object.sortRank.low >>> 0, object.sortRank.high >>> 0).toNumber(true);
                switch (object.displayType) {
                default:
                    if (typeof object.displayType === "number") {
                        message.displayType = object.displayType;
                        break;
                    }
                    break;
                case "UNKNOWN_DISPLAY_TYPE":
                case 0:
                    message.displayType = 0;
                    break;
                case "COMMENT":
                case 1:
                    message.displayType = 1;
                    break;
                case "ALERT":
                case 2:
                    message.displayType = 2;
                    break;
                case "TOAST":
                case 3:
                    message.displayType = 3;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a WebSystemNoticeFeed message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @static
             * @param {chat.Kuaishou.WebSystemNoticeFeed} message WebSystemNoticeFeed
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebSystemNoticeFeed.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.user = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                    object.content = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.displayDuration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.displayDuration = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.sortRank = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.sortRank = options.longs === String ? "0" : 0;
                    object.displayType = options.enums === String ? "UNKNOWN_DISPLAY_TYPE" : 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.chat.Kuaishou.SimpleUserInfo.toObject(message.user, options);
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.displayDuration != null && message.hasOwnProperty("displayDuration"))
                    if (typeof message.displayDuration === "number")
                        object.displayDuration = options.longs === String ? String(message.displayDuration) : message.displayDuration;
                    else
                        object.displayDuration = options.longs === String ? $util.Long.prototype.toString.call(message.displayDuration) : options.longs === Number ? new $util.LongBits(message.displayDuration.low >>> 0, message.displayDuration.high >>> 0).toNumber(true) : message.displayDuration;
                if (message.sortRank != null && message.hasOwnProperty("sortRank"))
                    if (typeof message.sortRank === "number")
                        object.sortRank = options.longs === String ? String(message.sortRank) : message.sortRank;
                    else
                        object.sortRank = options.longs === String ? $util.Long.prototype.toString.call(message.sortRank) : options.longs === Number ? new $util.LongBits(message.sortRank.low >>> 0, message.sortRank.high >>> 0).toNumber(true) : message.sortRank;
                if (message.displayType != null && message.hasOwnProperty("displayType"))
                    object.displayType = options.enums === String ? $root.chat.Kuaishou.WebSystemNoticeFeed.DisplayType[message.displayType] === undefined ? message.displayType : $root.chat.Kuaishou.WebSystemNoticeFeed.DisplayType[message.displayType] : message.displayType;
                return object;
            };

            /**
             * Converts this WebSystemNoticeFeed to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebSystemNoticeFeed.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WebSystemNoticeFeed
             * @function getTypeUrl
             * @memberof chat.Kuaishou.WebSystemNoticeFeed
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebSystemNoticeFeed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.WebSystemNoticeFeed";
            };

            /**
             * DisplayType enum.
             * @name chat.Kuaishou.WebSystemNoticeFeed.DisplayType
             * @enum {number}
             * @property {number} UNKNOWN_DISPLAY_TYPE=0 UNKNOWN_DISPLAY_TYPE value
             * @property {number} COMMENT=1 COMMENT value
             * @property {number} ALERT=2 ALERT value
             * @property {number} TOAST=3 TOAST value
             */
            WebSystemNoticeFeed.DisplayType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_DISPLAY_TYPE"] = 0;
                values[valuesById[1] = "COMMENT"] = 1;
                values[valuesById[2] = "ALERT"] = 2;
                values[valuesById[3] = "TOAST"] = 3;
                return values;
            })();

            return WebSystemNoticeFeed;
        })();

        Kuaishou.WebGiftFeed = (function() {

            /**
             * Properties of a WebGiftFeed.
             * @memberof chat.Kuaishou
             * @interface IWebGiftFeed
             * @property {string|null} [id] WebGiftFeed id
             * @property {chat.Kuaishou.ISimpleUserInfo|null} [user] WebGiftFeed user
             * @property {number|Long|null} [time] WebGiftFeed time
             * @property {number|null} [giftId] WebGiftFeed giftId
             * @property {number|Long|null} [sortRank] WebGiftFeed sortRank
             * @property {string|null} [mergeKey] WebGiftFeed mergeKey
             * @property {number|null} [batchSize] WebGiftFeed batchSize
             * @property {number|null} [comboCount] WebGiftFeed comboCount
             * @property {number|null} [rank] WebGiftFeed rank
             * @property {number|Long|null} [expireDuration] WebGiftFeed expireDuration
             * @property {number|Long|null} [clientTimestamp] WebGiftFeed clientTimestamp
             * @property {number|Long|null} [slotDisplayDuration] WebGiftFeed slotDisplayDuration
             * @property {number|null} [starLevel] WebGiftFeed starLevel
             * @property {chat.Kuaishou.WebGiftFeed.StyleType|null} [styleType] WebGiftFeed styleType
             * @property {chat.Kuaishou.WebLiveAssistantType|null} [liveAssistantType] WebGiftFeed liveAssistantType
             * @property {string|null} [deviceHash] WebGiftFeed deviceHash
             * @property {boolean|null} [danmakuDisplay] WebGiftFeed danmakuDisplay
             */

            /**
             * Constructs a new WebGiftFeed.
             * @memberof chat.Kuaishou
             * @classdesc Represents a WebGiftFeed.
             * @implements IWebGiftFeed
             * @constructor
             * @param {chat.Kuaishou.IWebGiftFeed=} [properties] Properties to set
             */
            function WebGiftFeed(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebGiftFeed id.
             * @member {string} id
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.id = "";

            /**
             * WebGiftFeed user.
             * @member {chat.Kuaishou.ISimpleUserInfo|null|undefined} user
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.user = null;

            /**
             * WebGiftFeed time.
             * @member {number|Long} time
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebGiftFeed giftId.
             * @member {number} giftId
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.giftId = 0;

            /**
             * WebGiftFeed sortRank.
             * @member {number|Long} sortRank
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.sortRank = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebGiftFeed mergeKey.
             * @member {string} mergeKey
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.mergeKey = "";

            /**
             * WebGiftFeed batchSize.
             * @member {number} batchSize
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.batchSize = 0;

            /**
             * WebGiftFeed comboCount.
             * @member {number} comboCount
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.comboCount = 0;

            /**
             * WebGiftFeed rank.
             * @member {number} rank
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.rank = 0;

            /**
             * WebGiftFeed expireDuration.
             * @member {number|Long} expireDuration
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.expireDuration = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebGiftFeed clientTimestamp.
             * @member {number|Long} clientTimestamp
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.clientTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebGiftFeed slotDisplayDuration.
             * @member {number|Long} slotDisplayDuration
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.slotDisplayDuration = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebGiftFeed starLevel.
             * @member {number} starLevel
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.starLevel = 0;

            /**
             * WebGiftFeed styleType.
             * @member {chat.Kuaishou.WebGiftFeed.StyleType} styleType
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.styleType = 0;

            /**
             * WebGiftFeed liveAssistantType.
             * @member {chat.Kuaishou.WebLiveAssistantType} liveAssistantType
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.liveAssistantType = 0;

            /**
             * WebGiftFeed deviceHash.
             * @member {string} deviceHash
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.deviceHash = "";

            /**
             * WebGiftFeed danmakuDisplay.
             * @member {boolean} danmakuDisplay
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             */
            WebGiftFeed.prototype.danmakuDisplay = false;

            /**
             * Creates a new WebGiftFeed instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.WebGiftFeed
             * @static
             * @param {chat.Kuaishou.IWebGiftFeed=} [properties] Properties to set
             * @returns {chat.Kuaishou.WebGiftFeed} WebGiftFeed instance
             */
            WebGiftFeed.create = function create(properties) {
                return new WebGiftFeed(properties);
            };

            /**
             * Encodes the specified WebGiftFeed message. Does not implicitly {@link chat.Kuaishou.WebGiftFeed.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.WebGiftFeed
             * @static
             * @param {chat.Kuaishou.IWebGiftFeed} message WebGiftFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebGiftFeed.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.chat.Kuaishou.SimpleUserInfo.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.time);
                if (message.giftId != null && Object.hasOwnProperty.call(message, "giftId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.giftId);
                if (message.sortRank != null && Object.hasOwnProperty.call(message, "sortRank"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.sortRank);
                if (message.mergeKey != null && Object.hasOwnProperty.call(message, "mergeKey"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.mergeKey);
                if (message.batchSize != null && Object.hasOwnProperty.call(message, "batchSize"))
                    writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.batchSize);
                if (message.comboCount != null && Object.hasOwnProperty.call(message, "comboCount"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.comboCount);
                if (message.rank != null && Object.hasOwnProperty.call(message, "rank"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.rank);
                if (message.expireDuration != null && Object.hasOwnProperty.call(message, "expireDuration"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.expireDuration);
                if (message.clientTimestamp != null && Object.hasOwnProperty.call(message, "clientTimestamp"))
                    writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.clientTimestamp);
                if (message.slotDisplayDuration != null && Object.hasOwnProperty.call(message, "slotDisplayDuration"))
                    writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.slotDisplayDuration);
                if (message.starLevel != null && Object.hasOwnProperty.call(message, "starLevel"))
                    writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.starLevel);
                if (message.styleType != null && Object.hasOwnProperty.call(message, "styleType"))
                    writer.uint32(/* id 14, wireType 0 =*/112).int32(message.styleType);
                if (message.liveAssistantType != null && Object.hasOwnProperty.call(message, "liveAssistantType"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.liveAssistantType);
                if (message.deviceHash != null && Object.hasOwnProperty.call(message, "deviceHash"))
                    writer.uint32(/* id 16, wireType 2 =*/130).string(message.deviceHash);
                if (message.danmakuDisplay != null && Object.hasOwnProperty.call(message, "danmakuDisplay"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.danmakuDisplay);
                return writer;
            };

            /**
             * Encodes the specified WebGiftFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.WebGiftFeed.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.WebGiftFeed
             * @static
             * @param {chat.Kuaishou.IWebGiftFeed} message WebGiftFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebGiftFeed.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebGiftFeed message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.WebGiftFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.WebGiftFeed} WebGiftFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebGiftFeed.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.WebGiftFeed();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.user = $root.chat.Kuaishou.SimpleUserInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.time = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.giftId = reader.uint32();
                            break;
                        }
                    case 5: {
                            message.sortRank = reader.uint64();
                            break;
                        }
                    case 6: {
                            message.mergeKey = reader.string();
                            break;
                        }
                    case 7: {
                            message.batchSize = reader.uint32();
                            break;
                        }
                    case 8: {
                            message.comboCount = reader.uint32();
                            break;
                        }
                    case 9: {
                            message.rank = reader.uint32();
                            break;
                        }
                    case 10: {
                            message.expireDuration = reader.uint64();
                            break;
                        }
                    case 11: {
                            message.clientTimestamp = reader.uint64();
                            break;
                        }
                    case 12: {
                            message.slotDisplayDuration = reader.uint64();
                            break;
                        }
                    case 13: {
                            message.starLevel = reader.uint32();
                            break;
                        }
                    case 14: {
                            message.styleType = reader.int32();
                            break;
                        }
                    case 15: {
                            message.liveAssistantType = reader.int32();
                            break;
                        }
                    case 16: {
                            message.deviceHash = reader.string();
                            break;
                        }
                    case 17: {
                            message.danmakuDisplay = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WebGiftFeed message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.WebGiftFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.WebGiftFeed} WebGiftFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebGiftFeed.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebGiftFeed message.
             * @function verify
             * @memberof chat.Kuaishou.WebGiftFeed
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebGiftFeed.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    let error = $root.chat.Kuaishou.SimpleUserInfo.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                if (message.giftId != null && message.hasOwnProperty("giftId"))
                    if (!$util.isInteger(message.giftId))
                        return "giftId: integer expected";
                if (message.sortRank != null && message.hasOwnProperty("sortRank"))
                    if (!$util.isInteger(message.sortRank) && !(message.sortRank && $util.isInteger(message.sortRank.low) && $util.isInteger(message.sortRank.high)))
                        return "sortRank: integer|Long expected";
                if (message.mergeKey != null && message.hasOwnProperty("mergeKey"))
                    if (!$util.isString(message.mergeKey))
                        return "mergeKey: string expected";
                if (message.batchSize != null && message.hasOwnProperty("batchSize"))
                    if (!$util.isInteger(message.batchSize))
                        return "batchSize: integer expected";
                if (message.comboCount != null && message.hasOwnProperty("comboCount"))
                    if (!$util.isInteger(message.comboCount))
                        return "comboCount: integer expected";
                if (message.rank != null && message.hasOwnProperty("rank"))
                    if (!$util.isInteger(message.rank))
                        return "rank: integer expected";
                if (message.expireDuration != null && message.hasOwnProperty("expireDuration"))
                    if (!$util.isInteger(message.expireDuration) && !(message.expireDuration && $util.isInteger(message.expireDuration.low) && $util.isInteger(message.expireDuration.high)))
                        return "expireDuration: integer|Long expected";
                if (message.clientTimestamp != null && message.hasOwnProperty("clientTimestamp"))
                    if (!$util.isInteger(message.clientTimestamp) && !(message.clientTimestamp && $util.isInteger(message.clientTimestamp.low) && $util.isInteger(message.clientTimestamp.high)))
                        return "clientTimestamp: integer|Long expected";
                if (message.slotDisplayDuration != null && message.hasOwnProperty("slotDisplayDuration"))
                    if (!$util.isInteger(message.slotDisplayDuration) && !(message.slotDisplayDuration && $util.isInteger(message.slotDisplayDuration.low) && $util.isInteger(message.slotDisplayDuration.high)))
                        return "slotDisplayDuration: integer|Long expected";
                if (message.starLevel != null && message.hasOwnProperty("starLevel"))
                    if (!$util.isInteger(message.starLevel))
                        return "starLevel: integer expected";
                if (message.styleType != null && message.hasOwnProperty("styleType"))
                    switch (message.styleType) {
                    default:
                        return "styleType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        break;
                    }
                if (message.liveAssistantType != null && message.hasOwnProperty("liveAssistantType"))
                    switch (message.liveAssistantType) {
                    default:
                        return "liveAssistantType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.deviceHash != null && message.hasOwnProperty("deviceHash"))
                    if (!$util.isString(message.deviceHash))
                        return "deviceHash: string expected";
                if (message.danmakuDisplay != null && message.hasOwnProperty("danmakuDisplay"))
                    if (typeof message.danmakuDisplay !== "boolean")
                        return "danmakuDisplay: boolean expected";
                return null;
            };

            /**
             * Creates a WebGiftFeed message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.WebGiftFeed
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.WebGiftFeed} WebGiftFeed
             */
            WebGiftFeed.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.WebGiftFeed)
                    return object;
                let message = new $root.chat.Kuaishou.WebGiftFeed();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".chat.Kuaishou.WebGiftFeed.user: object expected");
                    message.user = $root.chat.Kuaishou.SimpleUserInfo.fromObject(object.user);
                }
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                if (object.giftId != null)
                    message.giftId = object.giftId >>> 0;
                if (object.sortRank != null)
                    if ($util.Long)
                        (message.sortRank = $util.Long.fromValue(object.sortRank)).unsigned = true;
                    else if (typeof object.sortRank === "string")
                        message.sortRank = parseInt(object.sortRank, 10);
                    else if (typeof object.sortRank === "number")
                        message.sortRank = object.sortRank;
                    else if (typeof object.sortRank === "object")
                        message.sortRank = new $util.LongBits(object.sortRank.low >>> 0, object.sortRank.high >>> 0).toNumber(true);
                if (object.mergeKey != null)
                    message.mergeKey = String(object.mergeKey);
                if (object.batchSize != null)
                    message.batchSize = object.batchSize >>> 0;
                if (object.comboCount != null)
                    message.comboCount = object.comboCount >>> 0;
                if (object.rank != null)
                    message.rank = object.rank >>> 0;
                if (object.expireDuration != null)
                    if ($util.Long)
                        (message.expireDuration = $util.Long.fromValue(object.expireDuration)).unsigned = true;
                    else if (typeof object.expireDuration === "string")
                        message.expireDuration = parseInt(object.expireDuration, 10);
                    else if (typeof object.expireDuration === "number")
                        message.expireDuration = object.expireDuration;
                    else if (typeof object.expireDuration === "object")
                        message.expireDuration = new $util.LongBits(object.expireDuration.low >>> 0, object.expireDuration.high >>> 0).toNumber(true);
                if (object.clientTimestamp != null)
                    if ($util.Long)
                        (message.clientTimestamp = $util.Long.fromValue(object.clientTimestamp)).unsigned = true;
                    else if (typeof object.clientTimestamp === "string")
                        message.clientTimestamp = parseInt(object.clientTimestamp, 10);
                    else if (typeof object.clientTimestamp === "number")
                        message.clientTimestamp = object.clientTimestamp;
                    else if (typeof object.clientTimestamp === "object")
                        message.clientTimestamp = new $util.LongBits(object.clientTimestamp.low >>> 0, object.clientTimestamp.high >>> 0).toNumber(true);
                if (object.slotDisplayDuration != null)
                    if ($util.Long)
                        (message.slotDisplayDuration = $util.Long.fromValue(object.slotDisplayDuration)).unsigned = true;
                    else if (typeof object.slotDisplayDuration === "string")
                        message.slotDisplayDuration = parseInt(object.slotDisplayDuration, 10);
                    else if (typeof object.slotDisplayDuration === "number")
                        message.slotDisplayDuration = object.slotDisplayDuration;
                    else if (typeof object.slotDisplayDuration === "object")
                        message.slotDisplayDuration = new $util.LongBits(object.slotDisplayDuration.low >>> 0, object.slotDisplayDuration.high >>> 0).toNumber(true);
                if (object.starLevel != null)
                    message.starLevel = object.starLevel >>> 0;
                switch (object.styleType) {
                default:
                    if (typeof object.styleType === "number") {
                        message.styleType = object.styleType;
                        break;
                    }
                    break;
                case "UNKNOWN_STYLE":
                case 0:
                    message.styleType = 0;
                    break;
                case "BATCH_STAR_0":
                case 1:
                    message.styleType = 1;
                    break;
                case "BATCH_STAR_1":
                case 2:
                    message.styleType = 2;
                    break;
                case "BATCH_STAR_2":
                case 3:
                    message.styleType = 3;
                    break;
                case "BATCH_STAR_3":
                case 4:
                    message.styleType = 4;
                    break;
                case "BATCH_STAR_4":
                case 5:
                    message.styleType = 5;
                    break;
                case "BATCH_STAR_5":
                case 6:
                    message.styleType = 6;
                    break;
                case "BATCH_STAR_6":
                case 7:
                    message.styleType = 7;
                    break;
                }
                switch (object.liveAssistantType) {
                default:
                    if (typeof object.liveAssistantType === "number") {
                        message.liveAssistantType = object.liveAssistantType;
                        break;
                    }
                    break;
                case "UNKNOWN_ASSISTANT_TYPE":
                case 0:
                    message.liveAssistantType = 0;
                    break;
                case "SUPER":
                case 1:
                    message.liveAssistantType = 1;
                    break;
                case "JUNIOR":
                case 2:
                    message.liveAssistantType = 2;
                    break;
                }
                if (object.deviceHash != null)
                    message.deviceHash = String(object.deviceHash);
                if (object.danmakuDisplay != null)
                    message.danmakuDisplay = Boolean(object.danmakuDisplay);
                return message;
            };

            /**
             * Creates a plain object from a WebGiftFeed message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.WebGiftFeed
             * @static
             * @param {chat.Kuaishou.WebGiftFeed} message WebGiftFeed
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebGiftFeed.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.user = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                    object.giftId = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.sortRank = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.sortRank = options.longs === String ? "0" : 0;
                    object.mergeKey = "";
                    object.batchSize = 0;
                    object.comboCount = 0;
                    object.rank = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.expireDuration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.expireDuration = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.clientTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.clientTimestamp = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.slotDisplayDuration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.slotDisplayDuration = options.longs === String ? "0" : 0;
                    object.starLevel = 0;
                    object.styleType = options.enums === String ? "UNKNOWN_STYLE" : 0;
                    object.liveAssistantType = options.enums === String ? "UNKNOWN_ASSISTANT_TYPE" : 0;
                    object.deviceHash = "";
                    object.danmakuDisplay = false;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.chat.Kuaishou.SimpleUserInfo.toObject(message.user, options);
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                if (message.giftId != null && message.hasOwnProperty("giftId"))
                    object.giftId = message.giftId;
                if (message.sortRank != null && message.hasOwnProperty("sortRank"))
                    if (typeof message.sortRank === "number")
                        object.sortRank = options.longs === String ? String(message.sortRank) : message.sortRank;
                    else
                        object.sortRank = options.longs === String ? $util.Long.prototype.toString.call(message.sortRank) : options.longs === Number ? new $util.LongBits(message.sortRank.low >>> 0, message.sortRank.high >>> 0).toNumber(true) : message.sortRank;
                if (message.mergeKey != null && message.hasOwnProperty("mergeKey"))
                    object.mergeKey = message.mergeKey;
                if (message.batchSize != null && message.hasOwnProperty("batchSize"))
                    object.batchSize = message.batchSize;
                if (message.comboCount != null && message.hasOwnProperty("comboCount"))
                    object.comboCount = message.comboCount;
                if (message.rank != null && message.hasOwnProperty("rank"))
                    object.rank = message.rank;
                if (message.expireDuration != null && message.hasOwnProperty("expireDuration"))
                    if (typeof message.expireDuration === "number")
                        object.expireDuration = options.longs === String ? String(message.expireDuration) : message.expireDuration;
                    else
                        object.expireDuration = options.longs === String ? $util.Long.prototype.toString.call(message.expireDuration) : options.longs === Number ? new $util.LongBits(message.expireDuration.low >>> 0, message.expireDuration.high >>> 0).toNumber(true) : message.expireDuration;
                if (message.clientTimestamp != null && message.hasOwnProperty("clientTimestamp"))
                    if (typeof message.clientTimestamp === "number")
                        object.clientTimestamp = options.longs === String ? String(message.clientTimestamp) : message.clientTimestamp;
                    else
                        object.clientTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.clientTimestamp) : options.longs === Number ? new $util.LongBits(message.clientTimestamp.low >>> 0, message.clientTimestamp.high >>> 0).toNumber(true) : message.clientTimestamp;
                if (message.slotDisplayDuration != null && message.hasOwnProperty("slotDisplayDuration"))
                    if (typeof message.slotDisplayDuration === "number")
                        object.slotDisplayDuration = options.longs === String ? String(message.slotDisplayDuration) : message.slotDisplayDuration;
                    else
                        object.slotDisplayDuration = options.longs === String ? $util.Long.prototype.toString.call(message.slotDisplayDuration) : options.longs === Number ? new $util.LongBits(message.slotDisplayDuration.low >>> 0, message.slotDisplayDuration.high >>> 0).toNumber(true) : message.slotDisplayDuration;
                if (message.starLevel != null && message.hasOwnProperty("starLevel"))
                    object.starLevel = message.starLevel;
                if (message.styleType != null && message.hasOwnProperty("styleType"))
                    object.styleType = options.enums === String ? $root.chat.Kuaishou.WebGiftFeed.StyleType[message.styleType] === undefined ? message.styleType : $root.chat.Kuaishou.WebGiftFeed.StyleType[message.styleType] : message.styleType;
                if (message.liveAssistantType != null && message.hasOwnProperty("liveAssistantType"))
                    object.liveAssistantType = options.enums === String ? $root.chat.Kuaishou.WebLiveAssistantType[message.liveAssistantType] === undefined ? message.liveAssistantType : $root.chat.Kuaishou.WebLiveAssistantType[message.liveAssistantType] : message.liveAssistantType;
                if (message.deviceHash != null && message.hasOwnProperty("deviceHash"))
                    object.deviceHash = message.deviceHash;
                if (message.danmakuDisplay != null && message.hasOwnProperty("danmakuDisplay"))
                    object.danmakuDisplay = message.danmakuDisplay;
                return object;
            };

            /**
             * Converts this WebGiftFeed to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.WebGiftFeed
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebGiftFeed.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WebGiftFeed
             * @function getTypeUrl
             * @memberof chat.Kuaishou.WebGiftFeed
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebGiftFeed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.WebGiftFeed";
            };

            /**
             * StyleType enum.
             * @name chat.Kuaishou.WebGiftFeed.StyleType
             * @enum {number}
             * @property {number} UNKNOWN_STYLE=0 UNKNOWN_STYLE value
             * @property {number} BATCH_STAR_0=1 BATCH_STAR_0 value
             * @property {number} BATCH_STAR_1=2 BATCH_STAR_1 value
             * @property {number} BATCH_STAR_2=3 BATCH_STAR_2 value
             * @property {number} BATCH_STAR_3=4 BATCH_STAR_3 value
             * @property {number} BATCH_STAR_4=5 BATCH_STAR_4 value
             * @property {number} BATCH_STAR_5=6 BATCH_STAR_5 value
             * @property {number} BATCH_STAR_6=7 BATCH_STAR_6 value
             */
            WebGiftFeed.StyleType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN_STYLE"] = 0;
                values[valuesById[1] = "BATCH_STAR_0"] = 1;
                values[valuesById[2] = "BATCH_STAR_1"] = 2;
                values[valuesById[3] = "BATCH_STAR_2"] = 3;
                values[valuesById[4] = "BATCH_STAR_3"] = 4;
                values[valuesById[5] = "BATCH_STAR_4"] = 5;
                values[valuesById[6] = "BATCH_STAR_5"] = 6;
                values[valuesById[7] = "BATCH_STAR_6"] = 7;
                return values;
            })();

            return WebGiftFeed;
        })();

        Kuaishou.SCWebRefreshWallet = (function() {

            /**
             * Properties of a SCWebRefreshWallet.
             * @memberof chat.Kuaishou
             * @interface ISCWebRefreshWallet
             */

            /**
             * Constructs a new SCWebRefreshWallet.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebRefreshWallet.
             * @implements ISCWebRefreshWallet
             * @constructor
             * @param {chat.Kuaishou.ISCWebRefreshWallet=} [properties] Properties to set
             */
            function SCWebRefreshWallet(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Creates a new SCWebRefreshWallet instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebRefreshWallet
             * @static
             * @param {chat.Kuaishou.ISCWebRefreshWallet=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebRefreshWallet} SCWebRefreshWallet instance
             */
            SCWebRefreshWallet.create = function create(properties) {
                return new SCWebRefreshWallet(properties);
            };

            /**
             * Encodes the specified SCWebRefreshWallet message. Does not implicitly {@link chat.Kuaishou.SCWebRefreshWallet.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebRefreshWallet
             * @static
             * @param {chat.Kuaishou.ISCWebRefreshWallet} message SCWebRefreshWallet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebRefreshWallet.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                return writer;
            };

            /**
             * Encodes the specified SCWebRefreshWallet message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebRefreshWallet.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebRefreshWallet
             * @static
             * @param {chat.Kuaishou.ISCWebRefreshWallet} message SCWebRefreshWallet message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebRefreshWallet.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebRefreshWallet message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebRefreshWallet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebRefreshWallet} SCWebRefreshWallet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebRefreshWallet.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebRefreshWallet();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebRefreshWallet message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebRefreshWallet
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebRefreshWallet} SCWebRefreshWallet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebRefreshWallet.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebRefreshWallet message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebRefreshWallet
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebRefreshWallet.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                return null;
            };

            /**
             * Creates a SCWebRefreshWallet message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebRefreshWallet
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebRefreshWallet} SCWebRefreshWallet
             */
            SCWebRefreshWallet.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebRefreshWallet)
                    return object;
                return new $root.chat.Kuaishou.SCWebRefreshWallet();
            };

            /**
             * Creates a plain object from a SCWebRefreshWallet message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebRefreshWallet
             * @static
             * @param {chat.Kuaishou.SCWebRefreshWallet} message SCWebRefreshWallet
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebRefreshWallet.toObject = function toObject() {
                return {};
            };

            /**
             * Converts this SCWebRefreshWallet to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebRefreshWallet
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebRefreshWallet.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebRefreshWallet
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebRefreshWallet
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebRefreshWallet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebRefreshWallet";
            };

            return SCWebRefreshWallet;
        })();

        Kuaishou.SCWebCurrentRedPackFeed = (function() {

            /**
             * Properties of a SCWebCurrentRedPackFeed.
             * @memberof chat.Kuaishou
             * @interface ISCWebCurrentRedPackFeed
             * @property {chat.Kuaishou.IWebRedPackInfo|null} [redPack] SCWebCurrentRedPackFeed redPack
             */

            /**
             * Constructs a new SCWebCurrentRedPackFeed.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebCurrentRedPackFeed.
             * @implements ISCWebCurrentRedPackFeed
             * @constructor
             * @param {chat.Kuaishou.ISCWebCurrentRedPackFeed=} [properties] Properties to set
             */
            function SCWebCurrentRedPackFeed(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebCurrentRedPackFeed redPack.
             * @member {chat.Kuaishou.IWebRedPackInfo|null|undefined} redPack
             * @memberof chat.Kuaishou.SCWebCurrentRedPackFeed
             * @instance
             */
            SCWebCurrentRedPackFeed.prototype.redPack = null;

            /**
             * Creates a new SCWebCurrentRedPackFeed instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebCurrentRedPackFeed
             * @static
             * @param {chat.Kuaishou.ISCWebCurrentRedPackFeed=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebCurrentRedPackFeed} SCWebCurrentRedPackFeed instance
             */
            SCWebCurrentRedPackFeed.create = function create(properties) {
                return new SCWebCurrentRedPackFeed(properties);
            };

            /**
             * Encodes the specified SCWebCurrentRedPackFeed message. Does not implicitly {@link chat.Kuaishou.SCWebCurrentRedPackFeed.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebCurrentRedPackFeed
             * @static
             * @param {chat.Kuaishou.ISCWebCurrentRedPackFeed} message SCWebCurrentRedPackFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebCurrentRedPackFeed.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.redPack != null && Object.hasOwnProperty.call(message, "redPack"))
                    $root.chat.Kuaishou.WebRedPackInfo.encode(message.redPack, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SCWebCurrentRedPackFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebCurrentRedPackFeed.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebCurrentRedPackFeed
             * @static
             * @param {chat.Kuaishou.ISCWebCurrentRedPackFeed} message SCWebCurrentRedPackFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebCurrentRedPackFeed.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebCurrentRedPackFeed message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebCurrentRedPackFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebCurrentRedPackFeed} SCWebCurrentRedPackFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebCurrentRedPackFeed.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebCurrentRedPackFeed();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.redPack = $root.chat.Kuaishou.WebRedPackInfo.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebCurrentRedPackFeed message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebCurrentRedPackFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebCurrentRedPackFeed} SCWebCurrentRedPackFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebCurrentRedPackFeed.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebCurrentRedPackFeed message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebCurrentRedPackFeed
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebCurrentRedPackFeed.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.redPack != null && message.hasOwnProperty("redPack")) {
                    let error = $root.chat.Kuaishou.WebRedPackInfo.verify(message.redPack);
                    if (error)
                        return "redPack." + error;
                }
                return null;
            };

            /**
             * Creates a SCWebCurrentRedPackFeed message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebCurrentRedPackFeed
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebCurrentRedPackFeed} SCWebCurrentRedPackFeed
             */
            SCWebCurrentRedPackFeed.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebCurrentRedPackFeed)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebCurrentRedPackFeed();
                if (object.redPack != null) {
                    if (typeof object.redPack !== "object")
                        throw TypeError(".chat.Kuaishou.SCWebCurrentRedPackFeed.redPack: object expected");
                    message.redPack = $root.chat.Kuaishou.WebRedPackInfo.fromObject(object.redPack);
                }
                return message;
            };

            /**
             * Creates a plain object from a SCWebCurrentRedPackFeed message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebCurrentRedPackFeed
             * @static
             * @param {chat.Kuaishou.SCWebCurrentRedPackFeed} message SCWebCurrentRedPackFeed
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebCurrentRedPackFeed.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.redPack = null;
                if (message.redPack != null && message.hasOwnProperty("redPack"))
                    object.redPack = $root.chat.Kuaishou.WebRedPackInfo.toObject(message.redPack, options);
                return object;
            };

            /**
             * Converts this SCWebCurrentRedPackFeed to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebCurrentRedPackFeed
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebCurrentRedPackFeed.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebCurrentRedPackFeed
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebCurrentRedPackFeed
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebCurrentRedPackFeed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebCurrentRedPackFeed";
            };

            return SCWebCurrentRedPackFeed;
        })();

        /**
         * WebRedPackCoverType enum.
         * @name chat.Kuaishou.WebRedPackCoverType
         * @enum {number}
         * @property {number} UNKNOWN_COVER_TYPE=0 UNKNOWN_COVER_TYPE value
         * @property {number} NORMAL_COVER=1 NORMAL_COVER value
         * @property {number} PRETTY_COVER=2 PRETTY_COVER value
         */
        Kuaishou.WebRedPackCoverType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN_COVER_TYPE"] = 0;
            values[valuesById[1] = "NORMAL_COVER"] = 1;
            values[valuesById[2] = "PRETTY_COVER"] = 2;
            return values;
        })();

        Kuaishou.WebRedPackInfo = (function() {

            /**
             * Properties of a WebRedPackInfo.
             * @memberof chat.Kuaishou
             * @interface IWebRedPackInfo
             * @property {string|null} [id] WebRedPackInfo id
             * @property {chat.Kuaishou.ISimpleUserInfo|null} [author] WebRedPackInfo author
             * @property {number|Long|null} [balance] WebRedPackInfo balance
             * @property {number|Long|null} [openTime] WebRedPackInfo openTime
             * @property {number|Long|null} [currentTime] WebRedPackInfo currentTime
             * @property {string|null} [grabToken] WebRedPackInfo grabToken
             * @property {boolean|null} [needSendRequest] WebRedPackInfo needSendRequest
             * @property {number|Long|null} [requestDelayMillis] WebRedPackInfo requestDelayMillis
             * @property {number|Long|null} [luckiestDelayMillis] WebRedPackInfo luckiestDelayMillis
             * @property {chat.Kuaishou.WebRedPackCoverType|null} [coverType] WebRedPackInfo coverType
             */

            /**
             * Constructs a new WebRedPackInfo.
             * @memberof chat.Kuaishou
             * @classdesc Represents a WebRedPackInfo.
             * @implements IWebRedPackInfo
             * @constructor
             * @param {chat.Kuaishou.IWebRedPackInfo=} [properties] Properties to set
             */
            function WebRedPackInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebRedPackInfo id.
             * @member {string} id
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @instance
             */
            WebRedPackInfo.prototype.id = "";

            /**
             * WebRedPackInfo author.
             * @member {chat.Kuaishou.ISimpleUserInfo|null|undefined} author
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @instance
             */
            WebRedPackInfo.prototype.author = null;

            /**
             * WebRedPackInfo balance.
             * @member {number|Long} balance
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @instance
             */
            WebRedPackInfo.prototype.balance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebRedPackInfo openTime.
             * @member {number|Long} openTime
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @instance
             */
            WebRedPackInfo.prototype.openTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebRedPackInfo currentTime.
             * @member {number|Long} currentTime
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @instance
             */
            WebRedPackInfo.prototype.currentTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebRedPackInfo grabToken.
             * @member {string} grabToken
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @instance
             */
            WebRedPackInfo.prototype.grabToken = "";

            /**
             * WebRedPackInfo needSendRequest.
             * @member {boolean} needSendRequest
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @instance
             */
            WebRedPackInfo.prototype.needSendRequest = false;

            /**
             * WebRedPackInfo requestDelayMillis.
             * @member {number|Long} requestDelayMillis
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @instance
             */
            WebRedPackInfo.prototype.requestDelayMillis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebRedPackInfo luckiestDelayMillis.
             * @member {number|Long} luckiestDelayMillis
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @instance
             */
            WebRedPackInfo.prototype.luckiestDelayMillis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebRedPackInfo coverType.
             * @member {chat.Kuaishou.WebRedPackCoverType} coverType
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @instance
             */
            WebRedPackInfo.prototype.coverType = 0;

            /**
             * Creates a new WebRedPackInfo instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @static
             * @param {chat.Kuaishou.IWebRedPackInfo=} [properties] Properties to set
             * @returns {chat.Kuaishou.WebRedPackInfo} WebRedPackInfo instance
             */
            WebRedPackInfo.create = function create(properties) {
                return new WebRedPackInfo(properties);
            };

            /**
             * Encodes the specified WebRedPackInfo message. Does not implicitly {@link chat.Kuaishou.WebRedPackInfo.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @static
             * @param {chat.Kuaishou.IWebRedPackInfo} message WebRedPackInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebRedPackInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.author != null && Object.hasOwnProperty.call(message, "author"))
                    $root.chat.Kuaishou.SimpleUserInfo.encode(message.author, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.balance != null && Object.hasOwnProperty.call(message, "balance"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.balance);
                if (message.openTime != null && Object.hasOwnProperty.call(message, "openTime"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.openTime);
                if (message.currentTime != null && Object.hasOwnProperty.call(message, "currentTime"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.currentTime);
                if (message.grabToken != null && Object.hasOwnProperty.call(message, "grabToken"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.grabToken);
                if (message.needSendRequest != null && Object.hasOwnProperty.call(message, "needSendRequest"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.needSendRequest);
                if (message.requestDelayMillis != null && Object.hasOwnProperty.call(message, "requestDelayMillis"))
                    writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.requestDelayMillis);
                if (message.luckiestDelayMillis != null && Object.hasOwnProperty.call(message, "luckiestDelayMillis"))
                    writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.luckiestDelayMillis);
                if (message.coverType != null && Object.hasOwnProperty.call(message, "coverType"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.coverType);
                return writer;
            };

            /**
             * Encodes the specified WebRedPackInfo message, length delimited. Does not implicitly {@link chat.Kuaishou.WebRedPackInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @static
             * @param {chat.Kuaishou.IWebRedPackInfo} message WebRedPackInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebRedPackInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebRedPackInfo message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.WebRedPackInfo} WebRedPackInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebRedPackInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.WebRedPackInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.author = $root.chat.Kuaishou.SimpleUserInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.balance = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.openTime = reader.uint64();
                            break;
                        }
                    case 5: {
                            message.currentTime = reader.uint64();
                            break;
                        }
                    case 6: {
                            message.grabToken = reader.string();
                            break;
                        }
                    case 7: {
                            message.needSendRequest = reader.bool();
                            break;
                        }
                    case 8: {
                            message.requestDelayMillis = reader.uint64();
                            break;
                        }
                    case 9: {
                            message.luckiestDelayMillis = reader.uint64();
                            break;
                        }
                    case 10: {
                            message.coverType = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WebRedPackInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.WebRedPackInfo} WebRedPackInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebRedPackInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebRedPackInfo message.
             * @function verify
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebRedPackInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.author != null && message.hasOwnProperty("author")) {
                    let error = $root.chat.Kuaishou.SimpleUserInfo.verify(message.author);
                    if (error)
                        return "author." + error;
                }
                if (message.balance != null && message.hasOwnProperty("balance"))
                    if (!$util.isInteger(message.balance) && !(message.balance && $util.isInteger(message.balance.low) && $util.isInteger(message.balance.high)))
                        return "balance: integer|Long expected";
                if (message.openTime != null && message.hasOwnProperty("openTime"))
                    if (!$util.isInteger(message.openTime) && !(message.openTime && $util.isInteger(message.openTime.low) && $util.isInteger(message.openTime.high)))
                        return "openTime: integer|Long expected";
                if (message.currentTime != null && message.hasOwnProperty("currentTime"))
                    if (!$util.isInteger(message.currentTime) && !(message.currentTime && $util.isInteger(message.currentTime.low) && $util.isInteger(message.currentTime.high)))
                        return "currentTime: integer|Long expected";
                if (message.grabToken != null && message.hasOwnProperty("grabToken"))
                    if (!$util.isString(message.grabToken))
                        return "grabToken: string expected";
                if (message.needSendRequest != null && message.hasOwnProperty("needSendRequest"))
                    if (typeof message.needSendRequest !== "boolean")
                        return "needSendRequest: boolean expected";
                if (message.requestDelayMillis != null && message.hasOwnProperty("requestDelayMillis"))
                    if (!$util.isInteger(message.requestDelayMillis) && !(message.requestDelayMillis && $util.isInteger(message.requestDelayMillis.low) && $util.isInteger(message.requestDelayMillis.high)))
                        return "requestDelayMillis: integer|Long expected";
                if (message.luckiestDelayMillis != null && message.hasOwnProperty("luckiestDelayMillis"))
                    if (!$util.isInteger(message.luckiestDelayMillis) && !(message.luckiestDelayMillis && $util.isInteger(message.luckiestDelayMillis.low) && $util.isInteger(message.luckiestDelayMillis.high)))
                        return "luckiestDelayMillis: integer|Long expected";
                if (message.coverType != null && message.hasOwnProperty("coverType"))
                    switch (message.coverType) {
                    default:
                        return "coverType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                return null;
            };

            /**
             * Creates a WebRedPackInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.WebRedPackInfo} WebRedPackInfo
             */
            WebRedPackInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.WebRedPackInfo)
                    return object;
                let message = new $root.chat.Kuaishou.WebRedPackInfo();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.author != null) {
                    if (typeof object.author !== "object")
                        throw TypeError(".chat.Kuaishou.WebRedPackInfo.author: object expected");
                    message.author = $root.chat.Kuaishou.SimpleUserInfo.fromObject(object.author);
                }
                if (object.balance != null)
                    if ($util.Long)
                        (message.balance = $util.Long.fromValue(object.balance)).unsigned = true;
                    else if (typeof object.balance === "string")
                        message.balance = parseInt(object.balance, 10);
                    else if (typeof object.balance === "number")
                        message.balance = object.balance;
                    else if (typeof object.balance === "object")
                        message.balance = new $util.LongBits(object.balance.low >>> 0, object.balance.high >>> 0).toNumber(true);
                if (object.openTime != null)
                    if ($util.Long)
                        (message.openTime = $util.Long.fromValue(object.openTime)).unsigned = true;
                    else if (typeof object.openTime === "string")
                        message.openTime = parseInt(object.openTime, 10);
                    else if (typeof object.openTime === "number")
                        message.openTime = object.openTime;
                    else if (typeof object.openTime === "object")
                        message.openTime = new $util.LongBits(object.openTime.low >>> 0, object.openTime.high >>> 0).toNumber(true);
                if (object.currentTime != null)
                    if ($util.Long)
                        (message.currentTime = $util.Long.fromValue(object.currentTime)).unsigned = true;
                    else if (typeof object.currentTime === "string")
                        message.currentTime = parseInt(object.currentTime, 10);
                    else if (typeof object.currentTime === "number")
                        message.currentTime = object.currentTime;
                    else if (typeof object.currentTime === "object")
                        message.currentTime = new $util.LongBits(object.currentTime.low >>> 0, object.currentTime.high >>> 0).toNumber(true);
                if (object.grabToken != null)
                    message.grabToken = String(object.grabToken);
                if (object.needSendRequest != null)
                    message.needSendRequest = Boolean(object.needSendRequest);
                if (object.requestDelayMillis != null)
                    if ($util.Long)
                        (message.requestDelayMillis = $util.Long.fromValue(object.requestDelayMillis)).unsigned = true;
                    else if (typeof object.requestDelayMillis === "string")
                        message.requestDelayMillis = parseInt(object.requestDelayMillis, 10);
                    else if (typeof object.requestDelayMillis === "number")
                        message.requestDelayMillis = object.requestDelayMillis;
                    else if (typeof object.requestDelayMillis === "object")
                        message.requestDelayMillis = new $util.LongBits(object.requestDelayMillis.low >>> 0, object.requestDelayMillis.high >>> 0).toNumber(true);
                if (object.luckiestDelayMillis != null)
                    if ($util.Long)
                        (message.luckiestDelayMillis = $util.Long.fromValue(object.luckiestDelayMillis)).unsigned = true;
                    else if (typeof object.luckiestDelayMillis === "string")
                        message.luckiestDelayMillis = parseInt(object.luckiestDelayMillis, 10);
                    else if (typeof object.luckiestDelayMillis === "number")
                        message.luckiestDelayMillis = object.luckiestDelayMillis;
                    else if (typeof object.luckiestDelayMillis === "object")
                        message.luckiestDelayMillis = new $util.LongBits(object.luckiestDelayMillis.low >>> 0, object.luckiestDelayMillis.high >>> 0).toNumber(true);
                switch (object.coverType) {
                default:
                    if (typeof object.coverType === "number") {
                        message.coverType = object.coverType;
                        break;
                    }
                    break;
                case "UNKNOWN_COVER_TYPE":
                case 0:
                    message.coverType = 0;
                    break;
                case "NORMAL_COVER":
                case 1:
                    message.coverType = 1;
                    break;
                case "PRETTY_COVER":
                case 2:
                    message.coverType = 2;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a WebRedPackInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @static
             * @param {chat.Kuaishou.WebRedPackInfo} message WebRedPackInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebRedPackInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.author = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.balance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.balance = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.openTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.openTime = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.currentTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.currentTime = options.longs === String ? "0" : 0;
                    object.grabToken = "";
                    object.needSendRequest = false;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.requestDelayMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.requestDelayMillis = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.luckiestDelayMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.luckiestDelayMillis = options.longs === String ? "0" : 0;
                    object.coverType = options.enums === String ? "UNKNOWN_COVER_TYPE" : 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.author != null && message.hasOwnProperty("author"))
                    object.author = $root.chat.Kuaishou.SimpleUserInfo.toObject(message.author, options);
                if (message.balance != null && message.hasOwnProperty("balance"))
                    if (typeof message.balance === "number")
                        object.balance = options.longs === String ? String(message.balance) : message.balance;
                    else
                        object.balance = options.longs === String ? $util.Long.prototype.toString.call(message.balance) : options.longs === Number ? new $util.LongBits(message.balance.low >>> 0, message.balance.high >>> 0).toNumber(true) : message.balance;
                if (message.openTime != null && message.hasOwnProperty("openTime"))
                    if (typeof message.openTime === "number")
                        object.openTime = options.longs === String ? String(message.openTime) : message.openTime;
                    else
                        object.openTime = options.longs === String ? $util.Long.prototype.toString.call(message.openTime) : options.longs === Number ? new $util.LongBits(message.openTime.low >>> 0, message.openTime.high >>> 0).toNumber(true) : message.openTime;
                if (message.currentTime != null && message.hasOwnProperty("currentTime"))
                    if (typeof message.currentTime === "number")
                        object.currentTime = options.longs === String ? String(message.currentTime) : message.currentTime;
                    else
                        object.currentTime = options.longs === String ? $util.Long.prototype.toString.call(message.currentTime) : options.longs === Number ? new $util.LongBits(message.currentTime.low >>> 0, message.currentTime.high >>> 0).toNumber(true) : message.currentTime;
                if (message.grabToken != null && message.hasOwnProperty("grabToken"))
                    object.grabToken = message.grabToken;
                if (message.needSendRequest != null && message.hasOwnProperty("needSendRequest"))
                    object.needSendRequest = message.needSendRequest;
                if (message.requestDelayMillis != null && message.hasOwnProperty("requestDelayMillis"))
                    if (typeof message.requestDelayMillis === "number")
                        object.requestDelayMillis = options.longs === String ? String(message.requestDelayMillis) : message.requestDelayMillis;
                    else
                        object.requestDelayMillis = options.longs === String ? $util.Long.prototype.toString.call(message.requestDelayMillis) : options.longs === Number ? new $util.LongBits(message.requestDelayMillis.low >>> 0, message.requestDelayMillis.high >>> 0).toNumber(true) : message.requestDelayMillis;
                if (message.luckiestDelayMillis != null && message.hasOwnProperty("luckiestDelayMillis"))
                    if (typeof message.luckiestDelayMillis === "number")
                        object.luckiestDelayMillis = options.longs === String ? String(message.luckiestDelayMillis) : message.luckiestDelayMillis;
                    else
                        object.luckiestDelayMillis = options.longs === String ? $util.Long.prototype.toString.call(message.luckiestDelayMillis) : options.longs === Number ? new $util.LongBits(message.luckiestDelayMillis.low >>> 0, message.luckiestDelayMillis.high >>> 0).toNumber(true) : message.luckiestDelayMillis;
                if (message.coverType != null && message.hasOwnProperty("coverType"))
                    object.coverType = options.enums === String ? $root.chat.Kuaishou.WebRedPackCoverType[message.coverType] === undefined ? message.coverType : $root.chat.Kuaishou.WebRedPackCoverType[message.coverType] : message.coverType;
                return object;
            };

            /**
             * Converts this WebRedPackInfo to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebRedPackInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WebRedPackInfo
             * @function getTypeUrl
             * @memberof chat.Kuaishou.WebRedPackInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebRedPackInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.WebRedPackInfo";
            };

            return WebRedPackInfo;
        })();

        Kuaishou.WebWatchingUserInfo = (function() {

            /**
             * Properties of a WebWatchingUserInfo.
             * @memberof chat.Kuaishou
             * @interface IWebWatchingUserInfo
             * @property {chat.Kuaishou.ISimpleUserInfo|null} [user] WebWatchingUserInfo user
             * @property {boolean|null} [offline] WebWatchingUserInfo offline
             * @property {boolean|null} [tuhao] WebWatchingUserInfo tuhao
             * @property {chat.Kuaishou.WebLiveAssistantType|null} [liveAssistantType] WebWatchingUserInfo liveAssistantType
             * @property {string|null} [displayKsCoin] WebWatchingUserInfo displayKsCoin
             */

            /**
             * Constructs a new WebWatchingUserInfo.
             * @memberof chat.Kuaishou
             * @classdesc Represents a WebWatchingUserInfo.
             * @implements IWebWatchingUserInfo
             * @constructor
             * @param {chat.Kuaishou.IWebWatchingUserInfo=} [properties] Properties to set
             */
            function WebWatchingUserInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebWatchingUserInfo user.
             * @member {chat.Kuaishou.ISimpleUserInfo|null|undefined} user
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @instance
             */
            WebWatchingUserInfo.prototype.user = null;

            /**
             * WebWatchingUserInfo offline.
             * @member {boolean} offline
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @instance
             */
            WebWatchingUserInfo.prototype.offline = false;

            /**
             * WebWatchingUserInfo tuhao.
             * @member {boolean} tuhao
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @instance
             */
            WebWatchingUserInfo.prototype.tuhao = false;

            /**
             * WebWatchingUserInfo liveAssistantType.
             * @member {chat.Kuaishou.WebLiveAssistantType} liveAssistantType
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @instance
             */
            WebWatchingUserInfo.prototype.liveAssistantType = 0;

            /**
             * WebWatchingUserInfo displayKsCoin.
             * @member {string} displayKsCoin
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @instance
             */
            WebWatchingUserInfo.prototype.displayKsCoin = "";

            /**
             * Creates a new WebWatchingUserInfo instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @static
             * @param {chat.Kuaishou.IWebWatchingUserInfo=} [properties] Properties to set
             * @returns {chat.Kuaishou.WebWatchingUserInfo} WebWatchingUserInfo instance
             */
            WebWatchingUserInfo.create = function create(properties) {
                return new WebWatchingUserInfo(properties);
            };

            /**
             * Encodes the specified WebWatchingUserInfo message. Does not implicitly {@link chat.Kuaishou.WebWatchingUserInfo.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @static
             * @param {chat.Kuaishou.IWebWatchingUserInfo} message WebWatchingUserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebWatchingUserInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.chat.Kuaishou.SimpleUserInfo.encode(message.user, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.offline != null && Object.hasOwnProperty.call(message, "offline"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.offline);
                if (message.tuhao != null && Object.hasOwnProperty.call(message, "tuhao"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.tuhao);
                if (message.liveAssistantType != null && Object.hasOwnProperty.call(message, "liveAssistantType"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.liveAssistantType);
                if (message.displayKsCoin != null && Object.hasOwnProperty.call(message, "displayKsCoin"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.displayKsCoin);
                return writer;
            };

            /**
             * Encodes the specified WebWatchingUserInfo message, length delimited. Does not implicitly {@link chat.Kuaishou.WebWatchingUserInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @static
             * @param {chat.Kuaishou.IWebWatchingUserInfo} message WebWatchingUserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebWatchingUserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebWatchingUserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.WebWatchingUserInfo} WebWatchingUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebWatchingUserInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.WebWatchingUserInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.user = $root.chat.Kuaishou.SimpleUserInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.offline = reader.bool();
                            break;
                        }
                    case 3: {
                            message.tuhao = reader.bool();
                            break;
                        }
                    case 4: {
                            message.liveAssistantType = reader.int32();
                            break;
                        }
                    case 5: {
                            message.displayKsCoin = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WebWatchingUserInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.WebWatchingUserInfo} WebWatchingUserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebWatchingUserInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebWatchingUserInfo message.
             * @function verify
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebWatchingUserInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    let error = $root.chat.Kuaishou.SimpleUserInfo.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.offline != null && message.hasOwnProperty("offline"))
                    if (typeof message.offline !== "boolean")
                        return "offline: boolean expected";
                if (message.tuhao != null && message.hasOwnProperty("tuhao"))
                    if (typeof message.tuhao !== "boolean")
                        return "tuhao: boolean expected";
                if (message.liveAssistantType != null && message.hasOwnProperty("liveAssistantType"))
                    switch (message.liveAssistantType) {
                    default:
                        return "liveAssistantType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.displayKsCoin != null && message.hasOwnProperty("displayKsCoin"))
                    if (!$util.isString(message.displayKsCoin))
                        return "displayKsCoin: string expected";
                return null;
            };

            /**
             * Creates a WebWatchingUserInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.WebWatchingUserInfo} WebWatchingUserInfo
             */
            WebWatchingUserInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.WebWatchingUserInfo)
                    return object;
                let message = new $root.chat.Kuaishou.WebWatchingUserInfo();
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".chat.Kuaishou.WebWatchingUserInfo.user: object expected");
                    message.user = $root.chat.Kuaishou.SimpleUserInfo.fromObject(object.user);
                }
                if (object.offline != null)
                    message.offline = Boolean(object.offline);
                if (object.tuhao != null)
                    message.tuhao = Boolean(object.tuhao);
                switch (object.liveAssistantType) {
                default:
                    if (typeof object.liveAssistantType === "number") {
                        message.liveAssistantType = object.liveAssistantType;
                        break;
                    }
                    break;
                case "UNKNOWN_ASSISTANT_TYPE":
                case 0:
                    message.liveAssistantType = 0;
                    break;
                case "SUPER":
                case 1:
                    message.liveAssistantType = 1;
                    break;
                case "JUNIOR":
                case 2:
                    message.liveAssistantType = 2;
                    break;
                }
                if (object.displayKsCoin != null)
                    message.displayKsCoin = String(object.displayKsCoin);
                return message;
            };

            /**
             * Creates a plain object from a WebWatchingUserInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @static
             * @param {chat.Kuaishou.WebWatchingUserInfo} message WebWatchingUserInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebWatchingUserInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.user = null;
                    object.offline = false;
                    object.tuhao = false;
                    object.liveAssistantType = options.enums === String ? "UNKNOWN_ASSISTANT_TYPE" : 0;
                    object.displayKsCoin = "";
                }
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.chat.Kuaishou.SimpleUserInfo.toObject(message.user, options);
                if (message.offline != null && message.hasOwnProperty("offline"))
                    object.offline = message.offline;
                if (message.tuhao != null && message.hasOwnProperty("tuhao"))
                    object.tuhao = message.tuhao;
                if (message.liveAssistantType != null && message.hasOwnProperty("liveAssistantType"))
                    object.liveAssistantType = options.enums === String ? $root.chat.Kuaishou.WebLiveAssistantType[message.liveAssistantType] === undefined ? message.liveAssistantType : $root.chat.Kuaishou.WebLiveAssistantType[message.liveAssistantType] : message.liveAssistantType;
                if (message.displayKsCoin != null && message.hasOwnProperty("displayKsCoin"))
                    object.displayKsCoin = message.displayKsCoin;
                return object;
            };

            /**
             * Converts this WebWatchingUserInfo to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebWatchingUserInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WebWatchingUserInfo
             * @function getTypeUrl
             * @memberof chat.Kuaishou.WebWatchingUserInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebWatchingUserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.WebWatchingUserInfo";
            };

            return WebWatchingUserInfo;
        })();

        Kuaishou.SCWebLiveWatchingUsers = (function() {

            /**
             * Properties of a SCWebLiveWatchingUsers.
             * @memberof chat.Kuaishou
             * @interface ISCWebLiveWatchingUsers
             * @property {chat.Kuaishou.IWebWatchingUserInfo|null} [watchingUser] SCWebLiveWatchingUsers watchingUser
             * @property {string|null} [displayWatchingCount] SCWebLiveWatchingUsers displayWatchingCount
             * @property {number|Long|null} [pendingDuration] SCWebLiveWatchingUsers pendingDuration
             */

            /**
             * Constructs a new SCWebLiveWatchingUsers.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebLiveWatchingUsers.
             * @implements ISCWebLiveWatchingUsers
             * @constructor
             * @param {chat.Kuaishou.ISCWebLiveWatchingUsers=} [properties] Properties to set
             */
            function SCWebLiveWatchingUsers(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebLiveWatchingUsers watchingUser.
             * @member {chat.Kuaishou.IWebWatchingUserInfo|null|undefined} watchingUser
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @instance
             */
            SCWebLiveWatchingUsers.prototype.watchingUser = null;

            /**
             * SCWebLiveWatchingUsers displayWatchingCount.
             * @member {string} displayWatchingCount
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @instance
             */
            SCWebLiveWatchingUsers.prototype.displayWatchingCount = "";

            /**
             * SCWebLiveWatchingUsers pendingDuration.
             * @member {number|Long} pendingDuration
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @instance
             */
            SCWebLiveWatchingUsers.prototype.pendingDuration = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SCWebLiveWatchingUsers instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @static
             * @param {chat.Kuaishou.ISCWebLiveWatchingUsers=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebLiveWatchingUsers} SCWebLiveWatchingUsers instance
             */
            SCWebLiveWatchingUsers.create = function create(properties) {
                return new SCWebLiveWatchingUsers(properties);
            };

            /**
             * Encodes the specified SCWebLiveWatchingUsers message. Does not implicitly {@link chat.Kuaishou.SCWebLiveWatchingUsers.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @static
             * @param {chat.Kuaishou.ISCWebLiveWatchingUsers} message SCWebLiveWatchingUsers message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebLiveWatchingUsers.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.watchingUser != null && Object.hasOwnProperty.call(message, "watchingUser"))
                    $root.chat.Kuaishou.WebWatchingUserInfo.encode(message.watchingUser, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.displayWatchingCount != null && Object.hasOwnProperty.call(message, "displayWatchingCount"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayWatchingCount);
                if (message.pendingDuration != null && Object.hasOwnProperty.call(message, "pendingDuration"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.pendingDuration);
                return writer;
            };

            /**
             * Encodes the specified SCWebLiveWatchingUsers message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebLiveWatchingUsers.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @static
             * @param {chat.Kuaishou.ISCWebLiveWatchingUsers} message SCWebLiveWatchingUsers message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebLiveWatchingUsers.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebLiveWatchingUsers message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebLiveWatchingUsers} SCWebLiveWatchingUsers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebLiveWatchingUsers.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebLiveWatchingUsers();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.watchingUser = $root.chat.Kuaishou.WebWatchingUserInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.displayWatchingCount = reader.string();
                            break;
                        }
                    case 3: {
                            message.pendingDuration = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebLiveWatchingUsers message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebLiveWatchingUsers} SCWebLiveWatchingUsers
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebLiveWatchingUsers.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebLiveWatchingUsers message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebLiveWatchingUsers.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.watchingUser != null && message.hasOwnProperty("watchingUser")) {
                    let error = $root.chat.Kuaishou.WebWatchingUserInfo.verify(message.watchingUser);
                    if (error)
                        return "watchingUser." + error;
                }
                if (message.displayWatchingCount != null && message.hasOwnProperty("displayWatchingCount"))
                    if (!$util.isString(message.displayWatchingCount))
                        return "displayWatchingCount: string expected";
                if (message.pendingDuration != null && message.hasOwnProperty("pendingDuration"))
                    if (!$util.isInteger(message.pendingDuration) && !(message.pendingDuration && $util.isInteger(message.pendingDuration.low) && $util.isInteger(message.pendingDuration.high)))
                        return "pendingDuration: integer|Long expected";
                return null;
            };

            /**
             * Creates a SCWebLiveWatchingUsers message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebLiveWatchingUsers} SCWebLiveWatchingUsers
             */
            SCWebLiveWatchingUsers.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebLiveWatchingUsers)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebLiveWatchingUsers();
                if (object.watchingUser != null) {
                    if (typeof object.watchingUser !== "object")
                        throw TypeError(".chat.Kuaishou.SCWebLiveWatchingUsers.watchingUser: object expected");
                    message.watchingUser = $root.chat.Kuaishou.WebWatchingUserInfo.fromObject(object.watchingUser);
                }
                if (object.displayWatchingCount != null)
                    message.displayWatchingCount = String(object.displayWatchingCount);
                if (object.pendingDuration != null)
                    if ($util.Long)
                        (message.pendingDuration = $util.Long.fromValue(object.pendingDuration)).unsigned = true;
                    else if (typeof object.pendingDuration === "string")
                        message.pendingDuration = parseInt(object.pendingDuration, 10);
                    else if (typeof object.pendingDuration === "number")
                        message.pendingDuration = object.pendingDuration;
                    else if (typeof object.pendingDuration === "object")
                        message.pendingDuration = new $util.LongBits(object.pendingDuration.low >>> 0, object.pendingDuration.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SCWebLiveWatchingUsers message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @static
             * @param {chat.Kuaishou.SCWebLiveWatchingUsers} message SCWebLiveWatchingUsers
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebLiveWatchingUsers.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.watchingUser = null;
                    object.displayWatchingCount = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.pendingDuration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.pendingDuration = options.longs === String ? "0" : 0;
                }
                if (message.watchingUser != null && message.hasOwnProperty("watchingUser"))
                    object.watchingUser = $root.chat.Kuaishou.WebWatchingUserInfo.toObject(message.watchingUser, options);
                if (message.displayWatchingCount != null && message.hasOwnProperty("displayWatchingCount"))
                    object.displayWatchingCount = message.displayWatchingCount;
                if (message.pendingDuration != null && message.hasOwnProperty("pendingDuration"))
                    if (typeof message.pendingDuration === "number")
                        object.pendingDuration = options.longs === String ? String(message.pendingDuration) : message.pendingDuration;
                    else
                        object.pendingDuration = options.longs === String ? $util.Long.prototype.toString.call(message.pendingDuration) : options.longs === Number ? new $util.LongBits(message.pendingDuration.low >>> 0, message.pendingDuration.high >>> 0).toNumber(true) : message.pendingDuration;
                return object;
            };

            /**
             * Converts this SCWebLiveWatchingUsers to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebLiveWatchingUsers.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebLiveWatchingUsers
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebLiveWatchingUsers
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebLiveWatchingUsers.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebLiveWatchingUsers";
            };

            return SCWebLiveWatchingUsers;
        })();

        Kuaishou.WebShareFeed = (function() {

            /**
             * Properties of a WebShareFeed.
             * @memberof chat.Kuaishou
             * @interface IWebShareFeed
             * @property {string|null} [id] WebShareFeed id
             * @property {chat.Kuaishou.ISimpleUserInfo|null} [user] WebShareFeed user
             * @property {number|Long|null} [time] WebShareFeed time
             * @property {number|null} [thirdPartyPlatform] WebShareFeed thirdPartyPlatform
             * @property {number|Long|null} [sortRank] WebShareFeed sortRank
             * @property {chat.Kuaishou.WebLiveAssistantType|null} [liveAssistantType] WebShareFeed liveAssistantType
             * @property {string|null} [deviceHash] WebShareFeed deviceHash
             */

            /**
             * Constructs a new WebShareFeed.
             * @memberof chat.Kuaishou
             * @classdesc Represents a WebShareFeed.
             * @implements IWebShareFeed
             * @constructor
             * @param {chat.Kuaishou.IWebShareFeed=} [properties] Properties to set
             */
            function WebShareFeed(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebShareFeed id.
             * @member {string} id
             * @memberof chat.Kuaishou.WebShareFeed
             * @instance
             */
            WebShareFeed.prototype.id = "";

            /**
             * WebShareFeed user.
             * @member {chat.Kuaishou.ISimpleUserInfo|null|undefined} user
             * @memberof chat.Kuaishou.WebShareFeed
             * @instance
             */
            WebShareFeed.prototype.user = null;

            /**
             * WebShareFeed time.
             * @member {number|Long} time
             * @memberof chat.Kuaishou.WebShareFeed
             * @instance
             */
            WebShareFeed.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebShareFeed thirdPartyPlatform.
             * @member {number} thirdPartyPlatform
             * @memberof chat.Kuaishou.WebShareFeed
             * @instance
             */
            WebShareFeed.prototype.thirdPartyPlatform = 0;

            /**
             * WebShareFeed sortRank.
             * @member {number|Long} sortRank
             * @memberof chat.Kuaishou.WebShareFeed
             * @instance
             */
            WebShareFeed.prototype.sortRank = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * WebShareFeed liveAssistantType.
             * @member {chat.Kuaishou.WebLiveAssistantType} liveAssistantType
             * @memberof chat.Kuaishou.WebShareFeed
             * @instance
             */
            WebShareFeed.prototype.liveAssistantType = 0;

            /**
             * WebShareFeed deviceHash.
             * @member {string} deviceHash
             * @memberof chat.Kuaishou.WebShareFeed
             * @instance
             */
            WebShareFeed.prototype.deviceHash = "";

            /**
             * Creates a new WebShareFeed instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.WebShareFeed
             * @static
             * @param {chat.Kuaishou.IWebShareFeed=} [properties] Properties to set
             * @returns {chat.Kuaishou.WebShareFeed} WebShareFeed instance
             */
            WebShareFeed.create = function create(properties) {
                return new WebShareFeed(properties);
            };

            /**
             * Encodes the specified WebShareFeed message. Does not implicitly {@link chat.Kuaishou.WebShareFeed.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.WebShareFeed
             * @static
             * @param {chat.Kuaishou.IWebShareFeed} message WebShareFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebShareFeed.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
                if (message.user != null && Object.hasOwnProperty.call(message, "user"))
                    $root.chat.Kuaishou.SimpleUserInfo.encode(message.user, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.time);
                if (message.thirdPartyPlatform != null && Object.hasOwnProperty.call(message, "thirdPartyPlatform"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.thirdPartyPlatform);
                if (message.sortRank != null && Object.hasOwnProperty.call(message, "sortRank"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.sortRank);
                if (message.liveAssistantType != null && Object.hasOwnProperty.call(message, "liveAssistantType"))
                    writer.uint32(/* id 6, wireType 0 =*/48).int32(message.liveAssistantType);
                if (message.deviceHash != null && Object.hasOwnProperty.call(message, "deviceHash"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.deviceHash);
                return writer;
            };

            /**
             * Encodes the specified WebShareFeed message, length delimited. Does not implicitly {@link chat.Kuaishou.WebShareFeed.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.WebShareFeed
             * @static
             * @param {chat.Kuaishou.IWebShareFeed} message WebShareFeed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebShareFeed.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebShareFeed message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.WebShareFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.WebShareFeed} WebShareFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebShareFeed.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.WebShareFeed();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.id = reader.string();
                            break;
                        }
                    case 2: {
                            message.user = $root.chat.Kuaishou.SimpleUserInfo.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.time = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.thirdPartyPlatform = reader.uint32();
                            break;
                        }
                    case 5: {
                            message.sortRank = reader.uint64();
                            break;
                        }
                    case 6: {
                            message.liveAssistantType = reader.int32();
                            break;
                        }
                    case 7: {
                            message.deviceHash = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a WebShareFeed message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.WebShareFeed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.WebShareFeed} WebShareFeed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebShareFeed.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebShareFeed message.
             * @function verify
             * @memberof chat.Kuaishou.WebShareFeed
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebShareFeed.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.id != null && message.hasOwnProperty("id"))
                    if (!$util.isString(message.id))
                        return "id: string expected";
                if (message.user != null && message.hasOwnProperty("user")) {
                    let error = $root.chat.Kuaishou.SimpleUserInfo.verify(message.user);
                    if (error)
                        return "user." + error;
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                if (message.thirdPartyPlatform != null && message.hasOwnProperty("thirdPartyPlatform"))
                    if (!$util.isInteger(message.thirdPartyPlatform))
                        return "thirdPartyPlatform: integer expected";
                if (message.sortRank != null && message.hasOwnProperty("sortRank"))
                    if (!$util.isInteger(message.sortRank) && !(message.sortRank && $util.isInteger(message.sortRank.low) && $util.isInteger(message.sortRank.high)))
                        return "sortRank: integer|Long expected";
                if (message.liveAssistantType != null && message.hasOwnProperty("liveAssistantType"))
                    switch (message.liveAssistantType) {
                    default:
                        return "liveAssistantType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.deviceHash != null && message.hasOwnProperty("deviceHash"))
                    if (!$util.isString(message.deviceHash))
                        return "deviceHash: string expected";
                return null;
            };

            /**
             * Creates a WebShareFeed message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.WebShareFeed
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.WebShareFeed} WebShareFeed
             */
            WebShareFeed.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.WebShareFeed)
                    return object;
                let message = new $root.chat.Kuaishou.WebShareFeed();
                if (object.id != null)
                    message.id = String(object.id);
                if (object.user != null) {
                    if (typeof object.user !== "object")
                        throw TypeError(".chat.Kuaishou.WebShareFeed.user: object expected");
                    message.user = $root.chat.Kuaishou.SimpleUserInfo.fromObject(object.user);
                }
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                if (object.thirdPartyPlatform != null)
                    message.thirdPartyPlatform = object.thirdPartyPlatform >>> 0;
                if (object.sortRank != null)
                    if ($util.Long)
                        (message.sortRank = $util.Long.fromValue(object.sortRank)).unsigned = true;
                    else if (typeof object.sortRank === "string")
                        message.sortRank = parseInt(object.sortRank, 10);
                    else if (typeof object.sortRank === "number")
                        message.sortRank = object.sortRank;
                    else if (typeof object.sortRank === "object")
                        message.sortRank = new $util.LongBits(object.sortRank.low >>> 0, object.sortRank.high >>> 0).toNumber(true);
                switch (object.liveAssistantType) {
                default:
                    if (typeof object.liveAssistantType === "number") {
                        message.liveAssistantType = object.liveAssistantType;
                        break;
                    }
                    break;
                case "UNKNOWN_ASSISTANT_TYPE":
                case 0:
                    message.liveAssistantType = 0;
                    break;
                case "SUPER":
                case 1:
                    message.liveAssistantType = 1;
                    break;
                case "JUNIOR":
                case 2:
                    message.liveAssistantType = 2;
                    break;
                }
                if (object.deviceHash != null)
                    message.deviceHash = String(object.deviceHash);
                return message;
            };

            /**
             * Creates a plain object from a WebShareFeed message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.WebShareFeed
             * @static
             * @param {chat.Kuaishou.WebShareFeed} message WebShareFeed
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebShareFeed.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.id = "";
                    object.user = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                    object.thirdPartyPlatform = 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.sortRank = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.sortRank = options.longs === String ? "0" : 0;
                    object.liveAssistantType = options.enums === String ? "UNKNOWN_ASSISTANT_TYPE" : 0;
                    object.deviceHash = "";
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.user != null && message.hasOwnProperty("user"))
                    object.user = $root.chat.Kuaishou.SimpleUserInfo.toObject(message.user, options);
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                if (message.thirdPartyPlatform != null && message.hasOwnProperty("thirdPartyPlatform"))
                    object.thirdPartyPlatform = message.thirdPartyPlatform;
                if (message.sortRank != null && message.hasOwnProperty("sortRank"))
                    if (typeof message.sortRank === "number")
                        object.sortRank = options.longs === String ? String(message.sortRank) : message.sortRank;
                    else
                        object.sortRank = options.longs === String ? $util.Long.prototype.toString.call(message.sortRank) : options.longs === Number ? new $util.LongBits(message.sortRank.low >>> 0, message.sortRank.high >>> 0).toNumber(true) : message.sortRank;
                if (message.liveAssistantType != null && message.hasOwnProperty("liveAssistantType"))
                    object.liveAssistantType = options.enums === String ? $root.chat.Kuaishou.WebLiveAssistantType[message.liveAssistantType] === undefined ? message.liveAssistantType : $root.chat.Kuaishou.WebLiveAssistantType[message.liveAssistantType] : message.liveAssistantType;
                if (message.deviceHash != null && message.hasOwnProperty("deviceHash"))
                    object.deviceHash = message.deviceHash;
                return object;
            };

            /**
             * Converts this WebShareFeed to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.WebShareFeed
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebShareFeed.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WebShareFeed
             * @function getTypeUrl
             * @memberof chat.Kuaishou.WebShareFeed
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebShareFeed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.WebShareFeed";
            };

            return WebShareFeed;
        })();

        Kuaishou.SCWebSuspectedViolation = (function() {

            /**
             * Properties of a SCWebSuspectedViolation.
             * @memberof chat.Kuaishou
             * @interface ISCWebSuspectedViolation
             * @property {boolean|null} [suspectedViolation] SCWebSuspectedViolation suspectedViolation
             */

            /**
             * Constructs a new SCWebSuspectedViolation.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebSuspectedViolation.
             * @implements ISCWebSuspectedViolation
             * @constructor
             * @param {chat.Kuaishou.ISCWebSuspectedViolation=} [properties] Properties to set
             */
            function SCWebSuspectedViolation(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebSuspectedViolation suspectedViolation.
             * @member {boolean} suspectedViolation
             * @memberof chat.Kuaishou.SCWebSuspectedViolation
             * @instance
             */
            SCWebSuspectedViolation.prototype.suspectedViolation = false;

            /**
             * Creates a new SCWebSuspectedViolation instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebSuspectedViolation
             * @static
             * @param {chat.Kuaishou.ISCWebSuspectedViolation=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebSuspectedViolation} SCWebSuspectedViolation instance
             */
            SCWebSuspectedViolation.create = function create(properties) {
                return new SCWebSuspectedViolation(properties);
            };

            /**
             * Encodes the specified SCWebSuspectedViolation message. Does not implicitly {@link chat.Kuaishou.SCWebSuspectedViolation.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebSuspectedViolation
             * @static
             * @param {chat.Kuaishou.ISCWebSuspectedViolation} message SCWebSuspectedViolation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebSuspectedViolation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.suspectedViolation != null && Object.hasOwnProperty.call(message, "suspectedViolation"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.suspectedViolation);
                return writer;
            };

            /**
             * Encodes the specified SCWebSuspectedViolation message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebSuspectedViolation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebSuspectedViolation
             * @static
             * @param {chat.Kuaishou.ISCWebSuspectedViolation} message SCWebSuspectedViolation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebSuspectedViolation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebSuspectedViolation message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebSuspectedViolation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebSuspectedViolation} SCWebSuspectedViolation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebSuspectedViolation.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebSuspectedViolation();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.suspectedViolation = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebSuspectedViolation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebSuspectedViolation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebSuspectedViolation} SCWebSuspectedViolation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebSuspectedViolation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebSuspectedViolation message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebSuspectedViolation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebSuspectedViolation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.suspectedViolation != null && message.hasOwnProperty("suspectedViolation"))
                    if (typeof message.suspectedViolation !== "boolean")
                        return "suspectedViolation: boolean expected";
                return null;
            };

            /**
             * Creates a SCWebSuspectedViolation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebSuspectedViolation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebSuspectedViolation} SCWebSuspectedViolation
             */
            SCWebSuspectedViolation.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebSuspectedViolation)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebSuspectedViolation();
                if (object.suspectedViolation != null)
                    message.suspectedViolation = Boolean(object.suspectedViolation);
                return message;
            };

            /**
             * Creates a plain object from a SCWebSuspectedViolation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebSuspectedViolation
             * @static
             * @param {chat.Kuaishou.SCWebSuspectedViolation} message SCWebSuspectedViolation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebSuspectedViolation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.suspectedViolation = false;
                if (message.suspectedViolation != null && message.hasOwnProperty("suspectedViolation"))
                    object.suspectedViolation = message.suspectedViolation;
                return object;
            };

            /**
             * Converts this SCWebSuspectedViolation to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebSuspectedViolation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebSuspectedViolation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebSuspectedViolation
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebSuspectedViolation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebSuspectedViolation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebSuspectedViolation";
            };

            return SCWebSuspectedViolation;
        })();

        Kuaishou.SCWebGuessOpened = (function() {

            /**
             * Properties of a SCWebGuessOpened.
             * @memberof chat.Kuaishou
             * @interface ISCWebGuessOpened
             * @property {number|Long|null} [time] SCWebGuessOpened time
             * @property {string|null} [guessId] SCWebGuessOpened guessId
             * @property {number|Long|null} [submitDeadline] SCWebGuessOpened submitDeadline
             * @property {number|Long|null} [displayMaxDelayMillis] SCWebGuessOpened displayMaxDelayMillis
             */

            /**
             * Constructs a new SCWebGuessOpened.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebGuessOpened.
             * @implements ISCWebGuessOpened
             * @constructor
             * @param {chat.Kuaishou.ISCWebGuessOpened=} [properties] Properties to set
             */
            function SCWebGuessOpened(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebGuessOpened time.
             * @member {number|Long} time
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @instance
             */
            SCWebGuessOpened.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SCWebGuessOpened guessId.
             * @member {string} guessId
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @instance
             */
            SCWebGuessOpened.prototype.guessId = "";

            /**
             * SCWebGuessOpened submitDeadline.
             * @member {number|Long} submitDeadline
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @instance
             */
            SCWebGuessOpened.prototype.submitDeadline = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SCWebGuessOpened displayMaxDelayMillis.
             * @member {number|Long} displayMaxDelayMillis
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @instance
             */
            SCWebGuessOpened.prototype.displayMaxDelayMillis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SCWebGuessOpened instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @static
             * @param {chat.Kuaishou.ISCWebGuessOpened=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebGuessOpened} SCWebGuessOpened instance
             */
            SCWebGuessOpened.create = function create(properties) {
                return new SCWebGuessOpened(properties);
            };

            /**
             * Encodes the specified SCWebGuessOpened message. Does not implicitly {@link chat.Kuaishou.SCWebGuessOpened.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @static
             * @param {chat.Kuaishou.ISCWebGuessOpened} message SCWebGuessOpened message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebGuessOpened.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.time);
                if (message.guessId != null && Object.hasOwnProperty.call(message, "guessId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.guessId);
                if (message.submitDeadline != null && Object.hasOwnProperty.call(message, "submitDeadline"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.submitDeadline);
                if (message.displayMaxDelayMillis != null && Object.hasOwnProperty.call(message, "displayMaxDelayMillis"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.displayMaxDelayMillis);
                return writer;
            };

            /**
             * Encodes the specified SCWebGuessOpened message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebGuessOpened.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @static
             * @param {chat.Kuaishou.ISCWebGuessOpened} message SCWebGuessOpened message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebGuessOpened.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebGuessOpened message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebGuessOpened} SCWebGuessOpened
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebGuessOpened.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebGuessOpened();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.time = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.guessId = reader.string();
                            break;
                        }
                    case 3: {
                            message.submitDeadline = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.displayMaxDelayMillis = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebGuessOpened message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebGuessOpened} SCWebGuessOpened
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebGuessOpened.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebGuessOpened message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebGuessOpened.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                if (message.guessId != null && message.hasOwnProperty("guessId"))
                    if (!$util.isString(message.guessId))
                        return "guessId: string expected";
                if (message.submitDeadline != null && message.hasOwnProperty("submitDeadline"))
                    if (!$util.isInteger(message.submitDeadline) && !(message.submitDeadline && $util.isInteger(message.submitDeadline.low) && $util.isInteger(message.submitDeadline.high)))
                        return "submitDeadline: integer|Long expected";
                if (message.displayMaxDelayMillis != null && message.hasOwnProperty("displayMaxDelayMillis"))
                    if (!$util.isInteger(message.displayMaxDelayMillis) && !(message.displayMaxDelayMillis && $util.isInteger(message.displayMaxDelayMillis.low) && $util.isInteger(message.displayMaxDelayMillis.high)))
                        return "displayMaxDelayMillis: integer|Long expected";
                return null;
            };

            /**
             * Creates a SCWebGuessOpened message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebGuessOpened} SCWebGuessOpened
             */
            SCWebGuessOpened.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebGuessOpened)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebGuessOpened();
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                if (object.guessId != null)
                    message.guessId = String(object.guessId);
                if (object.submitDeadline != null)
                    if ($util.Long)
                        (message.submitDeadline = $util.Long.fromValue(object.submitDeadline)).unsigned = true;
                    else if (typeof object.submitDeadline === "string")
                        message.submitDeadline = parseInt(object.submitDeadline, 10);
                    else if (typeof object.submitDeadline === "number")
                        message.submitDeadline = object.submitDeadline;
                    else if (typeof object.submitDeadline === "object")
                        message.submitDeadline = new $util.LongBits(object.submitDeadline.low >>> 0, object.submitDeadline.high >>> 0).toNumber(true);
                if (object.displayMaxDelayMillis != null)
                    if ($util.Long)
                        (message.displayMaxDelayMillis = $util.Long.fromValue(object.displayMaxDelayMillis)).unsigned = true;
                    else if (typeof object.displayMaxDelayMillis === "string")
                        message.displayMaxDelayMillis = parseInt(object.displayMaxDelayMillis, 10);
                    else if (typeof object.displayMaxDelayMillis === "number")
                        message.displayMaxDelayMillis = object.displayMaxDelayMillis;
                    else if (typeof object.displayMaxDelayMillis === "object")
                        message.displayMaxDelayMillis = new $util.LongBits(object.displayMaxDelayMillis.low >>> 0, object.displayMaxDelayMillis.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SCWebGuessOpened message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @static
             * @param {chat.Kuaishou.SCWebGuessOpened} message SCWebGuessOpened
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebGuessOpened.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                    object.guessId = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.submitDeadline = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.submitDeadline = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.displayMaxDelayMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.displayMaxDelayMillis = options.longs === String ? "0" : 0;
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                if (message.guessId != null && message.hasOwnProperty("guessId"))
                    object.guessId = message.guessId;
                if (message.submitDeadline != null && message.hasOwnProperty("submitDeadline"))
                    if (typeof message.submitDeadline === "number")
                        object.submitDeadline = options.longs === String ? String(message.submitDeadline) : message.submitDeadline;
                    else
                        object.submitDeadline = options.longs === String ? $util.Long.prototype.toString.call(message.submitDeadline) : options.longs === Number ? new $util.LongBits(message.submitDeadline.low >>> 0, message.submitDeadline.high >>> 0).toNumber(true) : message.submitDeadline;
                if (message.displayMaxDelayMillis != null && message.hasOwnProperty("displayMaxDelayMillis"))
                    if (typeof message.displayMaxDelayMillis === "number")
                        object.displayMaxDelayMillis = options.longs === String ? String(message.displayMaxDelayMillis) : message.displayMaxDelayMillis;
                    else
                        object.displayMaxDelayMillis = options.longs === String ? $util.Long.prototype.toString.call(message.displayMaxDelayMillis) : options.longs === Number ? new $util.LongBits(message.displayMaxDelayMillis.low >>> 0, message.displayMaxDelayMillis.high >>> 0).toNumber(true) : message.displayMaxDelayMillis;
                return object;
            };

            /**
             * Converts this SCWebGuessOpened to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebGuessOpened.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebGuessOpened
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebGuessOpened
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebGuessOpened.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebGuessOpened";
            };

            return SCWebGuessOpened;
        })();

        Kuaishou.SCWebGuessClosed = (function() {

            /**
             * Properties of a SCWebGuessClosed.
             * @memberof chat.Kuaishou
             * @interface ISCWebGuessClosed
             * @property {number|Long|null} [time] SCWebGuessClosed time
             * @property {string|null} [guessId] SCWebGuessClosed guessId
             * @property {number|Long|null} [displayMaxDelayMillis] SCWebGuessClosed displayMaxDelayMillis
             */

            /**
             * Constructs a new SCWebGuessClosed.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebGuessClosed.
             * @implements ISCWebGuessClosed
             * @constructor
             * @param {chat.Kuaishou.ISCWebGuessClosed=} [properties] Properties to set
             */
            function SCWebGuessClosed(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebGuessClosed time.
             * @member {number|Long} time
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @instance
             */
            SCWebGuessClosed.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SCWebGuessClosed guessId.
             * @member {string} guessId
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @instance
             */
            SCWebGuessClosed.prototype.guessId = "";

            /**
             * SCWebGuessClosed displayMaxDelayMillis.
             * @member {number|Long} displayMaxDelayMillis
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @instance
             */
            SCWebGuessClosed.prototype.displayMaxDelayMillis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SCWebGuessClosed instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @static
             * @param {chat.Kuaishou.ISCWebGuessClosed=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebGuessClosed} SCWebGuessClosed instance
             */
            SCWebGuessClosed.create = function create(properties) {
                return new SCWebGuessClosed(properties);
            };

            /**
             * Encodes the specified SCWebGuessClosed message. Does not implicitly {@link chat.Kuaishou.SCWebGuessClosed.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @static
             * @param {chat.Kuaishou.ISCWebGuessClosed} message SCWebGuessClosed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebGuessClosed.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.time);
                if (message.guessId != null && Object.hasOwnProperty.call(message, "guessId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.guessId);
                if (message.displayMaxDelayMillis != null && Object.hasOwnProperty.call(message, "displayMaxDelayMillis"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.displayMaxDelayMillis);
                return writer;
            };

            /**
             * Encodes the specified SCWebGuessClosed message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebGuessClosed.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @static
             * @param {chat.Kuaishou.ISCWebGuessClosed} message SCWebGuessClosed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebGuessClosed.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebGuessClosed message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebGuessClosed} SCWebGuessClosed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebGuessClosed.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebGuessClosed();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.time = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.guessId = reader.string();
                            break;
                        }
                    case 3: {
                            message.displayMaxDelayMillis = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebGuessClosed message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebGuessClosed} SCWebGuessClosed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebGuessClosed.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebGuessClosed message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebGuessClosed.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.time != null && message.hasOwnProperty("time"))
                    if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                        return "time: integer|Long expected";
                if (message.guessId != null && message.hasOwnProperty("guessId"))
                    if (!$util.isString(message.guessId))
                        return "guessId: string expected";
                if (message.displayMaxDelayMillis != null && message.hasOwnProperty("displayMaxDelayMillis"))
                    if (!$util.isInteger(message.displayMaxDelayMillis) && !(message.displayMaxDelayMillis && $util.isInteger(message.displayMaxDelayMillis.low) && $util.isInteger(message.displayMaxDelayMillis.high)))
                        return "displayMaxDelayMillis: integer|Long expected";
                return null;
            };

            /**
             * Creates a SCWebGuessClosed message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebGuessClosed} SCWebGuessClosed
             */
            SCWebGuessClosed.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebGuessClosed)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebGuessClosed();
                if (object.time != null)
                    if ($util.Long)
                        (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                    else if (typeof object.time === "string")
                        message.time = parseInt(object.time, 10);
                    else if (typeof object.time === "number")
                        message.time = object.time;
                    else if (typeof object.time === "object")
                        message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                if (object.guessId != null)
                    message.guessId = String(object.guessId);
                if (object.displayMaxDelayMillis != null)
                    if ($util.Long)
                        (message.displayMaxDelayMillis = $util.Long.fromValue(object.displayMaxDelayMillis)).unsigned = true;
                    else if (typeof object.displayMaxDelayMillis === "string")
                        message.displayMaxDelayMillis = parseInt(object.displayMaxDelayMillis, 10);
                    else if (typeof object.displayMaxDelayMillis === "number")
                        message.displayMaxDelayMillis = object.displayMaxDelayMillis;
                    else if (typeof object.displayMaxDelayMillis === "object")
                        message.displayMaxDelayMillis = new $util.LongBits(object.displayMaxDelayMillis.low >>> 0, object.displayMaxDelayMillis.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SCWebGuessClosed message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @static
             * @param {chat.Kuaishou.SCWebGuessClosed} message SCWebGuessClosed
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebGuessClosed.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.time = options.longs === String ? "0" : 0;
                    object.guessId = "";
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.displayMaxDelayMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.displayMaxDelayMillis = options.longs === String ? "0" : 0;
                }
                if (message.time != null && message.hasOwnProperty("time"))
                    if (typeof message.time === "number")
                        object.time = options.longs === String ? String(message.time) : message.time;
                    else
                        object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                if (message.guessId != null && message.hasOwnProperty("guessId"))
                    object.guessId = message.guessId;
                if (message.displayMaxDelayMillis != null && message.hasOwnProperty("displayMaxDelayMillis"))
                    if (typeof message.displayMaxDelayMillis === "number")
                        object.displayMaxDelayMillis = options.longs === String ? String(message.displayMaxDelayMillis) : message.displayMaxDelayMillis;
                    else
                        object.displayMaxDelayMillis = options.longs === String ? $util.Long.prototype.toString.call(message.displayMaxDelayMillis) : options.longs === Number ? new $util.LongBits(message.displayMaxDelayMillis.low >>> 0, message.displayMaxDelayMillis.high >>> 0).toNumber(true) : message.displayMaxDelayMillis;
                return object;
            };

            /**
             * Converts this SCWebGuessClosed to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebGuessClosed.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebGuessClosed
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebGuessClosed
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebGuessClosed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebGuessClosed";
            };

            return SCWebGuessClosed;
        })();

        Kuaishou.SCWebRideChanged = (function() {

            /**
             * Properties of a SCWebRideChanged.
             * @memberof chat.Kuaishou
             * @interface ISCWebRideChanged
             * @property {string|null} [rideId] SCWebRideChanged rideId
             * @property {number|null} [requestMaxDelayMillis] SCWebRideChanged requestMaxDelayMillis
             */

            /**
             * Constructs a new SCWebRideChanged.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebRideChanged.
             * @implements ISCWebRideChanged
             * @constructor
             * @param {chat.Kuaishou.ISCWebRideChanged=} [properties] Properties to set
             */
            function SCWebRideChanged(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebRideChanged rideId.
             * @member {string} rideId
             * @memberof chat.Kuaishou.SCWebRideChanged
             * @instance
             */
            SCWebRideChanged.prototype.rideId = "";

            /**
             * SCWebRideChanged requestMaxDelayMillis.
             * @member {number} requestMaxDelayMillis
             * @memberof chat.Kuaishou.SCWebRideChanged
             * @instance
             */
            SCWebRideChanged.prototype.requestMaxDelayMillis = 0;

            /**
             * Creates a new SCWebRideChanged instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebRideChanged
             * @static
             * @param {chat.Kuaishou.ISCWebRideChanged=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebRideChanged} SCWebRideChanged instance
             */
            SCWebRideChanged.create = function create(properties) {
                return new SCWebRideChanged(properties);
            };

            /**
             * Encodes the specified SCWebRideChanged message. Does not implicitly {@link chat.Kuaishou.SCWebRideChanged.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebRideChanged
             * @static
             * @param {chat.Kuaishou.ISCWebRideChanged} message SCWebRideChanged message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebRideChanged.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.rideId != null && Object.hasOwnProperty.call(message, "rideId"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.rideId);
                if (message.requestMaxDelayMillis != null && Object.hasOwnProperty.call(message, "requestMaxDelayMillis"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.requestMaxDelayMillis);
                return writer;
            };

            /**
             * Encodes the specified SCWebRideChanged message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebRideChanged.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebRideChanged
             * @static
             * @param {chat.Kuaishou.ISCWebRideChanged} message SCWebRideChanged message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebRideChanged.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebRideChanged message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebRideChanged
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebRideChanged} SCWebRideChanged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebRideChanged.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebRideChanged();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.rideId = reader.string();
                            break;
                        }
                    case 2: {
                            message.requestMaxDelayMillis = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebRideChanged message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebRideChanged
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebRideChanged} SCWebRideChanged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebRideChanged.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebRideChanged message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebRideChanged
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebRideChanged.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.rideId != null && message.hasOwnProperty("rideId"))
                    if (!$util.isString(message.rideId))
                        return "rideId: string expected";
                if (message.requestMaxDelayMillis != null && message.hasOwnProperty("requestMaxDelayMillis"))
                    if (!$util.isInteger(message.requestMaxDelayMillis))
                        return "requestMaxDelayMillis: integer expected";
                return null;
            };

            /**
             * Creates a SCWebRideChanged message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebRideChanged
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebRideChanged} SCWebRideChanged
             */
            SCWebRideChanged.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebRideChanged)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebRideChanged();
                if (object.rideId != null)
                    message.rideId = String(object.rideId);
                if (object.requestMaxDelayMillis != null)
                    message.requestMaxDelayMillis = object.requestMaxDelayMillis >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SCWebRideChanged message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebRideChanged
             * @static
             * @param {chat.Kuaishou.SCWebRideChanged} message SCWebRideChanged
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebRideChanged.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.rideId = "";
                    object.requestMaxDelayMillis = 0;
                }
                if (message.rideId != null && message.hasOwnProperty("rideId"))
                    object.rideId = message.rideId;
                if (message.requestMaxDelayMillis != null && message.hasOwnProperty("requestMaxDelayMillis"))
                    object.requestMaxDelayMillis = message.requestMaxDelayMillis;
                return object;
            };

            /**
             * Converts this SCWebRideChanged to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebRideChanged
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebRideChanged.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebRideChanged
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebRideChanged
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebRideChanged.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebRideChanged";
            };

            return SCWebRideChanged;
        })();

        Kuaishou.SCWebBetChanged = (function() {

            /**
             * Properties of a SCWebBetChanged.
             * @memberof chat.Kuaishou
             * @interface ISCWebBetChanged
             * @property {number|Long|null} [maxDelayMillis] SCWebBetChanged maxDelayMillis
             */

            /**
             * Constructs a new SCWebBetChanged.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebBetChanged.
             * @implements ISCWebBetChanged
             * @constructor
             * @param {chat.Kuaishou.ISCWebBetChanged=} [properties] Properties to set
             */
            function SCWebBetChanged(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebBetChanged maxDelayMillis.
             * @member {number|Long} maxDelayMillis
             * @memberof chat.Kuaishou.SCWebBetChanged
             * @instance
             */
            SCWebBetChanged.prototype.maxDelayMillis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SCWebBetChanged instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebBetChanged
             * @static
             * @param {chat.Kuaishou.ISCWebBetChanged=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebBetChanged} SCWebBetChanged instance
             */
            SCWebBetChanged.create = function create(properties) {
                return new SCWebBetChanged(properties);
            };

            /**
             * Encodes the specified SCWebBetChanged message. Does not implicitly {@link chat.Kuaishou.SCWebBetChanged.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebBetChanged
             * @static
             * @param {chat.Kuaishou.ISCWebBetChanged} message SCWebBetChanged message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebBetChanged.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.maxDelayMillis != null && Object.hasOwnProperty.call(message, "maxDelayMillis"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.maxDelayMillis);
                return writer;
            };

            /**
             * Encodes the specified SCWebBetChanged message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebBetChanged.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebBetChanged
             * @static
             * @param {chat.Kuaishou.ISCWebBetChanged} message SCWebBetChanged message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebBetChanged.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebBetChanged message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebBetChanged
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebBetChanged} SCWebBetChanged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebBetChanged.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebBetChanged();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.maxDelayMillis = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebBetChanged message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebBetChanged
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebBetChanged} SCWebBetChanged
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebBetChanged.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebBetChanged message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebBetChanged
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebBetChanged.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.maxDelayMillis != null && message.hasOwnProperty("maxDelayMillis"))
                    if (!$util.isInteger(message.maxDelayMillis) && !(message.maxDelayMillis && $util.isInteger(message.maxDelayMillis.low) && $util.isInteger(message.maxDelayMillis.high)))
                        return "maxDelayMillis: integer|Long expected";
                return null;
            };

            /**
             * Creates a SCWebBetChanged message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebBetChanged
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebBetChanged} SCWebBetChanged
             */
            SCWebBetChanged.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebBetChanged)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebBetChanged();
                if (object.maxDelayMillis != null)
                    if ($util.Long)
                        (message.maxDelayMillis = $util.Long.fromValue(object.maxDelayMillis)).unsigned = true;
                    else if (typeof object.maxDelayMillis === "string")
                        message.maxDelayMillis = parseInt(object.maxDelayMillis, 10);
                    else if (typeof object.maxDelayMillis === "number")
                        message.maxDelayMillis = object.maxDelayMillis;
                    else if (typeof object.maxDelayMillis === "object")
                        message.maxDelayMillis = new $util.LongBits(object.maxDelayMillis.low >>> 0, object.maxDelayMillis.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SCWebBetChanged message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebBetChanged
             * @static
             * @param {chat.Kuaishou.SCWebBetChanged} message SCWebBetChanged
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebBetChanged.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.maxDelayMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.maxDelayMillis = options.longs === String ? "0" : 0;
                if (message.maxDelayMillis != null && message.hasOwnProperty("maxDelayMillis"))
                    if (typeof message.maxDelayMillis === "number")
                        object.maxDelayMillis = options.longs === String ? String(message.maxDelayMillis) : message.maxDelayMillis;
                    else
                        object.maxDelayMillis = options.longs === String ? $util.Long.prototype.toString.call(message.maxDelayMillis) : options.longs === Number ? new $util.LongBits(message.maxDelayMillis.low >>> 0, message.maxDelayMillis.high >>> 0).toNumber(true) : message.maxDelayMillis;
                return object;
            };

            /**
             * Converts this SCWebBetChanged to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebBetChanged
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebBetChanged.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebBetChanged
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebBetChanged
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebBetChanged.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebBetChanged";
            };

            return SCWebBetChanged;
        })();

        Kuaishou.SCWebBetClosed = (function() {

            /**
             * Properties of a SCWebBetClosed.
             * @memberof chat.Kuaishou
             * @interface ISCWebBetClosed
             * @property {number|Long|null} [maxDelayMillis] SCWebBetClosed maxDelayMillis
             */

            /**
             * Constructs a new SCWebBetClosed.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebBetClosed.
             * @implements ISCWebBetClosed
             * @constructor
             * @param {chat.Kuaishou.ISCWebBetClosed=} [properties] Properties to set
             */
            function SCWebBetClosed(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebBetClosed maxDelayMillis.
             * @member {number|Long} maxDelayMillis
             * @memberof chat.Kuaishou.SCWebBetClosed
             * @instance
             */
            SCWebBetClosed.prototype.maxDelayMillis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SCWebBetClosed instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebBetClosed
             * @static
             * @param {chat.Kuaishou.ISCWebBetClosed=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebBetClosed} SCWebBetClosed instance
             */
            SCWebBetClosed.create = function create(properties) {
                return new SCWebBetClosed(properties);
            };

            /**
             * Encodes the specified SCWebBetClosed message. Does not implicitly {@link chat.Kuaishou.SCWebBetClosed.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebBetClosed
             * @static
             * @param {chat.Kuaishou.ISCWebBetClosed} message SCWebBetClosed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebBetClosed.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.maxDelayMillis != null && Object.hasOwnProperty.call(message, "maxDelayMillis"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.maxDelayMillis);
                return writer;
            };

            /**
             * Encodes the specified SCWebBetClosed message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebBetClosed.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebBetClosed
             * @static
             * @param {chat.Kuaishou.ISCWebBetClosed} message SCWebBetClosed message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebBetClosed.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebBetClosed message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebBetClosed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebBetClosed} SCWebBetClosed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebBetClosed.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebBetClosed();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.maxDelayMillis = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebBetClosed message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebBetClosed
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebBetClosed} SCWebBetClosed
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebBetClosed.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebBetClosed message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebBetClosed
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebBetClosed.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.maxDelayMillis != null && message.hasOwnProperty("maxDelayMillis"))
                    if (!$util.isInteger(message.maxDelayMillis) && !(message.maxDelayMillis && $util.isInteger(message.maxDelayMillis.low) && $util.isInteger(message.maxDelayMillis.high)))
                        return "maxDelayMillis: integer|Long expected";
                return null;
            };

            /**
             * Creates a SCWebBetClosed message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebBetClosed
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebBetClosed} SCWebBetClosed
             */
            SCWebBetClosed.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebBetClosed)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebBetClosed();
                if (object.maxDelayMillis != null)
                    if ($util.Long)
                        (message.maxDelayMillis = $util.Long.fromValue(object.maxDelayMillis)).unsigned = true;
                    else if (typeof object.maxDelayMillis === "string")
                        message.maxDelayMillis = parseInt(object.maxDelayMillis, 10);
                    else if (typeof object.maxDelayMillis === "number")
                        message.maxDelayMillis = object.maxDelayMillis;
                    else if (typeof object.maxDelayMillis === "object")
                        message.maxDelayMillis = new $util.LongBits(object.maxDelayMillis.low >>> 0, object.maxDelayMillis.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SCWebBetClosed message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebBetClosed
             * @static
             * @param {chat.Kuaishou.SCWebBetClosed} message SCWebBetClosed
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebBetClosed.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.maxDelayMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.maxDelayMillis = options.longs === String ? "0" : 0;
                if (message.maxDelayMillis != null && message.hasOwnProperty("maxDelayMillis"))
                    if (typeof message.maxDelayMillis === "number")
                        object.maxDelayMillis = options.longs === String ? String(message.maxDelayMillis) : message.maxDelayMillis;
                    else
                        object.maxDelayMillis = options.longs === String ? $util.Long.prototype.toString.call(message.maxDelayMillis) : options.longs === Number ? new $util.LongBits(message.maxDelayMillis.low >>> 0, message.maxDelayMillis.high >>> 0).toNumber(true) : message.maxDelayMillis;
                return object;
            };

            /**
             * Converts this SCWebBetClosed to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebBetClosed
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebBetClosed.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebBetClosed
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebBetClosed
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebBetClosed.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebBetClosed";
            };

            return SCWebBetClosed;
        })();

        Kuaishou.ConfigSwitchItem = (function() {

            /**
             * Properties of a ConfigSwitchItem.
             * @memberof chat.Kuaishou
             * @interface IConfigSwitchItem
             * @property {chat.Kuaishou.ConfigSwitchItem.ConfigSwitchType|null} [configSwitchType] ConfigSwitchItem configSwitchType
             * @property {boolean|null} [value] ConfigSwitchItem value
             */

            /**
             * Constructs a new ConfigSwitchItem.
             * @memberof chat.Kuaishou
             * @classdesc Represents a ConfigSwitchItem.
             * @implements IConfigSwitchItem
             * @constructor
             * @param {chat.Kuaishou.IConfigSwitchItem=} [properties] Properties to set
             */
            function ConfigSwitchItem(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ConfigSwitchItem configSwitchType.
             * @member {chat.Kuaishou.ConfigSwitchItem.ConfigSwitchType} configSwitchType
             * @memberof chat.Kuaishou.ConfigSwitchItem
             * @instance
             */
            ConfigSwitchItem.prototype.configSwitchType = 0;

            /**
             * ConfigSwitchItem value.
             * @member {boolean} value
             * @memberof chat.Kuaishou.ConfigSwitchItem
             * @instance
             */
            ConfigSwitchItem.prototype.value = false;

            /**
             * Creates a new ConfigSwitchItem instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.ConfigSwitchItem
             * @static
             * @param {chat.Kuaishou.IConfigSwitchItem=} [properties] Properties to set
             * @returns {chat.Kuaishou.ConfigSwitchItem} ConfigSwitchItem instance
             */
            ConfigSwitchItem.create = function create(properties) {
                return new ConfigSwitchItem(properties);
            };

            /**
             * Encodes the specified ConfigSwitchItem message. Does not implicitly {@link chat.Kuaishou.ConfigSwitchItem.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.ConfigSwitchItem
             * @static
             * @param {chat.Kuaishou.IConfigSwitchItem} message ConfigSwitchItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConfigSwitchItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configSwitchType != null && Object.hasOwnProperty.call(message, "configSwitchType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.configSwitchType);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.value);
                return writer;
            };

            /**
             * Encodes the specified ConfigSwitchItem message, length delimited. Does not implicitly {@link chat.Kuaishou.ConfigSwitchItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.ConfigSwitchItem
             * @static
             * @param {chat.Kuaishou.IConfigSwitchItem} message ConfigSwitchItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ConfigSwitchItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ConfigSwitchItem message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.ConfigSwitchItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.ConfigSwitchItem} ConfigSwitchItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConfigSwitchItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.ConfigSwitchItem();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.configSwitchType = reader.int32();
                            break;
                        }
                    case 2: {
                            message.value = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a ConfigSwitchItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.ConfigSwitchItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.ConfigSwitchItem} ConfigSwitchItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ConfigSwitchItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ConfigSwitchItem message.
             * @function verify
             * @memberof chat.Kuaishou.ConfigSwitchItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ConfigSwitchItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.configSwitchType != null && message.hasOwnProperty("configSwitchType"))
                    switch (message.configSwitchType) {
                    default:
                        return "configSwitchType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                        break;
                    }
                if (message.value != null && message.hasOwnProperty("value"))
                    if (typeof message.value !== "boolean")
                        return "value: boolean expected";
                return null;
            };

            /**
             * Creates a ConfigSwitchItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.ConfigSwitchItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.ConfigSwitchItem} ConfigSwitchItem
             */
            ConfigSwitchItem.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.ConfigSwitchItem)
                    return object;
                let message = new $root.chat.Kuaishou.ConfigSwitchItem();
                switch (object.configSwitchType) {
                default:
                    if (typeof object.configSwitchType === "number") {
                        message.configSwitchType = object.configSwitchType;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    message.configSwitchType = 0;
                    break;
                case "HIDE_BARRAGE":
                case 1:
                    message.configSwitchType = 1;
                    break;
                case "HIDE_SPECIAL_EFFECT":
                case 2:
                    message.configSwitchType = 2;
                    break;
                }
                if (object.value != null)
                    message.value = Boolean(object.value);
                return message;
            };

            /**
             * Creates a plain object from a ConfigSwitchItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.ConfigSwitchItem
             * @static
             * @param {chat.Kuaishou.ConfigSwitchItem} message ConfigSwitchItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ConfigSwitchItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.configSwitchType = options.enums === String ? "UNKNOWN" : 0;
                    object.value = false;
                }
                if (message.configSwitchType != null && message.hasOwnProperty("configSwitchType"))
                    object.configSwitchType = options.enums === String ? $root.chat.Kuaishou.ConfigSwitchItem.ConfigSwitchType[message.configSwitchType] === undefined ? message.configSwitchType : $root.chat.Kuaishou.ConfigSwitchItem.ConfigSwitchType[message.configSwitchType] : message.configSwitchType;
                if (message.value != null && message.hasOwnProperty("value"))
                    object.value = message.value;
                return object;
            };

            /**
             * Converts this ConfigSwitchItem to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.ConfigSwitchItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ConfigSwitchItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ConfigSwitchItem
             * @function getTypeUrl
             * @memberof chat.Kuaishou.ConfigSwitchItem
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ConfigSwitchItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.ConfigSwitchItem";
            };

            /**
             * ConfigSwitchType enum.
             * @name chat.Kuaishou.ConfigSwitchItem.ConfigSwitchType
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} HIDE_BARRAGE=1 HIDE_BARRAGE value
             * @property {number} HIDE_SPECIAL_EFFECT=2 HIDE_SPECIAL_EFFECT value
             */
            ConfigSwitchItem.ConfigSwitchType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "HIDE_BARRAGE"] = 1;
                values[valuesById[2] = "HIDE_SPECIAL_EFFECT"] = 2;
                return values;
            })();

            return ConfigSwitchItem;
        })();

        Kuaishou.SCWebLiveSpecialAccountConfigState = (function() {

            /**
             * Properties of a SCWebLiveSpecialAccountConfigState.
             * @memberof chat.Kuaishou
             * @interface ISCWebLiveSpecialAccountConfigState
             * @property {chat.Kuaishou.IConfigSwitchItem|null} [configSwitchItem] SCWebLiveSpecialAccountConfigState configSwitchItem
             * @property {number|Long|null} [timestamp] SCWebLiveSpecialAccountConfigState timestamp
             */

            /**
             * Constructs a new SCWebLiveSpecialAccountConfigState.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCWebLiveSpecialAccountConfigState.
             * @implements ISCWebLiveSpecialAccountConfigState
             * @constructor
             * @param {chat.Kuaishou.ISCWebLiveSpecialAccountConfigState=} [properties] Properties to set
             */
            function SCWebLiveSpecialAccountConfigState(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCWebLiveSpecialAccountConfigState configSwitchItem.
             * @member {chat.Kuaishou.IConfigSwitchItem|null|undefined} configSwitchItem
             * @memberof chat.Kuaishou.SCWebLiveSpecialAccountConfigState
             * @instance
             */
            SCWebLiveSpecialAccountConfigState.prototype.configSwitchItem = null;

            /**
             * SCWebLiveSpecialAccountConfigState timestamp.
             * @member {number|Long} timestamp
             * @memberof chat.Kuaishou.SCWebLiveSpecialAccountConfigState
             * @instance
             */
            SCWebLiveSpecialAccountConfigState.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SCWebLiveSpecialAccountConfigState instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCWebLiveSpecialAccountConfigState
             * @static
             * @param {chat.Kuaishou.ISCWebLiveSpecialAccountConfigState=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCWebLiveSpecialAccountConfigState} SCWebLiveSpecialAccountConfigState instance
             */
            SCWebLiveSpecialAccountConfigState.create = function create(properties) {
                return new SCWebLiveSpecialAccountConfigState(properties);
            };

            /**
             * Encodes the specified SCWebLiveSpecialAccountConfigState message. Does not implicitly {@link chat.Kuaishou.SCWebLiveSpecialAccountConfigState.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCWebLiveSpecialAccountConfigState
             * @static
             * @param {chat.Kuaishou.ISCWebLiveSpecialAccountConfigState} message SCWebLiveSpecialAccountConfigState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebLiveSpecialAccountConfigState.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.configSwitchItem != null && Object.hasOwnProperty.call(message, "configSwitchItem"))
                    $root.chat.Kuaishou.ConfigSwitchItem.encode(message.configSwitchItem, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified SCWebLiveSpecialAccountConfigState message, length delimited. Does not implicitly {@link chat.Kuaishou.SCWebLiveSpecialAccountConfigState.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCWebLiveSpecialAccountConfigState
             * @static
             * @param {chat.Kuaishou.ISCWebLiveSpecialAccountConfigState} message SCWebLiveSpecialAccountConfigState message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCWebLiveSpecialAccountConfigState.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCWebLiveSpecialAccountConfigState message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCWebLiveSpecialAccountConfigState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCWebLiveSpecialAccountConfigState} SCWebLiveSpecialAccountConfigState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebLiveSpecialAccountConfigState.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCWebLiveSpecialAccountConfigState();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.configSwitchItem = $root.chat.Kuaishou.ConfigSwitchItem.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.timestamp = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCWebLiveSpecialAccountConfigState message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCWebLiveSpecialAccountConfigState
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCWebLiveSpecialAccountConfigState} SCWebLiveSpecialAccountConfigState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCWebLiveSpecialAccountConfigState.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCWebLiveSpecialAccountConfigState message.
             * @function verify
             * @memberof chat.Kuaishou.SCWebLiveSpecialAccountConfigState
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCWebLiveSpecialAccountConfigState.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.configSwitchItem != null && message.hasOwnProperty("configSwitchItem")) {
                    let error = $root.chat.Kuaishou.ConfigSwitchItem.verify(message.configSwitchItem);
                    if (error)
                        return "configSwitchItem." + error;
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a SCWebLiveSpecialAccountConfigState message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCWebLiveSpecialAccountConfigState
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCWebLiveSpecialAccountConfigState} SCWebLiveSpecialAccountConfigState
             */
            SCWebLiveSpecialAccountConfigState.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCWebLiveSpecialAccountConfigState)
                    return object;
                let message = new $root.chat.Kuaishou.SCWebLiveSpecialAccountConfigState();
                if (object.configSwitchItem != null) {
                    if (typeof object.configSwitchItem !== "object")
                        throw TypeError(".chat.Kuaishou.SCWebLiveSpecialAccountConfigState.configSwitchItem: object expected");
                    message.configSwitchItem = $root.chat.Kuaishou.ConfigSwitchItem.fromObject(object.configSwitchItem);
                }
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SCWebLiveSpecialAccountConfigState message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCWebLiveSpecialAccountConfigState
             * @static
             * @param {chat.Kuaishou.SCWebLiveSpecialAccountConfigState} message SCWebLiveSpecialAccountConfigState
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCWebLiveSpecialAccountConfigState.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.configSwitchItem = null;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                }
                if (message.configSwitchItem != null && message.hasOwnProperty("configSwitchItem"))
                    object.configSwitchItem = $root.chat.Kuaishou.ConfigSwitchItem.toObject(message.configSwitchItem, options);
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                return object;
            };

            /**
             * Converts this SCWebLiveSpecialAccountConfigState to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCWebLiveSpecialAccountConfigState
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCWebLiveSpecialAccountConfigState.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCWebLiveSpecialAccountConfigState
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCWebLiveSpecialAccountConfigState
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCWebLiveSpecialAccountConfigState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCWebLiveSpecialAccountConfigState";
            };

            return SCWebLiveSpecialAccountConfigState;
        })();

        Kuaishou.LiveCdnNodeView = (function() {

            /**
             * Properties of a LiveCdnNodeView.
             * @memberof chat.Kuaishou
             * @interface ILiveCdnNodeView
             * @property {string|null} [cdn] LiveCdnNodeView cdn
             * @property {string|null} [url] LiveCdnNodeView url
             * @property {boolean|null} [freeTraffic] LiveCdnNodeView freeTraffic
             */

            /**
             * Constructs a new LiveCdnNodeView.
             * @memberof chat.Kuaishou
             * @classdesc Represents a LiveCdnNodeView.
             * @implements ILiveCdnNodeView
             * @constructor
             * @param {chat.Kuaishou.ILiveCdnNodeView=} [properties] Properties to set
             */
            function LiveCdnNodeView(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * LiveCdnNodeView cdn.
             * @member {string} cdn
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @instance
             */
            LiveCdnNodeView.prototype.cdn = "";

            /**
             * LiveCdnNodeView url.
             * @member {string} url
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @instance
             */
            LiveCdnNodeView.prototype.url = "";

            /**
             * LiveCdnNodeView freeTraffic.
             * @member {boolean} freeTraffic
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @instance
             */
            LiveCdnNodeView.prototype.freeTraffic = false;

            /**
             * Creates a new LiveCdnNodeView instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @static
             * @param {chat.Kuaishou.ILiveCdnNodeView=} [properties] Properties to set
             * @returns {chat.Kuaishou.LiveCdnNodeView} LiveCdnNodeView instance
             */
            LiveCdnNodeView.create = function create(properties) {
                return new LiveCdnNodeView(properties);
            };

            /**
             * Encodes the specified LiveCdnNodeView message. Does not implicitly {@link chat.Kuaishou.LiveCdnNodeView.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @static
             * @param {chat.Kuaishou.ILiveCdnNodeView} message LiveCdnNodeView message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiveCdnNodeView.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cdn != null && Object.hasOwnProperty.call(message, "cdn"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.cdn);
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
                if (message.freeTraffic != null && Object.hasOwnProperty.call(message, "freeTraffic"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.freeTraffic);
                return writer;
            };

            /**
             * Encodes the specified LiveCdnNodeView message, length delimited. Does not implicitly {@link chat.Kuaishou.LiveCdnNodeView.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @static
             * @param {chat.Kuaishou.ILiveCdnNodeView} message LiveCdnNodeView message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LiveCdnNodeView.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a LiveCdnNodeView message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.LiveCdnNodeView} LiveCdnNodeView
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiveCdnNodeView.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.LiveCdnNodeView();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.cdn = reader.string();
                            break;
                        }
                    case 2: {
                            message.url = reader.string();
                            break;
                        }
                    case 3: {
                            message.freeTraffic = reader.bool();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a LiveCdnNodeView message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.LiveCdnNodeView} LiveCdnNodeView
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LiveCdnNodeView.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LiveCdnNodeView message.
             * @function verify
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LiveCdnNodeView.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cdn != null && message.hasOwnProperty("cdn"))
                    if (!$util.isString(message.cdn))
                        return "cdn: string expected";
                if (message.url != null && message.hasOwnProperty("url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                if (message.freeTraffic != null && message.hasOwnProperty("freeTraffic"))
                    if (typeof message.freeTraffic !== "boolean")
                        return "freeTraffic: boolean expected";
                return null;
            };

            /**
             * Creates a LiveCdnNodeView message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.LiveCdnNodeView} LiveCdnNodeView
             */
            LiveCdnNodeView.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.LiveCdnNodeView)
                    return object;
                let message = new $root.chat.Kuaishou.LiveCdnNodeView();
                if (object.cdn != null)
                    message.cdn = String(object.cdn);
                if (object.url != null)
                    message.url = String(object.url);
                if (object.freeTraffic != null)
                    message.freeTraffic = Boolean(object.freeTraffic);
                return message;
            };

            /**
             * Creates a plain object from a LiveCdnNodeView message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @static
             * @param {chat.Kuaishou.LiveCdnNodeView} message LiveCdnNodeView
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LiveCdnNodeView.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.cdn = "";
                    object.url = "";
                    object.freeTraffic = false;
                }
                if (message.cdn != null && message.hasOwnProperty("cdn"))
                    object.cdn = message.cdn;
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = message.url;
                if (message.freeTraffic != null && message.hasOwnProperty("freeTraffic"))
                    object.freeTraffic = message.freeTraffic;
                return object;
            };

            /**
             * Converts this LiveCdnNodeView to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LiveCdnNodeView.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for LiveCdnNodeView
             * @function getTypeUrl
             * @memberof chat.Kuaishou.LiveCdnNodeView
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            LiveCdnNodeView.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.LiveCdnNodeView";
            };

            return LiveCdnNodeView;
        })();

        Kuaishou.AuditAudienceMask = (function() {

            /**
             * Properties of an AuditAudienceMask.
             * @memberof chat.Kuaishou
             * @interface IAuditAudienceMask
             * @property {chat.Kuaishou.ILiveCdnNodeView|null} [iconCdnNodeView] AuditAudienceMask iconCdnNodeView
             * @property {string|null} [title] AuditAudienceMask title
             * @property {string|null} [detail] AuditAudienceMask detail
             */

            /**
             * Constructs a new AuditAudienceMask.
             * @memberof chat.Kuaishou
             * @classdesc Represents an AuditAudienceMask.
             * @implements IAuditAudienceMask
             * @constructor
             * @param {chat.Kuaishou.IAuditAudienceMask=} [properties] Properties to set
             */
            function AuditAudienceMask(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AuditAudienceMask iconCdnNodeView.
             * @member {chat.Kuaishou.ILiveCdnNodeView|null|undefined} iconCdnNodeView
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @instance
             */
            AuditAudienceMask.prototype.iconCdnNodeView = null;

            /**
             * AuditAudienceMask title.
             * @member {string} title
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @instance
             */
            AuditAudienceMask.prototype.title = "";

            /**
             * AuditAudienceMask detail.
             * @member {string} detail
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @instance
             */
            AuditAudienceMask.prototype.detail = "";

            /**
             * Creates a new AuditAudienceMask instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @static
             * @param {chat.Kuaishou.IAuditAudienceMask=} [properties] Properties to set
             * @returns {chat.Kuaishou.AuditAudienceMask} AuditAudienceMask instance
             */
            AuditAudienceMask.create = function create(properties) {
                return new AuditAudienceMask(properties);
            };

            /**
             * Encodes the specified AuditAudienceMask message. Does not implicitly {@link chat.Kuaishou.AuditAudienceMask.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @static
             * @param {chat.Kuaishou.IAuditAudienceMask} message AuditAudienceMask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuditAudienceMask.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.iconCdnNodeView != null && Object.hasOwnProperty.call(message, "iconCdnNodeView"))
                    $root.chat.Kuaishou.LiveCdnNodeView.encode(message.iconCdnNodeView, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
                if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.detail);
                return writer;
            };

            /**
             * Encodes the specified AuditAudienceMask message, length delimited. Does not implicitly {@link chat.Kuaishou.AuditAudienceMask.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @static
             * @param {chat.Kuaishou.IAuditAudienceMask} message AuditAudienceMask message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AuditAudienceMask.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AuditAudienceMask message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.AuditAudienceMask} AuditAudienceMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuditAudienceMask.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.AuditAudienceMask();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.iconCdnNodeView = $root.chat.Kuaishou.LiveCdnNodeView.decode(reader, reader.uint32());
                            break;
                        }
                    case 2: {
                            message.title = reader.string();
                            break;
                        }
                    case 3: {
                            message.detail = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an AuditAudienceMask message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.AuditAudienceMask} AuditAudienceMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AuditAudienceMask.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AuditAudienceMask message.
             * @function verify
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AuditAudienceMask.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.iconCdnNodeView != null && message.hasOwnProperty("iconCdnNodeView")) {
                    let error = $root.chat.Kuaishou.LiveCdnNodeView.verify(message.iconCdnNodeView);
                    if (error)
                        return "iconCdnNodeView." + error;
                }
                if (message.title != null && message.hasOwnProperty("title"))
                    if (!$util.isString(message.title))
                        return "title: string expected";
                if (message.detail != null && message.hasOwnProperty("detail"))
                    if (!$util.isString(message.detail))
                        return "detail: string expected";
                return null;
            };

            /**
             * Creates an AuditAudienceMask message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.AuditAudienceMask} AuditAudienceMask
             */
            AuditAudienceMask.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.AuditAudienceMask)
                    return object;
                let message = new $root.chat.Kuaishou.AuditAudienceMask();
                if (object.iconCdnNodeView != null) {
                    if (typeof object.iconCdnNodeView !== "object")
                        throw TypeError(".chat.Kuaishou.AuditAudienceMask.iconCdnNodeView: object expected");
                    message.iconCdnNodeView = $root.chat.Kuaishou.LiveCdnNodeView.fromObject(object.iconCdnNodeView);
                }
                if (object.title != null)
                    message.title = String(object.title);
                if (object.detail != null)
                    message.detail = String(object.detail);
                return message;
            };

            /**
             * Creates a plain object from an AuditAudienceMask message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @static
             * @param {chat.Kuaishou.AuditAudienceMask} message AuditAudienceMask
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AuditAudienceMask.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.iconCdnNodeView = null;
                    object.title = "";
                    object.detail = "";
                }
                if (message.iconCdnNodeView != null && message.hasOwnProperty("iconCdnNodeView"))
                    object.iconCdnNodeView = $root.chat.Kuaishou.LiveCdnNodeView.toObject(message.iconCdnNodeView, options);
                if (message.title != null && message.hasOwnProperty("title"))
                    object.title = message.title;
                if (message.detail != null && message.hasOwnProperty("detail"))
                    object.detail = message.detail;
                return object;
            };

            /**
             * Converts this AuditAudienceMask to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AuditAudienceMask.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AuditAudienceMask
             * @function getTypeUrl
             * @memberof chat.Kuaishou.AuditAudienceMask
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AuditAudienceMask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.AuditAudienceMask";
            };

            return AuditAudienceMask;
        })();

        Kuaishou.SCLiveWarningMaskStatusChangedAudience = (function() {

            /**
             * Properties of a SCLiveWarningMaskStatusChangedAudience.
             * @memberof chat.Kuaishou
             * @interface ISCLiveWarningMaskStatusChangedAudience
             * @property {boolean|null} [displayMask] SCLiveWarningMaskStatusChangedAudience displayMask
             * @property {chat.Kuaishou.IAuditAudienceMask|null} [warningMask] SCLiveWarningMaskStatusChangedAudience warningMask
             */

            /**
             * Constructs a new SCLiveWarningMaskStatusChangedAudience.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCLiveWarningMaskStatusChangedAudience.
             * @implements ISCLiveWarningMaskStatusChangedAudience
             * @constructor
             * @param {chat.Kuaishou.ISCLiveWarningMaskStatusChangedAudience=} [properties] Properties to set
             */
            function SCLiveWarningMaskStatusChangedAudience(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCLiveWarningMaskStatusChangedAudience displayMask.
             * @member {boolean} displayMask
             * @memberof chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience
             * @instance
             */
            SCLiveWarningMaskStatusChangedAudience.prototype.displayMask = false;

            /**
             * SCLiveWarningMaskStatusChangedAudience warningMask.
             * @member {chat.Kuaishou.IAuditAudienceMask|null|undefined} warningMask
             * @memberof chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience
             * @instance
             */
            SCLiveWarningMaskStatusChangedAudience.prototype.warningMask = null;

            /**
             * Creates a new SCLiveWarningMaskStatusChangedAudience instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience
             * @static
             * @param {chat.Kuaishou.ISCLiveWarningMaskStatusChangedAudience=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience} SCLiveWarningMaskStatusChangedAudience instance
             */
            SCLiveWarningMaskStatusChangedAudience.create = function create(properties) {
                return new SCLiveWarningMaskStatusChangedAudience(properties);
            };

            /**
             * Encodes the specified SCLiveWarningMaskStatusChangedAudience message. Does not implicitly {@link chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience
             * @static
             * @param {chat.Kuaishou.ISCLiveWarningMaskStatusChangedAudience} message SCLiveWarningMaskStatusChangedAudience message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCLiveWarningMaskStatusChangedAudience.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.displayMask != null && Object.hasOwnProperty.call(message, "displayMask"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.displayMask);
                if (message.warningMask != null && Object.hasOwnProperty.call(message, "warningMask"))
                    $root.chat.Kuaishou.AuditAudienceMask.encode(message.warningMask, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified SCLiveWarningMaskStatusChangedAudience message, length delimited. Does not implicitly {@link chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience
             * @static
             * @param {chat.Kuaishou.ISCLiveWarningMaskStatusChangedAudience} message SCLiveWarningMaskStatusChangedAudience message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCLiveWarningMaskStatusChangedAudience.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCLiveWarningMaskStatusChangedAudience message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience} SCLiveWarningMaskStatusChangedAudience
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCLiveWarningMaskStatusChangedAudience.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.displayMask = reader.bool();
                            break;
                        }
                    case 2: {
                            message.warningMask = $root.chat.Kuaishou.AuditAudienceMask.decode(reader, reader.uint32());
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCLiveWarningMaskStatusChangedAudience message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience} SCLiveWarningMaskStatusChangedAudience
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCLiveWarningMaskStatusChangedAudience.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCLiveWarningMaskStatusChangedAudience message.
             * @function verify
             * @memberof chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCLiveWarningMaskStatusChangedAudience.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.displayMask != null && message.hasOwnProperty("displayMask"))
                    if (typeof message.displayMask !== "boolean")
                        return "displayMask: boolean expected";
                if (message.warningMask != null && message.hasOwnProperty("warningMask")) {
                    let error = $root.chat.Kuaishou.AuditAudienceMask.verify(message.warningMask);
                    if (error)
                        return "warningMask." + error;
                }
                return null;
            };

            /**
             * Creates a SCLiveWarningMaskStatusChangedAudience message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience} SCLiveWarningMaskStatusChangedAudience
             */
            SCLiveWarningMaskStatusChangedAudience.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience)
                    return object;
                let message = new $root.chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience();
                if (object.displayMask != null)
                    message.displayMask = Boolean(object.displayMask);
                if (object.warningMask != null) {
                    if (typeof object.warningMask !== "object")
                        throw TypeError(".chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience.warningMask: object expected");
                    message.warningMask = $root.chat.Kuaishou.AuditAudienceMask.fromObject(object.warningMask);
                }
                return message;
            };

            /**
             * Creates a plain object from a SCLiveWarningMaskStatusChangedAudience message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience
             * @static
             * @param {chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience} message SCLiveWarningMaskStatusChangedAudience
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCLiveWarningMaskStatusChangedAudience.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.displayMask = false;
                    object.warningMask = null;
                }
                if (message.displayMask != null && message.hasOwnProperty("displayMask"))
                    object.displayMask = message.displayMask;
                if (message.warningMask != null && message.hasOwnProperty("warningMask"))
                    object.warningMask = $root.chat.Kuaishou.AuditAudienceMask.toObject(message.warningMask, options);
                return object;
            };

            /**
             * Converts this SCLiveWarningMaskStatusChangedAudience to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCLiveWarningMaskStatusChangedAudience.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCLiveWarningMaskStatusChangedAudience
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCLiveWarningMaskStatusChangedAudience.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCLiveWarningMaskStatusChangedAudience";
            };

            return SCLiveWarningMaskStatusChangedAudience;
        })();

        /**
         * PayloadType enum.
         * @name chat.Kuaishou.PayloadType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} CS_HEARTBEAT=1 CS_HEARTBEAT value
         * @property {number} CS_ERROR=3 CS_ERROR value
         * @property {number} CS_PING=4 CS_PING value
         * @property {number} PS_HOST_INFO=51 PS_HOST_INFO value
         * @property {number} SC_HEARTBEAT_ACK=101 SC_HEARTBEAT_ACK value
         * @property {number} SC_ECHO=102 SC_ECHO value
         * @property {number} SC_ERROR=103 SC_ERROR value
         * @property {number} SC_PING_ACK=104 SC_PING_ACK value
         * @property {number} SC_INFO=105 SC_INFO value
         * @property {number} CS_ENTER_ROOM=200 CS_ENTER_ROOM value
         * @property {number} CS_USER_PAUSE=201 CS_USER_PAUSE value
         * @property {number} CS_USER_EXIT=202 CS_USER_EXIT value
         * @property {number} CS_AUTHOR_PUSH_TRAFFIC_ZERO=203 CS_AUTHOR_PUSH_TRAFFIC_ZERO value
         * @property {number} CS_HORSE_RACING=204 CS_HORSE_RACING value
         * @property {number} CS_RACE_LOSE=205 CS_RACE_LOSE value
         * @property {number} CS_VOIP_SIGNAL=206 CS_VOIP_SIGNAL value
         * @property {number} SC_ENTER_ROOM_ACK=300 SC_ENTER_ROOM_ACK value
         * @property {number} SC_AUTHOR_PAUSE=301 SC_AUTHOR_PAUSE value
         * @property {number} SC_AUTHOR_RESUME=302 SC_AUTHOR_RESUME value
         * @property {number} SC_AUTHOR_PUSH_TRAFFIC_ZERO=303 SC_AUTHOR_PUSH_TRAFFIC_ZERO value
         * @property {number} SC_AUTHOR_HEARTBEAT_MISS=304 SC_AUTHOR_HEARTBEAT_MISS value
         * @property {number} SC_PIP_STARTED=305 SC_PIP_STARTED value
         * @property {number} SC_PIP_ENDED=306 SC_PIP_ENDED value
         * @property {number} SC_HORSE_RACING_ACK=307 SC_HORSE_RACING_ACK value
         * @property {number} SC_VOIP_SIGNAL=308 SC_VOIP_SIGNAL value
         * @property {number} SC_FEED_PUSH=310 SC_FEED_PUSH value
         * @property {number} SC_ASSISTANT_STATUS=311 SC_ASSISTANT_STATUS value
         * @property {number} SC_REFRESH_WALLET=312 SC_REFRESH_WALLET value
         * @property {number} SC_LIVE_CHAT_CALL=320 SC_LIVE_CHAT_CALL value
         * @property {number} SC_LIVE_CHAT_CALL_ACCEPTED=321 SC_LIVE_CHAT_CALL_ACCEPTED value
         * @property {number} SC_LIVE_CHAT_CALL_REJECTED=322 SC_LIVE_CHAT_CALL_REJECTED value
         * @property {number} SC_LIVE_CHAT_READY=323 SC_LIVE_CHAT_READY value
         * @property {number} SC_LIVE_CHAT_GUEST_END=324 SC_LIVE_CHAT_GUEST_END value
         * @property {number} SC_LIVE_CHAT_ENDED=325 SC_LIVE_CHAT_ENDED value
         * @property {number} SC_RENDERING_MAGIC_FACE_DISABLE=326 SC_RENDERING_MAGIC_FACE_DISABLE value
         * @property {number} SC_RENDERING_MAGIC_FACE_ENABLE=327 SC_RENDERING_MAGIC_FACE_ENABLE value
         * @property {number} SC_RED_PACK_FEED=330 SC_RED_PACK_FEED value
         * @property {number} SC_LIVE_WATCHING_LIST=340 SC_LIVE_WATCHING_LIST value
         * @property {number} SC_LIVE_QUIZ_QUESTION_ASKED=350 SC_LIVE_QUIZ_QUESTION_ASKED value
         * @property {number} SC_LIVE_QUIZ_QUESTION_REVIEWED=351 SC_LIVE_QUIZ_QUESTION_REVIEWED value
         * @property {number} SC_LIVE_QUIZ_SYNC=352 SC_LIVE_QUIZ_SYNC value
         * @property {number} SC_LIVE_QUIZ_ENDED=353 SC_LIVE_QUIZ_ENDED value
         * @property {number} SC_LIVE_QUIZ_WINNERS=354 SC_LIVE_QUIZ_WINNERS value
         * @property {number} SC_SUSPECTED_VIOLATION=355 SC_SUSPECTED_VIOLATION value
         * @property {number} SC_SHOP_OPENED=360 SC_SHOP_OPENED value
         * @property {number} SC_SHOP_CLOSED=361 SC_SHOP_CLOSED value
         * @property {number} SC_GUESS_OPENED=370 SC_GUESS_OPENED value
         * @property {number} SC_GUESS_CLOSED=371 SC_GUESS_CLOSED value
         * @property {number} SC_PK_INVITATION=380 SC_PK_INVITATION value
         * @property {number} SC_PK_STATISTIC=381 SC_PK_STATISTIC value
         * @property {number} SC_RIDDLE_OPENED=390 SC_RIDDLE_OPENED value
         * @property {number} SC_RIDDLE_CLOESED=391 SC_RIDDLE_CLOESED value
         * @property {number} SC_RIDE_CHANGED=412 SC_RIDE_CHANGED value
         * @property {number} SC_BET_CHANGED=441 SC_BET_CHANGED value
         * @property {number} SC_BET_CLOSED=442 SC_BET_CLOSED value
         * @property {number} SC_LIVE_SPECIAL_ACCOUNT_CONFIG_STATE=645 SC_LIVE_SPECIAL_ACCOUNT_CONFIG_STATE value
         * @property {number} SC_LIVE_WARNING_MASK_STATUS_CHANGED_AUDIENCE=758 SC_LIVE_WARNING_MASK_STATUS_CHANGED_AUDIENCE value
         */
        Kuaishou.PayloadType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CS_HEARTBEAT"] = 1;
            values[valuesById[3] = "CS_ERROR"] = 3;
            values[valuesById[4] = "CS_PING"] = 4;
            values[valuesById[51] = "PS_HOST_INFO"] = 51;
            values[valuesById[101] = "SC_HEARTBEAT_ACK"] = 101;
            values[valuesById[102] = "SC_ECHO"] = 102;
            values[valuesById[103] = "SC_ERROR"] = 103;
            values[valuesById[104] = "SC_PING_ACK"] = 104;
            values[valuesById[105] = "SC_INFO"] = 105;
            values[valuesById[200] = "CS_ENTER_ROOM"] = 200;
            values[valuesById[201] = "CS_USER_PAUSE"] = 201;
            values[valuesById[202] = "CS_USER_EXIT"] = 202;
            values[valuesById[203] = "CS_AUTHOR_PUSH_TRAFFIC_ZERO"] = 203;
            values[valuesById[204] = "CS_HORSE_RACING"] = 204;
            values[valuesById[205] = "CS_RACE_LOSE"] = 205;
            values[valuesById[206] = "CS_VOIP_SIGNAL"] = 206;
            values[valuesById[300] = "SC_ENTER_ROOM_ACK"] = 300;
            values[valuesById[301] = "SC_AUTHOR_PAUSE"] = 301;
            values[valuesById[302] = "SC_AUTHOR_RESUME"] = 302;
            values[valuesById[303] = "SC_AUTHOR_PUSH_TRAFFIC_ZERO"] = 303;
            values[valuesById[304] = "SC_AUTHOR_HEARTBEAT_MISS"] = 304;
            values[valuesById[305] = "SC_PIP_STARTED"] = 305;
            values[valuesById[306] = "SC_PIP_ENDED"] = 306;
            values[valuesById[307] = "SC_HORSE_RACING_ACK"] = 307;
            values[valuesById[308] = "SC_VOIP_SIGNAL"] = 308;
            values[valuesById[310] = "SC_FEED_PUSH"] = 310;
            values[valuesById[311] = "SC_ASSISTANT_STATUS"] = 311;
            values[valuesById[312] = "SC_REFRESH_WALLET"] = 312;
            values[valuesById[320] = "SC_LIVE_CHAT_CALL"] = 320;
            values[valuesById[321] = "SC_LIVE_CHAT_CALL_ACCEPTED"] = 321;
            values[valuesById[322] = "SC_LIVE_CHAT_CALL_REJECTED"] = 322;
            values[valuesById[323] = "SC_LIVE_CHAT_READY"] = 323;
            values[valuesById[324] = "SC_LIVE_CHAT_GUEST_END"] = 324;
            values[valuesById[325] = "SC_LIVE_CHAT_ENDED"] = 325;
            values[valuesById[326] = "SC_RENDERING_MAGIC_FACE_DISABLE"] = 326;
            values[valuesById[327] = "SC_RENDERING_MAGIC_FACE_ENABLE"] = 327;
            values[valuesById[330] = "SC_RED_PACK_FEED"] = 330;
            values[valuesById[340] = "SC_LIVE_WATCHING_LIST"] = 340;
            values[valuesById[350] = "SC_LIVE_QUIZ_QUESTION_ASKED"] = 350;
            values[valuesById[351] = "SC_LIVE_QUIZ_QUESTION_REVIEWED"] = 351;
            values[valuesById[352] = "SC_LIVE_QUIZ_SYNC"] = 352;
            values[valuesById[353] = "SC_LIVE_QUIZ_ENDED"] = 353;
            values[valuesById[354] = "SC_LIVE_QUIZ_WINNERS"] = 354;
            values[valuesById[355] = "SC_SUSPECTED_VIOLATION"] = 355;
            values[valuesById[360] = "SC_SHOP_OPENED"] = 360;
            values[valuesById[361] = "SC_SHOP_CLOSED"] = 361;
            values[valuesById[370] = "SC_GUESS_OPENED"] = 370;
            values[valuesById[371] = "SC_GUESS_CLOSED"] = 371;
            values[valuesById[380] = "SC_PK_INVITATION"] = 380;
            values[valuesById[381] = "SC_PK_STATISTIC"] = 381;
            values[valuesById[390] = "SC_RIDDLE_OPENED"] = 390;
            values[valuesById[391] = "SC_RIDDLE_CLOESED"] = 391;
            values[valuesById[412] = "SC_RIDE_CHANGED"] = 412;
            values[valuesById[441] = "SC_BET_CHANGED"] = 441;
            values[valuesById[442] = "SC_BET_CLOSED"] = 442;
            values[valuesById[645] = "SC_LIVE_SPECIAL_ACCOUNT_CONFIG_STATE"] = 645;
            values[valuesById[758] = "SC_LIVE_WARNING_MASK_STATUS_CHANGED_AUDIENCE"] = 758;
            return values;
        })();

        Kuaishou.SocketMessage = (function() {

            /**
             * Properties of a SocketMessage.
             * @memberof chat.Kuaishou
             * @interface ISocketMessage
             * @property {chat.Kuaishou.PayloadType|null} [payloadType] SocketMessage payloadType
             * @property {chat.Kuaishou.SocketMessage.CompressionType|null} [compressionType] SocketMessage compressionType
             * @property {Uint8Array|null} [payload] SocketMessage payload
             */

            /**
             * Constructs a new SocketMessage.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SocketMessage.
             * @implements ISocketMessage
             * @constructor
             * @param {chat.Kuaishou.ISocketMessage=} [properties] Properties to set
             */
            function SocketMessage(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SocketMessage payloadType.
             * @member {chat.Kuaishou.PayloadType} payloadType
             * @memberof chat.Kuaishou.SocketMessage
             * @instance
             */
            SocketMessage.prototype.payloadType = 0;

            /**
             * SocketMessage compressionType.
             * @member {chat.Kuaishou.SocketMessage.CompressionType} compressionType
             * @memberof chat.Kuaishou.SocketMessage
             * @instance
             */
            SocketMessage.prototype.compressionType = 0;

            /**
             * SocketMessage payload.
             * @member {Uint8Array} payload
             * @memberof chat.Kuaishou.SocketMessage
             * @instance
             */
            SocketMessage.prototype.payload = $util.newBuffer([]);

            /**
             * Creates a new SocketMessage instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SocketMessage
             * @static
             * @param {chat.Kuaishou.ISocketMessage=} [properties] Properties to set
             * @returns {chat.Kuaishou.SocketMessage} SocketMessage instance
             */
            SocketMessage.create = function create(properties) {
                return new SocketMessage(properties);
            };

            /**
             * Encodes the specified SocketMessage message. Does not implicitly {@link chat.Kuaishou.SocketMessage.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SocketMessage
             * @static
             * @param {chat.Kuaishou.ISocketMessage} message SocketMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SocketMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.payloadType != null && Object.hasOwnProperty.call(message, "payloadType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.payloadType);
                if (message.compressionType != null && Object.hasOwnProperty.call(message, "compressionType"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.compressionType);
                if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
                return writer;
            };

            /**
             * Encodes the specified SocketMessage message, length delimited. Does not implicitly {@link chat.Kuaishou.SocketMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SocketMessage
             * @static
             * @param {chat.Kuaishou.ISocketMessage} message SocketMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SocketMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SocketMessage message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SocketMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SocketMessage} SocketMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SocketMessage.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SocketMessage();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.payloadType = reader.int32();
                            break;
                        }
                    case 2: {
                            message.compressionType = reader.int32();
                            break;
                        }
                    case 3: {
                            message.payload = reader.bytes();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SocketMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SocketMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SocketMessage} SocketMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SocketMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SocketMessage message.
             * @function verify
             * @memberof chat.Kuaishou.SocketMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SocketMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.payloadType != null && message.hasOwnProperty("payloadType"))
                    switch (message.payloadType) {
                    default:
                        return "payloadType: enum value expected";
                    case 0:
                    case 1:
                    case 3:
                    case 4:
                    case 51:
                    case 101:
                    case 102:
                    case 103:
                    case 104:
                    case 105:
                    case 200:
                    case 201:
                    case 202:
                    case 203:
                    case 204:
                    case 205:
                    case 206:
                    case 300:
                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 306:
                    case 307:
                    case 308:
                    case 310:
                    case 311:
                    case 312:
                    case 320:
                    case 321:
                    case 322:
                    case 323:
                    case 324:
                    case 325:
                    case 326:
                    case 327:
                    case 330:
                    case 340:
                    case 350:
                    case 351:
                    case 352:
                    case 353:
                    case 354:
                    case 355:
                    case 360:
                    case 361:
                    case 370:
                    case 371:
                    case 380:
                    case 381:
                    case 390:
                    case 391:
                    case 412:
                    case 441:
                    case 442:
                    case 645:
                    case 758:
                        break;
                    }
                if (message.compressionType != null && message.hasOwnProperty("compressionType"))
                    switch (message.compressionType) {
                    default:
                        return "compressionType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                if (message.payload != null && message.hasOwnProperty("payload"))
                    if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                        return "payload: buffer expected";
                return null;
            };

            /**
             * Creates a SocketMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SocketMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SocketMessage} SocketMessage
             */
            SocketMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SocketMessage)
                    return object;
                let message = new $root.chat.Kuaishou.SocketMessage();
                switch (object.payloadType) {
                default:
                    if (typeof object.payloadType === "number") {
                        message.payloadType = object.payloadType;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    message.payloadType = 0;
                    break;
                case "CS_HEARTBEAT":
                case 1:
                    message.payloadType = 1;
                    break;
                case "CS_ERROR":
                case 3:
                    message.payloadType = 3;
                    break;
                case "CS_PING":
                case 4:
                    message.payloadType = 4;
                    break;
                case "PS_HOST_INFO":
                case 51:
                    message.payloadType = 51;
                    break;
                case "SC_HEARTBEAT_ACK":
                case 101:
                    message.payloadType = 101;
                    break;
                case "SC_ECHO":
                case 102:
                    message.payloadType = 102;
                    break;
                case "SC_ERROR":
                case 103:
                    message.payloadType = 103;
                    break;
                case "SC_PING_ACK":
                case 104:
                    message.payloadType = 104;
                    break;
                case "SC_INFO":
                case 105:
                    message.payloadType = 105;
                    break;
                case "CS_ENTER_ROOM":
                case 200:
                    message.payloadType = 200;
                    break;
                case "CS_USER_PAUSE":
                case 201:
                    message.payloadType = 201;
                    break;
                case "CS_USER_EXIT":
                case 202:
                    message.payloadType = 202;
                    break;
                case "CS_AUTHOR_PUSH_TRAFFIC_ZERO":
                case 203:
                    message.payloadType = 203;
                    break;
                case "CS_HORSE_RACING":
                case 204:
                    message.payloadType = 204;
                    break;
                case "CS_RACE_LOSE":
                case 205:
                    message.payloadType = 205;
                    break;
                case "CS_VOIP_SIGNAL":
                case 206:
                    message.payloadType = 206;
                    break;
                case "SC_ENTER_ROOM_ACK":
                case 300:
                    message.payloadType = 300;
                    break;
                case "SC_AUTHOR_PAUSE":
                case 301:
                    message.payloadType = 301;
                    break;
                case "SC_AUTHOR_RESUME":
                case 302:
                    message.payloadType = 302;
                    break;
                case "SC_AUTHOR_PUSH_TRAFFIC_ZERO":
                case 303:
                    message.payloadType = 303;
                    break;
                case "SC_AUTHOR_HEARTBEAT_MISS":
                case 304:
                    message.payloadType = 304;
                    break;
                case "SC_PIP_STARTED":
                case 305:
                    message.payloadType = 305;
                    break;
                case "SC_PIP_ENDED":
                case 306:
                    message.payloadType = 306;
                    break;
                case "SC_HORSE_RACING_ACK":
                case 307:
                    message.payloadType = 307;
                    break;
                case "SC_VOIP_SIGNAL":
                case 308:
                    message.payloadType = 308;
                    break;
                case "SC_FEED_PUSH":
                case 310:
                    message.payloadType = 310;
                    break;
                case "SC_ASSISTANT_STATUS":
                case 311:
                    message.payloadType = 311;
                    break;
                case "SC_REFRESH_WALLET":
                case 312:
                    message.payloadType = 312;
                    break;
                case "SC_LIVE_CHAT_CALL":
                case 320:
                    message.payloadType = 320;
                    break;
                case "SC_LIVE_CHAT_CALL_ACCEPTED":
                case 321:
                    message.payloadType = 321;
                    break;
                case "SC_LIVE_CHAT_CALL_REJECTED":
                case 322:
                    message.payloadType = 322;
                    break;
                case "SC_LIVE_CHAT_READY":
                case 323:
                    message.payloadType = 323;
                    break;
                case "SC_LIVE_CHAT_GUEST_END":
                case 324:
                    message.payloadType = 324;
                    break;
                case "SC_LIVE_CHAT_ENDED":
                case 325:
                    message.payloadType = 325;
                    break;
                case "SC_RENDERING_MAGIC_FACE_DISABLE":
                case 326:
                    message.payloadType = 326;
                    break;
                case "SC_RENDERING_MAGIC_FACE_ENABLE":
                case 327:
                    message.payloadType = 327;
                    break;
                case "SC_RED_PACK_FEED":
                case 330:
                    message.payloadType = 330;
                    break;
                case "SC_LIVE_WATCHING_LIST":
                case 340:
                    message.payloadType = 340;
                    break;
                case "SC_LIVE_QUIZ_QUESTION_ASKED":
                case 350:
                    message.payloadType = 350;
                    break;
                case "SC_LIVE_QUIZ_QUESTION_REVIEWED":
                case 351:
                    message.payloadType = 351;
                    break;
                case "SC_LIVE_QUIZ_SYNC":
                case 352:
                    message.payloadType = 352;
                    break;
                case "SC_LIVE_QUIZ_ENDED":
                case 353:
                    message.payloadType = 353;
                    break;
                case "SC_LIVE_QUIZ_WINNERS":
                case 354:
                    message.payloadType = 354;
                    break;
                case "SC_SUSPECTED_VIOLATION":
                case 355:
                    message.payloadType = 355;
                    break;
                case "SC_SHOP_OPENED":
                case 360:
                    message.payloadType = 360;
                    break;
                case "SC_SHOP_CLOSED":
                case 361:
                    message.payloadType = 361;
                    break;
                case "SC_GUESS_OPENED":
                case 370:
                    message.payloadType = 370;
                    break;
                case "SC_GUESS_CLOSED":
                case 371:
                    message.payloadType = 371;
                    break;
                case "SC_PK_INVITATION":
                case 380:
                    message.payloadType = 380;
                    break;
                case "SC_PK_STATISTIC":
                case 381:
                    message.payloadType = 381;
                    break;
                case "SC_RIDDLE_OPENED":
                case 390:
                    message.payloadType = 390;
                    break;
                case "SC_RIDDLE_CLOESED":
                case 391:
                    message.payloadType = 391;
                    break;
                case "SC_RIDE_CHANGED":
                case 412:
                    message.payloadType = 412;
                    break;
                case "SC_BET_CHANGED":
                case 441:
                    message.payloadType = 441;
                    break;
                case "SC_BET_CLOSED":
                case 442:
                    message.payloadType = 442;
                    break;
                case "SC_LIVE_SPECIAL_ACCOUNT_CONFIG_STATE":
                case 645:
                    message.payloadType = 645;
                    break;
                case "SC_LIVE_WARNING_MASK_STATUS_CHANGED_AUDIENCE":
                case 758:
                    message.payloadType = 758;
                    break;
                }
                switch (object.compressionType) {
                default:
                    if (typeof object.compressionType === "number") {
                        message.compressionType = object.compressionType;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    message.compressionType = 0;
                    break;
                case "NONE":
                case 1:
                    message.compressionType = 1;
                    break;
                case "GZIP":
                case 2:
                    message.compressionType = 2;
                    break;
                case "AES":
                case 3:
                    message.compressionType = 3;
                    break;
                }
                if (object.payload != null)
                    if (typeof object.payload === "string")
                        $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                    else if (object.payload.length >= 0)
                        message.payload = object.payload;
                return message;
            };

            /**
             * Creates a plain object from a SocketMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SocketMessage
             * @static
             * @param {chat.Kuaishou.SocketMessage} message SocketMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SocketMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.payloadType = options.enums === String ? "UNKNOWN" : 0;
                    object.compressionType = options.enums === String ? "UNKNOWN" : 0;
                    if (options.bytes === String)
                        object.payload = "";
                    else {
                        object.payload = [];
                        if (options.bytes !== Array)
                            object.payload = $util.newBuffer(object.payload);
                    }
                }
                if (message.payloadType != null && message.hasOwnProperty("payloadType"))
                    object.payloadType = options.enums === String ? $root.chat.Kuaishou.PayloadType[message.payloadType] === undefined ? message.payloadType : $root.chat.Kuaishou.PayloadType[message.payloadType] : message.payloadType;
                if (message.compressionType != null && message.hasOwnProperty("compressionType"))
                    object.compressionType = options.enums === String ? $root.chat.Kuaishou.SocketMessage.CompressionType[message.compressionType] === undefined ? message.compressionType : $root.chat.Kuaishou.SocketMessage.CompressionType[message.compressionType] : message.compressionType;
                if (message.payload != null && message.hasOwnProperty("payload"))
                    object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                return object;
            };

            /**
             * Converts this SocketMessage to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SocketMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SocketMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SocketMessage
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SocketMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SocketMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SocketMessage";
            };

            /**
             * CompressionType enum.
             * @name chat.Kuaishou.SocketMessage.CompressionType
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} NONE=1 NONE value
             * @property {number} GZIP=2 GZIP value
             * @property {number} AES=3 AES value
             */
            SocketMessage.CompressionType = (function() {
                const valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "NONE"] = 1;
                values[valuesById[2] = "GZIP"] = 2;
                values[valuesById[3] = "AES"] = 3;
                return values;
            })();

            return SocketMessage;
        })();

        Kuaishou.CSHeartbeat = (function() {

            /**
             * Properties of a CSHeartbeat.
             * @memberof chat.Kuaishou
             * @interface ICSHeartbeat
             * @property {number|Long|null} [timestamp] CSHeartbeat timestamp
             */

            /**
             * Constructs a new CSHeartbeat.
             * @memberof chat.Kuaishou
             * @classdesc Represents a CSHeartbeat.
             * @implements ICSHeartbeat
             * @constructor
             * @param {chat.Kuaishou.ICSHeartbeat=} [properties] Properties to set
             */
            function CSHeartbeat(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CSHeartbeat timestamp.
             * @member {number|Long} timestamp
             * @memberof chat.Kuaishou.CSHeartbeat
             * @instance
             */
            CSHeartbeat.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new CSHeartbeat instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.CSHeartbeat
             * @static
             * @param {chat.Kuaishou.ICSHeartbeat=} [properties] Properties to set
             * @returns {chat.Kuaishou.CSHeartbeat} CSHeartbeat instance
             */
            CSHeartbeat.create = function create(properties) {
                return new CSHeartbeat(properties);
            };

            /**
             * Encodes the specified CSHeartbeat message. Does not implicitly {@link chat.Kuaishou.CSHeartbeat.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.CSHeartbeat
             * @static
             * @param {chat.Kuaishou.ICSHeartbeat} message CSHeartbeat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSHeartbeat.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified CSHeartbeat message, length delimited. Does not implicitly {@link chat.Kuaishou.CSHeartbeat.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.CSHeartbeat
             * @static
             * @param {chat.Kuaishou.ICSHeartbeat} message CSHeartbeat message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSHeartbeat.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CSHeartbeat message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.CSHeartbeat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.CSHeartbeat} CSHeartbeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSHeartbeat.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.CSHeartbeat();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.timestamp = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CSHeartbeat message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.CSHeartbeat
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.CSHeartbeat} CSHeartbeat
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSHeartbeat.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CSHeartbeat message.
             * @function verify
             * @memberof chat.Kuaishou.CSHeartbeat
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CSHeartbeat.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a CSHeartbeat message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.CSHeartbeat
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.CSHeartbeat} CSHeartbeat
             */
            CSHeartbeat.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.CSHeartbeat)
                    return object;
                let message = new $root.chat.Kuaishou.CSHeartbeat();
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a CSHeartbeat message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.CSHeartbeat
             * @static
             * @param {chat.Kuaishou.CSHeartbeat} message CSHeartbeat
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CSHeartbeat.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                return object;
            };

            /**
             * Converts this CSHeartbeat to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.CSHeartbeat
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CSHeartbeat.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CSHeartbeat
             * @function getTypeUrl
             * @memberof chat.Kuaishou.CSHeartbeat
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CSHeartbeat.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.CSHeartbeat";
            };

            return CSHeartbeat;
        })();

        Kuaishou.SCHeartbeatAck = (function() {

            /**
             * Properties of a SCHeartbeatAck.
             * @memberof chat.Kuaishou
             * @interface ISCHeartbeatAck
             * @property {number|Long|null} [timestamp] SCHeartbeatAck timestamp
             * @property {number|Long|null} [clientTimestamp] SCHeartbeatAck clientTimestamp
             */

            /**
             * Constructs a new SCHeartbeatAck.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCHeartbeatAck.
             * @implements ISCHeartbeatAck
             * @constructor
             * @param {chat.Kuaishou.ISCHeartbeatAck=} [properties] Properties to set
             */
            function SCHeartbeatAck(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCHeartbeatAck timestamp.
             * @member {number|Long} timestamp
             * @memberof chat.Kuaishou.SCHeartbeatAck
             * @instance
             */
            SCHeartbeatAck.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * SCHeartbeatAck clientTimestamp.
             * @member {number|Long} clientTimestamp
             * @memberof chat.Kuaishou.SCHeartbeatAck
             * @instance
             */
            SCHeartbeatAck.prototype.clientTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * Creates a new SCHeartbeatAck instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCHeartbeatAck
             * @static
             * @param {chat.Kuaishou.ISCHeartbeatAck=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCHeartbeatAck} SCHeartbeatAck instance
             */
            SCHeartbeatAck.create = function create(properties) {
                return new SCHeartbeatAck(properties);
            };

            /**
             * Encodes the specified SCHeartbeatAck message. Does not implicitly {@link chat.Kuaishou.SCHeartbeatAck.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCHeartbeatAck
             * @static
             * @param {chat.Kuaishou.ISCHeartbeatAck} message SCHeartbeatAck message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCHeartbeatAck.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.timestamp);
                if (message.clientTimestamp != null && Object.hasOwnProperty.call(message, "clientTimestamp"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.clientTimestamp);
                return writer;
            };

            /**
             * Encodes the specified SCHeartbeatAck message, length delimited. Does not implicitly {@link chat.Kuaishou.SCHeartbeatAck.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCHeartbeatAck
             * @static
             * @param {chat.Kuaishou.ISCHeartbeatAck} message SCHeartbeatAck message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCHeartbeatAck.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCHeartbeatAck message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCHeartbeatAck
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCHeartbeatAck} SCHeartbeatAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCHeartbeatAck.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCHeartbeatAck();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.timestamp = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.clientTimestamp = reader.uint64();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCHeartbeatAck message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCHeartbeatAck
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCHeartbeatAck} SCHeartbeatAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCHeartbeatAck.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCHeartbeatAck message.
             * @function verify
             * @memberof chat.Kuaishou.SCHeartbeatAck
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCHeartbeatAck.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                if (message.clientTimestamp != null && message.hasOwnProperty("clientTimestamp"))
                    if (!$util.isInteger(message.clientTimestamp) && !(message.clientTimestamp && $util.isInteger(message.clientTimestamp.low) && $util.isInteger(message.clientTimestamp.high)))
                        return "clientTimestamp: integer|Long expected";
                return null;
            };

            /**
             * Creates a SCHeartbeatAck message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCHeartbeatAck
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCHeartbeatAck} SCHeartbeatAck
             */
            SCHeartbeatAck.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCHeartbeatAck)
                    return object;
                let message = new $root.chat.Kuaishou.SCHeartbeatAck();
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
                if (object.clientTimestamp != null)
                    if ($util.Long)
                        (message.clientTimestamp = $util.Long.fromValue(object.clientTimestamp)).unsigned = true;
                    else if (typeof object.clientTimestamp === "string")
                        message.clientTimestamp = parseInt(object.clientTimestamp, 10);
                    else if (typeof object.clientTimestamp === "number")
                        message.clientTimestamp = object.clientTimestamp;
                    else if (typeof object.clientTimestamp === "object")
                        message.clientTimestamp = new $util.LongBits(object.clientTimestamp.low >>> 0, object.clientTimestamp.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a SCHeartbeatAck message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCHeartbeatAck
             * @static
             * @param {chat.Kuaishou.SCHeartbeatAck} message SCHeartbeatAck
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCHeartbeatAck.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.timestamp = options.longs === String ? "0" : 0;
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.clientTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.clientTimestamp = options.longs === String ? "0" : 0;
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                if (message.clientTimestamp != null && message.hasOwnProperty("clientTimestamp"))
                    if (typeof message.clientTimestamp === "number")
                        object.clientTimestamp = options.longs === String ? String(message.clientTimestamp) : message.clientTimestamp;
                    else
                        object.clientTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.clientTimestamp) : options.longs === Number ? new $util.LongBits(message.clientTimestamp.low >>> 0, message.clientTimestamp.high >>> 0).toNumber(true) : message.clientTimestamp;
                return object;
            };

            /**
             * Converts this SCHeartbeatAck to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCHeartbeatAck
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCHeartbeatAck.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCHeartbeatAck
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCHeartbeatAck
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCHeartbeatAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCHeartbeatAck";
            };

            return SCHeartbeatAck;
        })();

        Kuaishou.SCError = (function() {

            /**
             * Properties of a SCError.
             * @memberof chat.Kuaishou
             * @interface ISCError
             * @property {number|null} [code] SCError code
             * @property {string|null} [msg] SCError msg
             * @property {number|null} [subCode] SCError subCode
             */

            /**
             * Constructs a new SCError.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCError.
             * @implements ISCError
             * @constructor
             * @param {chat.Kuaishou.ISCError=} [properties] Properties to set
             */
            function SCError(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCError code.
             * @member {number} code
             * @memberof chat.Kuaishou.SCError
             * @instance
             */
            SCError.prototype.code = 0;

            /**
             * SCError msg.
             * @member {string} msg
             * @memberof chat.Kuaishou.SCError
             * @instance
             */
            SCError.prototype.msg = "";

            /**
             * SCError subCode.
             * @member {number} subCode
             * @memberof chat.Kuaishou.SCError
             * @instance
             */
            SCError.prototype.subCode = 0;

            /**
             * Creates a new SCError instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCError
             * @static
             * @param {chat.Kuaishou.ISCError=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCError} SCError instance
             */
            SCError.create = function create(properties) {
                return new SCError(properties);
            };

            /**
             * Encodes the specified SCError message. Does not implicitly {@link chat.Kuaishou.SCError.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCError
             * @static
             * @param {chat.Kuaishou.ISCError} message SCError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                if (message.subCode != null && Object.hasOwnProperty.call(message, "subCode"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.subCode);
                return writer;
            };

            /**
             * Encodes the specified SCError message, length delimited. Does not implicitly {@link chat.Kuaishou.SCError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCError
             * @static
             * @param {chat.Kuaishou.ISCError} message SCError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCError message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCError} SCError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCError();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.code = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.msg = reader.string();
                            break;
                        }
                    case 3: {
                            message.subCode = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCError} SCError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCError message.
             * @function verify
             * @memberof chat.Kuaishou.SCError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                if (message.subCode != null && message.hasOwnProperty("subCode"))
                    if (!$util.isInteger(message.subCode))
                        return "subCode: integer expected";
                return null;
            };

            /**
             * Creates a SCError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCError} SCError
             */
            SCError.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCError)
                    return object;
                let message = new $root.chat.Kuaishou.SCError();
                if (object.code != null)
                    message.code = object.code >>> 0;
                if (object.msg != null)
                    message.msg = String(object.msg);
                if (object.subCode != null)
                    message.subCode = object.subCode >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a SCError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCError
             * @static
             * @param {chat.Kuaishou.SCError} message SCError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.code = 0;
                    object.msg = "";
                    object.subCode = 0;
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                if (message.subCode != null && message.hasOwnProperty("subCode"))
                    object.subCode = message.subCode;
                return object;
            };

            /**
             * Converts this SCError to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCError
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCError
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCError";
            };

            return SCError;
        })();

        Kuaishou.SCInfo = (function() {

            /**
             * Properties of a SCInfo.
             * @memberof chat.Kuaishou
             * @interface ISCInfo
             * @property {number|null} [code] SCInfo code
             * @property {string|null} [msg] SCInfo msg
             */

            /**
             * Constructs a new SCInfo.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCInfo.
             * @implements ISCInfo
             * @constructor
             * @param {chat.Kuaishou.ISCInfo=} [properties] Properties to set
             */
            function SCInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCInfo code.
             * @member {number} code
             * @memberof chat.Kuaishou.SCInfo
             * @instance
             */
            SCInfo.prototype.code = 0;

            /**
             * SCInfo msg.
             * @member {string} msg
             * @memberof chat.Kuaishou.SCInfo
             * @instance
             */
            SCInfo.prototype.msg = "";

            /**
             * Creates a new SCInfo instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCInfo
             * @static
             * @param {chat.Kuaishou.ISCInfo=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCInfo} SCInfo instance
             */
            SCInfo.create = function create(properties) {
                return new SCInfo(properties);
            };

            /**
             * Encodes the specified SCInfo message. Does not implicitly {@link chat.Kuaishou.SCInfo.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCInfo
             * @static
             * @param {chat.Kuaishou.ISCInfo} message SCInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
                if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
                return writer;
            };

            /**
             * Encodes the specified SCInfo message, length delimited. Does not implicitly {@link chat.Kuaishou.SCInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCInfo
             * @static
             * @param {chat.Kuaishou.ISCInfo} message SCInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCInfo message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCInfo} SCInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.code = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.msg = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCInfo} SCInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCInfo message.
             * @function verify
             * @memberof chat.Kuaishou.SCInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                if (message.msg != null && message.hasOwnProperty("msg"))
                    if (!$util.isString(message.msg))
                        return "msg: string expected";
                return null;
            };

            /**
             * Creates a SCInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCInfo} SCInfo
             */
            SCInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCInfo)
                    return object;
                let message = new $root.chat.Kuaishou.SCInfo();
                if (object.code != null)
                    message.code = object.code >>> 0;
                if (object.msg != null)
                    message.msg = String(object.msg);
                return message;
            };

            /**
             * Creates a plain object from a SCInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCInfo
             * @static
             * @param {chat.Kuaishou.SCInfo} message SCInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.code = 0;
                    object.msg = "";
                }
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                if (message.msg != null && message.hasOwnProperty("msg"))
                    object.msg = message.msg;
                return object;
            };

            /**
             * Converts this SCInfo to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCInfo
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCInfo";
            };

            return SCInfo;
        })();

        Kuaishou.CSError = (function() {

            /**
             * Properties of a CSError.
             * @memberof chat.Kuaishou
             * @interface ICSError
             * @property {number|null} [code] CSError code
             */

            /**
             * Constructs a new CSError.
             * @memberof chat.Kuaishou
             * @classdesc Represents a CSError.
             * @implements ICSError
             * @constructor
             * @param {chat.Kuaishou.ICSError=} [properties] Properties to set
             */
            function CSError(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CSError code.
             * @member {number} code
             * @memberof chat.Kuaishou.CSError
             * @instance
             */
            CSError.prototype.code = 0;

            /**
             * Creates a new CSError instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.CSError
             * @static
             * @param {chat.Kuaishou.ICSError=} [properties] Properties to set
             * @returns {chat.Kuaishou.CSError} CSError instance
             */
            CSError.create = function create(properties) {
                return new CSError(properties);
            };

            /**
             * Encodes the specified CSError message. Does not implicitly {@link chat.Kuaishou.CSError.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.CSError
             * @static
             * @param {chat.Kuaishou.ICSError} message CSError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSError.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.code);
                return writer;
            };

            /**
             * Encodes the specified CSError message, length delimited. Does not implicitly {@link chat.Kuaishou.CSError.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.CSError
             * @static
             * @param {chat.Kuaishou.ICSError} message CSError message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSError.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CSError message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.CSError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.CSError} CSError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSError.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.CSError();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.code = reader.uint32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CSError message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.CSError
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.CSError} CSError
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSError.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CSError message.
             * @function verify
             * @memberof chat.Kuaishou.CSError
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CSError.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.code != null && message.hasOwnProperty("code"))
                    if (!$util.isInteger(message.code))
                        return "code: integer expected";
                return null;
            };

            /**
             * Creates a CSError message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.CSError
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.CSError} CSError
             */
            CSError.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.CSError)
                    return object;
                let message = new $root.chat.Kuaishou.CSError();
                if (object.code != null)
                    message.code = object.code >>> 0;
                return message;
            };

            /**
             * Creates a plain object from a CSError message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.CSError
             * @static
             * @param {chat.Kuaishou.CSError} message CSError
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CSError.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.code = 0;
                if (message.code != null && message.hasOwnProperty("code"))
                    object.code = message.code;
                return object;
            };

            /**
             * Converts this CSError to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.CSError
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CSError.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CSError
             * @function getTypeUrl
             * @memberof chat.Kuaishou.CSError
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CSError.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.CSError";
            };

            return CSError;
        })();

        Kuaishou.CSPing = (function() {

            /**
             * Properties of a CSPing.
             * @memberof chat.Kuaishou
             * @interface ICSPing
             * @property {string|null} [echoData] CSPing echoData
             * @property {chat.Kuaishou.ClientId|null} [clientId] CSPing clientId
             * @property {string|null} [deviceId] CSPing deviceId
             * @property {string|null} [appVer] CSPing appVer
             */

            /**
             * Constructs a new CSPing.
             * @memberof chat.Kuaishou
             * @classdesc Represents a CSPing.
             * @implements ICSPing
             * @constructor
             * @param {chat.Kuaishou.ICSPing=} [properties] Properties to set
             */
            function CSPing(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * CSPing echoData.
             * @member {string} echoData
             * @memberof chat.Kuaishou.CSPing
             * @instance
             */
            CSPing.prototype.echoData = "";

            /**
             * CSPing clientId.
             * @member {chat.Kuaishou.ClientId} clientId
             * @memberof chat.Kuaishou.CSPing
             * @instance
             */
            CSPing.prototype.clientId = 0;

            /**
             * CSPing deviceId.
             * @member {string} deviceId
             * @memberof chat.Kuaishou.CSPing
             * @instance
             */
            CSPing.prototype.deviceId = "";

            /**
             * CSPing appVer.
             * @member {string} appVer
             * @memberof chat.Kuaishou.CSPing
             * @instance
             */
            CSPing.prototype.appVer = "";

            /**
             * Creates a new CSPing instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.CSPing
             * @static
             * @param {chat.Kuaishou.ICSPing=} [properties] Properties to set
             * @returns {chat.Kuaishou.CSPing} CSPing instance
             */
            CSPing.create = function create(properties) {
                return new CSPing(properties);
            };

            /**
             * Encodes the specified CSPing message. Does not implicitly {@link chat.Kuaishou.CSPing.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.CSPing
             * @static
             * @param {chat.Kuaishou.ICSPing} message CSPing message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSPing.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.echoData != null && Object.hasOwnProperty.call(message, "echoData"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.echoData);
                if (message.clientId != null && Object.hasOwnProperty.call(message, "clientId"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.clientId);
                if (message.deviceId != null && Object.hasOwnProperty.call(message, "deviceId"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.deviceId);
                if (message.appVer != null && Object.hasOwnProperty.call(message, "appVer"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.appVer);
                return writer;
            };

            /**
             * Encodes the specified CSPing message, length delimited. Does not implicitly {@link chat.Kuaishou.CSPing.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.CSPing
             * @static
             * @param {chat.Kuaishou.ICSPing} message CSPing message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            CSPing.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a CSPing message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.CSPing
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.CSPing} CSPing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSPing.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.CSPing();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.echoData = reader.string();
                            break;
                        }
                    case 2: {
                            message.clientId = reader.int32();
                            break;
                        }
                    case 3: {
                            message.deviceId = reader.string();
                            break;
                        }
                    case 4: {
                            message.appVer = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a CSPing message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.CSPing
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.CSPing} CSPing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            CSPing.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a CSPing message.
             * @function verify
             * @memberof chat.Kuaishou.CSPing
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            CSPing.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.echoData != null && message.hasOwnProperty("echoData"))
                    if (!$util.isString(message.echoData))
                        return "echoData: string expected";
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    switch (message.clientId) {
                    default:
                        return "clientId: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 6:
                    case 8:
                    case 9:
                        break;
                    }
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    if (!$util.isString(message.deviceId))
                        return "deviceId: string expected";
                if (message.appVer != null && message.hasOwnProperty("appVer"))
                    if (!$util.isString(message.appVer))
                        return "appVer: string expected";
                return null;
            };

            /**
             * Creates a CSPing message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.CSPing
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.CSPing} CSPing
             */
            CSPing.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.CSPing)
                    return object;
                let message = new $root.chat.Kuaishou.CSPing();
                if (object.echoData != null)
                    message.echoData = String(object.echoData);
                switch (object.clientId) {
                default:
                    if (typeof object.clientId === "number") {
                        message.clientId = object.clientId;
                        break;
                    }
                    break;
                case "NONE":
                case 0:
                    message.clientId = 0;
                    break;
                case "IPHONE":
                case 1:
                    message.clientId = 1;
                    break;
                case "ANDROID":
                case 2:
                    message.clientId = 2;
                    break;
                case "WEB":
                case 3:
                    message.clientId = 3;
                    break;
                case "PC":
                case 6:
                    message.clientId = 6;
                    break;
                case "IPHONE_LIVE_MATE":
                case 8:
                    message.clientId = 8;
                    break;
                case "ANDROID_LIVE_MATE":
                case 9:
                    message.clientId = 9;
                    break;
                }
                if (object.deviceId != null)
                    message.deviceId = String(object.deviceId);
                if (object.appVer != null)
                    message.appVer = String(object.appVer);
                return message;
            };

            /**
             * Creates a plain object from a CSPing message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.CSPing
             * @static
             * @param {chat.Kuaishou.CSPing} message CSPing
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            CSPing.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.echoData = "";
                    object.clientId = options.enums === String ? "NONE" : 0;
                    object.deviceId = "";
                    object.appVer = "";
                }
                if (message.echoData != null && message.hasOwnProperty("echoData"))
                    object.echoData = message.echoData;
                if (message.clientId != null && message.hasOwnProperty("clientId"))
                    object.clientId = options.enums === String ? $root.chat.Kuaishou.ClientId[message.clientId] === undefined ? message.clientId : $root.chat.Kuaishou.ClientId[message.clientId] : message.clientId;
                if (message.deviceId != null && message.hasOwnProperty("deviceId"))
                    object.deviceId = message.deviceId;
                if (message.appVer != null && message.hasOwnProperty("appVer"))
                    object.appVer = message.appVer;
                return object;
            };

            /**
             * Converts this CSPing to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.CSPing
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            CSPing.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for CSPing
             * @function getTypeUrl
             * @memberof chat.Kuaishou.CSPing
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            CSPing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.CSPing";
            };

            return CSPing;
        })();

        Kuaishou.SCPingAck = (function() {

            /**
             * Properties of a SCPingAck.
             * @memberof chat.Kuaishou
             * @interface ISCPingAck
             * @property {string|null} [echoData] SCPingAck echoData
             */

            /**
             * Constructs a new SCPingAck.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCPingAck.
             * @implements ISCPingAck
             * @constructor
             * @param {chat.Kuaishou.ISCPingAck=} [properties] Properties to set
             */
            function SCPingAck(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCPingAck echoData.
             * @member {string} echoData
             * @memberof chat.Kuaishou.SCPingAck
             * @instance
             */
            SCPingAck.prototype.echoData = "";

            /**
             * Creates a new SCPingAck instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCPingAck
             * @static
             * @param {chat.Kuaishou.ISCPingAck=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCPingAck} SCPingAck instance
             */
            SCPingAck.create = function create(properties) {
                return new SCPingAck(properties);
            };

            /**
             * Encodes the specified SCPingAck message. Does not implicitly {@link chat.Kuaishou.SCPingAck.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCPingAck
             * @static
             * @param {chat.Kuaishou.ISCPingAck} message SCPingAck message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCPingAck.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.echoData != null && Object.hasOwnProperty.call(message, "echoData"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.echoData);
                return writer;
            };

            /**
             * Encodes the specified SCPingAck message, length delimited. Does not implicitly {@link chat.Kuaishou.SCPingAck.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCPingAck
             * @static
             * @param {chat.Kuaishou.ISCPingAck} message SCPingAck message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCPingAck.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCPingAck message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCPingAck
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCPingAck} SCPingAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCPingAck.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCPingAck();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.echoData = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCPingAck message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCPingAck
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCPingAck} SCPingAck
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCPingAck.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCPingAck message.
             * @function verify
             * @memberof chat.Kuaishou.SCPingAck
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCPingAck.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.echoData != null && message.hasOwnProperty("echoData"))
                    if (!$util.isString(message.echoData))
                        return "echoData: string expected";
                return null;
            };

            /**
             * Creates a SCPingAck message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCPingAck
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCPingAck} SCPingAck
             */
            SCPingAck.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCPingAck)
                    return object;
                let message = new $root.chat.Kuaishou.SCPingAck();
                if (object.echoData != null)
                    message.echoData = String(object.echoData);
                return message;
            };

            /**
             * Creates a plain object from a SCPingAck message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCPingAck
             * @static
             * @param {chat.Kuaishou.SCPingAck} message SCPingAck
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCPingAck.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.echoData = "";
                if (message.echoData != null && message.hasOwnProperty("echoData"))
                    object.echoData = message.echoData;
                return object;
            };

            /**
             * Converts this SCPingAck to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCPingAck
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCPingAck.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCPingAck
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCPingAck
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCPingAck.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCPingAck";
            };

            return SCPingAck;
        })();

        Kuaishou.SCEcho = (function() {

            /**
             * Properties of a SCEcho.
             * @memberof chat.Kuaishou
             * @interface ISCEcho
             * @property {string|null} [content] SCEcho content
             */

            /**
             * Constructs a new SCEcho.
             * @memberof chat.Kuaishou
             * @classdesc Represents a SCEcho.
             * @implements ISCEcho
             * @constructor
             * @param {chat.Kuaishou.ISCEcho=} [properties] Properties to set
             */
            function SCEcho(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * SCEcho content.
             * @member {string} content
             * @memberof chat.Kuaishou.SCEcho
             * @instance
             */
            SCEcho.prototype.content = "";

            /**
             * Creates a new SCEcho instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.SCEcho
             * @static
             * @param {chat.Kuaishou.ISCEcho=} [properties] Properties to set
             * @returns {chat.Kuaishou.SCEcho} SCEcho instance
             */
            SCEcho.create = function create(properties) {
                return new SCEcho(properties);
            };

            /**
             * Encodes the specified SCEcho message. Does not implicitly {@link chat.Kuaishou.SCEcho.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.SCEcho
             * @static
             * @param {chat.Kuaishou.ISCEcho} message SCEcho message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCEcho.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.content != null && Object.hasOwnProperty.call(message, "content"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
                return writer;
            };

            /**
             * Encodes the specified SCEcho message, length delimited. Does not implicitly {@link chat.Kuaishou.SCEcho.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.SCEcho
             * @static
             * @param {chat.Kuaishou.ISCEcho} message SCEcho message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SCEcho.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a SCEcho message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.SCEcho
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.SCEcho} SCEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCEcho.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.SCEcho();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.content = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a SCEcho message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.SCEcho
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.SCEcho} SCEcho
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SCEcho.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SCEcho message.
             * @function verify
             * @memberof chat.Kuaishou.SCEcho
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SCEcho.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.content != null && message.hasOwnProperty("content"))
                    if (!$util.isString(message.content))
                        return "content: string expected";
                return null;
            };

            /**
             * Creates a SCEcho message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.SCEcho
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.SCEcho} SCEcho
             */
            SCEcho.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.SCEcho)
                    return object;
                let message = new $root.chat.Kuaishou.SCEcho();
                if (object.content != null)
                    message.content = String(object.content);
                return message;
            };

            /**
             * Creates a plain object from a SCEcho message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.SCEcho
             * @static
             * @param {chat.Kuaishou.SCEcho} message SCEcho
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SCEcho.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults)
                    object.content = "";
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                return object;
            };

            /**
             * Converts this SCEcho to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.SCEcho
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SCEcho.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for SCEcho
             * @function getTypeUrl
             * @memberof chat.Kuaishou.SCEcho
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            SCEcho.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.SCEcho";
            };

            return SCEcho;
        })();

        Kuaishou.PSHostInfo = (function() {

            /**
             * Properties of a PSHostInfo.
             * @memberof chat.Kuaishou
             * @interface IPSHostInfo
             * @property {string|null} [ip] PSHostInfo ip
             * @property {number|null} [port] PSHostInfo port
             */

            /**
             * Constructs a new PSHostInfo.
             * @memberof chat.Kuaishou
             * @classdesc Represents a PSHostInfo.
             * @implements IPSHostInfo
             * @constructor
             * @param {chat.Kuaishou.IPSHostInfo=} [properties] Properties to set
             */
            function PSHostInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PSHostInfo ip.
             * @member {string} ip
             * @memberof chat.Kuaishou.PSHostInfo
             * @instance
             */
            PSHostInfo.prototype.ip = "";

            /**
             * PSHostInfo port.
             * @member {number} port
             * @memberof chat.Kuaishou.PSHostInfo
             * @instance
             */
            PSHostInfo.prototype.port = 0;

            /**
             * Creates a new PSHostInfo instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.PSHostInfo
             * @static
             * @param {chat.Kuaishou.IPSHostInfo=} [properties] Properties to set
             * @returns {chat.Kuaishou.PSHostInfo} PSHostInfo instance
             */
            PSHostInfo.create = function create(properties) {
                return new PSHostInfo(properties);
            };

            /**
             * Encodes the specified PSHostInfo message. Does not implicitly {@link chat.Kuaishou.PSHostInfo.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.PSHostInfo
             * @static
             * @param {chat.Kuaishou.IPSHostInfo} message PSHostInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PSHostInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
                if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.port);
                return writer;
            };

            /**
             * Encodes the specified PSHostInfo message, length delimited. Does not implicitly {@link chat.Kuaishou.PSHostInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.PSHostInfo
             * @static
             * @param {chat.Kuaishou.IPSHostInfo} message PSHostInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PSHostInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PSHostInfo message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.PSHostInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.PSHostInfo} PSHostInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PSHostInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.PSHostInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.ip = reader.string();
                            break;
                        }
                    case 2: {
                            message.port = reader.int32();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PSHostInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.PSHostInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.PSHostInfo} PSHostInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PSHostInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PSHostInfo message.
             * @function verify
             * @memberof chat.Kuaishou.PSHostInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PSHostInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.ip != null && message.hasOwnProperty("ip"))
                    if (!$util.isString(message.ip))
                        return "ip: string expected";
                if (message.port != null && message.hasOwnProperty("port"))
                    if (!$util.isInteger(message.port))
                        return "port: integer expected";
                return null;
            };

            /**
             * Creates a PSHostInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.PSHostInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.PSHostInfo} PSHostInfo
             */
            PSHostInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.PSHostInfo)
                    return object;
                let message = new $root.chat.Kuaishou.PSHostInfo();
                if (object.ip != null)
                    message.ip = String(object.ip);
                if (object.port != null)
                    message.port = object.port | 0;
                return message;
            };

            /**
             * Creates a plain object from a PSHostInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.PSHostInfo
             * @static
             * @param {chat.Kuaishou.PSHostInfo} message PSHostInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PSHostInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.ip = "";
                    object.port = 0;
                }
                if (message.ip != null && message.hasOwnProperty("ip"))
                    object.ip = message.ip;
                if (message.port != null && message.hasOwnProperty("port"))
                    object.port = message.port;
                return object;
            };

            /**
             * Converts this PSHostInfo to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.PSHostInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PSHostInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PSHostInfo
             * @function getTypeUrl
             * @memberof chat.Kuaishou.PSHostInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PSHostInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.PSHostInfo";
            };

            return PSHostInfo;
        })();

        Kuaishou.PicUrl = (function() {

            /**
             * Properties of a PicUrl.
             * @memberof chat.Kuaishou
             * @interface IPicUrl
             * @property {string|null} [cdn] PicUrl cdn
             * @property {string|null} [url] PicUrl url
             * @property {string|null} [urlPattern] PicUrl urlPattern
             * @property {string|null} [ip] PicUrl ip
             */

            /**
             * Constructs a new PicUrl.
             * @memberof chat.Kuaishou
             * @classdesc Represents a PicUrl.
             * @implements IPicUrl
             * @constructor
             * @param {chat.Kuaishou.IPicUrl=} [properties] Properties to set
             */
            function PicUrl(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PicUrl cdn.
             * @member {string} cdn
             * @memberof chat.Kuaishou.PicUrl
             * @instance
             */
            PicUrl.prototype.cdn = "";

            /**
             * PicUrl url.
             * @member {string} url
             * @memberof chat.Kuaishou.PicUrl
             * @instance
             */
            PicUrl.prototype.url = "";

            /**
             * PicUrl urlPattern.
             * @member {string} urlPattern
             * @memberof chat.Kuaishou.PicUrl
             * @instance
             */
            PicUrl.prototype.urlPattern = "";

            /**
             * PicUrl ip.
             * @member {string} ip
             * @memberof chat.Kuaishou.PicUrl
             * @instance
             */
            PicUrl.prototype.ip = "";

            /**
             * Creates a new PicUrl instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.PicUrl
             * @static
             * @param {chat.Kuaishou.IPicUrl=} [properties] Properties to set
             * @returns {chat.Kuaishou.PicUrl} PicUrl instance
             */
            PicUrl.create = function create(properties) {
                return new PicUrl(properties);
            };

            /**
             * Encodes the specified PicUrl message. Does not implicitly {@link chat.Kuaishou.PicUrl.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.PicUrl
             * @static
             * @param {chat.Kuaishou.IPicUrl} message PicUrl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PicUrl.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.cdn != null && Object.hasOwnProperty.call(message, "cdn"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.cdn);
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
                if (message.urlPattern != null && Object.hasOwnProperty.call(message, "urlPattern"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.urlPattern);
                if (message.ip != null && Object.hasOwnProperty.call(message, "ip"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.ip);
                return writer;
            };

            /**
             * Encodes the specified PicUrl message, length delimited. Does not implicitly {@link chat.Kuaishou.PicUrl.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.PicUrl
             * @static
             * @param {chat.Kuaishou.IPicUrl} message PicUrl message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PicUrl.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PicUrl message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.PicUrl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.PicUrl} PicUrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PicUrl.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.PicUrl();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.cdn = reader.string();
                            break;
                        }
                    case 2: {
                            message.url = reader.string();
                            break;
                        }
                    case 3: {
                            message.urlPattern = reader.string();
                            break;
                        }
                    case 4: {
                            message.ip = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a PicUrl message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.PicUrl
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.PicUrl} PicUrl
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PicUrl.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PicUrl message.
             * @function verify
             * @memberof chat.Kuaishou.PicUrl
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PicUrl.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.cdn != null && message.hasOwnProperty("cdn"))
                    if (!$util.isString(message.cdn))
                        return "cdn: string expected";
                if (message.url != null && message.hasOwnProperty("url"))
                    if (!$util.isString(message.url))
                        return "url: string expected";
                if (message.urlPattern != null && message.hasOwnProperty("urlPattern"))
                    if (!$util.isString(message.urlPattern))
                        return "urlPattern: string expected";
                if (message.ip != null && message.hasOwnProperty("ip"))
                    if (!$util.isString(message.ip))
                        return "ip: string expected";
                return null;
            };

            /**
             * Creates a PicUrl message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.PicUrl
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.PicUrl} PicUrl
             */
            PicUrl.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.PicUrl)
                    return object;
                let message = new $root.chat.Kuaishou.PicUrl();
                if (object.cdn != null)
                    message.cdn = String(object.cdn);
                if (object.url != null)
                    message.url = String(object.url);
                if (object.urlPattern != null)
                    message.urlPattern = String(object.urlPattern);
                if (object.ip != null)
                    message.ip = String(object.ip);
                return message;
            };

            /**
             * Creates a plain object from a PicUrl message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.PicUrl
             * @static
             * @param {chat.Kuaishou.PicUrl} message PicUrl
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PicUrl.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.cdn = "";
                    object.url = "";
                    object.urlPattern = "";
                    object.ip = "";
                }
                if (message.cdn != null && message.hasOwnProperty("cdn"))
                    object.cdn = message.cdn;
                if (message.url != null && message.hasOwnProperty("url"))
                    object.url = message.url;
                if (message.urlPattern != null && message.hasOwnProperty("urlPattern"))
                    object.urlPattern = message.urlPattern;
                if (message.ip != null && message.hasOwnProperty("ip"))
                    object.ip = message.ip;
                return object;
            };

            /**
             * Converts this PicUrl to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.PicUrl
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PicUrl.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for PicUrl
             * @function getTypeUrl
             * @memberof chat.Kuaishou.PicUrl
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            PicUrl.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.PicUrl";
            };

            return PicUrl;
        })();

        Kuaishou.UserInfo = (function() {

            /**
             * Properties of a UserInfo.
             * @memberof chat.Kuaishou
             * @interface IUserInfo
             * @property {number|Long|null} [userId] UserInfo userId
             * @property {string|null} [userName] UserInfo userName
             * @property {string|null} [userGender] UserInfo userGender
             * @property {string|null} [userText] UserInfo userText
             * @property {chat.Kuaishou.IPicUrl|null} [headUrls] UserInfo headUrls
             * @property {boolean|null} [verified] UserInfo verified
             * @property {string|null} [sUserId] UserInfo sUserId
             * @property {chat.Kuaishou.IPicUrl|null} [httpsHeadUrls] UserInfo httpsHeadUrls
             * @property {string|null} [kwaiId] UserInfo kwaiId
             */

            /**
             * Constructs a new UserInfo.
             * @memberof chat.Kuaishou
             * @classdesc Represents a UserInfo.
             * @implements IUserInfo
             * @constructor
             * @param {chat.Kuaishou.IUserInfo=} [properties] Properties to set
             */
            function UserInfo(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserInfo userId.
             * @member {number|Long} userId
             * @memberof chat.Kuaishou.UserInfo
             * @instance
             */
            UserInfo.prototype.userId = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

            /**
             * UserInfo userName.
             * @member {string} userName
             * @memberof chat.Kuaishou.UserInfo
             * @instance
             */
            UserInfo.prototype.userName = "";

            /**
             * UserInfo userGender.
             * @member {string} userGender
             * @memberof chat.Kuaishou.UserInfo
             * @instance
             */
            UserInfo.prototype.userGender = "";

            /**
             * UserInfo userText.
             * @member {string} userText
             * @memberof chat.Kuaishou.UserInfo
             * @instance
             */
            UserInfo.prototype.userText = "";

            /**
             * UserInfo headUrls.
             * @member {chat.Kuaishou.IPicUrl|null|undefined} headUrls
             * @memberof chat.Kuaishou.UserInfo
             * @instance
             */
            UserInfo.prototype.headUrls = null;

            /**
             * UserInfo verified.
             * @member {boolean} verified
             * @memberof chat.Kuaishou.UserInfo
             * @instance
             */
            UserInfo.prototype.verified = false;

            /**
             * UserInfo sUserId.
             * @member {string} sUserId
             * @memberof chat.Kuaishou.UserInfo
             * @instance
             */
            UserInfo.prototype.sUserId = "";

            /**
             * UserInfo httpsHeadUrls.
             * @member {chat.Kuaishou.IPicUrl|null|undefined} httpsHeadUrls
             * @memberof chat.Kuaishou.UserInfo
             * @instance
             */
            UserInfo.prototype.httpsHeadUrls = null;

            /**
             * UserInfo kwaiId.
             * @member {string} kwaiId
             * @memberof chat.Kuaishou.UserInfo
             * @instance
             */
            UserInfo.prototype.kwaiId = "";

            /**
             * Creates a new UserInfo instance using the specified properties.
             * @function create
             * @memberof chat.Kuaishou.UserInfo
             * @static
             * @param {chat.Kuaishou.IUserInfo=} [properties] Properties to set
             * @returns {chat.Kuaishou.UserInfo} UserInfo instance
             */
            UserInfo.create = function create(properties) {
                return new UserInfo(properties);
            };

            /**
             * Encodes the specified UserInfo message. Does not implicitly {@link chat.Kuaishou.UserInfo.verify|verify} messages.
             * @function encode
             * @memberof chat.Kuaishou.UserInfo
             * @static
             * @param {chat.Kuaishou.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.userId);
                if (message.userName != null && Object.hasOwnProperty.call(message, "userName"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
                if (message.userGender != null && Object.hasOwnProperty.call(message, "userGender"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.userGender);
                if (message.userText != null && Object.hasOwnProperty.call(message, "userText"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.userText);
                if (message.headUrls != null && Object.hasOwnProperty.call(message, "headUrls"))
                    $root.chat.Kuaishou.PicUrl.encode(message.headUrls, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                if (message.verified != null && Object.hasOwnProperty.call(message, "verified"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.verified);
                if (message.sUserId != null && Object.hasOwnProperty.call(message, "sUserId"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.sUserId);
                if (message.httpsHeadUrls != null && Object.hasOwnProperty.call(message, "httpsHeadUrls"))
                    $root.chat.Kuaishou.PicUrl.encode(message.httpsHeadUrls, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.kwaiId != null && Object.hasOwnProperty.call(message, "kwaiId"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.kwaiId);
                return writer;
            };

            /**
             * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link chat.Kuaishou.UserInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof chat.Kuaishou.UserInfo
             * @static
             * @param {chat.Kuaishou.IUserInfo} message UserInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer.
             * @function decode
             * @memberof chat.Kuaishou.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {chat.Kuaishou.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.chat.Kuaishou.UserInfo();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1: {
                            message.userId = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.userName = reader.string();
                            break;
                        }
                    case 3: {
                            message.userGender = reader.string();
                            break;
                        }
                    case 4: {
                            message.userText = reader.string();
                            break;
                        }
                    case 5: {
                            message.headUrls = $root.chat.Kuaishou.PicUrl.decode(reader, reader.uint32());
                            break;
                        }
                    case 6: {
                            message.verified = reader.bool();
                            break;
                        }
                    case 7: {
                            message.sUserId = reader.string();
                            break;
                        }
                    case 8: {
                            message.httpsHeadUrls = $root.chat.Kuaishou.PicUrl.decode(reader, reader.uint32());
                            break;
                        }
                    case 9: {
                            message.kwaiId = reader.string();
                            break;
                        }
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a UserInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof chat.Kuaishou.UserInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {chat.Kuaishou.UserInfo} UserInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserInfo message.
             * @function verify
             * @memberof chat.Kuaishou.UserInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (!$util.isInteger(message.userId) && !(message.userId && $util.isInteger(message.userId.low) && $util.isInteger(message.userId.high)))
                        return "userId: integer|Long expected";
                if (message.userName != null && message.hasOwnProperty("userName"))
                    if (!$util.isString(message.userName))
                        return "userName: string expected";
                if (message.userGender != null && message.hasOwnProperty("userGender"))
                    if (!$util.isString(message.userGender))
                        return "userGender: string expected";
                if (message.userText != null && message.hasOwnProperty("userText"))
                    if (!$util.isString(message.userText))
                        return "userText: string expected";
                if (message.headUrls != null && message.hasOwnProperty("headUrls")) {
                    let error = $root.chat.Kuaishou.PicUrl.verify(message.headUrls);
                    if (error)
                        return "headUrls." + error;
                }
                if (message.verified != null && message.hasOwnProperty("verified"))
                    if (typeof message.verified !== "boolean")
                        return "verified: boolean expected";
                if (message.sUserId != null && message.hasOwnProperty("sUserId"))
                    if (!$util.isString(message.sUserId))
                        return "sUserId: string expected";
                if (message.httpsHeadUrls != null && message.hasOwnProperty("httpsHeadUrls")) {
                    let error = $root.chat.Kuaishou.PicUrl.verify(message.httpsHeadUrls);
                    if (error)
                        return "httpsHeadUrls." + error;
                }
                if (message.kwaiId != null && message.hasOwnProperty("kwaiId"))
                    if (!$util.isString(message.kwaiId))
                        return "kwaiId: string expected";
                return null;
            };

            /**
             * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof chat.Kuaishou.UserInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {chat.Kuaishou.UserInfo} UserInfo
             */
            UserInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.chat.Kuaishou.UserInfo)
                    return object;
                let message = new $root.chat.Kuaishou.UserInfo();
                if (object.userId != null)
                    if ($util.Long)
                        (message.userId = $util.Long.fromValue(object.userId)).unsigned = true;
                    else if (typeof object.userId === "string")
                        message.userId = parseInt(object.userId, 10);
                    else if (typeof object.userId === "number")
                        message.userId = object.userId;
                    else if (typeof object.userId === "object")
                        message.userId = new $util.LongBits(object.userId.low >>> 0, object.userId.high >>> 0).toNumber(true);
                if (object.userName != null)
                    message.userName = String(object.userName);
                if (object.userGender != null)
                    message.userGender = String(object.userGender);
                if (object.userText != null)
                    message.userText = String(object.userText);
                if (object.headUrls != null) {
                    if (typeof object.headUrls !== "object")
                        throw TypeError(".chat.Kuaishou.UserInfo.headUrls: object expected");
                    message.headUrls = $root.chat.Kuaishou.PicUrl.fromObject(object.headUrls);
                }
                if (object.verified != null)
                    message.verified = Boolean(object.verified);
                if (object.sUserId != null)
                    message.sUserId = String(object.sUserId);
                if (object.httpsHeadUrls != null) {
                    if (typeof object.httpsHeadUrls !== "object")
                        throw TypeError(".chat.Kuaishou.UserInfo.httpsHeadUrls: object expected");
                    message.httpsHeadUrls = $root.chat.Kuaishou.PicUrl.fromObject(object.httpsHeadUrls);
                }
                if (object.kwaiId != null)
                    message.kwaiId = String(object.kwaiId);
                return message;
            };

            /**
             * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof chat.Kuaishou.UserInfo
             * @static
             * @param {chat.Kuaishou.UserInfo} message UserInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, true);
                        object.userId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.userId = options.longs === String ? "0" : 0;
                    object.userName = "";
                    object.userGender = "";
                    object.userText = "";
                    object.headUrls = null;
                    object.verified = false;
                    object.sUserId = "";
                    object.httpsHeadUrls = null;
                    object.kwaiId = "";
                }
                if (message.userId != null && message.hasOwnProperty("userId"))
                    if (typeof message.userId === "number")
                        object.userId = options.longs === String ? String(message.userId) : message.userId;
                    else
                        object.userId = options.longs === String ? $util.Long.prototype.toString.call(message.userId) : options.longs === Number ? new $util.LongBits(message.userId.low >>> 0, message.userId.high >>> 0).toNumber(true) : message.userId;
                if (message.userName != null && message.hasOwnProperty("userName"))
                    object.userName = message.userName;
                if (message.userGender != null && message.hasOwnProperty("userGender"))
                    object.userGender = message.userGender;
                if (message.userText != null && message.hasOwnProperty("userText"))
                    object.userText = message.userText;
                if (message.headUrls != null && message.hasOwnProperty("headUrls"))
                    object.headUrls = $root.chat.Kuaishou.PicUrl.toObject(message.headUrls, options);
                if (message.verified != null && message.hasOwnProperty("verified"))
                    object.verified = message.verified;
                if (message.sUserId != null && message.hasOwnProperty("sUserId"))
                    object.sUserId = message.sUserId;
                if (message.httpsHeadUrls != null && message.hasOwnProperty("httpsHeadUrls"))
                    object.httpsHeadUrls = $root.chat.Kuaishou.PicUrl.toObject(message.httpsHeadUrls, options);
                if (message.kwaiId != null && message.hasOwnProperty("kwaiId"))
                    object.kwaiId = message.kwaiId;
                return object;
            };

            /**
             * Converts this UserInfo to JSON.
             * @function toJSON
             * @memberof chat.Kuaishou.UserInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserInfo
             * @function getTypeUrl
             * @memberof chat.Kuaishou.UserInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/chat.Kuaishou.UserInfo";
            };

            return UserInfo;
        })();

        /**
         * ClientId enum.
         * @name chat.Kuaishou.ClientId
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} IPHONE=1 IPHONE value
         * @property {number} ANDROID=2 ANDROID value
         * @property {number} WEB=3 WEB value
         * @property {number} PC=6 PC value
         * @property {number} IPHONE_LIVE_MATE=8 IPHONE_LIVE_MATE value
         * @property {number} ANDROID_LIVE_MATE=9 ANDROID_LIVE_MATE value
         */
        Kuaishou.ClientId = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "IPHONE"] = 1;
            values[valuesById[2] = "ANDROID"] = 2;
            values[valuesById[3] = "WEB"] = 3;
            values[valuesById[6] = "PC"] = 6;
            values[valuesById[8] = "IPHONE_LIVE_MATE"] = 8;
            values[valuesById[9] = "ANDROID_LIVE_MATE"] = 9;
            return values;
        })();

        return Kuaishou;
    })();

    return chat;
})();

export { $root as default };
