const translations = {
  ar: {
    langLabel:"عربي", fast:"سريع وسهل", yourChoice:"أنت تختار", eyebrow:"تنقّل بذكاء مع MERCOB",
    welcomeTitle:'مشوارك أسهل،<br><span>وأنت تختار.</span>',
    welcomeDescription:"اطلب مشوارك أو رتّب توصيلك بسهولة. تجربة واضحة تمنحك حرية الاختيار من البداية.",
    startNow:"ابدأ الآن", alreadyHaveAccount:"لديك حساب؟ تسجيل الدخول",
    legalNote:"بالمتابعة، أنت توافق على شروط الاستخدام وسياسة الخصوصية.", back:"رجوع",
    goodToSeeYou:"أهلاً بك في MERCOB", authTitle:"كيف نبدأ؟",
    authSubtitle:"اختر الطريقة المناسبة لك للمتابعة.", login:"تسجيل الدخول",
    loginHint:"لديك حساب بالفعل؟ تابع من هنا.", createAccount:"إنشاء حساب جديد",
    signupHint:"ابدأ رحلتك مع MERCOB في خطوات بسيطة.", chooseAnother:"اختيار طريقة أخرى",
    identifierLabel:"البريد الإلكتروني", passwordLabel:"كلمة المرور",
    fullNameLabel:"الاسم الكامل", birthDateLabel:"تاريخ الميلاد", showPassword:"إظهار", hidePassword:"إخفاء",
    acceptTerms:"أوافق على شروط الاستخدام وسياسة الخصوصية.",
    demoNote:"تسجيل الدخول بالبريد الإلكتروني وكلمة المرور فقط.",
    confirmationRequired:"تم إنشاء الحساب. افتح بريدك الإلكتروني واضغط رابط التأكيد، ثم عد لتسجيل الدخول.",
    supportLine:"خطوتك الأولى نحو مشوار أسهل.", loginTitle:"تسجيل الدخول",
    signupTitle:"إنشاء حساب", loginIntro:"أدخل بريدك الإلكتروني وكلمة المرور.",
    signupIntro:"أدخل اسمك الكامل وتاريخ ميلادك وبريدك الإلكتروني وكلمة المرور.",
    loginSubmit:"تسجيل الدخول", signupSubmit:"إنشاء حساب",
    identifierError:"أدخل بريدًا إلكترونيًا صحيحًا.",
    passwordError:"يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.",
    fullNameError:"أدخل الاسم الكامل (3 أحرف على الأقل).",
    birthDateError:"أدخل تاريخ ميلاد صحيحًا ليس في المستقبل.",
    termsError:"يرجى الموافقة على شروط الاستخدام وسياسة الخصوصية.",
    authNotReady:"الاتصال الآمن غير جاهز. حدّث الصفحة وحاول مرة أخرى.",
    signupSuccess:"تم إنشاء الحساب بنجاح.",
    emailConfirm:"لإتمام التسجيل دون رابط تأكيد، عطّل Confirm email في إعدادات Supabase Auth.",
    phoneConfirm:"لإنشاء الحساب دون SMS، عطّل Confirm phone في إعدادات Supabase Auth.",
    loginSuccess:"تم تسجيل الدخول بنجاح.",
    signupError:"تعذّر إنشاء الحساب. تحقق من البيانات وإعدادات Supabase.",
    signupDisabled:"تسجيل البريد الإلكتروني معطّل في Supabase. فعّل Email signups من Authentication ← Sign In / Providers ← Email ثم احفظ التغييرات.",
    loginError:"تعذّر تسجيل الدخول. تحقق من بياناتك.",
    signedIn:"أنت مسجل الدخول الآن.", pickupSection:"نقطة الانطلاق", destinationSection:"الوجهة", wilayaLabel:"الولاية", communeLabel:"البلدية", neighborhoodLabel:"الحي / الشارع (اختياري)", chooseWilaya:"اختر الولاية", communePlaceholder:"اختر أو اكتب اسم البلدية", neighborhoodPlaceholder:"اكتب اسم الحي أو الشارع"
  },
  fr: {
    langLabel:"Français", fast:"Rapide et simple", yourChoice:"À votre choix", eyebrow:"Déplacez-vous avec MERCOB",
    welcomeTitle:'Vos trajets, plus simples,<br><span>à votre façon.</span>',
    welcomeDescription:"Réservez un trajet ou organisez une livraison facilement. Une expérience claire où vous gardez le choix.",
    startNow:"Commencer", alreadyHaveAccount:"Déjà un compte ? Se connecter",
    legalNote:"En continuant, vous acceptez les conditions d’utilisation et la politique de confidentialité.", back:"Retour",
    goodToSeeYou:"Bienvenue chez MERCOB", authTitle:"Comment commencer ?",
    authSubtitle:"Choisissez une option pour continuer.", login:"Se connecter",
    loginHint:"Vous avez déjà un compte ? Continuez ici.", createAccount:"Créer un compte",
    signupHint:"Commencez avec MERCOB en quelques étapes simples.", chooseAnother:"Choisir une autre option",
    identifierLabel:"Adresse e-mail", passwordLabel:"Mot de passe",
    fullNameLabel:"Nom complet", birthDateLabel:"Date de naissance", showPassword:"Afficher", hidePassword:"Masquer",
    acceptTerms:"J’accepte les conditions d’utilisation et la politique de confidentialité.",
    demoNote:"Connexion par adresse e-mail et mot de passe uniquement.",
    confirmationRequired:"Compte créé. Ouvrez votre boîte e-mail, cliquez sur le lien de confirmation, puis revenez vous connecter.",
    supportLine:"Le premier pas vers un trajet plus simple.", loginTitle:"Se connecter",
    signupTitle:"Créer un compte", loginIntro:"Saisissez votre adresse e-mail et votre mot de passe.",
    signupIntro:"Saisissez votre nom complet, votre date de naissance, votre adresse e-mail et un mot de passe.",
    loginSubmit:"Se connecter", signupSubmit:"Créer mon compte",
    identifierError:"Saisissez une adresse e-mail valide.",
    passwordError:"Le mot de passe doit contenir au moins 8 caractères.",
    fullNameError:"Saisissez votre nom complet (au moins 3 caractères).",
    birthDateError:"Saisissez une date de naissance valide qui n’est pas dans le futur.",
    termsError:"Veuillez accepter les conditions et la politique de confidentialité.",
    authNotReady:"Connexion sécurisée indisponible. Actualisez la page et réessayez.",
    signupSuccess:"Compte créé avec succès.",
    emailConfirm:"Pour créer un compte sans lien de confirmation, désactivez Confirm email dans les paramètres Supabase Auth.",
    phoneConfirm:"Pour créer un compte sans SMS, désactivez Confirm phone dans les paramètres Supabase Auth.",
    loginSuccess:"Connexion réussie.", signupError:"Inscription impossible. Vérifiez les données et Supabase.",
    signupDisabled:"Les inscriptions par e-mail sont désactivées dans Supabase. Activez Email signups dans Authentication ← Sign In / Providers ← Email, puis enregistrez les changements.",
    loginError:"Connexion impossible. Vérifiez vos identifiants.", signedIn:"Vous êtes connecté.", pickupSection:"Point de départ", destinationSection:"Destination", wilayaLabel:"Wilaya", communeLabel:"Commune", neighborhoodLabel:"Quartier / rue (facultatif)", chooseWilaya:"Choisir la wilaya", communePlaceholder:"Choisissez ou saisissez une commune", neighborhoodPlaceholder:"Saisissez le quartier ou la rue"
  }
};
let language="ar", authMode="login";
const $=id=>document.getElementById(id);
const welcomeScreen=$("welcomeScreen"), authScreen=$("authScreen"), homeScreen=$("homeScreen"), authOptions=$("authOptions"), authForm=$("authForm"), formMessage=$("formMessage");
const t=key=>translations[language][key]||translations.ar[key]||key;
const supabaseClient=()=>window.mercobSupabase||null;
function showMessage(message,success=false){formMessage.textContent=message;formMessage.classList.toggle("success",success);}
function applyLanguage(){
 document.documentElement.lang=language;document.documentElement.dir=language==="ar"?"rtl":"ltr";
 $("languageSwitch").innerHTML=language==="ar"?'عربي <span aria-hidden="true">⌄</span>':'Français <span aria-hidden="true">⌄</span>';
 document.querySelectorAll("[data-i18n]").forEach(node=>{const key=node.dataset.i18n;if(translations[language][key])node.innerHTML=translations[language][key];});
 $("identifier").placeholder=language==="ar"?"name@example.com":"nom@exemple.com";
 updateFormCopy();
}
function showAuth(){if(homeScreen)homeScreen.hidden=true;welcomeScreen.hidden=true;authScreen.hidden=false;authScreen.classList.add("is-active");authOptions.hidden=false;authForm.hidden=true;window.scrollTo({top:0,behavior:"smooth"});}
function showWelcome(){if(homeScreen)homeScreen.hidden=true;authScreen.hidden=true;welcomeScreen.hidden=false;welcomeScreen.classList.add("is-active");window.scrollTo({top:0,behavior:"smooth"});}
function showDashboard(user){
 if(!homeScreen){showWelcome();return;}
 welcomeScreen.hidden=true;authScreen.hidden=true;homeScreen.hidden=false;homeScreen.classList.add("is-active");
 const meta=user?.user_metadata||{};$("homeUserName").textContent=meta.full_name||meta.name||(user?.email?user.email.split("@")[0]:"");
 loadDashboard(user);window.scrollTo({top:0,behavior:"smooth"});
}
async function loadDashboard(user){
 const client=supabaseClient();if(!client||!user?.id)return;
 try{
  const {data:profile}=await client.from("profiles").select("full_name").eq("id",user.id).maybeSingle();
  if(profile?.full_name)$("homeUserName").textContent=profile.full_name;
  const {data,error}=await client.from("rides").select("id,pickup_address,destination_address,requested_price,agreed_price,status").eq("rider_id",user.id).order("created_at",{ascending:false}).limit(4);
  if(error)throw error;$("rideCount").textContent=String(data?.length||0);
  if(!data?.length)return;
  const statuses={requested:"قيد البحث عن سائق",offered:"توجد عروض",accepted:"تم قبول الطلب",driver_arriving:"السائق في الطريق",in_progress:"المشوار جارٍ",completed:"مكتمل",cancelled:"ملغي"};
  $("recentRides").innerHTML=data.map(r=>'<article class="ride-item"><div class="ride-item-icon">↗</div><div class="ride-item-main"><strong>'+escapeHtml(r.destination_address)+'</strong><p>'+escapeHtml(r.pickup_address)+'</p><span class="ride-status">'+(statuses[r.status]||escapeHtml(r.status))+'</span></div><div class="ride-item-price">'+Number(r.agreed_price||r.requested_price||0).toLocaleString('fr-DZ')+' <small>دج</small></div></article>').join("");
 }catch(e){console.warn("MERCOB dashboard data:",e);}
}
function escapeHtml(v){return String(v??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function chooseMode(mode){
 authMode=mode;authOptions.hidden=true;authForm.hidden=false;
 $("identifier").value="";$("password").value="";$("fullName").value="";$("birthDate").value="";$("terms").checked=false;
 $("signupFields").hidden=mode!=="signup";$("termsRow").hidden=mode!=="signup";
 $("fullName").required=mode==="signup";$("birthDate").required=mode==="signup";
 $("identifier").required=true;$("password").required=true;
 $("password").autocomplete=mode==="signup"?"new-password":"current-password";
 $("submitAuth").disabled=false;showMessage("");updateFormCopy();$("identifier").focus({preventScroll:true});
}
function updateFormCopy(){
 $("formTitle").textContent=t(authMode==="signup"?"signupTitle":"loginTitle");
 $("formIntro").textContent=t(authMode==="signup"?"signupIntro":"loginIntro");
 $("submitText").textContent=t(authMode==="signup"?"signupSubmit":"loginSubmit");
 $("togglePassword").textContent=$("password").type==="password"?t("showPassword"):t("hidePassword");
}
function normalizeIdentifier(value){
 const v=String(value||"").trim();
 if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))return {type:"email",value:v.toLowerCase()};
 return null;
}
function validBirthDate(value){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;
 const d=new Date(value+"T00:00:00Z");
 return !Number.isNaN(d.getTime())&&d.toISOString().slice(0,10)===value&&d<=new Date();
}
function announceSignedIn(user){document.dispatchEvent(new CustomEvent("mercob:authenticated",{detail:{user:user||null}}));}
$("startButton").addEventListener("click",showAuth);
$("welcomeLogin").addEventListener("click",()=>{showAuth();chooseMode("login");});
$("backButton").addEventListener("click",showWelcome);
$("formBack").addEventListener("click",()=>{authForm.hidden=true;authOptions.hidden=false;showMessage("");});
$("loginChoice").addEventListener("click",()=>chooseMode("login"));
$("signupChoice").addEventListener("click",()=>chooseMode("signup"));
$("languageSwitch").addEventListener("click",()=>{language=language==="ar"?"fr":"ar";applyLanguage();});
const FALLBACK_WILAYAS = [
{code:"01",ar:"أدرار",fr:"Adrar"},{code:"02",ar:"الشلف",fr:"Chlef"},{code:"03",ar:"الأغواط",fr:"Laghouat"},{code:"04",ar:"أم البواقي",fr:"Oum El Bouaghi"},{code:"05",ar:"باتنة",fr:"Batna"},{code:"06",ar:"بجاية",fr:"Béjaïa"},{code:"07",ar:"بسكرة",fr:"Biskra"},{code:"08",ar:"بشار",fr:"Béchar"},{code:"09",ar:"البليدة",fr:"Blida"},{code:"10",ar:"البويرة",fr:"Bouira"},{code:"11",ar:"تمنراست",fr:"Tamanrasset"},{code:"12",ar:"تبسة",fr:"Tébessa"},{code:"13",ar:"تلمسان",fr:"Tlemcen"},{code:"14",ar:"تيارت",fr:"Tiaret"},{code:"15",ar:"تيزي وزو",fr:"Tizi Ouzou"},{code:"16",ar:"الجزائر",fr:"Alger"},{code:"17",ar:"الجلفة",fr:"Djelfa"},{code:"18",ar:"جيجل",fr:"Jijel"},{code:"19",ar:"سطيف",fr:"Sétif"},{code:"20",ar:"سعيدة",fr:"Saïda"},{code:"21",ar:"سكيكدة",fr:"Skikda"},{code:"22",ar:"سيدي بلعباس",fr:"Sidi Bel Abbès"},{code:"23",ar:"عنابة",fr:"Annaba"},{code:"24",ar:"قالمة",fr:"Guelma"},{code:"25",ar:"قسنطينة",fr:"Constantine"},{code:"26",ar:"المدية",fr:"Médéa"},{code:"27",ar:"مستغانم",fr:"Mostaganem"},{code:"28",ar:"المسيلة",fr:"M'Sila"},{code:"29",ar:"معسكر",fr:"Mascara"},{code:"30",ar:"ورقلة",fr:"Ouargla"},{code:"31",ar:"وهران",fr:"Oran"},{code:"32",ar:"البيض",fr:"El Bayadh"},{code:"33",ar:"إليزي",fr:"Illizi"},{code:"34",ar:"برج بوعريريج",fr:"Bordj Bou Arréridj"},{code:"35",ar:"بومرداس",fr:"Boumerdès"},{code:"36",ar:"الطارف",fr:"El Tarf"},{code:"37",ar:"تندوف",fr:"Tindouf"},{code:"38",ar:"تيسمسيلت",fr:"Tissemsilt"},{code:"39",ar:"الوادي",fr:"El Oued"},{code:"40",ar:"خنشلة",fr:"Khenchela"},{code:"41",ar:"سوق أهراس",fr:"Souk Ahras"},{code:"42",ar:"تيبازة",fr:"Tipaza"},{code:"43",ar:"ميلة",fr:"Mila"},{code:"44",ar:"عين الدفلى",fr:"Aïn Defla"},{code:"45",ar:"النعامة",fr:"Naâma"},{code:"46",ar:"عين تموشنت",fr:"Aïn Témouchent"},{code:"47",ar:"غرداية",fr:"Ghardaïa"},{code:"48",ar:"غليزان",fr:"Relizane"},{code:"49",ar:"تيميمون",fr:"Timimoun"},{code:"50",ar:"برج باجي مختار",fr:"Bordj Badji Mokhtar"},{code:"51",ar:"أولاد جلال",fr:"Ouled Djellal"},{code:"52",ar:"بني عباس",fr:"Béni Abbès"},{code:"53",ar:"عين صالح",fr:"In Salah"},{code:"54",ar:"عين قزام",fr:"In Guezzam"},{code:"55",ar:"تقرت",fr:"Touggourt"},{code:"56",ar:"جانت",fr:"Djanet"},{code:"57",ar:"المغير",fr:"El M'Ghair"},{code:"58",ar:"المنيعة",fr:"El Meniaa"}
];
let algeriaLocationData=null;
async function loadLocationData(){
 try{const response=await fetch("https://raw.githubusercontent.com/el-amin-dev/algeria-wilayas-communes/main/data/algeria.json",{cache:"force-cache"});if(!response.ok)throw new Error("HTTP "+response.status);algeriaLocationData=await response.json();}
 catch(error){console.warn("Location dataset unavailable; using built-in wilaya fallback.",error);}
 document.querySelectorAll(".location-wilaya").forEach(select=>{
  const previous=select.value;select.innerHTML='<option value="">'+escapeHtml(t("chooseWilaya"))+'</option>';
  const list=algeriaLocationData?.wilayas?.map(w=>({code:w.code,ar:w.nom_ar,fr:w.nom_fr}))||FALLBACK_WILAYAS;
  list.forEach(w=>{const option=document.createElement("option");option.value=w.code;option.textContent=(language==="fr"?w.fr:w.ar)||w.fr||w.ar;select.appendChild(option);});if(previous)select.value=previous;
 });
 refreshCommuneLists();
}
function communesForWilaya(code){
 const w=algeriaLocationData?.wilayas?.find(item=>String(item.code)===String(code)||String(item.wilaya_num)===String(code));
 if(!w)return [];
 const names=[];(w.dairas||[]).forEach(d=>(d.communes||[]).forEach(c=>{const name=(language==="fr"?c.nom_fr:c.nom_ar)||c.nom_fr||c.nom_ar;if(name&&!names.includes(name))names.push(name);}));
 return names.sort((a,b)=>a.localeCompare(b,language==="fr"?"fr":"ar"));
}
function refreshCommuneLists(){
 [["pickupWilaya","pickupCommuneOptions","pickupCommune"],["destinationWilaya","destinationCommuneOptions","destinationCommune"]].forEach(([wilayaId,listId,inputId])=>{
  const select=$(wilayaId),list=$(listId),input=$(inputId);if(!select||!list||!input)return;
  list.innerHTML="";communesForWilaya(select.value).forEach(name=>{const option=document.createElement("option");option.value=name;list.appendChild(option);});
  input.disabled=!select.value;input.setAttribute("aria-label",t("communeLabel"));
 });
}
$("pickupWilaya").addEventListener("change",()=>{$("pickupCommune").value="";refreshCommuneLists();});
$("destinationWilaya").addEventListener("change",()=>{$("destinationCommune").value="";refreshCommuneLists();});
$("logoutButton").addEventListener("click",async()=>{
 const client=supabaseClient();if(!client)return;const button=$("logoutButton");button.disabled=true;
 try{const {error}=await client.auth.signOut();if(error)throw error;showWelcome();}
 catch(error){console.error("MERCOB sign out error:",error);$("rideRequestMessage").textContent=language==="ar"?"تعذر تسجيل الخروج. تحقق من الاتصال ثم حاول مجددًا.":"Déconnexion impossible. Vérifiez votre connexion puis réessayez.";}
 finally{button.disabled=false;}
});
$("rideRequestForm").addEventListener("submit",async event=>{
 event.preventDefault();const client=supabaseClient(),message=$("rideRequestMessage"),button=$("requestRideButton");message.classList.remove("success");
 if(!client){message.textContent=t("authNotReady");return;}
 const {data:{user},error:authError}=await client.auth.getUser();if(authError||!user){message.textContent=t("authNotReady");return;}
 const pW=$("pickupWilaya"),dW=$("destinationWilaya"),pC=$("pickupCommune").value.trim(),dC=$("destinationCommune").value.trim(),pN=$("pickupNeighborhood").value.trim(),dN=$("destinationNeighborhood").value.trim(),price=Number($("requestedPrice").value);
 if(!pW.value||!pC||!dW.value||!dC||!Number.isFinite(price)||price<=0){message.textContent=language==="ar"?"اختر ولاية واكتب البلدية للانطلاق والوجهة، ثم أدخل سعرًا صحيحًا.":"Choisissez les wilayas et saisissez les communes du départ et de la destination, puis un prix valide.";return;}
 const pWilaya=pW.selectedOptions[0].textContent.trim(),dWilaya=dW.selectedOptions[0].textContent.trim();
 const pickup=[pN,pC,pWilaya].filter(Boolean).join("، "),destination=[dN,dC,dWilaya].filter(Boolean).join("، ");
 button.disabled=true;
 try{
  const {error}=await client.from("rides").insert({rider_id:user.id,pickup_address:pickup,destination_address:destination,requested_price:price,currency:"DZD",ride_type:$("rideType").value,payment_method:"cash"});
  if(error)throw error;message.textContent=language==="ar"?"تم حفظ طلبك بنجاح.":"Votre demande a été enregistrée.";message.classList.add("success");
  $("rideRequestForm").reset();refreshCommuneLists();await loadDashboard(user);
 }catch(error){console.error("MERCOB ride request error:",error);message.textContent=(language==="ar"?"تعذر حفظ الطلب: ":"Impossible d’enregistrer la demande : ")+(error?.message||"");}
 finally{button.disabled=false;}
});
loadLocationData();
applyLanguage();
document.querySelector("[data-home]").addEventListener("click",async event=>{event.preventDefault();const client=supabaseClient();if(client){const {data}=await client.auth.getSession();if(data.session){showDashboard(data.session.user);return;}}showWelcome();});
$("togglePassword").addEventListener("click",()=>{const input=$("password");input.type=input.type==="password"?"text":"password";updateFormCopy();});
$("authForm").addEventListener("submit",async event=>{
 event.preventDefault();showMessage("");
 const client=supabaseClient();if(!client){showMessage(t("authNotReady"));return;}
 const identifier=normalizeIdentifier($("identifier").value),password=$("password").value;
 const fullName=$("fullName").value.trim(),birthDate=$("birthDate").value;
 if(!identifier){showMessage(t("identifierError"));$("identifier").focus();return;}
 if(password.length<8){showMessage(t("passwordError"));$("password").focus();return;}
 if(authMode==="signup"){
  if(fullName.length<3){showMessage(t("fullNameError"));$("fullName").focus();return;}
  if(!validBirthDate(birthDate)){showMessage(t("birthDateError"));$("birthDate").focus();return;}
  if(!$("terms").checked){showMessage(t("termsError"));return;}
 }
 const button=$("submitAuth");button.disabled=true;
 let success=false;
 try{
  if(authMode==="signup"){
   const options={data:{account_type:"rider",full_name:fullName,birth_date:birthDate,preferred_language:language}};
   const {data,error}=await client.auth.signUp({email:identifier.value,password,options});
   if(error)throw error;
   if(!data.session){
    showMessage(t("confirmationRequired"),true);
    return;
   }
   announceSignedIn(data.user);success=true;showDashboard(data.user);
  }else{
   const {data,error}=await client.auth.signInWithPassword({email:identifier.value,password});if(error)throw error;
   announceSignedIn(data.user);success=true;showDashboard(data.user);
  }
 }catch(error){
  console.error("MERCOB Supabase auth error:",error);
  const msg=String(error?.message||"").toLowerCase();
  if(msg.includes("email signups are disabled")||msg.includes("signups not allowed for this instance")){
    showMessage(t("signupDisabled"));
  }else if(msg.includes("email not confirmed")||msg.includes("confirm")||msg.includes("confirmation")){
    showMessage(t("emailConfirm"));
  }else{
    showMessage((authMode==="signup"?t("signupError"):t("loginError"))+" ("+String(error?.message||"Unknown error")+")");
  }
 }finally{button.disabled=false;}
});
window.addEventListener("mercob-supabase-ready",async()=>{
 const client=supabaseClient();if(!client)return;
 const {data}=await client.auth.getSession();if(data.session){document.dispatchEvent(new CustomEvent("mercob:authenticated",{detail:{user:data.session.user}}));showDashboard(data.session.user);}
 client.auth.onAuthStateChange((event,session)=>{
  if(event==="SIGNED_OUT"){document.dispatchEvent(new CustomEvent("mercob:signed-out"));showWelcome();}
  if((event==="SIGNED_IN"||event==="INITIAL_SESSION")&&session){document.dispatchEvent(new CustomEvent("mercob:authenticated",{detail:{user:session.user}}));setTimeout(()=>showDashboard(session.user),0);}
 });
});
applyLanguage();
