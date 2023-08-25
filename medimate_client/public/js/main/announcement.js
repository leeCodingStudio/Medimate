function noticeD(A_NUM) { 
    location.href = `/main/announcement/${A_NUM}`
}

// 페이지네이션 + 검색
const pageIpt = document.getElementById('page');
const search = document.getElementById('search');
function page(page){
    pageIpt.value = page;
    search.submit();
}
