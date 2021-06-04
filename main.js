(function(window, document){
    'use strict';

    const $toggles = document.querySelectorAll('.toggle');
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function(){ //토글버튼이 클릭될때 함수 실행
        toggleElements();
    });

    window.addEventListener('resize', function(){ // 윈도우(화면)가 리사이즈될 때 함수 실행
        if(window.innerWidth>1024){
//화면의 너비가 1024보다 크다면 , 토글을 끄는 기능을 만든다.
            offElements();
        }
    });

    function toggleElements(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.toggle('on');
        });
    }

    function offElements(){
        [].forEach.call($toggles, function(toggle){
            toggle.classList.remove('on');
        });
    }
})(window, document)