var change = document.getElementsByClassName('signIn')[0].getElementsByClassName('picture')[0];
var pickuang = document.getElementsByClassName('signIn')[0].getElementsByClassName('pickuang')[0];
pickuang.onclick = function () {
	var recognize = pickuang.getElementsByTagName("img")[0].src;
	var change = document.getElementsByClassName('signIn')[0].getElementsByClassName('picture')[0];
	var recognizeafter = recognize.substring(recognize.length-5);
	var input = document.getElementsByClassName('signIn')[0].getElementsByClassName('input')[0];
	if (recognizeafter == "a.png") {
		change.src = "imags/b.png";
		input.type = "text";
	}
	else {
		change.src = "imags/a.png";
		input.type = "password";
	}
}
var signIn = document.getElementsByClassName('signIn')[0];
var login = document.getElementsByClassName('row')[0].getElementsByClassName('login')[0];
var changemonney = document.getElementsByClassName('row')[0].getElementsByClassName('changemonney')[0];
var consult = document.getElementsByClassName('row')[0].getElementsByClassName('consult')[0];
var aqmsg = document.getElementsByClassName('aqmsg')[0];
var exchange = document.getElementsByClassName('exchange')[0];
login.onclick = function() {
	login.style.background = "#d1515e";
	login.style.color = "white";
	signIn.style.display = "block";
	aqmsg.style.display = "none";
	consult.style.background = "white";
	consult.style.color = "#626262";
	changemonney.style.background = "white";
	changemonney.style.color = "#626262";
	exchange.style.display = "none";
	sendmoney.style.display = "none";
aquiremoney.style.display = "none";
}
changemonney.onclick = function() {
	changemonney.style.background = "#d1515e";
	changemonney.style.color = "white";
	exchange.style.display = "block";
	aqmsg.style.display = "none";
	consult.style.background = "white";
	consult.style.color = "#626262";
	login.style.background = "white";
	login.style.color = "#626262";
	signIn.style.display = "none";
}
var aquire = exchange.getElementsByClassName('aquire')[0];
var aquirep = exchange.getElementsByClassName('aquire')[1];
var sendout = exchange.getElementsByClassName('sendout')[0];
var sendoutp = exchange.getElementsByClassName('sendout')[1];
var aquiremoney = document.getElementsByClassName('aquiremoney')[0];
var returnn = aquiremoney.getElementsByClassName('return')[0];
var sendmoney = document.getElementsByClassName('sendmoney')[0];
var returnm =sendmoney.getElementsByClassName('return')[0];
aquire.onclick = function() {
	aquiremoney.style.display = "block";
	exchange.style.display = "none";
	sendmoney.style.display = "none";
}
aquirep.onclick = function() {
	aquiremoney.style.display = "block";
	exchange.style.display = "none";
	sendmoney.style.display = "none";
}
returnn.onclick = function() {
	aquiremoney.style.display = "none";
	exchange.style.display = "block";
}
sendout.onclick = function() {
	sendmoney.style.display = "block";
	exchange.style.display = "none";
	aquiremoney.style.display = "none";
}
sendoutp.onclick = function() {
	sendmoney.style.display = "block";
	exchange.style.display = "none";
	aquiremoney.style.display = "none";
}
returnm.onclick = function() {
	sendmoney.style.display = "none";
	exchange.style.display = "block";
}

consult.onclick = function() {
	aqmsg.style.display = "block";
	consult.style.background = "#d1515e";
	consult.style.color = "white";
	login.style.background = "white";
	login.style.color = "#626262";
	signIn.style.display = "none";
	changemonney.style.background = "white";
	changemonney.style.color = "#626262";
	exchange.style.display = "none";
	sendmoney.style.display = "none";
aquiremoney.style.display = "none";
}
$(function(){
	$('#get').bind('click',function(){
		$.ajax({
			'url':'',
			'data':{"password":$('#password').val()},
			'success': function(data) {
				switch(data.type) {
					case 0:alert("注册失败，请稍后尝试");break;
					case 1:{
						$('#success').css("display","block");
						$('#signIn').css("display","none");
						$('#download').attr('href',data.address);
						alert("注册成功");
						break;
					}
				}
			},
			'type':'post',
			'dataType':'json',
		})
	})
	$('#sendsure').click(function(){
		$.ajax({
			'url':'',
			'data':{"sendmoney":$('#sendmoney').val(),"sendaddress":$('#sendaddress').val()},
			'type':'post',
			'dataType':'json',
			'success' : function(data) {
				switch(data.type) {
					case 0: alert("转账失败请稍后重试");break;
					case 1: alert("转账成功");break;
				}
			},
		})
	})
	$('#aquiresure').click(function(){
		$.ajax({
			'url':'',
			'data':{"aquiremoney":$('#aquiremoney').val(),"aquireaddress":$('#aquireaddress').val()},
			'type':'post',
			'dataType':'json',
			'success' : function(data) {
				switch(data.type) {
					case 0: alert("请求失败请稍后重试");break;
					case 1: alert("已转入您的账户");break;
				}
			},
		})
	})
	$('#aquiremsgsure').click(function(){
		$.ajax({
			'url':'',
			'data':{"aquiremsgaddress":$('#aquiremsgaddress').val()},
			'type':'post',
			'dataType':'json',
			'success' : function(data) {
				switch(data.type) {
					case 0:alert("请求失败请稍后重试");break;
					case 1:  {
						$('#all').css("display","none");break;
						$('#blockNumber').val() = data.blockNumber;
						$('#from').val() = data.from;
						$('#gas').val() = data.gas;
						$('#gasPrice').val() = data.gasPrice;
						$('#hash').val() = data.hash;
						$('#input').val() = data.input;
						$('#nonce').val() = data.nonce;
						$('#r').val() = data.r;
						$('#s').val() = data.s;
						$('#to').val() = data.to;
						$('#transactionIndex').val() = data.transactionIndex;
						$('#v').val() = data.v;
						$('#value').val() = data.value;
						$('#show').css("display","block");break;
					}
				}
			},
		})
	})
})