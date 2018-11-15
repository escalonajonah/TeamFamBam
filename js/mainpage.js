var cardData = [
  {'profile': 'Friendo Santana', 'avatar': 'avatars/img_avatar1.png','description': 'Some Example Text','index': 1},
  {'profile': 'Buddy Guy', 'avatar': 'avatars/img_avatar1.png','description': 'Some Example Text','index': 2},
  {'profile': 'Cindy Pal', 'avatar': 'avatars/img_avatar6.png','description': 'Some Example Text','index': 3},
  {'profile': 'Jim Acquaintance', 'avatar': 'avatars/img_avatar1.png','description': 'Some Example Text','index': 4},
]

var firstName = localStorage.getItem('firstName');
var lastName = localStorage.getItem('lastName');

//HandleBars for the Profile Cards
var source = $("#card-template").html();
var template = Handlebars.compile(source);

var parentDiv = $("#templatedCards");

function addFriend(){
  var curData = cardData[1];
  var curHtml = template(curData);
  parentDiv.append(curHtml);
};

$(document).ready(function(){
  console.log('hello world');


  //for (var i = 0; i < cardData.length; i++) {
    //var curData = cardData[i];
    //var curHtml = template(curData);
    //parentDiv.append(curHtml);
  //}

});
