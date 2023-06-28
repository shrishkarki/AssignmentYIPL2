let checkbox=document.getElementById("toggle");
let backdrop=document.getElementById("backdrop");



   

checkbox.addEventListener('click',()=>{
    
    document.body.classList.toggle('overflow-hidden');
    
})
backdrop.addEventListener('click',()=>{
   
    checkbox.checked=false;
    document.body.classList.toggle('overflow-hidden');
   
    
})

