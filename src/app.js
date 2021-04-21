Loader();
ScrollAnime();

function Loader() {
  window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-con');
    setTimeout(function () {
      loader.classList.add('loader-finish');
    }, 3000);
  });
}

function ScrollAnime() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-2  ',
      start: '-=600',
    },
  });
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-4 .slide-1 ',
      start: '+=5',
    },
  });
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-4 .slide-2 ',
      start: '-=500',
    },
  });
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: '.section-4 .slide-3 ',
      start: '-=500',
    },
  });
  let tl5 = gsap.timeline({
    scrollTrigger: {
      trigger: '.cash ',
      start: '-=500',
    },
  });

  tl.from('.section-2', {
    y: 200,
    opacity: 0,
    duration: 2,
    ease: 'elastic.out',
  });

  tl2.from('.section-4 .slide-1 .intro', { x: -5, opacity: 0, duration: 1.5 });
  tl2.from(
    '.section-4 .slide-1 .content',
    { x: 5, opacity: 0, duration: 1.5 },
    '-=1'
  );
  tl3.from('.section-4 .slide-2 .intro', { x: -5, opacity: 0, duration: 1.5 });
  tl3.from(
    '.section-4 .slide-2 .content',
    { x: 5, opacity: 0, duration: 1.5 },
    '-=1'
  );
  tl4.from('.section-4 .slide-3 .intro', { x: -5, opacity: 0, duration: 1.5 });
  tl4.from(
    '.section-4 .slide-3 .content',
    { x: 5, opacity: 0, duration: 1.5 },
    '-=1'
  );

  tl5.from('.cash, .faq', {
    y: 200,
    opacity: 0,
    duration: 2,
    ease: 'elastic.out',
  });
}
