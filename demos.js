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
})