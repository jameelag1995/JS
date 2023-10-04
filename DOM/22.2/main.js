const checkboxInput = document.getElementById('checkboxinput');
const img = document.createElement('img');
img.style.width = '500px';
img.style.height = '800px';
img.src = 'https://images.unsplash.com/photo-1696326117395-5097014f290a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1227&q=80';
checkboxInput.addEventListener('click',(e)=>{
    if(e.target.checked){
        document.body.append(img);
    
    }else{
        img.remove();
    }

})