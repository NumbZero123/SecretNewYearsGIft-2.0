// --- Sparkle background ---
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
const particleCount = 120;

class Particle {
  constructor(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.size = Math.random()*2 + 1;
    this.speedX = (Math.random()-0.5)*0.3;
    this.speedY = (Math.random()-0.5)*0.3;
    this.color = "rgba(220,20,60,"+Math.random()+")";
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x<0||this.x>canvas.width) this.speedX*=-1;
    if(this.y<0||this.y>canvas.height) this.speedY*=-1;
  }
  draw(){
    ctx.beginPath();
    ctx.fillStyle=this.color;
    ctx.shadowBlur=10;
    ctx.shadowColor=this.color;
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}

function initParticles(){
  particles=[];
  for(let i=0;i<particleCount;i++) particles.push(new Particle());
}

function animateParticles(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{ p.update(); p.draw(); });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener("resize",()=>{
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  initParticles();
});

// --- Messages ---
const messages = [
  "I’ve known you since February, and over these months you’ve become someone incredibly special to me. You bring me joy just by being around, and I’ve started smiling more when we hang out—something I almost never did before. I love your kindness, your adorable personality, and your beauty. It would truly be an honor if I could be your boyfriend this year and make you as happy as you make me. ❤️",
  "Hey princess 👑… I know this might sound a little silly, but I can’t hide it anymore. Being around you makes me smile and laugh like I never thought I would. I still think about our movie night watching *The Nun*! Would you grant me the honor of being your boyfriend this year and creating even more memories together? 💖",
  "These past months with you have meant a lot to me. You make ordinary days feel brighter just by being present, and I’ve found myself smiling more and more. Your sweetness, kindness, and charm make every moment special. It would mean the world to me if I could have the honor of being your boyfriend this year and sharing all the little and big moments with you. 💙❤️",
  "I can’t help but smile when I think about the time we’ve spent together. I never imagined someone could make ordinary moments feel so special. You’re thoughtful, adorable, and genuinely beautiful. Would you give me the honor of being your boyfriend this year, so we can laugh, enjoy, and make memories together? 😄💖",
  "Princess 👑, I’ve been wanting to tell you this for a while. You’ve made me laugh, smile, and feel happier just by being yourself. Thinking about our movie night with *The Nun* and all the little moments we’ve shared makes me want more. I would be truly honored if I could be your boyfriend this year and see where this journey takes us. ❤️💙"
];

const messageElement=document.getElementById("message");
const choicesContainer=document.getElementById("choices");

let currentMessage=messages[Math.floor(Math.random()*messages.length)];

function typeWriter(text,i=0,callback=null){
  if(i<text.length){
    if(text[i]==="\n"){ messageElement.innerHTML+="<br>"; }
    else messageElement.innerHTM
