// Variables
// Helper Functions
// Events

amount = 0;
pTip = 0;
staticTips = [8, 10, 15, 18, 20, 25];

calculate = function(amount, pTip) {
  return amount * (pTip / 100);
};

$('input.amount').on('change', function() {
  amount = $(this).val();
});
console.log(amount + "this is the amount");

$('input.pTip').on('change', function() {
  pTip = $(this).val();
});
console.log(pTip + "this is the tip percentage");

$('button.calculate').on('click', function() {
  $('input.custom-tip').val(calculate(amount, pTip));

  for (var i = 0; i < staticTips.length; i++) {
    var selector = 'input.static-tip' + staticTips[i];
    // eg. input.static-tip8
    // eg. input.static-tip10
    $(selector).val(calculate(amount, staticTips[i]));
  }
});

$('button.restart').on('click', function() {
  $('input.custom-tip').val('');

  for (var i = 0; i < staticTips.length; i++) {
    var selector = 'input.static-tip' + staticTips[i];
    $(selector).val('');
  }

  $('body').animate({scrollTop : 0}, 1000);
});
