var input = document.getElementsByClassName("inp")[0];
var output = document.getElementsByClassName("output")[0];
var btnAdd = document.getElementsByClassName("btn")[0];

var c = 0;

btnAdd.addEventListener('click', function(){
	addElements();
	input.value = "";
	console.log(output);
}, false);

function addElements(){
	var div = document.createElement('div');
	div.id = "dv";
	output.appendChild(div);
	div.appendChild(addInputCheckbox());
	div.appendChild(addLabel());
	div.appendChild(addEditButton());
	div.appendChild(addSaveButton());
	div.appendChild(addDeleteButton());
	getCheckboxElement();
	getEditElement();
	getSaveElement();
	getDeleteElement();
	c++;
}

function addInputCheckbox(){
	var inp = document.createElement('input');
	inp.type = "checkbox";
	inp.id = "check" + c;
	return inp;
}

function addEditButton(){
	var b = document.createElement('button');
	b.id = "edit" + c;
	b.innerHTML = "Edit";
	return b;
}

function addLabel(){
	var lab = document.createElement('p');
	lab.id = "tex" + c;
	lab.name = "input";
	lab.innerHTML = input.value;
	return lab;
}

function addSaveButton(){
	var sav = document.createElement('button');
	sav.id = 'sv'+c;
	sav.innerHTML = "Save";
	sav.style.display = "none";
	return sav;
}

function addDeleteButton(){
	var del = document.createElement('button');
	del.id = 'del' + c;
	del.innerHTML = 'Delete';
	return del;
}

function getCheckboxElement(){
		var check = document.getElementById("check"+c);
		checkedFunc(check);
}

function checkedFunc(elem){
	elem.addEventListener('change', function(){
	for(var i = 0; i < c; i++){
		if(elem.id == "check" + i){
			if(document.getElementById("check" + i).checked){
			document.getElementById("tex" + i).style = "text-decoration: line-through;";}
		else{
			document.getElementById("tex" + i).style = "text-decoration: none;";
		}
		}
	}
});
}

function getEditElement(){
		var edit = document.getElementById('edit'+c);
	   editFunc(edit);  
	}

		function editFunc(elem){
		elem.addEventListener('click', function(){
		for(var i = 0; i< c; i++){
			if(elem.id == "edit"+i){
				var inp = document.createElement('input');
				inp.id = document.getElementById("tex"+i).id;
				inp.name = "inp";
				inp.value = document.getElementById("tex"+i).innerHTML;
			    document.getElementById("tex"+i).parentNode.replaceChild(inp, document.getElementById("tex"+i));
				document.getElementById("check" + i).checked = false;
				elem.style.display = "none";
				document.getElementById('sv' + i).style = "display: block";
			}
		}
	});
}

function getSaveElement(){
	var save = document.getElementById('sv' + c);
	saveFunc(save);
}

function saveFunc(elem){
	elem.addEventListener('click', function(){
		for(var i = 0; i < c; i++){
			if(elem.id == "sv"+i){
				var labe = document.createElement('p');
				labe.id = document.getElementById("tex"+i).id;
				labe.innerHTML = document.getElementById("tex"+i).value;
			    document.getElementById("tex"+i).parentNode.replaceChild(labe, document.getElementById("tex"+i));	
				var edit = document.getElementById('edit'+i);
				elem.style.display = "none";
				document.getElementById('edit' + i).style = "display: block";
			}
		}
	});
}

function getDeleteElement(){
	var del = document.getElementById('del' + c);
	deleteFunc(del);
}
function deleteFunc(elem){
	elem.addEventListener('click', function(){
		console.log(document.getElementsByClassName("outp").length);

		for(var i = 0; i <= c; i++){
			if(elem.id == "del"+i){
			    document.getElementById("tex"+i).parentNode.remove();	
			}
		}
	});
}

