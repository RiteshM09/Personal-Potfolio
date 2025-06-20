
// nav bar scroll effect
const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 60) {
    navEl.classList.add('navbar-scrolled');
  }
  else if (window.scrollY < 60) {
    navEl.classList.remove('navbar-scrolled');
  }
});




// fixed back-to-top button 
 
document.addEventListener('scroll', () =>{
    const toTopButton = document.querySelector('.back-to-top');

    if(window.scrollY > 200)
    {
        toTopButton.classList.add('show');
    }
    else{
        toTopButton.classList.remove('show');
    }

});

document.querySelector('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// hides the navbar  when clicks .
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        // Only collapse if menu is open (visible on smaller screens)
        if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
          const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: true
          });
          bsCollapse.hide();
        }
      });
    });
  });



// function sendmail() {
//   let templateParams = {
//     name: document.getElementById("name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };

//   emailjs.send("service_y2f7y0q", "template_rpz390t", templateParams)
//     .then(() =>alert("✅ Email sent successfully!").catch(() => alert("Email not sent. Error: ")));
// }


// EMAIL js service
function sendmail() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");
  const submitBtn = document.getElementById("submit-btn");

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const message = messageField.value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill in all fields before submitting.");
    return;
  }

  // ⏳ Disable button and show loading
  submitBtn.disabled = true;
  submitBtn.innerText = "Sending...";

  const templateParams = { name, email, message };

  emailjs.send("service_y2f7y0q", "template_rpz390t", templateParams)
    .then(() => {
      alert("✅ Email sent successfully!");
      
      // 🧼 Clear form fields
      nameField.value = "";
      emailField.value = "";
      messageField.value = "";
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("Email not sent. Error: " + JSON.stringify(error));
    })
    .finally(() => {
      // ✅ Re-enable button and reset text
      submitBtn.disabled = false;
      submitBtn.innerText = "Submit Message";
    });
}
