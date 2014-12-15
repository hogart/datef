var datef = require('../../datef');
require('chai').should();

describe('Turkish language (tr)', function() {
    beforeEach(function() {
        datef.lang('tr');
    });
    it('should correct format the date', function() {
        'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_').forEach(function(month, index) {
            datef('MMMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_').forEach(function(month, index) {
            datef('MMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi_Pazar'.split('_').forEach(function(day, index) {
            datef('DD', '2014-09-' + (index + 1)).should.be.equal(day);
        });
        'Pt_Sa_Ça_Pe_Cu_Ct_Pz'.split('_').forEach(function(day, index) {
            datef('D', '2014-09-' + (index + 1)).should.be.equal(day);
        });
    });
});
