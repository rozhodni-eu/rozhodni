const openModal = (modal) => {
  previousActiveElement = document.activeElement; // store the element used to open the modal for later.
  const focusableContent = modal.querySelectorAll(focusableElements);
  modal.classList.add("is-open");
  document.body.classList.add("modal-open"); // Add class to body to disable scrolling
  document.addEventListener("keydown", (e) => keyPressed(e, focusableContent, modal));
  closers.forEach((closer) => {
    closer.addEventListener("click", () => closeModal(modal));
  });
  focusableContent[0].focus();
};

const closeModal = (modal) => {
  modal.classList.remove("is-open");
  closers.forEach((closer) => {
    closer.removeEventListener("click", () => closeModal(modal));
  });
  document.body.classList.remove("modal-open"); // Remove class to enable scrolling
  document.removeEventListener("keydown", (e) => keyPressed(e, modal));
  previousActiveElement.focus(); // return user focus to element used to open the modal
};

const keyPressed = (event, focusableContent, modal) => {
  // Close modal on pressing escape
  if (event.keyCode === KEYCODES.ESC) {
    closeModal(modal);
  }

  if (event.keyCode !== KEYCODES.TAB) {
    return;
  }

  // We know user has pressed tab key as this point.
  if (event.shiftKey) {
    // Go to last focusable element if focused on the first one
    if (document.activeElement === focusableContent[0]) {
      focusableContent[focusableContent.length - 1].focus();
      event.preventDefault();
    }
  } else {
    // Go to first focusable element if focused on the last one
    if (
      document.activeElement === focusableContent[focusableContent.length - 1]
    ) {
      focusableContent[0].focus();
      event.preventDefault();
    }
  }
};