(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['datef'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../datef'));
    } else {
        factory(window.datef);
    }
}(function (datef) {
    datef.lang('cs', {
        _months: {
            nominative: 'leden_únor_březen_duben_květen_červen_červenec_září_říjen_listopad_prosinec'.split('_'),
            accusative: 'ledna_února_března_dubna_května_června_července_září_října_listopadu_prosince'.split('_')
        },
        months: function (date, format) {
            var nounCase = /dd?\s*MMMM?/.test(format) ? 'accusative' : 'nominative';
            return this._months[nounCase][date.getMonth()];
        },
        _monthsShort: {
            nominative: 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'),
            accusative: 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_')
        },
        monthsShort: function (date, format) {
            var nounCase = /dd?\s*MMMM?/.test(format) ? 'accusative' : 'nominative';
            return this._monthsShort[nounCase][date.getMonth()];
        },
        weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
        weekdaysShort: 'ne_po_út_stř_čt_pá_so'.split('_'),
        weekdaysMin: 'ne_po_út_stř_čt_pá_so'.split('_'),
        meridiem : function (hour) {
            if (hour < 12) {
                return 'dopoledne';
            } else {
                return 'odpoledne';
            }
        }
    });
}));
