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
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

type ConfigurationAddressAutoCreationType = "webhook" | "studio" | "default";

type ConfigurationAddressMethod = "GET" | "POST";

type ConfigurationAddressType = "sms" | "whatsapp" | "messenger" | "gbm";

/**
 * Options to pass to update a AddressConfigurationInstance
 */
export interface AddressConfigurationContextUpdateOptions {
  /** The human-readable name of this configuration, limited to 256 characters. Optional. */
  friendlyName?: string;
  /** Enable/Disable auto-creating conversations for messages to this address */
  "autoCreation.enabled"?: boolean;
  /**  */
  "autoCreation.type"?: ConfigurationAddressAutoCreationType;
  /** Conversation Service for the auto-created conversation. If not set, the conversation is created in the default service. */
  "autoCreation.conversationServiceSid"?: string;
  /** For type &#x60;webhook&#x60;, the url for the webhook request. */
  "autoCreation.webhookUrl"?: string;
  /**  */
  "autoCreation.webhookMethod"?: ConfigurationAddressMethod;
  /** The list of events, firing webhook event for this Conversation. Values can be any of the following: &#x60;onMessageAdded&#x60;, &#x60;onMessageUpdated&#x60;, &#x60;onMessageRemoved&#x60;, &#x60;onConversationUpdated&#x60;, &#x60;onConversationStateUpdated&#x60;, &#x60;onConversationRemoved&#x60;, &#x60;onParticipantAdded&#x60;, &#x60;onParticipantUpdated&#x60;, &#x60;onParticipantRemoved&#x60;, &#x60;onDeliveryUpdated&#x60; */
  "autoCreation.webhookFilters"?: Array<string>;
  /** For type &#x60;studio&#x60;, the studio flow SID where the webhook should be sent to. */
  "autoCreation.studioFlowSid"?: string;
  /** For type &#x60;studio&#x60;, number of times to retry the webhook request */
  "autoCreation.studioRetryCount"?: number;
}

/**
 * Options to pass to create a AddressConfigurationInstance
 */
export interface AddressConfigurationListInstanceCreateOptions {
  /**  */
  type: ConfigurationAddressType;
  /** The unique address to be configured. The address can be a whatsapp address or phone number */
  address: string;
  /** The human-readable name of this configuration, limited to 256 characters. Optional. */
  friendlyName?: string;
  /** Enable/Disable auto-creating conversations for messages to this address */
  "autoCreation.enabled"?: boolean;
  /**  */
  "autoCreation.type"?: ConfigurationAddressAutoCreationType;
  /** Conversation Service for the auto-created conversation. If not set, the conversation is created in the default service. */
  "autoCreation.conversationServiceSid"?: string;
  /** For type &#x60;webhook&#x60;, the url for the webhook request. */
  "autoCreation.webhookUrl"?: string;
  /**  */
  "autoCreation.webhookMethod"?: ConfigurationAddressMethod;
  /** The list of events, firing webhook event for this Conversation. Values can be any of the following: &#x60;onMessageAdded&#x60;, &#x60;onMessageUpdated&#x60;, &#x60;onMessageRemoved&#x60;, &#x60;onConversationUpdated&#x60;, &#x60;onConversationStateUpdated&#x60;, &#x60;onConversationRemoved&#x60;, &#x60;onParticipantAdded&#x60;, &#x60;onParticipantUpdated&#x60;, &#x60;onParticipantRemoved&#x60;, &#x60;onDeliveryUpdated&#x60; */
  "autoCreation.webhookFilters"?: Array<string>;
  /** For type &#x60;studio&#x60;, the studio flow SID where the webhook should be sent to. */
  "autoCreation.studioFlowSid"?: string;
  /** For type &#x60;studio&#x60;, number of times to retry the webhook request */
  "autoCreation.studioRetryCount"?: number;
}
/**
 * Options to pass to each
 */
