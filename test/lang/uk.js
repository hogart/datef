var datef = require('../../datef');
require('chai').should();

describe('Ukrainian laguage (uk)', function() {
    beforeEach(function() {
        datef.lang('uk');
    });
    it('should correct format the date', function() {
        'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_').forEach(function(month, index) {
            datef('MMMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_').forEach(function(month, index) {
            datef('d MMMM', '2008-' + (index + 1) + '-05').should.be.equal('5 ' + month);
        });
        'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_').forEach(function(month, index) {
            datef('MMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'понеділок_вівторок_середа_четвер_п’ятниця_субота_неділя'.split('_').forEach(function(day, index) {
            datef('DD', '2014-09-' + (index + 1)).should.be.equal(day);
        });
        'пн_вт_ср_чт_пт_сб_нд'.split('_').forEach(function(day, index) {
            datef('D', '2014-09-' + (index + 1)).should.be.equal(day);
        });
    });
});
