const hambuger=document.querySelector('.hambuger');const navMenu=document.querySelector('.nav-menu');hambuger.addEventListener('click',()=>{hambuger.classList.toggle('active');navMenu.classList.toggle('active')})
document.querySelectorAll('.nav-menu').forEach(n=>n.addEventListener('click',()=>{hambuger.classList.remove('active');navMenu.classList.remove('active')}))
const highlights=document.querySelector(".highlights");document.addEventListener("DOMContentLoaded",()=>{function counter(id,start,end,duration){let obj=document.getElementById(id),current=start,range=end-start,increment=end>start?1:-1,step=Math.abs(Math.floor(duration/range)),timer=setInterval(()=>{current+=increment;obj.textContent=current;if(current==end){clearInterval(timer)}},step)}
counter("count1",0,200,4000)
counter("count2",0,80,3000)
counter("count3",0,100,3000)});{const nav=document.querySelector(".nav");let lastScrollY=window.scrollY;window.addEventListener("scroll",()=>{if(lastScrollY<window.scrollY){nav.classList.add("nav--hidden")}else{nav.classList.remove("nav--hidden")}
lastScrollY=window.scrollY;if(lastScrollY<=0){nav.classList.add("top")}else{nav.classList.remove("top")}
lastScrollY=window.scrollY;if(window.scrollY<=0){nav.classList.add("top")}else{nav.classList.remove("top")}
lastScrollY=window.scrollY})}
const openModalButtons=document.querySelectorAll('[data-modal-target]');const closeModalButtons=document.querySelectorAll('[data-close-button]');const overlay=document.getElementById('overlay');openModalButtons.forEach(button=>{button.addEventListener('click',()=>{const modal=document.querySelector(button.dataset.modalTarget)
openModal(modal)})})
function openModal(modal){if(modal==null)return
modal.classList.add('active')
overlay.classList.add('active')
document.body.style.overflow="hidden"}
function closeModal(modal){if(modal==null)return
modal.classList.remove('active')
overlay.classList.remove('active')
document.body.style.overflow=""}
closeModalButtons.forEach(button=>{button.addEventListener('click',()=>{const modal=button.closest('.modal')
closeModal(modal)})})
overlay.addEventListener('click',()=>{const modals=document.querySelectorAll('.modal.active')
modals.forEach(modal=>{closeModal(modal)})})
function copyNumber(numberId,messageId){const number=document.getElementById(numberId).innerText;navigator.clipboard.writeText(number).then(()=>{const message=document.getElementById(messageId);message.style.display="block";setTimeout(()=>{message.style.display="none"},2000)}).catch(err=>{console.error("Failed to copy: ",err)})}