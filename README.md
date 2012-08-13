**datef** is a Javascript date formatting library, both for browser and node.js.

##Features

* Can output: year, full year, month, day, hour, minutes, seconds and timezone — both zero padded and not
* Built-in formats and easyly extensible
* Doesn't mess with built-in prototypes
* Acts as node.js and requirejs/amd module, and have  `.noConflict` method in case no module system is present (e.g. plain browser environment)
* No external dependencies
* Contains predefined formats for some ISO8601 date and time representation
* Thoroughly annotated with jsdoc, so if your IDE/editor supports it, you may never need interrupt yourself from code

##Usage

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
```

### Cleaning global namespace
This is similar to [`Backbone.noConflict()`](http://backbonejs.org/#Utility-noConflict)
```html
<script>var datef = 'My very important data';</script>
…
<script src="js/datef.js"></script>

<script>
console.log(typeof datef); // "function"
var formattingLib = datef.noConflict();
console.log(datef); // 'My very important data'
</script
```

##Tokens

Full list of tokens possible in format string include:
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

**Z**: time-zone in ISO8601-compatible format (i.e. "-04:00")

##Roadmap

* add ability to extend set of tokens
* add l10n capabilities