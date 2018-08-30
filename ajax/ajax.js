var main = document.getElementsByClassName('main')[0];
var author = document.getElementsByTagName('span')[0];
function change() {
	var xmlhttp;
	if (window.XMLHttpRequest)
	{
	    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
	    xmlhttp=new XMLHttpRequest();
	}
	else
	{
	    // IE6, IE5 浏览器执行代码
	    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var data = JSON.parse(xmlhttp.responseText);
			main.textContent = data.hitokoto;
			author.textContent = data.from;
		}
	}
	xmlhttp.open("GET","https://v1.hitokoto.cn",true);
	xmlhttp.send();
	setTimeout(change,4000);
}
change();