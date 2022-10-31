const girl = document.querySelector('.girl');
const ghost = document.querySelector('.ghost');

const jump = () => {
    girl.classList.add('jump');
    
    setTimeout(() => {
        girl.classList.remove('jump')
    }, 500);
}

const loop = setInterval(() =>{
    
    console.log('loop')
    
    const ghostPosition = ghost.offsetLeft;
    const girlPosition = +window.getComputedStyle(girl).bottom.replace('px', '');
    
    console.log(girlPosition);
    
    if (ghostPosition <= 65 && ghostPosition > 0 && girlPosition < 100) {
        
        ghost.style.animation = 'none';
        ghost.style.left = `${ghostPosition}px`;

        girl.style.animation = 'none';
        girl.style.bottom = `${girlPosition}px`;

        girl.src = './imagens/skull.png'
        girl.style.width = '5%'
        girl.style.marginLeft = '60px'
        clearInterval(loop);
    } 
}, 10)

document.addEventListener('keydown', jump);