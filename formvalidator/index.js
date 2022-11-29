$(document).ready(function() {
    $("#basic-form").validate({
      errorClass: "error fail-alert",
      validClass: "valid success-alert",
      rules: {
        name : {
          required: true,
          minlength: 3
        },
        age: {
          required: true,
          number: true,
          min: 18
        },
        email: {
          required: true,
          email: true
        },
        weight: {
          required: {
            depends: function(elem) {
              return $("#age").val() > 50
            }
          },
          number: true,
          min: 0
        }
      },
      messages : {
        name: {
          minlength: "Name should be at least 3 characters"
        },
        age: {
          required: "Please enter your age",
          number: "Please enter your age as a numerical value",
          min: "You must be at least 18 years old"
        },
        email: {
          email: "The email should be in the format: abc@domain.tld"
        },
        weight: {
          required: "People with age over 50 have to enter their weight",
          number: "Please enter your weight as a numerical value"
        }
      }
    });
  });