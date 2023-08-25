const infoBtn = document.querySelectorAll(".drug-info");
const modalInfo = document.getElementById('modal-info');
infoBtn.forEach((v) => {
    v.addEventListener('click',() => {
        modalInfo.classList.add('active');
    });
});

// const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close_button");
const modalClose = document.querySelectorAll(".close_button");
modalClose.forEach((v) => {
    v.addEventListener('click', () => {
        modalInfo.classList.remove('active');
        modalWrite.classList.remove('active');
    });
}); 