(function () {
    'use strict';


    var root = window || global;


    function leadingZeroes(value, length) {
        var str = value.toString(),
            finalLen = arguments.length == 2 ? length : 2;

        if (str.length > finalLen) {
            return str;
        }

        for (str; str.length < finalLen; str = '0' + str);

        return str;
    }

    var possibleFormats = 'YYYY YY MM M dd d hh h mm m ss s'.split(' ');
    var regexp = new RegExp(possibleFormats.join('|'), 'mg');

    var extractors = {
        YYYY: function (date) {
            return date.getFullYear();
        },
        YY: function (date) {
            return leadingZeroes(date.getFullYear() % 100);
        },
        MM: function (date) {
            return leadingZeroes(date.getMonth() + 1);
        },
        M: function (date) {
            return date.getMonth() + 1;
        },
        dd: function (date) {
            return leadingZeroes(date.getDate());
        },
        d: function (date) {
            return date.getDate();
        },
        hh: function (date) {
            return leadingZeroes(date.getHours());
        },
        h: function (date) {
            return date.getHours();
        },
        mm: function (date) {
            return leadingZeroes(date.getMinutes());
        },
        m: function (date) {
            return date.getMinutes();
        },
        ss: function (date) {
            return leadingZeroes(date.getSeconds());
        },
        s: function (date) {
            return date.getSeconds();
        },

        TZ: function (date) {
            var tz = date.getTimezoneOffset(),
                hours = Math.abs(Math.floor(tz / 60)),
                mins = tz % 60,
                sign = tz > 0 ? '+' : '-';

            return [sign, leadingZeroes(hours), ':', leadingZeroes(mins)].join('');
        }
    };

    /**
     * Formats date according to `format` string
     * @param {String} format
     * @param {Date|Number} [date=Date.now]
     * @return {String}
     */
    var datef = function (format, date) {
        var dt = (arguments.length === 2 && date) ? new Date(date) : new Date(),
            result = new String(format);

        return result.replace(regexp, function (match) {
            return extractors[match](dt);
        });
    };

    datef.ISO = {
        date: function (date) {
            return datef('YYYY-MM-dd', date)
        },

        time: function (date) {
            return datef('hh:mm:ss', date)
        },

        datetime: function (date) {
            return datef('YYYY-MM-ddThh:mm:ss', date)
        }
    };

    var createFormatter = datef.createFormatter = function (format) {
        return function (date) {
            return datef(format, date)
        }
    };

    var formatters = datef.formatters = {};

    var register = datef.register = function (name, format) {
        formatters[name] = createFormatter(format)
    };


    register('ISODate', 'YYYY-MM-dd');
    register('ISOTime', 'hh:mm:ss');
    register('ISODateTime', 'YYYY-MM-ddThh:mm:ss');


})();