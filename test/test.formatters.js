var datef = require('../datef');
require('chai').should();

describe('language', function() {
    beforeEach(function() {
        datef.lang('en');
    });
    it('should return predefined list of formatters', function() {
        datef.formatters().should.be.instanceof(Array);
        datef.formatters().should.contain.members(['ISODate', 'ISOTime', 'ISODateTime', 'ISODateTimeTZ']);
    });
    it('should add simple formatter', function() {
        datef.register('longDate', 'MMMM, d');
        datef('longDate', '2008-03-05').should.equal('March, 5');
    });
    it('should add language formatter', function() {
        datef.register('longDate', {
            'ru': 'd MMMM',
            'default': 'MMMM, d'
        });
        datef('longDate', '2008-03-05').should.equal('March, 5');
        datef.lang('ru');
        datef('longDate', '2008-03-05').should.equal('5 марта');
    });
});
