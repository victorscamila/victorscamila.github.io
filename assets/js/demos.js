document.addEventListener('DOMContentLoaded',function(){
    // Play Multiple
    let playm = document.getElementsByClassName('play-multiple')
    playm = [...playm]
    playm.map(pl => {
        const show = pl.getElementsByClassName('play__show')[0]
        let options = pl.getElementsByClassName('class-button')
        options = [...options]
        options.map(op => {
            op.addEventListener('click',function(){
                const newClass = op.attributes && op.attributes.value && op.attributes.value.value
                op.classList.toggle('active')
                if (op.classList.contains('active')){
                    show.classList.add(newClass)
                } else {
                    show.classList.remove(newClass)
                }
            })
        })
    })

    // Play Single
    let play = document.getElementsByClassName('play-single')
    play = [...play]
    play.map(pl => {
        const show = pl.getElementsByClassName('play__show')[0]
        let options = pl.getElementsByClassName('class-button')
        options = [...options]
        options.map(op => {
            op.addEventListener('click',function(){
                const newClass = op.attributes && op.attributes.value && op.attributes.value.value
                
                options.map(op2 =>{
                    const thisClass = op2.attributes && op2.attributes.value && op2.attributes.value.value
                    op2.classList.remove('active')
                    show.classList.remove(thisClass)
                })

                op.classList.toggle('active')
                if (op.classList.contains('active')){
                    show.classList.add(newClass)
                } else {
                    show.classList.remove(newClass)
                }
            })
        })
    })

    const srcs = [
        './assets/img/exemplos/2.png',
        './assets/img/exemplos/3.jpg',
        './assets/img/exemplos/4.jpg',
        './assets/img/exemplos/5.JPG',
        './assets/img/exemplos/6.svg',
        './assets/img/exemplos/7.svg',
        './assets/img/exemplos/8.jpg',
        './assets/img/exemplos/9.jpg',
        './assets/img/exemplos/10.jpg',
        './assets/img/exemplos/11.jpg',
        './assets/img/exemplos/12.jpg',
        './assets/img/exemplos/13.jpg'
    ]
    let counter = 0

    // Image Shifter
    const shifts = document.getElementsByClassName('img-shift')
    
    for (const img of shifts){
        const shifter = img.getElementsByClassName('img-shifter')
        const shifted = img.getElementsByClassName('img-shifted')

        shifter[0] && shifter[0].addEventListener('click',function(){
            shifted[0] && (shifted[0].src = srcs[counter])
            counter++
            if (counter >= 12){
                counter = 0
            }
        })

    }
    let playShow = document.getElementById('p-position-show');
})
$(document).ready(function(){
    $(".play__show").scroll(function () {
       
        var top_of_box = $('.box-1').position().top;
        var bottom_of_box =  $('.box-1').height() *(-1) + 60;
        var top_of_box_pos = 0 - top_of_box;
        if ((top_of_box < 0) && (top_of_box > bottom_of_box)) {
            $(".float-item").css({"transform" : `translateY(${top_of_box_pos}px)`});
        }
    });
})
