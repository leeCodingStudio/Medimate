const navLogo = document.querySelector(".header-logo");
const navDrug = document.querySelector(".header-drug");
const navMedicine = document.querySelector(".header-medicine");
const navCalendar = document.querySelector(".header-calendar");
const navAnnouncement = document.querySelector(".header-announcement");
const navLogin = document.querySelector(".header-login");
const navJoin = document.querySelector(".header-join");
const searchPill = document.querySelector(".btn_detail2");

navLogo.addEventListener('click',()=>{
    location.href='/';
})
navDrug.addEventListener('click', () => {
    location.href='/drug';
})
navMedicine.addEventListener('click', () => {
    location.href='/medicine';
})
navCalendar.addEventListener('click', () => {
    location.href='/calendar';
})
navAnnouncement.addEventListener('click', () => {
    location.href='/announcement';
})
navLogin.addEventListener('click', () => {
    location.href='/login';
})
navJoin.addEventListener('click', () => {
    location.href='/join';
})
searchPill.addEventListener('click', () => {
    location.href='/searchPill';
})

const modalClose = document.querySelectorAll(".xbtn");

modalClose.forEach((v) => {
    v.addEventListener('click', () => {
        modalInfo.classList.remove('active');
        modalWrite.classList.remove('active');
    });
});
