const hamburger = document.querySelector(".hamburger");

const ham_line_one = document.querySelector(".ham-line-one");
const ham_line_two = document.querySelector(".ham-line-two");
const ham_line_three = document.querySelector(".ham-line-three");

const links = document.querySelector('.links');

hamburger.addEventListener('click', function() {
  if(!ham_line_one.classList.contains('anim')) {
    setTimeout(() => {
      ham_line_one.classList.add('anim');
      ham_line_three.classList.add('anim');
      ham_line_two.classList.add('anim');

    ham_line_one.style.transitionDelay = "100ms";
    ham_line_three.style.transitionDelay = "300ms";

    links.classList.add('anim');
    }, 100);
  }

  if(ham_line_one.classList.contains('anim')) {
    ham_line_one.classList.remove('anim');
    ham_line_three.classList.remove('anim');
    ham_line_two.classList.remove('anim');

    ham_line_one.style.transitionDelay = "300ms";
    ham_line_three.style.transitionDelay = "100ms";

    links.classList.remove('anim');

  }
})



