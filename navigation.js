(()=> {
const $=id=>document.getElementById(id);
const labels={
 ar:{home:'الرئيسية',trips:'رحلاتي',messages:'الرسائل',more:'المزيد',notifications:'الإشعارات',saved:'الأماكن المحفوظة',payments:'المدفوعات',account:'حسابي',support:'المساعدة',logout:'تسجيل الخروج',quick:'تنقّل بسهولة',back:'العودة للرئيسية'},
 fr:{home:'Accueil',trips:'Mes trajets',messages:'Messages',more:'Plus',notifications:'Notifications',saved:'Adresses enregistrées',payments:'Paiements',account:'Mon compte',support:'Assistance',logout:'Déconnexion',quick:'Naviguez facilement',back:'Retour à l’accueil'}
};
let current='home',built=false,observer;
const lang=()=>labels[document.documentElement.lang==='fr'?'fr':'ar'];
function style(){
 if($('mercobNavStyles'))return;
 const s=document.createElement('style');s.id='mercobNavStyles';s.textContent=`
 .app-shell:has(#mercobTopNav){max-width:1180px;padding:18px 28px 32px;overflow:visible;min-height:100dvh}
 #mercobTopNav{position:sticky;top:0;z-index:50;display:flex;align-items:center;gap:8px;margin:10px 0 24px;padding:10px 12px;border:1px solid #edf0f4;border-radius:18px;background:rgba(255,255,255,.96);box-shadow:0 8px 28px rgba(11,27,46,.07);backdrop-filter:blur(14px)}
 #mercobTopNav .mn-primary{display:flex;align-items:center;gap:5px;flex:1;min-width:0}
 #mercobTopNav button{font:700 13px/1.3 'Cairo',sans-serif;white-space:nowrap;border:0;background:transparent;color:#667085;border-radius:12px;padding:11px 15px;min-height:42px}
 #mercobTopNav button:hover{background:#fff3eb;color:#e65300}
 #mercobTopNav button[aria-current=page]{background:#fff0e6;color:#e65300}
 #mercobTopNav .mn-icon{font-size:17px;margin-inline-end:6px}
 #mercobTopNav .mn-more-wrap{position:relative}
 #mercobTopNav .mn-menu{position:absolute;top:calc(100% + 9px);inset-inline-end:0;display:none;min-width:205px;padding:7px;background:#fff;border:1px solid #edf0f4;border-radius:15px;box-shadow:0 16px 42px #0b1b2e20}
 #mercobTopNav .mn-menu.open{display:grid}
 #mercobTopNav .mn-menu button{text-align:start;width:100%;white-space:normal}
 #mercobTopNav .mn-account{margin-inline-start:auto;background:#0b1b2e!important;color:#fff!important}
 .rider-features .rf-nav{display:none!important}
 .rider-features{margin-top:0!important}
 #homeScreen .home-welcome{margin-bottom:20px}
 #homeScreen.mn-subview .home-welcome,#homeScreen.mn-subview .home-hero,#homeScreen.mn-subview #rideRequestForm,#homeScreen.mn-subview .home-section-title,#homeScreen.mn-subview #recentRides,#homeScreen.mn-subview .home-logout{display:none!important}
 #homeScreen.mn-subview #riderFeatures{display:block!important}
 #homeScreen.mn-home #riderFeatures{display:none!important}
 #homeScreen.mn-subview{min-height:55vh}
 @media(max-width:760px){
  .app-shell:has(#mercobTopNav){padding:12px 12px 24px}
  #mercobTopNav{margin:8px 0 18px;padding:7px;gap:2px;border-radius:15px;overflow:visible}
  #mercobTopNav .mn-primary{gap:1px;overflow-x:auto;scrollbar-width:none}
  #mercobTopNav .mn-primary::-webkit-scrollbar{display:none}
  #mercobTopNav button{padding:10px 9px;font-size:12px;min-height:40px}
  #mercobTopNav .mn-icon{margin-inline-end:3px}
  #mercobTopNav .mn-account{display:none}
  #mercobTopNav .mn-menu{position:fixed;top:120px;inset-inline:12px;z-index:60;min-width:0}
 }
 `;document.head.appendChild(s)
}
function build(){
 const top=$('.topbar'),home=$('homeScreen');
 if(!top||!home||$('mercobTopNav'))return;
 const nav=document.createElement('nav');nav.id='mercobTopNav';nav.setAttribute('aria-label',document.documentElement.lang==='fr'?'Navigation principale':'التنقل الرئيسي');
 nav.innerHTML='<div class="mn-primary"><button type="button" data-page="home"><span class="mn-icon">⌂</span><span data-label="home"></span></button><button type="button" data-page="trips"><span class="mn-icon">↗</span><span data-label="trips"></span></button><button type="button" data-page="messages"><span class="mn-icon">▤</span><span data-label="messages"></span></button><div class="mn-more-wrap"><button type="button" id="mnMore" aria-expanded="false"><span class="mn-icon">☷</span><span data-label="more"></span>⌄</button><div class="mn-menu" id="mnMenu"><button type="button" data-page="notifications">♢ <span data-label="notifications"></span></button><button type="button" data-page="saved">⌖ <span data-label="saved"></span></button><button type="button" data-page="payments">◇ <span data-label="payments"></span></button><button type="button" data-page="support">? <span data-label="support"></span></button></div></div></div><button type="button" class="mn-account" data-page="account"><span class="mn-icon">●</span><span data-label="account"></span></button>';
 top.insertAdjacentElement('afterend',nav);
 nav.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.page)));
 $('mnMore').addEventListener('click',()=>{const menu=$('mnMenu'),open=!menu.classList.contains('open');menu.classList.toggle('open',open);$('mnMore').setAttribute('aria-expanded',String(open))});
 document.addEventListener('click',e=>{if(!nav.contains(e.target)){$('mnMenu')?.classList.remove('open');$('mnMore')?.setAttribute('aria-expanded','false')}});
 built=true;translate();go('home');
}
function translate(){if(!$('mercobTopNav'))return;const L=lang();$('mercobTopNav').querySelectorAll('[data-label]').forEach(n=>n.textContent=L[n.dataset.label]||n.dataset.label);$('mercobTopNav').setAttribute('aria-label',document.documentElement.lang==='fr'?'Navigation principale':'التنقل الرئيسي')}
function go(page){
 const home=$('homeScreen'),nav=$('mercobTopNav');if(!home||!nav)return;
 current=page;home.classList.toggle('mn-home',page==='home');home.classList.toggle('mn-subview',page!=='home');
 nav.querySelectorAll('[data-page]').forEach(b=>{if(b.dataset.page===page)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
 $('mnMenu')?.classList.remove('open');$('mnMore')?.setAttribute('aria-expanded','false');
 if(page==='home'){home.scrollIntoView({behavior:'smooth',block:'start'});return}
 const rf=$('riderFeatures');if(rf){rf.style.display='block';const tab=rf.querySelector('[data-tab="'+page+'"]');if(tab)tab.click();else if(page==='account')rf.querySelector('[data-tab="account"]')?.click();rf.scrollIntoView({behavior:'smooth',block:'start'})}
}
function init(){
 style();build();
 const home=$('homeScreen');
 if(home&&!observer){observer=new MutationObserver(()=>{if(!built)build();if(current!=='home'&&$('riderFeatures'))go(current)});observer.observe(home,{childList:true,subtree:true})}
}
document.addEventListener('mercob:authenticated',()=>setTimeout(init,30));
window.addEventListener('mercob-supabase-ready',()=>setTimeout(init,50));
document.addEventListener('mercob:signed-out',()=>{if($('mercobTopNav'))$('mercobTopNav').remove();built=false;current='home';$('mercobNavStyles')?.remove()});
$('languageSwitch')?.addEventListener('click',()=>setTimeout(translate,0));
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();