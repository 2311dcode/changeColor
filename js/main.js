const wrap = document.querySelector('section');
const btns = wrap.querySelectorAll("li");

//로딩시 박스색을 첫번째 버튼의 텍스트로 변경 
wrap.style.backgroundColor = btns[0].innerText;

//버튼의 갯수대로 반복
btns.forEach((btn, idx) => {
  //버튼 클릭시 
  btn.addEventListener('click', (e) => {
    //클릭한 버튼에 on클랙스가 있다면 아래 코드를 실행하지 않고 중지 
    if (e.currentTarget.classList.contains('on')) return;
    //함수 호출 
    activation(btns, e);
    changeBg(e, wrap);
  });
});

//버튼 활성화 함수 정의  
function activation(arr, e) {
  //배열 반복을 돌며 요소에 on클래스 제거 
  arr.forEach(el => el.classList.remove('on'));
  //클릭한 버튼에 on클래스 추가 
  e.currentTarget.classList.add('on');
}

//박스배경색 변경 함수 정의 
function changeBg(e, box) {
  //클릭한 버튼의 텍스트를 변수로 지정 
  let bgColor = e.currentTarget.innerText;
  //박스의 배경색에 변수 대입
  box.style.backgroundColor = bgColor;
}