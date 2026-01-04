/* ============================================
   DEMO DATA - IMAGE ASSETS
   
   WHERE IMAGES COME FROM:
   - Images are loaded from CodePen's S3 bucket
   - URL pattern: https://s3-us-west-2.amazonaws.com/s.cdpn.io/605876/{name}-sketch.svg
   - These are SVG sketch illustrations by @jh3y
   
   HOW TO USE YOUR OWN IMAGES:
   1. Add your image to the assets/Images folder
   2. Change the image URL in the loop below (around line 50)
   3. Or modify this array to use local paths:
   
   Example with local images:
   const DEMOS = [
     { name: 'MyProject', image: 'assets/Images/myimage.jpg', link: 'https://mysite.com' },
     { name: 'Another', image: 'assets/Images/another.png', link: '#' },
   ];
   
   Then update the img.src line to: img.src = demo.image;
============================================ */
const DEMOS = [
  { name: 'Kitkat', id: 'LYpNyvm' },
  { name: 'Newton', id: 'abzeaWJ' },
  { name: 'Launch', id: 'rNOqzbN' },
  { name: 'Birthday', id: 'BaobKOJ' },
  { name: 'Impossible', id: 'ZjLKGY' },
  { name: 'Care', id: 'RwPrOoz' },
  { name: 'Cubes', id: 'QWbRxXb' },
  { name: 'Elon', id: 'RwWMwvY' },
  { name: 'Gun', id: 'GRoKOyg' },
  { name: 'Moon', id: 'NWqemYK' },
  { name: 'Pokedex', id: 'eYpGQxr' },
  { name: 'Record', id: 'RwraKYZ' },
  { name: 'Tcannon', id: 'eYpmBxQ' },
  { name: 'Cloud', id: 'MWwRKvd' },
  { name: 'Fireflies', id: 'zYGQYWJ' },
  { name: 'Train', id: 'eYpdPWa' },
  { name: 'Pancake', id: 'jJVpWZ' },
  { name: 'Earth', id: 'aPzVme' },
  { name: 'Matryoshka', id: 'jOOYMLm' },
  { name: 'Truck', id: 'MWWowEb' }
];

/* ============================================
   DOM SETUP & PAGE GENERATION
   
   HOW TO CHANGE NUMBER OF PAGES:
   1. Change PAGES constant below (e.g., PAGES = 5 for 5 pages = 10 sides)
   2. Update --page-count in style.css to match (PAGES * 2)
   3. Make sure you have enough items in DEMOS array
   
   HOW THE PAGE STRUCTURE WORKS:
   - Each page has 2 sides: front (page__half--front) and back (page__half--back)
   - --page-index controls the stacking order (z-index)
   - Lower index = on top of the stack
============================================ */
const book = document.getElementById('book');
const PAGES = 15; // 15 page elements  → 30 content sides (change this to add/remove pages)
// Dynamically set page count for CSS calculations
document.documentElement.style.setProperty('--page-count', PAGES * 2);

