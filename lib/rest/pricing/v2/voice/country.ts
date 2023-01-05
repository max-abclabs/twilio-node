/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Pricing
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V2 from "../../V2";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export class PricingV2TrunkingCountryInstanceOriginatingCallPrices {
  "basePrice"?: number;
  "currentPrice"?: number;
  "numberType"?: string;
}

export class PricingV2TrunkingCountryInstanceTerminatingPrefixPrices {
  "originationPrefixes"?: Array<string>;
  "destinationPrefixes"?: Array<string>;
  "basePrice"?: number;
  "currentPrice"?: number;
  "friendlyName"?: string;
}

/**
 * Options to pass to each
 */
export interface CountryListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: CountryInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface CountryListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface CountryListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface CountryContext {
  /**
   * Fetch a CountryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CountryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CountryInstance) => any
  ): Promise<CountryInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface CountryContextSolution {
  isoCountry: string;
}

export class CountryContextImpl implements CountryContext {
  protected _solution: CountryContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, isoCountry: string) {
    if (!isValidPathParam(isoCountry)) {
      throw new Error("Parameter 'isoCountry' is not valid.");
    }

    this._solution = { isoCountry };
    this._uri = `/Voice/Countries/${isoCountry}`;
  }

  fetch(
    callback?: (error: Error | null, item?: CountryInstance) => any
  ): Promise<CountryInstance> {
    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new CountryInstance(
          operationVersion,
          payload,
          instance._solution.isoCountry
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

interface CountryPayload extends TwilioResponsePayload {
  countries: CountryResource[];
}

interface CountryResource {
  country: string;
  iso_country: string;
  outbound_prefix_prices: Array<PricingV2TrunkingCountryInstanceTerminatingPrefixPrices>;
  inbound_call_prices: Array<PricingV2TrunkingCountryInstanceOriginatingCallPrices>;
  price_unit: string;
  url: string;
}

export class CountryInstance {
  protected _solution: CountryContextSolution;
  protected _context?: CountryContext;

  constructor(
    protected _version: V2,
    payload: CountryResource,
    isoCountry?: string
  ) {
    this.country = payload.country;
    this.isoCountry = payload.iso_country;
    this.outboundPrefixPrices = payload.outbound_prefix_prices;
    this.inboundCallPrices = payload.inbound_call_prices;
    this.priceUnit = payload.price_unit;
    this.url = payload.url;

    this._solution = { isoCountry: isoCountry || this.isoCountry };
  }

  /**
   * The name of the country
   */
  country: string;
  /**
   * The ISO country code
   */
  isoCountry: string;
  /**
   * The list of OutboundPrefixPriceWithOrigin records
   */
  outboundPrefixPrices: Array<PricingV2TrunkingCountryInstanceTerminatingPrefixPrices>;
  /**
   * The list of InboundCallPrice records
   */
  inboundCallPrices: Array<PricingV2TrunkingCountryInstanceOriginatingCallPrices>;
  /**
   * The currency in which prices are measured, in ISO 4127 format (e.g. usd, eur, jpy)
   */
  priceUnit: string;
  /**
   * The absolute URL of the resource
   */
  url: string;

  private get _proxy(): CountryContext {
    this._context =
      this._context ||
      new CountryContextImpl(this._version, this._solution.isoCountry);
    return this._context;
  }

  /**
   * Fetch a CountryInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed CountryInstance
   */
  fetch(
    callback?: (error: Error | null, item?: CountryInstance) => any
  ): Promise<CountryInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      country: this.country,
      isoCountry: this.isoCountry,
      outboundPrefixPrices: this.outboundPrefixPrices,
      inboundCallPrices: this.inboundCallPrices,
      priceUnit: this.priceUnit,
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface CountrySolution {}

export interface CountryListInstance {
  _version: V2;
  _solution: CountrySolution;
  _uri: string;

  (isoCountry: string): CountryContext;
  get(isoCountry: string): CountryContext;

  /**
   * Streams CountryInstance records from the API.
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
   * @param { CountryListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: CountryInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: CountryListInstanceEachOptions,
    callback?: (item: CountryInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage>;
  /**
   * Lists CountryInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CountryListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: CountryInstance[]) => any
  ): Promise<CountryInstance[]>;
  list(
    params: CountryListInstanceOptions,
    callback?: (error: Error | null, items: CountryInstance[]) => any
  ): Promise<CountryInstance[]>;
  /**
   * Retrieve a single page of CountryInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { CountryListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage>;
  page(
    params: CountryListInstancePageOptions,
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function CountryListInstance(version: V2): CountryListInstance {
  const instance = ((isoCountry) =>
    instance.get(isoCountry)) as CountryListInstance;

  instance.get = function get(isoCountry): CountryContext {
    return new CountryContextImpl(version, isoCountry);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = `/Voice/Countries`;

  instance.page = function page(
    params?:
      | CountryListInstancePageOptions
      | ((error: Error | null, items: CountryPage) => any),
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage> {
    if (typeof params === "function") {
      callback = params;
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
        new CountryPage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: CountryPage) => any
  ): Promise<CountryPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new CountryPage(instance._version, payload, instance._solution)
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

export class CountryPage extends Page<
  V2,
  CountryPayload,
  CountryResource,
  CountryInstance
> {
  /**
   * Initialize the CountryPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V2,
    response: Response<string>,
    solution: CountrySolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of CountryInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CountryResource): CountryInstance {
    return new CountryInstance(this._version, payload);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
