
document.addEventListener("DOMContentLoaded",()=>{
    const featureItems=document.querySelectorAll(".feature__link");
    const featureSubItems=document.querySelectorAll(".feature-sub");


    // First method with for loop
    // ===============================================================================================
    for(let i=0;i<featureItems.length;i++){
        featureItems[i].addEventListener("click",()=>{
            
            for(let j=0;j<featureItems.length;j++){
                featureItems[j].classList.remove("feature__link_active");
                featureSubItems[j].classList.add("hidden");
            }
            

            featureItems[i].classList.add("feature__link_active")
            featureSubItems[i].classList.remove("hidden");
        })
    }

    // Second method with forEach
    // ===============================================================================================

    // featureItems.forEach((item,ind)=>{
    //     item.addEventListener("click",()=>{            
            
    //         if(item.classList.contains("feature__link_active")){
    //             item.classList.remove("feature__link_active");
    //             featureSubItems[ind].classList.add("hidden")
    //         }else{
    //             featureItems.forEach(fItem=>{
    //                 fItem.classList.remove("feature__link_active")
    //             })    
    //             featureSubItems.forEach(fItem=>{
    //                 fItem.classList.add("hidden")
    //             })

    //             item.classList.add("feature__link_active");
    //             featureSubItems[ind].classList.toggle("hidden")
    //         }
            
    //     })
    // })

})