$(document).ready(function(){


  function menuLoad (){
    var menusStore = sessionStorage.getItem('menusArray');

    if (!menusStore) { // check if an item is already registered
      menusArray = []; // if not, we initiate an empty array
    } else {
      menusArray = JSON.parse(menusStore); // else parse whatever is in
    }
    return menusArray
  }

  var menusArray = menuLoad()
/*

  function menu_add (name, price, stock, descrp, type, spID){
    this.itemName = name;
    this.itemPrice = price;
    this.itemStock = stock;
    this.spID = spID;
    this.itemDescrp = descrp;
    this.itemType = type;
    this.itemID = Math.floor((Math.random() * 400000000) + 300000000);
    menusArray.push([this.spID, this.itemID, this.itemType, [this]]);
    //pushes the new menu item contained within its own mini array to the menusArray in the format [this.spID, this.itemID, this.itemType, [this]]
    //menu_gen();
  };

  var item1 = new menu_add("Goat Stew","5000", "12", "Goat meat with all foods, matooke, posho, rice and sweet potatoes.", "Lunch",  "12");
  var item2 = new menu_add("Beef Stew","4000", "12", "Beef with all foods, matooke, posho, rice and sweet potatoes.", "Lunch",  "12");
  var item3 = new menu_add("Soda","2000", "12", "An ice cold soda, or a warm one depending on your preference.", "Drink",  "12");
  var item4 = new menu_add("G-nuts","3000", "22", "G-nut sauce with all foods, matooke, posho, rice and sweet potatoes.", "Lunch",  "12");
  var item5 = new menu_add("G-nuts and Fish","5000", "12", "G-nuts and fish with all foods, matooke, posho, rice and sweet potatoes.", "Lunch",  "12");
  var item6 = new menu_add("Goat Stew random1","5000", "12", "Beef with all foods, matooke, posho, rice and sweet potatoes.", "Lunch",  "12");
  var item7 = new menu_add("Goat Stew random2","5000", "12", "Beef with all foods, matooke, posho, rice and sweet potatoes.", "Lunch",  "12");
  var item8 = new menu_add("Goat Stew random3","5000", "12", "Beef with all foods, matooke, posho, rice and sweet potatoes.", "Lunch",  "12");
  var item9 = new menu_add("Goat Stew random4","5000", "12", "Beef with all foods, matooke, posho, rice and sweet potatoes.", "Lunch",  "12");
  var item10 = new menu_add("Goat Stew random5","5000", "12", "Beef with all foods, matooke, posho, rice and sweet potatoes.", "Lunch",  "12");


  */
  
  var half1 = $("#menuHalf1")
  var half2 = $("#menuHalf2")
  var length1 = $("div.single-dish") //number of items appended to he menu currently
  var act_length = length1.length;

  function menuCreator (){
    for(f=0; f<menusArray.length; f++){
      if (f < 5){
        half1.prepend(`<div class="single-dish">
          <div class="single-dish-heading">
            <a href="#0" class="cd-add-to-cart"data-price="`+ menusArray[f][3][0].itemPrice +`" id="item`+ menusArray[f][3][0].itemID +`">`+ menusArray[f][3][0].itemName +`</a>
            <h4 class="price">UGX ` + menusArray[f][3][0].itemPrice +`</h4>
          </div>
          <p>`+ menusArray[f][3][0].itemDescrp +`</p>
        </div> `)
      };

      if (f > 5){
        half2.prepend(`<div class="single-dish">
          <div class="single-dish-heading">
            <a href="#0" class="cd-add-to-cart"data-price="`+ menusArray[f][3][0].itemPrice +`" id="item`+ menusArray[f][3][0].itemID +`">`+ menusArray[f][3][0].itemName +`</a>
            <h4 class="price">UGX ` + menusArray[f][3][0].itemPrice +`</h4>
          </div>
          <p>`+ menusArray[f][3][0].itemDescrp +`</p>
        </div> `)
      };

    };
  };

  menuCreator();


  /*$("#menuHalf1").prepend(`<div class="single-dish">
    <div class="single-dish-heading">
      <a href="#0" class="cd-add-to-cart"data-price="3500" name="Beans">Beans</a>
      <h4 class="price">UGX ` + 3500 +`</h4>
    </div>
    <p>`+ description +`</p>
  </div>`)*/

  function classRemover(){
    $("#snackNav").removeClass();
    $("#drinkNav").removeClass();
    $("#lunchNav").removeClass();
  };

  $("#lunchNav").click(function(){
    classRemover();
    $("#lunchNav").addClass("active")
  })

  $("#drinkNav").click(function(){
    classRemover();
    $("#drinkNav").addClass("active")
  })

  $("#snackNav").click(function(){
    classRemover();
    $("#snackNav").addClass("active")
  })


  //Number of pages
  /*
  Use a counter a = menusArray.length
  var b = number of items that can fit on a page (10)
  c = a%b
  d = a-c
  e = d/b
  e is the number of pages we can have, but i a%b is not = 0, then we add one extra page for the remainder.

  Add links to the new pages using a for loop where the counter terminates when it reaches e
  Each link has a generated range attached to clicking it whereby that range determines which items[by index] from the menu array get added

  */

  $("#shopping_icon").click(function(){
    alert("This kinda worked");
    $("#modalCart").modal();
  })









});
