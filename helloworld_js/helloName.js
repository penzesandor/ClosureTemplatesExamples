// This file was automatically generated from helloName.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace examples.simple.
 */

if (typeof examples == 'undefined') { var examples = {}; }
if (typeof examples.simple == 'undefined') { examples.simple = {}; }


examples.simple.helloName = function(opt_data, opt_ignored) {
  return '' + ((! opt_data.greetingWord) ? 'Hello ' + soy.$$escapeHtml(opt_data.name) + '!' : soy.$$escapeHtml(opt_data.greetingWord) + ' ' + soy.$$escapeHtml(opt_data.name) + '!');
};
if (goog.DEBUG) {
  examples.simple.helloName.soyTemplateName = 'examples.simple.helloName';
}


examples.simple.helloNames = function(opt_data, opt_ignored) {
  var output = examples.simple.helloName(opt_data) + '<br>';
  var additionalNameList16 = opt_data.additionalNames;
  var additionalNameListLen16 = additionalNameList16.length;
  if (additionalNameListLen16 > 0) {
    for (var additionalNameIndex16 = 0; additionalNameIndex16 < additionalNameListLen16; additionalNameIndex16++) {
      var additionalNameData16 = additionalNameList16[additionalNameIndex16];
      output += examples.simple.helloName({name: additionalNameData16}) + ((! (additionalNameIndex16 == additionalNameListLen16 - 1)) ? '<br>' : '');
    }
  } else {
    output += 'No additional people to greet.';
  }
  return output;
};
if (goog.DEBUG) {
  examples.simple.helloNames.soyTemplateName = 'examples.simple.helloNames';
}
