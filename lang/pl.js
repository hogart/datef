(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['datef'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../datef'));
    } else {
        factory(window.datef);
    }
}(function (datef) {
    datef.lang('pl', {
        _months: {
            nominative: 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpeń_wrzesień_październik_listopad_grudzień'.split('_'),
            accusative: 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_październik_listopada_grudnia'.split('_')
        },
        months: function (date, format) {
            var nounCase = /dd?\s*MMMM?/.test(format) ? 'accusative' : 'nominative';
            return this._months[nounCase][date.getMonth()];
        },
        _monthsShort: {
            nominative: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
            accusative: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_')
        },
        monthsShort: function (date, format) {
            var nounCase = /dd?\s*MMMM?/.test(format) ? 'accusative' : 'nominative';
            return this._monthsShort[nounCase][date.getMonth()];
        },
        weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
        weekdaysShort: 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
        weekdaysMin: 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
        meridiem : function (hour) {
            if (hour < 12) {
                return 'rano';
            } else {
                return '';
            }
        }
    });
}));
