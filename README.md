datef
=====

**datef** is a Javascript date formatting library, both for browser and node.js

Features
========

* Can output: year, full year, month, day, hour, minutes, seconds and timezone
* Built-in formats and easyly extensible
* Doesn't mess with built-in prototypes
* Acts as node.js and requirejs/amd module, and have  `.noConflict` method in case no module system is present (e.g. plain browser environment)
* No external dependencies
* Contains predefined formats for some ISO8601 date and time representation

Usage
=====

```javascript
// basic usage
datef('dd.MM.YY', new Date()); // "13.08.12"
datef('dd.MM.YY'); // second argument is optional; datef takes Date.now() if no date is provided

var d = new Date();
d.setFullYear(2045);
datef('dd.MM.YYYY', d); // "13.08.2045"

// predefined formats
datef.formatters.ISODateTimeTZ(); // "2012-08-13T15:01:29 -04:00"

// defining your own format
datef.register('myFormat', 'd.M.YY');
datef.formatters.myFormat(); // "13.8.12"
// or as standalone function
var myFormat = datef.createFormatter('d.M.YY');

Tokens
======

**YYYY**: 4-digit year
**YY**: last 2 digit of year
**MM**: ISO8601-compatible number of month (i.e. zero-padded) in year (with January being 1st month)
**M**: number of month in year without zero-padding (with January being 1st month)
**dd**: zero-padded number of day in month
**d**: number of day in month
**hh**: zero-padded hour
**h**: hour
**mm**: zero-padded minutes
**m**: minutes
**ss**: zero-padded seconds
**s**: seconds
**TZ**: time-zone in ISO8601-compatible format (i.e. "-04:00")