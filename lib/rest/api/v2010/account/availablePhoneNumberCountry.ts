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
import { LocalListInstance } from "./availablePhoneNumberCountry/local";
import { MachineToMachineListInstance } from "./availablePhoneNumberCountry/machineToMachine";
import { MobileListInstance } from "./availablePhoneNumberCountry/mobile";
import { NationalListInstance } from "./availablePhoneNumberCountry/national";
import { SharedCostListInstance } from "./availablePhoneNumberCountry/sharedCost";
import { TollFreeListInstance } from "./availablePhoneNumberCountry/tollFree";
import { VoipListInstance } from "./availablePhoneNumberCountry/voip";

/**
 * Options to pass to each
 */
export interface AvailablePhoneNumberCountryListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (
    item: AvailablePhoneNumberCountryInstance,
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
export interface AvailablePhoneNumberCountryListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface AvailablePhoneNumberCountryListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface AvailablePhoneNumberCountryContext {
  local: LocalListInstance;
  machineToMachine: MachineToMachineListInstance;
  mobile: MobileListInstance;
  national: NationalListInstance;
  sharedCost: SharedCostListInstance;
  tollFree: TollFreeListInstance;
  voip: VoipListInstance;

  /**
   * Fetch a AvailablePhoneNumberCountryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AvailablePhoneNumberCountryInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AvailablePhoneNumberCountryInstance
    ) => any
  ): Promise<AvailablePhoneNumberCountryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AvailablePhoneNumberCountryContextSolution {
  accountSid?: string;
  countryCode?: string;
}

export class AvailablePhoneNumberCountryContextImpl
  implements AvailablePhoneNumberCountryContext
{
  protected _solution: AvailablePhoneNumberCountryContextSolution;
  protected _uri: string;

  protected _local?: LocalListInstance;
  protected _machineToMachine?: MachineToMachineListInstance;
  protected _mobile?: MobileListInstance;
  protected _national?: NationalListInstance;
  protected _sharedCost?: SharedCostListInstance;
  protected _tollFree?: TollFreeListInstance;
  protected _voip?: VoipListInstance;

  constructor(
    protected _version: V2010,
    accountSid: string,
    countryCode: string
  ) {
    if (!isValidPathParam(accountSid)) {
      throw new Error("Parameter 'accountSid' is not valid.");
    }

    if (!isValidPathParam(countryCode)) {
      throw new Error("Parameter 'countryCode' is not valid.");
    }

    this._solution = { accountSid, countryCode };
    this._uri = `/Accounts/${accountSid}/AvailablePhoneNumbers/${countryCode}.json`;
  }

  get local(): LocalListInstance {
    this._local =
      this._local ||
      LocalListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    return this._local;
  }

  get machineToMachine(): MachineToMachineListInstance {
    this._machineToMachine =
      this._machineToMachine ||
      MachineToMachineListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    return this._machineToMachine;
  }

  get mobile(): MobileListInstance {
    this._mobile =
      this._mobile ||
      MobileListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    return this._mobile;
  }

  get national(): NationalListInstance {
    this._national =
      this._national ||
      NationalListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    return this._national;
  }

  get sharedCost(): SharedCostListInstance {
    this._sharedCost =
      this._sharedCost ||
      SharedCostListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    return this._sharedCost;
  }

  get tollFree(): TollFreeListInstance {
    this._tollFree =
      this._tollFree ||
      TollFreeListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    return this._tollFree;
  }

  get voip(): VoipListInstance {
    this._voip =
      this._voip ||
      VoipListInstance(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    return this._voip;
  }

  fetch(callback?: any): Promise<AvailablePhoneNumberCountryInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new AvailablePhoneNumberCountryInstance(
          operationVersion,
          payload,
          this._solution.accountSid,
          this._solution.countryCode
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

interface AvailablePhoneNumberCountryPayload extends TwilioResponsePayload {
  countries: AvailablePhoneNumberCountryResource[];
}

interface AvailablePhoneNumberCountryResource {
  country_code?: string | null;
  country?: string | null;
  uri?: string | null;
  beta?: boolean | null;
  subresource_uris?: object | null;
}

export class AvailablePhoneNumberCountryInstance {
  protected _solution: AvailablePhoneNumberCountryContextSolution;
  protected _context?: AvailablePhoneNumberCountryContext;

  constructor(
    protected _version: V2010,
    payload: AvailablePhoneNumberCountryResource,
    accountSid: string,
    countryCode?: string
  ) {
    this.countryCode = payload.country_code;
    this.country = payload.country;
    this.uri = payload.uri;
    this.beta = payload.beta;
    this.subresourceUris = payload.subresource_uris;

    this._solution = {
      accountSid,
      countryCode: countryCode || this.countryCode,
    };
  }

  /**
   * The ISO-3166-1 country code of the country.
   */
  countryCode?: string | null;
  /**
   * The name of the country
   */
  country?: string | null;
  /**
   * The URI of the Country resource, relative to `https://api.twilio.com`
   */
  uri?: string | null;
  /**
   * Whether all phone numbers available in the country are new to the Twilio platform.
   */
  beta?: boolean | null;
  /**
   * A list of related resources identified by their relative URIs
   */
  subresourceUris?: object | null;

  private get _proxy(): AvailablePhoneNumberCountryContext {
    this._context =
      this._context ||
      new AvailablePhoneNumberCountryContextImpl(
        this._version,
        this._solution.accountSid,
        this._solution.countryCode
      );
    return this._context;
  }

  /**
   * Fetch a AvailablePhoneNumberCountryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed AvailablePhoneNumberCountryInstance
   */
  fetch(
    callback?: (
      error: Error | null,
      item?: AvailablePhoneNumberCountryInstance
    ) => any
  ): Promise<AvailablePhoneNumberCountryInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the local.
   */
  local(): LocalListInstance {
    return this._proxy.local;
  }

  /**
   * Access the machineToMachine.
   */
  machineToMachine(): MachineToMachineListInstance {
    return this._proxy.machineToMachine;
  }

  /**
   * Access the mobile.
   */
  mobile(): MobileListInstance {
    return this._proxy.mobile;
  }

  /**
   * Access the national.
   */
  national(): NationalListInstance {
    return this._proxy.national;
  }

  /**
   * Access the sharedCost.
   */
  sharedCost(): SharedCostListInstance {
    return this._proxy.sharedCost;
  }

  /**
   * Access the tollFree.
   */
  tollFree(): TollFreeListInstance {
    return this._proxy.tollFree;
  }

  /**
   * Access the voip.
   */
  voip(): VoipListInstance {
    return this._proxy.voip;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      countryCode: this.countryCode,
      country: this.country,
      uri: this.uri,
      beta: this.beta,
      subresourceUris: this.subresourceUris,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface AvailablePhoneNumberCountryListInstance {
  (countryCode: string): AvailablePhoneNumberCountryContext;
  get(countryCode: string): AvailablePhoneNumberCountryContext;

  /**
   * Streams AvailablePhoneNumberCountryInstance records from the API.
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
      item: AvailablePhoneNumberCountryInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  /**
   * Streams AvailablePhoneNumberCountryInstance records from the API.
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
   * @param { AvailablePhoneNumberCountryListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    params?: AvailablePhoneNumberCountryListInstanceEachOptions,
    callback?: (
      item: AvailablePhoneNumberCountryInstance,
      done: (err?: Error) => void
    ) => void
  ): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of AvailablePhoneNumberCountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    callback?: (
      error: Error | null,
      items: AvailablePhoneNumberCountryPage
    ) => any
  ): Promise<AvailablePhoneNumberCountryPage>;
  /**
   * Retrieve a single target page of AvailablePhoneNumberCountryInstance records from the API.
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
    callback?: (
      error: Error | null,
      items: AvailablePhoneNumberCountryPage
    ) => any
  ): Promise<AvailablePhoneNumberCountryPage>;
  getPage(
    params?: any,
    callback?: any
  ): Promise<AvailablePhoneNumberCountryPage>;
  /**
   * Lists AvailablePhoneNumberCountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (
      error: Error | null,
      items: AvailablePhoneNumberCountryInstance[]
    ) => any
  ): Promise<AvailablePhoneNumberCountryInstance[]>;
  /**
   * Lists AvailablePhoneNumberCountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AvailablePhoneNumberCountryListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    params?: AvailablePhoneNumberCountryListInstanceOptions,
    callback?: (
      error: Error | null,
      items: AvailablePhoneNumberCountryInstance[]
    ) => any
  ): Promise<AvailablePhoneNumberCountryInstance[]>;
  list(
    params?: any,
    callback?: any
  ): Promise<AvailablePhoneNumberCountryInstance[]>;
  /**
   * Retrieve a single page of AvailablePhoneNumberCountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (
      error: Error | null,
      items: AvailablePhoneNumberCountryPage
    ) => any
  ): Promise<AvailablePhoneNumberCountryPage>;
  /**
   * Retrieve a single page of AvailablePhoneNumberCountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { AvailablePhoneNumberCountryListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    params: AvailablePhoneNumberCountryListInstancePageOptions,
    callback?: (
      error: Error | null,
      items: AvailablePhoneNumberCountryPage
    ) => any
  ): Promise<AvailablePhoneNumberCountryPage>;
  page(params?: any, callback?: any): Promise<AvailablePhoneNumberCountryPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface AvailablePhoneNumberCountrySolution {
  accountSid?: string;
}

interface AvailablePhoneNumberCountryListInstanceImpl
  extends AvailablePhoneNumberCountryListInstance {}
class AvailablePhoneNumberCountryListInstanceImpl
  implements AvailablePhoneNumberCountryListInstance
{
  _version?: V2010;
  _solution?: AvailablePhoneNumberCountrySolution;
  _uri?: string;
}

export function AvailablePhoneNumberCountryListInstance(
  version: V2010,
  accountSid: string
): AvailablePhoneNumberCountryListInstance {
  if (!isValidPathParam(accountSid)) {
    throw new Error("Parameter 'accountSid' is not valid.");
  }

  const instance = ((countryCode) =>
    instance.get(countryCode)) as AvailablePhoneNumberCountryListInstanceImpl;

  instance.get = function get(countryCode): AvailablePhoneNumberCountryContext {
    return new AvailablePhoneNumberCountryContextImpl(
      version,
      accountSid,
      countryCode
    );
  };

  instance._version = version;
  instance._solution = { accountSid };
  instance._uri = `/Accounts/${accountSid}/AvailablePhoneNumbers.json`;

  instance.page = function page(
    params?: any,
    callback?: any
  ): Promise<AvailablePhoneNumberCountryPage> {
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
        new AvailablePhoneNumberCountryPage(
          operationVersion,
          payload,
          this._solution
        )
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
  ): Promise<AvailablePhoneNumberCountryPage> {
    let operationPromise = this._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    operationPromise = operationPromise.then(
      (payload) =>
        new AvailablePhoneNumberCountryPage(
          this._version,
          payload,
          this._solution
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

export class AvailablePhoneNumberCountryPage extends Page<
  V2010,
  AvailablePhoneNumberCountryPayload,
  AvailablePhoneNumberCountryResource,
  AvailablePhoneNumberCountryInstance
> {
  /**
   * Initialize the AvailablePhoneNumberCountryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2010,
    response: Response<string>,
    solution: AvailablePhoneNumberCountrySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of AvailablePhoneNumberCountryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(
    payload: AvailablePhoneNumberCountryResource
  ): AvailablePhoneNumberCountryInstance {
    return new AvailablePhoneNumberCountryInstance(
      this._version,
      payload,
      this._solution.accountSid
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
