const $ = (id) => document.getElementById(id);
const scene = $("skyScene");
let burstDone = false;

function popBalloon() {
  if (burstDone) {
    scene.classList.remove("burst");
    void scene.offsetWidth;
  }
  burstDone = true;
  scene.classList.add("burst");
  $("heroNote").textContent = "A little birthday wish, wrapped in stardust. ✨";
  confettiHearts(26);
}
setTimeout(popBalloon, 1600);
$("startSurprise").addEventListener("click", () => {
  if (!burstDone) popBalloon();
  $("intro").scrollIntoView({behavior:"smooth"});
});

const envelope = $("letterEnvelope");
$("openLetter").addEventListener("click", () => {
  const isOpen = envelope.classList.toggle("open");
  $("openLetter").textContent = isOpen ? "Fold the letter ♡" : "Open your letter ♡";
  if (isOpen) setTimeout(() => envelope.scrollIntoView({behavior:"smooth",block:"start"}), 150);
});

document.querySelectorAll(".memory-card").forEach(card => {
  card.addEventListener("click", () => {
    $("modalTitle").textContent = card.dataset.title;
    $("modalNote").textContent = card.dataset.note;
    $("memoryModal").classList.add("open");
    $("closeModal").focus();
  });
});
function closeModal(){ $("memoryModal").classList.remove("open"); }
$("closeModal").addEventListener("click", closeModal);
$("modalOkay").addEventListener("click", closeModal);
$("memoryModal").addEventListener("click", e => { if(e.target === $("memoryModal")) closeModal(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeModal(); });

$("finalReveal").addEventListener("click", () => {
  $("finalMessage").classList.add("show");
  $("finalReveal").textContent = "A wish, just for you ♡";
  confettiHearts(60);
  $("finalMessage").scrollIntoView({behavior:"smooth",block:"center"});
});

function confettiHearts(amount) {
  const symbols = ["♡","✦","♥","✧","⋆"];
  for (let i=0;i<amount;i++) {
    const el=document.createElement("span");
    el.className="heart-particle";
    el.textContent=symbols[Math.floor(Math.random()*symbols.length)];
    el.style.left=Math.random()*100+"vw";
    el.style.top=(-5-Math.random()*20)+"vh";
    el.style.fontSize=(12+Math.random()*20)+"px";
    el.style.animationDuration=(3+Math.random()*4)+"s";
    document.body.appendChild(el);
    setTimeout(()=>el.remove(),7500);
  }
}

// Lightweight twinkle canvas; pauses drawing when the tab is hidden.
const canvas=$("sparkles"), ctx=canvas.getContext("2d");
let stars=[];
function resizeCanvas(){
  const dpr=Math.min(window.devicePixelRatio||1,2);
  canvas.width=window.innerWidth*dpr; canvas.height=window.innerHeight*dpr;
  canvas.style.width=window.innerWidth+"px"; canvas.style.height=window.innerHeight+"px";
  ctx.setTransform(dpr,0,0,dpr,0,0);
  stars=Array.from({length:Math.min(90,Math.floor(window.innerWidth/9))},()=>({
    x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,
    r:.4+Math.random()*1.5,a:.15+Math.random()*.65,s:.002+Math.random()*.008
  }));
}
function drawStars(){
  if(!document.hidden){
    ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
    stars.forEach(star=>{
      star.a += (Math.random()-.5)*star.s;
      star.a=Math.max(.08,Math.min(.8,star.a));
      ctx.beginPath();ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,226,245,${star.a})`;ctx.fill();
    });
  }
  requestAnimationFrame(drawStars);
}
window.addEventListener("resize",resizeCanvas);resizeCanvas();drawStars();

// Music is opt-in. A local assets/music.mp3 can be added; browsers require a user gesture.
const music=$("bgMusic"), musicToggle=$("musicToggle"), musicLabel=$("musicLabel");
musicToggle.addEventListener("click",async()=>{
  if(music.paused){
    try{await music.play();musicLabel.textContent="Pause";musicToggle.setAttribute("aria-label","Pause music");}
    catch(e){musicLabel.textContent="Add song";alert("To enable music, add a royalty-free MP3 named assets/music.mp3 to the website folder.");}
  }else{music.pause();musicLabel.textContent="Music";musicToggle.setAttribute("aria-label","Play music");}
});
