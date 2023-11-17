(() => {
  //subscribe button
  //button will validate email after it is validated it will replace form in on screen with thank you for subscribing with your email
  const subButton = document.querySelector('.email-submit-btn');
  subButton.addEventListener('click', (event) => {
    // Prevent default form submission
    event.preventDefault();

    //caputure form elements
    const emailInput = document.querySelector('.email-input');
    const formContainer = document.querySelector('.email-form-container');
    const form = document.querySelector(".email-form");
    const h2 = document.querySelector("h2");
    const p = document.querySelector("p");

    const email = emailInput.value;
    // Validate email format
    const validEmailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!validEmailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Email is valid, proceed with subscription process

    // Simulate sending email subscription data to a server
    console.log('Sending email subscription data:', email);
    formContainer.removeChild(form);
    h2.innerText ="Thank you for Subscribing";
    p.innerText =`make sure to check ${email} for updates`;
  });
})();
