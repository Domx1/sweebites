// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const galleryImages = document.querySelectorAll('.gallery-image, .menu-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');

    galleryImages.forEach(image => {
        image.addEventListener('click', function () {
            lightbox.style.display = 'block';
            lightboxImg.src = this.getAttribute('data-full');
        });
    });

    lightboxClose.addEventListener('click', function () {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function (e) {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });
});
