var datef = require('../datef');
require('chai').should();

describe('format', function() {
    beforeEach(function() {
        datef.lang('en');
    });
    it('should correct format the date', function() {
        var offset = new Date('2008-03-05T00:00:00Z').getTimezoneOffset() / -60;
        var hour, hourZp, aHour, aHourZp;

        hour = offset < 0 ? (24 + offset) : offset;

        hourZp  = (hour < 10 ? ('0' + hour) : hour).toString();
        aHour   = (hour % 12 || 12).toString();
        aHourZp = (aHour < 10 ? ('0' + aHour) : aHour).toString();
        hour    = hour.toString();

        console.log('    ! offset: %s, hour %s, hourZp: %s, aHour %s, aHourZp: %s',
            offset, hour, hourZp, aHour, aHourZp);

        datef('YYYY', '2008-03-05').should.be.equal('2008');
        datef('YY',   '2008-03-05').should.be.equal('08');
        datef('MM',   '2008-03-05').should.be.equal('03');
        datef('M',    '2008-03-05').should.be.equal('3');
        datef('MM',   '2008-12-05').should.be.equal('12');
        datef('M',    '2008-12-05').should.be.equal('12');
        datef('dd',   '2008-03-05').should.be.equal('05');
        datef('d',    '2008-03-05').should.be.equal('5');
        datef('dd',   '2008-12-31').should.be.equal('31');
        datef('d',    '2008-12-31').should.be.equal('31');
        datef('HH',   '2008-03-05T00:00:00Z').should.be.equal(hourZp);
        datef('H',    '2008-03-05T00:00:00Z').should.be.equal(hour);
        datef('hh',   '2008-03-05T00:00:00Z').should.be.equal(aHourZp);
        datef('h',    '2008-03-05T00:00:00Z').should.be.equal(aHour);
        datef('mm',   '2008-03-05T00:03:00Z').should.be.equal('03');
        datef('m',    '2008-03-05T00:03:00Z').should.be.equal('3');
        datef('mm',   '2008-03-05T00:30:00Z').should.be.equal('30');
        datef('m',    '2008-03-05T00:30:00Z').should.be.equal('30');
        datef('ss',   '2008-03-05T00:00:05Z').should.be.equal('05');
        datef('s',    '2008-03-05T00:00:05Z').should.be.equal('5');
        datef('ss',   '2008-03-05T00:00:50Z').should.be.equal('50');
        datef('s',    '2008-03-05T00:00:50Z').should.be.equal('50');
        datef('ff',   '2008-03-05T00:00:00.001Z').should.be.equal('001');
        datef('ff',   '2008-03-05T00:00:00.010Z').should.be.equal('010');
        datef('ff',   '2008-03-05T00:00:00.100Z').should.be.equal('100');
        datef('f',    '2008-03-05T00:00:00.001Z').should.be.equal('1');
        datef('f',    '2008-03-05T00:00:00.010Z').should.be.equal('10');
        datef('f',    '2008-03-05T00:00:00.100Z').should.be.equal('100');
        datef('A',    '2008-03-05T00:00:00Z').should.match(/^AM|PM$/);
        datef('a',    '2008-03-05T00:00:00Z').should.match(/^am|pm$/);
        datef('Z',    '2008-03-05').should.match(/^[-+]\d{2}:\d{2}$/);
        datef('ZZ',   '2008-03-05').should.match(/^[-+]\d{4}$/);
    });
});
