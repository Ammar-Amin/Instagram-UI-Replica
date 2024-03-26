let body = document.querySelector('body');
let stories = document.querySelector('.stories');
let storyBg = document.querySelector('.storyBg');
let clickedStory = document.querySelector('.wStory')

stories.addEventListener('click', function (e) {
    // console.log(e.target);
    if (e.target.classList.contains('img')) {
        // console.log('hello')
        storyBg.style.display = 'block';
        clickedStory.opacity = 1;
        clickedStory.src = e.target.src;
    }

    setTimeout(() => {
        storyBg.style.display = 'none';
    }, 2000)
})


function likePost() {
    let mainPost = document.querySelector('.main-post')
    let click = false;
    mainPost.addEventListener('click', (e) => {
        // console.log(e.target)
        if (e.target.classList.contains('like')) {
            click = !click
            if (click) {
                e.target.style.color = 'white';
                e.target.style.backgroundColor = 'red'
            } else {
                e.target.style.color = 'black';
                e.target.style.backgroundColor = 'white'
            }
        }
    })
}
likePost();


const images = document.querySelectorAll('.img-box');

images.forEach((img, index) => {
    img.addEventListener('dblclick', function (e) {
        console.log(e.target, index);
        let heart = document.getElementById(`${index}`);
        heart.style.transform = 'translate(-50%, -50%) scale(1)'
        heart.style.opacity = 0.8;

        let loveIcon = document.getElementById(`likeNo-${index}`);
        loveIcon.style.backgroundColor = 'red'
        loveIcon.style.color = "white";

        setTimeout(() => {
            heart.style.transform = 'translate(-50%, -50%) scale(0)'
            heart.style.opacity = 0;
        }, 750);

    })
})