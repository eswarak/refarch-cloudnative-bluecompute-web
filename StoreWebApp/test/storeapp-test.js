const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('request');

describe('BlueCompute Web App Test Suites', function() {

	// Running the test locally
	var serviceBaseUrl = "http://localhost:8000";

	if (process.env.test_env == 'cloud') {
		//console.log("App Name" + appEnv.name);
		serviceBaseUrl = 'http://' + process.env.appname + '.mybluemix.net';
	}

	// test the home page loading
	describe('when request the home page', function() {
		it('should return valid HTML page', function(done) {

			var endPoint = serviceBaseUrl;

      request(endPoint, function(error, response, body){

				  //console.log(body);

          // Parse the home page HTML and expect the right content
				  expect(error).to.not.be.ok;
          expect(error).to.be.null;
				  expect(response).to.have.property('statusCode', 200);
          expect(response).to.be.html;
          expect(body).to.include('BlueCompute Store!');
          expect(body).to.include('<!DOCTYPE html>');
          expect(body).to.include('IBM Cloud Architecture Center');

				  done();
			});
		});
	});


});
