var customerArray = [];

var floorNmbr = $("#floor-number").val();
var officeName = $("#office-name").val();
var cmName = $("#full_name").val();
var cmEmail = $("#email").val();
var cmPassword = $("#pwd").val();
var cmUserName = $("#username").val();


function sp (cmUserName, cmName, cmPassword, cmEmail, floorNmbr, officeName){
  this.userName = cmUserName;
  this.cmName = cmName;
  this.cmPassword = cmPassword;
  this.cmEmail = cmEmail;
  this.officeName = officeName;
  this.floorNmbr = floorNmbr;
  this.ID = Math.floor((Math.random() * 200000000) + 100000000);
  customerArray.push([this.ID, this.userName, [this]]);
  //pushes the new contact contained within its own mini array to the customerArray in the format [this.ID,this.userName,[this]]
};
