var topest = document.getElementsByClassName('topest')[0];
var searchInput = topest.getElementsByClassName('search-input')[0];
var search = topest.getElementsByClassName('search')[0];
var instead = topest.getElementsByClassName('instead')[0];
var insteadInput = topest.getElementsByClassName('instead-input')[0];
var reset = document.getElementsByClassName('reset')[0];
var p = document.getElementsByTagName('p');
var procontent = [];
for(var i = 0; i < p.length; i++) {
	procontent[i] = p[i].textContent;
}

search.onclick = function() {
	var value = searchInput.value;
	if (value == "") {
		alert("请输入内容");
		return;
	}
	for(var i = 0; i < p.length; i++) {
		var content = p[i].textContent;
		changeColor(content,value,i);
	}
}

instead.onclick = function() {
	var value = searchInput.value;
	if (value == "") {
		alert("请在搜索框需要需要替换的内容");
		return;
	}
	var InsteadValue = insteadInput.value;
	if (InsteadValue == "") {
		alert("请输入内容");
		return;
	}
	for(var i = 0; i < p.length; i++) {
		p[i].textContent = p[i].textContent.replace(value,InsteadValue);
		var content = p[i].textContent;
		changeColor(content,InsteadValue,i);
	}
}

reset.onclick = function() {
	for(var i = 0; i < p.length; i++) {
		p[i].textContent = procontent[i];
	}
}

function changeColor(content,value,i) {
	if (content.indexOf(value) != -1) {
		var str1 = p[i].textContent.slice(0,content.indexOf(value));
		var str2 = p[i].textContent.slice(content.indexOf(value)+value.length);
		p[i].textContent = '';
		p[i].innerHTML = str1 + "<span>" +  value+ "</span>" + str2;
	}
}