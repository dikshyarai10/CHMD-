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

//arko arko
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(
    ".boxes1 .box1, .boxes1 .box2, .boxes1 .box3, .boxes1 .box4, .boxes2 .box5, .boxes2 .box6, .boxes2 .box7"
  );
  const contentBox = document.querySelector(".content-box");
  const routineText = document.getElementById("routine-text");
  const routineTextarea = document.getElementById("routine-textarea");
  const routineDateInput = document.getElementById("routine-date"); // Date input
  const editBtn = document.getElementById("edit-btn");
  const saveBtn = document.getElementById("save-btn");
  const cancelBtn = document.getElementById("cancel-btn");

  // Initialize diary details for each day
  const diaryDetails = {
    Sun: { text: "No details for Sunday yet.", date: "" },
    Mon: { text: "No details for Monday yet.", date: "" },
    Tue: { text: "No details for Tuesday yet.", date: "" },
    Wed: { text: "No details for Wednesday yet.", date: "" },
    Thu: { text: "No details for Thursday yet.", date: "" },
    Fri: { text: "No details for Friday yet.", date: "" },
    Sat: { text: "No details for Saturday yet.", date: "" },
  };

  let activeDay = "";

  // Initially hide content box
  contentBox.style.display = "none";

  // When a box is clicked
  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      activeDay = this.querySelector("h5").textContent;

      // Display text and date together in the view mode
      const { text, date } = diaryDetails[activeDay];
      routineText.innerHTML = text
        ? `<strong>Date:</strong> ${date || "Not set"} <br>Content: ${text} `
        : "No details yet.";

      contentBox.style.display = "block";
    });
  });

  // When Edit button is clicked
  editBtn.addEventListener("click", function () {
    const { text, date } = diaryDetails[activeDay];
    routineTextarea.value = text;
    routineDateInput.value = date || ""; // Load saved date (if any)
    contentBox.querySelector(".view-mode").style.display = "none";
    contentBox.querySelector(".edit-mode").style.display = "block";
  });

  // When Save button is clicked
  saveBtn.addEventListener("click", function () {
    diaryDetails[activeDay].text = routineTextarea.value;
    diaryDetails[activeDay].date = routineDateInput.value; // Save the date

    // Update the view mode with text and date
    const { text, date } = diaryDetails[activeDay];
    routineText.innerHTML = `<strong>Date:</strong> ${
      date || "Not set"
    } <br> Content: ${text} `;

    contentBox.querySelector(".view-mode").style.display = "block";
    contentBox.querySelector(".edit-mode").style.display = "none";
  });

  // When Cancel button is clicked
  cancelBtn.addEventListener("click", function () {
    contentBox.querySelector(".view-mode").style.display = "block";
    contentBox.querySelector(".edit-mode").style.display = "none";
  });
});
