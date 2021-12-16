var ul = document.getElementById("todo-list");
var btnAdicionar = document.getElementById("btn-adicionar");
var input = document.getElementById("input-texto");

function createTask() {
	var li = document.createElement("li");
	var label = document.createElement("label");
	var checkbox = document.createElement("input");
	var span = document.createElement("span");
	var taskText = document.createTextNode(input.value);
	
	checkbox.type = "checkbox";
	label.classList.add("list-label");
	checkbox.classList.add("list-checkbox");
	span.classList.add("list-span");
	li.addEventListener("click", addListItemClick);
	
	span.appendChild(taskText);
	label.appendChild(checkbox);
	label.appendChild(span);
	li.appendChild(label);
	ul.appendChild(li);
}

function addListItemClick(e) {
	if(e.target.nodeName == "LI") {
		var checkbox = e.target.firstChild.firstChild;
		if(checkbox.checked == true) { 
			checkbox.checked = false; 
		} else if(checkbox.checked == false) { 
			checkbox.checked = true; 
		}
	}
}

function addkeyEnterClick(e) {
	if(e.keyCode === 13) {
		e.preventDefault();
		btnAdicionar.click();
	} 
}

function appendTask() {
	if(input.value.length > 0) {
		createTask();
		input.value = "";
		input.focus();
	} else {
		alert("Erro: Voce não pode criar uma tarefa vazia!");
	}
}

btnAdicionar.addEventListener("click", appendTask);
input.addEventListener("keyup", addkeyEnterClick);