// Update back cover's page-index dynamically
const backCover = document.querySelector('.book__cover--back');
backCover.style.setProperty('--page-index', PAGES + 2);
/* ============================================
   PAGE GENERATION LOOP
   
   This loop creates each page dynamically.
   Each iteration creates ONE page with TWO sides.
============================================ */
for (let p = 0; p < PAGES; p++) {
  const pageIndex = p + 2; // pages start after front cover (index 2..11)

  // Create the page container
  const page = document.createElement('div');
  page.className = 'book__page';
  page.style.setProperty('--page-index', pageIndex);

  /* ============================================
     FRONT SIDE OF PAGE (Right-hand page when open)
     
     ⬇️⬇️⬇️ PAGE CONTENT STARTS HERE ⬇️⬇️⬇️
     
     TO REMOVE ALL CONTENT: Delete everything between
     "if (idx1 < DEMOS.length) {" and its closing "}"
     
     TO ADD YOUR OWN CONTENT:
     - Text: frontHalf.innerHTML = '<p>Your text</p>';
     - Image: frontHalf.innerHTML = '<img src="assets/Images/yourimage.jpg">';
  ============================================ */
  const frontHalf = document.createElement('div');
  frontHalf.className = 'page__half page__half--front';
  const idx1 = p * 2; // 0, 2, 4... (indexes into DEMOS array)
  
  //1st page
  if (p === 0) {
    const demo = DEMOS[idx1];
    
    // Create clickable link
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    
    // Create image
    const img = document.createElement('img');
    // IMAGE SOURCE - Change this URL to use your own images:
    img.src = `assets/Images/Title.png`;
    img.className = 'title3';
    // For local images use: img.src = `assets/Images/${demo.name}.jpg`;
    img.alt = "title3";
    link.appendChild(img);
    frontHalf.appendChild(link);
  }

  if (p === 0) {
    const textContainer = document.createElement('div');
    textContainer.className = 'pers';
    textContainer.innerHTML = `
    <p class="name">Qelvin Joszeler D. Nagales</p>
      <p class="subject">WEBPROG</p>
      <p class="prof">Mr. Quesada</p>`;
    frontHalf.appendChild(textContainer);
  }

  //3rd page
  if (p === 1) {
    const textContainer = document.createElement('div');
    textContainer.className = 'terdpage';
    textContainer.innerHTML = `
    <p class="terd">Motto:</p>
    <p class="terd">"No Matter what happens, always choose to be happy and make others happy."</p>
    <p class="terd">Ambition/s:</p>
    <p class="terd">"A simple person with a big heart. Aspiring to become a CEO and billionaire. It might be unusual that I am in a tech course but I really want to be my own boss and create my own company."</p>`;
    frontHalf.appendChild(textContainer);
  }

if (p === 1) {
  // Create gallery container
  const gallery = document.createElement('div');
  gallery.className = 'gallery';
  
  // Array of your images with links
  const images = [
    { src: 'MSC.png', link: 'https://www.facebook.com/APCMSC' }, 
    { src: 'BAND.png', link: 'https://www.facebook.com/theapcband' },
    { src: 'SOAR.png', link: 'https://www.facebook.com/APCSOAR' },
    { src: 'GG.png', link: 'https://www.facebook.com/APCGamingGenesis' },
    { src: 'JISSA.png', link: 'https://www.facebook.com/APC.JISSA' }, 
    { src: 'JPCS.png', link: 'https://www.facebook.com/JPCSAPC' },
    { src: 'BRIDGE.png', link: 'https://www.facebook.com/apc.bridge' },
    { src: 'SoCIT.png', link: 'https://www.facebook.com/apc.socit' }
  ];
  
  // Loop through and create each image
  images.forEach(({ src, link }) => {
    const a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.rel = 'noreferrer noopener';
    
    const img = document.createElement('img');
    img.src = `assets/Images/ORGS/${src}`;
    img.className = 'gallery-img';
    img.alt = 'Gallery image';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.5, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.5, ease: 'power2.out' });
    });
    
    a.appendChild(img);
    gallery.appendChild(a);
  });
  
  frontHalf.appendChild(gallery);
}

if (p === 1) {
    const textContainer = document.createElement('div');
    textContainer.className = 'orgs-container';
    textContainer.innerHTML =`<p class="orgs">Organizations & Affiliations</p>`;
    frontHalf.appendChild(textContainer);
  }

if (p === 1) {
    const textContainer = document.createElement('div');
    textContainer.className = 'orgs-container';
    textContainer.innerHTML =`<p class="orgs">Organizations & Affiliations</p>`;
    frontHalf.appendChild(textContainer);
  }

