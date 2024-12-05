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
//pop
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
document.addEventListener("DOMContentLoaded", () => {
  // Select all day boxes
  const dayBoxes = document.querySelectorAll(".boxes1 div, .boxes2 div");

  // Create a popup box for writing posts
  const popupBox = document.createElement("div");
  popupBox.classList.add("popup-box");
  popupBox.innerHTML = `
    <h3 id="popup-day">Day</h3>
    <label for="popup-date">Date:</label>
    <input type="date" id="popup-date" required style="margin-bottom: 10px; display: block;">

    <div style="display: flex; gap: 10px;">
      <textarea id="subjects" placeholder="Subjects" style="width: 48%; height: 100px; resize: none;"></textarea>
      <textarea id="homework" placeholder="Homework/Content" style="width: 48%; height: 100px; resize: none;"></textarea>
    </div>

    <div class="popup-buttons">
      <button id="submit-btn">Submit</button>
      <button id="cancel-btn">Cancel</button>
    </div>
  `;
  document.body.appendChild(popupBox);

  let currentDay = ""; // Track which day's box is open

  // Open popup on box click
  dayBoxes.forEach((box) => {
    box.addEventListener("click", () => {
      currentDay = box.querySelector("h5").innerText; // Get the day
      document.getElementById("popup-day").innerText = `Post for ${currentDay}`;
      document.getElementById("popup-date").value = ""; // Reset date input
      document.getElementById("subjects").value = ""; // Reset subjects textarea
      document.getElementById("homework").value = ""; // Reset homework textarea
      popupBox.style.display = "block";
    });
  });

  // Submit button functionality
  document.getElementById("submit-btn").addEventListener("click", () => {
    const date = document.getElementById("popup-date").value;
    const subjects = document.getElementById("subjects").value.trim();
    const homework = document.getElementById("homework").value.trim();

    if (!date || !subjects || !homework) {
      alert("Please fill in all fields before submitting!");
      return;
    }

    alert(
      `Post saved for ${currentDay} on ${date}:\nSubjects: ${subjects}\nHomework: ${homework}`
    );
    popupBox.style.display = "none";
  });

  // Cancel button functionality
  document.getElementById("cancel-btn").addEventListener("click", () => {
    popupBox.style.display = "none";
  });
});
