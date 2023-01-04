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
import Page, { TwilioResponsePayload } from "../../../../../base/Page";
import Response from "../../../../../http/response";
import V2 from "../../../V2";
const deserialize = require("../../../../../base/deserialize");
const serialize = require("../../../../../base/serialize");
import { isValidPathParam } from "../../../../../base/utility";
import { NotificationListInstance } from "./challenge/notification";

type ChallengeChallengeReasons = "none" | "not_needed" | "not_requested";

type ChallengeChallengeStatuses = "pending" | "expired" | "approved" | "denied";

type ChallengeFactorTypes = "push" | "totp";

type ChallengeListOrders = "asc" | "desc";

/**
 * Options to pass to update a ChallengeInstance
 */
export interface ChallengeContextUpdateOptions {
  /** The optional payload needed to verify the Challenge. E.g., a TOTP would use the numeric code. For `TOTP` this value must be between 3 and 8 characters long. For `Push` this value can be up to 5456 characters in length */
  authPayload?: string;
  /** Custom metadata associated with the challenge. This is added by the Device/SDK directly to allow for the inclusion of device information. It must be a stringified JSON with only strings values eg. `{\\\"os\\\": \\\"Android\\\"}`. Can be up to 1024 characters in length. */
  metadata?: any;
}

/**
 * Options to pass to create a ChallengeInstance
 */
export interface ChallengeListInstanceCreateOptions {
  /** The unique SID identifier of the Factor. */
  factorSid: string;
  /** The date-time when this Challenge expires, given in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format. The default value is five (5) minutes after Challenge creation. The max value is sixty (60) minutes after creation. */
  expirationDate?: Date;
  /** Shown to the user when the push notification arrives. Required when `factor_type` is `push`. Can be up to 256 characters in length */
  "details.message"?: string;
  /** A list of objects that describe the Fields included in the Challenge. Each object contains the label and value of the field, the label can be up to 36 characters in length and the value can be up to 128 characters in length. Used when `factor_type` is `push`. There can be up to 20 details fields. */
  "details.fields"?: Array<any>;
  /** Details provided to give context about the Challenge. Not shown to the end user. It must be a stringified JSON with only strings values eg. `{\\\"ip\\\": \\\"172.168.1.234\\\"}`. Can be up to 1024 characters in length */
  hiddenDetails?: any;
  /** Optional payload used to verify the Challenge upon creation. Only used with a Factor of type `totp` to carry the TOTP code that needs to be verified. For `TOTP` this value must be between 3 and 8 characters long. */
  authPayload?: string;
}
/**
 * Options to pass to each
 */
