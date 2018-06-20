document.addEventListener('DOMContentLoaded', e => { 
  document.addEventListener('click', e => {
    if (e.target && e.target.classList.contains("nav-toggler")) {
      let targetNavId = e.target.dataset.target
      let targetNav = document.querySelector(targetNavId)
      if (targetNav.classList.contains("collapsed")) {
        targetNav.classList.add("expanded")
        targetNav.classList.remove("collapsed")
      }
      else {
        targetNav.classList.remove("expanded")
        targetNav.classList.add("collapsed")
      }
    }
  })
})