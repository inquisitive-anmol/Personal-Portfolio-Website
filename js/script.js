const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a')
const header = document.querySelector('.header.container');
const brandh1 = document.querySelector('.brand h1');
const menus_a = document.querySelectorAll('#header .nav-bar ul a');


hamburger.addEventListener('click' , () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');

});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = '#b2c7d6';
        brandh1.style.color = '#000';

        menus_a.forEach(element => {
            element.style.color = '#000';
        });
    } else {
        header.style.backgroundColor = 'transparent';
        brandh1.style.color = '#fff';

        menus_a.forEach(element => {
            element.style.color = '#fff';
        });
    }
});

menu_item.forEach(element => {
   element.addEventListener('click',() => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
   }) 
});

