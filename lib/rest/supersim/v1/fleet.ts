/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Supersim
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

type FleetDataMetering = "payg";

/**
 * Options to pass to update a FleetInstance
 */
export interface FleetContextUpdateOptions {
  /** An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\&#39;s &#x60;sid&#x60; in the URL to address the resource. */
  uniqueName?: string;
  /** The SID or unique name of the Network Access Profile that will control which cellular networks the Fleet\\\&#39;s SIMs can connect to. */
  networkAccessProfile?: string;
  /** The URL that will receive a webhook when a Super SIM in the Fleet is used to send an IP Command from your device to a special IP address. Your server should respond with an HTTP status code in the 200 range; any response body will be ignored. */
  ipCommandsUrl?: string;
  /** A string representing the HTTP method to use when making a request to &#x60;ip_commands_url&#x60;. Can be one of &#x60;POST&#x60; or &#x60;GET&#x60;. Defaults to &#x60;POST&#x60;. */
  ipCommandsMethod?: string;
  /** The URL that will receive a webhook when a Super SIM in the Fleet is used to send an SMS from your device to the SMS Commands number. Your server should respond with an HTTP status code in the 200 range; any response body will be ignored. */
  smsCommandsUrl?: string;
  /** A string representing the HTTP method to use when making a request to &#x60;sms_commands_url&#x60;. Can be one of &#x60;POST&#x60; or &#x60;GET&#x60;. Defaults to &#x60;POST&#x60;. */
  smsCommandsMethod?: string;
  /** The total data usage (download and upload combined) in Megabytes that each Super SIM assigned to the Fleet can consume during a billing period (normally one month). Value must be between 1MB (1) and 2TB (2,000,000). Defaults to 1GB (1,000). */
  dataLimit?: number;
}

/**
 * Options to pass to create a FleetInstance
 */
export interface FleetListInstanceCreateOptions {
  /** The SID or unique name of the Network Access Profile that will control which cellular networks the Fleet\\\&#39;s SIMs can connect to. */
  networkAccessProfile: string;
  /** An application-defined string that uniquely identifies the resource. It can be used in place of the resource\\\&#39;s &#x60;sid&#x60; in the URL to address the resource. */
  uniqueName?: string;
  /** Defines whether SIMs in the Fleet are capable of using 2G/3G/4G/LTE/CAT-M data connectivity. Defaults to &#x60;true&#x60;. */
  dataEnabled?: boolean;
  /** The total data usage (download and upload combined) in Megabytes that each Super SIM assigned to the Fleet can consume during a billing period (normally one month). Value must be between 1MB (1) and 2TB (2,000,000). Defaults to 1GB (1,000). */
  dataLimit?: number;
  /** The URL that will receive a webhook when a Super SIM in the Fleet is used to send an IP Command from your device to a special IP address. Your server should respond with an HTTP status code in the 200 range; any response body will be ignored. */
  ipCommandsUrl?: string;
  /** A string representing the HTTP method to use when making a request to &#x60;ip_commands_url&#x60;. Can be one of &#x60;POST&#x60; or &#x60;GET&#x60;. Defaults to &#x60;POST&#x60;. */
  ipCommandsMethod?: string;
  /** Defines whether SIMs in the Fleet are capable of sending and receiving machine-to-machine SMS via Commands. Defaults to &#x60;true&#x60;. */
  smsCommandsEnabled?: boolean;
  /** The URL that will receive a webhook when a Super SIM in the Fleet is used to send an SMS from your device to the SMS Commands number. Your server should respond with an HTTP status code in the 200 range; any response body will be ignored. */
  smsCommandsUrl?: string;
  /** A string representing the HTTP method to use when making a request to &#x60;sms_commands_url&#x60;. Can be one of &#x60;POST&#x60; or &#x60;GET&#x60;. Defaults to &#x60;POST&#x60;. */
  smsCommandsMethod?: string;
}
/**
 * Options to pass to each
 */
