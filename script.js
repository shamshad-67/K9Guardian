<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>PetPulse AI™ — Smart Pet Health Monitoring</title>
<meta name="description" content="PetPulse AI — AI-powered health monitoring tag for dogs. Heart rate, temperature, activity, sleep and GPS in one premium device.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
<style>
/* ============ RESET & TOKENS ============ */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --navy:#0F172A;
  --navy-800:#16213B;
  --navy-700:#1E293B;
  --navy-600:#334155;
  --teal:#14B8A6;
  --teal-light:#5EEAD4;
  --teal-dim:rgba(20,184,166,.14);
  --gold:#F59E0B;
  --gold-dim:rgba(245,158,11,.14);
  --white:#FFFFFF;
  --gray-light:#F8FAFC;
  --gray-border:#E2E8F0;
  --text-muted:#64748B;
  --text-soft:#94A3B8;
  --font-display:'Sora',sans-serif;
  --font-body:'Inter',sans-serif;
  --font-mono:'Space Mono',monospace;
  --radius-sm:10px;
  --radius-md:18px;
  --radius-lg:28px;
  --shadow-sm:0 2px 8px rgba(15,23,42,.06);
  --shadow-md:0 12px 32px rgba(15,23,42,.10);
  --shadow-lg:0 24px 64px rgba(15,23,42,.16);
  --ease:cubic-bezier(.22,1,.36,1);
}
html{scroll-behavior:smooth;}
@media (prefers-reduced-motion: reduce){
  html{scroll-behavior:auto;}
  *,*::before,*::after{animation-duration:.001ms !important;animation-iteration-count:1 !important;transition-duration:.001ms !important;scroll-behavior:auto !important;}
}
body{
  font-family:var(--font-body);
  color:var(--navy);
  background:var(--white);
  line-height:1.6;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
}
img,svg{display:block;max-width:100%;}
a{color:inherit;text-decoration:none;}
ul{list-style:none;}
button,input{font-family:inherit;font-size:inherit;color:inherit;}
button{cursor:pointer;border:none;background:none;}
:focus-visible{outline:2px solid var(--teal);outline-offset:3px;border-radius:4px;}
.container{max-width:1240px;margin:0 auto;padding:0 32px;}
h1,h2,h3,h4{font-family:var(--font-display);letter-spacing:-0.02em;}
.eyebrow{
  display:inline-flex;align-items:center;gap:8px;
  font-family:var(--font-mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;
  color:var(--teal);background:var(--teal-dim);
  padding:7px 14px;border-radius:999px;font-weight:700;
}
.section-head{max-width:640px;margin:0 auto 56px;text-align:center;}
.section-head h2{font-size:clamp(28px,4vw,42px);font-weight:700;color:var(--navy);margin:14px 0 14px;}
.section-head p{color:var(--text-muted);font-size:17px;}
.section{padding:108px 0;}
.section--gray{background:var(--gray-light);}
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  padding:16px 32px;border-radius:999px;font-weight:600;font-size:15px;
  transition:transform .35s var(--ease),box-shadow .35s var(--ease),background .25s var(--ease);
  white-space:nowrap;
}
.btn-primary{background:var(--teal);color:var(--white);box-shadow:0 10px 30px rgba(20,184,166,.35);}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(20,184,166,.45);}
.btn-dark{background:var(--navy);color:var(--white);}
.btn-dark:hover{transform:translateY(-2px);background:var(--navy-700);}
.btn-ghost{background:rgba(255,255,255,.08);color:var(--white);border:1px solid rgba(255,255,255,.3);backdrop-filter:blur(8px);}
.btn-ghost:hover{background:rgba(255,255,255,.16);transform:translateY(-2px);}
.btn-outline{background:transparent;color:var(--navy);border:1.5px solid var(--gray-border);}
.btn-outline:hover{border-color:var(--teal);color:var(--teal);}
.btn-block{width:100%;}
.btn-sm{padding:11px 20px;font-size:13px;}
.reveal{opacity:0;transform:translateY(28px);transition:opacity .8s var(--ease),transform .8s var(--ease);}
.reveal.in{opacity:1;transform:translateY(0);}
.icon{width:24px;height:24px;stroke:currentColor;fill:none;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;}

