const target=new Date("2027-01-29T19:00:00+05:30").getTime();
function update(){let d=Math.max(0,target-Date.now());let day=Math.floor(d/86400000);d%=86400000;let h=Math.floor(d/3600000);d%=3600000;let m=Math.floor(d/60000);d%=60000;let s=Math.floor(d/1000);["days","hours","minutes","seconds"].forEach((id,i)=>document.getElementById(id).textContent=String([day,h,m,s][i]).padStart(2,"0"))}
update();setInterval(update,1000);
const layer=document.querySelector(".petals"),sy=["🌸","🌹","🌺","🌼"];
function petal(){let p=document.createElement("span");p.className="petal";p.textContent=sy[Math.floor(Math.random()*sy.length)];p.style.left=Math.random()*100+"vw";p.style.fontSize=12+Math.random()*13+"px";p.style.setProperty("--drift",(Math.random()*2-1)*24+"vw");p.style.animationDuration=6+Math.random()*5+"s";layer.appendChild(p);setTimeout(()=>p.remove(),12000)}
for(let i=0;i<8;i++)setTimeout(petal,i*200);setInterval(petal,800);