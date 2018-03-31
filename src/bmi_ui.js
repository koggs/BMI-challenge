$(document).ready(function() {
  $('.imperial').hide();

  $('#calculate').click(function() {
    if ($('input[name="measurement"]:checked').val() === 'imperial') {
      var w = parseFloat($('#weight_lb').val()) * 0.4536;
      var f = parseFloat($('#height_ft').val()) * 30.48;
      var i = parseFloat($('#height_in').val()) * 2.54;
      var h = f + i
    } else if ($('input[name="measurement"]:checked').val() === 'metric') {
      var w = parseFloat($('#weight').val());
      var h = parseFloat($('#height').val());
    }
    var person = new Person({
      weight: w,
      height: h
    });
    person.calculate_bmi();
    $('#display_value').html('Your BMI is ' + person.bmiValue);
    $('#display_message').html('and you are ' + person.bmiMessage);
  });

  $('input[type="radio"]').click(function() {
    var inputValue = $(this).attr("value");
    var targetBox = $("." + inputValue);
    $(".bmi").not(targetBox).hide();
    $(targetBox).show();
  });
});
