var datef = require('../datef');
require('chai').should();

describe('language', function() {
    beforeEach(function() {
        datef.lang('en');
    });
    it('should return `en` (default)', function() {
        datef.lang().should.equal('en');
    });
    it('should not set language that not defined', function() {
        datef.lang('foo').should.equal('en');
        datef.lang().should.equal('en');
    });
    it('should set language', function() {
        datef.lang('ru').should.equal('ru');
        datef.lang().should.equal('ru');
    });
});
