let menuItems=document.querySelectorAll('.menu-item')
let message=document.querySelectorAll('.message')
let fonts=document.querySelectorAll('.choose-size span')
let colors=document.querySelectorAll('.choose-color span')
let background=document.querySelectorAll('.background span')
let h5=document.querySelector('.messages h5')
let searchMessage=document.querySelector('#message-search')
let customizeThem=document.querySelector('.customize-them')
let x=document.querySelector('.customize-them .x')
let them=document.querySelector('.them')


// search


searchMessage.addEventListener('keyup',()=>{
    let val =searchMessage.value.toLowerCase()
     message.forEach(m => {
    let name=m.querySelector('h5').textContent.toLowerCase()
    
    name.includes(val)?m.style.display='flex':m.style.display='none'
    });
})


them.addEventListener('click',()=>customizeThem.style.display='grid')
x.addEventListener('click',()=>customizeThem.style.display='none')


//  document.documentElement.style.setProperty('--color-light', 'hsl(252deg 1% 13%)')

fonts.forEach(span=> {
    let fontSize;
    span.addEventListener('click',()=>{
        fonts.forEach(span=> span.classList.remove('active'))
        span.classList.add('active')
        if(span.classList.contains('font-size-1')){
            fontSize='10px'
           
        }else if(span.classList.contains('font-size-2')){
            fontSize='12px'
        }else if(span.classList.contains('font-size-3')){
            fontSize='14px'
        }else if(span.classList.contains('font-size-4')){
            fontSize='16px'
        }else if(span.classList.contains('font-size-5')){
            fontSize='18px'
        }
        document.querySelector('html').style.fontSize=fontSize
    })
})

background.forEach(span=> {
    span.addEventListener('click',()=>{
        background.forEach(span=> span.classList.remove('active'))
        span.classList.add('active')

    })
})

colors.forEach(color=> {
    color.addEventListener('click',()=>{
        colors.forEach(color=> color.classList.remove('active'))
        color.classList.add('active')

    })
})

menuItems.forEach(item=> {
    item.addEventListener('click',()=>{
        menuItems.forEach(item=> item.classList.remove('active'))
        item.classList.add('active')
        if(item.id==='notifications'){
            item.childNodes[5].style.display='block'
            document.querySelector('#notifications .count').style.display='none'
        }else document.querySelector('.not-pop').style.display='none'

        if(item.id==='messageN'){
            document.querySelector('#messageN .count').style.display='none'
            document.querySelector('.messages').style.boxShadow=' 0px 0px 44px -9px rgba(217,21,217,1)'
            setTimeout(() => {
                document.querySelector('.messages').style.boxShadow='none'
            }, 3000);
        }
    })
})


