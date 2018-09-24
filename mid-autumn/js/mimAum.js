var main = document.getElementsByClassName("main")[0];
var things = document.getElementsByClassName("thing");
var list = document.getElementsByClassName("list")[0];
var moren = document.getElementsByClassName("moren")[0];
var index = -1;
var span = list.getElementsByTagName("span");
for (let i = 0; i < things.length; i++) {
	things[i].onclick = function() {
		moren.style.display = "none";
		for(let j = 0; j < list.getElementsByTagName("li").length; j++) {
			if (things[i].textContent+"x" == list.getElementsByTagName("li")[j].textContent) {
				main.textContent = things[i].textContent;
				return;
			}
		}
		var Li = document.createElement("li");
		list.appendChild(Li);
		var li = list.getElementsByTagName("li");
		li[++index].innerHTML = things[i].textContent + "<span>x</span>";
		span = list.getElementsByTagName("span");
		main.textContent = things[i].textContent;
		
		function repeat() {
			for(let i = 0; i < span.length; i++) {
				span[i].onclick = function() {
					list = document.getElementsByClassName("list")[0];
					if (list.getElementsByTagName("li").length == 1) {
						moren.style.display = "block";
						main.textContent = "";
					}
					list.removeChild(li[i]);
					index--;
					span = list.getElementsByTagName("span");
					repeat();
				}
			}
		}
		repeat();
	}
}