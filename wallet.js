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
var lead = document.getElementsByClassName('row')[0].getElementsByClassName('lead');
var aqmsg = document.getElementsByClassName('aqmsg')[0];
var exchange = document.getElementsByClassName('exchange')[0];
for(let i=0;i<lead.length;i++) {
	lead[i].onclick = function(){
		result(i);
	}
	// 直接传参问题？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？
}
function result(i) {
	for(var m=0;m<lead.length;m++){
		if (m==i) {
			if (i==0) {
			signIn.style.display = "block";
			aqmsg.style.display = "none";
			exchange.style.display = "none";
			aquiremoney.style.display = "none";
			sendmoney.style.display = "none";
			}
			else if (i==1) {
			exchange.style.display = "block";
			signIn.style.display = "none";
			aqmsg.style.display = "none";
			aquiremoney.style.display = "none";
			sendmoney.style.display = "none";
			}
			else if (i==2) {
			aqmsg.style.display = "block";
			exchange.style.display = "none";
			signIn.style.display = "none";
			aquiremoney.style.display = "none";
			sendmoney.style.display = "none";
			}
			lead[i].style.color = "white";
			lead[i].style.background = "#d1515e";
		}
		else {
			lead[m].style.background = "white";
			lead[m].style.color = "#626262";
		}
	}
}
var aquire = exchange.getElementsByClassName('aquire');
var sendout = exchange.getElementsByClassName('sendout');
var aquiremoney = document.getElementsByClassName('aquiremoney')[0];
var sendmoney = document.getElementsByClassName('sendmoney')[0];
var returnn =document.getElementsByClassName('return');
for(var i=0;i<aquire.length;i++){
	aquire[i].onclick = function() {
	aquiremoney.style.display = "block";
	exchange.style.display = "none";
	sendmoney.style.display = "none";
}
}
for(var i=0;i<sendout.length;i++) {
	sendout[i].onclick = function() {
		sendmoney.style.display = "block";
		exchange.style.display = "none";
		aquiremoney.style.display = "none";
	}
}
for(var i=0;i<returnn.length;i++){
	returnn[i].onclick = function() {
		back(i);
	}
}
function back(i) {
	if (i==0) {
		aquiremoney.style.display = "none";
	exchange.style.display = "block";
	}
	else {
		sendmoney.style.display = "none";
	exchange.style.display = "block";
	}
}
$(function(){
	$('#get').bind('click',function(){
		if ($('#password').val() == "" || $('#password').val().length<9) {
			alert("请至少输入9位数密码");
		}
		else {
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
		})}
	})
	$('#sendsure').click(function(){
		if ($('#sendmoney').val()=="" && $('#sendaddress').val() =="") {
			alert("请输入全部信息后提交")
		}
		else if ($('#sendmoney').val()=="") {
			alert("请输入需要转账金额");
		}
		else if ($('#sendaddress').val()=="" ) {
			alert("请输入对方账户地址");
		}
		else {
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
		})}
	})
	$('.aquiresure').click(function(){
		if ($('#aquiremoney').val()=="" && $('#aquireaddress').val() =="") {
			alert("请输入全部信息后提交")
		}
		else if ($('#aquiremoney').val()=="") {
			alert("请输入需要获取的金额");
		}
		else if ($('#aquireaddress').val()=="" ) {
			alert("请输入对方账户地址");
		}
		else {
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
		})}
	})
	$('#aquiremsgsure').click(function(){
		if ($('#aquiremsgaddress').val() == "") {
			alert("请输入您所查询的账户地址");
		}
		else {
		window.location.href="show.html"; 
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
		})}
	})
})