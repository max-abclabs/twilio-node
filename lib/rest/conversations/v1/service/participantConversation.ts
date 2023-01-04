/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Conversations
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type ServiceParticipantConversationState = "inactive" | "active" | "closed";

/**
 * Options to pass to each
 */
export interface ParticipantConversationListInstanceEachOptions {
  /** A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters. */
  identity?: string;
  /** A unique string identifier for the conversation participant who\&#39;s not a Conversation User. This parameter could be found in messaging_binding.address field of Participant resource. It should be url-encoded. */
  address?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: ParticipantConversationInstance,
    done: (err?: Error) => void
  ) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ParticipantConversationListInstanceOptions {
  /** A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters. */
  identity?: string;
  /** A unique string identifier for the conversation participant who\&#39;s not a Conversation User. This parameter could be found in messaging_binding.address field of Participant resource. It should be url-encoded. */
  address?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ParticipantConversationListInstancePageOptions {
  /** A unique string identifier for the conversation participant as [Conversation User](https://www.twilio.com/docs/conversations/api/user-resource). This parameter is non-null if (and only if) the participant is using the Conversations SDK to communicate. Limited to 256 characters. */
  identity?: string;
  /** A unique string identifier for the conversation participant who\&#39;s not a Conversation User. This parameter could be found in messaging_binding.address field of Participant resource. It should be url-encoded. */
  address?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ParticipantConversationListInstance {
  /**
   * Streams ParticipantConversationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: ParticipantConversationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams ParticipantConversationInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantConversationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: ParticipantConversationListInstanceEachOptions,
    callback?: (
      item: ParticipantConversationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of ParticipantConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: ParticipantConversationPage) => any
  ): Promise<ParticipantConversationPage>;
  /**
   * Retrieve a single target page of ParticipantConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl?: string,
    callback?: (error: Error | null, items: ParticipantConversationPage) => any
  ): Promise<ParticipantConversationPage>;
  getPage(params?: any, callback?: any): Promise<ParticipantConversationPage>;
  /**
   * Lists ParticipantConversationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: ParticipantConversationInstance[]
    ) => any
  ): Promise<ParticipantConversationInstance[]>;
  /**
   * Lists ParticipantConversationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantConversationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: ParticipantConversationListInstanceOptions,
    callback?: (
      error: Error | null,
      items: ParticipantConversationInstance[]
    ) => any
  ): Promise<ParticipantConversationInstance[]>;
  list(
    params?: any,
    callback?: any
  ): Promise<ParticipantConversationInstance[]>;
  /**
   * Retrieve a single page of ParticipantConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ParticipantConversationPage) => any
  ): Promise<ParticipantConversationPage>;
  /**
   * Retrieve a single page of ParticipantConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantConversationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: ParticipantConversationListInstancePageOptions,
    callback?: (error: Error | null, items: ParticipantConversationPage) => any
  ): Promise<ParticipantConversationPage>;
  page(params?: any, callback?: any): Promise<ParticipantConversationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ParticipantConversationSolution {
  chatServiceSid?: string;
}

interface ParticipantConversationListInstanceImpl
  extends ParticipantConversationListInstance {}
class ParticipantConversationListInstanceImpl
  implements ParticipantConversationListInstance
{
  _version?: V1;
  _solution?: ParticipantConversationSolution;
  _uri?: string;
}

export function ParticipantConversationListInstance(
  version: V1,
  chatServiceSid: string
): ParticipantConversationListInstance {
  if (!isValidPathParam(chatServiceSid)) {
    throw new Error("Parameter 'chatServiceSid' is not valid.");
  }

  const instance = {} as ParticipantConversationListInstanceImpl;

  instance._version = version;
  instance._solution = { chatServiceSid };
  instance._uri = `/Services/${chatServiceSid}/ParticipantConversations`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<ParticipantConversationPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["identity"] !== undefined) data["Identity"] = params["identity"];
    if (params["address"] !== undefined) data["Address"] = params["address"];
    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: this._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ParticipantConversationPage(
          operationVersion,
          payload,
          this._solution
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl?: any,
    callback?: any
  ): Promise<ParticipantConversationPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new ParticipantConversationPage(this._version, payload, this._solution)
    );
    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}

interface ParticipantConversationPayload extends TwilioResponsePayload {
  conversations: ParticipantConversationResource[];
}

interface ParticipantConversationResource {
  account_sid?: string | null;
  chat_service_sid?: string | null;
  participant_sid?: string | null;
  participant_user_sid?: string | null;
  participant_identity?: string | null;
  participant_messaging_binding?: any | null;
  conversation_sid?: string | null;
  conversation_unique_name?: string | null;
  conversation_friendly_name?: string | null;
  conversation_attributes?: string | null;
  conversation_date_created?: Date | null;
  conversation_date_updated?: Date | null;
  conversation_created_by?: string | null;
  conversation_state?: ServiceParticipantConversationState;
  conversation_timers?: any | null;
  links?: object | null;
}

export class ParticipantConversationInstance {
  constructor(
    protected _version: V1,
    payload: ParticipantConversationResource,
    chatServiceSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.participantSid = payload.participant_sid;
    this.participantUserSid = payload.participant_user_sid;
    this.participantIdentity = payload.participant_identity;
    this.participantMessagingBinding = payload.participant_messaging_binding;
    this.conversationSid = payload.conversation_sid;
    this.conversationUniqueName = payload.conversation_unique_name;
    this.conversationFriendlyName = payload.conversation_friendly_name;
    this.conversationAttributes = payload.conversation_attributes;
    this.conversationDateCreated = deserialize.iso8601DateTime(
      payload.conversation_date_created
    );
    this.conversationDateUpdated = deserialize.iso8601DateTime(
      payload.conversation_date_updated
    );
    this.conversationCreatedBy = payload.conversation_created_by;
    this.conversationState = payload.conversation_state;
    this.conversationTimers = payload.conversation_timers;
    this.links = payload.links;
  }

  /**
   * The unique ID of the Account responsible for this conversation.
   */
  accountSid?: string | null;
  /**
   * The unique ID of the Conversation Service this conversation belongs to.
   */
  chatServiceSid?: string | null;
  /**
   * The unique ID of the Participant.
   */
  participantSid?: string | null;
  /**
   * The unique ID for the conversation participant as Conversation User.
   */
  participantUserSid?: string | null;
  /**
   * A unique string identifier for the conversation participant as Conversation User.
   */
  participantIdentity?: string | null;
  /**
   * Information about how this participant exchanges messages with the conversation.
   */
  participantMessagingBinding?: any | null;
  /**
   * The unique ID of the Conversation this Participant belongs to.
   */
  conversationSid?: string | null;
  /**
   * An application-defined string that uniquely identifies the Conversation resource.
   */
  conversationUniqueName?: string | null;
  /**
   * The human-readable name of this conversation.
   */
  conversationFriendlyName?: string | null;
  /**
   * An optional string metadata field you can use to store any data you wish.
   */
  conversationAttributes?: string | null;
  /**
   * The date that this conversation was created.
   */
  conversationDateCreated?: Date | null;
  /**
   * The date that this conversation was last updated.
   */
  conversationDateUpdated?: Date | null;
  /**
   * Creator of this conversation.
   */
  conversationCreatedBy?: string | null;
  conversationState?: ServiceParticipantConversationState;
  /**
   * Timer date values for this conversation.
   */
  conversationTimers?: any | null;
  /**
   * Absolute URLs to access the participant and conversation of this Participant Conversation.
   */
  links?: object | null;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      chatServiceSid: this.chatServiceSid,
      participantSid: this.participantSid,
      participantUserSid: this.participantUserSid,
      participantIdentity: this.participantIdentity,
      participantMessagingBinding: this.participantMessagingBinding,
      conversationSid: this.conversationSid,
      conversationUniqueName: this.conversationUniqueName,
      conversationFriendlyName: this.conversationFriendlyName,
      conversationAttributes: this.conversationAttributes,
      conversationDateCreated: this.conversationDateCreated,
      conversationDateUpdated: this.conversationDateUpdated,
      conversationCreatedBy: this.conversationCreatedBy,
      conversationState: this.conversationState,
      conversationTimers: this.conversationTimers,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class ParticipantConversationPage extends Page<
  V1,
  ParticipantConversationPayload,
  ParticipantConversationResource,
  ParticipantConversationInstance
> {
  /**
   * Initialize the ParticipantConversationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ParticipantConversationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ParticipantConversationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: ParticipantConversationResource
  ): ParticipantConversationInstance {
    return new ParticipantConversationInstance(
      this._version,
      payload,
      this._solution.chatServiceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
