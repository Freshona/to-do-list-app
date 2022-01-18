//1. Adding a new item to the list of items:
$(function(){
  $("#button").click(function() {
    let li = $('<li></li>');
    let delBtn = $('<button>del</button>');
    let inputValue =$('#input').val();

    if(inputValue.trim() === "") {
      alert("This field cannot be empty!");
    }else {
      li.append(inputValue.trim())
      li.append(delBtn)
      $('#list').append(li);
      $('#input').val("")
    }
  })

  //2.Crossing out an item from the list of items:
  $("#list").on("click", "li", function(){
    $(this).toggleClass("strike")
  })

  //Use button to delete li
  $("#list").on("click", "button", function(){
    $(this).parent().remove()
  })

  //3.Remove an item from the list of items:
  $("#list").on("dblclick", "li", function(){
    $(this).remove()
  })

  $('#list').sortable();
})
// /*function newItem(){*/
//   ////1. Adding a new item to the list of items:
//   let li = $('<li></li>');
//   let inputValue =$('#input').val();
//   /*let text = $('inputValue').append(document.createTextNode('X'));
//   $('#input').append(inputValue);*/
//   li.append(inputValue);

//   if (inputValue === '') {
//     alert("This field cannot be empty!");
//   } else {
//    $('#list').append(li);
//   }



// //2.Crossing out an item from the list of items:
// function crossOut() {
//    /*$('#list').addClass('strike');*/
//    li.toggleClass("strike");
// }

// li.on("dblclick", function crossout () 
// {
//   li.toggleClass("strike");
// });

//    /*$('#list').on('click', crossOut());*/
  


//  //3(i). Adding the delete button "X": 
//    let crossOutButton = $('<button></button>');
//    crossOutButton.append(document.createTextNode('X'));
//    li.append(crossOutButton)
//    ;
//    crossOutButton.on("click", deleteListItem);
//    function deleteListItem(){
//      li.addClass("delete");
//    }
 	
//  