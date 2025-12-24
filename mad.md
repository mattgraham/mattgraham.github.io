---
layout: home
customCSS: post-mad.css
url: /mad
---

<div class="bg-black welcome-family">
  <div class="welcome-content">
    <div class="welcome-text [&>*]:leading-1 [&>*]:tracking-tight">
      <div class="welcome-name">WE</div>
      <div class="welcome-name">LOVE</div>
      <div class="welcome-name">YOU</div>
      <div class="welcome-name">MONEY</div>
      <div class="welcome-name">AND</div>
      <div class="welcome-name">DAH</div>
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
  <div class="text-2xl text-slate-700 leading-8 my-6 max-w-prose mx-auto">
    Merry Christmas from Ella, Madisyn, Shannon and I. We love you and want more time with you in Michigan, SO, whenever you're ready the next trip is on us. FOR REAL! Wish you were with us more, we're busy folk, but we're always here for you and want you with us.
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
