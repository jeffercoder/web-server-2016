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
// test 04232016 next line - submit
submit = function() {
if(!localStorage.getItem('name')) {
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
  var currentnaMe = localStorage.getItem('naMe');
  var currentFont = localStorage.getItem('cityState');
  var currentImage = localStorage.getItem('daTe');
	var currentImage = localStorage.getItem('foOd');
  var currentImage = localStorage.getItem('serVice');
  var currentImage = localStorage.getItem('preSent');
	var currentImage = localStorage.getItem('amBience');

  document.getElementById('naMe').value = currentnaMe;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;
  console.log(getElementById('naMe'));

  //htmlElem.style.backgroundColor = '#' + currentColor;
  //pElem.style.fontFamily = currentFont;
  //imgElem.setAttribute('src', currentImage);
}

}
}
console.log()
