// Smooth scrolling for navbar
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Close Lightbox on ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") {
        const openLightbox = document.querySelector('.lightbox');
        if (openLightbox && openLightbox.style.display === 'flex') {
            lightboxImg.classList.add('close-effect'); // Add close effect
            setTimeout(() => {
                openLightbox.style.display = 'none';
                lightboxImg.classList.remove('close-effect'); // Remove close effect
            }, 300);
        }
    }
});

// Lightbox functionality
const galleryItems = document.querySelectorAll('.gallery-item a');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeLightbox = document.querySelector('.close-lightbox');
const prevLightbox = document.querySelector('.prev-lightbox');
const nextLightbox = document.querySelector('.next-lightbox');

let currentImageIndex = 0;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        currentImageIndex = index;
        showLightbox(currentImageIndex);
    });
});

function showLightbox(index) {
    const imageSrc = galleryItems[index].querySelector('img').src;
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
    lightboxImg.classList.add('zoomed'); // Add zoomed class here
}

closeLightbox.addEventListener('click', () => {
    lightboxImg.classList.add('close-effect'); // Add close effect
    setTimeout(() => {
        lightbox.style.display = 'none';
        lightboxImg.classList.remove('close-effect'); // Remove close effect
    }, 300);
});

prevLightbox.addEventListener('click', () => {
    lightboxImg.classList.add('zoom-out'); // Add zoom effect
    setTimeout(() => {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        showLightbox(currentImageIndex);
        lightboxImg.classList.remove('zoom-out'); // Remove zoom effect
    }, 300);
});

nextLightbox.addEventListener('click', () => {
    lightboxImg.classList.add('zoom-out'); // Add zoom effect
    setTimeout(() => {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        showLightbox(currentImageIndex);
        lightboxImg.classList.remove('zoom-out'); // Remove zoom effect
    }, 300);
});