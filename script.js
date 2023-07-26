$(document).ready(function () {
  function getDateDiff() {
    const birthdate = new Date($("#birthdate").datepicker()).value;
    const diffInMs = Date.now() - birthdate.getTime();
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
    if (diffInYears >= 18) {
      console.log("The entered birthdate is more than 18 years ago.");
    } else {
      console.log("The entered birthdate is less than 18 years ago.");
    }
  }

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
    }
  });

  // todo:check : https://mdbootstrap.com/docs/standard/components/stepper/
  $(function () {
    let validator = $("#form-1").jbvalidator({
      errorMessage: true,
      successClass: true,
      language: "/lang.json",
    });

    //custom validate methode
    validator.validator.custom = function (el, event) {
      if ($(el).is("[name=password]") && $(el).val().length < 5) {
        return "Your password is too weak.";
      }
    };

    validator.validator.example = function (el, event) {
      if ($(el).is("[name=username]") && $(el).val().length < 3) {
        return "Your username is too short.";
      }
    };

    validator.checkAll();
    validator.reload();
    function toggleSecondList() {
      const firstListOptions = document.querySelectorAll('input[name="additional-deposits"]');
      const secondListContainer = document.getElementById('expected-amount-container');
    
      firstListOptions.forEach(option => {
        option.addEventListener('change', () => {
          if (option.value === '1') {
            secondListContainer.style.display = 'none';
          } else {
            secondListContainer.style.display = 'block';
          }
        });
      });
      
    }
    
    // Call the function to enable the behavior
    toggleSecondList();
    function showRegulationMessage() {
      const checkboxes = document.querySelectorAll('.reg-check');
      const messageDiv = document.querySelector('.contact-us-regulation');
    
      // Loop through all checkboxes to check if any is checked
      let anyCheckboxChecked = false;
      for (const checkbox of checkboxes) {
        if (checkbox.checked) {
          anyCheckboxChecked = true;
          break;
        }
      }
    
      // Set the "CheckboxListRegulation" flag to false

      //DANIEL - if the flag below is set to false, the form validation is finished, you can send the details

      window.CheckboxListRegulation = false;
    
      // Show or hide the message div based on whether any checkbox is checked
      if (anyCheckboxChecked) {
        messageDiv.style.display = 'block';
      } else {
        messageDiv.style.display = 'none';
      }
    }
    
    // Call the function initially when the page loads
    showRegulationMessage();
    
    // Attach event listeners to checkboxes to trigger the function on change
    const checkboxes = document.querySelectorAll('.reg-check');
    for (const checkbox of checkboxes) {
      checkbox.addEventListener('change', showRegulationMessage);
    }
  });
});
