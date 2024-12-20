// ADD YOUR LENGTH TO THE SPAN THEN IT CAMES IN THIS INCREASING ANIMATION...
document.addEventListener("DOMContentLoaded", () => {
    let all_val = document.querySelectorAll(".student_reg");
    all_val.forEach((element,i) => {
        let count= 0;
        let end =parseInt( element.innerText) +1;  
        let element_value = element.innerText;
        if (i<=all_val.length) {
           let invl =  setInterval(() => {   
                if (count!=end) {
                element.innerText = count;
                count+=1;
                } 
                else{
                    clearInterval(invl)
                }
            },0);
    
        }
        
    
    });
    




}
)
