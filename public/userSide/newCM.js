$(document).ready(function(){

  var customerStore = sessionStorage.getItem('customerArray');

  if (!customerStore) { // check if an item is already registered
    customerArray = []; // if not, we initiate an empty array
  } else {
    customerArray = JSON.parse(customerStore); // else parse whatever is in
  }

  $("#start_modal").click();
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
      //customerArray = JSON.parse(customerStore);
      customerArray.push([this.ID, this.userName, [this]]);
      sessionStorage.setItem('customerArray', JSON.stringify(customerArray));
      //pushes the new contact contained within its own mini array to the customerArray in the format [this.ID,this.userName,[this]]
    };

    var customer = new cm (cmUserName, cmName, cmPassword, cmEmail, floorNmbr, officeName);
    $("#LogIn").click();


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
            pass_valid = true
            //sessionStorage.setItem('customerArray', JSON.stringify(customerArray));
            window.open('User-side/index.html', '_self')

          };
          user_exists = true;
        };
      }
      if(user_exists === false){
          alert("There is no contact with that username.")
      };
      if (pass_valid === false && user_exists === true ){
        alert("Your password is wrong.")
      };

    };

    var user_name = $("#user-name").val();

    var user_password = $("#pwd1").val();

    sign_in(user_name, user_password);



  });

  $("#direct_toSignUp").click(function(){
    $("#creator").click();
  });

  $("#Log_in").click(function(){
    $("#LogIn").click();
  });

});
