function timeline1() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#home",
      start: "top top",
      scrub: 1,
      pin: true,
      end:"bottom -250%",
    },
  });

  tl.to(
    "#circle #btm img",
    {
      rotate: "-180deg",
      scale: 1,
      duration: 1,
      stagger: 0.1,
      ease: Power1,
    },
    "hello"
  )
    .to(
      "#circle #top img",
      {
        scale: 1,
        duration: 1,
        stagger: 0.1,
        ease: Power1,
      },
      "hello"
    )
    .to(
      "#cimage img",
      {
        scale: 0,
        duration: 1,
        stagger: 0.1,
        ease: Power1,
      },
      "hello"
    )
    .to(
      "#centerImg h5",
      {
        opacity: 0,
        duration: 0.1,
        ease: Power1,
      },
      "hello"
    )
    .to(
      "#gallery",
      {
        bottom: "-50%",
        duration: 1,
        ease: Power1,
      },
      "hello"
    )
    .to(
      "#pinkflare",
      {
        bottom: "6%",
        duration: 1,
        rotate: "0deg",
        ease: Power1,
      },
      "hello"
    )
    .to(
      "#gola",
      {
        top: "50%",
        scale: 5,
        duration: 1,
        ease: Power1,
      },
      "hello"
    )
    .to("#gola", {
      opacity: 0,
      duration: 1,
      ease: Power1,
    })
    .to(
      "#circle",
      {
        scale: 0.6,
        duration: 1,
        ease: Power1,
      },
      "hello"
    )
    .to(
      "#smcircle",
      {
        scale: 0,
        ease: Power1,
      },
      "hello1"
    )
    .to(
      "#circle",
      {
        scale: 0,
        ease: Power1,
      },
      "hello1"
    )
    .to(
      "#pinkbox",
      {
        top: "0%",
        ease: Power1,
        duration: 5,
      },
      "hello1"
    )
    .to("#pinkbox", {
      top: "-50%",
      ease: Power1,
      duration: 5,
    });
}

function timeline2() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#second",
      start: "top top",
      scrub: 1,
      pin: true,
      end:"bottom -250%",
    },
  });

  tl.to("#second #s_top .anda",{
    top:"50%",
    stagger:".1",
    duration:1,
    ease: Power1,
  })
  .to("#second #s_top .anda",{
    left:"50%",
  })
  .to("#second #s_top .anda",{
    scale:0.6,
  })
  .to("#second #s_top .anda",{
    scale:1,
  })
  .to("#second #s_top .anda",{
    scale:10,
  })
  .to("#s_top .anda:nth-child(1)",{
    background: "linear-gradient(to right, #d5a7b4,  #B4AAD5)",
  },"a")
  .to("#second #s_top #gradient",{
    left:"-200%",
    duration:5,
    ease: Power1,
  },"a")
  .to("#second #s_btm #txt1",{
    opacity:"0",
    duration:1,
    ease: Power1,
  },"a")
  .to("#second #s_btm #txt2",{
    opacity:"1",
    delay:1,
    ease: Power1,
  },"a")
}

timeline1();
timeline2();