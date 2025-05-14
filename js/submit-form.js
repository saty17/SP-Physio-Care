$(function () {
    'use strict';

    // Ambil semua formulir yang ingin kita terapkan gaya validasi kustom Bootstrap
    const forms = $('.needs-validation');

    // Loop melalui formulir dan mencegah pengiriman
    forms.on('submit', function (event) {
        const form = $(this);
        const actionInput = form.find("input[name='action']");
        const actionValue = actionInput.val();

        if (!form[0].checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();

            // Handle Appointment Form with WhatsApp
            if (actionValue === 'appointment') {
                $('.submit_appointment').html('Sending...');

                // Collect form data
                const name = form.find("input[name='name']").val();
                const phone = form.find("input[name='phone']").val();
                const email = form.find("input[name='email']").val();
                const service = form.find("select[name='service']").val();
                const date = form.find("input[name='date']").val();
                const visitType = form.find("select[name='visit_type']").val();

                // Format the WhatsApp message
                const message = `New Appointment Request%0A%0A` +
                                `Name: ${encodeURIComponent(name)}%0A` +
                                `Phone: ${encodeURIComponent(phone)}%0A` +
                                `Email: ${encodeURIComponent(email)}%0A` +
                                `Service: ${encodeURIComponent(service)}%0A` +
                                `Date: ${encodeURIComponent(date)}%0A` +
                                `Visit Type: ${encodeURIComponent(visitType)}%0A%0A` +
                                `Please confirm the appointment at your earliest convenience.`;

                // WhatsApp number for SP Physio Care
                const whatsappNumber = '+919506666005';
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

                // Show toast notification
                const toast_appointment = new bootstrap.Toast($('.success_msg_appointment')[0]);
                toast_appointment.show();

                // Redirect to WhatsApp
                window.open(whatsappUrl, '_blank');

                // Reset form and button
                form[0].reset();
                $('.submit_appointment').html('MAKE APPOINTMENT');
            } else {
                // Handle Contact Form (and other forms) with WhatsApp
                $('.submit_form').html('Sending...');
                $('.submit_question').html('Sending...');

                // Collect form data
                const name = form.find("input[name='name']").val();
                const phone = form.find("input[name='phone']").val();
                const email = form.find("input[name='email']").val();
                const subject = form.find("input[name='subject']").val();
                const messageContent = form.find("textarea[name='message']").val();

                // Format the WhatsApp message
                const message = `New Contact Message%0A%0A` +
                                `Name: ${encodeURIComponent(name)}%0A` +
                                `Phone: ${encodeURIComponent(phone)}%0A` +
                                `Email: ${encodeURIComponent(email)}%0A` +
                                `Subject: ${encodeURIComponent(subject)}%0A` +
                                `Message: ${encodeURIComponent(messageContent)}%0A%0A` +
                                `Please respond at your earliest convenience.`;

                // WhatsApp number for SP Physio Care
                const whatsappNumber = '+919506666005';
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

                // Show success toast
                const toast = new bootstrap.Toast($('.success_msg')[0]);
                toast.show();

                // Redirect to WhatsApp
                window.open(whatsappUrl, '_blank');

                // Reset form and button
                form[0].reset();
                $('.submit_form').html('Send Message');
                $('.submit_question').html('SEND QUESTION');
            }
        }

        form.addClass('was-validated');

    });
});