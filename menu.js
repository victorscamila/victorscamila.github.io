document.addEventListener('DOMContentLoaded',function(){

    const close = document.getElementsByClassName('btn--close')[0]
    const btnSettings = document.getElementById("settingsBtn")
    const btnNav = document.getElementById("navBtn")
    
    close.addEventListener('click',function(){
        document.getElementById("sideMenu").classList.toggle('open')
    })
    btnSettings.addEventListener('click',function(){
        var settings = document.getElementById("settings");
        settings.classList.toggle("active");
        btnSettings.classList.toggle("active");
    })
    let btnDrop = document.getElementsByClassName('part__head')
    btnDrop = [...btnDrop]
    btnDrop.forEach(element => {
        element.addEventListener('click',function(){
            element.classList.toggle("open");
        })
        
    });

})