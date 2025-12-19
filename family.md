---
layout: home
customCSS: post-home.css
---

<div class="welcome welcome-family">
  <div class="welcome-content">
    <div class="welcome-text">
      <div class="welcome-name">FAMILY</div>
      <div class="welcome-quote">When this is all said and done I hope its obvious my life was full of faith, hope and love, full of family, laughter, and community.</div>
    </div>
    <div class="welcome-image">
      <img src="/assets/images/Family2025-72.jpg" alt="Family" class="h-full w-full object-cover">
    </div>
    <div class="welcome-overlay">
      <img src="/assets/images/Family2025-72-Transparent.png" alt="Family" class="h-full w-full object-cover">
    </div>
  </div>
</div>

<div class="max-w-screen-lg mx-auto p-8">
  <div class="text-xl text-slate-700 leading-8 mb-6 max-w-prose mx-auto">
    In 2005, I convinced my college crush and dream girl Shannon to marry me. A decade and a half later after building careers and buying our home, our family grew with the laughter, warmth and the energy of our two precious daughters, Ella and Madisyn.
  </div>
  <div class="text-xl text-slate-700 leading-8 mb-6 max-w-prose mx-auto">
    When this is all said and done I hope its obvious my life was full of faith, hope and love, full of family, laughter, and community. My measure of success is love, devotion, and a steadfast commitment to making a meaningful impact in the world around me.
  </div>
</div>

<div class="max-w-screen-2xl mx-auto px-4 md:px-8 py-8">
  <div class="columns-1 md:columns-2 lg:columns-3 gap-4" id="family-gallery">
    {% for image in site.data.family_images %}
      <div class="break-inside-avoid mb-4">
        <img 
          src="/assets/images/family/{{ image }}" 
          alt="Family photo" 
          class="family-gallery-image w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          loading="lazy"
          data-image="/assets/images/family/{{ image }}"
        >
      </div>
    {% endfor %}
  </div>
</div>

<!-- Full Screen Modal -->
<div id="image-modal" class="image-modal hidden">
  <div class="image-modal-backdrop"></div>
  <div class="image-modal-content">
    <button class="image-modal-close" aria-label="Close modal">&times;</button>
    <img id="modal-image" src="" alt="Family photo" class="image-modal-img">
    <button class="image-modal-nav image-modal-prev" aria-label="Previous image">&#8249;</button>
    <button class="image-modal-nav image-modal-next" aria-label="Next image">&#8250;</button>
  </div>
</div>

<script>
(function() {
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const closeBtn = document.querySelector('.image-modal-close');
  const backdrop = document.querySelector('.image-modal-backdrop');
  const prevBtn = document.querySelector('.image-modal-prev');
  const nextBtn = document.querySelector('.image-modal-next');
  const galleryImages = document.querySelectorAll('.family-gallery-image');
  
  let currentImageIndex = 0;
  const images = Array.from(galleryImages).map(img => img.getAttribute('data-image'));

  function openModal(index) {
    currentImageIndex = index;
    modalImage.src = images[index];
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex];
  }

  function showPrev() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex];
  }

  // Open modal on image click
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
  });

  // Close modal
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Navigation
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showNext();
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrev();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden')) {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    }
  });
})();

// Preload all images in the background after page loads
(function() {
  function preloadImages() {
    const galleryImages = document.querySelectorAll('.family-gallery-image');
    galleryImages.forEach((img) => {
      const imageSrc = img.getAttribute('data-image');
      if (imageSrc) {
        const preloadImg = new Image();
        preloadImg.src = imageSrc;
      }
    });
  }

  // Start preloading after page is fully loaded
  if (document.readyState === 'complete') {
    preloadImages();
  } else {
    window.addEventListener('load', preloadImages);
  }
})();
</script>
