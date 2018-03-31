describe('BMI_UI - index.html', function() {
  describe('BMI_UI - metric', function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      $.holdReady(false);
      $('#weight').val('90');
      $('#height').val('186');
      $('#calculate').trigger('click');
    });

    it("displays BMI Value", function() {
      expect($('#display_value').text()).toBe('Your BMI is 26.01');
    });

    it("displays BMI Message", function() {
      expect($('#display_message').text()).toBe('and you are Overweight');
    });
  });

  describe('BMI_UI - Imperial', function() {
    beforeEach(function() {
      jasmine.getFixtures().fixturesPath = '.';
      loadFixtures('index.html');
      $.holdReady(false);
      $('#imperial').prop('checked', true);
      $('#weight_lb').val('198.416');
      $('#height_ft').val('6');
      $('#height_in').val('1.23');
      $('#calculate').trigger('click');
    });

    it("displays BMI Value", function() {
      expect($('#display_value').text()).toBe('Your BMI is 26.01');
    });

    it("displays BMI Message", function() {
      expect($('#display_message').text()).toBe('and you are Overweight');
    });
  });

});
