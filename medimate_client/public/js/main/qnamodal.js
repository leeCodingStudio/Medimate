const Q_TITLE = document.getElementById('modalQtitle');
const Q_CONTENT = document.getElementById('modalQcontent');
// const U_NAME = document.getElementById('modalUName');


function modal3(data) {
    const qna = JSON.parse(data);
    Q_TITLE.value = qna.Q_TITLE;
    Q_CONTENT.value = qna.Q_CONTENT;
    console.log(qna);
    console.log(Q_TITLE.value);
}

//왼쪽은 ejs 파일에 id값  | 오른쪽은 qna데이터에 Q_TITLE



// 페이지네이션 + 검색
const pageIpt = document.getElementById('page');
function page(page){
    location.href=`/main/mypage/qna?page=${page}`
}
