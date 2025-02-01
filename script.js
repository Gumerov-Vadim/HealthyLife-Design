const textElement = document.getElementById('text');
const text = textElement.innerText;
textElement.innerHTML = '';
text.split(' ').forEach((word, index) => {
    const span = document.createElement('span');
    span.innerText = word;
    span.classList.add('word');
    textElement.appendChild(span);

    switch(index){
        case 2:
        case 4:
        case 10:
        case 13:
            const space = document.createElement('span');
            space.innerText = '⠀';
            space.classList.add('space');
            textElement.appendChild(space); 
    }
    // if(Math.random() < 0.3){
    //     const space = document.createElement('span');
    //     space.innerText = '⠀';
    //     space.classList.add('space');
    //     textElement.appendChild(space);
    // }
});