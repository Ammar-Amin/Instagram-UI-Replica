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
                e.target.style.backgroundColor = 'red'
            } else {
                e.target.style.backgroundColor = 'white'
            }
        }
    })
}
likePost();


// let likeIcons = document.querySelectorAll('.like');
// let click = false;
// likeIcons.forEach(like => {
//     like.addEventListener('click', () => {
//         console.log('click')
//         click = !click;
//         if (click) {
//             like.style.backgroundColor = 'red'
//         } else {
//             like.style.backgroundColor = 'white'
//         }
//     })
// });
