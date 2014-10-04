(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['datef'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../datef'));
    } else {
        factory(window.datef);
    }
}(function (datef) {
    datef.lang('ru', {
        _months: {
            nominative: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
            accusative: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
        },
        months: function (date, format) {
            var nounCase = /dd?\s*MMMM?/.test(format) ? 'accusative' : 'nominative';
            return this._months[nounCase][date.getMonth()];
        },
        _monthsShort: {
            nominative: 'янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
            accusative: 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_')
        },
        monthsShort: function (date, format) {
            var nounCase = /dd?\s*MMMM?/.test(format) ? 'accusative' : 'nominative';
            return this._monthsShort[nounCase][date.getMonth()];
        },
        weekdays: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
        meridiem : function (hour) {
            if (hour < 4) {
                return 'ночи';
            } else if (hour < 12) {
                return 'утра';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечера';
            }
        }
    });
}));
