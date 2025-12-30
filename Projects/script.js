

var dt = document.querySelector("#center")

dt.addEventListener("mousemove",function(details){
    var rectanglelocation=dt.getBoundingClientRect()
    var insiderect = details.clientX-rectanglelocation.left

    if(insiderect<rectanglelocation.width/2){
      var redColor =gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,insiderect)
        gsap.to(dt,{
            backgroundColor:`rgb(${redColor},0,0)`,
            ease:Power4
        })
    }else{
       
        var blueColor =gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width ,0,255,insiderect)
        gsap.to(dt,{
            backgroundColor:`rgb(0,0,${blueColor})`,
            ease:Power4
        })
    }
    
    
})
