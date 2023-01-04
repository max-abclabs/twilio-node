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
 * Options to pass to create a UserDefinedMessageInstance
 */
export interface UserDefinedMessageListInstanceCreateOptions {
  /** The User Defined Message in the form of URL-encoded JSON string. */
  content: string;
  /** A unique string value to identify API call. This should be a unique string value per API call and can be a randomly generated. */
  idempotencyKey?: string;
}

export interface UserDefinedMessageListInstance {
  /**
   * Create a UserDefinedMessageInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed UserDefinedMessageInstance
   */
  create(
    params: UserDefinedMessageListInstanceCreateOptions,
    callback?: (error: Error | null, item?: UserDefinedMessageInstance) => any
  ): Promise<UserDefinedMessageInstance>;
  create(params: any, callback?: any): Promise<UserDefinedMessageInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface UserDefinedMessageSolution {
  accountSid?: string;
  callSid?: string;
}

interface UserDefinedMessageListInstanceImpl
  extends UserDefinedMessageListInstance {}
class UserDefinedMessageListInstanceImpl
  implements UserDefinedMessageListInstance
{
  _version?: V2010;
  _solution?: UserDefinedMessageSolution;
  _uri?: string;
}

export function UserDefinedMessageListInstance(
  version: V2010,
  accountSid: string,
  callSid: string
): UserDefinedMessageListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  if (!isValidPathParam(callSid)) {
    throw new Error("Parameter 'callSid' is not valid.");
  }

  const instance = {} as UserDefinedMessageListInstanceImpl;

  instance._version = version;
  instance._solution = { accountSid, callSid };
  instance._uri = `/Accounts/${accountSid}/Calls/${callSid}/UserDefinedMessages.json`;

  instance.create = function create(
    params: any,
    callback?: any
  ): Promise<UserDefinedMessageInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["content"] === null || params["content"] === undefined) {
      throw new Error("Required parameter \"params['content']\" missing.");
    }

    let data: any = {};

    data["Content"] = params["content"];
    if (params["idempotencyKey"] !== undefined)
      data["IdempotencyKey"] = params["idempotencyKey"];

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
        new UserDefinedMessageInstance(
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

interface UserDefinedMessagePayload extends UserDefinedMessageResource {}

interface UserDefinedMessageResource {
  account_sid?: string | null;
  call_sid?: string | null;
  sid?: string | null;
  date_created?: Date | null;
}

export class UserDefinedMessageInstance {
  constructor(
    protected _version: V2010,
    payload: UserDefinedMessageResource,
    accountSid: string,
    callSid: string
  ) {
    this.accountSid = payload.account_sid;
    this.callSid = payload.call_sid;
    this.sid = payload.sid;
    this.dateCreated = deserialize.rfc2822DateTime(payload.date_created);
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
   * User Defined Message SID.
   */
  sid?: string | null;
  /**
   * The date this User Defined Message was created.
   */
  dateCreated?: Date | null;

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
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
