const searchInput = document.querySelector('#search');
const images = document.querySelectorAll('img');



window.addEventListener('load', () => {
    baguetteBox.run('.gallery');
});

searchInput.addEventListener('keydown', (e) => {
    let input = e.target.value.toLowerCase();
    images.forEach(image => {
        let imageName = image.alt.toLocaleLowerCase();
        if(imageName.includes(input)) {
            image.style.display = 'inline-block';
        } else {
            image.style.display = 'none';
        }
    })
})

