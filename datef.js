(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], function () {
            return factory(root);
        });
    } else if (typeof exports === 'object') {
        module.exports = factory(root);
    } else {
        root.datef = factory(root);
    }
}(this, function (root) {
    'use strict';

    /**
     * Converts `value` to string and pad it with leading zeroes 
     * until resulting string reaches `length`
     * 
     * @param {Number} value
     * @param {Number} [length=2]
     * 
     * @return {String}
     */
    function leadingZeroes(value, length) {
        var str = value.toString(),
            finalLen = arguments.length === 2 ? length : 2;

        if (str.length > finalLen) {
            return str;
        }

        // this task can be accomplished in one line — empty for cycle
        for (str; str.length < finalLen; str = '0' + str);

        return str;
    }

    var hasModule = !!(typeof module !== 'undefined' && module.exports);

    var tokens = {
        YYYY: function (date) {
            return date.getFullYear();
        },
        YY: function (date) {
            return leadingZeroes(date.getFullYear() % 100);
        },
        MMMM: function (date, format) {
            return languages[datef.lang()].months(date, format);
        },
        MMM: function (date, format) {
            return languages[datef.lang()].monthsShort(date, format);
        },
        MM: function (date) {
            return leadingZeroes(date.getMonth() + 1);
        },
        M: function (date) {
            return date.getMonth() + 1;
        },
        DD: function (date) {
            return languages[datef.lang()].weekdays[date.getDay()];
        },
        D: function (date) {
            return languages[datef.lang()].weekdaysMin[date.getDay()];
        },
        dd: function (date) {
            return leadingZeroes(date.getDate());
        },
        d: function (date) {
            return date.getDate();
        },
        HH: function (date) {
            return leadingZeroes(date.getHours());
        },
        H: function (date) {
            return date.getHours();
        },
        hh: function (date) {
            return leadingZeroes(date.getHours() % 12 || 12);
        },
        h: function (date) {
            return date.getHours() % 12 || 12;
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
        ff: function (date) {
            return leadingZeroes(date.getMilliseconds(), 3);
        },
        f: function (date) {
            return date.getMilliseconds();
        },
        A: function (date) {
            return languages[datef.lang()].meridiem(date.getHours(), false);
        },
        a: function (date) {
            return languages[datef.lang()].meridiem(date.getHours(), true);
        },
        ZZ: function (date, format, separator) {
            var tz = date.getTimezoneOffset(),
                hours = Math.abs(Math.floor(tz / 60)),
                mins = tz % 60,
                sign = tz > 0 ? '+' : '-';

            separator = separator || '';

            return sign + [leadingZeroes(hours), leadingZeroes(mins)].join(separator);
        },
        Z: function (date) {
            return tokens.ZZ(date, null, ':');
        }
    };

    var possibleFormats = [];
    for (var extractor in tokens) {
        if (tokens.hasOwnProperty(extractor)) {
            possibleFormats.push(extractor);
        }
    }
    var regexp = new RegExp(possibleFormats.join('|'), 'mg');

    /**
     * Formats date according to `format` string.
     * Format string may consist of any characters, but some of them considered tokens,
     * and will be replaced by appropriate value from `date`.
     * Possible tokens include:
     *  * **YYYY**: 4-digit year
     *  * **YY**: last 2 digit of year
     *  * **MMMM**: full name of month
     *  * **MMM**: short name of month
     *  * **MM**: ISO8601-compatible number of month (i.e. zero-padded) in year (with January being 1st month)
     *  * **M**: number of month in year without zero-padding (with January being 1st month)
     *  * **DD**: full name of day
     *  * **D**: short name of day
     *  * **dd**: zero-padded number of day in month
     *  * **d**: number of day in month
     *  * **HH**: zero-padded hour in 24-hr format
     *  * **H**: hour in 24-hr format
     *  * **hh**: zero-padded hour in 12-hr format
     *  * **h**: hour in 12-hr format
     *  * **mm**: zero-padded minutes
     *  * **m**: minutes
     *  * **ss**: zero-padded seconds
     *  * **s**: seconds
     *  * **ff**: zero-padded milliseconds
     *  * **f**: milliseconds
     *  * **A**: AM/PM
     *  * **a**: am/pm
     *  * **ZZ**: time-zone in ISO8601-compatible basic format (i.e. "-0400")
     *  * **Z**: time-zone in ISO8601-compatible extended format (i.e. "-04:00")
     *
     *  Longer tokens take precedence over shorter ones (so "MM" will aways be "04", not "44" in april).
     *
     * @param {String} format
     * @param {Date|Number|String} [date=new Date()]
     * 
     * @return {String}
     */
    function datef (format, date) {
        if (!format || typeof format !== 'string') {
            throw new TypeError('Argument `format` must be a string');
        }

        if (date !== undefined && !(date instanceof Date) && typeof date !== 'number' && typeof date !== 'string') {
            throw new TypeError('Argument `date` must be instance of Date or Unix Timestamp or ISODate String');
        }

        var dt = (arguments.length === 2 && date) ? date instanceof Date ? date : new Date(date) : new Date();

        format = format.toString();

        if (datef._formatters[format]) {
            return datef._formatters[format](dt);
        } else {
            return format.replace(regexp, function (match) {
                return tokens[match](dt, format);
            });
        }
    }

    /**
     * Predefined languages storage.
     * 
     * @type {Object}
     */
    var languages = datef._languages = {};
    
    /**
     * Creates lang function.
     * 
     * @param  {String}   lang      Language to set
     * @param  {Object}   [options] Language options
     * 
     * @return {String}             Current language.
     */
    var lang = datef.lang = function (lang, options) {
        if (!lang) {
            return languages.current;
        }

        if (!options) {
            if (languages[lang] && languages.current !== lang) {
                languages.current = lang;
            } else if (hasModule) {
                try {
                    require('./lang/' + lang);
                    languages.current = lang;
                } catch (e) {
                    return languages.current;
                }
            }
            return languages.current;
        }

        languages[lang] = options;
        languages.current = lang;
        return languages.current;
    };

    // Let's create English language
    lang('en', {
        _months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
        months: function (date) {
            return this._months[date.getMonth()];
        },
        _monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
        monthsShort: function (date) {
            return this._monthsShort[date.getMonth()];
        },
        weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
        weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
        meridiem : function (hours, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        }
    });

    /**
     * Creates formatting function. Basically just curry over datef.
     * 
     * @return {Function} Readied formatting function with one argument — date.
     */
    var createFormatter = function (format) {
        return function (date) {
            var f = format[datef.lang()] || format['default'] || format;
            return datef(f, date);
        };
    };

    /**
     * Predefined formatters storage.
     * 
     * @type {Object}
     */
    var formatters = datef._formatters = {};

    /**
     * Creates formatting function and files it under `datef.formatters[name]`
     * Using is just `datef('myformat')`
     * 
     * @param {String} name
     * @param {String|Object} format
     *
     * @example
     * ```js
     * datef.register('longDate', 'd MMMM');
     * datef.register('longDateAndTime', {
     *   'en': 'MMMM d, h:mma',
     *   'default': 'd MMMM, HH:mm'
     * });
     * ```
     * 
     * @return {Function} Readied formatting function with one argument — date.
     */
    var register = datef.register = function (name, format) {
        formatters[name] = createFormatter(format);
        return formatters[name];
    };

    /**
     * Return list of custom formats
     *
     * @return {Array}
     */
    datef.formatters = function () {
        return Object.keys(datef._formatters);
    };

    // Let's create some basic formats
    register('ISODate', 'YYYY-MM-dd');
    register('ISOTime', 'hh:mm:ss');
    register('ISODateTime', 'YYYY-MM-ddThh:mm:ss');
    register('ISODateTimeTZ', 'YYYY-MM-ddThh:mm:ssZ');

    // conflict management — save link to previous content of datef, whatever it was.
    var prevDatef = root.datef;

    /**
     * Cleans global namespace, restoring previous value of window.datef, and returns datef itself.
     * 
     * @return {datef}
     */
    datef.noConflict = function () {
        root.datef = prevDatef;
        return this;
    };

    return datef;
}));
