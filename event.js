const btn=document.querySelector('.btn')
btn.addEventListener('click',(e)=>{
    e.preventDefault();
document.querySelector('#sikk').style.background='#ccc';
document.querySelector('body').classList.add(bg-dark);
});

const btn=document.querySelector('.btn')
btn.addEventListener('mouseover',(e)=>{
    e.preventDefault();
document.querySelector('#sikk').style.background='#ccc';
document.querySelector('body').classList.add(bg-dark);
});

const btn=document.querySelector('.btn')
btn.addEventListener('mouseout',(e)=>{
    e.preventDefault();
document.querySelector('#sikk').style.background='#ccc';
document.querySelector('body').classList.add(bg-dark);
});

const myForm=document.querySelector('#my-form')
const nameInput=document.querySelector('#name')
const emailInput=document.querySelector('#email')
const msg=document.querySelector('.msg')
const userList=document.querySelector('#users')

myForm.addEventListener('submit',onsubmit)
function onsubmit(e){
    e.preventDefault();
   // console.log(nameInput.value);
   if(nameInput.value==='' || emailInput.value==''){
      // alert('please fill the fields');
      msg.classList.add('error');
      msg.innerHTML='please fill the fields';
      setTimeout(()=> msg.remove(),3000)

   }else{
       const li=document.createElement('li');
       //console.log('success');
       li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
       userList.appendChild(li);
   }
