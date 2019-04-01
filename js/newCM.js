var customerArray = [];

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
