const text1 = "We're here * to make | healthy * living effortless, | so you can * live longer | and happier *";
const text2 = "We're here * | to * make | * healthy living | effortless, so you | can * live longer | and happier *";

const text1Element = document.getElementById('text1');
const text2Element = document.getElementById('text2');

const text1ElementHTML = text1Element.innerHTML;
const text2ElementHTML = text2Element.innerHTML;

const space = document.createElement('span');
space.innerText = '⠀';
space.classList.add('space');

function textToHTML(text){
    return text.split('|').map((words)=>{
        const textLine = document.createElement('div');
        textLine.classList.add('text-line');
        textLine.innerHTML = words.split('*').map((words)=>{    
            const span = document.createElement('span');
            span.innerText = words;
            span.classList.add('word');
            return span.outerHTML;
        }).join(`${space.outerHTML}`);
        return textLine.outerHTML;
    }).join('');
}

text1Element.innerHTML = textToHTML(text1);
text2Element.innerHTML = textToHTML(text2);