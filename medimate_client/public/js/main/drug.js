// function SEARCH() {
//     const x = document.getElementById('P_ADDRESS').value;

//     fetch(`http://localhost:8080/main/pham?P_ADDRESS=${encodeURIComponent(x)}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     }).then(response => {
//         if (response.ok) {
//             console.log('서버로 전송 성공');
//             return response.json();
//         } else {
//             alert('서버에 전송을 실패했습니다.');
//             throw new Error('서버 전송 실패');
//         }
//     }).then(data => {
//         console.log(data);
//         data.rows.forEach(member => {
//             const start = document.getElementById('search_data')
//             const div = document.createElement('div');
//             div.innerHTML = `
//                 <div class="data">
//                     <div class="column" >${member.P_ADDRESS.substr(6,3)}</div>
//                     <div class="column">${member.P_NAME}</div>
//                     <div class="column">${member.P_FRI_S} ~ ${member.P_FRI_C}</div>
//                 </div>
//             `;
//             document.body.appendChild(start);
//         }); 
//     }).catch(error => {
//         console.error(error);
//     });
// }


