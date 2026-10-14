(()=> {
const $=id=>document.getElementById(id);
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
 `;document.head.appendChild(s)
}
function build(){
 const top=document.querySelector('.topbar'),home=$('homeScreen');
 if(!top||!home||home.hidden||$('mercobTopNav'))return;
 const nav=document.createElement('nav');nav.id='mercobTopNav';nav.setAttribute('aria-label',document.documentElement.lang==='fr'?'Navigation principale':'التنقل الرئيسي');
 nav.innerHTML='<div class="mn-primary"><button type="button" data-page="home"><span class="mn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="m3.5 10 8.5-7 8.5 7v10a1 1 0 0 1-1 1h-5.2v-6.5H9.7V21H4.5a1 1 0 0 1-1-1z"/></svg></span><span data-label="home"></span></button><button type="button" data-page="trips"><span class="mn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 4.5h10M17 4.5v10M17 4.5 6 15.5"/><path d="M5 8.5v10a2 2 0 0 0 2 2h10"/></svg></span><span data-label="trips"></span></button><button type="button" data-page="messages"><span class="mn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5.5h16v13H4z"/><path d="M7.5 9h9M7.5 12h9M7.5 15h5"/></svg></span><span data-label="messages"></span></button><div class="mn-more-wrap"><button type="button" id="mnMore" aria-expanded="false"><span class="mn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg></span><span data-label="more"></span>⌄</button><div class="mn-menu" id="mnMenu"><button type="button" data-page="notifications"><svg class="mn-inline-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg><span data-label="notifications"></span></button><button type="button" data-page="saved"><svg class="mn-inline-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg><span data-label="saved"></span></button><button type="button" data-page="payments"><svg class="mn-inline-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h4"/></svg><span data-label="payments"></span></button><button type="button" data-page="support"><svg class="mn-inline-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.6 2.6 0 1 1 4.2 2c-1.2.9-1.7 1.3-1.7 2.8M12 17.5v.1"/></svg><span data-label="support"></span></button><button type="button" data-page="logout"><svg class="mn-inline-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5M14 8l4 4-4 4M18 12H9"/></svg><span data-label="logout"></span></button></div></div></div><button type="button" class="mn-account" data-page="account"><span class="mn-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M4.5 20c.5-4 3.2-6 7.5-6s7 2 7.5 6"/></svg></span><span data-label="account"></span></button>';
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
document.addEventListener('mercob:signed-out',()=>{if($('mercobTopNav'))$('mercobTopNav').remove();built=false;current='home';$('mercobNavStyles')?.remove()});
$('languageSwitch')?.addEventListener('click',()=>setTimeout(translate,0));
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();