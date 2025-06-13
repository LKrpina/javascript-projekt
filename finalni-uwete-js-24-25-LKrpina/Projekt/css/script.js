document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("userForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = {
            ime: form.ime.value,
            email: form.email.value,
            grad: form.grad.value,
            spol: form.spol.value,
            interesi: []
        };

        form.querySelectorAll('input[name="interesi"]:checked').forEach(el => {
            formData.interesi.push(el.value);
        });

        sessionStorage.setItem("userInfo", JSON.stringify(formData));

        window.location.href = "your-information.html";
    });
});
