///////// GSAP /////////

ScrollTrigger.defaults({
  //toggleActions: "restart pause resume pause",
  scroller: ".container",
});

let tl = gsap.timeline();

let tl1 = gsap.timeline({
  scrollTrigger: {
    start: "-15%",
    trigger: ".about",
  },
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    start: "-15%",
    trigger: ".project_1",
  },
});

let tl3 = gsap.timeline({
  scrollTrigger: {
    start: "-15%",
    trigger: ".project_2",
  },
});

let tl4 = gsap.timeline({
  scrollTrigger: {
    start: "-15%",
    trigger: ".project_3",
  },
});

let tl5 = gsap.timeline({
  scrollTrigger: {
    start: "-15%",
    trigger: ".contact",
  },
});

tl.to("section.header .colored__red", {
  duration: 0.3,
  yPercent: -101,
  ease: "power.inOut",
})
  .to("section.header .colored__green", {
    duration: 0.3,
    yPercent: -101,
    ease: "power.inOut",
  })
  .to("section.header .colored__yellow", {
    duration: 0.3,
    yPercent: -101,
    ease: "power.inOut",
  })
  .from("section.header h1 span", {
    y: -200,
    opacity: 0,
    stagger: 0.05,
    ease: "power.inOut",
  })
  .from("section.header h3", { duration: 1, opacity: 0 }, ">-0.1");

tl1.from("section.about h3", { duration: 1, opacity: 0 });

tl2
  .to("section.project_1 .text-area .project-desc h3 span", {
    xPercent: -101,
    ease: "power",
  })
  .to(
    "section.project_1 .text-area .project-desc p span",
    {
      xPercent: -101,
      ease: "power1",
    },
    "<+0.1"
  )
  .to(
    "section.project_1 .text-area .project-desc ul span",
    {
      xPercent: -101,
      ease: "power1",
    },
    "<+0.1"
  )
  .to(
    "section.project_1 .showcase .img-wrap .overlay span",
    {
      xPercent: -201,
      ease: "power1",
    },
    "<"
  )
  .from(
    "section.project_1 .text-area .project-desc button.btn",
    {
      duration: 1,
      opacity: 0,
      ease: "power1",
    },
    ">-0.1"
  );

tl3
  .to("section.project_2 .text-area .project-desc h3 span", {
    xPercent: -101,
  })
  .to(
    "section.project_2 .text-area .project-desc p span",
    {
      xPercent: -101,
    },
    "<+0.1"
  )
  .to(
    "section.project_2 .text-area .project-desc ul span",
    {
      xPercent: -101,
    },
    "<+0.1"
  )
  .to(
    "section.project_2 .showcase .img-wrap .overlay span",
    {
      xPercent: -201,
    },
    "<"
  )
  .from(
    "section.project_2 .text-area .project-desc button.btn",
    {
      duration: 1,
      opacity: 0,
      ease: "power1",
    },
    ">-0.1"
  );

tl4
  .to("section.project_3 .text-area .project-desc h3 span", {
    xPercent: -101,
  })
  .to(
    "section.project_3 .text-area .project-desc p span",
    {
      xPercent: -101,
    },
    "<+0.1"
  )
  .to(
    "section.project_3 .text-area .project-desc ul span",
    {
      xPercent: -101,
    },
    "<+0.1"
  )
  .to(
    "section.project_3 .showcase .img-wrap .overlay span",
    {
      xPercent: -201,
    },
    "<"
  )
  .from(
    "section.project_3 .text-area .project-desc button.btn",
    {
      duration: 1,
      opacity: 0,
      ease: "power1",
    },
    ">-0.1"
  );

tl5
  .to("section.contact .text-area .project-desc h3 span", {
    xPercent: -101,
  })
  .to(
    "section.contact .contact-links ul span",
    {
      xPercent: -101,
    },
    "<+0.2"
  );
//   .to(
//     "section.contact .text-area .project-desc p span",
//     {
//       xPercent: -101,
//     },
//     "<+0.1"
//   )
//   .to(
//     "section.contact .text-area .project-desc ul span",
//     {
//       xPercent: -101,
//     },
//     "<+0.1"
//   )
//   .to(
//     "section.contact .showcase .img-wrap .overlay span",
//     {
//       xPercent: -101,
//     },
//     "<"
//   );

///////// HOVER /////////

const btn1 = document.querySelector(
  "section.project_1 .text-area .project-desc button.btn"
);

const btn2 = document.querySelector(
  "section.project_2 .text-area .project-desc button.btn"
);

const btn3 = document.querySelector(
  "section.project_3 .text-area .project-desc button.btn"
);

const icons = document.querySelectorAll(".contact-links ul li a i");

if (btn1 != null) {
  let hover = gsap.to(btn1, { scale: 1.03, duration: 0.2, paused: true });
  btn1.addEventListener("mouseenter", () => hover.play());
  btn1.addEventListener("mouseleave", () => hover.reverse());
}

if (btn2 != null) {
  let hover2 = gsap.to(btn2, { scale: 1.03, duration: 0.2, paused: true });
  btn2.addEventListener("mouseenter", () => hover2.play());
  btn2.addEventListener("mouseleave", () => hover2.reverse());
}

if (btn3 != null) {
  let hover3 = gsap.to(btn3, { scale: 1.03, duration: 0.2, paused: true });
  btn3.addEventListener("mouseenter", () => hover3.play());
  btn3.addEventListener("mouseleave", () => hover3.reverse());
}

gsap.utils.toArray(icons).forEach((icon) => {
  let hover4 = gsap.to(icon, { scale: 1.03, duration: 0.2, paused: true });
  icon.addEventListener("mouseenter", () => hover4.play());
  icon.addEventListener("mouseleave", () => hover4.reverse());
});
