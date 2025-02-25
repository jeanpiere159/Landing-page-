const scriptURL =
  "https://script.google.com/macros/s/AKfycbwGP9GEdnwbKX3XsZDSaTTKe3dimq1kHW7auS8f7Xc9bVmqEYo8ish8bak9p-Lv3584pA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Gracias por suscribirte";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 8000);
    })
    .catch((error) => console.error("Error!", error.message));
});
