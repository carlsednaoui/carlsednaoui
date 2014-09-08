$(function() {

  var utms = [
    'utm_campaign=carlsednaoui',
    'utm_source=carlsednaoui',
    'utm_medium=website-referral',
    'utm_content=blog-post'
  ].join('&');

  $('a').each(function(i, link) {
    
    /**
     * all links should open in a new window
     */
    
    link.target = "_blank";

    
    /**
     * append tracking to all outbound urls
     * so long as these don't point to carlsednaoui.com || localhost
     */
    
    if (link.href.indexOf('carlsednaoui.com') !== -1 ||
        link.href.indexOf('localhost') !== -1) {
      return;
    }

    if (link.href.indexOf('?') < 0) {
      var params = '?' + utms;
      link.href += params
    } else {
      var params = '&' + utms;
      link.href += params
    }

  });

});
