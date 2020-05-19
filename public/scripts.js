const modalOverlay = document.querySelector('.modal-overlay');
const courses = document.querySelectorAll('.course');
const modal = document.querySelector('.modal');
const maximizeModal = document.querySelector('.maximize-modal');

for (let course of courses) {
  course.addEventListener("click", function () {
    const courseId = course.getAttribute("id");
    modalOverlay.classList.add('active');
    modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${courseId}`;
  })

}

document.querySelector(".close-modal").addEventListener("click", function () {
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector("iframe").src = ""
})

maximizeModal.addEventListener("click", function(){
  if (modal.classList.contains('maximize')) {
    modal.classList.remove('maximize');
  }else{
    modal.classList.add('maximize');
  }
})