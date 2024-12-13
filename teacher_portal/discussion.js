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
/*discussion*/
// Add a new post
function addPost() {
  const content = document.getElementById("mainPost").value;
  if (content.trim() === "") {
    alert("Cannot post an empty message!");
    return;
  }

  // Create and append the new post
  const postsContainer = document.getElementById("posts");
  const newPost = createPostElement(content);
  postsContainer.appendChild(newPost);

  // Clear the textarea
  document.getElementById("mainPost").value = "";
}

// Create a post element
function createPostElement(content) {
  const postDiv = document.createElement("div");
  postDiv.className = "post";

  const postContent = document.createElement("p");
  postContent.textContent = content;
  postDiv.appendChild(postContent);

  // Reply button
  const replyButton = document.createElement("button");
  replyButton.textContent = "Reply";
  replyButton.className = "reply-btn";
  replyButton.onclick = () => toggleReplyInput(postDiv);
  postDiv.appendChild(replyButton);

  // Reply input (hidden initially)
  const replyInput = createReplyInput();
  replyInput.style.display = "none";
  postDiv.appendChild(replyInput);

  return postDiv;
}

// Toggle the reply input visibility
function toggleReplyInput(postElement) {
  const replyInput = postElement.querySelector(".reply-input");
  if (!replyInput) {
    console.error("Reply input not found!");
    return;
  }

  // Toggle the display style
  replyInput.style.display =
    replyInput.style.display === "flex" ? "none" : "flex";
}

// Create a reply input
function createReplyInput() {
  const replyDiv = document.createElement("div");
  replyDiv.className = "reply-input";

  const replyTextarea = document.createElement("textarea");
  replyTextarea.placeholder = "Write a reply...";
  replyDiv.appendChild(replyTextarea);

  const replyButton = document.createElement("button");
  replyButton.textContent = "Submit Reply";
  replyButton.onclick = () => {
    const replyContent = replyTextarea.value.trim();
    if (replyContent === "") {
      alert("Cannot submit an empty reply!");
      return;
    }

    const replyText = document.createElement("p");
    replyText.textContent = replyContent;
    replyText.className = "reply";

    // Append the reply and clear the textarea
    replyDiv.parentElement.appendChild(replyText);
    replyTextarea.value = "";
  };

  replyDiv.appendChild(replyButton);
  return replyDiv;
}
