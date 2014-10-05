var datef = require('../datef');
require('chai').should();

describe('simple call', function() {
    beforeEach(function() {
        
    });
    it('should throw exception with no arguments', function() {
        datef.should.throw();
    });
    it('should throw exception if format is not a string', function() {
        (datef.bind(null, 1)).should.throw(TypeError);
        (datef.bind(null, null)).should.throw(TypeError);
        (datef.bind(null, {})).should.throw(TypeError);
        (datef.bind(null, [])).should.throw(TypeError);
        (datef.bind(null, true)).should.throw(TypeError);
        (datef.bind(null, function() {})).should.throw(TypeError);
    });
    it('should throw exception if date is not correct', function() {
        (datef.bind(null, {})).should.throw(TypeError);
        (datef.bind(null, [])).should.throw(TypeError);
        (datef.bind(null, null)).should.throw(TypeError);
        (datef.bind(null, true)).should.throw(TypeError);
        (datef.bind(null, function() {})).should.throw(TypeError);
    });
    it('should not throw exception if all ok', function() {
        (datef.bind(null, 'MM/dd/YYYY')).should.not.throw();
        (datef.bind(null, 'MM/dd/YYYY', '2014-09-05')).should.not.throw();
        (datef.bind(null, 'MM/dd/YYYY', 1412485677972)).should.not.throw();
        (datef.bind(null, 'MM/dd/YYYY', new Date())).should.not.throw();
    });
    it('should return string', function() {
        datef('MM/dd/YYYY').should.be.a('string');
    });
});
