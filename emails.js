<script>
document.addEventListener('DOMContentLoaded', function () {
  emailjs.init('Cg82c8zdEbc64u2BJ');
  document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default HTML form submission

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function() {
        alert('Message sent successfully!');
      }, function(error) {
        alert('Failed to send message: ' + error.text);
      });
  });
});
</script>
