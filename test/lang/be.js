var datef = require('../../datef');
require('chai').should();

describe('Belarusian laguage (be)', function() {
    beforeEach(function() {
        datef.lang('be');
    });
    it('should correct format the date', function() {
        'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_листопад_снежань'.split('_').forEach(function(month, index) {
            datef('MMMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасеня_кастрычніка_листопада_снежня'.split('_').forEach(function(month, index) {
            datef('d MMMM', '2008-' + (index + 1) + '-05').should.be.equal('5 ' + month);
        });
        'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_лист_снеж'.split('_').forEach(function(month, index) {
            datef('MMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'панядзелак_аўторак_серада_чацвер_пятніца_субота_нядзеля'.split('_').forEach(function(day, index) {
            datef('DD', '2014-09-' + (index + 1)).should.be.equal(day);
        });
        'пн_аўт_сер_чц_пт_сб_нд'.split('_').forEach(function(day, index) {
            datef('D', '2014-09-' + (index + 1)).should.be.equal(day);
        });
    });
});
