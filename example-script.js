$(document).ready(function(){

	/***************************************************************
		Variables
	***************************************************************/

		var stage = 1;
		var movingStageRightNow = false;
		var db_id = 0;



	/***************************************************************
		Numbers' Comma
	***************************************************************/

		$(".comma").keyup(function(){
			var num = $(this).val().replace(/,/gi, "");
			var num2 = num.replace(/\d(?=(?:\d{3})+$)/g, '$&,');
			$(this).val(num2);
		});


	/***************************************************************
		Form Validation Functions
	***************************************************************/
	
		function removeDashed(number) {
			return number.replace(/-/g, "");
		}
		
		function onlyDigits(number) {
			var reg = new RegExp('^[0-9]+$');
			return reg.test(number);
		}
		
		function checkPhone(number) {
			if ( onlyDigits(number) ) {
				if ( number.length < 9 || number.length > 10 ) {
					return false;
				} else {
					if ( number.length == 10 ) {
						if ( number.substring(0, 2) != "05" && number.substring(0, 2) != "07" ) {
							return false;
						} else {
							return true;
						}
					} else {
						return true;
					}
				}
			} else {
				return false;
			}
		}

		function checkEmail(email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}

		if (!String.prototype.startsWith) {
			String.prototype.startsWith = function(searchString, position){
				position = position || 0;
				return this.substr(position, searchString.length) === searchString;
			};
		}


	/***************************************************************
		USA Client
	***************************************************************/

		$("#stage3-usa-1").on('click', function(){
			$(this).parents(".input-wrapper").find(".additionText").fadeIn();
		});

		$("#stage3-usa-2").on('click', function(){
			$(this).parents(".input-wrapper").find(".additionText").fadeOut();
		});



	/***************************************************************
		Public Worker
	***************************************************************/

		$(".addition input").on('change', function(){
			if ($(this).is(":checked")) {
				$(this).parents(".input-wrapper").find(".additionText").fadeIn();
			} else {
				$(this).parents(".input-wrapper").find(".additionText").fadeOut();
			}
		});



	/***************************************************************
		Move user to first error
	***************************************************************/

		function moveUserToFirstError() {
			$("html, body").animate({
				scrollTop: $(".error").first().offset().top
		  }, 1000);
		}

		function moveUserToTop() {
			$("html, body").animate({
				scrollTop: 0
		  }, 1000);
		}



	/***************************************************************
		Next Button
	***************************************************************/

		$("#form-buttons-next").on("click", function(){
			if ( !movingStageRightNow ) {
				switch ( stage ) {
					// Move 1-1 to 1-2
					case 1:
						var validatorFlag = true;
						$(".stage-1-1 .input-wrapper").each(function(){
							if ( $(this).find("input").val() == "" ) {
								$(this).addClass("error");
								validatorFlag = false;
							} else {
								$(this).removeClass("error");
							}
						});
						if ( $("input[name='stage1-2-percentage']").val() != "" ) {
							var percentageMin = parseInt( $("input[name='stage1-2-percentage']").attr("min") );
							var percentageMax = parseInt( $("input[name='stage1-2-percentage']").attr("max") );
							if ( $("input[name='stage1-2-percentage']").val() > percentageMax || $("input[name='stage1-2-percentage']").val() < percentageMin ) {
								validatorFlag = false;
								$("input[name='stage1-2-percentage']").parents(".input-wrapper").addClass("error");
								var errorText = "׳™׳© ׳׳”׳–׳™׳ ׳׳¡׳₪׳¨ ׳‘׳™׳ " + percentageMin + " ׳-" + percentageMax;
								$("input[name='stage1-2-percentage']").parents(".input-wrapper").find("span.errors").text(errorText);
							} else {
								$("input[name='stage1-2-percentage']").parents(".input-wrapper").removeClass("error");
							}
						}
						if ( validatorFlag ) {
							
							//pixel
							gtag_report_conversion1();
							gtag_report_conversion_first_step();
							//fbq('trackCustom', 'InvestPlan');
							
							movingStageRightNow = true;
							$(".stage-1-navigator li").removeClass("active");
							$(".stage-1-1").fadeOut(400, function(){
								moveUserToTop();
								$(".stage-1-navigator li:nth-of-type(2)").addClass("active");
								$("#form-buttons-previous").fadeIn(400);
								$(".stage-1-2").fadeIn(400, function(){
									stage++;
									movingStageRightNow = false;
								});
							});
						} else {
							moveUserToFirstError();
						}
					break;

					// Move 1-2 to 1-3
					case 2:
						var validatorFlag = true;
						$(".stage-1-2 .input-wrapper:not(.radio-wrapper)").each(function(){
							if ( $(this).find("input").val() == "" ) {
								$(this).addClass("error");
								$(this).find("span.errors").text("׳©׳“׳” ׳–׳” ׳”׳™׳ ׳• ׳—׳•׳‘׳”");
								validatorFlag = false;
							} else {
								$(this).removeClass("error");
							}
						});
						$(".stage-1-2 .radio-wrapper").each(function(){
							var valueFlag = false;
							if ( $(this).find("input:checked").length == 0 ) {
								validatorFlag = false;
								$(this).addClass("error");
								$(this).find("span.errors").text("׳©׳“׳” ׳–׳” ׳”׳™׳ ׳• ׳—׳•׳‘׳”");
							} else {
								$(this).removeClass("error");
							}
						});

						var birthdayValidate = true;
						$(".user-birthday .dropdown").each(function(){
							if ( !$(this).find(".dropdown-item.active").length ) {
								birthdayValidate = false;
							}
						});
						if ( !birthdayValidate ) {
							validatorFlag = false;
							$(".user-birthday").parents(".input-wrapper").addClass("error");
							$(".user-birthday").parents(".input-wrapper").find("span.errors").text("׳©׳“׳” ׳–׳” ׳”׳™׳ ׳• ׳—׳•׳‘׳”");
						} else {
							var ageString = $("#dropdownYear").parents(".dropdown").find(".dropdown-item.active").text() + "-" + $("#dropdownMonth").parents(".dropdown").find(".dropdown-item.active").text() + "-" + $("#dropdownDay").parents(".dropdown").find(".dropdown-item.active").text();
							if ( getAge(ageString) < 18 ) {
								validatorFlag = false;
								$(".user-birthday").parents(".input-wrapper").addClass("error");
								$(".user-birthday").parents(".input-wrapper").find("span.errors").text("׳’׳™׳ ׳₪׳—׳•׳× ׳-18");
							} else {
								$(".user-birthday").parents(".input-wrapper").removeClass("error");
							}
						}

						if ( validatorFlag ) {

							var myData = {};

							var ageString = $("#dropdownYear").parents(".dropdown").find(".dropdown-item.active").text() + "-" + $("#dropdownMonth").parents(".dropdown").find(".dropdown-item.active").text() + "-" + $("#dropdownDay").parents(".dropdown").find(".dropdown-item.active").text();
							var age = getAge(ageString);
							if ( age >= 18 && age <= 30 ) {
								myData.q1 = 1;
							} else if ( age >= 31 && age <= 45 ) {
								myData.q1 = 2;
							} else if ( age >= 46 && age <= 65 ) {
								myData.q1 = 3;
							} else if ( age >= 66 && age <= 80 ) {
								myData.q1 = 4;
							} else {
								myData.q1 = 5;
							}

							myData.q2 = $("input[name='stage1-2-years']:checked").val();

							var percentage = $("input[name='stage1-2-percentage']").val();
							if ( percentage >= 0 && percentage <= 10 ) {
								myData.q3 = 1;
							} else if ( percentage >= 11 && percentage <= 20 ) {
								myData.q3 = 2;
							} else if ( percentage >= 21 && percentage <= 30 ) {
								myData.q3 = 3;
							} else if ( percentage >= 31 && percentage <= 40 ) {
								myData.q3 = 4;
							} else if ( percentage >= 41 && percentage <= 50 ) {
								myData.q3 = 5;
							} else if ( percentage >= 51 && percentage <= 60 ) {
								myData.q3 = 6;
							} else if ( percentage >= 61 && percentage <= 70 ) {
								myData.q3 = 7;
							} else {
								myData.q3 = 8;
							}

							myData.q4 = $("input[name='stage1-2-prefer']:checked").val();
							myData.q5 = $("input[name='stage1-2-pain']:checked").val();
							myData.q6 = $("input[name='stage1-2-loss']:checked").val();

							jQuery.ajax("interface/getrisklevel.php", {
								method: "POST",
								async: false,
								data: myData,
								success: function(response){
									if (response == 0) {
										alert("׳§׳™׳™׳׳× ׳¡׳×׳™׳¨׳” ׳‘׳™׳ ׳×׳©׳•׳‘׳•׳×׳™׳ ׳‘׳ ׳•׳’׳¢ ׳׳™׳—׳¡ ׳©׳׳ ׳׳¡׳™׳›׳•׳ ׳‘׳×׳™׳§ ׳”׳”׳©׳§׳¢׳•׳×, ׳׳ ׳ ׳”׳’׳“׳¨ ׳׳—׳“׳© ׳׳× ׳₪׳¨׳•׳₪׳™׳ ׳”׳¡׳™׳›׳•׳ ׳•׳׳“׳™׳ ׳™׳•׳× ׳”׳”׳©׳§׳¢׳”");
									} else {
										
										if ((myData.q2 == 1) && (response > 2))
											response = 2;
										
										movingStageRightNow = true;
										$(".stage-1-navigator li").removeClass("active");
										$("#form-buttons-previous").fadeOut(400, function(){
											$("#form-buttons-previous").addClass("special").text("׳׳, ׳—׳–׳¨׳” ׳׳×׳™׳§׳•׳").fadeIn(400);
										});
										$("#form-buttons-next").fadeOut(400, function(){
											$("#form-buttons-next").text("׳›׳, ׳‘׳•׳׳• ׳ ׳׳©׳™׳").fadeIn(400);
										});
										$(".stage-1-2").fadeOut(400, function(){
											$("input[name='risklevel']").val(response);
											$(".stage-1-navigator li:nth-of-type(3)").addClass("active");
											$(".stage-1-3 .bigtitle span").hide();
											$(".stage-1-3-bigtitle-" + response).show();
											$(".stage-1-3-navigator").attr("data-level", response);
											$(".stage-1-3-content > div").hide();
											$(".stage-1-3-content-" + response).show();
											$("#form-buttons-previous").fadeIn(400);
											moveUserToTop();
											$(".stage-1-3").fadeIn(400, function(){
												stage++;
												movingStageRightNow = false;
											});
										});
									}
								}
							});
						} else {
							moveUserToFirstError();
						}
					break;

					// Move 1-3 to 2
					case 3:
						movingStageRightNow = true;
						$("#form-buttons-previous").fadeOut(400, function(){
							$("#form-buttons-previous").removeClass("special").text("").fadeIn(400);
						});
						$("#form-buttons-next").fadeOut(400, function(){
							$("#form-buttons-next").text("׳”׳׳©׳").fadeIn(400);
						});
						$(".form-tabs ul li:nth-of-type(1)").removeClass("active").addClass("past");
						$(".form-tabs ul li:nth-of-type(2)").addClass("active");
						$(".stage-1").fadeOut(400, function(){
							fbq('trackCustom', 'InvestPlan');

							moveUserToTop();
							$(".stage-2").fadeIn(400, function(){
								stage++;
								movingStageRightNow = false;
							});
						});
					break;

					// Move 2 to 3
					case 4:
						var validatorFlag = true;
						$(".stage-2 .input-wrapper:not(.radio-wrapper):not(.checkbox-wrapper):not(.free)").each(function(){
							if ( $(this).find("input").val() == "" ) {
								$(this).addClass("error");
								validatorFlag = false;
							} else {
								// Phone Validation
								if ( $(this).hasClass("checkPhone") ) {
									var newNumber = removeDashed( $(this).find("input").val() );
									if ( !checkPhone( newNumber ) ) {
										validatorFlag = false;
										$(this).addClass("error");
									} else {
										$(this).removeClass("error");
									}
								} else if ( $(this).hasClass("checkEmail") ) {
									if ( !checkEmail( $(this).find("input").val() ) ) {
										validatorFlag = false;
										$(this).addClass("error");
									} else {
										$(this).removeClass("error");
									}
								} else {
									$(this).removeClass("error");
								}
							}
						});
						$(".stage-2 .radio-wrapper, .stage-2 .checkbox-wrapper").each(function(){
							var valueFlag = false;
							if ( $(this).find("input:checked").length == 0 ) {
								validatorFlag = false;
								$(this).addClass("error");
							} else {
								$(this).removeClass("error");
							}
						});

						if ( validatorFlag ) {
							//pixel
							gtag_report_conversion2();
							fbq('trackCustom', 'PersonInfo');
							
							save_client();
							movingStageRightNow = true;
							$(".form-tabs ul li:nth-of-type(2)").removeClass("active").addClass("past");
							$(".form-tabs ul li:nth-of-type(3)").addClass("active");
							$(".stage-2").fadeOut(400, function(){
								moveUserToTop();
								$(".stage-3").fadeIn(400, function(){
									stage++;
									movingStageRightNow = false;
								});
							});
						} else {
							moveUserToFirstError();
						}
					break;

					// Move 3 to 4
					case 5:
						var validatorFlag = true;
						$(".stage-3 > .input-wrapper:not(.radio-wrapper):not(.checkbox-wrapper):not(.free)").each(function(){
							if ( $(this).find("input").val() == "" ) {
								$(this).addClass("error");
								$(this).find("span.errors").text("׳©׳“׳” ׳–׳” ׳”׳™׳ ׳• ׳—׳•׳‘׳”");
								validatorFlag = false;
							} else {
								$(this).removeClass("error");
							}
						});
						$(".stage-3 > .radio-wrapper:not(.stage3-extra-open), .stage-3 .checkbox-wrapper:not(.notcheck)").each(function(){
							var valueFlag = false;
							if ( $(this).find("input:checked").length == 0 ) {
								validatorFlag = false;
								$(this).addClass("error");
								$(this).find("span.errors").text("׳©׳“׳” ׳–׳” ׳”׳™׳ ׳• ׳—׳•׳‘׳”");
							} else {
								$(this).removeClass("error");
							}
						});
						$(".stage-3 .dropdown-wrapper").each(function(){
							if ( $.trim( $(this).find(".dropdown-toggle").text() ) == "" ) {
								$(this).addClass("error");
								$(this).find("span.errors").text("׳©׳“׳” ׳–׳” ׳”׳™׳ ׳• ׳—׳•׳‘׳”");
								validatorFlag = false;
							} else {
								$(this).removeClass("error");
							}
						});
						// Opened
						var stage3extraopenid = $("input[name='stage3-extra']:checked").attr("id");
						if ( stage3extraopenid == "stage3-extra-1" || stage3extraopenid == "stage3-extra-2" || stage3extraopenid == "stage3-extra-3" ) {
							$(".stage-3 .stage3-extra-open").each(function(){
								var valueFlag = false;
								if ( $(this).find("input:checked").length == 0 ) {
									validatorFlag = false;
									$(this).addClass("error");
									$(this).find("span.errors").text("׳©׳“׳” ׳–׳” ׳”׳™׳ ׳• ׳—׳•׳‘׳”");
								} else {
									$(this).removeClass("error");
								}
							});
						}
						
						if ( validatorFlag ) {
							//pixel
							gtag_report_conversion3();
							
							save_client();
							upload_files();
							
							$(".loader-background").fadeIn(function(){
								
								//Merav
								var data = {
									"name": $("input[name='stage2-firstname']").val() + " " + $("input[name='stage2-lastname']").val(),
									"phone": $("input[name='stage2-phone']").val(),
									"mail": $("input[name='stage2-email']").val(),
									"client_id": $("input[name='stage2-id']").val(),
									"address": $("input[name='stage2-street']").val() +" "+ $("input[name='stage2-city']").val(),
									"risk": $("input[name='risklevel']").val(),
									"address_no": $("input[name='stage2-streetnumber']").val(),
									
									"partner_name":$("input[name='stage3-partner-name']").val(),
									"partner_phone": $("input[name='stage3-partner-phone']").val(),
									"partner_email": $("input[name='stage3-partner-email']").val(),
									"partner_id": $("input[name='stage3-partner-id']").val(),
									"partner_address": $("input[name='stage3-partner-address']").val(),
									"partner_address_no": $("input[name='stage3-partner-address-no']").val()
								}
								
								jQuery.ajax({
								type: 'POST',
								url:"generate_pdf.php", 
								data: data,
								success: function(response){
									var label;
									label = $(".tikimLinkPdf").html().replace("׳”׳¡׳›׳ ׳ ׳™׳”׳•׳ ׳”׳×׳™׳§׳™׳", "<a href='https://tamirfishman.co.il/tikim/clients/"+$("input[name='stage2-id']").val()+"/agreement_combined.pdf' target='_blank'>׳”׳¡׳›׳ ׳ ׳™׳”׳•׳ ׳”׳×׳™׳§׳™׳</a>");
									$(".tikimLinkPdf").html(label);
									
									label = $(".nihoolLinkPdf").html().replace("׳ ׳¡׳₪׳— ׳“׳׳™ ׳”׳ ׳™׳”׳•׳", "<a href='https://tamirfishman.co.il/tikim/clients/"+$("input[name='stage2-id']").val()+"/fee_combined.pdf' target='_blank'>׳ ׳¡׳₪׳— ׳“׳׳™ ׳ ׳™׳”׳•׳</a>");
									$(".nihoolLinkPdf").html(label);
									
									
									$("#stage4-check1-1").on("click", function() {
										if ( $("#stage4-check1-1").is(':checked') ) {
											window.open( 'https://tamirfishman.co.il/tikim/clients/'+$("input[name='stage2-id']").val()+'/agreement_combined.pdf'  );
										}
									});

									$("#stage4-check5-1").on("click", function() {
										if ( $("#stage4-check5-1").is(':checked') ) {
											window.open( 'https://tamirfishman.co.il/tikim/clients/'+$("input[name='stage2-id']").val()+'/fee_combined.pdf' );
										}
									});
									
								}});
							});

							$(".form-tabs ul li:nth-of-type(3)").removeClass("active").addClass("past");
							$(".form-tabs ul li:nth-of-type(4)").addClass("active");
							$("#form-buttons-next").fadeOut(400, function(){
								$("#form-buttons-next").text("׳¡׳™׳•׳ ׳©׳׳׳•׳").fadeIn(400);
							});
							$(".stage-3").fadeOut(400, function(){
								moveUserToTop();
								$(".agent-box").fadeIn(400);
								$(".stage-4").fadeIn(400, function(){
									stage++;
									movingStageRightNow = false;
								});
							});
							setTimeout(function(){ $(".loader-background").fadeOut(); }, 800);
						} else {
							moveUserToFirstError();
						}
					break;

					// Move 4 to 5
					case 6:

						var validatorFlag = true;
						$(".stage-4 .checkbox-wrapper").each(function(){
							var valueFlag = false;
							if ( $(this).find("input:checked").length == 0 ) {
								validatorFlag = false;
								$(this).addClass("error");
							} else {
								$(this).removeClass("error");
							}
						});
						if ( validatorFlag ) {
							//pixel
							gtag_report_conversion4();
							
							save_client();
							sendForm();
														
							$(".loader-background").fadeIn(function(){
								
								//Merav
								
								var public_profession = "";
								var publiclength = $("input[name='stage3-public']:checked").length;
								$("input[name='stage3-public']:checked").each(function(index){
									public_profession += $(this).val();
									if ( (index+1) != publiclength ) {
										public_profession += ", ";
									}
								});
								
								var data = {
									"name": $("input[name='stage2-firstname']").val() + " " + $("input[name='stage2-lastname']").val(),
									"mail": $("input[name='stage2-email']").val(),
									"agreement_url": "https://tamirfishman.co.il/tikim/clients/"+$("input[name='stage2-id']").val()+"/agreement_combined.pdf",
									"fee_url": "https://tamirfishman.co.il/tikim/clients/"+$("input[name='stage2-id']").val()+"/fee_combined.pdf",
									"amount": $("input[name='stage1-1-amount']").val(),
									"years": $("input[name='stage1-2-years']:checked + label").text(),
									"goal": $("input[name='stage1-2-goal']:checked").val(),
									"percentage": $("input[name='stage1-2-percentage']").val(),
									"prefer": $("input[name='stage1-2-prefer']:checked + label").text(),
									"pain": $("input[name='stage1-2-pain']:checked + label span").text(),
									"loss": $("input[name='stage1-2-loss']:checked + label").text(),
									"risklevel": $("input[name='risklevel']").val(),
									"israel": $("input[name='stage3-israel']:checked").val(),
									"usa": $("input[name='stage3-usa']:checked").val(),
									"professional": $("input[name='stage3-professional']").val(),								
									"public": public_profession,
									"bank": $("#dropdownBank").parents(".dropdown").find(".dropdown-item.active").text(),
									"moneysource": $("#dropdownMoneySource").parents(".dropdown").find(".dropdown-item.active").text(),
									"extra": $("input[name='stage3-extra']:checked").val(),
								}
								
								jQuery.ajax({
								type: 'POST',
								url:"mail_pdf.php", 
								data: data,
								success: function(response){
									//great									
								}});
								//Merav
								
							});

							movingStageRightNow = true;
							$(".form-tabs ul li:nth-of-type(4)").removeClass("active").addClass("past");
							$("#form-buttons-next, #form-buttons-previous").fadeOut();
							$(".agent-box").fadeOut(400);
							$(".stage-4").fadeOut(400, function(){
								$(".stage-5-name").text( $("input[name='stage2-firstname']").val() );
								moveUserToTop();
								$(".stage-5").fadeIn(400, function(){
									fbq('track', 'Lead', {currency: "ILS", value: $("input[name='stage1-1-amount']").val()});
									stage++;
									movingStageRightNow = false;
								});
							});
							setTimeout(function(){ $(".loader-background").fadeOut(); }, 1000);
							
						} else {
							moveUserToFirstError();
						}
					break;
				}
			}
		});




	/***************************************************************
		Previous Button
	***************************************************************/

		$("#form-buttons-previous").on("click", function(){
			if ( !movingStageRightNow ) {
				switch ( stage ) {
					// Move 1-2 to 1-1
					case 2:
						movingStageRightNow = true;
						$(".stage-1-navigator li").removeClass("active");
						$("#form-buttons-previous").fadeOut(400);
						$(".stage-1-2").fadeOut(400, function(){
							$(".stage-1-navigator li:nth-of-type(1)").addClass("active");
							$(".stage-1-1").fadeIn(400, function(){
								stage--;
								movingStageRightNow = false;
							});
						});
					break;

					// Move 1-3 to 1-2
					case 3:
						movingStageRightNow = true;
						$(".stage-1-navigator li").removeClass("active");
						$("#form-buttons-previous").fadeOut(400, function(){
							$("#form-buttons-previous").removeClass("special").text("").fadeIn(400);
						});
						$("#form-buttons-next").fadeOut(400, function(){
							$("#form-buttons-next").text("׳”׳׳©׳").fadeIn(400);
						});
						$(".stage-1-3").fadeOut(400, function(){
							$(".stage-1-navigator li:nth-of-type(2)").addClass("active");
							$(".stage-1-2").fadeIn(400, function(){
								stage--;
								movingStageRightNow = false;
							});
						});
					break;

					// Move 2 to 1-3
					case 4:
						movingStageRightNow = true;
						$("#form-buttons-previous").fadeOut(400, function(){
							$("#form-buttons-previous").addClass("special").text("׳׳, ׳—׳–׳¨׳” ׳׳×׳™׳§׳•׳").fadeIn(400);
						});
						$("#form-buttons-next").fadeOut(400, function(){
							$("#form-buttons-next").text("׳›׳, ׳‘׳•׳׳• ׳ ׳׳©׳™׳").fadeIn(400);
						});
						$(".form-tabs ul li:nth-of-type(2)").removeClass("active");
						$(".form-tabs ul li:nth-of-type(1)").removeClass("past").addClass("active");
						$(".stage-2").fadeOut(400, function(){
							$(".stage-1").fadeIn(400, function(){
								stage--;
								movingStageRightNow = false;
							});
						});
					break;

					// Move 3 to 2
					case 5:
						movingStageRightNow = true;
						$(".form-tabs ul li:nth-of-type(3)").removeClass("active");
						$(".form-tabs ul li:nth-of-type(2)").removeClass("past").addClass("active");
						$(".stage-3").fadeOut(400, function(){
							$(".stage-2").fadeIn(400, function(){
								stage--;
								movingStageRightNow = false;
							});
						});
					break;

					// Move 4 to 3
					case 6:
						movingStageRightNow = true;
						$("#form-buttons-next").fadeOut(400, function(){
							$("#form-buttons-next").text("׳”׳׳©׳").fadeIn(400);
						});
						$(".form-tabs ul li:nth-of-type(4)").removeClass("active");
						$(".form-tabs ul li:nth-of-type(3)").removeClass("past").addClass("active");
						$(".agent-box").fadeOut(400);
						$(".stage-4").fadeOut(400, function(){
							$(".stage-3").fadeIn(400, function(){
								stage--;
								movingStageRightNow = false;
							});
						});
					break;
				}
			}
		});



	/***************************************************************
		Open inputs handler
	***************************************************************/

		$("input[name='stage3-partner']").change(function(){
			if ( $(this).val() == "׳›׳" ) {
				$(".stage3-partner-open").show();
			} else {
				$(".stage3-partner-open").hide();
			}
		});

		$("input[name='stage3-extra']").change(function(){
			if ( $(this).attr("id") != "stage3-extra-4" ) {
				$(".stage3-extra-open").show();
			} else {
				$(".stage3-extra-open").hide();
			}
		});



	/***************************************************************
		File Inputs Handler
	***************************************************************/

		$("input[name='stage3-files-id'], input[name='stage3-files-another'], input[name='stage3-partner-files-id'], input[name='stage3-partner-files-another'] ").change(function(){
			if ( $(this).attr("name") == "stage3-files-id" ) {
				var divclass = ".input-files-id";
			} else {
				var divclass = ".input-files-another";
			}

			if ( $(this)[0].files.length == 0 ) {
				$(divclass).fadeOut();

			} else {
				// check type
				var filetype = $(this)[0].files[0].type;
				if ( filetype != "image/png" && filetype != "image/jpeg" && filetype != "image/jpg" && filetype != "application/pdf" ) {
					alert("׳¡׳•׳’ ׳”׳§׳•׳‘׳¥ ׳׳™׳ ׳• ׳׳׳•׳©׳¨");
					$(".stage3-files-wrapper").addClass("error");
					$(".stage3-files-wrapper .error").text("׳¡׳•׳’ ׳”׳§׳•׳‘׳¥ ׳׳™׳ ׳• ׳׳׳•׳©׳¨");
					$(divclass).fadeOut();
					$(this)[0].value = "";
				} else {
					// check size
					var filesize = $(this)[0].files[0].size;
					if ( filesize > (1024*1024*3) ) {
						$(".stage3-files-wrapper").addClass("error");
						$(".stage3-files-wrapper .error").text("׳׳©׳§׳ ׳”׳§׳•׳‘׳¥ ׳¢׳•׳׳” ׳¢׳ 3MB");
						$(divclass).fadeOut();
						$(this)[0].value = "";
					} else {
						$(".stage3-files-wrapper").removeClass("error");
						$(".stage3-files-wrapper .error").text("");

						// update name
						$(divclass).find("p span").text( $(this)[0].files[0].name );
						$(divclass).fadeIn();
					}
				}
			}
		});



	/***************************************************************
		Get age to validate age over 18
	***************************************************************/

		function getAge(birthDateString) {
			var today = new Date();
			var birthDate = new Date(birthDateString);
			var age = today.getFullYear() - birthDate.getFullYear();
			var m = today.getMonth() - birthDate.getMonth();
			if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
				age--;
			}
			return age;
		}



	/***************************************************************
		Dropdown
	***************************************************************/

		$(".dropdown-item").on("click", function(){
			var value = $(this).text();
			$(this).parents(".dropdown").find(".dropdown-toggle").text( value );
			$(this).parents(".dropdown").find(".dropdown-item").removeClass("active");
			$(this).addClass("active");
		});



	/***************************************************************
		Form Validation Functions
	***************************************************************/
	
		function removeDashed(number) {
			return number.replace(/-/g, "");
		}
		
		function onlyDigits(number) {
			var reg = new RegExp('^[0-9]+$');
			return reg.test(number);
		}
		
		function checkPhone(number) {
			if ( onlyDigits(number) ) {
				if ( number.length < 9 || number.length > 10 ) {
					return false;
				} else {
					if ( number.length == 10 ) {
						if ( number.substring(0, 2) != "05" && number.substring(0, 2) != "07" ) {
							return false;
						} else {
							return true;
						}
					} else {
						return true;
					}
				}
			} else {
				return false;
			}
		}

		function checkEmail(email) {
			var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		}


	
	/********************************************************************************
		Platform Check If Mobile Or Desktop
	********************************************************************************/
	
		function isMobileCheck() {
			var check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
			return check;
		};
		
		if ( isMobileCheck() ) {
			var myplatform = "׳׳•׳‘׳™׳™׳";
		} else {
			var myplatform = "׳׳—׳©׳‘";
		}



	/***************************************************************
		Send Form Function
	***************************************************************/

		function sendForm() {

			var formData = new FormData();
			formData.append("platform", myplatform);
			if ( $("input[name='agentnumber']").val() == "" ) {
				formData.append("agentnumber", "-");
			} else {
				formData.append("agentnumber", $("input[name='agentnumber']").val());
			}
			formData.append("amount", $("input[name='stage1-1-amount']").val() );
			var ageString = $("#dropdownYear").parents(".dropdown").find(".dropdown-item.active").text() + "-" + $("#dropdownMonth").parents(".dropdown").find(".dropdown-item.active").text() + "-" + $("#dropdownDay").parents(".dropdown").find(".dropdown-item.active").text();
			formData.append("birthday", ageString );
			formData.append("age", getAge(ageString) );
			formData.append("years", $("input[name='stage1-2-years']:checked + label").text() );
			formData.append("goal", $("input[name='stage1-2-goal']:checked").val() );
			formData.append("percentage", $("input[name='stage1-2-percentage']").val() );
			formData.append("prefer", $("input[name='stage1-2-prefer']:checked + label").text() );
			formData.append("pain", $("input[name='stage1-2-pain']:checked + label span").text() );
			formData.append("loss", $("input[name='stage1-2-loss']:checked + label").text() );
			//formData.append("risklevel", $(".stage-1-3 .bigtitle span").text() );
			formData.append("risklevel", $("input[name='risklevel']").val());
			
			formData.append("firstname", $("input[name='stage2-firstname']").val() );
			formData.append("lastname", $("input[name='stage2-lastname']").val() );
			formData.append("id", $("input[name='stage2-id']").val() );
			formData.append("phone", $("input[name='stage2-phone']").val() );
			var gender = $("input[name='stage2-gender']:checked").val();
			if ( gender == "male" ) {
				formData.append("gender", "׳–׳›׳¨");
			} else {
				formData.append("gender", "׳ ׳§׳‘׳”");
			}
			formData.append("email", $("input[name='stage2-email']").val() );
			formData.append("city", $("input[name='stage2-city']").val() );
			formData.append("street", $("input[name='stage2-street']").val() );
			formData.append("streetnumber", $("input[name='stage2-streetnumber']").val() );
			formData.append("homenumber", $("input[name='stage2-homenumber']").val() );
			formData.append("zipcode", $("input[name='stage2-zipcode']").val() );
			formData.append("reports", $("input[name='stage2-reports']:checked").val() );

			formData.append("israel", $("input[name='stage3-israel']:checked").val() );
			formData.append("usa", $("input[name='stage3-usa']:checked").val() );
			formData.append("professional", $("input[name='stage3-professional']").val() );
			var public1 = "";
			var publiclength = $("input[name='stage3-public']:checked").length;
			$("input[name='stage3-public']:checked").each(function(index){
				public1 += $(this).val();
				if ( (index+1) != publiclength ) {
					public1 += ", ";
				}
			});
			formData.append("public", public1);
			formData.append("bank", $("#dropdownBank").parents(".dropdown").find(".dropdown-item.active").text() );
			formData.append("moneysource", $("#dropdownMoneySource").parents(".dropdown").find(".dropdown-item.active").text() );
			formData.append("extra", $("input[name='stage3-extra']:checked").val() );
			formData.append("extranumber", $("input[name='stage3-extranumber']:checked").val() );
			var partner = $("input[name='stage3-partner']:checked").val();
			formData.append("partner", partner );
			if ( partner == "׳›׳" ) {
				formData.append("partnertype", $("input[name='stage3-partner-type']:checked").val() );
				formData.append("partnername", $("input[name='stage3-partner-name']").val() );
				formData.append("partnergender", $("input[name='stage3-partner-gender']:checked").val() );
				
				formData.append("partnerphone", $("input[name='stage3-partner-phone']").val() );
				formData.append("partneremail", $("input[name='stage3-partner-email']").val() );
				formData.append("partnerid", $("input[name='stage3-partner-id']").val() );
				formData.append("partneraddress", $("input[name='stage3-partner-address']").val() );
				formData.append("partneraddressno", $("input[name='stage3-partner-address-no']").val() );
				
				if ($("input[name='stage3-partner-files-id']")[0].files[0])
					formData.append("partnerfileid", $("input[name='stage3-partner-files-id']")[0].files[0]);
				
				if ($("input[name='stage3-partner-files-another']")[0].files[0])
					formData.append("partnerfileanother", $("input[name='stage3-partner-files-another']")[0].files[0]);
			} else {
				formData.append("partnertype", "");
				formData.append("partnername", "");
				formData.append("partnergender", "");
				
				formData.append("partnerphone", "" );
				formData.append("partneremail", "" );
				formData.append("partnerid", "" );
				formData.append("partneraddress", "" );
				formData.append("partneraddressno", "" );
			}
			if ($("input[name='stage3-files-id']")[0].files[0])
				formData.append("fileid", $("input[name='stage3-files-id']")[0].files[0]);
			
			if ($("input[name='stage3-files-another']")[0].files[0])
				formData.append("fileanother", $("input[name='stage3-files-another']")[0].files[0]);

			jQuery.ajax("interface/send.php", {
				method: "POST",
				async: false,
				data: formData,
				processData: false,
				contentType: false,
				success: function(response){
					if (response == 1) {
						// Success
					} else {
						// Error
					}
					db_id = 0;
				}
			});
		}
		
		function upload_files()
		{
			var formData = new FormData();
			
			formData.append("id", $("input[name='stage2-id']").val());
			
			if ($("input[name='stage3-files-id']")[0].files[0])
				formData.append("fileid", $("input[name='stage3-files-id']")[0].files[0]);
			//{
				// formData.append("fileid", $("input[name='stage3-files-id']")[0].files[0]);
				
				if ($("input[name='stage3-files-another']")[0].files[0])
					formData.append("fileanother", $("input[name='stage3-files-another']")[0].files[0]);
					
				// if ( $("input[name='stage3-partner']:checked").val() == "׳›׳" ) {	
				if ($("input[name='stage3-partner-files-id']")[0].files[0])
					formData.append("partnerfileid", $("input[name='stage3-partner-files-id']")[0].files[0]);
					
					if ($("input[name='stage3-partner-files-another']")[0].files[0])
						formData.append("partnerfileanother", $("input[name='stage3-partner-files-another']")[0].files[0]);	
				// }

				jQuery.ajax("interface/upload_files.php", {
					method: "POST",
					async: false,
					data: formData,
					processData: false,
					contentType: false,
					success: function(response){
						if (response == 1) {
							// Success
						} else {
							// Error
						}
					}
				});
			//}
		}
		
		function save_client()
		{
			//Merav
			var investment_years = "";
			switch ($("input[name='stage1-2-years']:checked").val())
			{
				case "1":
					investment_years = "0-2";
					break;
				case "2":
					investment_years = "2-5";
					break;
				case "3":
					investment_years = "6-10";
					break;
				case "4":
					investment_years = "11-15";
					break;
				case "5":
					investment_years = "15+";
					break;		
			}
			
			var investment_preferenace = "";
			switch ($("input[name='stage1-2-prefer']:checked").val())
			{
				case "1":
					investment_preferenace = "׳¡׳™׳›׳•׳ ׳ ׳׳•׳ ׳•׳¡׳™׳›׳•׳™ ׳׳¨׳•׳•׳— ׳ ׳׳•׳";
					break;
				case "2":
					investment_preferenace = "׳׳׳˜ ׳׳‘׳ ׳™׳¦׳™׳‘ ׳׳×׳׳™׳ ׳׳™";
					break;
				case "3":
					investment_preferenace = "׳׳ ׳™ ׳׳•׳›׳ ׳׳¡׳›׳ ׳§׳¦׳× ׳›׳“׳™ ׳׳”׳¨׳•׳•׳™׳— ׳§׳¦׳× ׳™׳•׳×׳¨";
					break;
				case "4":
					investment_preferenace = "׳׳ ׳™ ׳׳¨׳’׳™׳© ׳‘׳ ׳•׳— ׳¢׳ ׳”׳¡׳™׳›׳•׳";
					break;
				case "5":
					investment_preferenace = "׳¡׳™׳›׳•׳ ׳’׳‘׳•׳” ׳•׳¡׳™׳›׳•׳™ ׳׳¨׳•׳•׳— ׳’׳‘׳•׳”";
					break;		
			}
			
			var pain_70K = "";
			switch ($("input[name='stage1-2-pain']:checked").val())
			{
				case "1":
					pain_70K = "׳›׳•׳׳‘ ׳׳׳•׳“";
					break;
				case "2":
					pain_70K = "׳›׳•׳׳‘";
					break;
				case "3":
					pain_70K = "׳׳‘׳•׳׳¡";
					break;
				case "4":
					pain_70K = "׳׳×׳’׳‘׳¨";
					break;
				case "5":
					pain_70K = "׳§׳˜׳ ׳¢׳׳™";
					break;		
			}
			
			var pain_30p = "";
			switch ($("input[name='stage1-2-loss']:checked").val())
			{
				case "1":
					pain_30p = "׳׳׳›׳•׳¨ ׳׳™׳“ ׳׳× ׳”׳”׳©׳§׳¢׳”, ׳›׳“׳™ ׳׳׳ ׳•׳¢ ׳”׳₪׳¡׳“ ׳ ׳•׳¡׳£";
					break;
				case "2":
					pain_30p = "׳׳׳›׳•׳¨ ׳—׳׳§ ׳׳”׳”׳©׳§׳¢׳”";
					break;
				case "3":
					pain_30p = "׳׳ ׳׳¢׳©׳” ׳›׳׳•׳";
					break;
				case "4":
					pain_30p = "׳׳’׳“׳™׳ ׳‘׳§׳¦׳× ׳׳× ׳”׳”׳©׳§׳¢׳”";
					break;
				case "5":
					pain_30p = "׳׳’׳“׳™׳ ׳׳× ׳”׳”׳©׳§׳¢׳”, ׳¢׳›׳©׳™׳• ׳›׳©׳”׳׳—׳™׳¨׳™׳ ׳ ׳׳•׳›׳™׳";
					break;		
			}
			
			if ( $("input[name='stage3-partner']:checked").val() == "׳›׳")
			{
				var partner = {
					"partners": $("input[name='stage3-partner']:checked").val(),
					"partner_type": $("input[name='stage3-partner-type']:checked").val(),
					"partner_name": $("input[name='stage3-partner-name']").val(),
					"partner_gender": $("input[name='stage3-partner-gender']:checked").val(),
														
					"partner_phone": $("input[name='stage3-partner-phone']").val(),
					"partner_email": $("input[name='stage3-partner-email']").val(),
					"partner_id": $("input[name='stage3-partner-id']").val(),
					"partner_address": $("input[name='stage3-partner-address']").val(),
					"partner_address_no": $("input[name='stage3-partner-address-no']").val()
				}
			}
			else
			{
				var partner = {
					"partners": $("input[name='stage3-partner']:checked").val(),
					"partner_type": "",
					"partner_name": "",
					"partner_gender": "",
					
					"partner_phone": "",
					"partner_email": "",
					"partner_id": "",
					"partner_address": "",
					"partner_address_no": ""
				}
			}
			
			var data = {
				"risk_level": $("input[name='risklevel']").val(),
				"first_name": $("input[name='stage2-firstname']").val(),
				"last_name": $("input[name='stage2-lastname']").val(),
				"phone": $("input[name='stage2-phone']").val(),
				"email": $("input[name='stage2-email']").val(),
				"city": $("input[name='stage2-city']").val(),
				"street": $("input[name='stage2-street']").val(),
				"street_no": $("input[name='stage2-streetnumber']").val(),
				"finish_step": stage,
				"user_id": $("input[name='stage2-id']").val(), 
				"investment_sum": $("input[name='stage1-1-amount']").val().replace(/,/g, ''), 
				"investment_percent": $("input[name='stage1-2-percentage']").val(), 	
				"birth_date": $("#dropdownYear").text() + "-" + $("#dropdownMonth").text() + "-" +$("#dropdownDay").text(),
				"investment_years": investment_years,
				"purpose": $("input[name='stage1-2-goal']:checked").val(), 	
				"investment_preferenace": investment_preferenace,
				"pain_70K": pain_70K,
				"pain_30p": pain_30p,
				"gender": $("input[name='stage2-gender']:checked").val(),
				"report_type": $("input[name='stage2-reports']:checked").val(),
				"israel_citizen": $("input[name='stage3-israel']:checked").val(),
				"usa_citizen": $("input[name='stage3-usa']:checked").val(),
				"job": $("input[name='stage3-professional']").val(),
				"public_job": $("input[name='stage3-public']:checked").val(),
				"bank": $("#dropdownBank").parents(".dropdown").find(".dropdown-item.active").text(),
				"money_origin": $("#dropdownMoneySource").parents(".dropdown").find(".dropdown-item.active").text(),
				"expected_payments": $("input[name='stage3-extra']:checked").val(),
				"expected_amount": $("input[name='stage3-extranumber']:checked").val(),
				"id": db_id
			}
			
			jQuery.ajax({
			type: 'GET',
			url:"interface/save_client.php", 
			data: $.extend(data, partner),
			success: function(response){
				db_id = parseInt(response);									
			}});
		}
		
		function gtag_report_conversion1(url) {
		  var callback = function () {
			if (typeof(url) != 'undefined') {
			  window.location = url;
			}
		  };
		  gtag('event', 'conversion', {
			  'send_to': 'AW-751418300/D2KECKfyi_cBELz3puYC',
			  'event_callback': callback
		  });
		  return false;
		}
		
		function gtag_report_conversion2(url) {
		  var callback = function () {
			if (typeof(url) != 'undefined') {
			  window.location = url;
			}
		  };
		  gtag('event', 'conversion', {
			  'send_to': 'AW-751418300/76FbCMCV9vYBELz3puYC',
			  'event_callback': callback
		  });
		  return false;
		}
		
		function gtag_report_conversion3(url) {
		  var callback = function () {
			if (typeof(url) != 'undefined') {
			  window.location = url;
			}
		  };
		  gtag('event', 'conversion', {
			  'send_to': 'AW-751418300/FEIdCK_9i_cBELz3puYC',
			  'event_callback': callback
		  });
		  return false;
		}
		
		function gtag_report_conversion4(url) {
		  var callback = function () {
			if (typeof(url) != 'undefined') {
			  window.location = url;
			}
		  };
		  gtag('event', 'conversion', {
			  'send_to': 'AW-751418300/b2U5CImglfcBELz3puYC',
			  'event_callback': callback
		  });
		  return false;
		}
		
		function gtag_report_conversion_first_step(url) {
		  var callback = function () {
			if (typeof(url) != 'undefined') {
			  window.location = url;
			}
		  };
		  gtag('event', 'conversion', {
			  'send_to': 'AW-751418300/D2KECKfyi_cBELz3puYC',
			  'value': $("input[name='stage1-1-amount']").val(),
			  'currency': 'ILS',
			  'event_callback': callback
		  });
		  return false;
		}
	
});