(()=> {
const $=id=>document.getElementById(id);

// Remove the retired home greeting from the live DOM, including if an older
// cached HTML version still contains it. This does not touch the ride form/map.
function removeRetiredHomeGreeting(){
 const root=$('homeScreen');
 if(!root)return;
 root.querySelectorAll('.home-welcome').forEach(node=>node.remove());
 root.querySelectorAll('[data-i18n="homeKicker"]').forEach(node=>{
  if((node.textContent||'').trim()==='Votre espace MERCOB'||(node.textContent||'').trim()==='مساحتك في MERCOB'){
   const section=node.closest('.home-welcome')||node.parentElement?.parentElement;
   if(section&&root.contains(section))section.remove();
  }
 });
}
removeRetiredHomeGreeting();
if(document.body&&!window.__mercobGreetingCleanupObserver){
 const observer=new MutationObserver(()=>removeRetiredHomeGreeting());
 observer.observe(document.body,{childList:true,subtree:true});
 window.__mercobGreetingCleanupObserver=observer;
}
const labels={
 ar:{home:'الرئيسية',trips:'رحلاتي',messages:'الرسائل',more:'المزيد',notifications:'الإشعارات',saved:'الأماكن المحفوظة',payments:'المدفوعات',account:'حسابي',support:'المساعدة',logout:'تسجيل الخروج',quick:'تنقّل بسهولة',back:'العودة للرئيسية'},
 fr:{home:'Accueil',trips:'Mes trajets',messages:'Messages',more:'Plus',notifications:'Notifications',saved:'Adresses enregistrées',payments:'Paiements',account:'Mon compte',support:'Assistance',logout:'Déconnexion',quick:'Naviguez facilement',back:'Retour à l’accueil'}
};
let current='home',built=false,visibilityObserver;
const lang=()=>labels[document.documentElement.lang==='fr'?'fr':'ar'];
function style(){
 if($('mercobNavStyles'))return;
 const s=document.createElement('style');s.id='mercobNavStyles';s.textContent=`
 .app-shell:has(#mercobTopNav){max-width:1180px;padding:18px 28px 32px;overflow:visible;min-height:100dvh}
 #mercobTopNav{position:sticky;top:0;z-index:50;display:flex;align-items:center;gap:8px;margin:10px 0 24px;padding:10px 12px;border:1px solid #edf0f4;border-radius:18px;background:rgba(255,255,255,.96);box-shadow:0 8px 28px rgba(11,27,46,.07);backdrop-filter:blur(14px)}
 #mercobTopNav .mn-primary{display:flex;align-items:center;gap:5px;flex:1;min-width:0}
 #mercobTopNav button{font:600 12px/1.4 "IBM Plex Sans Arabic",sans-serif;white-space:nowrap;border:0;background:transparent;color:#667085;border-radius:12px;padding:11px 15px;min-height:42px}
 #mercobTopNav button:hover{background:#fff3eb;color:#e65300}
 #mercobTopNav button[aria-current=page]{background:#fff0e6;color:#e65300}
 #mercobTopNav .mn-icon{font-size:17px;margin-inline-end:6px}
 #mercobTopNav .mn-more-wrap{position:relative}
 #mercobTopNav .mn-menu{position:absolute;top:calc(100% + 9px);inset-inline-end:0;display:none;min-width:205px;padding:7px;background:#fff;border:1px solid #edf0f4;border-radius:15px;box-shadow:0 16px 42px #0b1b2e20}
 #mercobTopNav .mn-menu.open{display:grid}
 #mercobTopNav .mn-menu button{text-align:start;width:100%;white-space:normal}
 #mercobTopNav .mn-account{margin-inline-start:auto;background:#0b1b2e!important;color:#fff!important}
 .topbar .top-account-button{display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:7px!important;flex:0 0 auto!important;margin-inline-start:auto!important;min-height:39px!important;padding:8px 12px!important;border:1px solid #25394c!important;border-radius:12px!important;background:#0b1b2e!important;color:#fff!important;font:600 12px/1.25 Inter,"IBM Plex Sans Arabic",sans-serif!important;white-space:nowrap!important;box-shadow:none!important}
 .topbar .top-account-button:hover{background:#203747!important;color:#fff!important}
 .topbar .top-account-button[aria-current=page]{background:#fff0e6!important;color:#c94c0a!important;border-color:#f7dfd1!important}
 .topbar .top-account-button .mn-icon{display:inline-flex!important;align-items:center!important;justify-content:center!important;width:17px!important;height:17px!important;margin:0!important;flex:0 0 17px!important;font-size:15px!important}
 .topbar .top-account-button .mn-icon svg{display:block;width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
 .topbar .top-account-button [data-label]{display:inline-block!important}
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
  .topbar{gap:7px}
  .topbar .top-account-button{min-height:36px!important;padding:7px 9px!important;gap:5px!important;font-size:11px!important}
  .topbar .top-account-button .mn-icon,.topbar .top-account-button .mn-icon svg{width:15px!important;height:15px!important;flex-basis:15px!important}
  #mercobTopNav .mn-menu{position:fixed;top:120px;inset-inline:12px;z-index:60;min-width:0}
 }

 /* Navigation refinement: calmer hierarchy, clearer spacing, less visual bulk */
 #mercobTopNav{
  gap:10px!important;
  margin:8px 0 22px!important;
  padding:7px 9px!important;
  border:1px solid #e9edf2!important;
  border-radius:14px!important;
  background:rgba(255,255,255,.94)!important;
  box-shadow:0 3px 12px rgba(11,27,46,.035)!important;
  backdrop-filter:blur(12px);
 }
 #mercobTopNav .mn-primary{gap:3px!important}
 #mercobTopNav button{
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  gap:5px!important;
  min-height:39px!important;
  padding:9px 12px!important;
  border-radius:10px!important;
  color:#596779!important;
  font-size:12px!important;
  font-weight:700!important;
  transition:background-color .16s ease,color .16s ease!important;
 }
 #mercobTopNav button:hover{background:#f5f6f8!important;color:#26384d!important}
 #mercobTopNav button[aria-current=page]{
  background:#fff2e9!important;
  color:#c94c0a!important;
  box-shadow:inset 0 0 0 1px #f7dfd1!important;
 }
 #mercobTopNav .mn-icon{display:inline-flex!important;align-items:center;justify-content:center;width:17px;height:17px;flex:0 0 17px;font-size:15px!important;margin:0!important;opacity:.88}
 #mercobTopNav .mn-icon svg,#mercobTopNav .mn-inline-icon{display:block;width:17px;height:17px;fill:none;stroke:currentColor;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round}
 #mercobTopNav .mn-inline-icon{width:15px;height:15px;vertical-align:middle;margin-inline-end:7px}
 #mercobTopNav .mn-menu button{display:flex!important;align-items:center!important;justify-content:flex-start!important;gap:2px!important}
 #mercobTopNav .mn-account{
  margin-inline-start:auto!important;
  background:#f3f5f7!important;
  color:#26384d!important;
  border:1px solid #e7ebf0!important;
 }
 #mercobTopNav .mn-account[aria-current=page]{background:#fff2e9!important;color:#c94c0a!important;border-color:#f7dfd1!important}
 #mercobTopNav .mn-menu{
  padding:6px!important;
  border-color:#e8ecf1!important;
  border-radius:13px!important;
  box-shadow:0 12px 32px rgba(11,27,46,.12)!important;
 }
 @media(max-width:760px){
  #mercobTopNav{
   margin:6px 0 16px!important;
   padding:5px!important;
   gap:3px!important;
   border-radius:13px!important;
  }
  #mercobTopNav .mn-primary{gap:2px!important;min-width:0}
  #mercobTopNav .mn-primary>button,
  #mercobTopNav .mn-more-wrap>button{
   flex:0 0 auto!important;
   min-height:38px!important;
   padding:8px 10px!important;
   font-size:11px!important;
  }
  #mercobTopNav .mn-icon{font-size:14px!important}
  #mercobTopNav .mn-menu{top:108px!important;max-height:calc(100dvh - 130px);overflow-y:auto}
 }
 @media(max-width:390px){
  #mercobTopNav .mn-primary>button,
  #mercobTopNav .mn-more-wrap>button{padding:8px 7px!important;font-size:10px!important;gap:3px!important}
 }
 
  /* MERCOB navigation: four balanced horizontal tabs at the top */
  #mercobTopNav{
   display:block!important;width:100%!important;box-sizing:border-box!important;
   margin:10px 0 20px!important;padding:5px!important;min-height:0!important;
   border:1px solid #e6eaf0!important;border-radius:14px!important;
   background:#fff!important;box-shadow:0 3px 14px rgba(24,43,58,.045)!important;
  }
  #mercobTopNav .mn-primary{
   display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;
   width:100%!important;min-width:0!important;gap:4px!important;align-items:stretch!important;
  }
  #mercobTopNav .mn-primary>button,
  #mercobTopNav .mn-more-wrap>button{
   display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:center!important;
   box-sizing:border-box!important;width:100%!important;min-width:0!important;min-height:44px!important;
   padding:9px 6px!important;gap:6px!important;border:1px solid transparent!important;border-radius:10px!important;
   background:transparent!important;color:#5e6c7b!important;
   font:600 11.5px/1.25 Inter,"IBM Plex Sans Arabic",sans-serif!important;
   text-align:center!important;white-space:nowrap!important;letter-spacing:0!important;
   box-shadow:none!important;transition:background-color .16s ease,border-color .16s ease,color .16s ease!important;
  }
  #mercobTopNav .mn-primary>button:hover,
  #mercobTopNav .mn-more-wrap>button:hover{background:#f6f7f9!important;color:#27394b!important}
  #mercobTopNav .mn-primary>button[aria-current="page"]{
   background:#fff1e8!important;border-color:#f5dfd2!important;color:#bd4d16!important;
  }
  #mercobTopNav .mn-icon{
   display:inline-flex!important;align-items:center!important;justify-content:center!important;
   width:17px!important;height:17px!important;flex:0 0 17px!important;margin:0!important;
   color:currentColor!important;opacity:1!important;font-size:15px!important;
  }
  #mercobTopNav .mn-icon svg{
   display:block!important;width:17px!important;height:17px!important;fill:none!important;
   stroke:currentColor!important;stroke-width:1.75!important;stroke-linecap:round!important;stroke-linejoin:round!important;
  }
  #mercobTopNav .mn-primary>button [data-label],
  #mercobTopNav .mn-more-wrap>button [data-label]{
   display:inline-block!important;min-width:0!important;overflow:hidden!important;text-overflow:ellipsis!important;
  }
  #mercobTopNav .mn-more-wrap{position:relative!important;display:block!important;min-width:0!important}
  #mercobTopNav .mn-menu{
   top:calc(100% + 8px)!important;inset-inline-end:0!important;z-index:100!important;
   min-width:215px!important;padding:6px!important;border:1px solid #e6ebf0!important;border-radius:13px!important;
   background:#fff!important;box-shadow:0 14px 34px rgba(24,43,58,.13)!important;
  }
  #mercobTopNav .mn-menu button{
   display:flex!important;flex-direction:row!important;align-items:center!important;justify-content:flex-start!important;
   width:100%!important;min-width:0!important;min-height:42px!important;padding:10px 12px!important;gap:9px!important;
   border:0!important;border-radius:9px!important;background:transparent!important;color:#4d5d6d!important;
   font:500 12px/1.4 Inter,"IBM Plex Sans Arabic",sans-serif!important;text-align:start!important;white-space:normal!important;
  }
  #mercobTopNav .mn-menu button:hover{background:#f5f7f9!important;color:#bd4d16!important}
  #mercobTopNav .mn-inline-icon{
   display:block!important;width:16px!important;height:16px!important;flex:0 0 16px!important;margin:0!important;
   fill:none!important;stroke:currentColor!important;stroke-width:1.7!important;stroke-linecap:round!important;stroke-linejoin:round!important;
  }
  #mercobTopNav button:focus-visible{outline:3px solid rgba(232,91,32,.23)!important;outline-offset:2px!important}
  @media(max-width:760px){
   #mercobTopNav{margin:8px 0 16px!important;padding:4px!important;border-radius:12px!important}
   #mercobTopNav .mn-primary{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:2px!important}
   #mercobTopNav .mn-primary>button,
   #mercobTopNav .mn-more-wrap>button{
    min-height:40px!important;padding:8px 3px!important;gap:4px!important;border-radius:9px!important;font-size:10.5px!important;
   }
   #mercobTopNav .mn-icon,#mercobTopNav .mn-icon svg{width:16px!important;height:16px!important;flex-basis:16px!important}
   #mercobTopNav .mn-menu{
    position:fixed!important;top:112px!important;inset-inline:12px!important;min-width:0!important;
    max-height:calc(100dvh - 132px)!important;overflow-y:auto!important;
   }
  }
  @media(max-width:390px){
   #mercobTopNav .mn-primary>button,
   #mercobTopNav .mn-more-wrap>button{padding:7px 2px!important;gap:3px!important;font-size:9.5px!important}
   #mercobTopNav .mn-icon,#mercobTopNav .mn-icon svg{width:15px!important;height:15px!important;flex-basis:15px!important}
  }

  `;document.head.appendChild(s)
}
function build(){
 const top=document.querySelector('.topbar'),home=$('homeScreen');
 if(!top||!home||home.hidden||$('mercobTopNav'))return;
 const nav=document.createElement('nav');nav.id='mercobTopNav';nav.setAttribute('aria-label',document.documentElement.lang==='fr'?'Navigation principale':'التنقل الرئيسي');
 nav.innerHTML='<div class="mn-primary"><button type="button" data-page="home"><span class="mn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m3.5 10 8.5-7 8.5 7v10a1 1 0 0 1-1 1h-5.2v-6.5H9.7V21H4.5a1 1 0 0 1-1-1z"/></svg></span><span data-label="home"></span></button><button type="button" data-page="trips"><span class="mn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 4.5h10M17 4.5v10M17 4.5 6 15.5"/><path d="M5 8.5v10a2 2 0 0 0 2 2h10"/></svg></span><span data-label="trips"></span></button><button type="button" data-page="messages"><span class="mn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5.5h16v13H4z"/><path d="M7.5 9h9M7.5 12h9M7.5 15h5"/></svg></span><span data-label="messages"></span></button><div class="mn-more-wrap"><button type="button" id="mnMore" aria-expanded="false"><span class="mn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg></span><span data-label="more"></span>⌄</button><div class="mn-menu" id="mnMenu"><button type="button" data-page="notifications"><svg class="mn-inline-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg><span data-label="notifications"></span></button><button type="button" data-page="saved"><svg class="mn-inline-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span data-label="saved"></span></button><button type="button" data-page="payments"><svg class="mn-inline-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg><span data-label="payments"></span></button><button type="button" data-page="support"><svg class="mn-inline-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 1 1 4.2 2c-1.2.9-1.7 1.3-1.7 2.8M12 17.5v.1"/></svg><span data-label="support"></span></button><button type="button" data-page="logout"><svg class="mn-inline-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5M14 8l4 4-4 4M18 12H9"/></svg><span data-label="logout"></span></button></div></div></div><button type="button" class="mn-account" data-page="account"><span class="mn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M4.5 20c.5-4 3.2-6 7.5-6s7 2 7.5 6"/></svg></span><span data-label="account"></span></button>';
 const accountButton=nav.querySelector('.mn-account');
 if(accountButton){
  accountButton.id='mercobTopAccount';
  accountButton.classList.add('top-account-button');
  top.insertBefore(accountButton,$('languageSwitch'));
  accountButton.addEventListener('click',()=>go('account'));
 }
 top.insertAdjacentElement('afterend',nav);
 nav.querySelectorAll('[data-page]').forEach(b=>b.addEventListener('click',()=>go(b.dataset.page)));
 $('mnMore').addEventListener('click',()=>{const menu=$('mnMenu'),open=!menu.classList.contains('open');menu.classList.toggle('open',open);$('mnMore').setAttribute('aria-expanded',String(open))});
 document.addEventListener('click',e=>{if(!nav.contains(e.target)){$('mnMenu')?.classList.remove('open');$('mnMore')?.setAttribute('aria-expanded','false')}});
 built=true;translate();go('home');
}
function translate(){if(!$('mercobTopNav'))return;const L=lang();$('mercobTopNav').querySelectorAll('[data-label]').forEach(n=>n.textContent=L[n.dataset.label]||n.dataset.label);const accountLabel=$('mercobTopAccount')?.querySelector('[data-label="account"]');if(accountLabel)accountLabel.textContent=L.account;$('mercobTopNav').setAttribute('aria-label',document.documentElement.lang==='fr'?'Navigation principale':'التنقل الرئيسي')}
function go(page){
 const home=$('homeScreen'),nav=$('mercobTopNav');if(!home||!nav)return;
 current=page;home.classList.toggle('mn-home',page==='home');home.classList.toggle('mn-subview',page!=='home');
 nav.querySelectorAll('[data-page]').forEach(b=>{if(b.dataset.page===page)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current')});
 const topAccount=$('mercobTopAccount');if(topAccount){if(page==='account')topAccount.setAttribute('aria-current','page');else topAccount.removeAttribute('aria-current')}
 $('mnMenu')?.classList.remove('open');$('mnMore')?.setAttribute('aria-expanded','false');
 if(page==='home'){home.scrollIntoView({behavior:'smooth',block:'start'});return}
 if(page==='logout'){$('logoutButton')?.click();return}
 const rf=$('riderFeatures');if(rf){rf.style.display='block';const tab=rf.querySelector('[data-tab="'+page+'"]');if(tab)tab.click();else if(page==='account')rf.querySelector('[data-tab="account"]')?.click();rf.scrollIntoView({behavior:'smooth',block:'start'})}
}
function init(){
 const home=$('homeScreen');
 if(!home)return;
 if(!visibilityObserver){
  visibilityObserver=new MutationObserver(()=>{if(!home.hidden){style();build()}});
  visibilityObserver.observe(home,{attributes:true,attributeFilter:['hidden']});
 }
 if(home.hidden)return;
 style();build();
}
document.addEventListener('mercob:authenticated',()=>{init();setTimeout(init,80)});
window.addEventListener('mercob-supabase-ready',()=>setTimeout(init,50));
document.addEventListener('mercob:signed-out',()=>{if($('mercobTopNav'))$('mercobTopNav').remove();$('mercobTopAccount')?.remove();built=false;current='home';$('mercobNavStyles')?.remove()});
$('languageSwitch')?.addEventListener('click',()=>setTimeout(translate,0));
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();