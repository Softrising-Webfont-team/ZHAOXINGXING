var inputPassword = document.getElementsByClassName('inputPassword')[0];
var key = document.getElementsByClassName('key')[0];
var input = key.getElementsByTagName('input');
var i = 0;
var submit = inputPassword.getElementsByClassName('submit')[0];
var index = 1;

for(var m = 0; m < input.length; m++){
	input[m].readOnly = true;
	input[m].onkeydown = function() {
		onlyNum();
	}
	input[m].onkeyup = function() {
		if (onlyNum() == true) {
			change();
		}
	}
	
}


input[i].readOnly = false;
input[i].focus();
function change() {
	if (input[i].value.length == 0) {
		if (i>0) {
			input[i-1].readOnly = false;
			input[i].previousElementSibling.focus();
			input[i].readOnly = true;
			i--;
		}
	}
	else {
		if (i < input.length-1) {
			input[i+1].readOnly = false;
		}
		input[i].nextElementSibling.focus();
		if (i < input.length-1) {
			input[i].readOnly = true;
		}
		if (i < input.length-1) {
			i++;
		}
	}

}


function onlyNum() {
	if(!(event.keyCode==46)&&!(event.keyCode==8)&&!(event.keyCode==37)&&!(event.keyCode==39))
	if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105))) 
	event.returnValue=false;
	return event.returnValue;
}


submit.onclick = function() {
	for(var m = 0; m < input.length; m++){
		if (input[m].value == "") {
			alert("请输入密码");
			return;
		}
	}
	ajax({
		method: 'post',
		url: '',
		data: {password},
		async: true,
		dataType: 'JSON',
		success: function(data) {
			if (data) {
				alert("密码错误请重新输入，您还可以输入" + data + "次");
			}
			else {
				alert("交易成功");
			}
		},
		fail:function(data) {
			alert('请检查你的网络');
		}
	})
}