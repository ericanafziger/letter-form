$(document).ready(function(){
  $("#initialForm form").submit(function(event){
    var nameOfBossInput = $("input#nameOfBoss").val();
    var lengthOfNoticeInput = $("input#lengthOfNotice").val();
    var nameOfCompanyInput = $("input#nameOfCompany").val();
    var lengthOfEmploymentInput = $("input#lengthOfEmployment").val();
    var careerInput = $("input#career").val();
    var newCareerInput = $("input#newCareer").val();
    var yourNameInput = $("input#yourName").val();

    $(".nameOfBoss").text(nameOfBossInput);
    $(".lengthOfNotice").text(lengthOfNoticeInput);
    $(".nameOfCompany").text(nameOfCompanyInput);
    $(".lengthOfEmployment").text(lengthOfEmploymentInput);
    $(".career").text(careerInput);
    $(".newCareer").text(newCareerInput);
    $(".yourName").text(yourNameInput);

    $("#lettertext").show();
    event.preventDefault();

  });
});
