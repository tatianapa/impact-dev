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

  $(".prev").click(function () {
    alert("prev");
  });

  $(".next").click(function () {
    alert("next");
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
