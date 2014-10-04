(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['datef'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../datef'));
    } else {
        factory(window.datef);
    }
}(function (datef) {
    datef.lang('kk', {
        _months: {
            nominative: 'қаңтар_ақпан_науырыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
            accusative: 'қаңтардың_ақпанның_науырыздың_сәуірдің_мамырдың_маусымның_шілденің_тамыздың_қыркүйектің_қазанның_қарашаның_желтоқсанның'.split('_')
        },
        months: function (date, format) {
            var nounCase = /dd?\s*MMMM?/.test(format) ? 'accusative' : 'nominative';
            return this._months[nounCase][date.getMonth()];
        },
        _monthsShort: 'қаң_ақп_нар_сәр_мам_маус_шіл_там_қыр_қаз_қар_жел'.split('_'),
        monthsShort: function (date) {
            return this._monthsShort[date.getMonth()];
        },
        weekdays: 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
        weekdaysShort: 'жк_дс_сн_ср_бс_жм_сб'.split('_'),
        weekdaysMin: 'жк_дс_сн_ср_бс_жм_сб'.split('_')
    });
}));
