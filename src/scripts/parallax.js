
const parallaxLayer = document.querySelectorAll('.parallaxmountain');

function moveLayerScroll(mScroll) {
    for (let i = 0; i < parallaxLayer.length; i++ ) {
        const layerSpeed = parallaxLayer[i].dataset.speed;
        const strafe = mScroll * layerSpeed / 12;
        parallaxLayer[i].style.transform = `translateY(-${strafe}%)`;
    }
}

window.addEventListener('scroll', e => {
    const mScroll = window.pageYOffset;
    moveLayerScroll(mScroll)
    
})

function parallaxBudda(event) {
    const layerBudda = document.querySelector('.budda');
    layerBudda.style.transform = `translate(${event.clientX/10}px, ${event.clientY/10}px)`
}

document.addEventListener('mousemove', parallaxBudda);