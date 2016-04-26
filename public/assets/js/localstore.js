function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}




if (storageAvailable('localStorage')) {
	// Yippee! We can use localStorage awesomeness
  console.log("Yippee go go go");
}
else {
	// Too bad, no localStorage for us
  console.log("Too Bad");
}
var naMe = localStorage.getItem('naMe');
console.log(naMe);

// test 04232016 next line - submit
submitlog = function() {
if(!localStorage.getItem('naMe')) {
  // populateStorage();
	function populateStorage() {
  localStorage.setItem('naMe', document.getElementById('naMe').value);
  localStorage.setItem('cityState', document.getElementById('cityState').value);
  localStorage.setItem('daTe', document.getElementById('daTe').value);
	localStorage.setItem('foOd', document.getElementById('foOd').value);
  localStorage.setItem('serVice', document.getElementById('serVice').value);
	localStorage.setItem('preSent', document.getElementById('preSent').value);
	localStorage.setItem('amBience', document.getElementById('amBience').value);
  setStyles();
}
} else {
	//  setStyles(); now print fields to screen
	function setStyles() {
  var naMe = localStorage.getItem('naMe');
  var cityState = localStorage.getItem('cityState');
  var daTe = localStorage.getItem('daTe');
	var foOd = localStorage.getItem('foOd');
  var serVice = localStorage.getItem('serVice');
  var preSent = localStorage.getItem('preSent');
	var amBience = localStorage.getItem('amBience');

  document.getElementById('naMe').value =  naMe;
  document.getElementById('font').value = cityState;
  document.getElementById('foOd').value = foOd;
	document.getElementById('serVice').value =  serVice
	document.getElementById('preSent').value = preSent;
	document.getElementById('amBience').value = amBience;


  console.log(getElementById('naMe'));

  //htmlElem.style.backgroundColor = '#' + currentColor;
  //pElem.style.fontFamily = currentFont;
  //imgElem.setAttribute('src', currentImage);
}

}
}
console.log()