if (p === 1) {
    const demo = DEMOS[idx1];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Organization.png`;
    img.className = 'org-logo';
    img.alt = "org-logo";
    link.appendChild(img);
    frontHalf.appendChild(link);
  }

  // Friends photo grid on page 1
  if (p === 1) {
    const grid = document.createElement('div');
    grid.className = 'friends-grid';
    
    const friendImages = [
      { src: 'img (1).jpg', className: 'friend-img-1' },
      { src: 'img (2).jpg', className: 'friend-img-2' },
      { src: 'img (3).jpg', className: 'friend-img-3' },
      { src: 'img (4).jpg', className: 'friend-img-4' },
      { src: 'img (5).jpg', className: 'friend-img-5' },
      { src: 'img (6).jpg', className: 'friend-img-6' }
    ];
    
    friendImages.forEach(({ src, className }) => {
      const img = document.createElement('img');
      img.src = `assets/Images/Friends/${src}`;
      img.className = className;
      img.alt = 'Friend photo';
      img.addEventListener('mouseenter', () => {
        gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.5, ease: 'power2.out' });
      });
      img.addEventListener('mouseleave', () => {
        gsap.to(img, { scale: 1, rotation: 0, duration: 0.5, ease: 'power2.out' });
      });
      img.addEventListener('click', () => openModal(img.src));
      grid.appendChild(img);
    });
    
    frontHalf.appendChild(grid);
  }

  // ========== END OF FRONT PAGE CONTENT ==========
  const pageNum1 = document.createElement('span');
  pageNum1.className = 'page__number';
  pageNum1.textContent = idx1 + 1; // 1, 3, 5...
  frontHalf.appendChild(pageNum1);

  /* ============================================
     BACK SIDE OF PAGE (Left-hand page when open)
     
     ⬇️⬇️⬇️ PAGE CONTENT STARTS HERE ⬇️⬇️⬇️
     
     Same as front side - delete or modify the block below
  ============================================ */
  const backHalf = document.createElement('div');
  backHalf.className = 'page__half page__half--back';
  const idx2 = p * 2 + 1; // 1, 3, 5... (odd indexes for back sides)
  
  // ========== BACK PAGE CONTENT - DELETE OR MODIFY THIS BLOCK ==========

  //2nd page - BACK SIDE
  if (p === 0) {
    const demo = DEMOS[idx2];
    
    // Create clickable link
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    
    // Create image
    const img = document.createElement('img');
    img.src = `assets/Images/ME/Orig.png`;
    img.className = 'dp';
    img.alt = "dp";
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.5, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 0) {
    const textContainer = document.createElement('div');
    textContainer.className = 'page-text';
    textContainer.innerHTML = `
      <h2 class="page-title">I'm Qelvin!</h2>
      <p class="page-subtitle">Aspiring CEO & Billionaire</p>
      <p class="page-description">It's a pleasure to meet you!</p>`;
    backHalf.appendChild(textContainer);
  }
  
  if (p === 0) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Cam.png`;
    img.className = 'cam';
    img.alt = 'cam';
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 0) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.href = ``;
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Bulb.png`;
    img.className = 'bulb';
    img.alt = 'bulb';
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 0) {
    const textContainer = document.createElement('div');
    textContainer.className = 'GTKM-container';
    textContainer.innerHTML = `<h2 class="GTKM">Get To Know Me</h2>`;
    backHalf.appendChild(textContainer);
  }

  if (p === 0) {
    const textContainer = document.createElement('div');
    textContainer.className = 'about';
    textContainer.innerHTML = `<p class="abt">Name: Qelvin Joszeler D. Nagales</p>`;
    textContainer.innerHTML += `<p class="abt">Age: 19 years old</p>`;
    textContainer.innerHTML += `<p class="abt">Birthday: April 20, 2006</p>`;
    textContainer.innerHTML += `<p class="abt">City: Manila City</p>`;
    textContainer.innerHTML += `<p class="abt">School: Asia Pacific College - SoCIT</p>`;
    textContainer.innerHTML += `<p class="abt">Course: Bachelor of Science in Information Technology</p>`;
    textContainer.innerHTML += `<p class="abt">Hobbies: Playing Video Games, Watching Movies/Series, Listening to Music, Reading books</p>`;
    backHalf.appendChild(textContainer);
  }

  if (p === 0) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Star.png`;
    img.className = 'star';
    img.alt = 'star';
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 0) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Star.png`;
    img.className = 'star2';
    img.alt = 'star2';
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 0) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Star.png`;
    img.className = 'star3';
    img.alt = 'star3';
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 0) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Clover.png`;
    img.className = 'clove2';
    img.alt = 'clove2';
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 0) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Heart2.png`;
    img.className = 'hearts';
    img.alt = 'hearts';
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 0) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.href = `https://apc.edu.ph/`;
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Logo/APC.png`;
    img.className = 'apc';
    img.alt = 'apc seal';
    
    // Hover animation using GSAP
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 5, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    
    link.appendChild(img);
    backHalf.appendChild(link);
  }

   if (p === 0) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Controller.png`;
    img.className = 'vg';
    img.alt = 'vg';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.5, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 2, duration: 0.5, ease: 'power2.out' });
    });
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 0) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Music1.png`;
    img.className = 'music';
    img.alt = 'music';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 5, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 0) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Books.png`;
    img.className = 'books';
    img.alt = 'books';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 5, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 0) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Logo/Marvel.png`;
    img.className = 'marvel';
    img.alt = 'marvel';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 5, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  const pageNum2 = document.createElement('span');
  pageNum2.className = 'page__number';
  pageNum2.textContent = idx2 + 1; // 2, 4, 6...
  backHalf.appendChild(pageNum2);
  // ========== END OF BACK PAGE CONTENT ==========

  // Add halves to page
  page.appendChild(frontHalf);
  page.appendChild(backHalf);

  // Insert before back cover
  const backCover = document.querySelector('.book__cover--back');
  book.insertBefore(page, backCover);
}

/* ============================================
   GSAP SCROLL ANIMATIONS
   
   HOW THE ANIMATION WORKS:
   - GSAP is a powerful animation library
   - ScrollTrigger links animations to scroll position
   - scrub: 1 means smooth animation tied to scroll
   
   HOW TO ADJUST ANIMATION SPEED:
   - Increase --page-scroll in CSS for slower flips
   - Change the 0.25 multiplier below for timing
============================================ */
const { gsap, ScrollTrigger } = window;

gsap.registerPlugin(ScrollTrigger);

/* ============================================
   BOOK SCALE ANIMATION
   - Book starts at 80% size and scales to 120%
   - Happens during the first 25% of scroll
   
   To change starting size: Edit scale(0.8) in style.css .book
   To change end size: Edit scale: 1.2 below
============================================ */
gsap.to('.book', {
  scrollTrigger: {
    scrub: 1,        // Smooth scroll-linked animation
    start: () => 0,  // Start at top of page
    end: () => window.innerHeight * 0.25  // End after 25% scroll
  },
  scale: 1.2  // Final scale (1.2 = 120%)
});

// Fade in logo on last pages
gsap.to('.logo', {
  scrollTrigger: {
    scrub: true,
    start: () => 13.5 * (window.innerHeight * 0.25),
    end: () => 14 * (window.innerHeight * 0.25)
  },
  opacity: 1
});

/* ============================================
   PAGE FLIP ANIMATIONS
   
   HOW IT WORKS:
   - Each page rotates on the Y-axis (like a real book)
   - transform-origin is set to the left edge (spine)
   - Z-depth changes to layer pages correctly
   
   HOW TO ADJUST:
   - rotateY: Controls how far pages flip (180 = full flip)
   - z values: Control depth stacking
   - start/end: When in the scroll the flip happens
============================================ */
const pageElements = [...document.querySelectorAll('.book__page')];

pageElements.forEach((page, index) => {
  // Set initial z position (depth) for proper stacking
  gsap.set(page, { z: index === 0 ? 13 : -index * 1 });
  
  // Skip the back cover - it doesn't flip
  if (page.classList.contains('book__cover--back')) return;
  
  // PAGE FLIP ANIMATION
  // Rotates the page around the Y-axis (spine)
  gsap.to(page, {
    rotateY: `-=${180 - index / 2}`,  // Rotation amount
    scrollTrigger: {
      scrub: 1,
      start: () => (index + 1) * (window.innerHeight * 0.25),  // When flip starts
      end: () => (index + 2) * (window.innerHeight * 0.25)     // When flip ends
    }
  });

  // Z-DEPTH ANIMATION
  // Moves page forward/backward for proper layering
  gsap.to(page, {
    z: index === 0 ? -13 : index,
    scrollTrigger: {
      scrub: 1,
      start: () => (index + 1) * (window.innerHeight * 0.25),
      end: () => (index + 1.5) * (window.innerHeight * 0.25)
    }
  });
});

/* ============================================
   QUICK REFERENCE - COMMON CUSTOMIZATIONS:
   
   1. CHANGE BOOK COLORS: Edit :root variables in style.css
   2. ADD MORE PAGES: Increase PAGES constant above
   3. USE YOUR OWN IMAGES: Change img.src URLs above
   4. ADD TEXT TO PAGES: Use innerHTML or createElement
   5. CHANGE ANIMATION SPEED: Modify --page-scroll in CSS
   6. EDIT COVER: Modify the HTML in index.html
============================================ */

/* Progress Bar */
const progressBar = document.querySelector('.progress-bar');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  // Adjust end point to match last page flip (before back cover)
  const totalPages = PAGES + 1; // All pages except back cover
  const endPoint = totalPages * (window.innerHeight * 0.25);
  const scrollPercent = Math.min((scrollTop / endPoint) * 100, 100);
  
  if (progressBar) {
    progressBar.style.width = scrollPercent + '%';
  }
});

/* ============================================
   MODAL / LIGHTBOX FUNCTION
   Simple modal popup similar to CodePen pattern
============================================ */
function openModal(imgSrc) {
  // Create modal overlay
  const modal = document.createElement('div');
  modal.className = 'modal';
  
  // Create modal content container
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';
  
  // Create image
  const img = document.createElement('img');
  img.src = imgSrc;
  img.className = 'modal-img';
  
  // Append elements
  modalContent.appendChild(img);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Show modal with slight delay for animation
  requestAnimationFrame(() => {
    modal.classList.add('active');
  });
  
  // Close when clicking anywhere except the image itself
  modal.addEventListener('click', (e) => {
    if (e.target !== img) {
      closeModal(modal);
    }
  });
  
  // Close on Escape key
  const escHandler = (e) => {
    if (e.key === 'Escape') {
      closeModal(modal);
      document.removeEventListener('keydown', escHandler);
    }
  };
  document.addEventListener('keydown', escHandler);
}

function closeModal(modal) {
  modal.classList.remove('active');
  setTimeout(() => modal.remove(), 300);
}

