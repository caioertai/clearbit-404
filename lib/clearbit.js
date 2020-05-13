// ==================================================
//     Variables / parameters
// ==================================================
// Config variables from the application.
const authorization = "Bearer sk_33883e2b8b3066b2216f3dd4aa063ee0";
const baseURL = "https://person.clearbit.com/v1";
const params = {
  headers: {
    Authorization: authorization
  }
};

// ==================================================
//     Selecting elements (querySelectors)
// ==================================================
// All of those we needed in a function or another.
const clearbitForm = document.querySelector("#clearbitForm");
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userBio = document.querySelector("#userBio");
const userLocation = document.querySelector("#userLocation");

// ==================================================
//     Functions
// ==================================================
// Display info from the clearbit API data into the HTML
const displayInfo = (data) => {
  // Use the next line and check your console if you're confused about what we did here:
  // console.log(data);
  // Get info from the data object.
  const name = data.name.fullName;
  const email = data.email;
  const bio = data.bio;
  const location = data.location;

  // Use the varibles above in the HTML
  userName.innerText = name;
  userEmail.innerText = email;
  userBio.innerText = bio;
  userLocation.innerText = location;
};

// Fetch info from a given email from the API and then displays it
const fetchAndDisplayInfoFor = (email) => {
  fetch(`${baseURL}/people/email/${email}`, params)
    .then((response) => response.json())
    .then(displayInfo);
};

// Define the behavior for our clearbit form
const handleClearbitForm = (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const emailInput = form.querySelector("#clearbitEmail");

  fetchAndDisplayInfoFor(emailInput.value);
};

// ==================================================
//     Calling / Assigning behaviors
// ==================================================
// This is actually the ONLY method call in this entire sheet.
// Everything starts from this.
clearbitForm.addEventListener("submit", handleClearbitForm);
