const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenuElement = document.getElementById('mobile-menu');



function getMobileMenu(){
 mobileMenuElement.classList.toggle('open');


}


mobileMenuBtn.addEventListener('click', getMobileMenu);