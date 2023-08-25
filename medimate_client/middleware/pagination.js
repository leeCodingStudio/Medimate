export default function pagination(page, count, limit){
    const currentPage = parseInt(page);
  
    // 페이지네이션을 위한 계산
    const totalPages = Math.ceil(count / limit);
    const buttonsToShow = 5; // 표시할 페이징 버튼 수
    let startPage, endPage;
  
    if (totalPages <= buttonsToShow) {
      // 전체 페이지 수가 표시할 버튼 수보다 작은 경우
      startPage = 1;
      endPage = totalPages;
    } else {
    // 현재 페이지 기준으로 표시할 버튼의 범위 계산
      const halfWay = Math.ceil(buttonsToShow / 2);
      if (currentPage <= halfWay) {
        startPage = 1;
        endPage = buttonsToShow;
      } else if (currentPage + halfWay - 1 >= totalPages) {
        startPage = totalPages - buttonsToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - halfWay + 1;
        endPage = currentPage + halfWay - 1;
      }
    }

    return { page:currentPage, totalPages, startPage, endPage }
}