/* ============ NAV ============ */
.nav{
  position:fixed;top:0;left:0;right:0;z-index:1000;
  padding:20px 0;transition:all .4s var(--ease);
}
.nav-inner{
  max-width:1240px;margin:0 auto;padding:0 32px;
  display:flex;align-items:center;justify-content:space-between;
}
.nav.scrolled{
  padding:12px 0;background:rgba(255,255,255,.78);backdrop-filter:blur(16px) saturate(180%);
  box-shadow:0 1px 0 rgba(15,23,42,.06);
}
.logo{font-family:var(--font-display);font-weight:800;font-size:20px;display:flex;align-items:center;gap:9px;color:var(--navy);}
.logo-mark{width:30px;height:30px;border-radius:9px;background:linear-gradient(135deg,var(--teal),var(--navy));display:flex;align-items:center;justify-content:center;}
.logo-mark svg{width:17px;height:17px;stroke:#fff;}
.nav-links{display:flex;gap:36px;}
.nav-links a{font-size:14.5px;font-weight:500;color:var(--navy-600);transition:color .25s;position:relative;}
.nav.scrolled .nav-links a{color:var(--navy);}
.nav-links a:not(.scrolled-light){color:#fff;}
.nav:not(.scrolled) .nav-links a{color:#fff;}
.nav-links a:hover{color:var(--teal);}
.nav-actions{display:flex;align-items:center;gap:14px;}
.cart-btn{
  position:relative;width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;
  background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.3);transition:.25s;
}
.nav.scrolled .cart-btn{background:var(--gray-light);border-color:var(--gray-border);}
.cart-btn:hover{background:var(--teal);border-color:var(--teal);}
.cart-btn .icon{stroke:#fff;}
.nav.scrolled .cart-btn .icon{stroke:var(--navy);}
.cart-btn:hover .icon{stroke:#fff;}
.cart-count{
  position:absolute;top:-4px;right:-4px;width:19px;height:19px;border-radius:50%;background:var(--gold);
  color:#fff;font-size:10.5px;font-weight:700;display:flex;align-items:center;justify-content:center;
  font-family:var(--font-mono);
}
.nav .btn-primary{padding:12px 24px;font-size:13.5px;}
.hamburger{display:none;width:42px;height:42px;border-radius:50%;align-items:center;justify-content:center;background:rgba(255,255,255,.14);}
.nav.scrolled .hamburger{background:var(--gray-light);}
.hamburger .icon{stroke:#fff;}
.nav.scrolled .hamburger .icon{stroke:var(--navy);}
.mobile-menu{
  position:fixed;inset:0;background:var(--navy);z-index:1100;display:flex;flex-direction:column;
  padding:28px 32px;transform:translateX(100%);transition:transform .45s var(--ease);
}
.mobile-menu.open{transform:translateX(0);}
.mobile-menu-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:48px;}
.mobile-menu .logo{color:#fff;}
.mobile-menu a{display:block;color:#fff;font-family:var(--font-display);font-size:26px;font-weight:600;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.1);}
.mobile-menu .btn{margin-top:28px;}
.close-btn .icon{stroke:#fff;}

/* ============ HERO ============ */
.hero{
  position:relative;min-height:100vh;display:flex;align-items:center;
  background:radial-gradient(120% 100% at 50% 0%, #16213B 0%, var(--navy) 55%, #0A1120 100%);
  overflow:hidden;padding:140px 0 100px;
}
.hero::before{
  content:'';position:absolute;width:680px;height:680px;border-radius:50%;
  background:radial-gradient(circle, rgba(20,184,166,.28) 0%, transparent 70%);
  top:-220px;right:-180px;filter:blur(10px);
}
.hero::after{
  content:'';position:absolute;width:520px;height:520px;border-radius:50%;
  background:radial-gradient(circle, rgba(245,158,11,.16) 0%, transparent 70%);
  bottom:-220px;left:-160px;
}
.hero-inner{position:relative;z-index:2;max-width:1240px;margin:0 auto;padding:0 32px;text-align:center;}
.hero .eyebrow{background:rgba(20,184,166,.18);}
.hero h1{
  font-size:clamp(34px,5.4vw,64px);font-weight:700;color:#fff;margin:22px auto 22px;max-width:880px;line-height:1.1;
}
.hero p.lead{color:#B9C2D4;font-size:clamp(16px,2vw,19px);max-width:560px;margin:0 auto 38px;}
.hero-ctas{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:56px;}
.trust-row{display:flex;gap:34px;justify-content:center;flex-wrap:wrap;color:#9CA8C0;font-size:13.5px;margin-bottom:72px;}
.trust-row span{display:flex;align-items:center;gap:8px;}
.trust-row .icon{width:17px;height:17px;stroke:var(--teal-light);}

/* pulse device card */
.device-card{
  position:relative;max-width:880px;margin:0 auto;border-radius:32px;
  background:linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.015));
  border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(20px);
  padding:46px 38px 30px;box-shadow:0 40px 100px rgba(0,0,0,.45);
}
.pulse-line-wrap{height:120px;position:relative;margin-bottom:8px;}
.pulse-svg{width:100%;height:100%;}
.pulse-path{
  fill:none;stroke:var(--teal-light);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;
  filter:drop-shadow(0 0 8px rgba(94,234,212,.55));
  stroke-dasharray:1400;stroke-dashoffset:1400;
  animation:draw-pulse 3.2s linear infinite;
}
@keyframes draw-pulse{
  0%{stroke-dashoffset:1400;}
  70%{stroke-dashoffset:0;}
  100%{stroke-dashoffset:-30;}
}
.dog-silhouette{position:absolute;right:0;bottom:-6px;width:130px;opacity:.5;}
.dog-silhouette svg{stroke:var(--teal-light);}
.stat-chips{display:flex;gap:14px;flex-wrap:wrap;justify-content:center;margin-top:10px;}
.stat-chip{
  background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.14);
  border-radius:16px;padding:14px 20px;min-width:124px;text-align:left;
  animation:float-chip 4.5s ease-in-out infinite;
}
.stat-chip:nth-child(2){animation-delay:.5s;}
.stat-chip:nth-child(3){animation-delay:1s;}
@keyframes float-chip{0%,100%{transform:translateY(0);}50%{transform:translateY(-7px);}}
.stat-chip .label{font-size:11px;color:#8C9AB5;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;}
.stat-chip .value{font-family:var(--font-mono);font-size:21px;color:#fff;font-weight:700;}
.stat-chip .value span{font-size:12px;color:var(--teal-light);font-weight:400;margin-left:2px;}
.stat-chip.gold .value{color:var(--gold);}
.stat-dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--teal-light);margin-right:6px;box-shadow:0 0 8px var(--teal-light);animation:dot-pulse 1.6s ease-in-out infinite;}
@keyframes dot-pulse{0%,100%{opacity:1;}50%{opacity:.3;}}

/* ============ ABSTRACT ART TILES (used in gallery) ============ */
.art-tile{
  position:relative;border-radius:var(--radius-md);overflow:hidden;aspect-ratio:4/3;
  display:flex;align-items:flex-end;cursor:pointer;
  box-shadow:var(--shadow-sm);transition:transform .45s var(--ease),box-shadow .45s var(--ease);
}
.art-tile:hover{transform:translateY(-6px);box-shadow:var(--shadow-lg);}
.art-tile .art-bg{position:absolute;inset:0;}
.art-tile .art-icon{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:.85;}
.art-tile .art-icon svg{width:34%;height:34%;stroke:rgba(255,255,255,.85);stroke-width:1.1;}
.art-tile .art-caption{position:relative;z-index:2;padding:18px 20px;color:#fff;font-size:14px;font-weight:600;background:linear-gradient(0deg, rgba(0,0,0,.45), transparent);width:100%;}
.art-tile .zoom-hint{position:absolute;top:14px;right:14px;width:34px;height:34px;border-radius:50%;background:rgba(255,255,255,.18);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;z-index:2;}
.art-tile .zoom-hint .icon{width:15px;height:15px;stroke:#fff;}
.grad-1{background:linear-gradient(135deg,#0F172A,#14B8A6);}
.grad-2{background:linear-gradient(135deg,#14B8A6,#0F172A 80%);}
.grad-3{background:linear-gradient(135deg,#1E293B,#F59E0B 130%);}
.grad-4{background:linear-gradient(135deg,#0F172A,#334155);}
.grad-5{background:linear-gradient(135deg,#14B8A6,#5EEAD4);}
.grad-6{background:linear-gradient(135deg,#0F172A,#1E293B);}

/* ============ GALLERY ============ */
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.gallery-grid .art-tile:nth-child(1),.gallery-grid .art-tile:nth-child(4){aspect-ratio:4/3.6;}

/* lightbox */
.lightbox{position:fixed;inset:0;background:rgba(8,12,24,.92);backdrop-filter:blur(6px);z-index:1300;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:opacity .35s;padding:40px;}
.lightbox.open{opacity:1;pointer-events:auto;}
.lightbox-inner{position:relative;max-width:760px;width:100%;}
.lightbox-art{width:100%;aspect-ratio:4/3;border-radius:24px;position:relative;overflow:hidden;}
.lightbox-caption{color:#fff;text-align:center;margin-top:20px;font-size:15px;color:#cbd5e1;}
.lightbox-close,.lightbox-prev,.lightbox-next{position:absolute;width:46px;height:46px;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;transition:.25s;}
.lightbox-close{top:-64px;right:0;}
.lightbox-prev{left:-66px;top:50%;transform:translateY(-50%);}
.lightbox-next{right:-66px;top:50%;transform:translateY(-50%);}
.lightbox-close:hover,.lightbox-prev:hover,.lightbox-next:hover{background:var(--teal);}
.lightbox-close .icon,.lightbox-prev .icon,.lightbox-next .icon{stroke:#fff;}

/* ============ FEATURES ============ */
.features-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px;}
.feature-card{
  background:#fff;border:1px solid var(--gray-border);border-radius:var(--radius-md);
  padding:30px 26px;transition:transform .4s var(--ease),box-shadow .4s var(--ease),border-color .4s;
}
.feature-card:hover{transform:translateY(-5px);box-shadow:var(--shadow-md);border-color:transparent;}
.feature-icon{
  width:50px;height:50px;border-radius:14px;background:var(--teal-dim);
  display:flex;align-items:center;justify-content:center;margin-bottom:18px;
}
.feature-icon .icon{stroke:var(--teal);}
.feature-card h3{font-size:17px;font-weight:700;margin-bottom:8px;}
.feature-card p{font-size:14.5px;color:var(--text-muted);}

/* ============ HOW IT WORKS ============ */
.steps{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;}
.steps::before{content:'';position:absolute;top:27px;left:12.5%;right:12.5%;height:2px;background:var(--gray-border);z-index:0;}
.step{position:relative;z-index:1;text-align:center;padding:0 18px;}
.step-num{
  width:56px;height:56px;border-radius:50%;background:var(--navy);color:#fff;
  display:flex;align-items:center;justify-content:center;margin:0 auto 22px;
  font-family:var(--font-display);font-weight:700;font-size:18px;
}
.step h3{font-size:16.5px;font-weight:700;margin-bottom:8px;}
.step p{font-size:14px;color:var(--text-muted);}

/* ============ APP SECTION ============ */
.app-section{background:var(--navy);color:#fff;position:relative;overflow:hidden;}
.app-section::before{content:'';position:absolute;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(20,184,166,.18),transparent 70%);top:-200px;left:-150px;}
.app-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:center;position:relative;z-index:1;}
.app-grid .eyebrow{background:rgba(20,184,166,.2);}
.app-grid h2{font-size:clamp(28px,3.6vw,38px);margin:18px 0 18px;}
.app-grid > div:first-child > p{color:#A9B4CC;font-size:16px;margin-bottom:30px;}
.app-features{display:grid;grid-template-columns:1fr 1fr;gap:10px 18px;}
.app-features li{display:flex;align-items:center;gap:10px;font-size:14.5px;color:#D6DCEA;padding:9px 0;}
.app-features .icon{width:17px;height:17px;stroke:var(--teal-light);flex-shrink:0;}

/* phone mockup */
.phone-wrap{display:flex;justify-content:center;}
.phone{
  width:280px;height:572px;border-radius:42px;background:#0A0F1E;border:8px solid #1B2538;
  box-shadow:0 40px 90px rgba(0,0,0,.5);padding:18px 14px;position:relative;
}
.phone::before{content:'';position:absolute;top:18px;left:50%;transform:translateX(-50%);width:60px;height:6px;border-radius:6px;background:#1B2538;}
.phone-screen{background:linear-gradient(170deg,#101A2E,#0A0F1E);border-radius:26px;height:100%;padding:30px 16px 16px;display:flex;flex-direction:column;gap:14px;}
.phone-greeting{font-size:11px;color:#7C8AA8;}
.phone-name{font-family:var(--font-display);font-weight:700;font-size:16px;margin-bottom:6px;}
.phone-ring-row{display:flex;justify-content:center;margin:6px 0 10px;}
.phone-ring{width:108px;height:108px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:conic-gradient(var(--teal) 0deg, var(--teal) calc(var(--p,75)*3.6deg), #1E293B calc(var(--p,75)*3.6deg));}
.phone-ring-inner{width:84px;height:84px;border-radius:50%;background:#0F1828;display:flex;flex-direction:column;align-items:center;justify-content:center;}
.phone-ring-inner .num{font-family:var(--font-mono);font-size:22px;font-weight:700;color:#fff;}
.phone-ring-inner .lbl{font-size:9px;color:#7C8AA8;text-transform:uppercase;letter-spacing:.05em;}
.phone-stat-row{display:flex;gap:8px;}
.phone-stat{flex:1;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:10px;}
.phone-stat .lbl{font-size:9.5px;color:#7C8AA8;margin-bottom:4px;}
.phone-stat .num{font-family:var(--font-mono);font-size:14px;font-weight:700;color:#fff;}
.phone-bars{display:flex;align-items:flex-end;gap:4px;height:46px;background:rgba(255,255,255,.04);border-radius:12px;padding:8px;border:1px solid rgba(255,255,255,.06);}
.phone-bars span{flex:1;background:linear-gradient(0deg,var(--teal),var(--teal-light));border-radius:3px;}

/* ============ EMOTIONAL ============ */
.emotional{
  position:relative;background:linear-gradient(160deg,var(--navy) 0%, #1c2f4a 100%);color:#fff;
  text-align:center;overflow:hidden;
}
.emo-blobs{position:absolute;inset:0;z-index:0;}
.blob{position:absolute;border-radius:50%;filter:blur(50px);opacity:.5;}
.blob1{width:380px;height:380px;background:var(--teal);top:-100px;left:8%;}
.blob2{width:320px;height:320px;background:var(--gold);bottom:-120px;right:10%;opacity:.3;}
.emotional .inner{position:relative;z-index:1;max-width:680px;margin:0 auto;}
.emotional h2{font-size:clamp(28px,4vw,42px);margin-bottom:22px;}
.emotional p{color:#C7D0E2;font-size:17px;margin-bottom:10px;}
.embrace{width:120px;height:120px;margin:0 auto 32px;position:relative;}
.embrace .c1,.embrace .c2{position:absolute;border-radius:50%;}
.embrace .c1{width:90px;height:90px;background:rgba(20,184,166,.35);top:0;left:10px;}
.embrace .c2{width:90px;height:90px;background:rgba(245,158,11,.3);bottom:0;right:10px;}

/* ============ SPECS ============ */
.specs-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;}
.spec-card{background:#fff;border:1px solid var(--gray-border);border-radius:var(--radius-md);padding:24px;text-align:center;}
.spec-card .icon-wrap{width:44px;height:44px;border-radius:12px;background:var(--gold-dim);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;}
.spec-card .icon-wrap .icon{stroke:var(--gold);width:21px;height:21px;}
.spec-card .val{font-family:var(--font-mono);font-weight:700;font-size:18px;margin-bottom:4px;}
.spec-card .lbl{font-size:13px;color:var(--text-muted);}

/* ============ PRICING ============ */
.pricing-wrap{display:flex;justify-content:center;}
.price-card{
  max-width:460px;width:100%;background:#fff;border:1.5px solid var(--gray-border);border-radius:var(--radius-lg);
  padding:44px;position:relative;box-shadow:var(--shadow-md);
}
.price-card .ribbon{
  position:absolute;top:-14px;left:50%;transform:translateX(-50%);
  background:var(--gold);color:#fff;font-size:12.5px;font-weight:700;padding:7px 18px;border-radius:999px;
  box-shadow:0 8px 20px rgba(245,158,11,.4);
}
.price-card h3{font-family:var(--font-display);font-size:22px;text-align:center;margin:14px 0 4px;}
.price-card .sub{text-align:center;color:var(--text-muted);font-size:13.5px;margin-bottom:24px;}
.price-row{display:flex;align-items:baseline;justify-content:center;gap:12px;margin-bottom:6px;}
.price-old{color:var(--text-soft);text-decoration:line-through;font-size:18px;}
.price-new{font-family:var(--font-display);font-size:44px;font-weight:800;color:var(--navy);}
.price-save{display:block;text-align:center;color:var(--teal);font-weight:700;font-size:13.5px;margin-bottom:26px;}
.included{margin-bottom:30px;}
.included li{display:flex;align-items:center;gap:10px;padding:8px 0;font-size:14.5px;border-bottom:1px dashed var(--gray-border);}
.included li:last-child{border-bottom:none;}
.included .icon{width:17px;height:17px;stroke:var(--teal);flex-shrink:0;}
.price-actions{display:flex;flex-direction:column;gap:12px;}
.price-actions .btn-outline{border-color:var(--navy);}

/* ============ CHECKOUT ============ */
.checkout-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:48px;align-items:flex-start;}
.checkout-card{background:#fff;border:1px solid var(--gray-border);border-radius:var(--radius-lg);padding:40px;}
.checkout-card h3{font-size:20px;margin-bottom:24px;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;}
.field{display:flex;flex-direction:column;gap:6px;}
.field.full{grid-column:1/-1;}
.field label{font-size:12.5px;font-weight:600;color:var(--navy-600);}
.field input,.field select{
  padding:13px 15px;border:1.5px solid var(--gray-border);border-radius:11px;background:var(--gray-light);
  transition:border-color .25s,background .25s;
}
.field input:focus,.field select:focus{outline:none;border-color:var(--teal);background:#fff;}
.field.error input{border-color:#EF4444;}
.field .err-msg{font-size:11.5px;color:#EF4444;display:none;}
.field.error .err-msg{display:block;}
.pay-methods{display:flex;gap:10px;flex-wrap:wrap;margin:18px 0 26px;}
.pay-method{
  flex:1;min-width:78px;border:1.5px solid var(--gray-border);border-radius:11px;padding:12px 8px;text-align:center;
  font-size:11.5px;font-weight:700;color:var(--navy-600);transition:.25s;
}
.pay-method.active{border-color:var(--teal);background:var(--teal-dim);color:var(--teal);}
.security-row{display:flex;gap:18px;flex-wrap:wrap;margin-top:22px;color:var(--text-muted);font-size:12.5px;}
.security-row span{display:flex;align-items:center;gap:6px;}
.security-row .icon{width:15px;height:15px;stroke:var(--teal);}
.order-summary{background:var(--gray-light);border-radius:var(--radius-lg);padding:34px;position:sticky;top:110px;}
.order-summary h4{font-size:15px;margin-bottom:18px;}
.order-line{display:flex;justify-content:space-between;font-size:14.5px;padding:9px 0;color:var(--navy-600);}
.order-line.total{border-top:1.5px solid var(--gray-border);margin-top:8px;padding-top:16px;font-weight:700;font-size:17px;color:var(--navy);}
.checkout-success{display:none;text-align:center;padding:40px 10px;}
.checkout-success.show{display:block;}
.checkout-success .check-circle{width:72px;height:72px;border-radius:50%;background:var(--teal-dim);display:flex;align-items:center;justify-content:center;margin:0 auto 22px;}
.checkout-success .check-circle .icon{stroke:var(--teal);width:34px;height:34px;}
.checkout-success h3{margin-bottom:10px;}
.checkout-success p{color:var(--text-muted);margin-bottom:6px;}
.checkout-form.hidden{display:none;}

/* ============ REVIEWS ============ */
.reviews-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;}
.review-card{background:#fff;border:1px solid var(--gray-border);border-radius:var(--radius-md);padding:28px;}
.review-card .stars{display:flex;gap:3px;margin-bottom:14px;color:var(--gold);}
.review-card .stars .icon{width:15px;height:15px;fill:var(--gold);stroke:var(--gold);}
.review-card p.quote{font-size:14.5px;color:var(--navy-600);margin-bottom:20px;}
.review-author{display:flex;align-items:center;gap:11px;}
.avatar{width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,var(--teal),var(--navy));color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13.5px;font-family:var(--font-display);}
.review-author .name{font-weight:600;font-size:14px;}
.review-card.span2{grid-column:span 1;}

/* ============ FAQ ============ */
.faq-list{max-width:760px;margin:0 auto;}
.faq-item{border-bottom:1px solid var(--gray-border);}
.faq-q{width:100%;display:flex;justify-content:space-between;align-items:center;padding:22px 4px;text-align:left;font-weight:600;font-size:16px;}
.faq-q .icon{transition:transform .35s var(--ease);stroke:var(--teal);flex-shrink:0;margin-left:14px;}
.faq-item.open .faq-q .icon{transform:rotate(135deg);}
.faq-a{max-height:0;overflow:hidden;transition:max-height .4s var(--ease);}
.faq-a p{padding:0 4px 22px;color:var(--text-muted);font-size:14.5px;max-width:640px;}

/* ============ GUARANTEE ============ */
.guarantee{
  background:linear-gradient(120deg,var(--navy),#1c3047);color:#fff;text-align:center;
  border-radius:var(--radius-lg);max-width:1080px;margin:0 auto;padding:56px 40px;position:relative;overflow:hidden;
}
.guarantee::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 80% 20%, rgba(245,158,11,.18), transparent 60%);}
.guarantee .inner{position:relative;z-index:1;}
.guarantee .shield{width:64px;height:64px;border-radius:18px;background:var(--gold-dim);display:flex;align-items:center;justify-content:center;margin:0 auto 22px;}
.guarantee .shield .icon{stroke:var(--gold);width:30px;height:30px;}
.guarantee h2{font-size:clamp(24px,3vw,32px);margin-bottom:12px;}
.guarantee p{color:#C7D0E2;}

/* ============ NEWSLETTER ============ */
.newsletter{text-align:center;}
.newsletter h2{font-size:clamp(24px,3.4vw,34px);margin-bottom:14px;}
.newsletter p{color:var(--text-muted);margin-bottom:30px;}
.newsletter-form{display:flex;max-width:440px;margin:0 auto;gap:10px;}
.newsletter-form input{flex:1;padding:15px 18px;border:1.5px solid var(--gray-border);border-radius:999px;background:var(--gray-light);}
.newsletter-form input:focus{outline:none;border-color:var(--teal);background:#fff;}
.newsletter-msg{margin-top:16px;font-size:14px;color:var(--teal);font-weight:600;display:none;}
.newsletter-msg.show{display:block;}

/* ============ FOOTER ============ */
footer{background:var(--navy);color:#A9B4CC;padding:80px 0 30px;}
.footer-grid{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:40px;padding-bottom:50px;border-bottom:1px solid rgba(255,255,255,.08);}
.footer-brand .logo{color:#fff;margin-bottom:16px;}
.footer-brand p{font-size:14px;max-width:280px;margin-bottom:22px;}
.social-row{display:flex;gap:10px;}
.social-row a{width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;transition:.25s;}
.social-row a:hover{background:var(--teal);}
.social-row .icon{width:16px;height:16px;stroke:#fff;}
.footer-col h4{color:#fff;font-size:14px;margin-bottom:18px;}
.footer-col li{margin-bottom:11px;font-size:14px;}
.footer-col a:hover{color:#fff;}
.footer-bottom{display:flex;justify-content:space-between;align-items:center;padding-top:26px;font-size:13px;flex-wrap:wrap;gap:10px;}

/* back to top */
.to-top{position:fixed;bottom:28px;right:28px;width:48px;height:48px;border-radius:50%;background:var(--navy);box-shadow:var(--shadow-md);display:flex;align-items:center;justify-content:center;z-index:900;opacity:0;pointer-events:none;transition:.35s;}
.to-top.show{opacity:1;pointer-events:auto;}
.to-top .icon{stroke:#fff;}

/* toast */
.toast{position:fixed;bottom:28px;left:50%;transform:translateX(-50%) translateY(20px);background:var(--navy);color:#fff;padding:14px 26px;border-radius:999px;font-size:14px;font-weight:600;display:flex;align-items:center;gap:10px;box-shadow:var(--shadow-lg);z-index:1400;opacity:0;pointer-events:none;transition:.35s var(--ease);}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0);}
.toast .icon{stroke:var(--teal-light);width:18px;height:18px;}

/* demo modal */
.modal-overlay{position:fixed;inset:0;background:rgba(8,12,24,.85);backdrop-filter:blur(6px);z-index:1300;display:flex;align-items:center;justify-content:center;opacity:0;pointer-events:none;transition:.35s;padding:20px;}
.modal-overlay.open{opacity:1;pointer-events:auto;}
.demo-modal{background:var(--navy);border-radius:28px;max-width:420px;width:100%;padding:40px;text-align:center;position:relative;}
.demo-modal .lightbox-close{position:absolute;top:16px;right:16px;}

/* ============ RESPONSIVE ============ */
@media (max-width:1024px){
  .features-grid{grid-template-columns:repeat(2,1fr);}
  .gallery-grid{grid-template-columns:repeat(2,1fr);}
  .app-grid{grid-template-columns:1fr;gap:50px;}
  .phone-wrap{order:-1;}
  .checkout-grid{grid-template-columns:1fr;}
  .order-summary{position:static;}
  .specs-grid{grid-template-columns:repeat(2,1fr);}
  .reviews-grid{grid-template-columns:repeat(2,1fr);}
  .footer-grid{grid-template-columns:1fr 1fr;gap:36px;}
}
@media (max-width:768px){
  .nav-links{display:none;}
  .nav .btn-primary{display:none;}
  .hamburger{display:flex;}
  .section{padding:76px 0;}
  .steps{grid-template-columns:1fr;gap:36px;}
  .steps::before{display:none;}
  .form-row{grid-template-columns:1fr;}
  .reviews-grid{grid-template-columns:1fr;}
  .specs-grid{grid-template-columns:repeat(2,1fr);}
  .lightbox-prev,.lightbox-next{display:none;}
  .container{padding:0 22px;}
}
@media (max-width:560px){
  .gallery-grid{grid-template-columns:1fr;}
  .features-grid{grid-template-columns:1fr;}
  .footer-grid{grid-template-columns:1fr;}
  .footer-bottom{flex-direction:column;align-items:flex-start;}
  .trust-row{gap:18px;}
  .stat-chips{gap:10px;}
}
</style>
</head>
<body>

<!-- ============ NAV ============ -->
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="#home" class="logo"><span class="logo-mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2 7 4-14 2 7h6"/></svg></span>PetPulse AI™</a>
    <ul class="nav-links">
      <li><a href="#home">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#how">How It Works</a></li>
      <li><a href="#reviews">Reviews</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="nav-actions">
      <button class="cart-btn" id="cartBtn" aria-label="Cart">
        <svg class="icon" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
        <span class="cart-count" id="cartCount">0</span>
      </button>
      <a href="#pricing" class="btn btn-primary">Buy Now</a>
      <button class="hamburger" id="hamburgerBtn" aria-label="Menu">
        <svg class="icon" viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </div>
</nav>

<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu-top">
    <span class="logo">PetPulse AI™</span>
    <button class="close-btn" id="closeMenuBtn" aria-label="Close menu">
      <svg class="icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
  <a href="#home" class="mlink">Home</a>
  <a href="#features" class="mlink">Features</a>
  <a href="#how" class="mlink">How It Works</a>
  <a href="#reviews" class="mlink">Reviews</a>
  <a href="#faq" class="mlink">FAQ</a>
  <a href="#contact" class="mlink">Contact</a>
  <a href="#pricing" class="btn btn-primary btn-block mlink">Buy Now</a>
</div>

<!-- ============ HERO ============ -->
<header class="hero" id="home">
  <div class="hero-inner">
    <span class="eyebrow">AI-Powered Health Monitoring</span>
    <h1>Know Your Dog's Health Before Problems Become Serious.</h1>
    <p class="lead">Advanced AI monitoring helps detect unusual activity, health changes, stress levels, and wellness trends — in real time.</p>
    <div class="hero-ctas">
      <a href="#pricing" class="btn btn-primary">Buy Now</a>
      <button class="btn btn-ghost" id="watchDemoBtn">
        <svg class="icon" viewBox="0 0 24 24" style="stroke:#fff;width:18px;height:18px;"><polygon points="5 3 19 12 5 21 5 3"/></svg>
        Watch Demo
      </button>
    </div>
    <div class="trust-row">
      <span><svg class="icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Secure Checkout</span>
      <span><svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>30-Day Money Back Guarantee</span>
      <span><svg class="icon" viewBox="0 0 24 24"><path d="M5 17h14M5 17a2 2 0 1 0 4 0M5 17a2 2 0 1 1 4 0m6 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0M9 17V7a1 1 0 0 1 1-1h4l4 4v7"/></svg>Free Worldwide Shipping</span>
    </div>

    <div class="device-card reveal">
      <div class="pulse-line-wrap">
        <svg class="pulse-svg" viewBox="0 0 800 120" preserveAspectRatio="none">
          <path class="pulse-path" d="M0,60 L140,60 L165,20 L190,100 L215,60 L260,60 L285,40 L305,80 L325,60 L800,60"/>
        </svg>
        <div class="dog-silhouette">
          <svg viewBox="0 0 100 70" fill="none" stroke-width="2">
            <path d="M15 55 Q5 45 12 30 Q15 18 28 16 Q35 8 45 12 Q55 8 60 18 Q72 18 75 30 Q82 35 78 45 L72 55 L70 40 L60 48 L40 48 L28 42 L22 55 Z"/>
          </svg>
        </div>
      </div>
      <div class="stat-chips">
        <div class="stat-chip"><div class="label"><span class="stat-dot"></span>Heart Rate</div><div class="value" id="heroHr">82<span>bpm</span></div></div>
        <div class="stat-chip"><div class="label">Temperature</div><div class="value">38.5<span>°C</span></div></div>
        <div class="stat-chip gold"><div class="label">Activity Score</div><div class="value" id="heroAct">92<span>/100</span></div></div>
      </div>
    </div>
  </div>
</header>

<!-- ============ GALLERY ============ -->
<section class="section" id="gallery">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">A Closer Look</span>
      <h2>Designed To Disappear On The Collar.</h2>
      <p>Premium materials, an unobtrusive form factor, and a companion app built to feel as calm as it looks.</p>
    </div>
    <div class="gallery-grid" id="galleryGrid"></div>
  </div>
</section>

<!-- ============ FEATURES ============ -->
<section class="section section--gray" id="features">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Everything In One Tag</span>
      <h2>Twelve Ways PetPulse AI Watches Over Them.</h2>
      <p>From heartbeat to GPS, every signal feeds one AI model trained to notice when something's off.</p>
    </div>
    <div class="features-grid" id="featuresGrid"></div>
  </div>
</section>

<!-- ============ HOW IT WORKS ============ -->
<section class="section" id="how">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Getting Started</span>
      <h2>Set Up In Minutes, Not Hours.</h2>
    </div>
    <div class="steps">
      <div class="step reveal"><div class="step-num">1</div><h3>Attach</h3><p>Clip PetPulse AI onto any dog collar — no tools required.</p></div>
      <div class="step reveal"><div class="step-num">2</div><h3>Connect</h3><p>Pair the device with the app over Bluetooth in under a minute.</p></div>
      <div class="step reveal"><div class="step-num">3</div><h3>Monitor</h3><p>The AI continuously learns your dog's normal and watches for change.</p></div>
      <div class="step reveal"><div class="step-num">4</div><h3>Get Alerts</h3><p>Receive smart alerts and weekly insights straight to your phone.</p></div>
    </div>
  </div>
</section>

<!-- ============ APP SECTION ============ -->
<section class="section app-section" id="app">
  <div class="container">
    <div class="app-grid">
      <div>
        <span class="eyebrow">The Companion App</span>
        <h2>A Live Dashboard For Your Dog's Wellbeing.</h2>
        <p>Every reading PetPulse AI takes streams straight to your phone — clear, calm, and easy to act on.</p>
        <ul class="app-features">
          <li class="reveal"><svg class="icon" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>Live Dashboard</li>
          <li class="reveal"><svg class="icon" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>Heart Rate</li>
          <li class="reveal"><svg class="icon" viewBox="0 0 24 24"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>Temperature</li>
          <li class="reveal"><svg class="icon" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>Activity Score</li>
          <li class="reveal"><svg class="icon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>Sleep Quality</li>
          <li class="reveal"><svg class="icon" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>GPS Location</li>
          <li class="reveal"><svg class="icon" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>Health Trends</li>
          <li class="reveal"><svg class="icon" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>Weekly Reports</li>
          <li class="reveal"><svg class="icon" viewBox="0 0 24 24"><path d="M12 2l2.4 7.2H22l-6 4.6 2.3 7.2-6.3-4.6L5.7 21l2.3-7.2-6-4.6h7.6z"/></svg>AI Recommendations</li>
        </ul>
      </div>
      <div class="phone-wrap reveal">
        <div class="phone">
          <div class="phone-screen">
            <div>
              <div class="phone-greeting">Good evening</div>
              <div class="phone-name">Bailey's Day</div>
            </div>
            <div class="phone-ring-row">
              <div class="phone-ring" style="--p:78">
                <div class="phone-ring-inner"><span class="num" id="phoneHr">79</span><span class="lbl">BPM</span></div>
              </div>
            </div>
            <div class="phone-stat-row">
              <div class="phone-stat"><div class="lbl">Temp</div><div class="num">38.4°C</div></div>
              <div class="phone-stat"><div class="lbl">Sleep</div><div class="num">7.8h</div></div>
              <div class="phone-stat"><div class="lbl">Stress</div><div class="num">Low</div></div>
            </div>
            <div class="phone-bars" id="phoneBars"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ EMOTIONAL ============ -->
<section class="section emotional">
  <div class="emo-blobs"><div class="blob blob1"></div><div class="blob blob2"></div></div>
  <div class="container inner reveal">
    <div class="embrace"><div class="c1"></div><div class="c2"></div></div>
    <h2>Your Dog Depends On You.</h2>
    <p>Dogs cannot explain pain, illness or discomfort.</p>
    <p>PetPulse AI helps you stay informed and proactive.</p>
    <p>Give your best friend the care they deserve.</p>
  </div>
</section>

<!-- ============ SPECS ============ -->
<section class="section section--gray">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Built To Last</span>
      <h2>Product Specifications.</h2>
    </div>
    <div class="specs-grid" id="specsGrid"></div>
  </div>
</section>

<!-- ============ PRICING ============ -->
<section class="section" id="pricing">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Get Yours Today</span>
      <h2>One Tag. Total Peace Of Mind.</h2>
    </div>
    <div class="pricing-wrap reveal">
      <div class="price-card">
        <span class="ribbon">Save 47%</span>
        <h3>PetPulse AI™</h3>
        <p class="sub">Smart Pet Health Monitoring Tag</p>
        <div class="price-row">
          <span class="price-old">$149.99</span>
          <span class="price-new">$79.99</span>
        </div>
        <span class="price-save">You save $70.00 today</span>
        <ul class="included">
          <li><svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>PetPulse AI Smart Tag</li>
          <li><svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>Magnetic Charging Cable</li>
          <li><svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>Quick Start Guide</li>
          <li><svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>Mobile App Access (iOS &amp; Android)</li>
        </ul>
        <div class="price-actions">
          <button class="btn btn-primary btn-block" id="addToCartBtn">Add To Cart</button>
          <a href="#checkout" class="btn btn-outline btn-block" id="buyNowBtn2">Buy Now</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ============ CHECKOUT ============ -->
<section class="section section--gray" id="checkout">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Checkout</span>
      <h2>Complete Your Order.</h2>
      <p>Your dog's first health report arrives within minutes of setup.</p>
    </div>
    <div class="checkout-grid">
      <div class="checkout-card reveal">
        <form class="checkout-form" id="checkoutForm" novalidate>
          <h3>Shipping Details</h3>
          <div class="form-row">
            <div class="field"><label for="fname">First Name</label><input id="fname" required><span class="err-msg">Required</span></div>
            <div class="field"><label for="lname">Last Name</label><input id="lname" required><span class="err-msg">Required</span></div>
          </div>
          <div class="form-row">
            <div class="field full"><label for="email">Email</label><input id="email" type="email" required><span class="err-msg">Enter a valid email</span></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="phone">Phone Number</label><input id="phone" type="tel" required><span class="err-msg">Required</span></div>
            <div class="field">
              <label for="country">Country</label>
              <select id="country" required>
                <option value="">Select</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Germany</option>
                <option>France</option>
              </select>
              <span class="err-msg">Required</span>
            </div>
          </div>
          <div class="form-row">
            <div class="field full"><label for="address">Address</label><input id="address" required><span class="err-msg">Required</span></div>
          </div>
          <div class="form-row">
            <div class="field"><label for="city">City</label><input id="city" required><span class="err-msg">Required</span></div>
            <div class="field"><label for="postal">Postal Code</label><input id="postal" required><span class="err-msg">Required</span></div>
          </div>

          <h3 style="margin-top:8px;">Payment Method</h3>
          <div class="pay-methods" id="payMethods">
            <button type="button" class="pay-method active" data-pay="Visa">Visa</button>
            <button type="button" class="pay-method" data-pay="Mastercard">Mastercard</button>
            <button type="button" class="pay-method" data-pay="Amex">Amex</button>
            <button type="button" class="pay-method" data-pay="PayPal">PayPal</button>
            <button type="button" class="pay-method" data-pay="Google Pay">Google Pay</button>
            <button type="button" class="pay-method" data-pay="Apple Pay">Apple Pay</button>
          </div>

          <button type="submit" class="btn btn-primary btn-block" style="margin-top:8px;">Place Order — $79.99</button>

          <div class="security-row">
            <span><svg class="icon" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>256-bit SSL Encryption</span>
            <span><svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Secure Checkout</span>
            <span><svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>Trusted Payments</span>
          </div>
        </form>

        <div class="checkout-success" id="checkoutSuccess">
          <div class="check-circle"><svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg></div>
          <h3>Order Confirmed!</h3>
          <p>Order <strong id="orderNum"></strong> is on its way.</p>
          <p>A confirmation has been sent to your email.</p>
        </div>
      </div>

      <div class="order-summary reveal">
        <h4>Order Summary</h4>
        <div class="order-line"><span>PetPulse AI™ Smart Tag</span><span>$79.99</span></div>
        <div class="order-line"><span>Shipping</span><span style="color:var(--teal);">Free</span></div>
        <div class="order-line"><span>Estimated Tax</span><span>Calculated at order</span></div>
        <div class="order-line total"><span>Total</span><span>$79.99</span></div>
      </div>
    </div>
  </div>
</section>

<!-- ============ REVIEWS ============ -->
<section class="section" id="reviews">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Loved By Dog Owners</span>
      <h2>What The Pack Is Saying.</h2>
    </div>
    <div class="reviews-grid" id="reviewsGrid"></div>
  </div>
</section>

<!-- ============ FAQ ============ -->
<section class="section section--gray" id="faq">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Questions</span>
      <h2>Frequently Asked Questions.</h2>
    </div>
    <div class="faq-list" id="faqList"></div>
  </div>
</section>

<!-- ============ GUARANTEE ============ -->
<section class="section">
  <div class="container">
    <div class="guarantee reveal">
      <div class="inner">
        <div class="shield"><svg class="icon" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <h2>30-Day Money Back Guarantee</h2>
        <p>Love it or receive a full refund. No questions asked.</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ NEWSLETTER ============ -->
<section class="section newsletter" id="contact">
  <div class="container">
    <div class="reveal">
      <h2>Join Thousands Of Responsible Dog Owners</h2>
      <p>Tips, product updates, and early access — straight to your inbox.</p>
      <form class="newsletter-form" id="newsletterForm">
        <input type="email" placeholder="Enter your email" id="newsletterEmail" required>
        <button type="submit" class="btn btn-dark">Subscribe</button>
      </form>
      <div class="newsletter-msg" id="newsletterMsg">You're subscribed! Welcome to the pack. 🐾</div>
    </div>
  </div>
</section>

<!-- ============ FOOTER ============ -->
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <span class="logo"><span class="logo-mark"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2 7 4-14 2 7h6"/></svg></span>PetPulse AI™</span>
        <p>AI-powered health monitoring for dogs — because your dog can't tell you what's wrong.</p>
        <div class="social-row">
          <a href="#" aria-label="Instagram"><svg class="icon" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a href="#" aria-label="Facebook"><svg class="icon" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" aria-label="TikTok"><svg class="icon" viewBox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
          <a href="#" aria-label="YouTube"><svg class="icon" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4"/><polygon points="10 9 16 12 10 15 10 9"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#reviews">Reviews</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#how">How It Works</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms Of Service</a></li>
          <li><a href="#">Shipping Policy</a></li>
          <li><a href="#">Refund Policy</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span id="copyrightYear">© 2026 PetPulse AI™. All rights reserved.</span>
      <span>Made for dogs who can't ask for help.</span>
    </div>
  </div>
</footer>

<!-- ============ LIGHTBOX ============ -->
<div class="lightbox" id="lightbox">
  <div class="lightbox-inner">
    <button class="lightbox-close" id="lightboxClose" aria-label="Close"><svg class="icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    <button class="lightbox-prev" id="lightboxPrev" aria-label="Previous"><svg class="icon" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6"/></svg></button>
    <div class="lightbox-art art-tile" id="lightboxArt" style="cursor:default;"></div>
    <button class="lightbox-next" id="lightboxNext" aria-label="Next"><svg class="icon" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"/></svg></button>
    <p class="lightbox-caption" id="lightboxCaption"></p>
  </div>
</div>

<!-- ============ DEMO MODAL ============ -->
<div class="modal-overlay" id="demoModal">
  <div class="demo-modal">
    <button class="lightbox-close" id="demoClose" aria-label="Close"><svg class="icon" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    <div class="phone-ring-row" style="margin-bottom:18px;">
      <div class="phone-ring" style="--p:78;width:100px;height:100px;">
        <div class="phone-ring-inner" style="width:78px;height:78px;"><span class="num" id="demoHr">81</span><span class="lbl">BPM LIVE</span></div>
      </div>
    </div>
    <h3 style="color:#fff;margin-bottom:10px;">Live Monitoring, In Action</h3>
    <p style="color:#A9B4CC;font-size:14.5px;">This is what PetPulse AI sends to your phone every few seconds — heart rate, temperature, and activity, continuously, in the background.</p>
  </div>
</div>

<!-- ============ TOAST ============ -->
<div class="toast" id="toast"><svg class="icon" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg><span id="toastMsg">Added to cart</span></div>

<!-- ============ BACK TO TOP ============ -->
<button class="to-top" id="toTop" aria-label="Back to top"><svg class="icon" viewBox="0 0 24 24"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg></button>

<script>
/* ============ DATA ============ */
const galleryData = [
  {grad:'grad-1', icon:'tag', caption:'Front angle — PetPulse AI on a Golden Retriever'},
  {grad:'grad-2', icon:'tagClose', caption:'Close-up of the smart tag, side angle'},
  {grad:'grad-3', icon:'run', caption:'Real-time activity tracking on a run'},
  {grad:'grad-4', icon:'moon', caption:'Sleep quality monitored overnight'},
  {grad:'grad-5', icon:'phone', caption:'Checking the PetPulse AI app'},
  {grad:'grad-6', icon:'box', caption:'Premium unboxing experience'},
];
const iconPaths = {
  tag:'<path d="M12 2 2 12l10 10 10-10z"/><circle cx="12" cy="12" r="3"/>',
  tagClose:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/>',
  run:'<circle cx="13" cy="4" r="2"/><path d="M4 18l4-4 3 2 5-6 4 3"/>',
  moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  phone:'<rect x="7" y="2" width="10" height="20" rx="2"/><line x1="10" y1="19" x2="14" y2="19"/>',
  box:'<path d="M21 8 12 3 3 8l9 5 9-5z"/><path d="M3 8v9l9 5 9-5V8"/><line x1="12" y1="13" x2="12" y2="22"/>',
};
const featuresData = [
  {icon:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>', title:'Heart Rate Monitoring', desc:'Track heart activity throughout the day.'},
  {icon:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>', title:'Temperature Monitoring', desc:'Monitor body temperature trends.'},
  {icon:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>', title:'Activity Tracking', desc:'Walks, playtime and daily movement.'},
  {icon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>', title:'Sleep Analysis', desc:'Monitor sleep quality and recovery.'},
  {icon:'<path d="M3 12h4l2-7 4 14 2-7h6"/>', title:'Stress Detection', desc:"AI identifies unusual behavior patterns."},
  {icon:'<path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/>', title:'Health Insights', desc:'Receive personalized wellness reports.'},
  {icon:'<path d="M12 2.69s-5 5.27-5 9.31a5 5 0 0 0 10 0c0-4.04-5-9.31-5-9.31z"/>', title:'Waterproof Design', desc:'IP68-rated, built for active dogs.'},
  {icon:'<rect x="2" y="7" width="18" height="10" rx="2"/><line x1="22" y1="11" x2="22" y2="13"/>', title:'Rechargeable Battery', desc:'Up to 30-day battery life per charge.'},
  {icon:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>', title:'GPS Tracking Premium', desc:'Locate your dog anytime, anywhere.'},
  {icon:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>', title:'Lost Dog Alerts', desc:'Immediate location notifications.'},
  {icon:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>', title:'Family Sharing', desc:'Share pet data with the whole family.'},
  {icon:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/><line x1="9" y1="11" x2="15" y2="11"/>', title:'Veterinary Reports', desc:'Download clean, shareable health reports.'},
];
const specsData = [
  {icon:'<path d="M6 9l6 6 6-6"/><path d="M6 5h12"/>', val:'25g', lbl:'Weight'},
  {icon:'<rect x="2" y="7" width="18" height="10" rx="2"/><line x1="22" y1="11" x2="22" y2="13"/>', val:'30 Days', lbl:'Battery'},
  {icon:'<polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>', val:'Magnetic USB-C', lbl:'Charging'},
  {icon:'<path d="M12 2.69s-5 5.27-5 9.31a5 5 0 0 0 10 0c0-4.04-5-9.31-5-9.31z"/>', val:'IP68', lbl:'Water Resistance'},
  {icon:'<path d="M2 12a10 10 0 1 1 4 8"/><polyline points="2 16 2 22 8 22"/>', val:'Bluetooth 5.3', lbl:'Connectivity'},
  {icon:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>', val:'Premium Version', lbl:'GPS'},
  {icon:'<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18"/>', val:'iOS & Android', lbl:'Mobile Apps'},
];
const reviewsData = [
  {name:'Sarah M.', text:'This helped me notice unusual behavior before it became serious.'},
  {name:'David R.', text:"The best pet tech purchase I've ever made."},
  {name:'Jessica T.', text:'I feel safer knowing my dog is monitored daily.'},
  {name:'Michael W.', text:'Amazing battery life and easy setup.'},
  {name:'Emma K.', text:'Premium quality and a beautiful app.'},
];
const faqData = [
  {q:'How accurate is PetPulse AI?', a:"PetPulse AI uses clinical-grade sensors validated against veterinary monitoring equipment, with continuous on-device AI calibration tuned to your individual dog's baseline."},
  {q:'Can I use it on any dog breed?', a:"Yes — the adjustable clip fits any standard collar from toy breeds to giant breeds, and the AI model adapts its baseline to your dog's size and breed profile."},
  {q:'Is it waterproof?', a:"PetPulse AI is IP68 rated, so it's fully protected against rain, mud, swimming, and everyday splashes."},
  {q:'How long does the battery last?', a:'A single charge lasts up to 30 days under typical use, with a quick magnetic USB-C cable included for top-ups.'},
  {q:'Does GPS require a subscription?', a:'Premium GPS tracking is included free for your first 3 months. After that, it continues as an optional monthly add-on inside the app.'},
  {q:'Can multiple family members use the app?', a:'Yes — Family Sharing lets you invite anyone in your household to view live data and receive the same real-time alerts.'},
];

/* ============ RENDER ============ */
function renderGallery(){
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = galleryData.map((g,i)=>`
    <div class="art-tile reveal ${g.grad}" data-index="${i}">
      <div class="art-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round">${iconPaths[g.icon]}</svg></div>
      <div class="zoom-hint"><svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div>
      <div class="art-caption">${g.caption}</div>
    </div>`).join('');
  grid.querySelectorAll('.art-tile').forEach(t=>t.addEventListener('click',()=>openLightbox(parseInt(t.dataset.index))));
}
function renderFeatures(){
  document.getElementById('featuresGrid').innerHTML = featuresData.map(f=>`
    <div class="feature-card reveal">
      <div class="feature-icon"><svg class="icon" viewBox="0 0 24 24">${f.icon}</svg></div>
      <h3>${f.title}</h3><p>${f.desc}</p>
    </div>`).join('');
}
function renderSpecs(){
  document.getElementById('specsGrid').innerHTML = specsData.map(s=>`
    <div class="spec-card reveal">
      <div class="icon-wrap"><svg class="icon" viewBox="0 0 24 24">${s.icon}</svg></div>
      <div class="val">${s.val}</div><div class="lbl">${s.lbl}</div>
    </div>`).join('');
}
function renderReviews(){
  const stars = Array(5).fill('<svg class="icon" viewBox="0 0 24 24"><polygon points="12 2 15 9 22 9 16.5 13.5 18.5 21 12 16.7 5.5 21 7.5 13.5 2 9 9 9"/></svg>').join('');
  document.getElementById('reviewsGrid').innerHTML = reviewsData.map(r=>`
    <div class="review-card reveal">
      <div class="stars">${stars}</div>
      <p class="quote">"${r.text}"</p>
      <div class="review-author">
        <div class="avatar">${r.name.charAt(0)}</div>
        <div><div class="name">${r.name}</div></div>
      </div>
    </div>`).join('');
}
function renderFaq(){
  document.getElementById('faqList').innerHTML = faqData.map((f,i)=>`
    <div class="faq-item reveal" data-index="${i}">
      <button class="faq-q">${f.q}<svg class="icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg></button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>`).join('');
  document.querySelectorAll('.faq-q').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const item = btn.closest('.faq-item');
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i=>{i.classList.remove('open'); i.querySelector('.faq-a').style.maxHeight=null;});
      if(!open){ item.classList.add('open'); const a=item.querySelector('.faq-a'); a.style.maxHeight = a.scrollHeight+'px'; }
    });
  });
}
renderGallery(); renderFeatures(); renderSpecs(); renderReviews(); renderFaq();

/* ============ NAV SCROLL ============ */
const nav = document.getElementById('nav');
window.addEventListener('scroll', ()=>{
  nav.classList.toggle('scrolled', window.scrollY > 40);
  document.getElementById('toTop').classList.toggle('show', window.scrollY > 700);
});

/* ============ MOBILE MENU ============ */
const mobileMenu = document.getElementById('mobileMenu');
document.getElementById('hamburgerBtn').addEventListener('click', ()=>mobileMenu.classList.add('open'));
document.getElementById('closeMenuBtn').addEventListener('click', ()=>mobileMenu.classList.remove('open'));
document.querySelectorAll('.mlink').forEach(l=>l.addEventListener('click', ()=>mobileMenu.classList.remove('open')));

/* ============ SCROLL REVEAL ============ */
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); observer.unobserve(e.target); } });
}, {threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
// re-observe dynamically added reveal elements (in case any were added after initial query)
setTimeout(()=>{ document.querySelectorAll('.reveal:not(.in)').forEach(el=>observer.observe(el)); }, 50);

/* ============ LIGHTBOX ============ */
let lbIndex = 0;
const lightbox = document.getElementById('lightbox');
function openLightbox(i){
  lbIndex = i;
  paintLightbox();
  lightbox.classList.add('open');
}
function paintLightbox(){
  const g = galleryData[lbIndex];
  const art = document.getElementById('lightboxArt');
  art.className = 'lightbox-art art-tile ' + g.grad;
  art.innerHTML = `<div class="art-icon" style="opacity:1;"><svg viewBox="0 0 24 24" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">${iconPaths[g.icon]}</svg></div>`;
  document.getElementById('lightboxCaption').textContent = g.caption;
}
document.getElementById('lightboxClose').addEventListener('click', ()=>lightbox.classList.remove('open'));
lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) lightbox.classList.remove('open'); });
document.getElementById('lightboxPrev').addEventListener('click', ()=>{ lbIndex=(lbIndex-1+galleryData.length)%galleryData.length; paintLightbox(); });
document.getElementById('lightboxNext').addEventListener('click', ()=>{ lbIndex=(lbIndex+1)%galleryData.length; paintLightbox(); });
document.addEventListener('keydown', (e)=>{
  if(!lightbox.classList.contains('open')) return;
  if(e.key==='Escape') lightbox.classList.remove('open');
  if(e.key==='ArrowLeft') document.getElementById('lightboxPrev').click();
  if(e.key==='ArrowRight') document.getElementById('lightboxNext').click();
});

/* ============ DEMO MODAL ============ */
const demoModal = document.getElementById('demoModal');
document.getElementById('watchDemoBtn').addEventListener('click', ()=>demoModal.classList.add('open'));
document.getElementById('demoClose').addEventListener('click', ()=>demoModal.classList.remove('open'));
demoModal.addEventListener('click', (e)=>{ if(e.target===demoModal) demoModal.classList.remove('open'); });

/* ============ CART / TOAST ============ */
let cartCount = 0;
const cartCountEl = document.getElementById('cartCount');
const toast = document.getElementById('toast');
const toastMsg = document.getElementById('toastMsg');
function showToast(msg){
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(()=>toast.classList.remove('show'), 2400);
}
function addToCart(){
  cartCount++;
  cartCountEl.textContent = cartCount;
  showToast('Added PetPulse AI™ to cart');
}
document.getElementById('addToCartBtn').addEventListener('click', addToCart);
document.getElementById('cartBtn').addEventListener('click', ()=>{
  if(cartCount===0){ showToast('Your cart is empty'); } else { document.getElementById('pricing').scrollIntoView({behavior:'smooth'}); }
});

/* ============ PAYMENT METHOD SELECT ============ */
document.querySelectorAll('.pay-method').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.pay-method').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

/* ============ CHECKOUT FORM ============ */
const checkoutForm = document.getElementById('checkoutForm');
checkoutForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let valid = true;
  const required = ['fname','lname','phone','address','city','postal'];
  required.forEach(id=>{
    const input = document.getElementById(id);
    const field = input.closest('.field');
    if(!input.value.trim()){ field.classList.add('error'); valid = false; } else { field.classList.remove('error'); }
  });
  const emailInput = document.getElementById('email');
  const emailField = emailInput.closest('.field');
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
  if(!emailOk){ emailField.classList.add('error'); valid = false; } else { emailField.classList.remove('error'); }
  const countryInput = document.getElementById('country');
  const countryField = countryInput.closest('.field');
  if(!countryInput.value){ countryField.classList.add('error'); valid = false; } else { countryField.classList.remove('error'); }

  if(!valid){ showToast('Please fill in all required fields'); return; }

  const orderNum = 'PP-' + Math.floor(100000 + Math.random()*899999);
  document.getElementById('orderNum').textContent = orderNum;
  checkoutForm.classList.add('hidden');
  document.getElementById('checkoutSuccess').classList.add('show');
  cartCount = 0; cartCountEl.textContent = cartCount;
  showToast('Order placed successfully');
});

/* ============ NEWSLETTER ============ */
document.getElementById('newsletterForm').addEventListener('submit', (e)=>{
  e.preventDefault();
  const input = document.getElementById('newsletterEmail');
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())){ showToast('Enter a valid email address'); return; }
  document.getElementById('newsletterMsg').classList.add('show');
  input.value = '';
});

/* ============ BACK TO TOP ============ */
document.getElementById('toTop').addEventListener('click', ()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ============ LIVE DASHBOARD NUMBERS ============ */
function jitter(base, range){ return Math.round(base + (Math.random()*range*2 - range)); }
setInterval(()=>{
  const hr = jitter(81, 4);
  document.getElementById('heroHr').innerHTML = hr + '<span>bpm</span>';
  document.getElementById('phoneHr').textContent = hr;
  document.getElementById('demoHr').textContent = hr;
  document.getElementById('heroAct').innerHTML = jitter(91, 3) + '<span>/100</span>';
}, 2200);

/* phone activity bars */
const barsEl = document.getElementById('phoneBars');
const barCount = 14;
for(let i=0;i<barCount;i++){ const s=document.createElement('span'); s.style.height = (20+Math.random()*26)+'px'; barsEl.appendChild(s); }
setInterval(()=>{
  barsEl.querySelectorAll('span').forEach(s=>{ s.style.transition='height .8s ease'; s.style.height=(18+Math.random()*28)+'px'; });
}, 1800);

/* footer year (kept in sync, currently displays 2026) */
document.getElementById('copyrightYear').textContent = '© ' + new Date().getFullYear() + ' PetPulse AI™. All rights reserved.';
</script>
</body>
</html>
