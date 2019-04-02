$(document).ready(function(){
  var customerArray = [];
  $('#signUP').click(function(){
    event.preventDefault();


    var floorNmbr = $("#floor-number").val();
    var officeName = $("#office-name").val();
    var cmName = $("#full_name").val();
    var cmEmail = $("#email").val();
    var cmPassword = $("#pwd").val();
    var cmUserName = $("#username").val();


    function cm (cUserName, cName, cPassword, cEmail, cfloor, oName){
      this.userName = cUserName;
      this.cmName = cName;
      this.cmPassword = cPassword;
      this.cmEmail = cEmail;
      this.officeName = oName;
      this.floorNmbr = cfloor;
      this.ID = Math.floor((Math.random() * 200000000) + 100000000);
      customerArray.push([this.ID, this.userName, [this]]);
      //pushes the new contact contained within its own mini array to the customerArray in the format [this.ID,this.userName,[this]]
    };

    var customer = new cm (cmUserName, cmName, cmPassword, cmEmail, floorNmbr, officeName);

    alert(customerArray)
  });

  $('#signIN').click(function(){
    event.preventDefault();
    var sign_in = (user, pass) => {
      user_exists = false;
      pass_valid = false;
      for(j=0; j<customerArray.length ; j++){
        var customer_name = customerArray[j][2][0].userName
        var customer_pass = customerArray[j][2][0].cmPassword

        if(customer_name === user){
          user_exists = true;
          if (customer_pass === pass) {
            alert("User exists and password is correct")
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
      alert(pass_valid)
      alert( user_exists)
    };

    var user_name = $("#users_name").val();
    alert(user_name);
    alert(customerArray[0][2][0].userName)
    var user_password = $("#users_password").val();

    sign_in(user_name, user_password);



  });


});
