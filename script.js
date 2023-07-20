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
  selectedStage = '0';
  console.log(curStage);
  $(".prev").click(function () {
    alert("prev");
  });

  $(".me-2").on("click", function () {
    if (!$(this).hasClass("active")) {
      curOpen = null;
      $(".me-2").removeClass("active");
      $(".me-2").addClass("inactive");
      $(this).addClass("active");
      $(this).removeClass("inactive");
      selectedStage = $(this).text();
    }
    if ($(".stage-"+selectedStage).hasClass("visually-hidden")) {
      curOpen = null;
      $("div[class^='stage-']").addClass("visually-hidden");
      $(".stage-"+selectedStage).removeClass("visually-hidden");
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
  });
});