export interface AddressConfigurationListInstanceEachOptions {
  /** Filter the address configurations by its type. This value can be one of: &#x60;whatsapp&#x60;, &#x60;sms&#x60;. */
  type?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: AddressConfigurationInstance,
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
export interface AddressConfigurationListInstanceOptions {
  /** Filter the address configurations by its type. This value can be one of: &#x60;whatsapp&#x60;, &#x60;sms&#x60;. */
  type?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AddressConfigurationListInstancePageOptions {
  /** Filter the address configurations by its type. This value can be one of: &#x60;whatsapp&#x60;, &#x60;sms&#x60;. */
  type?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AddressConfigurationContext {
  /**
   * Remove a AddressConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AddressConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance>;

  /**
   * Update a AddressConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  update(
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance>;
  /**
   * Update a AddressConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  update(
    params: AddressConfigurationContextUpdateOptions,
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance>;
  update(params?: any, callback?: any): Promise<AddressConfigurationInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AddressConfigurationContextSolution {
  sid?: string;
}

export class AddressConfigurationContextImpl
  implements AddressConfigurationContext
{
  protected _solution: AddressConfigurationContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Configuration/Addresses/${sid}`;
  }

  remove(callback?: any): Promise<boolean> {
    let operationVersion = this._version,
      operationPromise = operationVersion.remove({
        uri: this._uri,
        method: "delete",
      });

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  fetch(callback?: any): Promise<AddressConfigurationInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AddressConfigurationInstance(
          operationVersion,
          payload,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<AddressConfigurationInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["autoCreation.enabled"] !== undefined)
      data["AutoCreation.Enabled"] = serialize.bool(
        params["autoCreation.enabled"]
      );
    if (params["autoCreation.type"] !== undefined)
      data["AutoCreation.Type"] = params["autoCreation.type"];
    if (params["autoCreation.conversationServiceSid"] !== undefined)
      data["AutoCreation.ConversationServiceSid"] =
        params["autoCreation.conversationServiceSid"];
    if (params["autoCreation.webhookUrl"] !== undefined)
      data["AutoCreation.WebhookUrl"] = params["autoCreation.webhookUrl"];
    if (params["autoCreation.webhookMethod"] !== undefined)
      data["AutoCreation.WebhookMethod"] = params["autoCreation.webhookMethod"];
    if (params["autoCreation.webhookFilters"] !== undefined)
      data["AutoCreation.WebhookFilters"] = serialize.map(
        params["autoCreation.webhookFilters"],
        (e) => e
      );
    if (params["autoCreation.studioFlowSid"] !== undefined)
      data["AutoCreation.StudioFlowSid"] = params["autoCreation.studioFlowSid"];
    if (params["autoCreation.studioRetryCount"] !== undefined)
      data["AutoCreation.StudioRetryCount"] =
        params["autoCreation.studioRetryCount"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = this._version,
      operationPromise = operationVersion.update({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AddressConfigurationInstance(
          operationVersion,
          payload,
          this._solution.sid
        )
    );

    operationPromise = this._version.setPromiseCallback(
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

interface AddressConfigurationPayload extends TwilioResponsePayload {
  address_configurations: AddressConfigurationResource[];
}

interface AddressConfigurationResource {
  sid?: string | null;
  account_sid?: string | null;
  type?: string | null;
  address?: string | null;
  friendly_name?: string | null;
  auto_creation?: any | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class AddressConfigurationInstance {
  protected _solution: AddressConfigurationContextSolution;
  protected _context?: AddressConfigurationContext;

  constructor(
    protected _version: V1,
    payload: AddressConfigurationResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.type = payload.type;
    this.address = payload.address;
    this.friendlyName = payload.friendly_name;
    this.autoCreation = payload.auto_creation;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * A 34 character string that uniquely identifies this resource.
   */
  sid?: string | null;
  /**
   * The unique ID of the Account the address belongs to.
   */
  accountSid?: string | null;
  /**
   * Type of Address.
   */
  type?: string | null;
  /**
   * The unique address to be configured.
   */
  address?: string | null;
  /**
   * The human-readable name of this configuration.
   */
  friendlyName?: string | null;
  /**
   * Auto Creation configuration for the address.
   */
  autoCreation?: any | null;
  /**
   * The date that this resource was created.
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was last updated.
   */
  dateUpdated?: Date | null;
  /**
   * An absolute URL for this address configuration.
   */
  url?: string | null;

  private get _proxy(): AddressConfigurationContext {
    this._context =
      this._context ||
      new AddressConfigurationContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a AddressConfigurationInstance
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
   * Fetch a AddressConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a AddressConfigurationInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  update(
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance>;
  /**
   * Update a AddressConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  update(
    params: AddressConfigurationContextUpdateOptions,
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance>;
  update(params?: any, callback?: any): Promise<AddressConfigurationInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      accountSid: this.accountSid,
      type: this.type,
      address: this.address,
      friendlyName: this.friendlyName,
      autoCreation: this.autoCreation,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AddressConfigurationListInstance {
  (sid: string): AddressConfigurationContext;
  get(sid: string): AddressConfigurationContext;

  /**
   * Create a AddressConfigurationInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AddressConfigurationInstance
   */
  create(
    params: AddressConfigurationListInstanceCreateOptions,
    callback?: (error: Error | null, item?: AddressConfigurationInstance) => any
  ): Promise<AddressConfigurationInstance>;
  create(params: any, callback?: any): Promise<AddressConfigurationInstance>;

  /**
   * Streams AddressConfigurationInstance records from the API.
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
      item: AddressConfigurationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams AddressConfigurationInstance records from the API.
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
   * @param { AddressConfigurationListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: AddressConfigurationListInstanceEachOptions,
    callback?: (
      item: AddressConfigurationInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AddressConfigurationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: AddressConfigurationPage) => any
  ): Promise<AddressConfigurationPage>;
  /**
   * Retrieve a single target page of AddressConfigurationInstance records from the API.
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
    callback?: (error: Error | null, items: AddressConfigurationPage) => any
  ): Promise<AddressConfigurationPage>;
  getPage(params?: any, callback?: any): Promise<AddressConfigurationPage>;
  /**
   * Lists AddressConfigurationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: AddressConfigurationInstance[]
    ) => any
  ): Promise<AddressConfigurationInstance[]>;
  /**
   * Lists AddressConfigurationInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AddressConfigurationListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: AddressConfigurationListInstanceOptions,
    callback?: (
      error: Error | null,
      items: AddressConfigurationInstance[]
    ) => any
  ): Promise<AddressConfigurationInstance[]>;
  list(params?: any, callback?: any): Promise<AddressConfigurationInstance[]>;
  /**
   * Retrieve a single page of AddressConfigurationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AddressConfigurationPage) => any
  ): Promise<AddressConfigurationPage>;
  /**
   * Retrieve a single page of AddressConfigurationInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AddressConfigurationListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: AddressConfigurationListInstancePageOptions,
    callback?: (error: Error | null, items: AddressConfigurationPage) => any
  ): Promise<AddressConfigurationPage>;
  page(params?: any, callback?: any): Promise<AddressConfigurationPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AddressConfigurationSolution {}

interface AddressConfigurationListInstanceImpl
  extends AddressConfigurationListInstance {}
class AddressConfigurationListInstanceImpl
  implements AddressConfigurationListInstance
{
  _version?: V1;
  _solution?: AddressConfigurationSolution;
  _uri?: string;
}

export function AddressConfigurationListInstance(
  version: V1
): AddressConfigurationListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as AddressConfigurationListInstanceImpl;

  instance.get = function get(sid): AddressConfigurationContext {
    return new AddressConfigurationContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Configuration/Addresses`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<AddressConfigurationInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["type"] === null || params["type"] === undefined) {
      throw new Error("Required parameter \"params['type']\" missing.");
    }

    if (params["address"] === null || params["address"] === undefined) {
      throw new Error("Required parameter \"params['address']\" missing.");
    }

    let data: any = {};

    data["Type"] = params["type"];

    data["Address"] = params["address"];
    if (params["friendlyName"] !== undefined)
      data["FriendlyName"] = params["friendlyName"];
    if (params["autoCreation.enabled"] !== undefined)
      data["AutoCreation.Enabled"] = serialize.bool(
        params["autoCreation.enabled"]
      );
    if (params["autoCreation.type"] !== undefined)
      data["AutoCreation.Type"] = params["autoCreation.type"];
    if (params["autoCreation.conversationServiceSid"] !== undefined)
      data["AutoCreation.ConversationServiceSid"] =
        params["autoCreation.conversationServiceSid"];
    if (params["autoCreation.webhookUrl"] !== undefined)
      data["AutoCreation.WebhookUrl"] = params["autoCreation.webhookUrl"];
    if (params["autoCreation.webhookMethod"] !== undefined)
      data["AutoCreation.WebhookMethod"] = params["autoCreation.webhookMethod"];
    if (params["autoCreation.webhookFilters"] !== undefined)
      data["AutoCreation.WebhookFilters"] = serialize.map(
        params["autoCreation.webhookFilters"],
        (e) => e
      );
    if (params["autoCreation.studioFlowSid"] !== undefined)
      data["AutoCreation.StudioFlowSid"] = params["autoCreation.studioFlowSid"];
    if (params["autoCreation.studioRetryCount"] !== undefined)
      data["AutoCreation.StudioRetryCount"] =
        params["autoCreation.studioRetryCount"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: this._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new AddressConfigurationInstance(operationVersion, payload)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<AddressConfigurationPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["type"] !== undefined) data["Type"] = params["type"];
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
        new AddressConfigurationPage(operationVersion, payload, this._solution)
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
  ): Promise<AddressConfigurationPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new AddressConfigurationPage(this._version, payload, this._solution)
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

export class AddressConfigurationPage extends Page<
  V1,
  AddressConfigurationPayload,
  AddressConfigurationResource,
  AddressConfigurationInstance
> {
  /**
   * Initialize the AddressConfigurationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: AddressConfigurationSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AddressConfigurationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: AddressConfigurationResource
  ): AddressConfigurationInstance {
    return new AddressConfigurationInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
