var datef = require('../../datef');
require('chai').should();

describe('Czech language (cs)', function() {
    beforeEach(function() {
        datef.lang('cs');
    });
    it('should correct format the date', function() {
        'leden_únor_březen_duben_květen_červen_červenec_září_říjen_listopad_prosinec'.split('_').forEach(function(month, index) {
            datef('MMMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'ledna_února_března_dubna_května_června_července_září_října_listopadu_prosince'.split('_').forEach(function(month, index) {
            var matcher = new RegExp('^\\d ' + month + '$');
            datef('d MMMM', '2008-' + (index + 1) + '-05').should.be.match(matcher);
        });
        'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_').forEach(function(month, index) {
            datef('MMM', '2008-' + (index + 1) + '-05').should.be.equal(month);
        });
        'pondělí_úterý_středa_čtvrtek_pátek_sobota_neděle'.split('_').forEach(function(day, index) {
            datef('DDD', '2014-09-' + (index + 1)).should.be.equal(day);
        });
        'po_út_stř_čt_pá_so_ne'.split('_').forEach(function(day, index) {
            datef('DD', '2014-09-' + (index + 1)).should.be.equal(day);
            datef('D', '2014-09-' + (index + 1)).should.be.equal(day);
        });
    });
});
