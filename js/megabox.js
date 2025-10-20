        // 메뉴바 (마우스 오버 -> 보임, 아웃 -> 숨김)
        let menubar=document.querySelectorAll('.menubar'); // 배열
        let menu_dropbox=document.querySelectorAll('.menu_dropbox'); // 배열
        let menu_hidden=document.querySelectorAll('.menu_hidden');
        let header02_menu=document.querySelector('.header02_menu');
        let background_drop=document.querySelector('.background_drop');

        for(let i=0;i<menubar.length;i++){
            // 마우스오버
            menubar[i].addEventListener('mouseover',()=>{
                if(i === 4){
                    background_drop.style.display='none';
                }else{
                    menu_dropbox[i].style.display='block';
                    background_drop.style.display='block';
                }
                
            })
            // 마우스아웃
            menubar[i].addEventListener('mouseleave',()=>{
                menu_dropbox[i].style.display='none';
                background_drop.style.display='none';
            })
            
        }

        // 모달창
        const close_btn=document.querySelector('.close_btn');
        const overlay=document.querySelector('.overlay');
        const modal=document.querySelector('.modal');
        const modal_btn=document.querySelector('.modal_btn');
        // 좌석선택 오버레이
        const overlaySeat=document.querySelector('.overlay_seat');
        overlaySeat.addEventListener('click',()=>{
            overlaySeat.style.display='none';
        })
        // DOM접근할 때 부모를 타줘야 함!! 
        let content=document.querySelector('.modal .modal_content > .content');

        
        let modal_text=[
            "인원선택은 최대 8명까지 가능합니다.", // 0
            "인원선택은 1명부터 가능합니다.", // 1
            "좌석선택이 완료되었습니다.", // 2
            "관람하실 인원을 먼저 선택해주세요.", // 3
            "선택하신 좌석을 모두 취소하고 다시 선택하시겠습니까?", //4

            "◆ 경로 : 만 65세 이상(신분증)"+"</br>"+"</br>"+"경로요금은 만65세 이상 고객에게만 적용되며, 상영관 입장시 본인신분증을 제시해 주시기 바랍니다(*미지참시 입장 제한)"
            +"</br>"+"</br>"+"*경로선택 시 추가 할인이 제한될 수 있습니다", // 5

            "※만 65세이상 고객님께서는 [경로]발권 부탁드립니다(*지점별 상이)"+"</br>"+"</br>"+"◆ 우대요금은 장애인 고객에게 적용되며, 상영관 입장 시 본인확인 증빙서류를 제시해 주시기 바랍니다."
            +"</br>"+"(미지참 시 입장 제한)"+"</br>"+"</br>"+"- 장애인: 복지카드"+"</br>"+"- 국가유공자: 국가유공자증"+"</br>"+"</br>"
            +"위 항목 외 지점별 우대요금 추가적용 대상은 직원확인 후 발권이 가능합니다"+"</br>"+"*우대선택 시 추가 할인이 제한될 수 있습니다."+
            "*국가유공자증에 한하며, 국가유공자 유족증 등은 할인이 불가합니다.", // 6
        ]

        // X누르면 모달창 삭제
        close_btn.addEventListener('click',()=>{
            overlay.style.display='none';
            modal.style.display='none';
        })
        // 확인버튼 누르면 모달창 삭제
        modal_btn.addEventListener('click',()=>{
            overlay.style.display='none';
            modal.style.display='none';
        })


        // 리스트 클릭하면 카테고리 보이고 다시 숨기기 (toggle)
        const list_icon=document.getElementById('list_icon');
        const category=document.querySelector('.category');
        const icon_sitemap=document.querySelector('.icon_sitemap');
        const close_btn02=document.querySelector('.close_btn02');
        const searchContent=document.querySelector('.searchContent');
        const searchClick=document.querySelector('.header02_searchClick');
        // 카테고리 클릭 함수
        icon_sitemap.addEventListener('click',()=>{
            const isActive=category.classList.toggle('active');
            // category.classList.toggle('active');
            if(isActive){
                icon_sitemap.setAttribute("src","img/close_btn")
                // 돋보기 창이 열려있는상태에서 카테고리를 클릭하면 돋보기창 숨기기
                header02_searchClick.classList.remove('search_active');
                icon_search.setAttribute("src","img/megabox/icon-search.png");
            }else{
                icon_sitemap.setAttribute("src","img/megabox/icon-sitemap.png")
            }
        })
        
        // 예매율순 클릭화면
        const bookRank=document.querySelector('.bookRank');
        const viewRank=document.querySelector('.viewRank');
        const bookRankPart=document.querySelector('.bookRankPart01');
        const viewRankPart=document.querySelector('.viewRankPart01');
        const icon_search=document.querySelector('.icon-search');
        const header02_searchClick=document.querySelector('.header02_searchClick');

        bookRank.addEventListener('click',()=>{
            bookRankPart.style.display='block';
            viewRankPart.style.display='none';
        })
        viewRank.addEventListener('click',()=>{
            viewRankPart.style.display='block';
            bookRankPart.style.display='none';
        })

        // 돋보기 클릭하면 toggle로 화면 열고 숨기기
        icon_search.addEventListener('click',()=>{
            header02_searchClick.classList.toggle('search_active');
            // 카테고리가 열린 상태에서 돋보기를 클릭하면 카테고리는 없어짐
            category.classList.remove('active');
            icon_sitemap.setAttribute("src","img/megabox/icon-sitemap.png");

        })
        // 돋보기 클릭 함수
        icon_search.addEventListener('click',()=>{
            const isActive02=category.classList.toggle('search_active');
            if(isActive02){
                icon_search.setAttribute("src","img/megabox/close_btn")
                
            }else{
                icon_search.setAttribute("src","img/megabox/icon-search.png")
            }
        })
        // 영화제목에 마우스오버하면 해당 영화 포스터로 사진 바뀜
        const search_movieposter=document.getElementById('search_movieposter');
        const moviename=document.querySelectorAll('.moviename');
        // 예매율순
            moviename[1].addEventListener('mouseover',()=>{
            search_movieposter.setAttribute("src","img/megabox/movieposter04.jpg");
            })
            moviename[1].addEventListener('mouseout',()=>{
            search_movieposter.setAttribute("src","img/megabox/movieposter02.jpg");
            })
            moviename[2].addEventListener('mouseover',()=>{
            search_movieposter.setAttribute("src","img/megabox/movieposter05.jpg");
            })
            moviename[2].addEventListener('mouseout',()=>{
            search_movieposter.setAttribute("src","img/megabox/movieposter02.jpg");
            })
            moviename[3].addEventListener('mouseover',()=>{
            search_movieposter.setAttribute("src","img/megabox/movieposter06.jpg");
            })
            moviename[3].addEventListener('mouseout',()=>{
            search_movieposter.setAttribute("src","img/megabox/movieposter02.jpg");
            })
            moviename[4].addEventListener('mouseover',()=>{
            search_movieposter.setAttribute("src","img/megabox/movieposter07.jpg");
            })
            moviename[4].addEventListener('mouseout',()=>{
            search_movieposter.setAttribute("src","img/megabox/movieposter02.jpg");
            })
        // 관객순
            moviename[6].addEventListener('mouseover',()=>{
            search_movieposter01.setAttribute("src","img/megabox/movieposter08.jpg");
            })
            moviename[6].addEventListener('mouseout',()=>{
            search_movieposter01.setAttribute("src","img/megabox/movieposter03.jpg");
            })
            moviename[7].addEventListener('mouseover',()=>{
            search_movieposter01.setAttribute("src","img/megabox/movieposter09.jpg");
            })
            moviename[7].addEventListener('mouseout',()=>{
            search_movieposter01.setAttribute("src","img/megabox/movieposter03.jpg");
            })
            moviename[8].addEventListener('mouseover',()=>{
            search_movieposter01.setAttribute("src","img/megabox/movieposter10.jpg");
            })
            moviename[8].addEventListener('mouseout',()=>{
            search_movieposter01.setAttribute("src","img/megabox/movieposter03.jpg");
            })
            moviename[9].addEventListener('mouseover',()=>{
            search_movieposter01.setAttribute("src","img/megabox/movieposter11.jpg");
            })
            moviename[9].addEventListener('mouseout',()=>{
            search_movieposter01.setAttribute("src","img/megabox/movieposter03.jpg");
            })

        //
        // ---------------------- *** <left> 좌석 테이블 *** -----------------------------------------------------------
        //

        const tableLeft = document.querySelector('.seat_table');

        // 알파벳 배열 (10X1)
        let abcArray = ['A','B','C','D','E','F','G','H',"I",'J'];

        // 좌석 배열 (10X10)
        let seatArray = Array.from(Array(10), ()=> new Array(10).fill(0));
        for(let i=0; i<10; i++){
            for(let j=0; j<10; j++){
                seatArray[i][j] = j+1;
            }
        }
        // 좌석 테이블 생성
        let seatTable = "<table>";
        for(let i=0; i<10;i++){
            seatTable += "<tr>" + "<td class='abc_row'>" + abcArray[i] + "</td>";
            for(let j=0; j<10; j++){
                if(i === 0 && j%4 === 0){
                    seatTable += `<td class="needhelp" >${seatArray[i][j]}</td>`;
                } else if(i % 6 === (Math.floor(Math.random()*10)+1) || j % 4 === (Math.floor(Math.random()*10)+1)) {
                    seatTable += `<td class="alreadybooked" >${seatArray[i][j]}</td>`;
                } else {
                seatTable += `<td class="basic" >${seatArray[i][j]}</td>`;
                }
                
            }
            seatTable += "</tr>";
        }
        seatTable += "</table>";
        tableLeft.innerHTML = seatTable;

        //
        // ---------------------- *** <right> 선택좌석 테이블 *** -----------------------------------
        //

        const tableRight = document.querySelector('.seat_array');
        let selectArray = Array.from(Array(4), ()=> new Array(2).fill('-'));
        // 좌석 테이블에서 클린된 좌석을 업데이트 받기 위해 함수선언 한다
        // 테이블 내 -이 아닌 좌석번호가 전달되어있다면 selectedCSS를 적용
        function selectedTable(){
            let selectedTable = "<table>";
            for(let i=0; i<selectArray.length;i++){
                selectedTable += "<tr>";
                for(let j=0; j<selectArray[i].length; j++){
                    if (selectArray[i][j] !== '-') {
                        selectedTable += `<td class='selectedCSS'>${selectArray[i][j]}</td>`;
                    } else {
                        selectedTable += `<td class='basicCSS'>${selectArray[i][j]}</td>`;
                    }
                }
                selectedTable += "</tr>";
            }
            selectedTable += "</table>";
            tableRight.innerHTML = selectedTable;
        }
        selectedTable();

        //
        // ---------------------결제목록 데이터---------------------------------------------------
        //

        let priceInfo = [
            { id:0, type: '성인', price: 13000, quantity: 0},
            { id:1, type: '청소년', price: 10000, quantity: 0},
            { id:2, type: '경로', price: 7000, quantity: 0},
            { id:3, type: '우대', price: 5000, quantity: 0}
        ]

        //
        // --------------------*** 관람 인원 유형 목록  업데이트  ***------------------------
        //

        function selectedList(){
            let selectList = ' '; // 변수 선언 + 초기화
            for (let i = 0; i < priceInfo.length; i++) {
                let adultList = '';
                let teenList = '';
                let seniorList = '';
                let specialList = '';
                if (priceInfo[i].quantity > 0) {
                    if (i === 0) {
                        adultList = `${priceInfo[i].type} ${priceInfo[i].quantity}명 · `;
                        selectList += adultList;
                    } else if (i === 1) {
                        teenList = `${priceInfo[i].type} ${priceInfo[i].quantity}명 · `;
                        selectList += teenList;
                    } else if (i === 2) {
                        seniorList = `${priceInfo[i].type} ${priceInfo[i].quantity}명 · `;
                        selectList += seniorList;
                    } else if (i === 3) {
                        specialList = `${priceInfo[i].type} ${priceInfo[i].quantity}명 · `;
                        selectList += specialList;
                    }
                    
                }
            }
            select_list.innerHTML = selectList.slice(0, -2); // 마지막 출력된 '·' 제거
        }

        //
        // -------------------*** 초기화 버튼 ***-----------------------------------------
        //

        let select_list = document.querySelector('.select_list');
        let total_price = document.querySelector('.total_price');
        let totalPrice = 0;
        total_price.innerHTML = totalPrice.toLocaleString('ko-kr') + '원';

        let p_num= document.querySelectorAll('.p_num');
        let sumQuantity = 0;
        let selectedCount = 0;
        
        
        let reset_btn=document.querySelector('#reset_btn');
        reset_btn.addEventListener('click', ()=>{
            p_num.forEach((el,i)=> {el.textContent=0; priceInfo[i].quantity=0;});
            totalPrice=0; total_price.innerHTML=totalPrice.toLocaleString('ko-kr')+'원';
            select_list.innerHTML='';
            sumQuantity=0; selectedCount=0;
            selectArray = Array.from(Array(4), ()=> new Array(2).fill('-'));
            seatCells.forEach((cell,index)=>{
                let col = index%10;
                cell.classList.remove('cantselect','selected');
                cell.classList.add('basic');
                cell.textContent = col+1;
                if(cell.classList.contains('alreadybooked')) {
                        cell.textContent = 'X';
                    }
            });
            selectedTable();
            overlaySeat.style.display='none';
        });

        //
        // ---------------------- *** +,- 버튼 조작 *** -----------------------------------------------------------
        //

        // 버튼 요소 가져오기
        const minus = document.querySelectorAll('.minus');
        const plus = document.querySelectorAll('.plus');

        // + 버튼 기능
            // 경로, 우대 좌석 +버튼 클릭하면 모달창 
            // 8명 초과 좌석 선택 불가 모달창
            // 좌석 선택 후 +버튼 클릭 시 선택좌석 누적
            // 1인 관람시 짝수열 선택 불가 함수 적용
        
        // 경로, 우대 좌석 +버튼 클릭하면 모달창
        plus[2].addEventListener('click',()=>{
            let p_num= document.querySelectorAll('.p_num');
            if(p_num[2].textContent==='0'){
                content.innerHTML=modal_text[5]; // 경로 모달창  출력
                overlay.style.display='block';
                modal.style.display='block';
                return;
            }
        })
        plus[3].addEventListener('click',()=>{
            let p_num= document.querySelectorAll('.p_num');
            if(p_num[3].textContent==='0'){
                content.innerHTML=modal_text[6]; // 우대 모달창  출력
                overlay.style.display='block';
                modal.style.display='block';
                return;
            }
        })

        for(let i=0;i<plus.length;i++){
            plus[i].addEventListener('click', function(){
                overlaySeat.style.display='none';
                // 8명 이상 좌석 선택 불가 모달창
                // ("인원선택은 최대 8명까지 가능합니다.")
                if(Number(sumQuantity) >= 8){
                    content.textContent=modal_text[0];
                    overlay.style.display='block';
                    modal.style.display='block';
                    return;
                }else{
                    // 기타 인원수, 가격, 총합 증가 업데이트
                    p_num[i].textContent++;
                    // priceInfo[i].quantity++;
                    // totalPrice += priceInfo[i].price;
                    // total_price.innerHTML = totalPrice.toLocaleString('ko-kr') + '원';
                    sumQuantity ++;
                    // 좌석 선택 후 +버튼 클릭 시 선택좌석 누적
                    // 선택 좌석 리스트 업데이트 함수 호출
                    selectedList();
                    // 선택 좌석 테이블 업데이트 함수 호출
                    selectedTable();
                    // 1인 관람시 짝수열 선택 불가 함수 호출
                    blockSeats();
                    console.log(`선택인원 수: ${sumQuantity}`);
                }
            })
        }
        
        // - 버튼 기능
            // 1명 미만 좌석 선택 불가 모달창
            // 좌석 선택 후 -버튼 클릭 시 선택좌석 초기화
            // (좌석 선택 후 인원 수 줄이면 선택좌석이 인원 수보다 많아질 수 있기 때문)
            // -> 좌석 테이블 초기화 함수로 빼기
            // 1인 관람시 짝수열 선택 불가 함수 적용

        for(let i=0;i<minus.length;i++){
            minus[i].addEventListener('click',()=>{
                // 1명 미만 좌석 선택 불가 모달창
                // ("인원선택은 1명부터 가능합니다.")
                if(Number(p_num[i].textContent) < 1){
                    select_list.innerHTML = ' ';
                    content.textContent=modal_text[1];
                    overlay.style.display='block';
                    modal.style.display='block';
                    return;
                }else{
                    // - 버튼 클릭시
                    // 인원수, 가격, 총합 감소 업데이트
                    content.textContent=modal_text[4];
                    if(selectedCount > 0){
                        overlay.style.display='block';
                    modal.style.display='block';
                    }
                    p_num[i].textContent--;
                    priceInfo[i].quantity = 0;
                    sumQuantity --;
                    // 좌석 선택 후 -버튼 클릭 시 좌석 선택 관련 내용 초기화
                    selectedCount = 0;
                    // 선택 좌석 클래스 초기화
                    selectArray = Array.from(Array(4), ()=> new Array(2).fill('-'));
                    // 선택 좌석 테이블 초기화 함수 호출
                    selectedList();
                    // 좌석 테이블 클래스 초기화
                    for (let i = 0; i < 10; i++) {
                        for (let col = 0; col < 10; col++) {
                            let cell = seatCells[i * 10 + col];
                            cell.classList.remove('cantselect', 'selected');
                            cell.classList.add('basic');
                            cell.textContent = col + 1; // 좌석번호 복구
                        }
                    }
                    // 좌석 테이블 내용 초기화 함수 호출
                    selectedTable();
                    // 1인 관람시 짝수열 선택 불가 함수 호출
                    blockSeats();
                    console.log(`선택인원 수: ${sumQuantity}`);
                }
                
            })
        }
        
        //
        // -----------------------------*** 1인 좌석 선택 제어 ***-------------------------------------------
        //

        // 1인 관람 시 짝수열 선택 불가 함수
        // 2인 이상 관람 시 모든 좌석 선택 가능
        // 선택 인원수 바뀔때마다 조건에 맞게 좌석 선택 제어
        // 0명일때 는 모든 좌석 선택 가능
        function blockSeats() {
            let seatCells = document.querySelectorAll('.seat_table td:not(.abc_row)');


            if(sumQuantity === 1){ // 1명 관람 시 홀수열 선택 불가
                seatCells.forEach((cell, index) => {
                    let col = index % 10;
                    if (col % 2 === 1) { // 짝수열 (0부터 시작하므로 1,3,5,7,9가 짝수열)
                        cell.classList.remove('basic');
                        cell.classList.add('cantselect');
                        cell.textContent = 'X';
                    } else {
                        cell.classList.remove('cantselect');
                        cell.classList.add('basic');
                        cell.textContent = col + 1;
                    }
                    if(cell.classList.contains('alreadybooked')) {
                        cell.textContent = 'X';
                    }
                });
            } else { // 2명 이상 관람 시 모든 좌석 원상복구
                seatCells.forEach((cell, index) => {
                    let col = index % 10;
                    cell.classList.remove('cantselect');
                    cell.classList.add('basic');
                    cell.textContent = col + 1;
                    if(cell.classList.contains('alreadybooked')) {
                        cell.textContent = 'X';
                    }
                });
            }
            
            
        }
        blockSeats();
        
        //
        // ----------------------*** ★★좌석 클릭 시 선택 / 해제 기능★★ ***----------------------
        //

        let seatCells = document.querySelectorAll('.basic');
        // 좌석 클릭 조건별 출력하기
        // 1. 인원 선택 안 했을 때 -> "인원선택을 먼저 해주시기 바랍니다."
        // 2. 1인 선택시 짝수열 클릭 방지 (X로 바뀌는 좌석은 클릭 안됨)
        // 3. 좌석 선택 & 취소
            // 선택한 인원보다 많은 좌석 선택 불가 -> "선택한 인원보다 많은 좌석을 선택할 수 없습니다."
            // 선택 좌석 배열에 추가/제거 함수 (좌석클릭 함수의 단순화를 위해 밖으로 뺌)
        // 4. 선택 좌석 테이블 업데이트 위한 함수 호출
       


        for (let i = 0; i < seatCells.length; i++) {
            seatCells[i].addEventListener('click', ()=> {
                let row = Math.floor(i / 10);
                let col = i % 10;
                let seatName = abcArray[row] + (col + 1);

                // 1. 인원 선택 안 했을 때 
                // -> "인원선택을 먼저 해주시기 바랍니다."
                if(sumQuantity === 0){
                    content.textContent = modal_text[3];
                    overlay.style.display='block';
                    modal.style.display='block';
                    return;
                }

                // 2. 1인 선택시 짝수열 클릭 방지
                // (X로 바뀌는 좌석은 클릭 안됨)
                if (seatCells[i].classList.contains('cantselect')) return; 
                if (seatCells[i].classList.contains('alreadybooked')) return; 
                

                // 3. 좌석 선택 & 취소
                if (!seatCells[i].classList.contains('selected')) {
                    // 선택한 인원보다 많은 좌석 선택 불가 
                    // -> "선택한 인원보다 많은 좌석을 선택할 수 없습니다."
                    if(selectedCount >= sumQuantity){
                        content.textContent = modal_text[2];
                        overlay.style.display='block';
                        modal.style.display='block';
                        return;
                    }
                    selectedCount++;
                    seatCells[i].classList.add('selected');
                    addSeatArray(seatName);
                    let total = selectedCount;
                    for(let i=0;i<p_num.length;i++){
                        let target = Number(p_num[i].textContent);
                        if (priceInfo[i].quantity < target && total > 0) {
                            console.log(priceInfo[i]);
                            priceInfo[i].quantity++;
                            total--;
                            break;
                        }
                        console.log(priceInfo[i]);
                    }
                } else {
                    selectedCount--;
                    seatCells[i].classList.remove('selected');
                    removeSeatArray(seatName);
                    let total = selectedCount;
                    for(let j=priceInfo.length-1 ; j>=0 ; j--){
                        let target = Number(p_num[j].textContent);
                        if (priceInfo[j].quantity  > 0) {
                            console.log(priceInfo[i]);
                            priceInfo[j].quantity--;
                            total++;
                            break;
                        }
                        console.log(priceInfo[i]);
                    }
                }
                // 좌석 클릭 시 총액과 선택 목록 업데이트
                
                totalPrice = 0;
                priceInfo.forEach((p,i)=>{
                    if(p.quantity>0) totalPrice += p.price * p.quantity;
                });
                total_price.innerHTML = totalPrice.toLocaleString('ko-kr') + '원';
                selectedList();
                selectedTable();
                blockSeats();
                console.log(`선택인원 수: ${sumQuantity}, 선택좌석 수: ${selectedCount}`);
                console.log(selectArray);
                console.log(priceInfo);
            });
        }
    
    // 선택 좌석 배열에 추가/제거 함수 (좌석클릭 함수의 단순화를 위해 밖으로 뺌)
        // 추가 함수
        function addSeatArray(seatName) {
            for (let i=0; i<selectArray.length; i++) {
                for (let j=0; j<selectArray[i].length; j++) {
                    if (selectArray[i][j] === '-') {
                        selectArray[i][j] = seatName;
                        return;
                    }
                }
            }
        }
        // 제거 함수
        function removeSeatArray(seatName) {
            for (let i=0; i<selectArray.length; i++) {
                for (let j=0; j<selectArray[i].length; j++) {
                    if (selectArray[i][j] === seatName) {
                        selectArray[i][j] = '-';
                        return;
                    }
                }
            }
        }   
 