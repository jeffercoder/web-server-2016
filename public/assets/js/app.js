$(document).ready(function() {
  var today = new Date();

//  today = today.getDate() + "  "  + today.getMonth() + " " + today.getUTCFullYear();
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var mths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var mth = today.getMonth() + 1;
var mthName = mths[(mth-1)];
var word = days[today.getDay()];
today = word + " " + mthName + " " + today.getDate() +  " " + today.getUTCFullYear();


  $('#fecha').text(today);
  // Init
  $.get('home.html', function(data) {
    $('.container').html(data);
  });

  // Links
  $('#home').on('click', function() {
    $.get('home.html', function(data) {
      $('.container').html(data);
    });
  });

  $('#about').on('click', function() {
    $.get('about.html', function(data) {
      $('.container').html(data);
    });
  });

  // Events that need to be listened upon change
  $('.container').on('click', '.animate', function() {
    $('img').animate({
      left: "+=500"
    }, 2000, function() {
      $(this).animate({
        opacity: 0,
        bottom: "+=500"
      }, 2000, function() {
        $('h1').text('Complete');
      });
    });
  });
});

htmlDate = function() {
    var date = new Date();
    var html = "<p>" + date.getDate() + "</p>" + "<span> Monday </span>";
    return html;
  };
