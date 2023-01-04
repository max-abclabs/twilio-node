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
import V2010 from "../../../V2010";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";

/**
 * Options to pass to create a UserDefinedMessageSubscriptionInstance
 */
export interface UserDefinedMessageSubscriptionListInstanceCreateOptions {
  /** The URL we should call using the `method` to send user defined events to your application. URLs must contain a valid hostname (underscores are not permitted). */
  callback: string;
  /** A unique string value to identify API call. This should be a unique string value per API call and can be a randomly generated. */
  idempotencyKey?: string;
  /** The HTTP method Twilio will use when requesting the above `Url`. Either `GET` or `POST`. */
  method?: string;
}

export interface UserDefinedMessageSubscriptionContext {
  /**
   * Remove a UserDefinedMessageSubscriptionInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed boolean
   */
  remove(
    callback?: (error: Error | null, item?: boolean) => any
  ): Promise<boolean>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserDefinedMessageSubscriptionContextSolution {
  accountSid?: string;
  callSid?: string;
  sid?: string;
}

export class UserDefinedMessageSubscriptionContextImpl
  implements UserDefinedMessageSubscriptionContext
{
  protected _solution: UserDefinedMessageSubscriptionContextSolution;
  protected _uri: string;

  constructor(
    protected _version: V2010,
    accountSid: string,
    callSid: string,
    sid: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(callSid)) {
      throw new Error("Parameter 'callSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { accountSid, callSid, sid };
    this._uri = `/Accounts/${accountSid}/Calls/${callSid}/UserDefinedMessageSubscriptions/${sid}.json`;
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

interface UserDefinedMessageSubscriptionPayload
  extends UserDefinedMessageSubscriptionResource {}

interface UserDefinedMessageSubscriptionResource {
  account_sid?: string | null;
  call_sid?: string | null;
  sid?: string | null;
  date_created?: Date | null;
  uri?: string | null;
}

export class UserDefinedMessageSubscriptionInstance {
  protected _solution: UserDefinedMessageSubscriptionContextSolution;
  protected _context?: UserDefinedMessageSubscriptionContext;

  constructor(
    protected _version: V2010,
    payload: UserDefinedMessageSubscriptionResource,
    accountSid: string,
    callSid: string,
    sid?: string
  ) {
    this.accountSid = payload.account_sid;
    this.callSid = payload.call_sid;
    this.sid = payload.sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
    this.uri = payload.uri;

    this._solution = { accountSid, callSid, sid: sid || this.sid };
  }

  /**
   * Account SID.
   */
  accountSid?: string | null;
  /**
   * Call SID.
   */
  callSid?: string | null;
  /**
   * User Defined Message Subscription SID.
   */
  sid?: string | null;
  /**
   * The date this User Defined Message Subscription was created.
   */
  dateCreated?: Date | null;
  /**
   * The URI of the User Defined Message Subscription Resource, relative to `https://api.twilio.com`.
   */
  uri?: string | null;

  private get _proxy(): UserDefinedMessageSubscriptionContext {
    this._context =
      this._context ||
      new UserDefinedMessageSubscriptionContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.callSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Remove a UserDefinedMessageSubscriptionInstance
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
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      callSid: this.callSid,
      sid: this.sid,
      dateCreated: this.dateCreated,
      uri: this.uri,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface UserDefinedMessageSubscriptionListInstance {
  (sid: string): UserDefinedMessageSubscriptionContext;
  get(sid: string): UserDefinedMessageSubscriptionContext;

  /**
   * Create a UserDefinedMessageSubscriptionInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserDefinedMessageSubscriptionInstance
   */
  create(
    params: UserDefinedMessageSubscriptionListInstanceCreateOptions,
    callback?: (
      error: Error | null,
      item?: UserDefinedMessageSubscriptionInstance
    ) => any
  ): Promise<UserDefinedMessageSubscriptionInstance>;
  create(
    params: any,
    callback?: any
  ): Promise<UserDefinedMessageSubscriptionInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserDefinedMessageSubscriptionSolution {
  accountSid?: string;
  callSid?: string;
}

interface UserDefinedMessageSubscriptionListInstanceImpl
  extends UserDefinedMessageSubscriptionListInstance {}
class UserDefinedMessageSubscriptionListInstanceImpl
  implements UserDefinedMessageSubscriptionListInstance
{
  _version?: V2010;
  _solution?: UserDefinedMessageSubscriptionSolution;
  _uri?: string;
}

export function UserDefinedMessageSubscriptionListInstance(
  version: V2010,
  accountSid: string,
  callSid: string
): UserDefinedMessageSubscriptionListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(callSid)) {
    throw new Error("Parameter 'callSid' is not valid.");
  }

  const instance = ((sid) =>
    instance.get(sid)) as UserDefinedMessageSubscriptionListInstanceImpl;

  instance.get = function get(sid): UserDefinedMessageSubscriptionContext {
    return new UserDefinedMessageSubscriptionContextImpl(
      version,
      accountSid,
      callSid,
      sid
    );
  };

  instance._version = version;
  instance._solution = { accountSid, callSid };
  instance._uri = `/Accounts/${accountSid}/Calls/${callSid}/UserDefinedMessageSubscriptions.json`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<UserDefinedMessageSubscriptionInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["callback"] === null || params["callback"] === undefined) {
      throw new Error("Required parameter \"params['callback']\" missing.");
    }

    let data: any = {};

    data["Callback"] = params["callback"];
    if (params["idempotencyKey"] !== undefined)
      data["IdempotencyKey"] = params["idempotencyKey"];
    if (params["method"] !== undefined) data["Method"] = params["method"];

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
        new UserDefinedMessageSubscriptionInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.callSid
        )
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
