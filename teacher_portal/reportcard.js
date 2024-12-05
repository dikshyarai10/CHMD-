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
//for select terminal
document.addEventListener("DOMContentLoaded", function () {
  const terminalButton = document.querySelector(".terminal");
  const dropdown = document.querySelector(".dropdown-content");
  const terminalOptions = document.querySelectorAll(".terminal-option");

  // Toggle dropdown menu visibility when the button is clicked
  terminalButton.addEventListener("click", function () {
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  });

  // When a terminal option is clicked, display it as the selected terminal
  terminalOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const selectedTerminal = this.dataset.terminal; // Get terminal name
      terminalButton.textContent = selectedTerminal; // Update button text
      dropdown.style.display = "none"; // Close the dropdown
    });
  });

  // Close the dropdown if clicked outside of it
  window.addEventListener("click", function (e) {
    if (!terminalButton.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
});
