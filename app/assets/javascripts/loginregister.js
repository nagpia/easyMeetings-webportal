$(document).bind('page:change', function() {
	var signInButton=$("#signinButton");
	var signUpButton=$("#signupButton");
	
	if (signInButton.length == 0) {
		return;
	}
	
	
	
	signInButton.click(function() {
		$('.bs-modal-sm').modal('show');
		$('#myTab li:eq(0) a').tab('show');
	});
	
	signUpButton.click(function() {
		$('.bs-modal-sm').modal('show');
		$('#myTab li:eq(1) a').tab('show');
	});
});