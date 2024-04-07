var addButton=document.querySelector("#calculate");
addButton.addEventListener('click',function(e){
    var guest=document.querySelector("#guest");
    var amount=document.querySelector("#amount");
    var tip=document.querySelector("#serviceQuality");
    var show=document.querySelector("#hi");
    var area=document.querySelector(".modal");
    var text=document.querySelector(".text");
    if(tip.value=="" ||  amount.value==""  || guest.value=="" || amount.value<0 || guest.value<0)
        alert("Invalid Data");
    else
    {
        text.innerHTML=("Tip Amount : $ "+((tip.value*amount.value)/guest.value).toFixed(2)+" each.");
        area.style.display="block";
       
        var close=document.querySelector(".close");
        close.addEventListener('click',()=>{
            area.style.display="none";
            guest.value="";
            amount.value="";
            tip.value="";
            
        })
    }
  
   
   
   
})