var providerArray = [];

var spName = $("#sp-name").val();
var spEmail = $("#sp-email").val();
var spPassword = $("#sp-password").val();
var spUserName = $("#sp-userName").val();


function sp (spUserName, spName, spPassword, spEmail){
  this.userName = spUserName;
  this.spName = spName;
  this.spPassword = spPassword;
  this.spEmail = spEmail;
  this.ID = Math.floor((Math.random() * 200000000) + 100000000);
  providerArray.push([this.ID, this.userName, [this]]);
  //pushes the new contact contained within its own mini array to the address book in the format [this.ID,this.firstName,[this]]
};

j
