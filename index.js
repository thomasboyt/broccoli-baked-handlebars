var Filter = require('broccoli-filter');
var Handlebars = require('handlebars');

function BakedHBSFilter (inputTree, context, options) {
  if (!(this instanceof BakedHBSFilter)) {
    return new BakedHBSFilter(inputTree, options);
  }
  Filter.call(this, inputTree, options);
  this.options = options || {};
  this.context = context;
}

BakedHBSFilter.prototype = Object.create(Filter.prototype);
BakedHBSFilter.prototype.constructor = BakedHBSFilter;

BakedHBSFilter.prototype.extensions = ['hbs', 'handlebars'];
BakedHBSFilter.prototype.targetExtension = 'html';

BakedHBSFilter.prototype.processString = function (string) {
  var tmpl = Handlebars.compile(string);
  var result = tmpl(this.context);
  return result;
};

module.exports = BakedHBSFilter;
