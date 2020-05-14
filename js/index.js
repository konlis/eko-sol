window.onload = function () {
  function toggleModal() {
    const modal = document.querySelector(".dynamicForm");

    modal.classList.toggle("modal-hidden");
  }

  const closeForm = document.querySelector(".fa-times");
  const btn = document.querySelector(".actionbtn");

  btn.addEventListener("click", toggleModal);
  closeForm.addEventListener("click", toggleModal);
};
