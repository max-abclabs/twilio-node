/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../base/Page";
import Response from "../../../http/response";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";

type VerificationAttemptChannels = "sms" | "call" | "email" | "whatsapp";

type VerificationAttemptConversionStatus = "converted" | "unconverted";

/**
 * Options to pass to each
 */
export interface VerificationAttemptListInstanceEachOptions {
  /** Datetime filter used to query Verification Attempts created after this datetime. Given as GMT in RFC 2822 format. */
  dateCreatedAfter?: Date;
  /** Datetime filter used to query Verification Attempts created before this datetime. Given as GMT in RFC 2822 format. */
  dateCreatedBefore?: Date;
  /** Destination of a verification. It is phone number in E.164 format. */
  "channelData.to"?: string;
  /** Filter used to query Verification Attempts sent to the specified destination country. */
  country?: string;
  /** Filter used to query Verification Attempts by communication channel. Valid values are `SMS` and `CALL` */
  channel?: VerificationAttemptChannels;
  /** Filter used to query Verification Attempts by verify service. Only attempts of the provided SID will be returned. */
  verifyServiceSid?: string;
  /** Filter used to return all the Verification Attempts of a single verification. Only attempts of the provided verification SID will be returned. */
  verificationSid?: string;
  /** Filter used to query Verification Attempts by conversion status. Valid values are `UNCONVERTED`, for attempts that were not converted, and `CONVERTED`, for attempts that were confirmed. */
  status?: VerificationAttemptConversionStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: VerificationAttemptInstance,
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
export interface VerificationAttemptListInstanceOptions {
  /** Datetime filter used to query Verification Attempts created after this datetime. Given as GMT in RFC 2822 format. */
  dateCreatedAfter?: Date;
  /** Datetime filter used to query Verification Attempts created before this datetime. Given as GMT in RFC 2822 format. */
  dateCreatedBefore?: Date;
  /** Destination of a verification. It is phone number in E.164 format. */
  "channelData.to"?: string;
  /** Filter used to query Verification Attempts sent to the specified destination country. */
  country?: string;
  /** Filter used to query Verification Attempts by communication channel. Valid values are `SMS` and `CALL` */
  channel?: VerificationAttemptChannels;
  /** Filter used to query Verification Attempts by verify service. Only attempts of the provided SID will be returned. */
  verifyServiceSid?: string;
  /** Filter used to return all the Verification Attempts of a single verification. Only attempts of the provided verification SID will be returned. */
  verificationSid?: string;
  /** Filter used to query Verification Attempts by conversion status. Valid values are `UNCONVERTED`, for attempts that were not converted, and `CONVERTED`, for attempts that were confirmed. */
  status?: VerificationAttemptConversionStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface VerificationAttemptListInstancePageOptions {
  /** Datetime filter used to query Verification Attempts created after this datetime. Given as GMT in RFC 2822 format. */
  dateCreatedAfter?: Date;
  /** Datetime filter used to query Verification Attempts created before this datetime. Given as GMT in RFC 2822 format. */
  dateCreatedBefore?: Date;
  /** Destination of a verification. It is phone number in E.164 format. */
  "channelData.to"?: string;
  /** Filter used to query Verification Attempts sent to the specified destination country. */
  country?: string;
  /** Filter used to query Verification Attempts by communication channel. Valid values are `SMS` and `CALL` */
  channel?: VerificationAttemptChannels;
  /** Filter used to query Verification Attempts by verify service. Only attempts of the provided SID will be returned. */
  verifyServiceSid?: string;
  /** Filter used to return all the Verification Attempts of a single verification. Only attempts of the provided verification SID will be returned. */
  verificationSid?: string;
  /** Filter used to query Verification Attempts by conversion status. Valid values are `UNCONVERTED`, for attempts that were not converted, and `CONVERTED`, for attempts that were confirmed. */
  status?: VerificationAttemptConversionStatus;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface VerificationAttemptContext {
  /**
   * Fetch a VerificationAttemptInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed VerificationAttemptInstance
   */
  fetch(
    callback?: (error: Error | null, item?: VerificationAttemptInstance) => any
  ): Promise<VerificationAttemptInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface VerificationAttemptContextSolution {
  sid: string;
}

export class VerificationAttemptContextImpl
  implements VerificationAttemptContext
{
  protected _solution: VerificationAttemptContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, sid: string) {
    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { sid };
    this._uri = `/Attempts/${sid}`;
  }

  fetch(
    callback?: (error: Error | null, item?: VerificationAttemptInstance) => any
  ): Promise<VerificationAttemptInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new VerificationAttemptInstance(
          operationVersion,
          payload,
          instance._solution.sid
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

interface VerificationAttemptPayload extends TwilioResponsePayload {
  attempts: VerificationAttemptResource[];
}

interface VerificationAttemptResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  verification_sid: string;
  date_created: Date;
  date_updated: Date;
  conversion_status: VerificationAttemptConversionStatus;
  channel: VerificationAttemptChannels;
  price: any;
  channel_data: any;
  url: string;
}

export class VerificationAttemptInstance {
  protected _solution: VerificationAttemptContextSolution;
  protected _context?: VerificationAttemptContext;

  constructor(
    protected _version: V2,
    payload: VerificationAttemptResource,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.verificationSid = payload.verification_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.conversionStatus = payload.conversion_status;
    this.channel = payload.channel;
    this.price = payload.price;
    this.channelData = payload.channel_data;
    this.url = payload.url;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID that uniquely identifies the verification attempt.
   */
  sid: string;
  /**
   * The SID of the Account that created the verification.
   */
  accountSid: string;
  /**
   * The SID of the verify service that generated this attempt.
   */
  serviceSid: string;
  /**
   * The SID of the verification that generated this attempt.
   */
  verificationSid: string;
  /**
   * The date this Attempt was created
   */
  dateCreated: Date;
  /**
   * The date this Attempt was updated
   */
  dateUpdated: Date;
  conversionStatus: VerificationAttemptConversionStatus;
  channel: VerificationAttemptChannels;
  /**
   * An object containing the charge for this verification attempt.
   */
  price: any;
  /**
   * An object containing the channel specific information for an attempt.
   */
  channelData: any;
  url: string;

  private get _proxy(): VerificationAttemptContext {
    this._context =
      this._context ||
      new VerificationAttemptContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Fetch a VerificationAttemptInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed VerificationAttemptInstance
   */
  fetch(
    callback?: (error: Error | null, item?: VerificationAttemptInstance) => any
  ): Promise<VerificationAttemptInstance> {
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
      serviceSid: this.serviceSid,
      verificationSid: this.verificationSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      conversionStatus: this.conversionStatus,
      channel: this.channel,
      price: this.price,
      channelData: this.channelData,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface VerificationAttemptSolution {}

export interface VerificationAttemptListInstance {
  _version: V2;
  _solution: VerificationAttemptSolution;
  _uri: string;

  (sid: string): VerificationAttemptContext;
  get(sid: string): VerificationAttemptContext;

  /**
   * Streams VerificationAttemptInstance records from the API.
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
   * @param { VerificationAttemptListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (
      item: VerificationAttemptInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(
    params: VerificationAttemptListInstanceEachOptions,
    callback?: (
      item: VerificationAttemptInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Retrieve a single target page of VerificationAttemptInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: VerificationAttemptPage) => any
  ): Promise<VerificationAttemptPage>;
  /**
   * Lists VerificationAttemptInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { VerificationAttemptListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: VerificationAttemptInstance[]
    ) => any
  ): Promise<VerificationAttemptInstance[]>;
  list(
    params: VerificationAttemptListInstanceOptions,
    callback?: (
      error: Error | null,
      items: VerificationAttemptInstance[]
    ) => any
  ): Promise<VerificationAttemptInstance[]>;
  /**
   * Retrieve a single page of VerificationAttemptInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { VerificationAttemptListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: VerificationAttemptPage) => any
  ): Promise<VerificationAttemptPage>;
  page(
    params: VerificationAttemptListInstancePageOptions,
    callback?: (error: Error | null, items: VerificationAttemptPage) => any
  ): Promise<VerificationAttemptPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function VerificationAttemptListInstance(
  version: V2
): VerificationAttemptListInstance {
  const instance = ((sid) =>
    instance.get(sid)) as VerificationAttemptListInstance;

  instance.get = function get(sid): VerificationAttemptContext {
    return new VerificationAttemptContextImpl(version, sid);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Attempts`;

  instance.page = function page(
    params?:
      | VerificationAttemptListInstancePageOptions
      | ((error: Error | null, item?: VerificationAttemptPage) => any),
    callback?: (error: Error | null, item?: VerificationAttemptPage) => any
  ): Promise<VerificationAttemptPage> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: VerificationAttemptPage
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreatedAfter"] = serialize.iso8601DateTime(
        params["dateCreatedAfter"]
      );
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreatedBefore"] = serialize.iso8601DateTime(
        params["dateCreatedBefore"]
      );
    if (params["channelData.to"] !== undefined)
      data["ChannelData.To"] = params["channelData.to"];
    if (params["country"] !== undefined) data["Country"] = params["country"];
    if (params["channel"] !== undefined) data["Channel"] = params["channel"];
    if (params["verifyServiceSid"] !== undefined)
      data["VerifyServiceSid"] = params["verifyServiceSid"];
    if (params["verificationSid"] !== undefined)
      data["VerificationSid"] = params["verificationSid"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
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
        new VerificationAttemptPage(
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
    callback?: (error: Error | null, items: VerificationAttemptPage) => any
  ): Promise<VerificationAttemptPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new VerificationAttemptPage(
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

export class VerificationAttemptPage extends Page<
  V2,
  VerificationAttemptPayload,
  VerificationAttemptResource,
  VerificationAttemptInstance
> {
  /**
   * Initialize the VerificationAttemptPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: VerificationAttemptSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of VerificationAttemptInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: VerificationAttemptResource
  ): VerificationAttemptInstance {
    return new VerificationAttemptInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
