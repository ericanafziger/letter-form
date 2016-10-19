$(document).ready(function(){
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() +1;
  var year = today.getFullYear();
  today = month+'/'+day+'/'+year;

  $("#initialForm form").submit(function(event){
    var nameOfBossInput = $("input#nameOfBoss").val();
    var lengthOfNoticeInput = $("input#lengthOfNotice").val();
    var nameOfCompanyInput = $("input#nameOfCompany").val();
    var companyAddressInput = $("input#companyAddress").val();
    var companyCityInput = $("input#companyCity").val();
    var lengthOfEmploymentInput = $("input#lengthOfEmployment").val();
    var careerInput = $("input#career").val();
    var newCareerInput = $("input#newCareer").val();
    var yourNameInput = $("input#yourName").val();

    $(".nameOfBoss").text(nameOfBossInput);
    $(".lengthOfNotice").text(lengthOfNoticeInput);
    $(".nameOfCompany").text(nameOfCompanyInput.toUpperCase());
    $(".companyAddress").text(companyAddressInput);
    $(".companyCity").text(companyCityInput);
    $(".lengthOfEmployment").text(lengthOfEmploymentInput);
    $(".career").text(careerInput);
    $(".newCareer").text(newCareerInput);
    $(".yourName").text(yourNameInput);
    $(".todaysDate").text(today);

    $("#lettertext").show();
    event.preventDefault();

  });

});
