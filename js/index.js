document.addEventListener('contextmenu', event => event.preventDefault());

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
   const main = document.querySelector('main')
   main.style.opacity = 1
   main.style.filter = 'blur(0px)'
 }, 500)
})  