
$(document).ready(function () {

  /*  $("#impact-form").submit(function (e) {
      e.preventDefault();
      console.log("submit");
      console.log($(this).serialize());
      $.ajax({
        type: "POST",
        url: "https://api.apispreadsheets.com/data/16209/",
        data: $(this).serialize(),
        success: function () {
          alert("Form Data Submitted :)");
        },
        error: function () {
          alert("There was an error :(");
        },
      });
    });
    
  */
  let validator = $("#impact-form").jbvalidator({
    errorMessage: true,
    successClass: true,
    language: "/lang.json",
  });
  let jsonContent = null;
  fetch('./lang.json')
    .then((response) => response.json())
    .then((json) => jsonContent = json);

  validator.validator.stageOne = function (el, event) {
    if ($(el).is("[name=moneyAmount]") && $(el).val().length < 0) {
      return "נא להזין סכום תקין";
    }
    if ($(el).is("[name=stage1-percentage]") && ($(el).val() > 100 || $(el).val() < 1 || $(el).val().length == 0)) {
      if ($(el).val().length == 0) {
        return "נא לבחור אחוז";
      } else {
        return "נא להזין אחוז בטווח 1 עד 100";
      }
    }
  };

  validator.validator.forth = function (el, event) {
    if ($(el).is("[name=firstName]") && $(el).val().length < 3) {
      return "Your firstName is too short.";
    }

    if ($(el).is("[name=lastName]") && $(el).val().length < 3) {
      return "Your lastName is too short.";
    }
  };



  curOpen = $(".me-2")[0];
  curStage = $("div[class^='stage-']")[0];
  selectedStage = "0";
  console.log(curStage);

  $(".prev").click(function () {
    if (curOpen != null) {
      curOpen = $(curOpen).prev();
      $(curOpen).click();
    }
  });

  $(".next").click(function () {
    validator.checkAll();
    validator.reload();
  
    if (curOpen != null) {
      curOpen = $(curOpen).next();
      $(curOpen).click();
    }
  });

  $(".me-2").on("click", function () {
    if (!$(this).hasClass("active")) {
      curOpen = null;
      $(".me-2").removeClass("active");
      $(".me-2").addClass("inactive");
      $(this).addClass("active");
      $(this).removeClass("inactive");
      selectedStage = $(this).text();
      curOpen = { ...$(this) };

      if ($(".stage-" + selectedStage).hasClass("visually-hidden")) {
        $("div[class^='stage-']").addClass("visually-hidden");
        $(".stage-" + selectedStage).removeClass("visually-hidden");
        curStage = { ...$(".stage-" + selectedStage) };
      }
      if($(".wizard-title").hasClass("wizard-title-active")){
        $(".wizard-title").removeClass("wizard-title-active");
        $(".wizard-title:nth-of-type("+selectedStage+")").addClass("wizard-title-active");
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
