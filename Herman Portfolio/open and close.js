
const closeBtn = document.getElementById('close');
const openBtn = document.getElementById('menu');
const asideMenu = document.getElementById('asideMenu');

closeBtn.addEventListener('click', () =>{
    asideMenu.style.visibility = 'hidden';
})
openBtn.addEventListener('click', () =>{
    asideMenu.style.visibility = 'visible';
})

const links = asideMenu.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', () =>{
        asideMenu.style.visibility = 'hidden';
    })
});