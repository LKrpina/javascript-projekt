document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent actual submission

        // Gather form data
        const formData = {
            ime: form.ime.value,
            email: form.email.value,
            grad: form.grad.value,
            spol: form.spol.value,
            interesi: []
        };

        // Get all checked checkboxes
        form.querySelectorAll('input[name="interesi"]:checked').forEach(el => {
            formData.interesi.push(el.value);
        });

        // Save to sessionStorage
        sessionStorage.setItem("userInfo", JSON.stringify(formData));

        // Redirect to display page
        window.location.href = "your-information.html";
    });
});