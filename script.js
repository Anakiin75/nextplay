document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche le rechargement de la page

        const formData = {
            name: document.querySelector('input[name="name"]').value,
            email: document.querySelector('input[name="email"]').value,
            subject: document.querySelector('input[name="subject"]').value,
            message: document.querySelector('textarea[name="message"]').value
        };

        fetch("https://formspree.io/f/xzzepkje", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                alert("Message envoyé avec succès !");
                document.getElementById("contact-form").reset();
            })
            .catch(error => {
                alert("Erreur lors de l'envoi du message.");
                console.error("Erreur :", error);
            });
    });
});


