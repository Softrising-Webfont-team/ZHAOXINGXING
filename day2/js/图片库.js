function show(point) {
	var placement=document.getElementById("placement");
	var source = point.getAttribute("href");
	placement.setAttribute("src",source);
	var place=point.getAttribute("title")
	var select=document.getElementById("select");
	select.firstChild.nodeValue=place;
	}