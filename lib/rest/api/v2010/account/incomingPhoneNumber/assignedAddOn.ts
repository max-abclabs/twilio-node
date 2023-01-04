/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Api
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";
import { AssignedAddOnExtensionListInstance } from "./assignedAddOn/assignedAddOnExtension";

/**
 * Options to pass to create a AssignedAddOnInstance
 */
export interface AssignedAddOnListInstanceCreateOptions {
  /** The SID that identifies the Add-on installation. */
  installedAddOnSid: string;
}
/**
 * Options to pass to each
 */
export interface AssignedAddOnListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: AssignedAddOnInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface AssignedAddOnListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AssignedAddOnListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AssignedAddOnContext {
  extensions: AssignedAddOnExtensionListInstance;

  /**
   * Remove a AssignedAddOnInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Fetch a AssignedAddOnInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssignedAddOnInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AssignedAddOnInstance) => any
  ): Promise<AssignedAddOnInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssignedAddOnContextSolution {
  accountSid?: string;
  resourceSid?: string;
  sid?: string;
}

export class AssignedAddOnContextImpl implements AssignedAddOnContext {
  protected _solution: AssignedAddOnContextSolution;
  protected _uri: string;

  protected _extensions?: AssignedAddOnExtensionListInstance;

  constructor(
    protected _version: V2010,
    accountSid: string,
    resourceSid: string,
    sid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(resourceSid)) {
      throw new Error("Parameter 'resourceSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, resourceSid, sid };
    this._uri = `/Accounts/${accountSid}/IncomingPhoneNumbers/${resourceSid}/AssignedAddOns/${sid}.json`;
  }

  get extensions(): AssignedAddOnExtensionListInstance {
    this._extensions =
      this._extensions ||
      AssignedAddOnExtensionListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.resourceSid,
        this._solution.sid
      );
    return this._extensions;
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

  fetch(callback?: any): Promise<AssignedAddOnInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AssignedAddOnInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.resourceSid,
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

interface AssignedAddOnPayload extends TwilioResponsePayload {
  assigned_add_ons: AssignedAddOnResource[];
}

interface AssignedAddOnResource {
  sid?: string | null;
  account_sid?: string | null;
  resource_sid?: string | null;
  friendly_name?: string | null;
  description?: string | null;
  configuration?: any | null;
  unique_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  uri?: string | null;
  subresource_uris?: object | null;
}

export class AssignedAddOnInstance {
  protected _solution: AssignedAddOnContextSolution;
  protected _context?: AssignedAddOnContext;

  constructor(
    protected _version: V2010,
    payload: AssignedAddOnResource,
    accountSid: string,
    resourceSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.resourceSid = payload.resource_sid;
    this.friendlyName = payload.friendly_name;
    this.description = payload.description;
    this.configuration = payload.configuration;
    this.uniqueName = payload.unique_name;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.uri = payload.uri;
    this.subresourceUris = payload.subresource_uris;

    this._solution = { accountSid, resourceSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The SID of the Phone Number that installed this Add-on
   */
  resourceSid?: string | null;
  /**
   * The string that you assigned to describe the resource
   */
  friendlyName?: string | null;
  /**
   * A short description of the Add-on functionality
   */
  description?: string | null;
  /**
   * A JSON string that represents the current configuration
   */
  configuration?: any | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;
  /**
   * A list of related resources identified by their relative URIs
   */
  subresourceUris?: object | null;

