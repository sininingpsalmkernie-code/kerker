function requestQuote() {
    alert("Redirecting to Quote Request Form...");
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Message sent! PsalmTech will contact you soon.");
    this.reset();
});