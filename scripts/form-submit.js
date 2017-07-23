$(function() {

	var form = $('#ajax-contact');
	var formMessages = $('#form-messages');

	$(form).submit(function(e) {
		e.preventDefault();

		var formData = $(form).serialize();

		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			$(formMessages).removeClass('form__messages--error');
			$(formMessages).addClass('form__messages--success');

			$(formMessages).text(response);

			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			$(formMessages).removeClass('form__messages--success');
			$(formMessages).addClass('form__messages--error');

			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});