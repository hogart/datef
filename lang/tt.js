(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['datef'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../datef'));
    } else {
        factory(window.datef);
    }
}(function (datef) {
    datef.lang('tt', {
        _months: 'гыйнвар_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
        months: function (date) {
            return this._months[date.getMonth()];
        },
        _monthsShort: 'гыйнв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
        monthsShort: function (date) {
            return this._monthsShort[date.getMonth()];
        },
        weekdays: 'якшәмбе_дүшәмбе_сишәмбе_чәршәмбе_пәнҗешәмбе_җомга_шимбә'.split('_'),
        weekdaysShort: 'як_дш_сш_чш_пш_җм_шм'.split('_'),
        weekdaysMin: 'як_дш_сш_чш_пш_җм_шм'.split('_')
    });
}));
