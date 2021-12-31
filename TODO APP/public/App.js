var inputtext = document.getElementById("Value");
inputtext.focus();

function Add() {
    var TodoLi = document.createElement("li");
    var ShowList = document.getElementById("TodoList");

    var EditLi = document.createElement("button");
    EditLi.setAttribute("onclick", "Edit(this)");
    EditLi.setAttribute("Class", "Btn");
    var Edittext = document.createTextNode("Edit");
    EditLi.appendChild(Edittext);

    var DeleteLi = document.createElement("button");
    DeleteLi.setAttribute("onclick", "Delete(this)");
    DeleteLi.setAttribute("Class", "Btn");
    var Deletetext = document.createTextNode("Delete");
    DeleteLi.appendChild(Deletetext);

    TodoLi.appendChild(document.createTextNode(inputtext.value));
    TodoLi.appendChild(EditLi);
    TodoLi.appendChild(DeleteLi);

    ShowList.setAttribute("class", "ListStyling");
    ShowList.appendChild(TodoLi);
}

function Delete(element) {
    element.parentNode.remove();
}

function Edit(element) {
    element.parentNode.firstChild.nodeValue = prompt(
    "Edit",
    element.parentNode.firstChild.nodeValue
  );
}