const progressBar = document.querySelector('.prog-bar')
const progressCircle = progressBar.querySelector('.prog-circle')
const aboutSection = document.querySelector('.about')

function gsapAnimation() {
  gsap.registerPlugin(ScrollTrigger)

  ScrollTrigger.matchMedia({
    '(min-width: 1200px)': function () {
      const moveProgressBar = gsap.timeline({
        scrollTrigger: {
          trigger: body,
          start: '0% top',
          end: '100% 100%',
          scrub: 2,
        },
      })

      moveProgressBar.to(progressCircle, {
        top: '100%',
        ease: 'none',
      })
    },

    '(min-width: 768px)': function () {
      const resizeHomeSectionVideo = gsap.timeline({
        scrollTrigger: {
          trigger: homeSection,
          start: '-80px top',
          end: '20% 0%',
          scrub: 3,
        },
      })

      resizeHomeSectionVideo.fromTo(
        homeSectionVideoWrap,
        { scale: '0.3' },
        { scale: '1' }
      )
    },
  })

  const revealAboutSection = gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection,
      start: '-20% 50%',
      end: '0% 30%',
      scrub: 2,
    },
  })

  revealAboutSection.fromTo(
    aboutSection,
    { opacity: '0', translateY: '20%' },
    { opacity: '1', translateY: '0' }
  )

  window.addEventListener('resize', ScrollTrigger.refresh)
}

gsapAnimation()
