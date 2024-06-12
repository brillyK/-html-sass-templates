const headerEl = document.querySelector('#header')
let lastScrollY = 0

window.addEventListener(
    'scroll',
    //쓰로틀 사용 시 로대쉬 cbn 넣어야함
    _.throttle(function () {
        //현재 스크롤 위치
        const currentScrollY = window.scrollY
        console.log('현재 스크롤 위치 :' + currentScrollY)
        console.log('마지막 스크롤 위치 :' + lastScrollY)

        if (currentScrollY > 200) {
            //#header가 bg-w 클래스 추가한다 add / 뺀다 remove
            headerEl.classList.add('bg-w')

            gsap.to(headerEl, {
                backdropFilter: 'blur(30px)',
                duration: 0.5,
            })

            //스크롤 방향에 따라 헤더 숨김,보임
            if (currentScrollY > lastScrollY) {
                //스크롤 다운 시
                gsap.to(headerEl, {
                    y: -100,
                    duration: 0.5,
                })
            } else {
                //스크롤 업 시
                gsap.to(headerEl, {
                    y: 0,
                    duration: 0.5,
                })
            }
        } else {
            headerEl.classList.remove('bg-w')

            gsap.to(headerEl, {
                backgroundColor: 'transparent',
                backdropFilter: 'blur(0)',
                duration: 0.5,
            })
        }
        //마지막 스크롤 위치 갱신
        lastScrollY = currentScrollY
    }, 300),
)
