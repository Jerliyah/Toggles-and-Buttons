document.addEventListener("DOMContentLoaded", function(event) { 
   



    const toggles = Array.from( document.querySelectorAll('.toggle') )

    toggles.forEach( (toggle) => {
        toggle.addEventListener('click', function(e) {
            this.classList.toggle('active')
        })
    })






    
});


