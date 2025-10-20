// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
    // 헤더 SCRIPT
    // -----------
        // 메뉴바 (마우스 오버 -> 보임, 아웃 -> 숨김)
        function headActive() {
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
                    icon_sitemap.setAttribute("src","img/megabox/close_btn")
                    // 돋보기 창이 열려있는상태에서 카테고리를 클릭하면 돋보기창 숨기기
                    header02_searchClick.classList.remove('search_active');
                    icon_search.setAttribute("src","img/megabox/icon-search-white.png");
                }else{
                    icon_sitemap.setAttribute("src","img/megabox/icon-sitemap-white.png")
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
                icon_sitemap.setAttribute("src","img/megabox/icon-sitemap-white.png");

            })
            // 돋보기 클릭 함수
            icon_search.addEventListener('click',()=>{
                const isActive02=category.classList.toggle('search_active');
                if(isActive02){
                    icon_search.setAttribute("src","img/megabox/close_btn")
                    
                }else{
                    icon_search.setAttribute("src","img/megabox/icon-search-white.png")
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
        }
        headActive();
        
// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
    // 모달창 SCRIPT
    // -----------
        // 함수 총 6개
        // 전역번수
        function modal(){
            let modal = document.querySelector('.modal'); // 모달 창 접근
            let modalFloater = document.querySelector('.modalFloater'); // 모달 창 접근
            let xBtn = document.querySelector('.xBtn'); // 닫기 버튼 접근
            let slide = document.getElementById('slide'); // 이미지 접근
            let slideCheck = document.querySelectorAll('.slideCheck span'); // 하단부 재생 위치 접근
            let toggleBtn = document.getElementById('toggleBtn'); // 재생, 정지 버튼 접근
            let current = 0;
            let scLength = 5;
            let playstop = true;
            let timer ;
            // -----------
            // 1
            // 모달창 닫기 
            xBtn.addEventListener('click',()=>{
                modal.classList.add('invisible');
                modalFloater.classList.add('invisible');
                    
            });
            // -----------
            // 2
            // 자동으로 이미지 변경하는 함수
            // setInterval() 함수를 이용하여 반복적으로 이미지가 변경
            function slideShow(index){
                slide.src = `img/modal/popupslide${index+1}.jpg`;
                for(let i=0 ; i<scLength; i++){
                    // i번째 버튼의 active class 삭제
                    slideCheck[i].classList.remove('active');
                }
                slideCheck[index].classList.add('active');
            }
            // -----------
            // 3
            // 3초마다 이미지가 자동 변경되는 슬라이드 시작함수
            function startSlide() {
                timer = setInterval(() => {
                    current = (current + 1) % scLength;
                    
                    // 바뀐 인덱스에 대항하는 슬라이드 보여주기
                    slideShow(current);
                }, 3000)
            }
            // -----------
            // 4
            // stop 슬라이드 함수
            function stopSlide() {
                // setInterval() 멈추기
                clearInterval(timer);
            }
            slideShow(current);
            startSlide();
            // -----------
            // 5
            // 재생 정지 버튼 함수
            function playstopFC() {
                toggleBtn.addEventListener('click', () => {
                    // 현재 상태가 재생중이면 클릭 시 정지
                    if(playstop) {
                        stopSlide();
                        toggleBtn.src = `img/modal/play-button-arrowhead_27223.png`;
                    } else {
                        // 현재 상테가 정지중이면 클릭 시 재생
                        startSlide();
                        toggleBtn.src = `img/modal/pause_9055244.png`;
                    }
                    playstop = !playstop;
                })
            }
            playstopFC();
            // -----------
            // 6
            // 하단 동그라미 클릭 시 해당 슬라이드로 이동
            slideCheck.forEach((dot, index) => {
                            dot.addEventListener('click', () => {
                if (current === index) return; // 슬라이드 해당 동그라미 라면 무시하고 반납
                        current = index;
                        slideShow(current);
                    });
                });
                
        }
        modal();
        
        

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
    // 본문 - 섹션1 SCRIPT
        function section1() {
                    // -----------
        // DOM
        // 변수 선언
        const posterWarp = document.getElementById('posterWarp');
 
        // 포스터 배열 선언
        const posterArr = [
            {id: 1, age: 15, likenum: '1240', 
            type: 'mega_mx4d', 
            discription: 
            '최강의 두사람, <br> 다시는 돌아갈 수 없는 푸른 봄 <br> <br> 2006년 봄, <br> 주술고등전문학교 시절의 고죠 사토루와 게토 스구루. <br> 불사의 술식을 가진 주술계 핵심, <br> 텐겐으로부터의 의뢰가 도착한다.',
            rate: 9.5},
            {id: 2, age: 15, likenum: '392', 
            type: 'dolbycinema', 
            discription: 
            '인기 애니메이션 <br> 체인소 맨 첫 공식 극장판 국내 상륙! <br> <br> 압도적 배틀 액션이 <br> 스크린에서 폭발한다! <br> 데블 헌터로 일하는 소년 덴지는 조직의 배신으로 죽음에 내몰리는데..',
            rate: 9.4},
            {id: 3, age: 15, likenum: '1700', 
            type: '', 
            discription: 
            '끝을 보는놈, 해맑은 놈, 잘생긴 놈, <br> 눈 뜨고 자는 놈, 사랑스러운 놈. <br> <br> 10월, <br> 뭉치면 더 웃기는 놈들의  <br> 대환장 코미디가 온다! <br> 어린 시절부터 한 몸처럼 붙어 다니던 그들에게 시련이 찾아온다.',
            rate: 0},
            {id: 4, age: 19, likenum: '470', 
            type: 'dolbyatmos', 
            discription: 
            '다 이루었다.. <br> <br> 는 생각이 들 만큼 삶에 만족하던 25년 경력의 제지 전문가 <br> 만수(이병헌). 아내 미리(손예진), <br> 두아이, 반려견들과 함께 행복한 일상을 보내던 만수는  회사로부터 돌연 <br> 해고 통보를 받는데..',
            rate: 8.1},
        ];

        // 1.
        // 포스터 렌더링 함수
        function renderPoster() {
        let output = '';
        for (let i = 0; i < posterArr.length; i++) {
            output += `
                <div class="posterBox">
                    <p class="number">${posterArr[i].id}</p>
                    <img class="poster" src="img/section1/movieposter0${posterArr[i].id}.jpg"/>
            `;

        
                output += `<img class="age" src="img/section1/age-${posterArr[i].age}.png"/>`;
            

            if (posterArr[i].type) {
                output += `<img class="runType" src="img/section1/type_${posterArr[i].type}.png"/>`;
            }

            output += `
                <div class="overay" style="width:245px; height:352px">
                    <p class="disc">${posterArr[i].discription}</p>
                    <ul>
                        <li class="rate">관람평</li>
                        <li class="rateScore">${posterArr[i].rate}</li>
                    </ul>
                </div>
                <div class="belowPoster">
                    <button class="likenumBtn">
                        <p class="heart">♡</p>
                        <p class="like">${posterArr[i].likenum}</p>
                    </button>
                    <button class="bookBtn">예매</button>
                </div>
            </div>`;
            }
            posterWarp.innerHTML = output;
        }

        // 좋아요 버튼 클릭 이벤트
        function addLikeEvents() {
            const likenumBtn = document.getElementsByClassName('likenumBtn');
            const heart = document.getElementsByClassName('heart');
            const like = document.getElementsByClassName('like');

            for (let i = 0; i < likenumBtn.length; i++) {
                likenumBtn[i].addEventListener('click', function () {
                    likenumBtn[i].classList.toggle('clicked');

                    if (heart[i].textContent === '♡') {
                        heart[i].textContent = '♥';
                        posterArr[i].likenum++;
                    } else {
                        heart[i].textContent = '♡';
                        posterArr[i].likenum--;
                    }

                    like[i].textContent = posterArr[i].likenum;
                });
            }
        }
        renderPoster();
        addLikeEvents();
            
        }
        section1();

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
    // 본문 - 섹션2 SCRIPT
    // -----------
        function section2() {
                // 1. 좌측 슬라이드 적용하기    
                function clickBtnSc2() {
                    // DOM & 변수 선언
                    const sliderA = document.getElementById('sliderA'); // 슬라이드 A 컨테이너
                    const sliderB = document.getElementById('sliderB'); // 슬라이드 B 컨테이너
                    const toggleBtn = document.querySelectorAll('.flexS2 li span'); // 하단 버튼

                    let output1 = '<div class="slidesA">';
                    let output2 = '<div class="slidesB">';
                    for (let i = 1; i <= 5; i++) {
                    output1 += `<img src="img/section2/slideA-${i}.jpg" class="slideA">`;
                    output2 += `<img src="img/section2/slideB-${i}.jpg" class="slideB">`;
                    }
                    output1 += '</div>';
                    output2 += '</div>';

                    sliderA.innerHTML = output1;
                    sliderB.innerHTML = output2;

                    const slidesA = document.querySelector('#sliderA .slidesA');
                    const slidesB = document.querySelector('#sliderB .slidesB');

                    let current = 0;

                    toggleBtn.forEach((btn, i) => {
                    btn.addEventListener('click', () => {
                        // 버튼 활성화 처리
                        toggleBtn.forEach(b => b.classList.remove('active'));
                        btn.classList.add('active');

                        current = i;

                        // 슬라이드 이동
                        slidesA.style.transform = `translateX(${-300 * current}px)`;
                        slidesB.style.transform = `translateY(${-325 * current}px)`;
                    });
                    });
                }
                clickBtnSc2();
                
                // 2. 하단부 카테고리 렌더링
                function renders2Lower(){
                    // 변수 선언
                    const s2Lower = document.getElementById("s2Lower");
                    //  배열 선언
                    const s2Arr = [
                        {icon: 'vip', disc: 'VIP LOUNGE'},
                        {icon: 'membership', disc: '멤버십'},
                        {icon: 'card', disc: '할인카드안내'},
                        {icon: 'event', disc: '이벤트'},
                        {icon: 'store', disc: '스토어'},
                    ];
                    let output = '<ul class="ulSc2">';
                    for (let i = 0 ; i < s2Arr.length ; i++) {
                        output += 
                        '<li> <ul> <li class="iconSc2">' + '<img src="img/section1/ico-'+ s2Arr[i].icon 
                        + '-main.png"/></li><li class="discSc2">' + s2Arr[i].disc + '</li>'
                        + '</ul></li>';
                    }
                    output += '</ul>';
                    s2Lower.innerHTML = output;
                }
                renders2Lower();
        }
        section2();
               

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
    // 본문 - 섹션3 SCRIPT
    // -----------
        function section3() {
            // 배열 생성
            const listArr = [
                {   id: 0,
                    title: '프랑켄슈타인',
                    bg: 'classic',
                    tag: '클레식시네마',
                    disc: `나폴레옹 전쟁의 참혹한 전장에서 시작된 <br>과학자 빅터 프랑켄슈타인의 
                    실험은 피조물을 탄생시키지만,<br> 예기치 못한 피조물의 실종으로 파국을 맞이한다.
                    <br><br>3년 뒤,<br> 빅터 앞에 괴물이 되어 돌아온 피조물은 교만한 창조주여,<br> 
                    내가 겪은 불행을 돌려주리라라는 저주와 함께 그의 운명을 뒤흔든다.
                    <br>10년간 무대를 압도해온 한국 창작뮤지컬의 신화, <br><br>뮤지컬 〈프랑켄슈타인〉이 
                    스크린에서 다시 살아난다.`
                },
                {   id: 1,
                    title: '만남의 집',
                    bg: 'film',
                    tag: '필름소사이어티',
                    disc: `15년 차 교도관 ‘태저’(송지효)는 근무 중 담당 수용자<br>‘미영’(옥지영)의 모친 
                    사망 소식을 전해 듣는다.<br><br>어느 겨울밤,<br>장례식장 빈소에서 예기치 못한 만남을 하게 
                    된 태저와 미영의 딸 ‘준영’(도영서).<br>짧은 만남은 두 사람의 삶에 따스한 균열을 일으키고,<br> 
                    결국 세 인물의 연결고리를 만들어낸다.<br><br>네가 하는 모든 선택들이 모여서 네가 돼
                    <br>서로의 삶을 비추는 ‘햇빛 같은 만남’`
                },
                {   id: 2,
                    title: '연의 편지',
                    bg: 'film',
                    tag: '필름소사이어티',
                    disc: `여름 방학이 지나고 새로운 학교로 전학 오게 된 ‘소리’는 <br>
                    자신의 책상 서랍에서 학교에 대한 소개와<br>다음 편지를 찾을 수 있는 힌트가 담긴 
                    익명의 편지 한 통을 발견한다.<br><br>"내 편지를 더 읽고 싶다면 두 번째 편지를 찾아줘!"<br><br>
                    이어지는 편지를 따라서 보물찾기하듯 학교 곳곳을 누비던 ‘소리’는 <br>어쩐지 동급생 ‘동순’과 
                    자꾸 마주치고 ‘소리’와 ‘동순’은 함께 편지를 찾는 친구가 된다.<br><br>하나 둘… 편지를 모을수록 
                    특별한 인연이 이어지자<br>‘소리’는 편지를 보낸 사람에 대한 궁금증이 점차 커져가게 되는데…`
                },
                {   id: 3,
                    title: '그저 사고였을뿐',
                    bg: 'film',
                    tag: '필름소사이어티',
                    disc: `어느 날,<br> 나를 지옥으로 이끌던 삐걱 소리가 다시 들렸다.
                    <br><br>분명 그놈이다. <br><br>하지만 만약에 아니라면?<br>그저 사고였을 뿐?
                    <br>누군가는 그걸 평생 기억해`
                },
                {   id: 4,
                    title: '마작',
                    bg: 'film',
                    tag: '필름소사이어티',
                    disc: `급격한 경제 성장을 이루며<br> 전 세계의 돈이 모이는 1990년대 타이베이,<br>
                    네 청년 ‘홍어’, ‘스누커’, ‘홍콩’ 그리고 ‘룬룬’은<br>모든 것을 함께 나눈다는 약속을 하며<br>
                    청년 갱단을 조직해 한 집에서 살아간다.<br><br>
                    남자친구와 재회하기 위해 <br>무작정 타이베이를 찾았지만 갈 곳이 없어진 프랑스인 ‘마르트’.<br>
                    갱단의 리더 ‘홍어’는 ‘마르트’를 이용하기 위해 접근하고,<br>
                    ‘룬룬’은 그녀에게 설레는 감정을 느끼기 시작한다.`
                },
            ];

            const s3ListWrap = document.getElementById('s3ListWrap');
            const callMain = document.getElementById('callMain');
            const callMaindesc = document.getElementById('callMaindesc');


            // 1. 리스트 한 번만 렌더링
            function renderList() {
                let output = `
                    <div class="s3ListContainer">
                        <button class="s3PrevBtn">←</button>
                            <ul class="s3List">
                `;
                listArr.forEach(item => {
                    output += `
                        <li data-id="${item.id}">
                            <div class="s3posterwrap">
                                <img class="bg" src="img/section3/bc-${item.bg}.png">
                                <img class="s3Subposter" src="img/section3/sub${item.id}.jpg">
                            </div>
                            <div class="s3Subtitle">${item.title}</div>
                        </li>
                    `;
                });
                output += `
                            </ul>
                        <button class="s3NextBtn">→</button>
                    </div>
                `;
                s3ListWrap.innerHTML = output;

                // DOM 요소 재참조
                list = s3ListWrap.querySelector('.s3List');
                prevBtn = s3ListWrap.querySelector('.s3PrevBtn');
                nextBtn = s3ListWrap.querySelector('.s3NextBtn');

                addListClickEvent();
                addSlideEvents();
            }

            // 2. 메인 콘텐츠 초기값 설정 (리스트 렌더링 후)
            function renderMainDefault() {
                updateMainContent(listArr[4]);
            }

            // 3. 리스트 클릭 시 메인 콘텐츠 업데이트
            function addListClickEvent() {
                const listItems = s3ListWrap.querySelectorAll('.s3List li');
                listItems.forEach(li => {
                    li.addEventListener('click', () => {
                        const id = parseInt(li.dataset.id);
                        const selectedItem = listArr.find(item => item.id === id);
                        updateMainContent(selectedItem);
                    });
                });
            }

            // 4. 슬라이드 이동 이벤트
            function addSlideEvents() {
                let check = 0;
                prevBtn.addEventListener('click', () => {
                    if (check === 1) {
                        check = 0;
                        list.style.transform = `translateX(0px)`;
                        list.style.transition = 'transform 0.4s ease';
                        console.log('prev click, check:', check);
                    }
                });

                nextBtn.addEventListener('click', () => {
                    if (check === 0) {
                        check = 1;
                        list.style.transform = `translateX(-180px)`;
                        list.style.transition = 'transform 0.4s ease';
                        console.log('next click, check:', check);
                    }
                });
            }

            // 5. 메인 콘텐츠 업데이트 함수
            function updateMainContent(item) {
                callMain.innerHTML = `
                    <img class="mainBg" src="img/section3/bc-${item.bg}.png">
                    <img class="s3Mainposter" src="img/section3/sub${item.id}.jpg">
                `;
                callMaindesc.innerHTML = `
                    <ul class="s3Main">
                        <li class="s3Category"><h3 style="color:#fff;"># ${item.tag}</h3></li>
                        <li><h2 class="s3Title">${item.title}</h2></li>
                        <hr style="border:1px solid #ffffffa9;">
                        <li><div class="s3Desc">${item.disc}</div></li>
                    </ul>
                `;
            }

            // 실행 순서
            renderList();
            renderMainDefault(); // 리스트 렌더링 후
}

section3();

    

 

// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------
    // 본문 - 섹션4 SCRIPT
