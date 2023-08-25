const infoBtn = document.querySelectorAll(".info-btn");
const modalInfo = document.getElementById('modal-info');

infoBtn.forEach((v) => {
    v.addEventListener('click',() => {
        modalInfo.classList.add('active');
    });
});