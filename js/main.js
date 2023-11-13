const wrap = document.querySelector('section');
const btns = wrap.querySelectorAll("li");

btns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    btns.forEach(el => el.classList.remove('on'));
    btns[idx].classList.add('on');
  })
})