var changeUnits = document.getElementsByClassName('change-units');
var changeSort = document.getElementsByClassName('change-sort');
var output = document.getElementsByClassName('output')[0];
var input = document.getElementsByClassName('input')[0];
var submit = document.getElementsByTagName('button')[0];
var front = document.getElementsByClassName('front');
var td = new Array();
var theLastNum = 1;
var theFirstNum;
for(var i = 0; i < 2; i++) {
	td[i] = new Array();
	td[i] = front[i].getElementsByTagName('td');
}

for(let m = 0; m < 2; m++){
	for(let j = 0; j < td[m].length; j++){
		td[m][j].onclick = function() {
			changeSort[m].textContent = td[m][j].textContent;
			changeUnits[m].style.display = "none";
			input.value = "";
			output.value = "";
		}
	}
}


//控制键入的值
output.onkeydown = function() {
	var value = output.value;
	if (value.indexOf(".") == true) {
		theFirstNum = 0;
	}
	else {
		theFirstNum = 1;
	}
	if (theLastNum == 2) {
		onlyNum(2);
		return;
	}
	onlyNum(1);
}
output.onkeyup = function() {
	var value = output.value;
	if (value[value.length-1] == ".") {
		theLastNum = 2;
	}
}

function onlyNum(index) {
	if (index != 2 || theFirstNum == 1) {
			if (output.value != "") {
			if (event.keyCode==190 || event.keyCode==110) {
				theFirstNum = 0;
				return;
			}
		}
	}
	if(!(event.keyCode==46)&&!(event.keyCode==8)&&!(event.keyCode==37)&&!(event.keyCode==39))
	if(!((event.keyCode>=48&&event.keyCode<=57)||(event.keyCode>=96&&event.keyCode<=105))) 
	event.returnValue=false;
	return event.returnValue;
}



//计算相应的值
output.oninput = function() {
	whitchInput(output,0);
}
input.oninput = function() {
	whitchInput(input,1);
}

function whitchInput(whitch,index,staySort) {
	if(index == 0) {
		index = 1;
	}
	var value = whitch.value;
	if (value == "") {
		if (whitch == output) {
			input.value = "";
			return;
		}
		else {
			output.value = "";
			return;
		}
	}
	if (value[value.length-1] == ".") {
		value == value.substring(0,value.length-1)
	}
	var reg = changeSort[index].textContent;
	var endValue = caculate(value,reg,index);
	if (endValue.toString().split('.')[1].length > 6) {
		endValue = parseFloat(endValue).toFixed(6);
	}
	if (whitch == output) {
		input.value = endValue;
	}
	else {
		output.value = endValue;
	}
}

function caculate(value,reg,index) {
	if (index == 0) {
		var stayIndex = index;
		index = 1
	}
	else {
		var stayIndex = index;
		index = 0
	}
	var endAdd = new Array()
	for(let m = 0; m < 2; m++){
		endAdd[m] = 1.1;
		for(let j = 0; j < td[m].length; j++) {

			if (td[m][j].textContent == "BTC") {
				endAdd[m] = 1;
				break;
			}
			
			if (td[m][j].textContent == changeSort[m].textContent) {
				break;
			}
			endAdd[m] += 0.1;
		}
	}
	var theEnd;
	if (index == 0) {
		theEdd = endAdd[1]/endAdd[0];
	}
	else {
		theEdd = endAdd[0]/endAdd[1];
	}
	return value*theEdd;
}

//点击其他地方消失
output.onclick = function() {
	appear();
}
input.onclick = function() {
	appear();
}
changeSort[0].onclick = function() {
	judge(0);
}

changeSort[1].onclick = function() {
	judge(1);
}


function appear() {
	changeUnits[0].style.display = "none";
	changeUnits[1].style.display = "none";
}

function judge(index) {
	if (changeUnits[index].style.display == "none") {
		changeUnits[index].style.display = "block";
		if (index == 0) {
			changeUnits[1].style.display = "none";
		}
		else{
			changeUnits[0].style.display = "none";
		}
	}
	else {
		changeUnits[index].style.display = "none";
		// 第一次时候这一块发生作用？
	}
}


submit.onclick = function() {
	if (input.value == "" || output.value == "") {
		alert("请输入需要进行兑换的金额");
		return;
	}
	else {
		ajax({
			method: 'post',
			url: '',
			data: {value:output.value},
			async: true,
			dataType: 'JSON',
			success: function(data) {
				if (data.money < output.value) {
					alert('账户余额不足');
				}
				else {
					alert('兑换成功');
				}
			},
			fail: function(data) {
				alert('请检查你的网络');
			}
		})
	}
}