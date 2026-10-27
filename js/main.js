/**
 * LUMIERE - Modern Photography Portfolio
 * Core Interactive Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Photography Collection Data
  const photoCollection = [
    {
      id: 1,
      title: "Solitude in Amber",
      category: "portrait",
      location: "Reykjavik, Iceland",
      aspect: "portrait",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
      thumb: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      story: "Captured in the raw autumn chill. The natural golden sidelight accentuated the quiet contemplation of the subject amidst the stark Nordic landscape.",
      exif: {
        camera: "Leica M11-P",
        lens: "Summilux-M 35mm f/1.4 ASPH",
        aperture: "f/1.4",
        shutter: "1/800s",
        iso: "ISO 64",
        focal: "35mm"
      },
      likes: 142
    },
    {
      id: 2,
      title: "Whispers of the Dolomites",
      category: "landscape",
      location: "Tre Cime, Italy",
      aspect: "landscape",
      src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
      thumb: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=700&q=80",
      story: "Arrived at 4:30 AM in sub-zero frost. As the morning mist broke against the jagged spires, the first rays painted the peaks in delicate alpine rose.",
      exif: {
        camera: "Hasselblad X2D 100C",
        lens: "XCD 38mm f/2.5 V",
        aperture: "f/8.0",
        shutter: "1/30s",
        iso: "ISO 100",
        focal: "38mm"
      },
      likes: 289
    },
    {
      id: 3,
      title: "Geometry of Silence",
      category: "architecture",
      location: "Valencia, Spain",
      aspect: "portrait",
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
      thumb: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
      story: "A study in brutalist harmony and negative space. The interplay of diagonal shadow cut across polished white concrete like a quiet mathematical statement.",
      exif: {
        camera: "Sony A1",
        lens: "FE 24-70mm f/2.8 GM II",
        aperture: "f/5.6",
        shutter: "1/250s",
        iso: "ISO 100",
        focal: "28mm"
      },
      likes: 195
    },
    {
      id: 4,
      title: "Midnight in Shibuya",
      category: "street",
      location: "Tokyo, Japan",
      aspect: "landscape",
      src: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1400&q=85",
      thumb: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=700&q=80",
      story: "A sudden monsoon cloudburst turned Tokyo's asphalt into a liquid mirror reflecting incandescent neon signage. One lone pedestrian paused under a vinyl umbrella.",
      exif: {
        camera: "Leica Q3",
        lens: "Summilux 28mm f/1.7 ASPH",
        aperture: "f/1.7",
        shutter: "1/125s",
        iso: "ISO 800",
        focal: "28mm"
      },
      likes: 412
    },
    {
      id: 5,
      title: "The Sovereign Stag",
      category: "wildlife",
      location: "Highlands, Scotland",
      aspect: "portrait",
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85",
      thumb: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      story: "After four hours of silent tracking through heather and peat bog, the red deer turned his antlered crown directly into the biting gale.",
      exif: {
        camera: "Sony A1",
        lens: "FE 400mm f/2.8 GM OSS",
        aperture: "f/2.8",
        shutter: "1/1600s",
        iso: "ISO 400",
        focal: "400mm"
      },
      likes: 350
    },
    {
      id: 6,
      title: "Ethereal Gaze",
      category: "portrait",
      location: "Paris, France",
      aspect: "portrait",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=85",
      thumb: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      story: "Studio session exploring high-key soft illumination and gentle textile textures. An unfiltered reflection of contemporary Parisian editorial grace.",
      exif: {
        camera: "Hasselblad X2D 100C",
        lens: "XCD 90mm f/2.5 V",
        aperture: "f/2.5",
        shutter: "1/500s",
        iso: "ISO 64",
        focal: "90mm"
      },
      likes: 218
    },
    {
      id: 7,
      title: "Glacial Veins",
      category: "landscape",
      location: "Vatnajokull, Iceland",
      aspect: "panoramic",
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1400&q=85",
      thumb: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
      story: "Aerial perspective looking straight down upon braided glacial rivers carving cobalt and jade ribbons through volcanic ash fields.",
      exif: {
        camera: "Sony A1",
        lens: "FE 70-200mm f/2.8 GM OSS II",
        aperture: "f/4.0",
        shutter: "1/2000s",
        iso: "ISO 200",
        focal: "105mm"
      },
      likes: 521
    },
    {
      id: 8,
      title: "Vertical Monolith",
      category: "architecture",
      location: "Hudson Yards, New York",
      aspect: "portrait",
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
      thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      story: "Looking upward into the sheer glass canopy. The reflections created an impossible maze where clouds seemed trapped between structural steel beams.",
      exif: {
        camera: "Leica M11-P",
        lens: "Super-Elmar-M 21mm f/3.4 ASPH",
        aperture: "f/8.0",
        shutter: "1/320s",
        iso: "ISO 125",
        focal: "21mm"
      },
      likes: 187
    },
    {
      id: 9,
      title: "Urban Rhythm in Noir",
      category: "street",
      location: "SoHo, Manhattan",
      aspect: "landscape",
      src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1400&q=85",
      thumb: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=700&q=80",
      story: "High-contrast monochrome capture of rush hour shadows casting long rhythmic silhouettes across cast-iron cobblestone avenues.",
      exif: {
        camera: "Leica M11 Monochrom",
        lens: "APO-Summicron-M 50mm f/2 ASPH",
        aperture: "f/2.8",
        shutter: "1/1000s",
        iso: "ISO 320",
        focal: "50mm"
      },
      likes: 310
    },
    {
      id: 10,
      title: "The Golden Dune",
      category: "landscape",
      location: "Namib-Naukluft, Namibia",
      aspect: "landscape",
      src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1400&q=85",
      thumb: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=700&q=80",
      story: "Where ancient red sand ridges rise 300 meters into spotless azure skies. The razor-sharp edge separates deep plum shadow from sun-scorched crimson.",
      exif: {
        camera: "Hasselblad X2D 100C",
        lens: "XCD 55mm f/2.5 V",
        aperture: "f/11",
        shutter: "1/125s",
        iso: "ISO 64",
        focal: "55mm"
      },
      likes: 476
    },
    {
      id: 11,
      title: "The Sculptor of Time",
      category: "portrait",
      location: "Florence, Italy",
      aspect: "portrait",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
      thumb: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      story: "Deep expressive wrinkles framing eyes that have sculpted marble for six decades. Captured using soft natural light from a north-facing atelier window.",
      exif: {
        camera: "Leica M11-P",
        lens: "Noctilux-M 50mm f/0.95 ASPH",
        aperture: "f/1.2",
        shutter: "1/400s",
        iso: "ISO 100",
        focal: "50mm"
      },
      likes: 388
    },
    {
      id: 12,
      title: "Architectural Symmetry",
      category: "architecture",
      location: "Berlin, Germany",
      aspect: "landscape",
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
      thumb: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
      story: "Modernist residential villa with continuous glass facades reflecting twilight poolside tranquility. A study in pristine rectilinear form.",
      exif: {
        camera: "Sony A1",
        lens: "FE 16-35mm f/2.8 GM II",
        aperture: "f/8.0",
        shutter: "1/4s",
        iso: "ISO 100",
        focal: "19mm"
      },
      likes: 224
    }
  ];

  // 2. State Management
  let currentCategory = 'all';
  let currentView = 'masonry';
  let activeLightboxIndex = 0;
  let filteredPhotos = [...photoCollection];
  let userLikes = JSON.parse(localStorage.getItem('lumiere_likes') || '{}');

  // DOM Elements
  const galleryGrid = document.getElementById('galleryGrid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const viewButtons = document.querySelectorAll('.view-btn');
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxLocation = document.getElementById('lightboxLocation');
  const lightboxStory = document.getElementById('lightboxStory');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxLikeBtn = document.getElementById('lightboxLikeBtn');
  const lightboxShareBtn = document.getElementById('lightboxShareBtn');
  const lightboxFullscreenBtn = document.getElementById('lightboxFullscreenBtn');
  
  // EXIF Elements
  const exifCamera = document.getElementById('exifCamera');
  const exifLens = document.getElementById('exifLens');
  const exifAperture = document.getElementById('exifAperture');
  const exifShutter = document.getElementById('exifShutter');
  const exifIso = document.getElementById('exifIso');
  const exifFocal = document.getElementById('exifFocal');

  // Header & Theme Elements
  const siteHeader = document.querySelector('.site-header');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeMenu = document.getElementById('themeMenu');
  const themeItems = document.querySelectorAll('.theme-item');
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');
  const backToTopBtn = document.getElementById('backToTop');
  const contactForm = document.getElementById('contactForm');
  const newsletterForm = document.getElementById('newsletterForm');
  const toastContainer = document.getElementById('toastContainer');

  // 3. Theme Manager
  function initTheme() {
    const savedTheme = localStorage.getItem('lumiere_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeItems.forEach(item => {
      item.classList.toggle('active', item.dataset.theme === savedTheme);
    });
  }

  themeToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    themeMenu.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    themeMenu.classList.remove('show');
  });

  themeItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const theme = item.dataset.theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('lumiere_theme', theme);
      themeItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      themeMenu.classList.remove('show');
      showToast(`Switched theme to ${item.textContent.trim()}`, 'info');
    });
  });

  // 4. Mobile Menu Toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 5. Scroll Header & Back To Top
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 60) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    if (scrollPos > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }

    // Active link spy
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 6. Gallery Rendering
  function renderGallery() {
    galleryGrid.innerHTML = '';
    
    // Update category badge counts
    updateFilterCounts();

    filteredPhotos.forEach((photo, index) => {
      const isLiked = userLikes[photo.id] || false;
      const card = document.createElement('article');
      card.className = 'photo-card';
      card.dataset.id = photo.id;
      card.dataset.index = index;
      card.dataset.aspect = photo.aspect;
      card.tabIndex = 0;
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `View ${photo.title}`);

      card.innerHTML = `
        <div class="photo-image-box">
          <img src="${photo.thumb}" alt="${photo.title}" loading="lazy" />
        </div>
        <div class="photo-card-overlay">
          <div class="overlay-top">
            <span class="overlay-category">${photo.category}</span>
            <div class="overlay-actions">
              <button class="action-btn like-btn ${isLiked ? 'liked' : ''}" data-id="${photo.id}" title="Love this photo" aria-label="Like photo">
                <i class="${isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
              </button>
              <button class="action-btn zoom-btn" title="View Fullscreen" aria-label="Expand image">
                <i class="fa-solid fa-expand"></i>
              </button>
            </div>
          </div>
          <div class="overlay-bottom">
            <h3 class="overlay-title">${photo.title}</h3>
            <p class="overlay-location"><i class="fa-solid fa-location-dot"></i> ${photo.location}</p>
            <span class="overlay-exif">${photo.exif.camera} · ${photo.exif.aperture}</span>
          </div>
        </div>
      `;

      // Event Listeners for Card
      card.addEventListener('click', (e) => {
        // If clicking like button, don't open lightbox
        if (e.target.closest('.like-btn')) {
          e.stopPropagation();
          toggleLike(photo.id, e.target.closest('.like-btn'));
          return;
        }
        openLightbox(index);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLightbox(index);
        }
      });

      galleryGrid.appendChild(card);
    });
  }

  function updateFilterCounts() {
    filterButtons.forEach(btn => {
      const filter = btn.dataset.filter;
      const countSpan = btn.querySelector('.count');
      if (filter === 'all') {
        countSpan.textContent = photoCollection.length;
      } else {
        const count = photoCollection.filter(p => p.category === filter).length;
        countSpan.textContent = count;
      }
    });
  }

  // 7. Filter Tabs Handling
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.filter;

      galleryGrid.style.opacity = '0';
      setTimeout(() => {
        if (currentCategory === 'all') {
          filteredPhotos = [...photoCollection];
        } else {
          filteredPhotos = photoCollection.filter(p => p.category === currentCategory);
        }
        renderGallery();
        galleryGrid.style.opacity = '1';
      }, 200);
    });
  });

  // 8. View Switcher (Masonry / Standard / Compact)
  viewButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      viewButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const view = btn.dataset.view;

      galleryGrid.classList.remove('masonry-view', 'compact-view');
      if (view === 'masonry') {
        galleryGrid.classList.add('masonry-view');
      } else if (view === 'compact') {
        galleryGrid.classList.add('compact-view');
      }
    });
  });

  // 9. Like System with localStorage
  function toggleLike(photoId, btnElement) {
    const photo = photoCollection.find(p => p.id === photoId);
    if (!photo) return;

    if (userLikes[photoId]) {
      delete userLikes[photoId];
      photo.likes--;
      showToast(`Removed from favorites: "${photo.title}"`, 'info');
    } else {
      userLikes[photoId] = true;
      photo.likes++;
      showToast(`Added to favorites: "${photo.title}"`, 'success');
    }

    localStorage.setItem('lumiere_likes', JSON.stringify(userLikes));

    // Update buttons in gallery and lightbox
    const isNowLiked = userLikes[photoId] || false;
    if (btnElement) {
      btnElement.classList.toggle('liked', isNowLiked);
      const icon = btnElement.querySelector('i');
      if (icon) {
        icon.className = isNowLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
      }
    }

    // If lightbox is open and on this photo, update its like button
    const currentPhoto = filteredPhotos[activeLightboxIndex];
    if (currentPhoto && currentPhoto.id === photoId && lightboxLikeBtn) {
      lightboxLikeBtn.classList.toggle('liked', isNowLiked);
      const icon = lightboxLikeBtn.querySelector('i');
      if (icon) {
        icon.className = isNowLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
      }
    }
  }

  // 10. Lightbox Logic
  function openLightbox(index) {
    activeLightboxIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function updateLightboxContent() {
    const photo = filteredPhotos[activeLightboxIndex];
    if (!photo) return;

    lightboxImg.src = photo.src;
    lightboxImg.alt = photo.title;
    lightboxTitle.textContent = photo.title;
    lightboxCategory.textContent = photo.category.toUpperCase();
    lightboxLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${photo.location}`;
    lightboxStory.textContent = photo.story;
    lightboxCounter.textContent = `${activeLightboxIndex + 1} / ${filteredPhotos.length}`;

    // EXIF Details
    exifCamera.textContent = photo.exif.camera;
    exifLens.textContent = photo.exif.lens;
    exifAperture.textContent = photo.exif.aperture;
    exifShutter.textContent = photo.exif.shutter;
    exifIso.textContent = photo.exif.iso;
    exifFocal.textContent = photo.exif.focal;

    // Like button state
    const isLiked = userLikes[photo.id] || false;
    lightboxLikeBtn.classList.toggle('liked', isLiked);
    const likeIcon = lightboxLikeBtn.querySelector('i');
    if (likeIcon) {
      likeIcon.className = isLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    }
  }

  function prevPhoto() {
    activeLightboxIndex = (activeLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    updateLightboxContent();
  }

  function nextPhoto() {
    activeLightboxIndex = (activeLightboxIndex + 1) % filteredPhotos.length;
    updateLightboxContent();
  }

  // Lightbox Events
  lightboxCloseBtn.addEventListener('click', closeLightbox);
  lightboxPrevBtn.addEventListener('click', prevPhoto);
  lightboxNextBtn.addEventListener('click', nextPhoto);

  lightboxLikeBtn.addEventListener('click', () => {
    const photo = filteredPhotos[activeLightboxIndex];
    if (photo) {
      toggleLike(photo.id, null);
      renderGallery(); // Sync like icon in gallery
    }
  });

  lightboxShareBtn.addEventListener('click', () => {
    const photo = filteredPhotos[activeLightboxIndex];
    if (!photo) return;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast(`Link for "${photo.title}" copied to clipboard!`, 'success');
    } else {
      showToast(`Sharing: ${photo.title} (${photo.location})`, 'info');
    }
  });

  lightboxFullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      lightboxModal.requestFullscreen().catch(err => {
        showToast('Fullscreen not supported on this browser', 'info');
      });
    } else {
      document.exitFullscreen();
    }
  });

  // Lightbox Keyboard Navigation
  window.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
  });

  // Lightbox backdrop click to close
  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal || e.target.classList.contains('lightbox-stage')) {
      closeLightbox();
    }
  });

  // 11. Toast Notifications
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const iconClass = type === 'success' ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-info';

    toast.innerHTML = `
      <i class="${iconClass} toast-icon"></i>
      <div class="toast-msg">
        <h6>${type === 'success' ? 'Confirmed' : 'Notification'}</h6>
        <p>${message}</p>
      </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(50px)';
      setTimeout(() => toast.remove(), 350);
    }, 3800);
  }

  // 12. Forms Handling (Booking & Newsletter)
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Submitting...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
        showToast("Your session inquiry has been transmitted. Elena will contact you within 24 hours.", "success");
      }, 1200);
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('input[type="email"]');
      if (input && input.value) {
        showToast("Subscribed! You'll receive invitations to private exhibitions.", "success");
        input.value = '';
      }
    });
  }

  // 13. Initialize
  initTheme();
  renderGallery();
  galleryGrid.classList.add('masonry-view');
});

