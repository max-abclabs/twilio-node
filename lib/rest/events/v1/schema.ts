/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Events
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { isValidPathParam } from "../../../base/utility";
import { SchemaVersionListInstance } from "./schema/schemaVersion";

export interface SchemaContext {
  versions: SchemaVersionListInstance;

  /**
   * Fetch a SchemaInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SchemaInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SchemaInstance) => any
  ): Promise<SchemaInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SchemaContextSolution {
  id?: string;
}

export class SchemaContextImpl implements SchemaContext {
  protected _solution: SchemaContextSolution;
  protected _uri: string;

  protected _versions?: SchemaVersionListInstance;

  constructor(protected _version: V1, id: string) {
    if (!isValidPathParam(id)) {
      throw new Error("Parameter 'id' is not valid.");
    }

    this._solution = { id };
    this._uri = `/Schemas/${id}`;
  }

  get versions(): SchemaVersionListInstance {
    this._versions =
      this._versions ||
      SchemaVersionListInstance(this._version, this._solution.id);
    return this._versions;
  }

  fetch(callback?: any): Promise<SchemaInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new SchemaInstance(operationVersion, payload, this._solution.id)
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

interface SchemaPayload extends SchemaResource {}

interface SchemaResource {
  id?: string | null;
  url?: string | null;
  links?: object | null;
  latest_version_date_created?: Date | null;
  latest_version?: number | null;
}

export class SchemaInstance {
  protected _solution: SchemaContextSolution;
  protected _context?: SchemaContext;

  constructor(protected _version: V1, payload: SchemaResource, id?: string) {
    this.id = payload.id;
    this.url = payload.url;
    this.links = payload.links;
    this.latestVersionDateCreated = deserialize.iso8601DateTime(
      payload.latest_version_date_created
    );
    this.latestVersion = deserialize.integer(payload.latest_version);

    this._solution = { id: id || this.id };
  }

  /**
   * Schema Identifier.
   */
  id?: string | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;
  /**
   * Nested resource URLs.
   */
  links?: object | null;
  /**
   * The date that the latest schema version was created.
   */
  latestVersionDateCreated?: Date | null;
  /**
   * Latest schema version.
   */
  latestVersion?: number | null;

  private get _proxy(): SchemaContext {
    this._context =
      this._context || new SchemaContextImpl(this._version, this._solution.id);
    return this._context;
  }

  /**
   * Fetch a SchemaInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed SchemaInstance
   */
  fetch(
    callback?: (error: Error | null, item?: SchemaInstance) => any
  ): Promise<SchemaInstance> {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the versions.
   */
  versions(): SchemaVersionListInstance {
    return this._proxy.versions;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      id: this.id,
      url: this.url,
      links: this.links,
      latestVersionDateCreated: this.latestVersionDateCreated,
      latestVersion: this.latestVersion,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface SchemaListInstance {
  (id: string): SchemaContext;
  get(id: string): SchemaContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface SchemaSolution {}

interface SchemaListInstanceImpl extends SchemaListInstance {}
class SchemaListInstanceImpl implements SchemaListInstance {
  _version?: V1;
  _solution?: SchemaSolution;
  _uri?: string;
}

export function SchemaListInstance(version: V1): SchemaListInstance {
  const instance = ((id) => instance.get(id)) as SchemaListInstanceImpl;

  instance.get = function get(id): SchemaContext {
    return new SchemaContextImpl(version, id);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

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
