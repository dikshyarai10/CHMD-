document.addEventListener("DOMContentLoaded", function () {
  const menudataIcon = document.querySelector(".menudata_icon");
  const dash1 = document.querySelector(".dash1");
  const dash2 = document.querySelector(".dash2");

  // Initially hide the dash1 and dash2 divs
  dash1.style.display = "none";
  dash2.style.display = "none";

  // Hover effect for menudata_icon: Change appearance when hovered
  menudataIcon.addEventListener("mouseenter", function () {
    menudataIcon.style.transform = "scale(1.2)"; // Slightly enlarge the icon on hover
    menudataIcon.style.cursor = "pointer"; // Show pointer cursor
  });

  menudataIcon.addEventListener("mouseleave", function () {
    menudataIcon.style.transform = "scale(1)"; // Reset the scale when hover ends
  });

  // Add click event listener to menudata_icon to toggle dash1 and dash2 visibility
  menudataIcon.addEventListener("click", function () {
    if (dash1.style.display === "none") {
      dash1.style.display = "block";
      dash2.style.display = "block";
    } else {
      dash1.style.display = "none";
      dash2.style.display = "none";
    }
  });
});
//button to upload/edit
let uploadedImages = {};

// Function to handle the image upload
function previewImage(inputId, previewId) {
  const fileInput = document.getElementById(inputId);
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      uploadedImages[previewId] = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

// Function to view the uploaded image in a larger view
function viewImage(previewId) {
  const imagePreview = document.getElementById(previewId);

  if (uploadedImages[previewId]) {
    imagePreview.innerHTML = `<img src="${uploadedImages[previewId]}" alt="Uploaded Photo" style="max-width: 100%; max-height: 500px; border: 1px solid #ccc; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">`;
  } else {
    alert("No image uploaded yet.");
  }
}
