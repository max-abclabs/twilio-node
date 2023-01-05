/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Flex
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to create a WebChannelsInstance
 */
export interface WebChannelsListInstanceCreateOptions {
  /** The SID of the Conversations Address. See [Address Configuration Resource](https://www.twilio.com/docs/conversations/api/address-configuration-resource) for configuration details. When a conversation is created on the Flex backend, the callback URL will be set to the corresponding Studio Flow SID or webhook URL in your address configuration. */
  addressSid: string;
  /** The Conversation\\\'s friendly name. See the [Conversation resource](https://www.twilio.com/docs/conversations/api/conversation-resource) for an example. */
  chatFriendlyName?: string;
  /** The Conversation participant\\\'s friendly name. See the [Conversation Participant Resource](https://www.twilio.com/docs/conversations/api/conversation-participant-resource) for an example. */
  customerFriendlyName?: string;
  /** The pre-engagement data. */
  preEngagementData?: string;
}

export interface WebChannelsSolution {}

export interface WebChannelsListInstance {
  _version: V2;
  _solution: WebChannelsSolution;
  _uri: string;

  /**
   * Create a WebChannelsInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed WebChannelsInstance
   */
  create(
    params: WebChannelsListInstanceCreateOptions,
    callback?: (error: Error | null, item?: WebChannelsInstance) => any
  ): Promise<WebChannelsInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function WebChannelsListInstance(version: V2): WebChannelsListInstance {
  const instance = {} as WebChannelsListInstance;

  instance._version = version;
  instance._solution = {};
  instance._uri = `/WebChats`;

  instance.create = function create(
    params: WebChannelsListInstanceCreateOptions,
    callback?: (error: Error | null, items: WebChannelsInstance) => any
  ): Promise<WebChannelsInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["addressSid"] === null || params["addressSid"] === undefined) {
      throw new Error("Required parameter \"params['addressSid']\" missing.");
    }

    let data: any = {};

    data["AddressSid"] = params["addressSid"];
    if (params["chatFriendlyName"] !== undefined)
      data["ChatFriendlyName"] = params["chatFriendlyName"];
    if (params["customerFriendlyName"] !== undefined)
      data["CustomerFriendlyName"] = params["customerFriendlyName"];
    if (params["preEngagementData"] !== undefined)
      data["PreEngagementData"] = params["preEngagementData"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new WebChannelsInstance(operationVersion, payload)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

interface WebChannelsPayload extends WebChannelsResource {}

interface WebChannelsResource {
  conversation_sid: string;
  identity: string;
}

export class WebChannelsInstance {
  constructor(protected _version: V2, payload: WebChannelsResource) {
    this.conversationSid = payload.conversation_sid;
    this.identity = payload.identity;
  }

  /**
   * The unique string representing the Conversation resource created
   */
  conversationSid: string;
  /**
   * The unique string representing the User created
   */
  identity: string;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      conversationSid: this.conversationSid,
      identity: this.identity,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
