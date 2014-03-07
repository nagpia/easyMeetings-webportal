window.alert = function() {
};
$(document).ready(function() {
	var iframe_height = parseInt($('html').height());
	window.parent.postMessage(iframe_height, 'http://bootsnipp.com');
}); 