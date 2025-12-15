const images = document.querySelectorAll('.gallery-grid img');

const overlay = document.createElement('div');
overlay.className = 'image-overlay';

const overlayImg = document.createElement('img');
overlay.appendChild(overlayImg);

document.body.appendChild(overlay);

images.forEach(img => {
    img.addEventListener('click', e => {
        e.preventDefault();
        overlayImg.src = img.src;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    overlayImg.src = '';
    document.body.style.overflow = '';
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        overlay.classList.remove('active');
        overlayImg.src = '';
        document.body.style.overflow = '';
    }
});

