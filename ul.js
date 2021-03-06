!function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(definition)
  else context[name] = definition()
}('ul', this, function () {
  
  var nav = window.navigator
  var browserKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage']
  var i
  var lng;
  
  function ul () {
    // support for HTML 5.1 "navigator.languages"
    if (Array.isArray(nav.languages)) {
      for (i = 0; i < nav.languages.length; i++) {
        lng = nav.languages[i];
        if (lng && lng.length) {
          return lng;
        }
      }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserKeys.length; i++) {
      lng = nav[browserKeys[i]];
      if (lng && lng.length) {
        return lng;
      }
    }

    return null;
  }
  
  return ul;
});