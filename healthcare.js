let checkbox=document.getElementById("toggle");
let backdrop=document.getElementById("backdrop");
let hamIcons=document.querySelectorAll(".ham");

 hamIcons[1].style.transformOrigin = "center left";


const toggleWithTransition=()=>{

    document.body.classList.toggle('overflow-hidden');

    if(checkbox.checked){
        hamIcons[0].style.transform="translateY(9.5px) rotate(45deg)";
        hamIcons[1].style.transform="scale(0)";
        // window.getComputedStyle(hamIcons[1]).transformOrigin="50% -200%";
        // hamIcons[1].getComputedStyle().transformOrigin = "50% -50%";

        // hamIcons[1].style.transformOrigin = "lef";
        //  hamIcons[1].style.width="0";
      
        hamIcons[2].style.transform="translateY(-12px) rotate(-45deg)";     
    }
    else{
        hamIcons.forEach((item)=>{
            item.style.transform="";
        })
    }

}


   

checkbox.addEventListener('click',toggleWithTransition)
backdrop.addEventListener('click',()=>{
   
    checkbox.checked=false;
    toggleWithTransition();
   
    
})

