
let content = document.querySelector('.content')

// childNodes[0] = text
// childNodes[1] = h1
// childNodes[2] = text
// childNodes[3] = img
// (scopeNgPagpipilian).addEventListener


content.addEventListener('click', (e) => {
  if (e.target.classList.contains('title-section')) {
    removeActive()
    removeActiveTitleS()
    removeActiveArrow()
    e.target.classList.add('active')
    e.target.childNodes[3].classList.add('active')
    e.target.parentNode.classList.add('active')
  } else if (e.target.classList.contains('content-text')) {
      removeActive()
      removeActiveTitleS()
      removeActiveArrow()
    } else {
      removeActive()
      removeActiveTitleS()
      removeActiveArrow()
    }
})


let contentText = document.querySelectorAll('.content-text')
let arrow = document.querySelectorAll('.arrow')
let TitleS = document.querySelectorAll('.title-section')



function removeActive() {
  for (let i = 0; i < contentText.length; i++) {
    contentText[i].classList.remove('active');
  }
}

function removeActiveArrow() {
  for (let i = 0; i < arrow.length; i++) {
    arrow[i].classList.remove('active');
  }
}

function removeActiveTitleS() {
  for (let i = 0; i < TitleS.length; i++) {
    TitleS[i].classList.remove('active');
  }
}



// use mouseover and mouseout instead kasi nag papalit sya ng target
// while sa mouseenter and mouseout kung ano yung first target dun na sya


content.addEventListener('mouseover', (e) => {
      if (e.target.classList.contains('title-section')) {
        e.target.parentNode.parentNode.childNodes[1].classList.add('active')
      }
    })


content.addEventListener('mouseout', (e) => {
  if (e.target.classList.contains('title-section')) {
    e.target.parentNode.parentNode.childNodes[1].classList.remove('active')
  }
  })





  // let box = document.querySelector('.box')
  // let titleS1 = document.getElementById('title-section1')
  // let titleS2 = document.getElementById('title-section2')
  // let titleS3 = document.getElementById('title-section3')
  // let titleS4 = document.getElementById('title-section4')
  // let titleS5 = document.getElementById('title-section5')






// titleS1.addEventListener('mouseenter', (e) => {
//     box.classList.add('active')
//   })

// titleS1.addEventListener('mouseleave', (e) => {
//     box.classList.remove('active')
//   })

// titleS2.addEventListener('mouseenter', (e) => {
//     box.classList.add('active')
//   })

// titleS2.addEventListener('mouseleave', (e) => {
//     box.classList.remove('active')
//   })

// titleS3.addEventListener('mouseenter', (e) => {
//     box.classList.add('active')
//   })

// titleS3.addEventListener('mouseleave', (e) => {
//     box.classList.remove('active')
//   })

// titleS4.addEventListener('mouseenter', (e) => {
//     box.classList.add('active')
//   })

// titleS4.addEventListener('mouseleave', (e) => {
//     box.classList.remove('active')
//   })

// titleS5.addEventListener('mouseenter', (e) => {
//     box.classList.add('active')
//   })

// titleS5.addEventListener('mouseleave', (e) => {
//     box.classList.remove('active')
//   })


