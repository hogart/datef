(function() {
    "use strict";


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
        YYYY: function(date) {
            return date.getFullYear();
        },
        YY: function(date) {
            return leadingZeroes(date.getFullYear() % 100);
        },
        MM: function(date) {
            return leadingZeroes(date.getMonth() + 1);
        },
        M: function(date) {
            return date.getMonth() + 1;
        },
        dd: function(date) {
            return leadingZeroes(date.getDate());
        },
        d: function(date) {
            return date.getDate();
        },
        hh: function(date) {
            return leadingZeroes(date.getHours());
        },
        h: function(date) {
            return date.getHours();
        },
        mm: function(date) {
            return leadingZeroes(date.getMinutes());
        },
        m: function(date) {
            return date.getMinutes();
        },
        ss: function(date) {
            return leadingZeroes(date.getSeconds());
        },
        s: function(date) {
            return date.getSeconds();
        }
    };

    /**
     * Formats date according to `format` string
     * @param {String} format
     * @param {Date|Number} [date=Date.now]
     * @return {String}
     */
    root.datef = function(format, date) {
        var dt = arguments.length === 2 ? new Date(date) : new Date(),
            result = new String(format);

        return result.replace(regexp, function(match) {
            return extractors[match](dt);
        });
    };
})();