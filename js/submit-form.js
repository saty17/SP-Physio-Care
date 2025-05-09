$(function () {
    'use strict';

    // Ambil semua formulir yang ingin kita terapkan gaya validasi kustom Bootstrap
    const forms = $('.needs-validation');

    // Loop melalui formulir dan mencegah pengiriman
    forms.on('submit', function (event) {
        const form = $(this);

        var actionInput = $(this).find("input[name='action']");

        if (!form[0].checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            $('.submit_form').html('Sending...');
            $('.submit_question').html('Sending...');
            $('.submit_appointment').html('Sending...');
            const toast = new bootstrap.Toast($('.success_msg')[0]);
            const errtoast = new bootstrap.Toast($('.error_msg')[0]);
            var formData = forms.serialize();
            $.ajax({
                type: "POST",
                url: "php/form_process.php",
                data: formData,
                success: function (response) {
                    if (response == 'success') {
                        if (actionInput.length > 0) {
                            $('.submit_appointment').html('MAKE APPOINTMENT');
                            $('.submit_question').html('SEND QUESTION');
                            const toast_appointment = new bootstrap.Toast($('.success_msg_appointment')[0]);
                            toast_appointment.show();
                        } else {
                            toast.show()
                            $('.submit_form').html('Send Message');
                        }

                    } else {
                        errtoast.show()
                        $('.submit_form').html('Send Message');
                        $('.submit_question').html('SEND QUESTION');
                        $('.submit_appointment').html('MAKE APPOINTMENT');
                    }
                }
            });
        }

        form.addClass('was-validated');
    });
});