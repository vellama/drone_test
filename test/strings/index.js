var should = require('should');

var StringsLib = require('../../lib/strings_lib');

describe('strings lib', function () {
	it('should test string returned by lib', function () {
		StringsLib.test().should.equal('test');
	});
});