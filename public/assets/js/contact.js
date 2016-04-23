submit = function() {
  $('#name').val('');
  $('#replyto').val('');
  $('#msg').val('');
  // to jump back to top after clear
  $('html, body').animate({
    scrollTop: ($('#contact-us').offset().top - 0)
  }, 1000);
  return false;
// $('body').animate({scrollTop : 0}, 1000);
 }
