const title = document.querySelector('.title')
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')


document.addEventListener('scroll', function() {
    let value = window.scrollY
   // console.log(value)
   title.style.marginTop = value * 1.1 + 'px'

   leaf1.style.marginLeft = -value + 'px'
   leaf2.style.marginLeft =  value + 'px'




})

document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('open');
  });
});