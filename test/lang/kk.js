var datef = require('../../datef');
require('chai').should();

describe('Kazakh language (kk)', function() {
    beforeEach(function() {
        datef.lang('kk');
    });
    it('should correct format the date', function() {
        'қаңтар_ақпан_науырыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_').forEach(function(month, index) {
            datef('MMMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'қаңтардың_ақпанның_науырыздың_сәуірдің_мамырдың_маусымның_шілденің_тамыздың_қыркүйектің_қазанның_қарашаның_желтоқсанның'.split('_').forEach(function(month, index) {
            var matcher = new RegExp('^\\d ' + month + '$');
            datef('d MMMM', '2008-' + (index + 1) + '-05').should.be.match(matcher);
        });
        'қаң_ақп_нар_сәр_мам_маус_шіл_там_қыр_қаз_қар_жел'.split('_').forEach(function(month, index) {
            datef('MMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі_жексенбі'.split('_').forEach(function(day, index) {
            datef('DD', '2014-09-' + (index + 1)).should.be.equal(day);
        });
        'дс_сн_ср_бс_жм_сб_жк'.split('_').forEach(function(day, index) {
            datef('D', '2014-09-' + (index + 1)).should.be.equal(day);
        });
    });
});
