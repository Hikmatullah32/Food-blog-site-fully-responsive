const mobilemenu = document.querySelector('.mobile-menu')
const scrollBtn = document.querySelector('.scroll-top')
mobilemenu.addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('show')

})
// First functionality //

window.addEventListener('scroll',function(){
    if(this.document.body.scrollTop >100 || document.documentElement.scrollTop > 100){
        scrollBtn.style.display ="block"
    }
    else{
        scrollBtn.style.display ="none"
    }
})

//Second functionality//

scrollBtn.addEventListener('click',()=>{
    document.documentElement.scrollTop = 0;
})