export interface ChallengeListInstanceEachOptions {
  /** The unique SID identifier of the Factor. */
  factorSid?: string;
  /** The Status of the Challenges to fetch. One of `pending`, `expired`, `approved` or `denied`. */
  status?: ChallengeChallengeStatuses;
  /** The desired sort order of the Challenges list. One of `asc` or `desc` for ascending and descending respectively. Defaults to `asc`. */
  order?: ChallengeListOrders;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ChallengeInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ChallengeListInstanceOptions {
  /** The unique SID identifier of the Factor. */
  factorSid?: string;
  /** The Status of the Challenges to fetch. One of `pending`, `expired`, `approved` or `denied`. */
  status?: ChallengeChallengeStatuses;
  /** The desired sort order of the Challenges list. One of `asc` or `desc` for ascending and descending respectively. Defaults to `asc`. */
  order?: ChallengeListOrders;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ChallengeListInstancePageOptions {
  /** The unique SID identifier of the Factor. */
  factorSid?: string;
  /** The Status of the Challenges to fetch. One of `pending`, `expired`, `approved` or `denied`. */
  status?: ChallengeChallengeStatuses;
  /** The desired sort order of the Challenges list. One of `asc` or `desc` for ascending and descending respectively. Defaults to `asc`. */
  order?: ChallengeListOrders;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ChallengeContext {
  notifications: NotificationListInstance;

  /**
   * Fetch a ChallengeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChallengeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance>;

  /**
   * Update a ChallengeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChallengeInstance
   */
  update(
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance>;
  /**
   * Update a ChallengeInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChallengeInstance
   */
  update(
    params: ChallengeContextUpdateOptions,
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ChallengeContextSolution {
  serviceSid: string;
  identity: string;
  sid: string;
}

export class ChallengeContextImpl implements ChallengeContext {
  protected _solution: ChallengeContextSolution;
  protected _uri: string;

  protected _notifications?: NotificationListInstance;

  constructor(
    protected _version: V2,
    serviceSid: string,
    identity: string,
    sid: string
  ) {
    if (!isValidPathParam(serviceSid)) {
      throw new Error("Parameter 'serviceSid' is not valid.");
    }

    if (!isValidPathParam(identity)) {
      throw new Error("Parameter 'identity' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { serviceSid, identity, sid };
    this._uri = `/Services/${serviceSid}/Entities/${identity}/Challenges/${sid}`;
  }

  get notifications(): NotificationListInstance {
    this._notifications =
      this._notifications ||
      NotificationListInstance(
        this._version,
        this._solution.serviceSid,
        this._solution.identity,
        this._solution.sid
      );
    return this._notifications;
  }

  fetch(
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChallengeInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.identity,
          instance._solution.sid
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
      | ChallengeContextUpdateOptions
      | ((error: Error | null, item?: ChallengeInstance) => any),
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: ChallengeInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["authPayload"] !== undefined)
      data["AuthPayload"] = params["authPayload"];
    if (params["metadata"] !== undefined)
      data["Metadata"] = serialize.object(params["metadata"]);

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
        new ChallengeInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.identity,
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

interface ChallengePayload extends TwilioResponsePayload {
  challenges: ChallengeResource[];
}

interface ChallengeResource {
  sid: string;
  account_sid: string;
  service_sid: string;
  entity_sid: string;
  identity: string;
  factor_sid: string;
  date_created: Date;
  date_updated: Date;
  date_responded: Date;
  expiration_date: Date;
  status: ChallengeChallengeStatuses;
  responded_reason: ChallengeChallengeReasons;
  details: any;
  hidden_details: any;
  metadata: any;
  factor_type: ChallengeFactorTypes;
  url: string;
  links: object;
}

export class ChallengeInstance {
  protected _solution: ChallengeContextSolution;
  protected _context?: ChallengeContext;

  constructor(
    protected _version: V2,
    payload: ChallengeResource,
    serviceSid: string,
    identity: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.accountSid = payload.account_sid;
    this.serviceSid = payload.service_sid;
    this.entitySid = payload.entity_sid;
    this.identity = payload.identity;
    this.factorSid = payload.factor_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.dateResponded = deserialize.iso8601DateTime(payload.date_responded);
    this.expirationDate = deserialize.iso8601DateTime(payload.expiration_date);
    this.status = payload.status;
    this.respondedReason = payload.responded_reason;
    this.details = payload.details;
    this.hiddenDetails = payload.hidden_details;
    this.metadata = payload.metadata;
    this.factorType = payload.factor_type;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { serviceSid, identity, sid: sid || this.sid };
  }

  /**
   * A string that uniquely identifies this Challenge.
   */
  sid: string;
  /**
   * Account Sid.
   */
  accountSid: string;
  /**
   * Service Sid.
   */
  serviceSid: string;
  /**
   * Entity Sid.
   */
  entitySid: string;
  /**
   * Unique external identifier of the Entity
   */
  identity: string;
  /**
   * Factor Sid.
   */
  factorSid: string;
  /**
   * The date this Challenge was created
   */
  dateCreated: Date;
  /**
   * The date this Challenge was updated
   */
  dateUpdated: Date;
  /**
   * The date this Challenge was responded
   */
  dateResponded: Date;
  /**
   * The date-time when this Challenge expires
   */
  expirationDate: Date;
  status: ChallengeChallengeStatuses;
  respondedReason: ChallengeChallengeReasons;
  /**
   * Details about the Challenge.
   */
  details: any;
  /**
   * Hidden details about the Challenge
   */
  hiddenDetails: any;
  /**
   * Metadata of the challenge.
   */
  metadata: any;
  factorType: ChallengeFactorTypes;
  /**
   * The URL of this resource.
   */
  url: string;
  /**
   * Nested resource URLs.
   */
  links: object;

  private get _proxy(): ChallengeContext {
    this._context =
      this._context ||
      new ChallengeContextImpl(
        this._version,
        this._solution.serviceSid,
        this._solution.identity,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a ChallengeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChallengeInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ChallengeInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChallengeInstance
   */
  update(
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance>;
  /**
   * Update a ChallengeInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChallengeInstance
   */
  update(
    params: ChallengeContextUpdateOptions,
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the notifications.
   */
  notifications(): NotificationListInstance {
    return this._proxy.notifications;
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
      entitySid: this.entitySid,
      identity: this.identity,
      factorSid: this.factorSid,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      dateResponded: this.dateResponded,
      expirationDate: this.expirationDate,
      status: this.status,
      respondedReason: this.respondedReason,
      details: this.details,
      hiddenDetails: this.hiddenDetails,
      metadata: this.metadata,
      factorType: this.factorType,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ChallengeSolution {
  serviceSid: string;
  identity: string;
}

export interface ChallengeListInstance {
  _version: V2;
  _solution: ChallengeSolution;
  _uri: string;

  (sid: string): ChallengeContext;
  get(sid: string): ChallengeContext;

  /**
   * Create a ChallengeInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ChallengeInstance
   */
  create(
    params: ChallengeListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance>;

  /**
   * Streams ChallengeInstance records from the API.
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
   * @param { ChallengeListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ChallengeInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ChallengeListInstanceEachOptions,
    callback?: (item: ChallengeInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ChallengeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ChallengePage) => any
  ): Promise<ChallengePage>;
  /**
   * Lists ChallengeInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChallengeListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ChallengeInstance[]) => any
  ): Promise<ChallengeInstance[]>;
  list(
    params: ChallengeListInstanceOptions,
    callback?: (error: Error | null, items: ChallengeInstance[]) => any
  ): Promise<ChallengeInstance[]>;
  /**
   * Retrieve a single page of ChallengeInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChallengeListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ChallengePage) => any
  ): Promise<ChallengePage>;
  page(
    params: ChallengeListInstancePageOptions,
    callback?: (error: Error | null, items: ChallengePage) => any
  ): Promise<ChallengePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ChallengeListInstance(
  version: V2,
  serviceSid: string,
  identity: string
): ChallengeListInstance {
  if (!isValidPathParam(serviceSid)) {
    throw new Error("Parameter 'serviceSid' is not valid.");
  }

  if (!isValidPathParam(identity)) {
    throw new Error("Parameter 'identity' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ChallengeListInstance;

  instance.get = function get(sid): ChallengeContext {
    return new ChallengeContextImpl(version, serviceSid, identity, sid);
  };

  instance._version = version;
  instance._solution = { serviceSid, identity };
  instance._uri = `/Services/${serviceSid}/Entities/${identity}/Challenges`;

  instance.create = function create(
    params: ChallengeListInstanceCreateOptions,
    callback?: (error: Error | null, item?: ChallengeInstance) => any
  ): Promise<ChallengeInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["factorSid"] === null || params["factorSid"] === undefined) {
      throw new Error("Required parameter \"params['factorSid']\" missing.");
    }

    let data: any = {};

    data["FactorSid"] = params["factorSid"];
    if (params["expirationDate"] !== undefined)
      data["ExpirationDate"] = serialize.iso8601DateTime(
        params["expirationDate"]
      );
    if (params["details.message"] !== undefined)
      data["Details.Message"] = params["details.message"];
    if (params["details.fields"] !== undefined)
      data["Details.Fields"] = serialize.map(params["details.fields"], (e) =>
        serialize.object(e)
      );
    if (params["hiddenDetails"] !== undefined)
      data["HiddenDetails"] = serialize.object(params["hiddenDetails"]);
    if (params["authPayload"] !== undefined)
      data["AuthPayload"] = params["authPayload"];

    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ChallengeInstance(
          operationVersion,
          payload,
          instance._solution.serviceSid,
          instance._solution.identity
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };

  instance.page = function page(
    params?:
      | ChallengeListInstancePageOptions
      | ((error: Error | null, item?: ChallengePage) => any),
    callback?: (error: Error | null, item?: ChallengePage) => any
  ): Promise<ChallengePage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: ChallengePage) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["factorSid"] !== undefined)
      data["FactorSid"] = params["factorSid"];
    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["order"] !== undefined) data["Order"] = params["order"];
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
        new ChallengePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: ChallengePage) => any
  ): Promise<ChallengePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ChallengePage(instance._version, payload, instance._solution)
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

export class ChallengePage extends Page<
  V2,
  ChallengePayload,
  ChallengeResource,
  ChallengeInstance
> {
  /**
   * Initialize the ChallengePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: ChallengeSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ChallengeInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ChallengeResource): ChallengeInstance {
    return new ChallengeInstance(
      this._version,
      payload,
      this._solution.serviceSid,
      this._solution.identity
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
