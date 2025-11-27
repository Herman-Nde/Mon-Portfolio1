const bigger = document.getElementById('bigger');
const fermer = bigger.querySelector('button');
const biggerImg = bigger.querySelector('img');
const images = document.querySelectorAll('.image');

fermer.addEventListener('click', () =>{
    bigger.style.visibility = 'hidden';
})
images.forEach(image => {
    image.addEventListener('click', () =>{
        bigger.style.visibility = 'visible';
        biggerImg.src = image.src;
    })
});
