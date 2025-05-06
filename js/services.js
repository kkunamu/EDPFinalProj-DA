document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const cards = document.querySelectorAll('.carousel-container .card');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    const circles = document.querySelectorAll('.circle');
  
    let currentIndex = 0;
    const cardWidth = 723;
    const maxIndex = circles.length - 1;
  
    function updateCarousel() {
      carouselContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      circles.forEach((circle, idx) => {
        circle.classList.toggle('active', idx === currentIndex);
      });
    }
  
    rightArrow?.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) > maxIndex ? 0 : currentIndex + 1;
      updateCarousel();
    });
  
    leftArrow?.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + (maxIndex + 1)) % (maxIndex + 1);
      updateCarousel();
    });
  
    circles.forEach((circle, idx) => {
      circle.addEventListener('click', () => {
        currentIndex = idx;
        updateCarousel();
      });
    });
  
    updateCarousel();
  
    // moooooodals
    function openModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.style.display = 'flex';
    }
  
    function closeModal(id) {
      const modal = document.getElementById(id);
      if (modal) modal.style.display = 'none';
    }
  
    function outsideClick(event, modalId) {
      const modal = document.getElementById(modalId);
      if (event.target === modal) {
        closeModal(modalId);
      }
    }
  
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        const modals = Array.from(document.querySelectorAll('.modal-overlay'))
          .filter(modal => modal.style.display === 'flex');
        if (modals.length > 0) {
          modals[modals.length - 1].style.display = 'none';
        }
      }
    });
  
    // accordion
    const headers = document.querySelectorAll('.accordion-header');
    headers.forEach(header => {
      header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        if (body.classList.contains('open')) {
          body.classList.remove('open');
        } else {
          document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
          body.classList.add('open');
        }
      });
    });
  
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.outsideClick = outsideClick;
  });
  