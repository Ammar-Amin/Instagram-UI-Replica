let body = document.querySelector('body');
let stories = document.querySelectorAll('.stories-img');

stories.forEach((story, i) => {
    i = i + 1;
    story.addEventListener('click', (e) => {
        console.log(e.target.src)
        console.log('story', i);
        let div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.width = '100%';
        div.style.height = '100%';
        div.style.backgroundColor = '#dadada';
        body.appendChild(div);
    })
})