new hoverEffect({
    parent: document.querySelector('.distortion'),
    intensity: 0.5,
    image1: './img/image1.jpg',
    image2: './img/image2.jpg',
    angle: Math.PI / 8,
    displacementImage: './img/stripe1.png'
});

// **     JS code  Portfolio              **
// fixed header

// Click event cards
for (let i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('click', popupFunction);
}
