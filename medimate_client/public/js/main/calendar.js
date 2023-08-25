const modal = document.querySelector('.modal')
        const close1 = document.querySelector('.modal_header')
        close1.addEventListener('click', () => {
            modal.style.display = 'none'
            modal.style.zIndex = '-1'
        })

        const addlist = document.querySelector('.addlist')
        const deletelist = document.querySelector('.deletelist')
        const adjustlist = document.querySelector('.adjustlist')

        addlist.addEventListener('click', () => {
            modal.style.display = 'block'
            modal.style.zIndex = '300'
            calendar.style.zIndex = '-1'
        });
        deletelist.addEventListener('click', () => {
            modal.style.display = 'block'
            modal.style.zIndex = '300'
            calendar.style.zIndex = '-1'
        });

        adjustlist.addEventListener('click', () => {
            modal.style.display = 'block'
            modal.style.zIndex = '300'
            calendar.style.zIndex = '-1'
        })

        //모달창 2번째(색상)
        const colorButton = document.querySelector('.color_button')
        const modal2 = document.querySelector('.modal2')
        colorButton.addEventListener('click',()=>{
            modal2.style.display='block'
        })

        const red = document.querySelector('.red')
        red.addEventListener('click',()=>{
            modal2.style.display = 'none'
            colorButton.style.backgroundColor='rgb(255,153,153)'
            colorButton.innerText = '빨강'
            
        })
        const yellow = document.querySelector('.yellow')
        yellow.addEventListener('click',()=>{
            modal2.style.display = 'none'
            colorButton.style.backgroundColor='rgb(255,255,0)'
            colorButton.style.color='rgb(0,0,0)'
            colorButton.innerText = '노랑'
            
        })
        const green = document.querySelector('.green')
        green.addEventListener('click',()=>{
            modal2.style.display = 'none'
            colorButton.style.backgroundColor='rgb(153,255,153)'
            colorButton.innerText = '초록'
            
        })
        const blue = document.querySelector('.blue')
        blue.addEventListener('click',()=>{
            modal2.style.display = 'none'
            colorButton.style.backgroundColor='rgb(153,204,255)'
            colorButton.innerText = '파랑'
            
        })