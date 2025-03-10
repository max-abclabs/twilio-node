/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import FlexApi = require('../FlexApi');
import Version = require('../../base/Version');
import { WebChannelsList } from './v2/webChannels';
import { WebChannelsListInstance } from './v2/webChannels';


declare class V2 extends Version {
  /**
   * Initialize the V2 version of FlexApi
   *
   * @param domain - The twilio domain
   */
  constructor(domain: FlexApi);

  readonly webChannels: WebChannelsListInstance;
}

export = V2;
