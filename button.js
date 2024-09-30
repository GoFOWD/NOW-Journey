function DayNightButton(who){
    let selector = document.querySelector('body');
    if(who.value === 'Night'){
        selector.style.backgroundColor='#202124';
        document.getElementById('button_1').value='Day';
        selector.style.color='white';
        document.querySelector('h1 a').style.color='white';
        document.getElementById('button_1').style.boxShadow='5px 5px 5px -5px black';
        document.getElementById('button_1').style.backgroundColor='#424242';
        document.getElementById('button_1').style.color='white';
    }
    else{
        selector.style.backgroundColor='white';
        document.getElementById('button_1').value='Night';
        selector.style.color='black';
        document.querySelector('h1 a').style.color='black';
        document.getElementById('button_1').style.boxShadow='5px 5px 5px -5px gray';
        document.getElementById('button_1').style.backgroundColor='#FAFAFA';
        document.getElementById('button_1').style.color='black';
    }
}

function moveButton(){
    const bigWindowParent = document.getElementById('list_button');
    const smallWindowParent = document.getElementById('article');
    const button = document.getElementById('button_1');
    if(window.innerWidth < 800){
        if(button.parentNode === bigWindowParent){
            smallWindowParent.appendChild(button)
        }
    }
    else{
        if(button.parentNode === smallWindowParent){
            bigWindowParent.appendChild(button)
        }
    }
}
window.addEventListener('resize', moveButton);
moveButton();