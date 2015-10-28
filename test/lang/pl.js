var datef = require('../../datef');
require('chai').should();

describe('Polish language (pl)', function() {
    beforeEach(function() {
        datef.lang('pl');
    });
    it('should correct format the date', function() {
        'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpeń_wrzesień_październik_listopad_grudzień'.split('_').forEach(function(month, index) {
            datef('MMMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_').forEach(function(month, index) {
            datef('MMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'poniedziałek_wtorek_środa_czwartek_piątek_sobota_niedziela'.split('_').forEach(function(day, index) {
            datef('DDD', '2014-09-' + (index + 1)).should.be.equal(day);
        });
        'pon_wt_śr_czw_pt_sb_nie'.split('_').forEach(function(day, index) {
            datef('DD', '2014-09-' + (index + 1)).should.be.equal(day);
        });
        'Pn_Wt_Śr_Cz_Pt_So_N'.split('_').forEach(function(day, index) {
            datef('D', '2014-09-' + (index + 1)).should.be.equal(day);
        });
    });
});
