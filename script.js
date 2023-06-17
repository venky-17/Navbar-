const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')

highlight.classList.add('highlight')
document.body.append(highlight)


function highlightlink(){

    const linkCords = this.getBoundingClientRect()
   
    highlight.style.width = `${linkCords.width}px`;
    highlight.style.height = `${linkCords.height}px`;
    highlight.style.transform = ` translate(${linkCords.left}px,${linkCords.top}px)`
  
     



const coords = {
    width: linkCords.width,
    height: linkCords.height,
    top: linkCords.top + window.scrollY,
    left: linkCords.left+ window.scrollX
}

highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = ` translate(${coords.left}px,${coords.top}px)`
  
}

const mediaQuery = window.matchMedia("(max-width:800px")

function handleMediaQuery(mq){
    if(mq.matches){
        alert("pls try this on a laptop since it is a mouseover effect")
    }
    else{
        return
    }
}

handleMediaQuery(mediaQuery)

mediaQuery.addEventListener(handleMediaQuery)

triggers.forEach(a => a.addEventListener('mousemove', highlightlink))
