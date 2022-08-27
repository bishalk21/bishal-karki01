import React from "react";

export const FeedbackMe = () => {
  // Get elements
  const buttons = document.querySelectorAll(".button");
  const title = document.querySelector(".title");
  const feedback = document.querySelector(".feedback");
  const content = feedback.querySelector(".content");

  const giveRating = (event) => {
    // Button that was clicked
    const element = event.currentTarget;
    // Current value (negative or positive)
    const value = element.value;
    // Emoji of the button that was clicked
    const emoji = element.querySelector(".emoji");
    // If the current button is already pressed, return early
    if (element.classList.contains("selected")) {
      return;
    }
    // Remove selected statuses (class ".selected")
    buttons.forEach((button) => button.classList.remove("selected"));
    // Add selected class to the button that was clicked
    element.classList.add("selected");
    // Animate emoji within the button
    emoji.classList.add("emphasize");
    // Show proper feedback based on button value
    showFeedback(value);
    emoji.addEventListener("transitionend", () => {
      // Remove emphasis animation
      emoji.classList.remove("emphasize");
      // Defocus button
      element.blur();
    });
  };

  const createContent = (value) => {
    if (value === "positive") {
      content.innerHTML = `
          <p>That's great to hear, keep on rocking! 🙏🏻</p>
          `;
    } else {
      content.innerHTML = `
          <p>Oh no! We probably could've done something better. Could you shortly tell us what went wrong and we'll try to make it up for you?</p>
          <textarea rows="4" class="field" placeholder="What happened?"></textarea>
          <button class="submit">Submit</button>
          `;
    }
  };

  const showFeedback = (value) => {
    createContent(value);
    if (content.dataset.value === value) {
      return;
    } else {
      content.dataset.value = value;
    }
    // Hide content while transitioning
    content.classList.remove("visible");
    // Set feedback container height to be the same as the height of the current content
    feedback.style.height = `${content.scrollHeight}px`;
    // Grab top margin from title and add it to feedback container
    feedback.style.marginTop = getComputedStyle(title).marginBottom;
    feedback.addEventListener("transitionend", () => {
      // Show content after transition has ended
      content.classList.add("visible");
    });
  };

  // Listen for buttons
  buttons.forEach((button) => {
    button.addEventListener("click", giveRating);
  });

  return (
    <div>
      <div class="container">
        <h2 class="title">How was your day?</h2>
        <div class="buttons">
          <button class="button" value="negative">
            <span class="emoji">😩</span>
          </button>
          <button class="button" value="negative">
            <span class="emoji">😕</span>
          </button>
          <button class="button" value="positive">
            <span class="emoji">🙂</span>
          </button>
          <button class="button" value="positive">
            <span class="emoji">😍</span>
          </button>
        </div>
        <div class="feedback">
          <div class="content"></div>
        </div>
      </div>
    </div>
  );
};