export interface FleetListInstanceEachOptions {
  /** The SID or unique name of the Network Access Profile that controls which cellular networks the Fleet\&#39;s SIMs can connect to. */
  networkAccessProfile?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: FleetInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface FleetListInstanceOptions {
  /** The SID or unique name of the Network Access Profile that controls which cellular networks the Fleet\&#39;s SIMs can connect to. */
  networkAccessProfile?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface FleetListInstancePageOptions {
  /** The SID or unique name of the Network Access Profile that controls which cellular networks the Fleet\&#39;s SIMs can connect to. */
  networkAccessProfile?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface FleetContext {
  /**
   * Fetch a FleetInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FleetInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance>;

  /**
   * Update a FleetInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FleetInstance
   */
  update(
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance>;
  /**
   * Update a FleetInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FleetInstance
   */
  update(
    params: FleetContextUpdateOptions,
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance>;
  update(params?: any, callback?: any): Promise<FleetInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FleetContextSolution {
  sid?: string;
}

export class FleetContextImpl implements FleetContext {
  protected _solution: FleetContextSolution;
  protected _uri: string;

  constructor(protected _version: V1, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Fleets/${sid}`;
  }

  fetch(callback?: any): Promise<FleetInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FleetInstance(operationVersion, payload, this._solution.sid)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  }

  update(params?: any, callback?: any): Promise<FleetInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["networkAccessProfile"] !== undefined)
      data["NetworkAccessProfile"] = params["networkAccessProfile"];
    if (params["ipCommandsUrl"] !== undefined)
      data["IpCommandsUrl"] = params["ipCommandsUrl"];
    if (params["ipCommandsMethod"] !== undefined)
      data["IpCommandsMethod"] = params["ipCommandsMethod"];
    if (params["smsCommandsUrl"] !== undefined)
      data["SmsCommandsUrl"] = params["smsCommandsUrl"];
    if (params["smsCommandsMethod"] !== undefined)
      data["SmsCommandsMethod"] = params["smsCommandsMethod"];
    if (params["dataLimit"] !== undefined)
      data["DataLimit"] = params["dataLimit"];

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
        new FleetInstance(operationVersion, payload, this._solution.sid)
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

export type FleetSmsCommandsMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";
export type FleetIpCommandsMethod =
  | "HEAD"
  | "GET"
  | "POST"
  | "PATCH"
  | "PUT"
  | "DELETE";

interface FleetPayload extends TwilioResponsePayload {
  fleets: FleetResource[];
}

interface FleetResource {
  account_sid?: string | null;
  sid?: string | null;
  unique_name?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
  data_enabled?: boolean | null;
  data_limit?: number | null;
  data_metering?: FleetDataMetering;
  sms_commands_enabled?: boolean | null;
  sms_commands_url?: string | null;
  sms_commands_method?: FleetSmsCommandsMethod;
  network_access_profile_sid?: string | null;
  ip_commands_url?: string | null;
  ip_commands_method?: FleetIpCommandsMethod;
}

export class FleetInstance {
  protected _solution: FleetContextSolution;
  protected _context?: FleetContext;

  constructor(protected _version: V1, payload: FleetResource, sid?: string) {
    this.accountSid = payload.account_sid;
    this.sid = payload.sid;
    this.uniqueName = payload.unique_name;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;
    this.dataEnabled = payload.data_enabled;
    this.dataLimit = deserialize.integer(payload.data_limit);
    this.dataMetering = payload.data_metering;
    this.smsCommandsEnabled = payload.sms_commands_enabled;
    this.smsCommandsUrl = payload.sms_commands_url;
    this.smsCommandsMethod = payload.sms_commands_method;
    this.networkAccessProfileSid = payload.network_access_profile_sid;
    this.ipCommandsUrl = payload.ip_commands_url;
    this.ipCommandsMethod = payload.ip_commands_method;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * An application-defined string that uniquely identifies the resource
   */
  uniqueName?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The absolute URL of the Fleet resource
   */
  url?: string | null;
  /**
   * Defines whether SIMs in the Fleet are capable of using data connectivity
   */
  dataEnabled?: boolean | null;
  /**
   * The total data usage (download and upload combined) in Megabytes that each Super SIM assigned to the Fleet can consume
   */
  dataLimit?: number | null;
  dataMetering?: FleetDataMetering;
  /**
   * Defines whether SIMs in the Fleet are capable of sending and receiving machine-to-machine SMS via Commands
   */
  smsCommandsEnabled?: boolean | null;
  /**
   * The URL that will receive a webhook when a Super SIM in the Fleet is used to send an SMS from your device to the SMS Commands number
   */
  smsCommandsUrl?: string | null;
  /**
   * A string representing the HTTP method to use when making a request to `sms_commands_url`
   */
  smsCommandsMethod?: FleetSmsCommandsMethod;
  /**
   * The SID of the Network Access Profile of the Fleet
   */
  networkAccessProfileSid?: string | null;
  /**
   * The URL that will receive a webhook when a Super SIM in the Fleet is used to send an IP Command from your device
   */
  ipCommandsUrl?: string | null;
  /**
   * A string representing the HTTP method to use when making a request to `ip_commands_url`
   */
  ipCommandsMethod?: FleetIpCommandsMethod;

  private get _proxy(): FleetContext {
    this._context =
      this._context || new FleetContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a FleetInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FleetInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a FleetInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FleetInstance
   */
  update(
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance>;
  /**
   * Update a FleetInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FleetInstance
   */
  update(
    params: FleetContextUpdateOptions,
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance>;
  update(params?: any, callback?: any): Promise<FleetInstance> {
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
      sid: this.sid,
      uniqueName: this.uniqueName,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
      dataEnabled: this.dataEnabled,
      dataLimit: this.dataLimit,
      dataMetering: this.dataMetering,
      smsCommandsEnabled: this.smsCommandsEnabled,
      smsCommandsUrl: this.smsCommandsUrl,
      smsCommandsMethod: this.smsCommandsMethod,
      networkAccessProfileSid: this.networkAccessProfileSid,
      ipCommandsUrl: this.ipCommandsUrl,
      ipCommandsMethod: this.ipCommandsMethod,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FleetListInstance {
  (sid: string): FleetContext;
  get(sid: string): FleetContext;

  /**
   * Create a FleetInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FleetInstance
   */
  create(
    params: FleetListInstanceCreateOptions,
    callback?: (error: Error | null, item?: FleetInstance) => any
  ): Promise<FleetInstance>;
  create(params: any, callback?: any): Promise<FleetInstance>;

  /**
   * Streams FleetInstance records from the API.
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
    callback?: (item: FleetInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams FleetInstance records from the API.
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
   * @param { FleetListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: FleetListInstanceEachOptions,
    callback?: (item: FleetInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of FleetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: FleetPage) => any
  ): Promise<FleetPage>;
  /**
   * Retrieve a single target page of FleetInstance records from the API.
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
    callback?: (error: Error | null, items: FleetPage) => any
  ): Promise<FleetPage>;
  getPage(params?: any, callback?: any): Promise<FleetPage>;
  /**
   * Lists FleetInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: FleetInstance[]) => any
  ): Promise<FleetInstance[]>;
  /**
   * Lists FleetInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FleetListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: FleetListInstanceOptions,
    callback?: (error: Error | null, items: FleetInstance[]) => any
  ): Promise<FleetInstance[]>;
  list(params?: any, callback?: any): Promise<FleetInstance[]>;
  /**
   * Retrieve a single page of FleetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: FleetPage) => any
  ): Promise<FleetPage>;
  /**
   * Retrieve a single page of FleetInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { FleetListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: FleetListInstancePageOptions,
    callback?: (error: Error | null, items: FleetPage) => any
  ): Promise<FleetPage>;
  page(params?: any, callback?: any): Promise<FleetPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FleetSolution {}

interface FleetListInstanceImpl extends FleetListInstance {}
class FleetListInstanceImpl implements FleetListInstance {
  _version?: V1;
  _solution?: FleetSolution;
  _uri?: string;
}

export function FleetListInstance(version: V1): FleetListInstance {
  const instance = ((sid) => instance.get(sid)) as FleetListInstanceImpl;

  instance.get = function get(sid): FleetContext {
    return new FleetContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Fleets`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<FleetInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (
      params["networkAccessProfile"] === null ||
      params["networkAccessProfile"] === undefined
    ) {
      throw new Error(
        "Required parameter \"params['networkAccessProfile']\" missing."
      );
    }

    let data: any = {};

    data["NetworkAccessProfile"] = params["networkAccessProfile"];
    if (params["uniqueName"] !== undefined)
      data["UniqueName"] = params["uniqueName"];
    if (params["dataEnabled"] !== undefined)
      data["DataEnabled"] = serialize.bool(params["dataEnabled"]);
    if (params["dataLimit"] !== undefined)
      data["DataLimit"] = params["dataLimit"];
    if (params["ipCommandsUrl"] !== undefined)
      data["IpCommandsUrl"] = params["ipCommandsUrl"];
    if (params["ipCommandsMethod"] !== undefined)
      data["IpCommandsMethod"] = params["ipCommandsMethod"];
    if (params["smsCommandsEnabled"] !== undefined)
      data["SmsCommandsEnabled"] = serialize.bool(params["smsCommandsEnabled"]);
    if (params["smsCommandsUrl"] !== undefined)
      data["SmsCommandsUrl"] = params["smsCommandsUrl"];
    if (params["smsCommandsMethod"] !== undefined)
      data["SmsCommandsMethod"] = params["smsCommandsMethod"];

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
      (payload) => new FleetInstance(operationVersion, payload)
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
  ): Promise<FleetPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["networkAccessProfile"] !== undefined)
      data["NetworkAccessProfile"] = params["networkAccessProfile"];
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
      (payload) => new FleetPage(operationVersion, payload, this._solution)
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
  ): Promise<FleetPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new FleetPage(this._version, payload, this._solution)
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

export class FleetPage extends Page<
  V1,
  FleetPayload,
  FleetResource,
  FleetInstance
> {
  /**
   * Initialize the FleetPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: FleetSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of FleetInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: FleetResource): FleetInstance {
    return new FleetInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
