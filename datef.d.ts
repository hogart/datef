declare module "datef" {
    type DateInput = Date | Number | string;

    interface Formatter {
        (date: DateInput): string;
    }

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
     *  * **DDD**: full name of day
     *  * **DD**: short name of day
     *  * **D**: min name of day
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
     */
    interface DatefStatic {
        (format: string): string;
        (format: string, date: DateInput): string;
    }

    export default DatefStatic;

    /**
     * Creates and returns formatting function and files it under `datef.formatters[name]`
     * Using is just `datef('myformat')`
     *
     * @example
     * ```js
     * datef.register('longDate', 'd MMMM');
     * datef.register('longDateAndTime', {
     *   'en': 'MMMM d, h:mma',
     *   'default': 'd MMMM, HH:mm'
     * });
     * ```
     */
    export function register (name: string, format: string): Formatter;

    /**
     * Return list of custom formats
     */
    export function formatters (): Formatter[];

    interface LangOptions {
        _months: {
            nominative: string[],
            accusative: string[],
        };
        month: (date, format) => string;

        _monthsShort: {
            nominative: string[],
            accusative: string[],
        };
        monthsShort: (date, format) => string;

        weekDays: string;
        weekdaysShort: string;
        weekdaysMin: string;
        meridiem: (number) => string;
    }

    /**
     * Creates lang function.
     */
    export function lang (lang: string, options: LangOptions): string;
}
