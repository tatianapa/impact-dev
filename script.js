$(function () {
  $.validator.addMethod(
    "minAge",
    function (value, element, min) {
      var today = new Date();
      var birthDate = new Date(value);
      var age = today.getFullYear() - birthDate.getFullYear();

      if (age > min + 1) {
        return true;
      }

      var m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age >= min;
    },
    "גיל פחות מ-18"
  );
  function validateStage(stage){
    $(".next").removeClass("visually-hidden");
    $(".prev").removeClass("visually-hidden");
    $(".submit").addClass("visually-hidden");

    if (stage == 1) {
      $(".prev").addClass("visually-hidden");
    }
    else{
      $(".prev").removeClass("visually-hidden");
    }

    if (stage == 8) {
      $(".next").addClass("visually-hidden");
      $(".submit").removeClass("visually-hidden");
    }
    else{
      $(".next").removeClass("visually-hidden");
      $(".submit").addClass("visually-hidden");
    }


    switch (stage) {
      case "1":
        validator.element('#money-amount');
        validator.element('#stage1-percentage');
        break;
      case "2":
        validator.element("#birthdate");
        validator.element("input[name='private-money-percent']");
        validator.element("input[name='money-period']");
        validator.element("input[name='money-lost']");
        validator.element("input[name='money-if']");
        break;
      case "3":
        break;
      case "4":
        validator.element("input[name='firstName']");
        validator.element("input[name='lastName']");
        validator.element("input[name='tz']");
        validator.element("input[name='phone']");
        validator.element("input[name='gender']");
        validator.element("input[name='personal-email']");
        validator.element("input[name='city']");
        validator.element("input[name='apt']");
        validator.element("input[name='zip-code']");
        validator.element("input[name='reports']");
        validator.element("input[name='terms']");
        break;
      
      case "5":
        validator.element("input[name='il-citizen']");
        validator.element("input[name='us-citizen']");
        validator.element("#employment-type");
        validator.element("input[name='reg-check-1']");
        validator.element("input[name='reg-check-2']");
        validator.element("input[name='reg-check-3']");
        validator.element("input[name='reg-check-4']");
        validator.element("input[name='reg-check-5']");
        validator.element("input[name='reg-check-6']");
        break;

      case "6":
        validator.element("#money-origin");
        validator.element("#bank");
        validator.element("input[name='additional-deposits']");
        validator.element("input[name='expected-amount']");
        validator.element("input[name='id-file']");
        validator.element("input[name='card-file']");
        break;

      case "7":
        validator.element("input[name='partner']");
        validator.element("input[name='relation-type']");
        validator.element("input[name='firstName-partner']");
        validator.element("input[name='lastName-partner']");
        validator.element("input[name='id-partner']");
        validator.element("input[name='phone-partner']");
        validator.element("input[name='gender-partner']");
        validator.element("input[name='personal-email-partner']");
        validator.element("input[name='city-partner']");
        validator.element("input[name='apt-partner']");
        validator.element("input[name='zip-code-partner']");
        validator.element("input[name='id-file-partner']");
        validator.element("input[name='card-file-partner']");
        break;

      case "8":
        validator.element("input[name='manage-1']");
        validator.element("input[name='manage-2']");
        validator.element("input[name='manage-3']");
        validator.element("input[name='manage-4']");
        validator.element("input[name='manage-5']");
        validator.element("input[name='manage-6']");
        validator.element("input[name='manage-7']");
        break;

      default:
        break;
    }

    if(validator.numberOfInvalids() > 0){
      return false;
    }
    return true;
  }
  var validator = $("#impact-form").validate({
    lang: "he",
    // errorContainer: "#messageBox1, #messageBox2",
    // errorLabelContainer: "#messageBox1 ul",
    //wrapper: "ul",
    errorElement: "div",
    errorPlacement: function ( error, element ) {
      error.addClass( "invalid-feedback" );
      if ( element.prop("type") === "checkbox" ) {
        error.insertAfter( element.parent( "label" ) );
      }
      else if ( element.prop("type") === "radio" ) {
        error.insertAfter( element.parent().siblings('.form-check').last() );
      } else {
        error.insertAfter( element );
      }
    },

    highlight: function ( element, errorClass, validClass ) {
      $( element ).parents(".col-sm-5").addClass( "has-error" ).removeClass( "has-success" );
    },

    unhighlight: function (element, errorClass, validClass) {
      $( element ).parents(".col-sm-5").addClass( "has-success" ).removeClass( "has-error" );
    },

    debug: true,
    submitHandler: function () {
      alert("Submitted!");
    },
    rules: {
//======================================================================================================
      // stage: 1
      // type: option
      "money-amount": {
        required: true,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: number
      "stage1-percentage": {
        required: true,

      },
//======================================================================================================
      // stage: 2
      // type: date
      "birthdate": {
        required: true,
        minAge: 18,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: radio
      "private-money-percent": {
        required: true
      },
      // type: radio
      "money-period": {
        required: true
      },
      // type: radio
      "money-lost": {
        required: true
      },
      // type: radio
      "money-if":{
        required: true
      },
//======================================================================================================
      // stage: 3
//======================================================================================================
      // stage: 4
      // type: text
      "firstName": {
        required: true
      },
      // type: text
      "lastName": {
        required: true
      },
      // type: text
      "tz": {
        required: true,
        minlength: 7,
        maxlength: 9
      },
      // type: text
      "phone": {
        required: true,
        minlength: 9,
        maxlength: 10,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: radio
      "gender": {
        required: true
      },
      // type: email
      "personal-email": {
        required: true,
        email: true,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: text
      "city": {
        required: true
      },
      // type: text
      "apt": {
        required: true
      },
      // type: text
      "zip-code": {
        required: true,
        minlength: 5,
        maxlength: 5,
        normalizer: function (value) {
          return $.trim(value);
        },

      },
      // type: radio
      "reports": {
        required: true
      },
      // type: checkbox
      "terms": {
        required: true
      },
//======================================================================================================
      // stage: 5
      // type: radio
      "il-citizen": { 
        required: true
      },
      // type: radio
      "us-citizen": {
        required: true
      },
      // type: option
      "employment-type": {
        required: true
      },
      // type: checkbox
      "reg-check-1":{
        required: true
      },
      // type: checkbox
      "reg-check-2":{
        required: true
      },
      // type: checkbox
      "reg-check-3":{
        required: true
      },
      // type: checkbox
      "reg-check-4":{
        required: true
      },
      // type: checkbox
      "reg-check-5":{
        required: true
      },
      // type: checkbox
      "reg-check-6":{
        required: true
      },
//======================================================================================================
      // stage: 6
      // type: option
      "money-origin": {
        required: true
      },
      // type: option
      "bank": {
        required: true
      },
      // type: radio
      "additional-deposits" : {
        required: true
      },
      // type: radio
      "expected-amount": {
        required: true
      },
      // type: file
      "id-file": {
        required: true
      },
      // type: file
      "card-file": {
        required: true
      },
//======================================================================================================
      // stage: 7
      // type: radio
      "partner": {
        required: true
      },
      // type: radio
      "relation-type": {
        required: true
      },
      // type: text
      "firstName-partner": {
        required: true
      },
      // type: text
      "lastName-partner": {
        required: true
      },
      // type: text
      "id-partner": {
        required: true,
        minlength: 7,
        maxlength: 9
      },
      // type: text
      "phone-partner": {
        required: true,
        minlength: 9,
        maxlength: 10,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: text
      "gender-partner": {
        required: true
      },
      // type: text
      "personal-email-partner": {
        required: true,
        email: true,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: text
      "city-partner": {
        required: true
      },
      // type: text
      "apt-partner": {
        required: true
      },
      // type: text
      "zip-code-partner": {
        required: true,
        minlength: 5,
        maxlength: 5,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: file
      "id-file-partner": {
        required: true
      },
      // type: file
      "card-file-partner": {
        required: true
      },
      //checkbox
      "manage-1": {
        required: true
      },
      //checkbox
      "manage-2": {
        required: true
      },
      //checkbox
      "manage-3": {
        required: true
      },
      //checkbox
      "manage-4": {
        required: true
      },
      //checkbox
      "manage-5": {
        required: true
      },
      //checkbox
      "manage-6": {
        required: true
      },
      //checkbox
      "manage-7": {
        required: true
      }
//======================================================================================================
    },
    messages: {
      "money-amount": {
        required: "נא לבחור סכום להשקעה",
      },
    },
  });

  curOpenWizard = $(".me-2")[0];
  curStage = $("div[class^='stage-']")[0];
  selectedStage = "1";

  // when pressed prev button go to previous stage
  // run validation
  $(".prev").click(function () { 
    console.log("curStage", curStage);
    console.log("curOpenWizard", curOpenWizard);
    console.log("selectedStage", selectedStage);

    if(validateStage(selectedStage) == false) {
      
    }
    else{
      selectedStage = String(parseInt(selectedStage) - 1);
          if (selectedStage == "0") {
            selectedStage = "1";
          }

          if ($(".stage-" + selectedStage).hasClass("visually-hidden")) {
            $("div[class^='stage-']").addClass("visually-hidden");
            $(".stage-" + selectedStage).removeClass("visually-hidden");
            curStage = { ...$(".stage-" + selectedStage) };
          }
          if ($(".wizard-title").hasClass("wizard-title-active")) {
            $(".wizard-title").removeClass("wizard-title-active");
            $(".wizard-title:nth-of-type(" + selectedStage + ")").addClass(
              "wizard-title-active"
            );
          }
        
    }
  });

  // when pressed next button go to next stage
  // run validation
  $(".next").click(function () {
    console.log("curStage", curStage);
    console.log("curOpenWizard", curOpenWizard);
    console.log("selectedStage", selectedStage);
   

    if(validateStage(selectedStage) == false) {
      
    }
    else{
      $(".prev").removeClass("visually-hidden");
      selectedStage = String(parseInt(selectedStage) + 1);
      if (selectedStage == "9") {
        selectedStage = "8";
      }

      if ($(".stage-" + selectedStage).hasClass("visually-hidden")) {
        $("div[class^='stage-']").addClass("visually-hidden");
        $(".stage-" + selectedStage).removeClass("visually-hidden");
        curStage = { ...$(".stage-" + selectedStage) };
      }

      if ($(".wizard-title").hasClass("wizard-title-active")) {
        $(".wizard-title").removeClass("wizard-title-active");
        $(".wizard-title:nth-of-type(" + selectedStage + ")").addClass("wizard-title-active");
      }
    
      if($(".wizard-btn .me-2").hasClass("active")) {
        $(".wizard-btn .me-2").removeClass("active").addClass("inactive");

        $(".wizard-btn .me-2:nth-of-type(" + selectedStage + ")").addClass("active").removeClass("inactive");
        debugger;
        curOpenWizard = { ...$(".wizard-btn .me-2:nth-of-type(" + selectedStage + ")") };
      }
    }
   });

  $(".submit").on("click", function ($event) {
    if (confirm("Click OK to continue?")) {
      custom_sub_form();
      validator.destroy();
    } else {
      $event.preventDefault();
      return false;
    }
  });

  $(".me-2").on("click", function () {
    if (!$(this).hasClass("active")) {
      curOpenWizard = null;
      $(".me-2").removeClass("active");
      $(".me-2").addClass("inactive");
      $(this).addClass("active");
      $(this).removeClass("inactive");
      selectedStage = $(this).text();
      curOpenWizard = { ...$(this) };

      if ($(".stage-" + selectedStage).hasClass("visually-hidden")) {
        $("div[class^='stage-']").addClass("visually-hidden");
        $(".stage-" + selectedStage).removeClass("visually-hidden");
        curStage = { ...$(".stage-" + selectedStage) };
      }
      if ($(".wizard-title").hasClass("wizard-title-active")) {
        $(".wizard-title").removeClass("wizard-title-active");
        $(".wizard-title:nth-of-type(" + selectedStage + ")").addClass(
          "wizard-title-active"
        );
      }
    }
  });


  $(function () {

    //DANIEL ----- my functions below
    //   function toggleSecondList() {
    //     const firstListOptions = document.querySelectorAll('input[name="additional-deposits"]');
    //     const secondListContainer = document.getElementById('expected-amount-container');
    //     firstListOptions.forEach(option => {
    //       option.addEventListener('change', () => {
    //         if (option.value === '1') {
    //           secondListContainer.style.display = 'none';
    //         } else {
    //           secondListContainer.style.display = 'block';
    //         }
    //       });
    //     });
    //   }
    //   // Call the function to enable the behavior
    //   toggleSecondList();
    //   function showRegulationMessage() {
    //     const checkboxes = document.querySelectorAll('.reg-check');
    //     const messageDiv = document.querySelector('.contact-us-regulation');
    //     // Loop through all checkboxes to check if any is checked
    //     let anyCheckboxChecked = false;
    //     for (const checkbox of checkboxes) {
    //       if (checkbox.checked) {
    //         anyCheckboxChecked = true;
    //         break;
    //       }
    //     }
    //     // Set the "CheckboxListRegulation" flag to false
    //     //DANIEL - if the flag below is set to false, the form validation is finished, you can send the details
    //     window.CheckboxListRegulation = false;
    //     // Show or hide the message div based on whether any checkbox is checked
    //     if (anyCheckboxChecked) {
    //       messageDiv.style.display = 'block';
    //     } else {
    //       messageDiv.style.display = 'none';
    //     }
    //   }
    //   // Call the function initially when the page loads
    //   showRegulationMessage();
    //   // Attach event listeners to checkboxes to trigger the function on change
    //   const checkboxes = document.querySelectorAll('.reg-check');
    //   for (const checkbox of checkboxes) {
    //     checkbox.addEventListener('change', showRegulationMessage);
    //   }
    //   function showHiddenMessage() {
    //     // Get the "us-yes" and "us-no" radio button elements
    //     const usYesRadio = document.getElementById("us-yes");
    //     const usNoRadio = document.getElementById("us-no");
    //     // Get the div element containing the hidden message
    //     const hiddenMessageDiv = document.querySelector(".us-person-regulation");
    //     // Function to update the visibility of the hidden message div
    //     function updateMessageVisibility() {
    //       if (usYesRadio.checked) {
    //         hiddenMessageDiv.style.display = "block";
    //         //DANIEL - if the flag below is set to TRUE (!!!!!), the form validation is finished, you can send the details
    //         window.UsYesRegulation = true;
    //       } else if (usNoRadio.checked) {
    //         hiddenMessageDiv.style.display = "none";
    //         window.UsYesRegulation = false;
    //       }
    //     }
    //     // Add event listeners to the radio buttons
    //     usYesRadio.addEventListener("change", updateMessageVisibility);
    //     usNoRadio.addEventListener("change", updateMessageVisibility);
    //     // Call the function initially to set the message visibility correctly
    //     updateMessageVisibility();
    //   }
    //   // Call the function to set up the event listener
    //   showHiddenMessage();
    //   //DANIEL - stage-1 percent validation
    //   function validatePercentInput() {
    //     const inputElement = document.querySelector('input[name="stage1-percentage"]');
    //     const errorMessage = document.querySelector('.invalid-percent');
    //     const inputValue = parseInt(inputElement.value);
    //     if (isNaN(inputValue) || inputValue < 0 || inputValue > 100) {
    //       errorMessage.style.display = 'block';
    //     } else {
    //       errorMessage.style.display = 'none';
    //     }
    //   }
    //   // Add event listener to the input element to trigger validation on input change
    //   document.querySelector('input[name="stage1-percentage"]').addEventListener('input', validatePercentInput);
    //  //DANIEL Under 18 check stage-2
    //   function checkAge() {
    //     const birthdateInput = document.getElementById("birthdate");
    //     const invalidFeedback = document.querySelector(".invalid-feedback-under18");
    //     // if (!birthdateInput.value) {
    //     //   invalidFeedback.style.display = "block";
    //     //   return;
    //     // }
    //     const birthdate = new Date(birthdateInput.value);
    //     const today = new Date();
    //     const ageInMilliseconds = today - birthdate;
    //     const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
    //     if (ageInYears < 18) {
    //       invalidFeedback.style.display = "block";
    //     } else {
    //       invalidFeedback.style.display = "none";
    //     }
    //   }
    //   // Attach the function to the input field's change event
    //   const birthdateInput = document.getElementById("birthdate");
    //   birthdateInput.addEventListener("change", checkAge);
  });
});
