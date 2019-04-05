$(document).ready(function(){
  var providerArray = [];
  $("#startSP_modal").click();

  $('#sp_signUP').click(function(){
    event.preventDefault();


    var spName = $("#sp-name").val();
    var spEmail = $("#sp-email").val();
    var spPassword = $("#sp-password").val();
    var spUserName = $("#sp-userName").val();


    function sp (uName, sName, sPassword, sEmail){
      this.userName = uName
      this.spName = sName;
      this.spPassword = sPassword;
      this.spEmail = sEmail;
      this.ID = Math.floor((Math.random() * 200000000) + 100000000);
      providerArray.push([this.ID, this.userName, [this]]);
      //pushes the new contact contained within its own mini array to the address book in the format [this.ID,this.firstName,[this]]
    };

    var serviceProvider = new sp (spUserName, spName, spPassword, spEmail);
    $("#login_account").click();
  });

  $('#login_validate').click(function(){
    event.preventDefault();
    var sign_in = (user, pass) => {
      user_exists = false;
      pass_valid = false;
      for(j=0; j<providerArray.length ; j++){
        var sp_name = providerArray[j][2][0].userName
        var sp_pass = providerArray[j][2][0].spPassword

        if(sp_name === user){
          user_exists = false;
          if (sp_pass === pass) {
            window.open('Service-provider-menu/menu.html', '_self')
            pass_valid = true
          };
          user_exists = true;
        };
      }
      if(user_exists === false){
          alert("There is no contact with that username.")
      };
      if (pass_valid === false ){
        alert("Your password is wrong.")
      };

    };


    var user_name = $("#sp-user-name").val();

    var user_password = $("#sp-pwd").val();

    sign_in(user_name, user_password);



  });

  $("#lower_signUP").click(function(){
    $("#create_account").click();
  });

  $("#lower_signIN").click(function(){
    $("#login_account").click();
  });

});
