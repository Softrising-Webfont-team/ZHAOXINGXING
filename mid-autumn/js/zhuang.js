function getId(id){
    return document.querySelector(id);
}

function addEvent(obj,event,func) {
	return obj.addEventListener(event,func);
}

function arrayEvent(obj,pop,push,shift,unshift,slice,splice,sort,join,reverse) {
	if (pop) {
		obj.pop();
		console.log(obj);
	}
	if (push) {
		obj.push(push[0]);
	}
	if (shift) {
		obj.shift();
	}
	if (unshift) {
		obj.unshift(unshift[0]);
	}
	if (slice) {
		obj = obj.slice(slice[0],slice[1]);
		console.log(obj)
	}
	if (splice) {
		obj = obj.splice(splice[0],splice[1],splice[2]);
	}
	if (sort) {
		obj.sort();
	}
	if (join) {
		obj.join(join[0]);
	}
	if (reverse) {
		obj.reverse();
	}
	return obj;
}

function aboutClass(obj,classname,remove) {
	if (obj.className == "") {
		var reg = 0;
	}
	else {
		var reg = 1;
	}
	if (remove) {
		obj.className = "";
	}
	if (calssname) {
		obj.className = classname;
	}
	return reg;
}