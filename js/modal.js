/*===== WORK MODAL ===============*/
const workModalBtns = document.querySelectorAll(".work__button");
const workModalCloses = document.querySelectorAll(".work__modal-close");

workModalBtns.forEach((modalBtn, index) => {
  modalBtn.addEventListener("click", () => {
    document
      .querySelectorAll(".work__modal")
      [index].classList.add("active-modal");
  });
});

workModalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    document
      .querySelector(".work__modal.active-modal")
      .classList.remove("active-modal");
  });
});
