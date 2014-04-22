A Broccoli module for precompiled, static Handlebars templates.

Example usage:

```javascript
var pickFiles = require('broccoli-static-compiler');
var bakedHBSFilter = require('broccoli-baked-handlebars');

var env = require('broccoli-env').getEnv();
var IS_PRODUCTION_ENV = env === 'production';

var index = pickFiles('public/', {
  srcDir: '/',
  files: ['index.hbs'],
  destDir: '/'
});

index = bakedHBSFilter(index, {
  production: IS_PRODUCTION_ENV
});
```
