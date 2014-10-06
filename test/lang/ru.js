var datef = require('../../datef');
require('chai').should();

describe('Russian laguage (ru)', function() {
    beforeEach(function() {
        datef.lang('ru');
    });
    it('should correct format the date', function() {
        'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_').forEach(function(month, index) {
            datef('MMMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_').forEach(function(month, index) {
            datef('d MMMM', '2008-' + (index + 1) + '-05').should.be.equal('5 ' + month);
        });
        'янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_').forEach(function(month, index) {
            datef('MMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'понедельник_вторник_среда_четверг_пятница_суббота_воскресенье'.split('_').forEach(function(day, index) {
            datef('DD', '2014-09-' + (index + 1)).should.be.equal(day);
        });
        'пн_вт_ср_чт_пт_сб_вс'.split('_').forEach(function(day, index) {
            datef('D', '2014-09-' + (index + 1)).should.be.equal(day);
        });
    });
});
