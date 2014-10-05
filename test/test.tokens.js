var datef = require('../datef');
require('chai').should();

describe('tokens', function() {
    it('should correct format the date', function() {
        datef('YYYY', '2008-03-05').should.be.equal('2008');
        datef('YY',   '2008-03-05').should.be.equal('08');
        datef('MMMM', '2008-03-05').should.be.equal('March');
        datef('MMM',  '2008-03-05').should.be.equal('Mar');
        datef('MM',   '2008-03-05').should.be.equal('03');
        datef('M',    '2008-03-05').should.be.equal('3');
        datef('DD',   '2008-03-05').should.be.equal('Wednesday');
        datef('D',    '2008-03-05').should.be.equal('We');
        datef('dd',   '2008-03-05').should.be.equal('05');
        datef('d',    '2008-03-05').should.be.equal('5');
    });
});
