document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("survey-form");
    const popup = document.querySelector(".popup");
    const popupContent = document.querySelector(".popup-content");
    const closePopup = document.getElementById("close-popup");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const dateOfBirth = document.getElementById("date-of-birth").value;
        const country = document.getElementById("country").value;
        const gender = document.querySelectorAll('input[name="gender"]:checked');
        const profession = document.getElementById("profession").value;
        const email = document.getElementById("email").value;
        const mobileNumber = document.getElementById("mobile-number").value;

        const values = {
            "First Name": firstName,
            "Last Name": lastName,
            "Date of Birth": dateOfBirth,
            "Country": country,
            "Gender": [...gender].map(g => g.value).join(", "),
            "Profession": profession,
            "Email": email,
            "Mobile Number": mobileNumber
        };

        const html = Object.keys(values)
            .map(key => `<p><b>${key}:</b> ${values[key]}</p>`)
            .join("");

        popupContent.innerHTML = html;
        popup.style.display = "block";
    });

    form.addEventListener("reset", function () {
        popup.style.display = "none";
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
        form.reset();
    });
});
