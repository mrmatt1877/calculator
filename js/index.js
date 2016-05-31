$(document).ready(function() {
  var math = ""
  var value
  var answer
  $(".button").on("click", function() {
    value = $(this).val();
    math += value;
    answer = eval(math);
    $('.textbox').val(math)

  });
  $("#answer").on("click", function() {
    $('.textbox').val(answer)
  });
  $("#clear").on("click", function() {
    math = ""
    $('.textbox').val(math)
  });
});