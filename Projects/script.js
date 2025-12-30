var dt = document.querySelector("#center")

dt.addEventListener("mousemove",function(details){
    var rectanglelocation=dt.getBoundingClientRect()
    var insiderect = details.clientX-rectanglelocation.left

    if(insiderect<rectanglelocation.width/2){
        console.log("left");
        
    }else{
        console.log("right");
        
    }
    
    
})

