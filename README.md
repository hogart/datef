# datef

**datef** is a Javascript date formatting library, both for browser and node.js.

## Features

* Can output: year, full year, month, day, hour, minutes, seconds, milliseconds and timezone — both zero padded and not
* Simple localization
* Built-in formats and easyly extensible
* Doesn't mess with built-in prototypes
* Acts as node.js and requirejs/amd module, and have `.noConflict` method in case no module system is present (e.g. plain browser environment)
* No external dependencies
* Contains predefined formats for some ISO8601 date and time representation
* Thoroughly annotated with jsdoc, so if your IDE/editor supports it, you may never need interrupt yourself from code

## Usage

**Node.js**
```bash
npm install datef
```
```js
var datef = require('datef');
datef('MM.YYYY');
```

**Require.js**
```js
require.config({
    paths: {
        'datef': 'path/to/datef'
    }
})
require(['datef'], function(datef){
    datef('MM.YYYY');
});
```

**Browser**
```html
<script src="datef.js"></script>
<script>
    datef('MM.YYYY');
</script>
```

### Basic usage

```js
datef('dd.MM.YY', new Date()); // "13.08.13"
datef('dd.MM.YY'); // second argument is optional; datef takes Date.now() if no date is provided

var d = new Date();
d.setFullYear(2045);
datef('dd.MM.YYYY', d); // "13.08.2045"
```

### Languages

**Node.js**
```js
datef.lang('ru');
datef('dd MMMM'); // 13 августа
```

**Require.js**
```js
require.config({
    paths: {
        'datef': 'path/to/datef',
        'datef_ru': 'path/to/datef_lang/ru'
    }
})

require(['datef', 'datef_ru'], function(datef){
    datef.lang('ru');
    datef('dd MMMM'); // 13 августа
});
```

**Browser**
```html
<script src="datef.js"></script>
<script src="lang/ru.js"></script>
<script>
    datef.lang('ru');
    datef('dd MMMM'); // 13 августа
</script>
```

### Custom formatters
```js
// predefined formats
datef.formatters(); // ['ISODate','ISOTime','ISODateTime','ISODateTimeTZ']
datef('ISODateTimeTZ', d); // "2013-08-13T15:01:29 -04:00"

// defining your own simple format
datef.register('myFormat', 'd.M.YY');
datef('myFormat', d); // "13.8.13"

// defining your own format with i10n
datef.register('myI10nFormat', {
    'en': 'MMMM dd, DD',
    'ru': 'DD, dd MMMM',
    'default': 'dd MMMM'
});
datef('myI10nFormat', d); // "August 13, Tuesday"
datef.lang('ru');
datef('myI10nFormat', d); // "Вторник, 13 августа"
datef.lang('uk');
datef('myI10nFormat', d); // "13 жніўня"
```

### Cleaning global namespace

This is similar to [`Backbone.noConflict()`](http://backbonejs.org/#Utility-noConflict)

```html
<script>var datef = 'My very important data';</script>
…
<script src="datef.js"></script>

<script>
console.log(typeof datef); // "function"
var formattingLib = datef.noConflict();
console.log(datef); // 'My very important data'
</script>
```

## Tokens

Full list of tokens possible in format string include:

* **YYYY**: 4-digit year
* **YY**: last 2 digit of year
* **MMMM**: full name of month
* **MMM**: short name of month
* **MM**: ISO8601-compatible number of month (i.e. zero-padded) in year (with January being 1st month)
* **M**: number of month in year without zero-padding (with January being 1st month)
* **DD**: full name of day
* **D**: short name of day
* **dd**: zero-padded number of day in month
* **d**: number of day in month
* **HH**: zero-padded 24 hour time
* **H**: 24 hour time
* **hh**: zero-padded 12 hour time
* **h**: 12 hour time
* **mm**: zero-padded minutes
* **m**: minutes
* **ss**: zero-padded seconds
* **s**: seconds
* **ff**: zero-padded milliseconds, 3 digits
* **f**: milliseconds
* **A**: AM/PM
* **a**: am/pm
* **Z**: time-zone in ISO8601-compatible format (i.e. "-04:00")

## Roadmap

* add more languages
