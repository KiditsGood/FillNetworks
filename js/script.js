let once = document.querySelector('.click_st')
let twice = document.querySelector('.click_nd')
let thirdly = document.querySelector('.click_rd')
let first = document.querySelector('.services_suggests')
let second = document.querySelector('.services_suggests_nd')
let third = document.querySelector('.services_suggests_rd')

once.addEventListener('click', ()=>{
    first.style.display = 'none'
    second.style.display = 'flex'
    third.style.display = 'none'
    once.style.background = '#C7F3FF'
    twice.style.background = 'none'
    thirdly.style.background = 'none'
})
twice.addEventListener('click', ()=>{
    first.style.display = 'flex'
    second.style.display = 'none'
    third.style.display = 'none'
    once.style.background = 'none'
    twice.style.background = '#C7F3FF'
    thirdly.style.background = 'none'
})
thirdly.addEventListener('click', ()=>{
    first.style.display = 'none'
    second.style.display = 'none'
    third.style.display = 'flex'
    once.style.background = 'none'
    twice.style.background = 'none'
    thirdly.style.background = '#C7F3FF'
})


