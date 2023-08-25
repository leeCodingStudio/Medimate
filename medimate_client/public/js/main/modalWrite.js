const writeBtn = document.querySelector('#write-btn');
const modalWrite = document.getElementById('modal-write');


writeBtn.addEventListener('click', () => {
    modalWrite.classList.add('active');
});