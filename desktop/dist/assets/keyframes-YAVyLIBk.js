import{r as e}from"./rolldown-runtime-QTnfLwEv.js";import{f as t}from"./dnd-kit-z7amBIFk.js";import{_ as n}from"./radix-kaQUN1Qt.js";import{nt as r}from"./index-D76-tzOq.js";import{o as i}from"./aura-hglk_PcP.js";var a=e(t(),1),o=n(),s=(e,t=0)=>Array.from({length:e},(e,n)=>{let r=n+t;return{i:n,size:6+r*7%14,left:r*37%100,top:r*53%100,rot:r*41%360,hueShift:r*13%70-35,delay:r*.27%5,duration:4+r%5,min:.18+r%4*.06,max:.55+r%4*.12}}),c=Array.from({length:44},(e,t)=>({i:t,size:2+t%3,left:t*71%100,top:t*29%100,delay:t*.31%4,duration:3+t%4,min:.2+t%3*.1,max:.55+t%3*.12})),l=s(34,1),u=s(46,7);function d({aura:e,seeds:t,intensity:n=1}){return(0,o.jsxs)(`div`,{className:`absolute inset-0 pointer-events-none overflow-hidden`,style:{contain:`strict`,transform:`translateZ(0)`},children:[c.map(t=>{let r=e.orbs[t.i%3];return(0,o.jsx)(`div`,{className:`absolute rounded-full`,style:{width:`${t.size}px`,height:`${t.size}px`,left:`${t.left}%`,top:`${t.top}%`,background:r,boxShadow:`0 0 ${t.size*2}px ${r}`,"--min":t.min*n,"--max":t.max*n,animation:`star-twinkle ${t.duration}s ease-in-out ${t.delay}s infinite`}},`d-${t.i}`)}),t.map(t=>{let i=e.orbs[t.i%3];return(0,o.jsx)(`div`,{className:`absolute`,style:{left:`${t.left}%`,top:`${t.top}%`,color:i,transform:`rotate(${t.rot}deg)`,filter:`drop-shadow(0 0 ${t.size}px ${i})`,"--min":t.min*n,"--max":t.max*n,animation:`star-twinkle ${t.duration}s ease-in-out ${t.delay}s infinite`},children:(0,o.jsx)(r,{size:t.size,fill:`currentColor`})},`s-${t.i}`)})]})}var f=a.memo(d);function p({hasStar:e,aura:t,className:n,children:r}){return(0,o.jsxs)(`div`,{className:`relative rounded-[2.5rem] ${n??``}`,style:{background:`linear-gradient(165deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.04) 100%)`,backdropFilter:`blur(40px) saturate(160%)`,WebkitBackdropFilter:`blur(40px) saturate(160%)`,boxShadow:e?`0 30px 80px rgba(0,0,0,0.4), 0 0 80px ${i(t,.18)}, inset 0 0 0 1px ${i(t,.3)}, inset 0 1px 0 rgba(255,255,255,0.1)`:`0 30px 80px rgba(0,0,0,0.35), inset 0 0 0 1px rgba(255,255,255,0.08), inset 0 1px 0 rgba(255,255,255,0.08)`,animation:`hub-rise 700ms cubic-bezier(0.2,0.8,0.2,1) both`,isolation:`isolate`},children:[e&&(0,o.jsx)(`div`,{className:`absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none`,children:(0,o.jsx)(f,{aura:t,seeds:l,intensity:1})}),(0,o.jsx)(`div`,{className:`absolute inset-x-0 top-0 h-px pointer-events-none`,style:{background:`linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)`}}),r]})}var m=(0,a.memo)(p);function h({aura:e,isStar:t}){return(0,o.jsxs)(`div`,{className:`absolute inset-0 pointer-events-none overflow-hidden`,style:{contain:`strict`,transform:`translateZ(0)`},children:[(0,o.jsx)(`div`,{className:`absolute -top-[20%] -left-[15%] w-[80vw] h-[80vw] rounded-full mix-blend-screen`,style:{background:`radial-gradient(circle, ${e.orbs[0]} 0%, transparent 65%)`,opacity:t?.45:.22,filter:`blur(120px)`,animation:`orb-drift 22s ease-in-out infinite`}}),(0,o.jsx)(`div`,{className:`absolute top-[5%] -right-[20%] w-[70vw] h-[70vw] rounded-full mix-blend-screen`,style:{background:`radial-gradient(circle, ${e.orbs[1]} 0%, transparent 65%)`,opacity:t?.4:.18,filter:`blur(140px)`,animation:`orb-drift 28s ease-in-out -8s infinite`}}),(0,o.jsx)(`div`,{className:`absolute top-[40%] left-[20%] w-[55vw] h-[55vw] rounded-full mix-blend-screen`,style:{background:`radial-gradient(circle, ${e.orbs[2]} 0%, transparent 65%)`,opacity:t?.3:.12,filter:`blur(160px)`,animation:`orb-drift 34s ease-in-out -16s infinite`}}),t&&(0,o.jsx)(f,{aura:e,seeds:u,intensity:.85})]})}var g=a.memo(h),_=`
  @keyframes prismatic-shift {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
  @keyframes orb-drift {
    0%   { transform: translate3d(0, 0, 0) scale(1); }
    33%  { transform: translate3d(3%, 4%, 0) scale(1.08); }
    66%  { transform: translate3d(-3%, 2%, 0) scale(1.04); }
    100% { transform: translate3d(0, 0, 0) scale(1); }
  }
  @keyframes ring-rotate {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes hub-rise {
    from { opacity: 0; transform: translateY(24px); filter: blur(8px); }
    to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
  }
  @keyframes star-twinkle {
    0%   { opacity: var(--min, 0.2); transform: scale(0.85); }
    50%  { opacity: var(--max, 0.9); transform: scale(1.05); }
    100% { opacity: var(--min, 0.2); transform: scale(0.85); }
  }
`;export{g as n,m as r,_ as t};