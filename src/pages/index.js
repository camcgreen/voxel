import React, { useEffect } from "react"
import "../styles/styles.scss"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Block0Shard0 from "../images/shard-0-red.png"
import Block0Shard1 from "../images/shard-0-roof.png"
import Block0Shard2 from "../images/shard-0-city.png"
import Block0Shard3 from "../images/shard-0-taxi.png"
import Block0Shard4 from "../images/shard-0-people.png"
import Block2Shard0 from "../images/shard-2-green.png"
import Block2Shard1 from "../images/shard-2-plant.png"
import Block2Shard2 from "../images/shard-2-roof.png"
import Block2Shard3 from "../images/shard-2-people.png"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    //Logo and menu colour animation
    const wrapper = document.querySelector(".wrapper")

    const tlLogo = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        scrub: true,
        end: () => `+=${wrapper.offsetHeight}`,
      },
    })

    const tlMenu = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        scrub: true,
        end: () => `+=${wrapper.offsetHeight}`,
      },
    })

    tlLogo
      .to(".nav__logo path", { duration: 1, fill: "#fead4f", ease: "none" }, 0)
      .to(".nav__logo path", { duration: 1, fill: "#A4D7E4", ease: "none" }, 1)

    tlMenu
      .to(".nav__menu path", { duration: 1, fill: "#fead4f", ease: "none" }, 0)
      .to(".nav__menu path", { duration: 1, fill: "#A4D7E4", ease: "none" }, 1)

    // Parallax effect for shards
    wrapper.addEventListener("mousemove", e => {
      callParallax(e)
    })

    const parallaxElements0 = gsap.utils.toArray(".parallax0")
    const parallaxElements1 = gsap.utils.toArray(".parallax1")
    const parallaxElements2 = gsap.utils.toArray(".parallax2")
    const parallaxElements3 = gsap.utils.toArray(".parallax3")

    function callParallax(e) {
      parallaxElements0.forEach((parallaxElement, i) => {
        const magnitude = 25
        const factor = 1
        parallaxIt(e, parallaxElement, magnitude * (i + factor))
      })
      parallaxElements1.forEach((parallaxElement, i) => {
        const magnitude = 5
        const factor = 1
        parallaxIt(e, parallaxElement, magnitude * (i + factor))
      })
      parallaxElements2.forEach((parallaxElement, i) => {
        const magnitude = 25
        const factor = 1
        parallaxIt(e, parallaxElement, magnitude * (i + factor))
      })
      parallaxElements3.forEach((parallaxElement, i) => {
        const magnitude = 5
        const factor = 1
        parallaxIt(e, parallaxElement, magnitude * (i + factor))
      })
    }

    function parallaxIt(e, target, movement) {
      const rect = wrapper.getBoundingClientRect()
      var offset = {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
      }
      const relX = e.pageX - offset.left
      const relY = e.pageY - offset.top
      gsap.to(target, {
        x: ((relX - rect.width / 2) / rect.width) * movement,
        y: ((relY - rect.height / 2) / rect.height) * movement,
        ease: "Power2.easeOut",
      })
    }

    //Enter effects
    const enterElements0 = gsap.utils.toArray(".enter0")
    const enterElements1 = gsap.utils.toArray(".enter1")
    const enterElements2 = gsap.utils.toArray(".enter2")
    const enterElements3 = gsap.utils.toArray(".enter3")

    enterElements0.forEach((enterElement, i) => {
      gsap.from(enterElement, {
        // scale: 0.5,
        scale: 0,
        opacity: 0,
        skewY: -40,
        duration: 0.1 * (i + 15),
        ease: "expo.out",
        // scrollTrigger: {
        //   trigger: ".block--0",
        //   // start: "top 80%",
        //   // pin: true,
        //   end: "bottom 10%",
        //   scrub: true,
        // },
      })
    })

    enterElements1.forEach((enterElement, i) => {
      gsap.from(enterElement, {
        // scale: 0.5,
        // scale: 0,
        opacity: 0,
        skewY: -40,
        duration: 0.1 * (i + 15),
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".block--1",
          // start: "top 80%",
          // pin: true,
          // end: "bottom 50%",
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      })
    })

    enterElements2.forEach((enterElement, i) => {
      gsap.from(enterElement, {
        // scale: 0.5,
        scale: 0,
        // opacity: 0,
        skewY: -40,
        duration: 0.1 * (i + 15),
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".block--2",
          // start: "top 80%",
          // pin: true,
          end: "bottom 10%",
          scrub: true,
        },
      })
    })

    enterElements3.forEach((enterElement, i) => {
      gsap.from(enterElement, {
        // scale: 0.5,
        scale: 0,
        // opacity: 0,
        skewY: -40,
        duration: 0.1 * (i + 15),
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".block--3",
          // start: "top 80%",
          // pin: true,
          // end: "bottom 10%",
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      })
    })
  }, [])
  return (
    <div className="wrapper">
      <nav className="nav">
        <svg
          width="64"
          height="48"
          viewBox="0 0 64 48"
          fill="none"
          class="nav__logo"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M61.8906 47.7545H11.612C10.7861 47.7545 10.1055 47.3999 9.74873 46.7788C9.39193 46.1577 9.42277 45.3934 9.83463 44.6776L34.9739 1.13208C35.388 0.416271 36.0355 0.00660706 36.7513 0.00660706C37.4671 0.00660706 38.1147 0.416271 38.5287 1.13208L63.668 44.671C64.0799 45.3868 64.1085 46.1533 63.7539 46.7722C63.3993 47.3911 62.7165 47.7545 61.8906 47.7545ZM12.2133 45.3516H61.2871L36.7535 2.84342L12.2133 45.3516Z"
            fill="#FEAD4F"
          />
          <path
            d="M27.2476 47.7545C26.5318 47.7545 25.8842 47.3426 25.4702 46.6268L0.33308 3.07909C-0.0809887 2.36107 -0.107419 1.59461 0.244981 0.975705C0.59738 0.356804 1.28236 0 2.11049 0H52.3868C53.215 0 53.8934 0.356804 54.2524 0.975705C54.6114 1.59461 54.5783 2.36107 54.1643 3.07909L29.025 46.6202C28.6109 47.336 27.9634 47.7545 27.2476 47.7545ZM2.71177 2.39852L27.2454 44.8912L51.7856 2.3831L2.71177 2.39852Z"
            fill="#FEAD4F"
          />
        </svg>
        <svg
          width="32"
          height="20"
          viewBox="0 0 32 20"
          fill="none"
          class="nav__menu"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.70002 0H29.3002C30.7854 0 32 0.900501 32 2.00118C32 3.10185 30.7854 4.00255 29.3002 4.00255H2.70002C1.21511 4.00255 0 3.10205 0 2.00137C0 0.900501 1.21511 0 2.70002 0ZM2.70002 15.9976H29.3002C30.7854 15.9976 32 16.8981 32 17.9988C32 19.0995 30.7854 20 29.3002 20H2.70002C1.21511 20 0 19.0995 0 17.9988C0 16.8981 1.21511 15.9976 2.70002 15.9976ZM2.70002 7.99892H29.3002C30.7854 7.99892 32 8.89942 32 10.0001C32 11.1008 30.7854 12.0015 29.3002 12.0015H2.70002C1.21511 12.0015 0 11.1008 0 10.0001C0 8.89942 1.21511 7.99892 2.70002 7.99892Z"
            fill="#FEAD4F"
          />
        </svg>
      </nav>
      <main className="main">
        <section
          className="block block--0"
          // style={{ background: "lightblue" }}
        >
          <img
            src={Block0Shard0}
            alt=""
            className="enter0 parallax0 block--0__shard--0"
          />
          <img
            src={Block0Shard1}
            alt=""
            className="enter0 parallax0 block--0__shard--1"
          />
          <img
            src={Block0Shard2}
            alt=""
            className="enter0 parallax0 block--0__shard--2"
          />
          <img
            src={Block0Shard3}
            alt=""
            className="enter0 parallax0 block--0__shard--3"
          />
          <img
            src={Block0Shard4}
            alt=""
            className="enter0 parallax0 block--0__shard--4"
          />
          <div class="block__circles block__circles--0">
            <div class="enter0 parallax0 block__circles__circle block__circles--0__0"></div>
            <div class="enter0 parallax0 block__circles__circle block__circles--0__1"></div>
            <div class="enter0 parallax0 block__circles__circle block__circles--0__2"></div>
          </div>
          <h1 className="enter0 parallax0 block__text block--0__text">
            DIGITAL DESTINATIONS
          </h1>
        </section>
        <section className="block block--1">
          <div class="block__circles block__circles--1">
            <div class="enter1 parallax1 block__circles__circle block__circles--1__8"></div>
            <div class="enter1 parallax1 block__circles__circle block__circles--1__9"></div>
            <div class="enter1 parallax1 block__circles__circle block__circles--1__0"></div>
            <div class="enter1 parallax1 block__circles__circle block__circles--1__1"></div>
            <div class="enter1 parallax1 block__circles__circle block__circles--1__2"></div>
            <div class="enter1 parallax1 block__circles__circle block__circles--1__3"></div>
            <div class="enter1 parallax1 block__circles__circle block__circles--1__4"></div>
            <div class="enter1 parallax1 block__circles__circle block__circles--1__5"></div>
            <div class="enter1 parallax1 block__circles__circle block__circles--1__6"></div>
            <div class="enter1 parallax1 block__circles__circle block__circles--1__7"></div>
            <div class="enter1 parallax1 block__circles__circle block__circles--1__10"></div>
          </div>
        </section>
        <section
          className="block block--2"
          // style={{ background: "lightblue" }}
        >
          <img
            src={Block2Shard0}
            alt=""
            className="enter2 parallax2 block--2__shard--0"
          />
          <img
            src={Block2Shard2}
            alt=""
            className="enter2 parallax2 block--2__shard--2"
          />
          <img
            src={Block2Shard1}
            alt=""
            className="enter2 parallax2 block--2__shard--1"
          />
          <img
            src={Block2Shard3}
            alt=""
            className="enter2 parallax2 block--2__shard--3"
          />
          <div class="block__circles block__circles--2">
            <div class="enter2 parallax2 block__circles__circle block__circles--2__0"></div>
            <div class="enter2 parallax2 block__circles__circle block__circles--2__1"></div>
            <div class="enter2 parallax2 block__circles__circle block__circles--2__2"></div>
          </div>
          <h1 className="enter2 parallax2 block__text block--2__text">
            ENGAGE
          </h1>
        </section>
        <section className="block block--3">
          <div class="block__circles block__circles--3">
            <div class="enter3 parallax3 block__circles__circle block__circles--3__8"></div>
            <div class="enter3 parallax3 block__circles__circle block__circles--3__9"></div>
            <div class="enter3 parallax3 block__circles__circle block__circles--3__0"></div>
            <div class="enter3 parallax3 block__circles__circle block__circles--3__1"></div>
            <div class="enter3 parallax3 block__circles__circle block__circles--3__2"></div>
            <div class="enter3 parallax3 block__circles__circle block__circles--3__3"></div>
            <div class="enter3 parallax3 block__circles__circle block__circles--3__4"></div>
            <div class="enter3 parallax3 block__circles__circle block__circles--3__5"></div>
            <div class="enter3 parallax3 block__circles__circle block__circles--3__6"></div>
            <div class="enter3 parallax3 block__circles__circle block__circles--3__7"></div>
            <div class="enter3 parallax3 block__circles__circle block__circles--3__10"></div>
          </div>
        </section>
      </main>
      {/* <div className="overlay">overlay</div> */}
    </div>
  )
}
