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
const PAGES = 10; // 10 page elements  → 20 content sides (change this to add/remove pages)
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
    { src: 'Band.png', link: 'https://www.facebook.com/theapcband' },
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
  
  //5th page
   if (p === 2) {
    const demo = DEMOS[idx1];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Skills.png`;
    img.className = 'skills';
    img.alt = 'skills';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 5, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    frontHalf.appendChild(link);
  }
  if (p === 2) {
    const textContainer = document.createElement('div');
    textContainer.className = 'projs';
    textContainer.innerHTML = `<h2 class="projs-title">My Skills and Projects</h2>`;
    frontHalf.appendChild(textContainer);
  }

   if (p === 2) {
    const demo = DEMOS[idx1];
    const link = document.createElement('a');
    link.href = `https://soar-shirt-shop.vercel.app/`;
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/PROJECTS/SOAR-SHIRT.png`;
    img.className = 'SOAR-proj';
    img.alt = 'SOAR-proj';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    frontHalf.appendChild(link);
  }

  if (p === 2) {
    const demo = DEMOS[idx1];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/PROJECTS/SOAR SHIRT (1).png`;
    img.className = 'Soarshirt';
    img.alt = 'Soarshirt';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 5, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation:10, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    frontHalf.appendChild(link);
  }

  if (p === 2) {
    const textContainer = document.createElement('div');
    textContainer.className = 'Soar-text';
    textContainer.innerHTML = `<p2 class="soar-desc">SOAR SHIRT ORDERING SYSTEM</p2>`;
    frontHalf.appendChild(textContainer);
  }
  
  if (p === 2) {
    const demo = DEMOS[idx1];
    const link = document.createElement('a');
    link.href = `https://apcband.vercel.app/`;
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/PROJECTS/APC BAND.png`;
    img.className = 'Band-proj';
    img.alt = 'Band-proj';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    frontHalf.appendChild(link);
  }

  if (p === 2) {
    const demo = DEMOS[idx1];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/ORGS/Band.png`;
    img.className = 'Bandcon';
    img.alt = 'Bandcon';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 5, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: -5, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    frontHalf.appendChild(link);
  }

  if (p === 2) {
    const textContainer = document.createElement('div');
    textContainer.className = 'Band-text';
    textContainer.innerHTML = `<p2 class="Band-desc">APC BAND TICKETING SYSTEM</p2>`;
    frontHalf.appendChild(textContainer);
  }

  if (p === 2) {
    const demo = DEMOS[idx1];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/PROJECTS/SOCIT-MERCH.png`;
    img.className = 'socit-proj';
    img.alt = 'socit-proj';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('click', () => openModal(img.src));
    link.appendChild(img);
    frontHalf.appendChild(link);
  }

  if (p === 2) {
    const demo = DEMOS[idx1];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/PROJECTS/SoCIT Merchs.png`;
    img.className = 'socitmerchs';
    img.alt = 'socitmerchs';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: -5, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 5  , duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    frontHalf.appendChild(link);
  }

  if (p === 2) {
    const textContainer = document.createElement('div');
    textContainer.className = 'socit-text';
    textContainer.innerHTML = `<p2 class="socit-desc">SOCIT MERCHANDISE(in progress...)</p2>`;
    frontHalf.appendChild(textContainer);
  }

  //7th page
  if (p === 3) {
    const demo = DEMOS[idx1];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/ME/Kalbo.png`;
    img.className = 'kalbo';
    img.alt = 'kalbo';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 5, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    frontHalf.appendChild(link);
  }
  if (p === 3) {
    const textContainer = document.createElement('div');
    textContainer.className = 'funfacts-container';
    textContainer.innerHTML = `<h2 class="funfacts-title">Fun Facts about Me</h2>`;
    frontHalf.appendChild(textContainer);
  }

  if (p === 3) {
    const textContainer = document.createElement('div');
    textContainer.className = 'sponty';
    textContainer.innerHTML = `
      <p class="sponty-title">I am a very spontaneous person.</p>
      <p class="sponty-title">I tend to do things without planning it first.</p>
      <p class="sponty-title">I like to go out and hang out with my friends.</p>`;
    frontHalf.appendChild(textContainer); 
  }

  if (p === 3) {
    const demo = DEMOS[idx1];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Friends/img (7).jpg`;
    img.className = 'sponty-pic';
    img.alt = 'sponty-pic';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    frontHalf.appendChild(link);
  }

  if (p === 3) {
    const demo = DEMOS[idx1];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Friends/img (8).jpg`;
    img.className = 'sponty-pic2';
    img.alt = 'sponty-pic2';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    frontHalf.appendChild(link);
  }

  if (p === 3) {
    const demo = DEMOS[idx1];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Friends/img (10).jpg`;
    img.className = 'sponty-pic3';
    img.alt = 'sponty-pic3';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    frontHalf.appendChild(link);
  }

  // ========== PAGE 7 (p=3 front) SUBTLE DECORATIONS ==========
  if (p === 3) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Heart1.png';
    img.className = 'heart-p7';
    img.alt = 'heart';
    frontHalf.appendChild(img);
  }
  if (p === 3) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Spark3.png';
    img.className = 'spark-p7';
    img.alt = 'spark';
    frontHalf.appendChild(img);
  }

  //9th page
  if (p === 4) {
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Tear1.png`;
    img.className = 'tear1';
    img.alt = 'tear';
    frontHalf.appendChild(img);
  }
  if (p === 4) {
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/FEMINISM.jpg`;
    img.className = 'feminism';
    img.alt = 'feminism';
    frontHalf.appendChild(img);
  }
  if (p === 4) {
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/EARPHONES.png`;
    img.className = 'ephones';
    img.alt = 'ephones';
    frontHalf.appendChild(img);
  }

  if (p === 4) {
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/TOTEBAG.png`;
    img.className = 'totebag';
    img.alt = 'totebag';
    frontHalf.appendChild(img);
  }

  // ========== PAGE 9 (p=4 front) SUBTLE DECORATIONS ==========
  if (p === 4) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Spark5.png';
    img.className = 'spark-p9';
    img.alt = 'spark';
    frontHalf.appendChild(img);
  }
  if (p === 4) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Cherry.png';
    img.className = 'cherry-p9';
    img.alt = 'cherry';
    frontHalf.appendChild(img);
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
    img.src = `assets/Images/LOGO/APC.png`;
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
    img.src = `assets/Images/LOGO/Marvel.png`;
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

  //4th page - BACK SIDE
  if (p === 1) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Skills.png`;
    img.className = 'skills';
    img.alt = 'skills';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 5, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 1) {
    const textContainer = document.createElement('div');
    textContainer.className = 'arsenal';
    textContainer.innerHTML = `<h2 class="arsenal-title">My Skills and Projects</h2>`;
    backHalf.appendChild(textContainer);
  }

  if (p === 1) {
    const grid = document.createElement('div');
    grid.className = 'skills-grid';
    
    const skillsImage = [
      { src: 'HTML.png', className: 'Skill-1' },
      { src: 'CSS.png', className: 'Skill-2' },
      { src: 'JAVASCRIPT.png', className: 'Skill-3' },
      { src: 'Python.png', className: 'Skill-4' },
      { src: 'JAVA.png', className: 'Skill-5' },
      { src: 'MYSQL.png', className: 'Skill-6' },
      { src: 'POWERAPPS.png', className: 'Skill-7' },
      { src: 'SUPABASE.png', className: 'Skill-8' },
      { src: 'GIT.png', className: 'Skill-9' },
      { src: 'FLUTTER.png', className: 'Skill-10' },
      { src: 'REACT.png', className: 'Skill-11' },
      { src: 'CANVA.png', className: 'Skill-12' },
      { src: 'WORD.png', className: 'Skill-13' },
      { src: 'EXCEL.png', className: 'Skill-14' },
      { src: 'FIGMA.png', className: 'Skill-15' }
    ];
    
    skillsImage.forEach(({ src, className }) => {
      const img = document.createElement('img');
      img.src = `assets/Images/LOGO/${src}`;
      img.className = className;
      img.alt = 'Skills image';
      img.addEventListener('mouseenter', () => {
        gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.5, ease: 'power2.out'});
      });
      img.addEventListener('mouseleave', () => {
        gsap.to(img, { scale: 1, rotation: 0, duration: 0.5, ease: 'power2.out'});
      });
      grid.appendChild(img);
    });
    
    backHalf.appendChild(grid);
  }
  //6th page - BACK SIDE
  if (p === 2) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/ME/Kalbo.png`;
    img.className = 'kalbo';
    img.alt = 'kalbo';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    backHalf.appendChild(link);
  }
  if (p === 2) {
    const textContainer = document.createElement('div');
    textContainer.className = 'funfacts-container';
    textContainer.innerHTML = `<h2 class="funfacts-title">Fun Facts about Me</h2>`;
    backHalf.appendChild(textContainer);
  }
  if (p === 2) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/ME/Lean.png`;
    img.className = 'lean';
    img.alt = 'lean';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 2) {
    const textContainer = document.createElement('div');
    textContainer.className = 'pres-container';
    textContainer.innerHTML = `
      <p class="pres1">President of</p>
      <p class="pres1">APC - Microsoft Community</p>
      <p class="pres1">S.Y. 2025 - 2026</p>`;
    backHalf.appendChild(textContainer);
  }

  if (p === 2) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Cat.png`;
    img.className = 'cat';
    img.alt = 'cat';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: -15, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    backHalf.appendChild(link);
  }
  if (p === 2) {
    const textContainer = document.createElement('div');
    textContainer.className = 'cat-text-container';
    textContainer.innerHTML = `
      <p class="cat1">We have 13 adopted cats</p>
      <p class="cat1">in our house</p>`;
    backHalf.appendChild(textContainer);
  }

  if (p === 2) {
    const textContainer = document.createElement('div');
    textContainer.className = 'cat-text-container';
    textContainer.innerHTML = `
      <p class="cat1">We have 13 adopted cats</p>
      <p class="cat1">in our house</p>`;
    backHalf.appendChild(textContainer);
  }

  if (p === 2) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/ME/singing.png`;
    img.className = 'singing';
    img.alt = 'singing';
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 2) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/ME/singing2.png`;
    img.className = 'singing2';
    img.alt = 'singing2';
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 2) {
    const textContainer = document.createElement('div');
    textContainer.className = 'singing-text-container';
    textContainer.innerHTML = `
      <p class="sing">I am a vocalist of</p>
      <p class="sing">the APC Band</p>`;
    backHalf.appendChild(textContainer);
  }

  // ========== PAGE 6 (p=2 back) SUBTLE DECORATIONS ==========
  if (p === 2) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Star.png';
    img.className = 'star-p6';
    img.alt = 'star';
    backHalf.appendChild(img);
  }
  if (p === 2) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Spark2.png';
    img.className = 'spark-p6';
    img.alt = 'spark';
    backHalf.appendChild(img);
  }

  //8th page - BACK SIDE
  if (p === 3) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Like.png`;
    img.className = 'like';
    img.alt = 'like';
    img.addEventListener('mouseenter', () => {
      gsap.to(img, { scale: 1.15, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    img.addEventListener('mouseleave', () => {
      gsap.to(img, { scale: 1, rotation: 0, duration: 0.3, ease: 'power2.out' });
    });
    link.appendChild(img);
    backHalf.appendChild(link);
  }
  if (p === 3) {
    const textContainer = document.createElement('div');
    textContainer.className = 'like-container';
    textContainer.innerHTML = `<h2 class="likes">MY FAVORITES</h2>`;
    backHalf.appendChild(textContainer);
  }
  if (p === 3) {
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Tear2.png`;
    img.className = 'tear2';
    img.alt = 'tear2';
    backHalf.appendChild(img);
  }
  if (p === 3) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/CHEESE.png`;
    img.className = 'cheese';
    img.alt = 'cheese';
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 3) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/BED.png`;
    img.className = 'bed';
    img.alt = 'bed';
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  if (p === 3) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/CLAIRO.png`;
    img.className = 'clairo';
    img.alt = 'clairo';
    link.appendChild(img);
    backHalf.appendChild(link);
  }
  if (p === 3) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/MATCHA.png`;
    img.className = 'matcha';
    img.alt = 'matcha';
    link.appendChild(img);
    backHalf.appendChild(link);
  }
