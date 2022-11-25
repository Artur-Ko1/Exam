const offset = document.getElementById('pageSix').offsetTop

document.getElementById('contactUs').addEventListener('click', () => {
  window.scrollTo({
    top: offset,
    behavior: "smooth"
  })
})


const user = document.querySelector('.bestEngineers__boxes')


async function users(url){
    await fetch(url)
    .then(res => res.json())
    .then(res => res.map((item, index) => {
        user.innerHTML += `
        <div class="bestEngineers__box">
            <div>
              <div class="bestEngineers__box__tools">
                <img src="./Assets/star.svg" alt="star" />
                <img src="./Assets/points.svg" alt="points" />
              </div>
              <div class="bestEngineers__box__engineer">
                <img src="./Assets/engineerOne.svg" alt="engineer" />
                <h2>${item.name}</h2>
                <p>Michigan, TX</p>
              </div>
              <div class="bestEngineers__box__information">
                <p>989-653-2986</p>
                <p>${item.email}</p>
              </div>
              </div>
            </div>
        `
    }))
}
users('https://jsonplaceholder.typicode.com/users')


const btnPrev = document.getElementById('btnPrev')
const btnNext = document.getElementById('btnNext')
let scroll = 0

btnNext.addEventListener('click', () => {
    scroll = scroll - 380
    if(scroll < -2660){
      scroll = -2660
    } else{
      user.style.left = scroll + 'px'
    }
    user.style.left = scroll + 'px'
    console.log(scroll)
})


btnPrev.addEventListener('click', () => {
  scroll = scroll + 380
  if(scroll > 0){
    scroll = 0
  } else{
    user.style.left = scroll + 'px'
  }
  user.style.left = scroll + 'px'
  console.log(scroll);
})

