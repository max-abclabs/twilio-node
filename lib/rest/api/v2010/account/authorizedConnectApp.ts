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
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2010 from "../../V2010";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

type AuthorizedConnectAppPermission = "get-all" | "post-all";

/**
 * Options to pass to each
 */
export interface AuthorizedConnectAppListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: AuthorizedConnectAppInstance,
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
export interface AuthorizedConnectAppListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AuthorizedConnectAppListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AuthorizedConnectAppContext {
  /**
   * Fetch a AuthorizedConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthorizedConnectAppInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AuthorizedConnectAppInstance) => any
  ): Promise<AuthorizedConnectAppInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AuthorizedConnectAppContextSolution {
  accountSid: string;
  connectAppSid: string;
}

export class AuthorizedConnectAppContextImpl
  implements AuthorizedConnectAppContext
{
  protected _solution: AuthorizedConnectAppContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    connectAppSid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(connectAppSid)) {
      throw new Error("Parameter 'connectAppSid' is not valid.");
    }

    this._solution = { accountSid, connectAppSid };
    this._uri = `/Accounts/${accountSid}/AuthorizedConnectApps/${connectAppSid}.json`;
  }

  fetch(
    callback?: (error: Error | null, item?: AuthorizedConnectAppInstance) => any
  ): Promise<AuthorizedConnectAppInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AuthorizedConnectAppInstance(
          operationVersion,
          payload,
          instance._solution.accountSid,
          instance._solution.connectAppSid
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

interface AuthorizedConnectAppPayload extends TwilioResponsePayload {
  authorized_connect_apps: AuthorizedConnectAppResource[];
}

interface AuthorizedConnectAppResource {
  account_sid: string;
  connect_app_company_name: string;
  connect_app_description: string;
  connect_app_friendly_name: string;
  connect_app_homepage_url: string;
  connect_app_sid: string;
  date_created: Date;
  date_updated: Date;
  permissions: Array<AuthorizedConnectAppPermission>;
  uri: string;
}

export class AuthorizedConnectAppInstance {
  protected _solution: AuthorizedConnectAppContextSolution;
  protected _context?: AuthorizedConnectAppContext;

  constructor(
    protected _version: V2010,
    payload: AuthorizedConnectAppResource,
    accountSid: string,
    connectAppSid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.connectAppCompanyName = payload.connect_app_company_name;
    this.connectAppDescription = payload.connect_app_description;
    this.connectAppFriendlyName = payload.connect_app_friendly_name;
    this.connectAppHomepageUrl = payload.connect_app_homepage_url;
    this.connectAppSid = payload.connect_app_sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated);
    this.permissions = payload.permissions;
    this.uri = payload.uri;

    this._solution = {
      accountSid,
      connectAppSid: connectAppSid || this.connectAppSid,
    };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  /**
   * The company name set for the Connect App
   */
  connectAppCompanyName: string;
  /**
   * A detailed description of the app
   */
  connectAppDescription: string;
  /**
   * The name of the Connect App
   */
  connectAppFriendlyName: string;
  /**
   * The public URL for the Connect App
   */
  connectAppHomepageUrl: string;
  /**
   * The SID that we assigned to the Connect App
   */
  connectAppSid: string;
  /**
   * The RFC 2822 date and time in GMT that the resource was created
   */
  dateCreated: Date;
  /**
   * The RFC 2822 date and time in GMT that the resource was last updated
   */
  dateUpdated: Date;
  /**
   * Permissions authorized to the app
   */
  permissions: Array<AuthorizedConnectAppPermission>;
  /**
   * The URI of the resource, relative to `https://api.twilio.com`
   */
  uri: string;

  private get _proxy(): AuthorizedConnectAppContext {
    this._context =
      this._context ||
      new AuthorizedConnectAppContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.connectAppSid
      );
    return this._context;
  }

  /**
   * Fetch a AuthorizedConnectAppInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AuthorizedConnectAppInstance
   */
  fetch(
    callback?: (error: Error | null, item?: AuthorizedConnectAppInstance) => any
  ): Promise<AuthorizedConnectAppInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      connectAppCompanyName: this.connectAppCompanyName,
      connectAppDescription: this.connectAppDescription,
      connectAppFriendlyName: this.connectAppFriendlyName,
      connectAppHomepageUrl: this.connectAppHomepageUrl,
      connectAppSid: this.connectAppSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      permissions: this.permissions,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AuthorizedConnectAppSolution {
  accountSid: string;
}

export interface AuthorizedConnectAppListInstance {
  _version: V2010;
  _solution: AuthorizedConnectAppSolution;
  _uri: string;

  (connectAppSid: string): AuthorizedConnectAppContext;
  get(connectAppSid: string): AuthorizedConnectAppContext;

  /**
   * Streams AuthorizedConnectAppInstance records from the API.
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
   * @param { AuthorizedConnectAppListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: AuthorizedConnectAppInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: AuthorizedConnectAppListInstanceEachOptions,
    callback?: (
      item: AuthorizedConnectAppInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of AuthorizedConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any
  ): Promise<AuthorizedConnectAppPage>;
  /**
   * Lists AuthorizedConnectAppInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthorizedConnectAppListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: AuthorizedConnectAppInstance[]
    ) => any
  ): Promise<AuthorizedConnectAppInstance[]>;
  list(
    params: AuthorizedConnectAppListInstanceOptions,
    callback?: (
      error: Error | null,
      items: AuthorizedConnectAppInstance[]
    ) => any
  ): Promise<AuthorizedConnectAppInstance[]>;
  /**
   * Retrieve a single page of AuthorizedConnectAppInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AuthorizedConnectAppListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any
  ): Promise<AuthorizedConnectAppPage>;
  page(
    params: AuthorizedConnectAppListInstancePageOptions,
    callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any
  ): Promise<AuthorizedConnectAppPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function AuthorizedConnectAppListInstance(
  version: V2010,
  accountSid: string
): AuthorizedConnectAppListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((connectAppSid) =>
    instance.get(connectAppSid)) as AuthorizedConnectAppListInstance;

  instance.get = function get(connectAppSid): AuthorizedConnectAppContext {
    return new AuthorizedConnectAppContextImpl(
      version,
      accountSid,
      connectAppSid
    );
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/AuthorizedConnectApps.json`;

  instance.page = function page(
    params?:
      | AuthorizedConnectAppListInstancePageOptions
      | ((error: Error | null, item?: AuthorizedConnectAppPage) => any),
    callback?: (error: Error | null, item?: AuthorizedConnectAppPage) => any
  ): Promise<AuthorizedConnectAppPage> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: AuthorizedConnectAppPage
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
        new AuthorizedConnectAppPage(
          operationVersion,
          payload,
          instance._solution
        )
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
    callback?: (error: Error | null, items: AuthorizedConnectAppPage) => any
  ): Promise<AuthorizedConnectAppPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new AuthorizedConnectAppPage(
          instance._version,
          payload,
          instance._solution
        )
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

export class AuthorizedConnectAppPage extends Page<
  V2010,
  AuthorizedConnectAppPayload,
  AuthorizedConnectAppResource,
  AuthorizedConnectAppInstance
> {
  /**
   * Initialize the AuthorizedConnectAppPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: AuthorizedConnectAppSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AuthorizedConnectAppInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: AuthorizedConnectAppResource
  ): AuthorizedConnectAppInstance {
    return new AuthorizedConnectAppInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
