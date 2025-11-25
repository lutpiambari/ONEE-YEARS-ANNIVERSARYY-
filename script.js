
function nextPage(){
 document.getElementById('p1').classList.remove('active');
 document.getElementById('p2').classList.add('active');
}

function spawnHearts(){
 for(let i=0;i<20;i++){
   let h=document.createElement('div');
   h.innerHTML='❤';
   h.style.position='absolute';
   h.style.left=Math.random()*100+'%';
   h.style.top='-10px';
   h.style.fontSize=(20+Math.random()*30)+'px';
   h.style.color='#ff1a75';
   h.style.opacity='0.7';
   document.body.appendChild(h);
   let dur=5+Math.random()*5;
   h.animate([{transform:'translateY(0)'},{transform:'translateY(120vh)'}],{duration:dur*1000,iterations:1});
   setTimeout(()=>h.remove(), dur*1000);
 }
}
setInterval(spawnHearts,2000);
