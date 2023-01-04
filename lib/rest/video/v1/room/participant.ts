/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Video
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";
import { AnonymizeListInstance } from "./participant/anonymize";
import { PublishedTrackListInstance } from "./participant/publishedTrack";
import { SubscribeRulesListInstance } from "./participant/subscribeRules";
import { SubscribedTrackListInstance } from "./participant/subscribedTrack";

type RoomParticipantStatus = "connected" | "disconnected";

/**
 * Options to pass to update a ParticipantInstance
 */
export interface ParticipantContextUpdateOptions {
  /**  */
  status?: RoomParticipantStatus;
}
/**
 * Options to pass to each
 */
export interface ParticipantListInstanceEachOptions {
  /** Read only the participants with this status. Can be: `connected` or `disconnected`. For `in-progress` Rooms the default Status is `connected`, for `completed` Rooms only `disconnected` Participants are returned. */
  status?: RoomParticipantStatus;
  /** Read only the Participants with this [User](https://www.twilio.com/docs/chat/rest/user-resource) `identity` value. */
  identity?: string;
  /** Read only Participants that started after this date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format. */
  dateCreatedAfter?: Date;
  /** Read only Participants that started before this date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format. */
  dateCreatedBefore?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ParticipantListInstanceOptions {
  /** Read only the participants with this status. Can be: `connected` or `disconnected`. For `in-progress` Rooms the default Status is `connected`, for `completed` Rooms only `disconnected` Participants are returned. */
  status?: RoomParticipantStatus;
  /** Read only the Participants with this [User](https://www.twilio.com/docs/chat/rest/user-resource) `identity` value. */
  identity?: string;
  /** Read only Participants that started after this date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format. */
  dateCreatedAfter?: Date;
  /** Read only Participants that started before this date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format. */
  dateCreatedBefore?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ParticipantListInstancePageOptions {
  /** Read only the participants with this status. Can be: `connected` or `disconnected`. For `in-progress` Rooms the default Status is `connected`, for `completed` Rooms only `disconnected` Participants are returned. */
  status?: RoomParticipantStatus;
  /** Read only the Participants with this [User](https://www.twilio.com/docs/chat/rest/user-resource) `identity` value. */
  identity?: string;
  /** Read only Participants that started after this date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format. */
  dateCreatedAfter?: Date;
  /** Read only Participants that started before this date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format. */
  dateCreatedBefore?: Date;
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ParticipantContext {
  anonymize: AnonymizeListInstance;
  publishedTracks: PublishedTrackListInstance;
  subscribeRules: SubscribeRulesListInstance;
  subscribedTracks: SubscribedTrackListInstance;

  /**
   * Fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;

  /**
   * Update a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  update(
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;
  /**
   * Update a ParticipantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  update(
    params: ParticipantContextUpdateOptions,
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ParticipantContextSolution {
  roomSid: string;
  sid: string;
}

export class ParticipantContextImpl implements ParticipantContext {
  protected _solution: ParticipantContextSolution;
  protected _uri: string;

  protected _anonymize?: AnonymizeListInstance;
  protected _publishedTracks?: PublishedTrackListInstance;
  protected _subscribeRules?: SubscribeRulesListInstance;
  protected _subscribedTracks?: SubscribedTrackListInstance;

  constructor(protected _version: V1, roomSid: string, sid: string) {
    if (!isValidPathParam(roomSid)) {
      throw new Error("Parameter 'roomSid' is not valid.");
    }

    if (!isValidPathParam(sid)) {
      throw new Error("Parameter 'sid' is not valid.");
    }

    this._solution = { roomSid, sid };
    this._uri = `/Rooms/${roomSid}/Participants/${sid}`;
  }

  get anonymize(): AnonymizeListInstance {
    this._anonymize =
      this._anonymize ||
      AnonymizeListInstance(
        this._version,
        this._solution.roomSid,
        this._solution.sid
      );
    return this._anonymize;
  }

  get publishedTracks(): PublishedTrackListInstance {
    this._publishedTracks =
      this._publishedTracks ||
      PublishedTrackListInstance(
        this._version,
        this._solution.roomSid,
        this._solution.sid
      );
    return this._publishedTracks;
  }

  get subscribeRules(): SubscribeRulesListInstance {
    this._subscribeRules =
      this._subscribeRules ||
      SubscribeRulesListInstance(
        this._version,
        this._solution.roomSid,
        this._solution.sid
      );
    return this._subscribeRules;
  }

  get subscribedTracks(): SubscribedTrackListInstance {
    this._subscribedTracks =
      this._subscribedTracks ||
      SubscribedTrackListInstance(
        this._version,
        this._solution.roomSid,
        this._solution.sid
      );
    return this._subscribedTracks;
  }

  fetch(
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new ParticipantInstance(
          operationVersion,
          payload,
          instance._solution.roomSid,
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
      | ParticipantContextUpdateOptions
      | ((error: Error | null, item?: ParticipantInstance) => any),
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance> {
    if (typeof params === "function") {
      callback = params as (
        error: Error | null,
        item?: ParticipantInstance
      ) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];

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
        new ParticipantInstance(
          operationVersion,
          payload,
          instance._solution.roomSid,
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

interface ParticipantPayload extends TwilioResponsePayload {
  participants: ParticipantResource[];
}

interface ParticipantResource {
  sid: string;
  room_sid: string;
  account_sid: string;
  status: RoomParticipantStatus;
  identity: string;
  date_created: Date;
  date_updated: Date;
  start_time: Date;
  end_time: Date;
  duration: number;
  url: string;
  links: object;
}

export class ParticipantInstance {
  protected _solution: ParticipantContextSolution;
  protected _context?: ParticipantContext;

  constructor(
    protected _version: V1,
    payload: ParticipantResource,
    roomSid: string,
    sid?: string
  ) {
    this.sid = payload.sid;
    this.roomSid = payload.room_sid;
    this.accountSid = payload.account_sid;
    this.status = payload.status;
    this.identity = payload.identity;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.startTime = deserialize.iso8601DateTime(payload.start_time);
    this.endTime = deserialize.iso8601DateTime(payload.end_time);
    this.duration = deserialize.integer(payload.duration);
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { roomSid, sid: sid || this.sid };
  }

  /**
   * The unique string that identifies the resource
   */
  sid: string;
  /**
   * The SID of the participant\'s room
   */
  roomSid: string;
  /**
   * The SID of the Account that created the resource
   */
  accountSid: string;
  status: RoomParticipantStatus;
  /**
   * The string that identifies the resource\'s User
   */
  identity: string;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated: Date;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated: Date;
  /**
   * The time of participant connected to the room in ISO 8601 format
   */
  startTime: Date;
  /**
   * The time when the participant disconnected from the room in ISO 8601 format
   */
  endTime: Date;
  /**
   * Duration of time in seconds the participant was connected
   */
  duration: number;
  /**
   * The absolute URL of the resource
   */
  url: string;
  /**
   * The URLs of related resources
   */
  links: object;

  private get _proxy(): ParticipantContext {
    this._context =
      this._context ||
      new ParticipantContextImpl(
        this._version,
        this._solution.roomSid,
        this._solution.sid
      );
    return this._context;
  }

  /**
   * Fetch a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  fetch(
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a ParticipantInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  update(
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;
  /**
   * Update a ParticipantInstance
   *
   * @param params - Parameter for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed ParticipantInstance
   */
  update(
    params: ParticipantContextUpdateOptions,
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance>;

  update(
    params?: any,
    callback?: (error: Error | null, item?: ParticipantInstance) => any
  ): Promise<ParticipantInstance> {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the anonymize.
   */
  anonymize(): AnonymizeListInstance {
    return this._proxy.anonymize;
  }

  /**
   * Access the publishedTracks.
   */
  publishedTracks(): PublishedTrackListInstance {
    return this._proxy.publishedTracks;
  }

  /**
   * Access the subscribeRules.
   */
  subscribeRules(): SubscribeRulesListInstance {
    return this._proxy.subscribeRules;
  }

  /**
   * Access the subscribedTracks.
   */
  subscribedTracks(): SubscribedTrackListInstance {
    return this._proxy.subscribedTracks;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      sid: this.sid,
      roomSid: this.roomSid,
      accountSid: this.accountSid,
      status: this.status,
      identity: this.identity,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
      startTime: this.startTime,
      endTime: this.endTime,
      duration: this.duration,
      url: this.url,
      links: this.links,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface ParticipantSolution {
  roomSid: string;
}

export interface ParticipantListInstance {
  _version: V1;
  _solution: ParticipantSolution;
  _uri: string;

  (sid: string): ParticipantContext;
  get(sid: string): ParticipantContext;

  /**
   * Streams ParticipantInstance records from the API.
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
   * @param { ParticipantListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ParticipantListInstanceEachOptions,
    callback?: (item: ParticipantInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage>;
  /**
   * Lists ParticipantInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ParticipantInstance[]) => any
  ): Promise<ParticipantInstance[]>;
  list(
    params: ParticipantListInstanceOptions,
    callback?: (error: Error | null, items: ParticipantInstance[]) => any
  ): Promise<ParticipantInstance[]>;
  /**
   * Retrieve a single page of ParticipantInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ParticipantListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage>;
  page(
    params: ParticipantListInstancePageOptions,
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ParticipantListInstance(
  version: V1,
  roomSid: string
): ParticipantListInstance {
  if (!isValidPathParam(roomSid)) {
    throw new Error("Parameter 'roomSid' is not valid.");
  }

  const instance = ((sid) => instance.get(sid)) as ParticipantListInstance;

  instance.get = function get(sid): ParticipantContext {
    return new ParticipantContextImpl(version, roomSid, sid);
  };

  instance._version = version;
  instance._solution = { roomSid };
  instance._uri = `/Rooms/${roomSid}/Participants`;

  instance.page = function page(
    params?:
      | ParticipantListInstancePageOptions
      | ((error: Error | null, item?: ParticipantPage) => any),
    callback?: (error: Error | null, item?: ParticipantPage) => any
  ): Promise<ParticipantPage> {
    if (typeof params === "function") {
      callback = params as (error: Error | null, item?: ParticipantPage) => any;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["status"] !== undefined) data["Status"] = params["status"];
    if (params["identity"] !== undefined) data["Identity"] = params["identity"];
    if (params["dateCreatedAfter"] !== undefined)
      data["DateCreatedAfter"] = serialize.iso8601DateTime(
        params["dateCreatedAfter"]
      );
    if (params["dateCreatedBefore"] !== undefined)
      data["DateCreatedBefore"] = serialize.iso8601DateTime(
        params["dateCreatedBefore"]
      );
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
        new ParticipantPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: ParticipantPage) => any
  ): Promise<ParticipantPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new ParticipantPage(instance._version, payload, instance._solution)
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

export class ParticipantPage extends Page<
  V1,
  ParticipantPayload,
  ParticipantResource,
  ParticipantInstance
> {
  /**
   * Initialize the ParticipantPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ParticipantSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ParticipantInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ParticipantResource): ParticipantInstance {
    return new ParticipantInstance(
      this._version,
      payload,
      this._solution.roomSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
