var Filter = require('broccoli-filter');
var Handlebars = require('handlebars');

function BakedHBSFilter (inputTree, context, options) {
  if (!(this instanceof BakedHBSFilter)) {
    return new BakedHBSFilter(inputTree, context, options);
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
  return Handlebars.compile(string)(this.context);
};

module.exports = BakedHBSFilter;
