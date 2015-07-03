jQuery.extend({
  getQueryParameters: function(str) {
    return (str || document.location.search).replace(/(^\?)/,'').split("&").map(function(n){return n = n.split("="),this[n[0]] = n[1],this}.bind({}))[0]
  }
})

$(document).ready(function() {
  $('#talks').fullpage({
    sectionSelector: '.topic'
  })
})
