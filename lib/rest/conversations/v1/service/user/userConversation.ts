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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V1 from "../../../V1";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

type ServiceUserConversationNotificationLevel = "default" | "muted";

type ServiceUserConversationState = "inactive" | "active" | "closed";

/**
 * Options to pass to update a UserConversationInstance
 */
export interface UserConversationContextUpdateOptions {
  /**  */
  notificationLevel?: ServiceUserConversationNotificationLevel;
  /** The date of the last message read in conversation by the user, given in ISO 8601 format. */
  lastReadTimestamp?: Date;
  /** The index of the last Message in the Conversation that the Participant has read. */
  lastReadMessageIndex?: number;
}
/**
 * Options to pass to each
 */
export interface UserConversationListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: UserConversationInstance,
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
export interface UserConversationListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface UserConversationListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface UserConversationContext {
  /**
   * Remove a UserConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a UserConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserConversationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserConversationInstance) => any
  ): Promise<UserConversationInstance>;

  /**
   * Update a UserConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserConversationInstance
   */
  update(
    callback?: (error: Error | null, item?: UserConversationInstance) => any
  ): Promise<UserConversationInstance>;
  /**
   * Update a UserConversationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserConversationInstance
   */
  update(
    params: UserConversationContextUpdateOptions,
    callback?: (error: Error | null, item?: UserConversationInstance) => any
  ): Promise<UserConversationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserConversationContextSolution {
  chatServiceSid: string;
  userSid: string;
  conversationSid: string;
}

export class UserConversationContextImpl implements UserConversationContext {
  protected _solution: UserConversationContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V1,
    chatServiceSid: string,
    userSid: string,
    conversationSid: string
  ) {
    if (!isValidPathParam(chatServiceSid)) {
      throw new Error("Parameter 'chatServiceSid' is not valid.");
    }

    if (!isValidPathParam(userSid)) {
      throw new Error("Parameter 'userSid' is not valid.");
    }

    if (!isValidPathParam(conversationSid)) {
      throw new Error("Parameter 'conversationSid' is not valid.");
    }

    this._solution = { chatServiceSid, userSid, conversationSid };
    this._uri = `/Services/${chatServiceSid}/Users/${userSid}/Conversations/${conversationSid}`;
  }

  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.remove({
        uri: instance._uri,
        method: "delete",
      });

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(
    callback?: (error: Error | null, item?: UserConversationInstance) => any
  ): Promise<UserConversationInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new UserConversationInstance(
          operationVersion,
          payload,
          instance._solution.chatServiceSid,
          instance._solution.userSid,
          instance._solution.conversationSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(
    params?:
      | UserConversationContextUpdateOptions
      | ((error: Error | null, item?: UserConversationInstance) => any),
    callback?: (error: Error | null, item?: UserConversationInstance) => any
  ): Promise<UserConversationInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: UserConversationInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["notificationLevel"] !== undefined)
      data["NotificationLevel"] = params["notificationLevel"];
    if (params["lastReadTimestamp"] !== undefined)
      data["LastReadTimestamp"] = serialize.iso8601DateTime(
        params["lastReadTimestamp"]
      );
    if (params["lastReadMessageIndex"] !== undefined)
      data["LastReadMessageIndex"] = params["lastReadMessageIndex"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.update({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new UserConversationInstance(
          operationVersion,
          payload,
          instance._solution.chatServiceSid,
          instance._solution.userSid,
          instance._solution.conversationSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface UserConversationPayload extends TwilioResponsePayload {
  conversations: UserConversationResource[];
}

interface UserConversationResource {
  account_sid: string;
  chat_service_sid: string;
  conversation_sid: string;
  unread_messages_count: number;
  last_read_message_index: number;
  participant_sid: string;
  user_sid: string;
  friendly_name: string;
  conversation_state: ServiceUserConversationState;
  timers: any;
  attributes: string;
  date_created: Date;
  date_updated: Date;
  created_by: string;
  notification_level: ServiceUserConversationNotificationLevel;
  unique_name: string;
  url: string;
  links: object;
}

export class UserConversationInstance {
  protected _solution: UserConversationContextSolution;
  protected _context?: UserConversationContext;

  constructor(
    protected _version: V1,
    payload: UserConversationResource,
    chatServiceSid: string,
    userSid: string,
    conversationSid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.chatServiceSid = payload.chat_service_sid;
    this.conversationSid = payload.conversation_sid;
    this.unreadMessagesCount = deserialize.integer(
      payload.unread_messages_count
    );
    this.lastReadMessageIndex = deserialize.integer(
      payload.last_read_message_index
    );
    this.participantSid = payload.participant_sid;
    this.userSid = payload.user_sid;
    this.friendlyName = payload.friendly_name;
    this.conversationState = payload.conversation_state;
    this.timers = payload.timers;
    this.attributes = payload.attributes;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.createdBy = payload.created_by;
    this.notificationLevel = payload.notification_level;
    this.uniqueName = payload.unique_name;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = {
      chatServiceSid,
      userSid,
      conversationSid: conversationSid || this.conversationSid,
    };
  }

  /**
   * The unique ID of the Account responsible for this conversation.
   */
  accountSid: string;
  /**
   * The unique ID of the Conversation Service this conversation belongs to.
   */
  chatServiceSid: string;
  /**
   * The unique ID of the Conversation for this User Conversation.
   */
  conversationSid: string;
  /**
   * The number of unread Messages in the Conversation.
   */
  unreadMessagesCount: number;
  /**
   * The index of the last read Message .
   */
  lastReadMessageIndex: number;
  /**
   * Participant Sid.
   */
  participantSid: string;
  /**
   * The unique ID for the User.
   */
  userSid: string;
  /**
   * The human-readable name of this conversation.
   */
  friendlyName: string;
  conversationState: ServiceUserConversationState;
  /**
   * Timer date values for this conversation.
   */
  timers: any;
  /**
   * An optional string metadata field you can use to store any data you wish.
   */
  attributes: string;
  /**
   * The date that this conversation was created.
   */
  dateCreated: Date;
  /**
   * The date that this conversation was last updated.
   */
  dateUpdated: Date;
  /**
   * Creator of this conversation.
   */
  createdBy: string;
  notificationLevel: ServiceUserConversationNotificationLevel;
  /**
   * An application-defined string that uniquely identifies the Conversation resource.
   */
  uniqueName: string;
  url: string;
  /**
   * Absolute URLs to access the participant and conversation of this user conversation.
   */
  links: object;

  private get _proxy(): UserConversationContext {
    this._context =
      this._context ||
      new UserConversationContextImpl(
        this._version,
        this._solution.chatServiceSid,
        this._solution.userSid,
        this._solution.conversationSid
      );
    return this._context;
  }

  /**
   * Remove a UserConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean> {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a UserConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserConversationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: UserConversationInstance) => any
  ): Promise<UserConversationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a UserConversationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserConversationInstance
   */
  update(
    callback?: (error: Error | null, item?: UserConversationInstance) => any
  ): Promise<UserConversationInstance>;
  /**
   * Update a UserConversationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserConversationInstance
   */
  update(
    params: UserConversationContextUpdateOptions,
    callback?: (error: Error | null, item?: UserConversationInstance) => any
  ): Promise<UserConversationInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: UserConversationInstance) => any
  ): Promise<UserConversationInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      chatServiceSid: this.chatServiceSid,
      conversationSid: this.conversationSid,
      unreadMessagesCount: this.unreadMessagesCount,
      lastReadMessageIndex: this.lastReadMessageIndex,
      participantSid: this.participantSid,
      userSid: this.userSid,
      friendlyName: this.friendlyName,
      conversationState: this.conversationState,
      timers: this.timers,
      attributes: this.attributes,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      createdBy: this.createdBy,
      notificationLevel: this.notificationLevel,
      uniqueName: this.uniqueName,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface UserConversationSolution {
  chatServiceSid: string;
  userSid: string;
}

export interface UserConversationListInstance {
  _version: V1;
  _solution: UserConversationSolution;
  _uri: string;

  (conversationSid: string): UserConversationContext;
  get(conversationSid: string): UserConversationContext;

  /**
   * Streams UserConversationInstance records from the API.
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
   * @param { UserConversationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: UserConversationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: UserConversationListInstanceEachOptions,
    callback?: (
      item: UserConversationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of UserConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: UserConversationPage) => any
  ): Promise<UserConversationPage>;
  /**
   * Lists UserConversationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserConversationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: UserConversationInstance[]) => any
  ): Promise<UserConversationInstance[]>;
  list(
    params: UserConversationListInstanceOptions,
    callback?: (error: Error | null, items: UserConversationInstance[]) => any
  ): Promise<UserConversationInstance[]>;
  /**
   * Retrieve a single page of UserConversationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { UserConversationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: UserConversationPage) => any
  ): Promise<UserConversationPage>;
  page(
    params: UserConversationListInstancePageOptions,
    callback?: (error: Error | null, items: UserConversationPage) => any
  ): Promise<UserConversationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function UserConversationListInstance(
  version: V1,
  chatServiceSid: string,
  userSid: string
): UserConversationListInstance {
  if (!isValidPathParam(chatServiceSid)) {
    throw new Error("Parameter 'chatServiceSid' is not valid.");
  }

  if (!isValidPathParam(userSid)) {
    throw new Error("Parameter 'userSid' is not valid.");
  }

  const instance = ((conversationSid) =>
    instance.get(conversationSid)) as UserConversationListInstance;

  instance.get = function get(conversationSid): UserConversationContext {
    return new UserConversationContextImpl(
      version,
      chatServiceSid,
      userSid,
      conversationSid
    );
  };

  instance._version = version;
  instance._solution = { chatServiceSid, userSid };
  instance._uri = `/Services/${chatServiceSid}/Users/${userSid}/Conversations`;

  instance.page = function page(
    params?:
      | UserConversationListInstancePageOptions
      | ((error: Error | null, item?: UserConversationPage) => any),
    callback?: (error: Error | null, item?: UserConversationPage) => any
  ): Promise<UserConversationPage> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: UserConversationPage
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new UserConversationPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: UserConversationPage) => any
  ): Promise<UserConversationPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new UserConversationPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
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

export class UserConversationPage extends Page<
  V1,
  UserConversationPayload,
  UserConversationResource,
  UserConversationInstance
> {
  /**
   * Initialize the UserConversationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: UserConversationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of UserConversationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: UserConversationResource): UserConversationInstance {
    return new UserConversationInstance(
      this._version,
      payload,
      this._solution.chatServiceSid,
      this._solution.userSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
