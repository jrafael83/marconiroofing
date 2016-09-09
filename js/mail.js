$(function() {

	// Get the form.
	var form = $('#ajax-contact');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		//var formData = $(form).serialize();
		var para="marconi.roofing@gmail.com";
		var de="admin@buildingpillars.onmicrosoft.com";
		var nombre=$("#name").val();
		var asunto="Contact from "+nombre;
		var cuerpo=$("#message").val()+"\n\n"+"Customer Info:\nName: "+nombre+"\nEmail: "+$("#email").val()+"\nPhone: "+$("#phone").val();
		
        jQuery.support.cors = true;
        $.ajax({
            url: 'http://teslamailsender.azurewebsites.net/SendMail',
            type: 'GET',
            dataType: 'json',
			data: {to: para, from: de, subject: asunto, body: cuerpo, name: "Website Administrator" }})
			.always          
            (function (data) {                
				$("#form-messages").val('Message sent!');
				// Clear the form.
				$('#name').val('');
				$('#email').val('');
				$('#message').val('');
				$('#phone').val('');
        });       

	});

});
