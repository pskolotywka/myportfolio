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

function parallaxBudda(e) {
    const layerBudda = document.querySelector('.budda');
    layerBudda.style.transform = `translate(${e.clientX/10}px, ${e.clientY/10}px)`;
}

document.addEventListener('mousemove', parallaxBudda);


