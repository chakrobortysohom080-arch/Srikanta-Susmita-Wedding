(function(){
  const target=new Date('2027-01-29T19:00:00+05:30');
  function tick(){const x=Math.max(0,target-new Date());const d=Math.floor(x/864e5),h=Math.floor(x/36e5)%24,m=Math.floor(x/6e4)%60,s=Math.floor(x/1e3)%60;['d','h','m','s'].forEach((id,i)=>document.getElementById(id).textContent=String([d,h,m,s][i]).padStart(2,'0'));}
  tick();setInterval(tick,1000);
  const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.1});
  document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
  const petals=document.querySelector('.petals');
  const glyphs=['✿','❀','✦','♥'];
  function drop(){const p=document.createElement('i');p.className='petal';p.textContent=glyphs[Math.floor(Math.random()*glyphs.length)];p.style.left=(Math.random()*100)+'vw';p.style.setProperty('--x',(Math.random()*180-90)+'px');p.style.fontSize=(8+Math.random()*9)+'px';p.style.animationDuration=(6+Math.random()*5)+'s';petals.appendChild(p);setTimeout(()=>p.remove(),12000)}
  for(let i=0;i<8;i++)setTimeout(drop,i*400);setInterval(drop,1100);
  const url=location.href;
  const text='শ্রীকান্ত ❤️ সুস্মিতা | Wedding Invitation | 29 January 2027 | Bajemelia, Balaji Loj';
  document.getElementById('whatsapp').href='https://wa.me/?text='+encodeURIComponent(text+'\n'+url);
  document.getElementById('share').addEventListener('click',async()=>{if(navigator.share){try{await navigator.share({title:'শ্রীকান্ত ❤️ সুস্মিতা',text,url})}catch(e){}}else{try{await navigator.clipboard.writeText(url);alert('Website link copied!')}catch(e){prompt('Copy website link:',url)}}});
})();

/* Continuous gentle rose-petal shower */
(function(){
  const layer=document.querySelector(".rose-petals");
  if(!layer) return;
  function drop(){
    const p=document.createElement("span");
    p.className="rose-petal "+(["","small","large"][Math.floor(Math.random()*3)]);
    p.style.left=(Math.random()*100)+"vw";
    p.style.setProperty("--duration",(6.5+Math.random()*5.5)+"s");
    p.style.setProperty("--delay",(Math.random()*.4)+"s");
    p.style.setProperty("--drift1",((Math.random()*180)-90)+"px");
    p.style.setProperty("--drift2",((Math.random()*260)-130)+"px");
    p.style.setProperty("--drift3",((Math.random()*320)-160)+"px");
    p.style.transform="rotate("+Math.random()*180+"deg)";
    layer.appendChild(p);
    setTimeout(()=>p.remove(),13000);
  }
  for(let i=0;i<9;i++) setTimeout(drop,i*180);
  setInterval(drop,360);
})();
