// I know the DOMContentLoaded only needs to be added once, but doing it multiple times helps
// with pracrtice coding long hand/ understanding

// Deliverable 1

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the profile form element
 let  profileForm = document.getElementById("profile-form");

  // Add a submit event listener to the profile form
  profileForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the values entered by the user
    let profileNameInput = document.getElementById("profile-name-input");
    let profileDescriptionInput = document.getElementById("profile-description-input");
    let profileName = profileNameInput.value;
    let profileDescription = profileDescriptionInput.value;

    // Update the profile name and description elements with the entered values
    let profileNameElement = document.getElementById("profile-name");
    let profileDescriptionElement = document.getElementById("profile-description");
    profileNameElement.textContent = profileName;
    profileDescriptionElement.textContent = profileDescription;

    // Reset the input fields
    profileNameInput.value = "";
    profileDescriptionInput.value = "";
  });
});

// Delv 2 

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the activity form element
  let activityForm = document.getElementById("activity-form");

  // Add a submit event listener to the activity form
  activityForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the value entered by the user
    let activityInput = document.getElementById("activity-input");
    let activity = activityInput.value;

    // Create a new <p> element
    let newActivity = document.createElement("p");
    newActivity.textContent = activity;

    // Get the activities container and append the new activity
    let activitiesContainer = document.getElementById("activities-container");
    activitiesContainer.appendChild(newActivity);

    // Reset the input field
    activityInput.value = "";
  });
});

// Delv 3

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the cool points form element
  let coolPointsForm = document.getElementById("cool-points-form");

  // Add a submit event listener to the cool points form
  coolPointsForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the value entered by the user
    let coolPointsInput = document.querySelector("#cool-points-form input[name='cool-points-add']");
    let coolPointsSpan = document.getElementById("cool-points");
    let coolPoints = parseInt(coolPointsSpan.textContent);
    let pointsToAdd = parseInt(coolPointsInput.value);

    // Add the points to the cool points span
    coolPoints += pointsToAdd;
    coolPointsSpan.textContent = coolPoints;

    // Reset the input field
    coolPointsInput.value = "1";
  });
});

// Delv 4 

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the cool multiplier form element
  let coolMultiplierForm = document.getElementById("cool-multiplier-form");

  // Add a submit event listener to the cool multiplier form
  coolMultiplierForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the value entered by the user
    let coolMultiplierInput = document.querySelector("#cool-multiplier-form input[name='cool-points-multiplier']");
    let coolPointsSpan = document.getElementById("cool-points");
    let coolPoints = parseInt(coolPointsSpan.textContent);
    let multiplier = parseInt(coolMultiplierInput.value);

    // Multiply the cool points by the multiplier
    coolPoints *= multiplier;
    coolPointsSpan.textContent = coolPoints;

    // Reset the input field
    coolMultiplierInput.value = "2";
  });
});

// Delv 5

// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Get the picture form element
  let pictureForm = document.getElementById("picture-form");

  // Add a submit event listener to the picture form
  pictureForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the value entered by the user
    let pictureUrlInput = document.querySelector("#picture-form input[name='url']");
    let pictureUrl = pictureUrlInput.value;

    // Create a new <img> element
    let newImage = document.createElement("img");
    newImage.src = pictureUrl;

    // Get the pictures container and append the new image
    let picturesContainer = document.getElementById("pictures-container");
    picturesContainer.appendChild(newImage);

    // Reset the input field
    pictureUrlInput.value = "";
  });
});
