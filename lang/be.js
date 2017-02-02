(function (factory) {
    if (typeof define === 'function' && define.amd) {
        define(['datef'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('../datef'));
    } else {
        factory(window.datef);
    }
}(function (datef) {
    datef.lang('be', {
        _months: {
            nominative: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_'),
            accusative: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасеня_кастрычніка_лістапада_снежня'.split('_')
        },
        months: function (date, format) {
            var nounCase = /dd?\s*MMMM?/.test(format) ? 'accusative' : 'nominative';
            return this._months[nounCase][date.getMonth()];
        },
        _monthsShort: 'сту_лют_сак_кра_тра_чэр_ліп_жні_вер_кас_лис_сне'.split('_'),
        monthsShort: function (date) {
            return this._monthsShort[date.getMonth()];
        },
        weekdays: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
        weekdaysShort: 'ндз_пн_аўт_сер_чц_пт_сб'.split('_'),
        weekdaysMin: 'ндз_пн_аўт_сер_чц_пт_сб'.split('_'),
        meridiem : function (hour) {
            if (hour < 4) {
                return 'ночы';
            } else if (hour < 12) {
                return 'раніцы';
            } else if (hour < 17) {
                return 'дня';
            } else {
                return 'вечара';
            }
        }
    });
}));
