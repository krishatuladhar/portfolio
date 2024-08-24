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

/*===== SERVICES MODAL ===============*/
const serviceModalBtns = document.querySelectorAll('.services__button');
const serviceModalCloses = document.querySelectorAll('.services__modal-close');

serviceModalBtns.forEach((modalBtn, index) => {
    modalBtn.addEventListener('click', () => {
        document.querySelectorAll('.services__modal')[index].classList.add('active-modal');
    });
});

serviceModalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        document.querySelector('.services__modal.active-modal').classList.remove('active-modal');
    });
});
