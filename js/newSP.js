var providerArray = [];

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
alert(providerArray)
