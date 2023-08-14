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
  $.validator.addMethod(
    "isValidID",
    function IDValidator(id)
{
    if (id.length !== 9 || isNaN(id)) {  // Make sure ID is formatted properly
        return false;
    }
    let sum = 0, incNum;
    for (let i = 0; i < id.length; i++) {
        incNum = Number(id[i]) * ((i % 2) + 1);  // Multiply number by 1 or 2
        sum += (incNum > 9) ? incNum - 9 : incNum;  // Sum the digits up and add to total
    }
    return (sum % 10 === 0);
},
    "מספר תעודת זהות אינו תקין"
  );

  function validateStage(stage) {
    switch (stage) {
      case "1":
        validator.element("#money-amount");
        validator.element("#stage1-percentage");
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
      case "all":
        validator.element("#money-amount");
        validator.element("#stage1-percentage");
        validator.element("#birthdate");
        validator.element("input[name='private-money-percent']");
        validator.element("input[name='money-period']");
        validator.element("input[name='money-lost']");
        validator.element("input[name='money-if']");
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
        validator.element("input[name='il-citizen']");
        validator.element("input[name='us-citizen']");
        validator.element("#employment-type");
        validator.element("input[name='reg-check-1']");
        validator.element("input[name='reg-check-2']");
        validator.element("input[name='reg-check-3']");
        validator.element("input[name='reg-check-4']");
        validator.element("input[name='reg-check-5']");
        validator.element("input[name='reg-check-6']");
        validator.element("#money-origin");
        validator.element("#bank");
        validator.element("input[name='additional-deposits']");
        validator.element("input[name='expected-amount']");
        validator.element("input[name='id-file']");
        validator.element("input[name='card-file']");
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

    if (validator.numberOfInvalids() > 0) {
      return false;
    }
    return true;
  }

  var validator = $("#impact-form").validate({
    lang: "he",
    focusInvalid: false,
    invalidHandler: function (form, validator) {
      if (!validator.numberOfInvalids()) return;

      $("html, body").animate(
        {
          scrollTop: $(validator.errorList[0].element).offset().top,
        },
        2000
      );
    },
    errorElement: "div",
    errorPlacement: function (error, element) {
      error.addClass("invalid-feedback");
      if (element.prop("type") === "checkbox") {
        error.insertAfter(element.parent(".form-check"));
      } else if (element.prop("type") === "radio") {
        error.insertAfter(element.parent().siblings(".form-check").last());
      } else {
        error.insertAfter(element);
      }
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
        // percentageInterval: 0,
        // normalizer: function (value) {
        //   return $.trim(value);
        // },
      },
      //======================================================================================================
      // stage: 2
      // type: date
      birthdate: {
        required: true,
        minAge: 18,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: radio
      "private-money-percent": {
        required: true,
      },
      // type: radio
      "money-period": {
        required: true,
      },
      // type: radio
      "money-lost": {
        required: true,
      },
      // type: radio
      "money-if": {
        required: true,
      },
      //======================================================================================================
      // stage: 3
      //======================================================================================================
      // stage: 4
      // type: text
      firstName: {
        required: true,
      },
      // type: text
      lastName: {
        required: true,
      },
      // type: text
      tz: {
        required: true,
        minlength: 7,
        maxlength: 9,
      },
      // type: text
      phone: {
        required: true,
        minlength: 9,
        maxlength: 10,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: radio
      gender: {
        required: true,
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
      city: {
        required: true,
      },
      // type: text
      apt: {
        required: true,
      },
      // type: text
      "zip-code": {
        required: true,
        minlength: 5,
        maxlength: 7,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: radio
      reports: {
        required: true,
      },
      // type: checkbox
      terms: {
        required: true,
      },
      //======================================================================================================
      // stage: 5
      // type: radio
      "il-citizen": {
        required: true,
      },
      // type: radio
      "us-citizen": {
        required: true,
      },
      // type: option
      "employment-type": {
        required: true,
      },
      // type: checkbox
      "reg-check-1": {
        required: false,
      },
      // type: checkbox
      "reg-check-2": {
        required: false,
      },
      // type: checkbox
      "reg-check-3": {
        required: false,
      },
      // type: checkbox
      "reg-check-4": {
        required: false,
      },
      // type: checkbox
      "reg-check-5": {
        required: false,
      },
      // type: checkbox
      "reg-check-6": {
        required: false,
      },
      //======================================================================================================
      // stage: 6
      // type: option
      "money-origin": {
        required: true,
      },
      // type: option
      bank: {
        required: true,
      },
      // type: radio
      "additional-deposits": {
        required: true,
      },
      // type: radio
      "expected-amount": {
        //'required: true' only if 'additional-deposits' is selected
        required: function (element) {
          return $('input[name="additional-deposits"]:checked').val() !== "1";
        },
      },
      // type: file
      "id-file": {
        required: true
      },
      // type: file
      "card-file": {
        required: true,
      },
      //======================================================================================================
      // stage: 7
      // type: radio
      partner: {
        required: true,
      },
      // type: radio
      "relation-type": {
        required: function (element) {
          return $('input[name="partner"]:checked').val() === "partner-yes";
        },
      },
      // type: text
      "firstName-partner": {
        required: function (element) {
          return $('input[name="partner"]:checked').val() === "partner-yes";
        },
      },
      // type: text
      "lastName-partner": {
        required: function (element) {
          return $('input[name="partner"]:checked').val() === "partner-yes";
        },
      },
      // type: text
      "id-partner": {
        required: function (element) {
          return $('input[name="partner"]:checked').val() === "partner-yes";
        },
        minlength: 7,
        maxlength: 9,
      },
      // type: text
      "phone-partner": {
        required: function (element) {
          return $('input[name="partner"]:checked').val() === "partner-yes";
        },
        minlength: 9,
        maxlength: 10,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: text
      "gender-partner": {
        required: function (element) {
          return $('input[name="partner"]:checked').val() === "partner-yes";
        },
      },
      // type: text
      "personal-email-partner": {
        required: function (element) {
          return $('input[name="partner"]:checked').val() === "partner-yes";
        },
        email: true,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: text
      "city-partner": {
        required: function (element) {
          return $('input[name="partner"]:checked').val() === "partner-yes";
        },
      },
      // type: text
      "apt-partner": {
        required: function (element) {
          return $('input[name="partner"]:checked').val() === "partner-yes";
        },
      },
      // type: text
      "zip-code-partner": {
        required: function (element) {
          return $('input[name="partner"]:checked').val() === "partner-yes";
        },
        minlength: 5,
        maxlength: 5,
        normalizer: function (value) {
          return $.trim(value);
        },
      },
      // type: file
      "id-file-partner": {
        required: function (element) {
          return $('input[name="partner"]:checked').val() === "partner-yes";
        },
      },
      // type: file
      "card-file-partner": {
        required: function (element) {
          return $('input[name="partner"]:checked').val() === "partner-yes";
        },
      },
      //checkbox
      "manage-1": {
        required: true,
      },
      //checkbox
      "manage-2": {
        required: true,
      },
      //checkbox
      "manage-3": {
        required: true,
      },
      //checkbox
      "manage-4": {
        required: true,
      },
      //checkbox
      "manage-5": {
        required: true,
      },
      //checkbox
      "manage-6": {
        required: true,
      },
      //checkbox
      "manage-7": {
        required: true,
      },
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

  $(".prev").on("click", function ($event) {
    console.log("curStage", curStage);
    console.log("curOpenWizard", curOpenWizard);
    console.log("selectedStage", selectedStage);
    let selectedStageInt = parseInt(selectedStage, 10);
    selectedStageInt -= 1;
    selectedStageInt = selectedStageInt < 1 ? 1 : selectedStageInt;

    if (
      validateStage(selectedStage) === true &&
      runPreChecks(selectedStageInt)
    ) {
      // update selected stage
      selectedStage = String(selectedStageInt);

      // hide all stages
      const stages = document.querySelectorAll("div[class^='stage-']");
      stages.forEach((stage) => stage.classList.add("visually-hidden"));

      // show current stage
      const currentStage = document.querySelector(".stage-" + selectedStage);
      currentStage.classList.remove("visually-hidden");

      // update current stage
      curStage = { ...currentStage };

      // make all wizard titles inactive
      const wizardTitles = document.querySelectorAll("div.wizard-title");
      wizardTitles.forEach((title) =>
        title.classList.remove("wizard-title-active")
      );

      // make current wizard title active
      const currentWizardTitle = wizardTitles[selectedStageInt - 1];
      currentWizardTitle.classList.add("wizard-title-active");

      // make all wizard buttons inactive
      const wizardButtons = document.querySelectorAll(".wizard-btn");
      wizardButtons.forEach((button) => {
        button.classList.remove("active");
        button.classList.add("inactive");
      });

      // make current wizard button active
      const currentWizardButton = wizardButtons[selectedStageInt - 1];
      currentWizardButton.classList.add("active");
      currentWizardButton.classList.remove("inactive");

      // update current wizard button
      curOpenWizard = { ...currentWizardButton };

      // hide prev button if on first stage
      if (selectedStage === "1") {
        const prevButton = document.querySelector(".prev");
        prevButton.classList.add("visually-hidden");
      }
    }
  });

  $(".next").on("click", function ($event) {
    console.log("curStage", curStage);
    console.log("curOpenWizard", curOpenWizard);
    console.log("selectedStage", selectedStage);
    let selectedStageInt = parseInt(selectedStage, 10);
    selectedStageInt += 1;
    selectedStageInt = selectedStageInt > 8 ? 8 : selectedStageInt;

    if (
      validateStage(selectedStage) === true &&
      runPreChecks(selectedStageInt)
    ) {
      // show prev button
      const prevButton = document.querySelector(".prev");
      prevButton.classList.remove("visually-hidden");

      // update selected stage

      selectedStage = String(selectedStageInt);

      // hide all stages
      const stages = document.querySelectorAll("div[class^='stage-']");
      stages.forEach((stage) => stage.classList.add("visually-hidden"));

      // show current stage
      const currentStage = document.querySelector(".stage-" + selectedStage);
      currentStage.classList.remove("visually-hidden");

      // update current stage
      curStage = { ...currentStage };

      // make all wizard titles inactive
      const wizardTitles = document.querySelectorAll("div.wizard-title");
      wizardTitles.forEach((title) =>
        title.classList.remove("wizard-title-active")
      );

      // make current wizard title active
      const currentWizardTitle = wizardTitles[selectedStageInt - 1];
      currentWizardTitle.classList.add("wizard-title-active");

      // make all wizard buttons inactive
      const wizardButtons = document.querySelectorAll(".wizard-btn");
      wizardButtons.forEach((button) => {
        button.classList.remove("active");
        button.classList.add("inactive");
      });

      // make current wizard button active
      const currentWizardButton = wizardButtons[selectedStageInt - 1];
      currentWizardButton.classList.add("active");
      currentWizardButton.classList.remove("inactive");

      // update current wizard button
      curOpenWizard = { ...currentWizardButton };
    }
  });

  $(".submit").on("click", function ($event) {
    if (validateStage("all") === true) {
      if (confirm("Click OK to continue?")) {
        custom_sub_form();
        validator.destroy();
      } else {
        $event.preventDefault();
        return false;
      }
    }
  });

  $(".me-2").on("click", function ($event) {
    console.log("curStage", curStage);
    console.log("curOpenWizard", curOpenWizard);
    console.log("selectedStage", selectedStage);
    let selectedStageInt = parseInt($(this).text(), 10);
    if (
      validateStage(selectedStage) === true &&
      runPreChecks(selectedStageInt)
    ) {
      // update selected stage

      selectedStage = String(selectedStageInt);

      // hide all stages
      const stages = document.querySelectorAll("div[class^='stage-']");
      stages.forEach((stage) => stage.classList.add("visually-hidden"));

      // show current stage
      const currentStage = document.querySelector(".stage-" + selectedStageInt);
      currentStage.classList.remove("visually-hidden");

      // update current stage
      curStage = { ...currentStage };

      // make all wizard titles inactive
      const wizardTitles = document.querySelectorAll("div.wizard-title");
      wizardTitles.forEach((title) =>
        title.classList.remove("wizard-title-active")
      );

      // make current wizard title active
      const currentWizardTitle = wizardTitles[selectedStageInt - 1];
      currentWizardTitle.classList.add("wizard-title-active");

      // make all wizard buttons inactive
      const wizardButtons = document.querySelectorAll(".wizard-btn");
      wizardButtons.forEach((button) => {
        button.classList.remove("active");
        button.classList.add("inactive");
      });

      // make current wizard button active
      const currentWizardButton = wizardButtons[selectedStageInt - 1];
      currentWizardButton.classList.add("active");
      currentWizardButton.classList.remove("inactive");

      // update current wizard button
      curOpenWizard = { ...currentWizardButton };
    }
  });

  $('input[name="us-citizen"]').on("change", function () {
    if ($(this).val() === "us-yes") {
      $(".us-person-regulation").css("display", "block");
    } else {
      $(".us-person-regulation").css("display", "none");
    }
  });

  $('input[name="partner"]').on("change", function () {
    if ($(this).val() === "partner-yes") {
      $("#personal-details-partner").removeClass("visually-hidden");
    } else {
      $("#personal-details-partner").addClass("visually-hidden");
    }
  });

  // when the user clicks on radiobuttons in "additional-deposits" class, show/hide the second list
  $("input[name='additional-deposits']").on("change", function () {
    if ($(this).val() === "1") {
      $("#expected-amount-container").addClass("visually-hidden");
      $("input[name='expected-amount']").prop("checked", false);
    } else {
      $("#expected-amount-container").removeClass("visually-hidden");
      $("input[name='expected-amount']").prop("checked", false);
    }
  });

  $(".reg-check").on("change", function () {
    // Check if at least one checkbox is checked
    if ($(".reg-check:checked").length > 0) {
      // Show the error message
      $(".contact-us-regulation").show();
      redefineNextAsSubmit();
    } else {
      // Hide the error message
      $(".contact-us-regulation").hide();
      $(".next").unbind();
      $(".next").on("click", function ($event) {
        console.log("curStage", curStage);
        console.log("curOpenWizard", curOpenWizard);
        console.log("selectedStage", selectedStage);
        let selectedStageInt = parseInt(selectedStage, 10);
        selectedStageInt += 1;
        selectedStageInt = selectedStageInt > 8 ? 8 : selectedStageInt;
    
        if (
          validateStage(selectedStage) === true &&
          runPreChecks(selectedStageInt)
        ) {
          // show prev button
          const prevButton = document.querySelector(".prev");
          prevButton.classList.remove("visually-hidden");
    
          // update selected stage
    
          selectedStage = String(selectedStageInt);
    
          // hide all stages
          const stages = document.querySelectorAll("div[class^='stage-']");
          stages.forEach((stage) => stage.classList.add("visually-hidden"));
    
          // show current stage
          const currentStage = document.querySelector(".stage-" + selectedStage);
          currentStage.classList.remove("visually-hidden");
    
          // update current stage
          curStage = { ...currentStage };
    
          // make all wizard titles inactive
          const wizardTitles = document.querySelectorAll("div.wizard-title");
          wizardTitles.forEach((title) =>
            title.classList.remove("wizard-title-active")
          );
    
          // make current wizard title active
          const currentWizardTitle = wizardTitles[selectedStageInt - 1];
          currentWizardTitle.classList.add("wizard-title-active");
    
          // make all wizard buttons inactive
          const wizardButtons = document.querySelectorAll(".wizard-btn");
          wizardButtons.forEach((button) => {
            button.classList.remove("active");
            button.classList.add("inactive");
          });
    
          // make current wizard button active
          const currentWizardButton = wizardButtons[selectedStageInt - 1];
          currentWizardButton.classList.add("active");
          currentWizardButton.classList.remove("inactive");
    
          // update current wizard button
          curOpenWizard = { ...currentWizardButton };
        }
      });
      enableSubmit();
      enableNext();
      enablePrev();
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

// this function disables the submit button
function disableSubmit() {
  $(':input[type="submit"]').prop("disabled", true);
  $('input[type="text"]').keyup(function () {
    if ($(this).val() != "") {
      $(':input[type="submit"]').prop("disabled", false);
    }
  });
}
function showIdName(){
  $("#id-file").on('input', function() {
    var fileName = $(this).val().split('\\').pop(); // Extract the file name from the full path
    $("#selectedFileName").text(fileName); // Display the file name in the span
});
}
function showCardName(){
  $("#card-file").on('change', function() {
    var fileName = $(this).val().split('\\').pop(); // Extract the file name from the full path
    $("#selectedCardName").text(fileName); // Display the file name in the span
});
}

// this function enables the submit button
function enableSubmit() {
  $(':input[type="submit"]').prop("disabled", false);
}

// this function disables the next button
function disableNext() {
  $(':input[type="button"]').prop("disabled", true);
}

// this function enables the next button
function enableNext() {
  $(':input[type="button"]').prop("disabled", false);
}

// this function disables the prev button
function disablePrev() {
  $(':input[type="button"]').prop("disabled", true);
}

// this function enables the prev button
function enablePrev() {
  $(':input[type="button"]').prop("disabled", false);
}

function redefineNextAsSubmit() {
  $(".next").unbind().on("click", function ($event) {
        custom_sub_form();
  });
}

function redefineNextAsNext() {
// unbind the click event and bind it again
  $(".next").unbind().on("click", function ($event) { // todo: fix

  });
}

function runPreChecks(stage) {
  $(".next").removeClass("visually-hidden");
  $(".prev").removeClass("visually-hidden");
  $(".submit").addClass("visually-hidden");

  let sum = 0;

  if (stage == 1) {
    $(".prev").addClass("visually-hidden");
  } else {
    $(".prev").removeClass("visually-hidden");
  }

  // if (stage == 2) {

  //   checkSumFor3Stage(sum);
  // }
  if (stage === 3) {
    const selectedPrivateMoneyPercentRadioButton = $(
      'input[name="private-money-percent"]:checked'
    );
    const selectedMoneyPeriodRadioButton = $(
      'input[name="money-period"]:checked'
    );
    const selectedMoneyLostRadioButton = $('input[name="money-lost"]:checked');
    const selectedMoneyIfRadioButton = $('input[name="money-if"]:checked');

    const privateMoneyPercentDataValue =
      selectedPrivateMoneyPercentRadioButton.data("value");
    const moneyPeriodDataValue = selectedMoneyPeriodRadioButton.data("value");
    const moneyLostDataValue = selectedMoneyLostRadioButton.data("value");
    const moneyIfDataValue = selectedMoneyIfRadioButton.data("value");

    sum =
      privateMoneyPercentDataValue +
      moneyPeriodDataValue +
      moneyLostDataValue +
      moneyIfDataValue;

    checkSumFor3Stage(sum);
  }
  if (stage === 5) {
    if ($(".reg-check:checked").length > 0) {
    }
  }

  if (stage === 6) {
    if ($('input[name="additional-deposits"]:checked').data("value") > 1) {
    }
  }
  if (stage === 8) {
    $(".next").addClass("visually-hidden");
    $(".submit").removeClass("visually-hidden");
  } else {
    $(".next").removeClass("visually-hidden");
    $(".submit").addClass("visually-hidden");
  }
  return true;
}

function checkSumFor3Stage(sum) {
  $(".stage-3").children("div").addClass("visually-hidden");
  if (sum <= 5) {
    $("div.result-disp-1").removeClass("visually-hidden");
  } else if (sum >= 6 && sum <= 15) {
    $("div.result-disp-2").removeClass("visually-hidden");
  } else if (sum >= 16 && sum <= 25) {
    $("div.result-disp-3").removeClass("visually-hidden");
  } else if (sum >= 26 && sum <= 40) {
    $("div.result-disp-4").removeClass("visually-hidden");
  }
}

function custom_sub_form() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/3U4mEOsmqtOvebUj/",
    type: "post",
    data: $("#impact-form").serializeArray(),
    success: function () {
      alert("Form Data Submitted :)");
    },
    error: function () {
      alert("There was an error :(");
    },
  });
}
