const wrap = document.querySelector('section');
const btns = wrap.querySelectorAll("li");

btns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    activation(btns, idx);
    changeBg(btns, idx);
  });
});

function activation(arr, idx) {
  arr.forEach(el => el.classList.remove('on'));
  arr[idx].classList.add('on');
}
function changeBg(arr, idx) {
  let bgColor = arr[idx].innerText;
  wrap.style.backgroundColor = bgColor;
}