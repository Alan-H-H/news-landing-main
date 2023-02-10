const hamburger = document.querySelector(".ham");  
const navsub = document.querySelector(".Nav-sub");  
hamburger.addEventListener('click', () => {  
 hamburger.classList.toggle("change")  
 navsub.classList.toggle("nav-change")  
})