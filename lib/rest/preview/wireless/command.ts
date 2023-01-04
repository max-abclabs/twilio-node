/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Preview
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import Wireless from "../Wireless";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

/**
 * Options to pass to create a CommandInstance
 */
export interface CommandListInstanceCreateOptions {
  /**  */
  command: string;
  /**  */
  device?: string;
  /**  */
  sim?: string;
  /**  */
  callbackMethod?: string;
  /**  */
  callbackUrl?: string;
  /**  */
  commandMode?: string;
  /**  */
  includeSid?: string;
}
/**
 * Options to pass to each
 */
export interface CommandListInstanceEachOptions {
  /**  */
  device?: string;
  /**  */
  sim?: string;
  /**  */
  status?: string;
  /**  */
  direction?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: CommandInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface CommandListInstanceOptions {
  /**  */
  device?: string;
  /**  */
  sim?: string;
  /**  */
  status?: string;
  /**  */
  direction?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface CommandListInstancePageOptions {
  /**  */
  device?: string;
  /**  */
  sim?: string;
  /**  */
  status?: string;
  /**  */
  direction?: string;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface CommandContext {
  /**
   * Fetch a CommandInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CommandInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CommandInstance) => any
  ): Promise<CommandInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CommandContextSolution {
  sid?: string;
}

export class CommandContextImpl implements CommandContext {
  protected _solution: CommandContextSolution;
  protected _uri: string;

  constructor(protected _version: Wireless, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Commands/${sid}`;
  }

  fetch(callback?: any): Promise<CommandInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CommandInstance(operationVersion, payload, this._solution.sid)
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

interface CommandPayload extends TwilioResponsePayload {
  commands: CommandResource[];
}

interface CommandResource {
  sid?: string | null;
  account_sid?: string | null;
  device_sid?: string | null;
  sim_sid?: string | null;
  command?: string | null;
  command_mode?: string | null;
  status?: string | null;
  direction?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  url?: string | null;
}

export class CommandInstance {
  protected _solution: CommandContextSolution;
  protected _context?: CommandContext;

  constructor(
    protected _version: Wireless,
    payload: CommandResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.deviceSid = payload.device_sid;
    this.simSid = payload.sim_sid;
    this.command = payload.command;
    this.commandMode = payload.command_mode;
    this.status = payload.status;
    this.direction = payload.direction;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  sid?: string | null;
  accountSid?: string | null;
  deviceSid?: string | null;
  simSid?: string | null;
  command?: string | null;
  commandMode?: string | null;
  status?: string | null;
  direction?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;

  private get _proxy(): CommandContext {
    this._context =
      this._context ||
      new CommandContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a CommandInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CommandInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CommandInstance) => any
  ): Promise<CommandInstance> {
    return this._proxy.fetch(callback);
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
      deviceSid: this.deviceSid,
      simSid: this.simSid,
      command: this.command,
      commandMode: this.commandMode,
      status: this.status,
      direction: this.direction,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CommandListInstance {
  (sid: string): CommandContext;
  get(sid: string): CommandContext;

  /**
   * Create a CommandInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CommandInstance
   */
  create(
    params: CommandListInstanceCreateOptions,
    callback?: (error: Error | null, item?: CommandInstance) => any
  ): Promise<CommandInstance>;
  create(params: any, callback?: any): Promise<CommandInstance>;

  /**
   * Streams CommandInstance records from the API.
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
    callback?: (item: CommandInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Streams CommandInstance records from the API.
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
   * @param { CommandListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: CommandListInstanceEachOptions,
    callback?: (item: CommandInstance, done: (err?: Error) => void) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of CommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (error: Error | null, items: CommandPage) => any
  ): Promise<CommandPage>;
  /**
   * Retrieve a single target page of CommandInstance records from the API.
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
    callback?: (error: Error | null, items: CommandPage) => any
  ): Promise<CommandPage>;
  getPage(params?: any, callback?: any): Promise<CommandPage>;
  /**
   * Lists CommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: CommandInstance[]) => any
  ): Promise<CommandInstance[]>;
  /**
   * Lists CommandInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CommandListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: CommandListInstanceOptions,
    callback?: (error: Error | null, items: CommandInstance[]) => any
  ): Promise<CommandInstance[]>;
  list(params?: any, callback?: any): Promise<CommandInstance[]>;
  /**
   * Retrieve a single page of CommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: CommandPage) => any
  ): Promise<CommandPage>;
  /**
   * Retrieve a single page of CommandInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CommandListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: CommandListInstancePageOptions,
    callback?: (error: Error | null, items: CommandPage) => any
  ): Promise<CommandPage>;
  page(params?: any, callback?: any): Promise<CommandPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CommandSolution {}

interface CommandListInstanceImpl extends CommandListInstance {}
class CommandListInstanceImpl implements CommandListInstance {
  _version?: Wireless;
  _solution?: CommandSolution;
  _uri?: string;
}

export function CommandListInstance(version: Wireless): CommandListInstance {
  const instance = ((sid) => instance.get(sid)) as CommandListInstanceImpl;

  instance.get = function get(sid): CommandContext {
    return new CommandContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Commands`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<CommandInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["command"] === null || params["command"] === undefined) {
      throw new Error("Required parameter \"params['command']\" missing.");
    }

    let data: any = {};

    data["Command"] = params["command"];
    if (params["device"] !== undefined) data["Device"] = params["device"];
    if (params["sim"] !== undefined) data["Sim"] = params["sim"];
    if (params["callbackMethod"] !== undefined)
      data["CallbackMethod"] = params["callbackMethod"];
    if (params["callbackUrl"] !== undefined)
      data["CallbackUrl"] = params["callbackUrl"];
    if (params["commandMode"] !== undefined)
      data["CommandMode"] = params["commandMode"];
    if (params["includeSid"] !== undefined)
      data["IncludeSid"] = params["includeSid"];

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
      (payload) => new CommandInstance(operationVersion, payload)
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
  ): Promise<CommandPage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["device"] !== undefined) data["Device"] = params["device"];
    if (params["sim"] !== undefined) data["Sim"] = params["sim"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["direction"] !== undefined)
      data["Direction"] = params["direction"];
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
      (payload) => new CommandPage(operationVersion, payload, this._solution)
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
  ): Promise<CommandPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) => new CommandPage(this._version, payload, this._solution)
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

export class CommandPage extends Page<
  Wireless,
  CommandPayload,
  CommandResource,
  CommandInstance
> {
  /**
   * Initialize the CommandPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: Wireless,
    response: Response<string>,
    solution: CommandSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CommandInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CommandResource): CommandInstance {
    return new CommandInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
