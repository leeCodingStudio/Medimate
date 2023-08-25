const U_NUM = document.getElementById('modalUNum');
const U_ID = document.getElementById('modalUId');
const U_NAME = document.getElementById('modalUName');
const U_EMAIL = document.getElementById('modalUEmail');
const U_HP = document.getElementById('modalUHp');

function modal(data) {
    const user = JSON.parse(data);
    U_NUM.value = user.U_NUM;
    U_ID.value = user.U_ID;
    U_NAME.value = user.U_NAME;
    U_EMAIL.value = user.U_EMAIL;
    U_HP.value = user.U_HP;
}

function remove() {
    location.href=`/admin/user/remove/${U_NUM.value}`; 
}

// 페이지네이션 + 검색
const pageIpt = document.getElementById('page');
const search = document.getElementById('search');
function page(page){
    pageIpt.value = page;
    search.submit();
}