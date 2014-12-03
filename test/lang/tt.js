var datef = require('../../datef');
require('chai').should();

describe('Tatar laguage (tt)', function() {
    beforeEach(function() {
        datef.lang('tt');
    });
    it('should correct format the date', function() {
        'гыйнвар_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_').forEach(function(month, index) {
            datef('MMMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'гыйнв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_').forEach(function(month, index) {
            datef('MMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'дүшәмбе_сишәмбе_чәршәмбе_пәнҗешәмбе_җомга_шимбә_якшәмбе'.split('_').forEach(function(day, index) {
            datef('DD', '2014-09-' + (index + 1)).should.be.equal(day);
        });
        'дш_сш_чш_пш_җм_шм_як'.split('_').forEach(function(day, index) {
            datef('D', '2014-09-' + (index + 1)).should.be.equal(day);
        });
    });
});
