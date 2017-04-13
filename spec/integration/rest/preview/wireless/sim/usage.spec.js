'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Usage', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.preview.wireless.sims('DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .usage().fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        simSid: 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://preview.twilio.com/wireless/Sims/<%= simSid %>/Usage')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'commands_costs': {},
          'commands_usage': {},
          'data_costs': {},
          'data_usage': {},
          'sim_unique_name': 'sim_unique_name',
          'sim_sid': 'DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'period': {},
          'url': 'https://preview.twilio.com/wireless/Sims/DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Usage'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.preview.wireless.sims('DEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                           .usage().fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

