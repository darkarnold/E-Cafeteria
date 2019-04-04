//New Menu item generator
//Display menu
//Update Menu
//Delete Menu item
//Recover Menu item
//Edit menu item
//All functions should call the menugen after theyre done so that they reset the existing items.

$(document).ready(function(){
  var menuArray = [];
  var tempBin = [];
  var snack_Array =[];
  var lunch_Array =[];
  var drink_Array =[];

  //MENU ITEM CONSTRUCTOR

    function menu_add (name, price, stock, descrp, type, spID){
      this.itemName = name;
      this.itemPrice = price;
      this.itemStock = stock;
      this.spID = spID;
      this.itemDescrp = descrp;
      this.itemType = type;
      this.itemID = Math.floor((Math.random() * 400000000) + 300000000);
      menuArray.push([this.spID, this.itemID, this.itemType, [this]]);
      //pushes the new menu item contained within its own mini array to the menuArray in the format [this.spID, this.itemID, this.itemType, [this]]
      //menu_gen();
    };


    function menu_gen(param){
      menuArray.sort();
      var all_gen = "all";
      var snack_gen = "Snack";
      var lunch_gen = "Lunch";
      var drinks_gen = "Drinks"

      if(param === all_gen){
        for(p=0; p<menuArray.length; p++){
          $(`#`+ menuArray[p][3][0].itemName +``).remove();
          $("#menulist").append(`
            <div class="col-md-5 offset-md-1" id="`+ menuArray[p][3][0].itemName +`">
              <div class="content btn btn-light" >
                <h6 class="header">`+ menuArray[p][3][0].itemName + ` (`+ menuArray[p][3][0].itemStock +` left)</h6>
                <p class="description all_items">`+ menuArray[p][3][0].itemDescrp +`</p>
                <p class="price">`+ menuArray[p][3][0].itemPrice +` UGX</p>
              </div>
            </div>
            `);
        };
      };

      if(param === snack_gen ){
        for(p=0; p<menuArray.length; p++){
          var menu_type = menuArray[p][2];
          var snack = "Snack";
          if(menu_type===snack){
            snack_Array.push(menuArray[p]);
          };};

        snack_Array.sort();

        for(p=0; p<snack_Array.length;p++){
          $(`#`+ snack_Array[p][3][0].itemName +``).remove();
          $("#menulist").append(`
            <div class="col-md-5 offset-md-1" id="`+ snack_Array[p][3][0].itemName +`">
              <div class="content btn btn-light" >
               <h6 class="header">`+ snack_Array[p][3][0].itemName + ` (`+ snack_Array[p][3][0].itemStock +` left)</h6>
                <p class="description all_items">`+ snack_Array[p][3][0].itemDescrp +`</p>
                <p class="price">`+ snack_Array[p][3][0].itemPrice +` UGX</p>
              </div>
            </div>
            `);
        };
      };

      if(param === lunch_gen ){
        for(p=0; p<menuArray.length; p++){
          var menu_type = menuArray[p][2];
          var lunch = "Lunch";
          if(menu_type===lunch){
            lunch_Array.push(menuArray[p]);
          };};

        lunch_Array.sort();

        for(p=0; p<lunch_Array.length;p++){
          $(`#`+ lunch_Array[p][3][0].itemName +``).remove();
          $("#menulist").append(`
            <div class="col-md-5 offset-md-1" id="`+ lunch_Array[p][3][0].itemName +`">
              <div class="content btn btn-light" >
               <h6 class="header">`+ lunch_Array[p][3][0].itemName + ` (`+ lunch_Array[p][3][0].itemStock +` left)</h6>
                <p class="description all_items">`+ lunch_Array[p][3][0].itemDescrp +`</p>
                <p class="price">`+ lunch_Array[p][3][0].itemPrice +` UGX</p>
              </div>
            </div>
            `);
        };
      };

      if(param === drinks_gen ){
        for(p=0; p<menuArray.length; p++){
          var menu_type = menuArray[p][2];
          var drink = "Drinks";
          if(menu_type===drink){
            drink_Array.push(menuArray[p]);
          };};

        drink_Array.sort();

        for(p=0; p<drink_Array.length;p++){
          $(`#`+ drink_Array[p][3][0].itemName +``).remove();
          $("#menulist").append(`

            <div class="col-md-5 offset-md-1" id="`+ drink_Array[p][3][0].itemName +`">
              <div class="content btn btn-light" >
               <h6 class="header">`+ drink_Array[p][3][0].itemName + ` (`+ drink_Array[p][3][0].itemStock +` left)</h6>
                <p class="description all_items">`+ drink_Array[p][3][0].itemDescrp +`</p>
                <p class="price">`+ drink_Array[p][3][0].itemPrice +` UGX</p>
              </div>
            </div>
            `);
        };
      };

  };

  menu_gen("all")




  //SPECIFIC TO THE PAGE;
  function formReset(){
    $("#form34").val("");
    $("#form29").val("");
    $("#form35").val("");
    $("#form8").val("");
  };


  function toALL (){
    $("#snack_display").removeClass()
    $("#snack_display").addClass("nav-link")
    $("#drinks_display").removeClass()
    $("#drinks_display").addClass("nav-link")
    $("#lunch_display").removeClass()
    $("#lunch_display").addClass("nav-link")
    $("#all_display").removeClass()
    $("#all_display").addClass("nav-link active")
  };

  $('#snack_adder').click(function(){
   $("#meal_save").remove();
   $("#snack_item").remove();
   $("#lunch_item").remove();
   $("#drinks_item").remove();

   $("#modal_end").append(`<button class="btn btn-unique" id="snack_item">Save</button>`);
    $('#snack_item').click(function(){

      var snack_itemName = $("#form34").val();
      var snack_itemPrice = $("#form29").val();
      var snack_itemStock = $("#form35").val();
      var snack_itemDescrp = $("#form8").val();

      var new_snack = new menu_add (snack_itemName, snack_itemPrice, snack_itemStock, snack_itemDescrp, "Snack", 12);
      toALL();
      menu_gen("all");
      formReset()
    });
  });

  $('#lunch_adder').click(function(){
    $("#meal_save").remove();
    $("#snack_item").remove();
    $("#lunch_item").remove();
    $("#drinks_item").remove();

   $("#modal_end").append(`<button class="btn btn-unique" id="lunch_item">Save</button>`);
    $('#lunch_item').click(function(){

      var snack_itemName = $("#form34").val();
      var snack_itemPrice = $("#form29").val();
      var snack_itemStock = $("#form35").val();
      var snack_itemDescrp = $("#form8").val();

      var new_snack = new menu_add (snack_itemName, snack_itemPrice, snack_itemStock, snack_itemDescrp, "Lunch", 12);
      toALL();
      menu_gen("all");
      formReset()
    });
  });

  $('#drinks_adder').click(function(){
    $("#meal_save").remove();
    $("#snack_item").remove();
    $("#lunch_item").remove();
    $("#drinks_item").remove();

   $("#modal_end").append(`<button class="btn btn-unique" id="drinks_item">Save</button>`);
    $('#drinks_item').click(function(){

      var snack_itemName = $("#form34").val();
      var snack_itemPrice = $("#form29").val();
      var snack_itemStock = $("#form35").val();
      var snack_itemDescrp = $("#form8").val();

      var new_snack = new menu_add (snack_itemName, snack_itemPrice, snack_itemStock, snack_itemDescrp, "Drinks", 12);
      toALL();
      menu_gen("all");
      formReset()
    });
  });


  $("#snack_display").click(function(){

    $("#menulist").remove();
    $(".menulist").prepend(`<div class="row" id="menulist"></div>`)
    $("#all_display").removeClass()
    $("#all_display").addClass("nav-link")
    $("#drinks_display").removeClass()
    $("#drinks_display").addClass("nav-link")
    $("#lunch_display").removeClass()
    $("#lunch_display").addClass("nav-link")
    $("#snack_display").removeClass()
    $("#snack_display").addClass("nav-link active")
    menu_gen("Snack");
  });

  $("#all_display").click(function(){
    $("#menulist").remove();
    $(".menulist").prepend(`<div class="row" id="menulist"></div>`)
    $("#snack_display").removeClass()
    $("#snack_display").addClass("nav-link")
    $("#drinks_display").removeClass()
    $("#drinks_display").addClass("nav-link")
    $("#lunch_display").removeClass()
    $("#lunch_display").addClass("nav-link")
    $("#all_display").removeClass()
    $("#all_display").addClass("nav-link active")
    menu_gen("all");
  });


  $("#lunch_display").click(function(){

    $("#menulist").remove();
    $(".menulist").prepend(`<div class="row" id="menulist"></div>`)
    $("#all_display").removeClass()
    $("#all_display").addClass("nav-link")
    $("#snack_display").removeClass()
    $("#snack_display").addClass("nav-link")
    $("#drinks_display").removeClass()
    $("#drinks_display").addClass("nav-link")
    $("#lunch_display").removeClass()
    $("#lunch_display").addClass("nav-link active")
    menu_gen("Lunch");
  });

  $("#drinks_display").click(function(){

    $("#menulist").remove();
    $(".menulist").prepend(`<div class="row" id="menulist"></div>`)
    $("#all_display").removeClass()
    $("#all_display").addClass("nav-link")
    $("#snack_display").removeClass()
    $("#snack_display").addClass("nav-link")
    $("#lunch_display").removeClass()
    $("#lunch_display").addClass("nav-link")
    $("#drinks_display").removeClass()
    $("#drinks_display").addClass("nav-link active")
    menu_gen("Drinks");
  });

  $("#save_del").click(function(){
    var discard = $("#form38").val();
    for(x=0; x<menuArray.length; x++){
      var item_name = menuArray[x][3][0].itemName;
      if(discard===item_name){
        menuArray.splice(x,1);
      };};

    for(x=0; x<drink_Array.length; x++){
        var item_name = drink_Array[x][3][0].itemName;
        if(discard===item_name){
          drink_Array.splice(x,1);
        };};

    for(x=0; x<lunch_Array.length; x++){
          var item_name = lunch_Array[x][3][0].itemName;
          if(discard===item_name){
            lunch_Array.splice(x,1);
          };};

    for(x=0; x<snack_Array.length; x++){
            var item_name = snack_Array[x][3][0].itemName;
            if(discard===item_name){
              snack_Array.splice(x,1);
            };};

    $("#all_display").click();
    $("#form38").val("");

  });


});
