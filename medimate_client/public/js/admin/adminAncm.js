const ancmInfoBtn = document.querySelectorAll(".ancm-info-btn");


function func1(data){
    location.href=`/admin/announcement/${data}`
}

function remove(A_NUM) {
    location.href=`/admin/announcement/remove/${A_NUM}`
}

// 페이지네이션 + 검색
const pageIpt = document.getElementById('page');
const search = document.getElementById('search');
function page(page){
    pageIpt.value = page;
    search.submit();
}