if (p === 3) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/QZIP.png`;
    img.className = 'qzip';
    img.alt = 'qzip';
    link.appendChild(img);
    backHalf.appendChild(link);
  }
  if (p === 3) {
    const demo = DEMOS[idx2];
    const link = document.createElement('a');
    link.target = '_blank';
    link.rel = 'noreferrer noopener';
    const img = document.createElement('img');
    img.src = `assets/Images/Doodles and stickers/Flowers2.png`;
    img.className = 'flowers2';
    img.alt = 'flowers2';
    link.appendChild(img);
    backHalf.appendChild(link);
  }

  // ========== PAGE 8 (p=3 back) SUBTLE DECORATIONS ==========
  if (p === 3) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Spark1.png';
    img.className = 'spark-p8';
    img.alt = 'spark';
    backHalf.appendChild(img);
  }
  if (p === 3) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Star.png';
    img.className = 'star-p8';
    img.alt = 'star';
    backHalf.appendChild(img);
  }

  if (p === 4) {
    const textContainer = document.createElement('div');
    textContainer.className = 'happiness';
    textContainer.innerHTML = 
    `<h2 class="happy">MY HAPPINESS</h2>
    <p class="gf">MY GIRLFRIEND</p>`;
    backHalf.appendChild(textContainer);
  }
  if (p === 4) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Tear3.png';
    img.className = 'tear3';
    img.alt = 'tear3';
    backHalf.appendChild(img);
  }
  if (p === 4) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Tear1.png';
    img.className = 'tear1p2';
    img.alt = 'tear1p2';
    backHalf.appendChild(img);

  } if (p === 4) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Tear3.png';
    img.className = 'tear3p2';
    img.alt = 'tear3';
    backHalf.appendChild(img);
  }
  if (p === 4) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/flower3.png';
    img.className = 'flowers3';
    img.alt = 'flowers3';
    backHalf.appendChild(img);
  }
  if (p === 4) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/flower3.png';
    img.className = 'flowers3p2';
    img.alt = 'flowers3';
    backHalf.appendChild(img);
  }
  if (p === 4) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Gwen/crop.png';
    img.className = 'gwen1';
    img.alt = 'shades';
    backHalf.appendChild(img);
  }
  if (p === 4) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Spark4.png';
    img.className = 'spark4';
    img.alt = 'spark4';
    backHalf.appendChild(img);
  }
  if (p === 4) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/flowers4.png';
    img.className = 'flowers4';
    img.alt = 'flowers4';
    backHalf.appendChild(img);
  }

  // ========== PAGE 11 (p=5 front) BACKGROUND ==========
  if (p === 5) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/flower3.png';
    img.className = 'flowers3';
    img.alt = 'flowers3';
    frontHalf.appendChild(img);
  }
  if (p === 5) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Spark4.png';
    img.className = 'spark4';
    img.alt = 'spark4';
    frontHalf.appendChild(img);
  }
  if (p === 5) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Tear3.png';
    img.className = 'tear3';
    img.alt = 'tear3';
    frontHalf.appendChild(img);
  }
  if (p === 5) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Cherry.png';
    img.className = 'cherry-deco';
    img.alt = 'cherry';
    frontHalf.appendChild(img);
  }
  if (p === 5) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Spark1.png';
    img.className = 'spark1-deco';
    img.alt = 'spark1';
    frontHalf.appendChild(img);
  }

  // ========== PAGE 12 (p=5 back) BACKGROUND ==========
  if (p === 5) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/flower3.png';
    img.className = 'flowers3p2';
    img.alt = 'flowers3';
    backHalf.appendChild(img);
  }
  if (p === 5) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Tear3.png';
    img.className = 'tear3p2';
    img.alt = 'tear3';
    backHalf.appendChild(img);
  }
  if (p === 5) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/flowers4.png';
    img.className = 'flowers4';
    img.alt = 'flowers4';
    backHalf.appendChild(img);
  }
  if (p === 5) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Crown.png';
    img.className = 'crown-deco';
    img.alt = 'crown';
    backHalf.appendChild(img);
  }
  if (p === 5) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Heart1.png';
    img.className = 'heart1-deco';
    img.alt = 'heart';
    backHalf.appendChild(img);
  }
  if (p === 5) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Arrow.png';
    img.className = 'arrow-deco';
    img.alt = 'arrow';
    backHalf.appendChild(img);
  }
  // ========== PAGE 12 (p=6 front) SPOTIFY & CONTENT ==========
// ========== PAGE 12 (p=6 front) SPOTIFY GALLERY ==========
if (p === 5) {
  const spotifyGallery = document.createElement('div');
  spotifyGallery.className = 'spotify-gallery-12';

  // Array of your 5 Spotify embed URLs
  const songs = [
    "https://open.spotify.com/embed/track/2LlOeW5rVcvl3QcPNPcDus?utm_source=generator", // Example 1
    "https://open.spotify.com/embed/track/5tlb0AxuzsMWL2GtEppXGX?utm_source=generator", // Example 2
    "https://open.spotify.com/embed/track/1ytElsSPsJ1GBqMfPYydRX?utm_source=generator", // Example 3
    "https://open.spotify.com/embed/track/312z6PZ8wwREck8613PkJk?utm_source=generator", // Example 4
    "https://open.spotify.com/embed/album/2T523YMzbCSM86LYZDCZLI?utm_source=generator"  // Example 5
  ];

  songs.forEach((link) => {
    const iframe = document.createElement('iframe');
    iframe.src = link;
    iframe.width = "100%";
    iframe.height = "80"; // Using compact players to fit 5 on one page
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading = "lazy";
    iframe.style.borderRadius = "12px";
    iframe.style.marginBottom = "10px";

    spotifyGallery.appendChild(iframe);
  });

  backHalf.appendChild(spotifyGallery);
}

if (p === 5) {
  const textContainer = document.createElement('div');
  textContainer.className = 'music-container';
  textContainer.innerHTML = `<h2 class="musicc">FAVORITE SONGS</h2>`;
  backHalf.appendChild(textContainer);
}
  
// ========== PAGE 11 (p=5 front) PHOTO GRID ==========
if (p === 5) {
  const grid = document.createElement('div');
  grid.className = 'photo-grid-11';
  
  const flowerImages = [
    { src: 'flower1.jpg' },
    { src: 'flower2.jpg' },
    { src: 'flower3.jpg' },
    { src: 'flower4.jpg' }
  ];
  
  flowerImages.forEach(({ src }) => {
    const img = document.createElement('img');
    img.src = `assets/Images/Gwen/${src}`;
    img.className = 'photo-grid-img-11';
    img.alt = 'Flower photo';
    
    // Keeping the modal functionality if you have it
    img.addEventListener('click', () => openModal(img.src));
    
    grid.appendChild(img);
  });
  
  frontHalf.appendChild(grid);
}

  // ========== PAGE 13 (p=6 front) BACKGROUND ==========
  if (p === 6) {
    // Decorative elements
    const img1 = document.createElement('img');
    img1.src = 'assets/Images/Doodles and stickers/Spark4.png';
    img1.className = 'spark4';
    img1.alt = 'spark4';
    frontHalf.appendChild(img1);
    const img2 = document.createElement('img');
    img2.src = 'assets/Images/Doodles and stickers/Tear1.png';
    img2.className = 'tear1p2';
    img2.alt = 'tear1';
    frontHalf.appendChild(img2);
    const img3 = document.createElement('img');
    img3.src = 'assets/Images/Doodles and stickers/flower3.png';
    img3.className = 'flowers3';
    img3.alt = 'flowers3';
    frontHalf.appendChild(img3);
  }

  if (p === 6) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Gwen/couple2.png';
    img.className = 'couple2';
    img.alt = 'couple2';
    frontHalf.appendChild(img);
  }
  // ========== PAGE 14 (p=6 back) BACKGROUND ==========
  if (p === 6) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Tear3.png';
    img.className = 'tear3p2';
    img.alt = 'tear3';
    backHalf.appendChild(img);
  }
  if (p === 6) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/flowers4.png';
    img.className = 'flowers4';
    img.alt = 'flowers4';
    backHalf.appendChild(img);
  }
  if (p === 6) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/flower3.png';
    img.className = 'flowers3p2';
    img.alt = 'flowers3';
    backHalf.appendChild(img);
  }
  if (p === 6) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Spark2.png';
    img.className = 'spark2-deco';
    img.alt = 'spark2';
    backHalf.appendChild(img);
  }
  if (p === 6) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Music2.png';
    img.className = 'music2-deco';
    img.alt = 'music2';
    backHalf.appendChild(img);
  }
  if (p === 6) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/COJ.png';
    img.className = 'coj-deco';
    img.alt = 'coj';
    backHalf.appendChild(img);
  }

  // ========== PAGE 15 (p=7 front) BACKGROUND ==========
  if (p === 7) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/flower3.png';
    img.className = 'flowers3';
    img.alt = 'flowers3';
    frontHalf.appendChild(img);
  }
  if (p === 7) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Spark4.png';
    img.className = 'spark4';
    img.alt = 'spark4';
    frontHalf.appendChild(img);
  }
  if (p === 7) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Tear3.png';
    img.className = 'tear3';
    img.alt = 'tear3';
    frontHalf.appendChild(img);
  }
  if (p === 7) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/flowers4.png';
    img.className = 'flowers4';
    img.alt = 'flowers4';
    frontHalf.appendChild(img);
  }
  if (p === 7) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Flowers1.png';
    img.className = 'flowers1-deco';
    img.alt = 'flowers1';
    frontHalf.appendChild(img);
  }
  if (p === 7) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Trophy.png';
    img.className = 'trophy-deco';
    img.alt = 'trophy';
    frontHalf.appendChild(img);
  }
  if (p === 7) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Spark3.png';
    img.className = 'spark3-deco';
    img.alt = 'spark3';
    frontHalf.appendChild(img);
  }
  if (p === 7) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Curly.png';
    img.className = 'curly-deco';
    img.alt = 'curly';
    frontHalf.appendChild(img);
  }
  if (p === 7) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Arrow2.png';
    img.className = 'arrow2-deco';
    img.alt = 'arrow2';
    frontHalf.appendChild(img);
  }
  if (p === 7) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Flowers5.png';
    img.className = 'flowers5-deco';
    img.alt = 'flowers5';
    frontHalf.appendChild(img);
  }
  if (p === 7) {
    const img = document.createElement('img');
    img.src = 'assets/Images/Doodles and stickers/Spark5.png';
    img.className = 'spark5-deco';
    img.alt = 'spark5';
    frontHalf.appendChild(img);
  }
  
  // ========== RESOURCES PAGE (Page 13 Front) ==========
  if (p === 9) {
    const resourcesContainer = document.createElement('div');
    resourcesContainer.className = 'resources-container';
    resourcesContainer.innerHTML = `
      <h2 class="resources-title">Resources & Credits</h2>
      <div class="resources-content">
        <p class="resources-section"><strong>Libraries:</strong></p>
        <p class="resources-item">• GSAP - greensock.com/gsap</p>
        <p class="resources-item">• ScrollTrigger - greensock.com/scrolltrigger</p>
        <p class="resources-section"><strong>Fonts:</strong></p>
        <p class="resources-item">• Handlee - Google Fonts</p>
        <p class="resources-item">• Handelson Four - freefontdownload.org</p>
        <p class="resources-section"><strong>Inspiration:</strong></p>
        <p class="resources-item">• 3D Book Effect by @jh3y - CodePen</p>
        <p class="resources-item">• MDN Web Docs - CSS 3D Transforms</p>
      </div>
    `;
    frontHalf.appendChild(resourcesContainer);
  }

  // ========== RESOURCES PAGE (Page 13 Back) ==========
  if (p === 9) {
    const resourcesContainer2 = document.createElement('div');
    resourcesContainer2.className = 'resources-container';
    resourcesContainer2.innerHTML = `
      <h2 class="resources-title">AI & Tools</h2>
      <div class="resources-content">
        <p class="resources-section"><strong>AI Assistance:</strong></p>
        <p class="resources-item">• GitHub Copilot (Claude)</p>
        <p class="resources-item">• Used for code generation, debugging,</p>
        <p class="resources-item">  responsive design & validation fixes</p>
        <p class="resources-section"><strong>Development Tools:</strong></p>
        <p class="resources-item">• Visual Studio Code</p>
        <p class="resources-item">• Live Server Extension</p>
        <p class="resources-item">• Chrome DevTools</p>
        <p class="resources-section"><strong>Validators:</strong></p>
        <p class="resources-item">• W3C HTML/CSS Validators</p>
      </div>
    `;
    backHalf.appendChild(resourcesContainer2);
  }

  // ========== RESOURCES PAGE (Page 14 Front) ==========
  if (p === 9) {
    const resourcesContainer3 = document.createElement('div');
    resourcesContainer3.className = 'resources-container';
    resourcesContainer3.innerHTML = `
      <h2 class="resources-title">Images & Graphics</h2>
      <div class="resources-content">
        <p class="resources-section"><strong>Personal Photos:</strong></p>
        <p class="resources-item">• All photos owned by Qelvin Nagales</p>
        <p class="resources-section"><strong>Organization Logos:</strong></p>
        <p class="resources-item">• MSC, APC Band, SOAR, Gaming Genesis</p>
        <p class="resources-item">• JISSA, JPCS, BRIDGE, SoCIT</p>
        <p class="resources-section"><strong>Skill Logos:</strong></p>
        <p class="resources-item">• HTML, CSS, JS, Python, Java, MySQL</p>
        <p class="resources-item">• Figma, Canva, MS Office, React</p>
        <p class="resources-section"><strong>Decorative Elements:</strong></p>
        <p class="resources-item">• Various doodles & stickers</p>
      </div>
    `;
    frontHalf.appendChild(resourcesContainer3);
  }

  
  // ========== END OF BACK PAGE CONTENT ==========
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
   RESPONSIVE SCROLL MULTIPLIER
   - Adjusts scroll speed based on screen size
   - Smaller screens = faster page flips
============================================ */
function getScrollMultiplier() {
  const width = window.innerWidth;
  if (width <= 480) return 0.20;
  if (width <= 768) return 0.22;
  if (width <= 1024) return 0.24;
  return 0.25; // Desktop default
}

let scrollMultiplier = getScrollMultiplier();

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
    end: () => window.innerHeight * scrollMultiplier  // End after scroll
  },
  scale: 1.2  // Final scale (1.2 = 120%)
});

// Fade in logo on last pages
gsap.to('.logo', {
  scrollTrigger: {
    scrub: true,
    start: () => 13.5 * (window.innerHeight * scrollMultiplier),
    end: () => 14 * (window.innerHeight * scrollMultiplier)
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
      start: () => (index + 1) * (window.innerHeight * scrollMultiplier),  // When flip starts
      end: () => (index + 2) * (window.innerHeight * scrollMultiplier)     // When flip ends
    }
  });

  // Z-DEPTH ANIMATION
  // Moves page forward/backward for proper layering
  gsap.to(page, {
    z: index === 0 ? -13 : index,
    scrollTrigger: {
      scrub: 1,
      start: () => (index + 1) * (window.innerHeight * scrollMultiplier),
      end: () => (index + 1.5) * (window.innerHeight * scrollMultiplier)
    }
  });
});

/* ============================================
   WINDOW RESIZE HANDLER
   - Refreshes ScrollTrigger on resize for responsiveness
   - Debounced to prevent performance issues
============================================ */
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    scrollMultiplier = getScrollMultiplier();
    ScrollTrigger.refresh();
  }, 250);
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
  const endPoint = totalPages * (window.innerHeight * scrollMultiplier);
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

