//list에 deletebutton 생성
var list = document.getElementsByTagName("li");
for(var i=0; i<list.length; i++) {
  var span = document.createElement("span");
  var deleteButton = document.createTextNode("\u00D7");
  span.className = "delete_button";
  span.appendChild(deleteButton);
  list[i].appendChild(span);
};

// delete 버튼을 클릭: 리스트 값이 없어진다
var deleteButton = document.querySelectorAll(".delete_button");
for (var i=0; i<deleteButton.length; i++) {
  deleteButton[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
};

// submit 버튼을 클릭: 입력한 값과 deletebtn이 리스트에 생성된다
var submitButton = document.getElementById('submit_button');
submitButton.onclick = function() {
  var inputGoal = document.getElementById('input_goal');
  var group = document.getElementById('list');
  var mgoal = inputGoal.value;
  var mli = document.createElement('li');
  group.appendChild(mli);
  mli.innerHTML = mgoal;
  var span = document.createElement("span");
  var deleteButton = document.createTextNode("\u00D7");
  span.className = "delete_button";
  span.appendChild(deleteButton);
  mli.append(span);
  var deleteButton = document.querySelectorAll(".delete_button");
  for (var i=0; i<deleteButton.length; i++) {
    deleteButton[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    }
  }
};