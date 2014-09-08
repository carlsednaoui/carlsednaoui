/**
 * logic to use `.js-tweetable`
 */

$(function() {
  $('.js-tweetable').each(function(i, el) {
    var link = document.createElement('a'),
        url  = 'https://twitter.com/share?url=' + document.URL,
        via  = '&via=carlsednaoui',
        text = '&text=' + encodeURIComponent(el.innerText);
    link.target = '_blank';
    link.href =  url + via + text;
    link.innerHTML = el.innerHTML;

    $(el).html(link);
  });
});
