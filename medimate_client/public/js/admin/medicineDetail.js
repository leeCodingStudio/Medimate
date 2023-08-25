const M_NUM = document.getElementById('modalMnum')
const M_NAME = document.getElementById('modalMname')
const M_CORP = document.getElementById('modalMcorp')
const M_SHAPE = document.getElementById('modalMshape')
const M_MARK_FRONT = document.getElementById('modalMmarkfront')
const M_MARK_BACK = document.getElementById('modalMmarkback')
const M_COLOR_FRONT = document.getElementById('modalMcolorfront')
const M_COLOR_BACK = document.getElementById('modalMcolorback')
const M_CHARACTER = document.getElementById('modalMcharacter')
const M_AXIS_LONG = document.getElementById('modalMaxislong')
const M_AXIS_SHORT = document.getElementById('modalMaxisshort')
const M_THICKNESS = document.getElementById('modalMthickness')
const M_IMAGE = document.getElementById('modalMimage')
const radio1 = document.getElementById('radio1')
const radio2 = document.getElementById('radio2')

function modal(data2) {
    const data = JSON.parse(data2);
    M_NUM.value = data.M_NUM;
    M_NAME.value = data.M_NAME;
    M_CORP.value = data.M_CORP;
    M_SHAPE.value = data.M_SHAPE;
    M_MARK_FRONT.value = data.M_MARK_FRONT;
    M_MARK_BACK.value = data.M_MARK_BACK;
    M_COLOR_FRONT.value = data.M_COLOR_FRONT;
    M_COLOR_BACK.value = data.M_COLOR_BACK;
    M_CHARACTER.value = data.M_CHARACTER;
    M_AXIS_LONG.value = data.M_AXIS_LONG;
    M_AXIS_SHORT.value = data.M_AXIS_SHORT;
    M_THICKNESS.value = data.M_THICKNESS;
    M_IMAGE.src = data.M_IMAGE;

    data.M_TYPE =='일반의약품' ? radio1.checked = true : radio2.checked = true;
}

function remove() {
    location.href= `/admin/medicine/remove/${M_NUM.value}`
}

// 페이지네이션 + 검색
const pageIpt = document.getElementById('page');
const search = document.getElementById('search');
function page(page){
    pageIpt.value = page;
    search.submit();
}