  private get _proxy(): AssignedAddOnContext {
    this._context =
      this._context ||
      new AssignedAddOnContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.resourceSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a AssignedAddOnInstance
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
   * Fetch a AssignedAddOnInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssignedAddOnInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AssignedAddOnInstance) => any
  ): Promise<AssignedAddOnInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the extensions.
   */
  extensions(): AssignedAddOnExtensionListInstance {
    return this._proxy.extensions;
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
      resourceSid: this.resourceSid,
      friendlyName: this.friendlyName,
      description: this.description,
      configuration: this.configuration,
      uniqueName: this.uniqueName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      uri: this.uri,
      subresourceUris: this.subresourceUris,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AssignedAddOnListInstance {
  (sid: string): AssignedAddOnContext;
  get(sid: string): AssignedAddOnContext;

  /**
   * Create a AssignedAddOnInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AssignedAddOnInstance
   */
  create(
    params: AssignedAddOnListInstanceCreateOptions,
    callback?: (error: Error | null, item?: AssignedAddOnInstance) => any
  ): Promise<AssignedAddOnInstance>;
  create(params: any, callback?: any): Promise<AssignedAddOnInstance>;

  /**
   * Streams AssignedAddOnInstance records from the API.
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
      item: AssignedAddOnInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams AssignedAddOnInstance records from the API.
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
   * @param { AssignedAddOnListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: AssignedAddOnListInstanceEachOptions,
    callback?: (
      item: AssignedAddOnInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AssignedAddOnInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: AssignedAddOnPage) => any
  ): Promise<AssignedAddOnPage>;
  /**
   * Retrieve a single target page of AssignedAddOnInstance records from the API.
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
    callback?: (error: Error | null, items: AssignedAddOnPage) => any
  ): Promise<AssignedAddOnPage>;
  getPage(params?: any, callback?: any): Promise<AssignedAddOnPage>;
  /**
   * Lists AssignedAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: AssignedAddOnInstance[]) => any
  ): Promise<AssignedAddOnInstance[]>;
  /**
   * Lists AssignedAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssignedAddOnListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: AssignedAddOnListInstanceOptions,
    callback?: (error: Error | null, items: AssignedAddOnInstance[]) => any
  ): Promise<AssignedAddOnInstance[]>;
  list(params?: any, callback?: any): Promise<AssignedAddOnInstance[]>;
  /**
   * Retrieve a single page of AssignedAddOnInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AssignedAddOnPage) => any
  ): Promise<AssignedAddOnPage>;
  /**
   * Retrieve a single page of AssignedAddOnInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AssignedAddOnListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: AssignedAddOnListInstancePageOptions,
    callback?: (error: Error | null, items: AssignedAddOnPage) => any
  ): Promise<AssignedAddOnPage>;
  page(params?: any, callback?: any): Promise<AssignedAddOnPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AssignedAddOnSolution {
  accountSid?: string;
  resourceSid?: string;
}

interface AssignedAddOnListInstanceImpl extends AssignedAddOnListInstance {}
class AssignedAddOnListInstanceImpl implements AssignedAddOnListInstance {
  _version?: V2010;
  _solution?: AssignedAddOnSolution;
  _uri?: string;
}

export function AssignedAddOnListInstance(
  version: V2010,
  accountSid: string,
  resourceSid: string
): AssignedAddOnListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(resourceSid)) {
    throw new Error("Parameter 'resourceSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as AssignedAddOnListInstanceImpl;

  instance.get = function get(sid): AssignedAddOnContext {
    return new AssignedAddOnContextImpl(version, accountSid, resourceSid, sid);
  };

  instance._version = version;
  instance._solution = { accountSid, resourceSid };
  instance._uri = `/Accounts/${accountSid}/IncomingPhoneNumbers/${resourceSid}/AssignedAddOns.json`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<AssignedAddOnInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["installedAddOnSid"] === null ||
      params["installedAddOnSid"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['installedAddOnSid']\" missing."
      );
    }

    let data: any = {};

    data["InstalledAddOnSid"] = params["installedAddOnSid"];

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
      (payload) =>
        new AssignedAddOnInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.resourceSid
        )
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
  ): Promise<AssignedAddOnPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

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
        new AssignedAddOnPage(operationVersion, payload, this._solution)
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
  ): Promise<AssignedAddOnPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new AssignedAddOnPage(this._version, payload, this._solution)
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

export class AssignedAddOnPage extends Page<
  V2010,
  AssignedAddOnPayload,
  AssignedAddOnResource,
  AssignedAddOnInstance
> {
  /**
   * Initialize the AssignedAddOnPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: AssignedAddOnSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AssignedAddOnInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AssignedAddOnResource): AssignedAddOnInstance {
    return new AssignedAddOnInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.resourceSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
