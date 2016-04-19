// Variables
// Helper Functions
// Events

amount = 0;
pTip = 0;
staticTips = [8, 10, 15, 18, 20, 25];

calculate = function(amount, pTip) {
  var result = amount * (pTip / 100);
  result = result.toFixed(2);
  return result;
};

// $('input.amount').on('change', function() {
//   amount = $(this).val();
//   console.log(amount + "this is the amount");
// });
//
// $('input.pTip').on('change', function() {
//   pTip = $(this).val();
//   console.log(pTip + "this is the tip percentage");
// });
allTips = function() {
  amount = $('input.amount').val();
  amount = parseFloat(amount).toFixed(2);
  pTip = $('input.pTip').val();
  console.log(amount, pTip);
  pTip = parseFloat(pTip).toFixed(2);
  if(amount < 0 || pTip < 0) {
    alert('cant input negative numbers');
    return false;
  }
  $('input.custom-tip').val(calculate(amount, pTip));

  for (var i = 0; i < staticTips.length; i++) {
    var selector = 'input.static-tip' + staticTips[i];
    // eg. input.static-tip8
    // eg. input.static-tip10
    $(selector).val(calculate(amount, staticTips[i]));
  }
}
// $('button.calculate').on('click', function() {
//
// });

restart = function() {
  $('input.custom-tip').val('');
  $('input.amount').val('');
  $('input.pTip').val('');
  for (var i = 0; i < staticTips.length; i++) {
    var selector = 'input.static-tip' + staticTips[i];
    $(selector).val('');
  }

// $('body').animate({scrollTop : 0}, 1000);
 }

// $('button.restart').on('click', function() {
//
// });
