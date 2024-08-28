const projectsSection = document.querySelector('main .projects')

watchBtn.addEventListener('click', (e) => {
  const projectsSectionPosition = projectsSection.getBoundingClientRect().top

  window.scrollBy({
    top: projectsSectionPosition,
    behavior: 'smooth',
  })
})
