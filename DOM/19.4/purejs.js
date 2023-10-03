const h1 = document.createElement('h1');
h1.innerText = 'Welcome To My Pure JS Website';
const p = document.createElement('p');
p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, eveniet perferendis libero laudantium quasi repellat cupiditate possimus dignissimos et unde?';
const button = document.createElement('button');
button.innerText = 'Click here to Win 10M$';
const header = document.createElement('header');
header.append(h1,p,button);
document.body.append(header);
header.classList.add('myheader');
h1.classList.add('pad');
p.classList.add('pad');
button.classList.add('pad');
button.classList.add('buttonstyle');
button.addEventListener('mouseover',function (){
    let h = Math.floor((Math.random()* window.innerHeight));
    let w = Math.floor((Math.random()*window.innerWidth));
    button.style.transition = 'all 0.5s ease-in-out';
    button.style.left = `${w}px`;
    button.style.top = `${h}px`;
});
button.addEventListener('click',function(){
    button.innerText = "You Are A FOOL!!"
    button.style.backgroundColor = '#333';
    
})