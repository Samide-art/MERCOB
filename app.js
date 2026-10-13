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
    identifierLabel:"البريد الإلكتروني أو رقم الهاتف", passwordLabel:"كلمة المرور",
    fullNameLabel:"الاسم الكامل", birthDateLabel:"تاريخ الميلاد", showPassword:"إظهار", hidePassword:"إخفاء",
    acceptTerms:"أوافق على شروط الاستخدام وسياسة الخصوصية.",
    demoNote:"تسجيل الدخول عبر البريد أو الهاتف وكلمة المرور دون رمز SMS.",
    supportLine:"خطوتك الأولى نحو مشوار أسهل.", loginTitle:"تسجيل الدخول",
    signupTitle:"إنشاء حساب", loginIntro:"أدخل بريدك الإلكتروني أو رقم هاتفك وكلمة المرور.",
    signupIntro:"أدخل اسمك الكامل وتاريخ ميلادك، ثم بريدك أو هاتفك وكلمة المرور.",
    loginSubmit:"تسجيل الدخول", signupSubmit:"إنشاء حساب",
    identifierError:"أدخل بريدًا إلكترونيًا صحيحًا أو رقم هاتف جزائريًا صالحًا.",
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
    loginError:"تعذّر تسجيل الدخول. تحقق من بياناتك.",
    signedIn:"أنت مسجل الدخول الآن."
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
    identifierLabel:"E-mail ou numéro de téléphone", passwordLabel:"Mot de passe",
    fullNameLabel:"Nom complet", birthDateLabel:"Date de naissance", showPassword:"Afficher", hidePassword:"Masquer",
    acceptTerms:"J’accepte les conditions d’utilisation et la politique de confidentialité.",
    demoNote:"Connexion par e-mail ou téléphone et mot de passe, sans code SMS.",
    supportLine:"Le premier pas vers un trajet plus simple.", loginTitle:"Se connecter",
    signupTitle:"Créer un compte", loginIntro:"Saisissez votre e-mail ou téléphone et votre mot de passe.",
    signupIntro:"Saisissez votre nom complet, votre date de naissance, puis votre e-mail ou téléphone et un mot de passe.",
    loginSubmit:"Se connecter", signupSubmit:"Créer mon compte",
    identifierError:"Saisissez un e-mail valide ou un numéro algérien valide.",
    passwordError:"Le mot de passe doit contenir au moins 8 caractères.",
    fullNameError:"Saisissez votre nom complet (au moins 3 caractères).",
    birthDateError:"Saisissez une date de naissance valide qui n’est pas dans le futur.",
    termsError:"Veuillez accepter les conditions et la politique de confidentialité.",
    authNotReady:"Connexion sécurisée indisponible. Actualisez la page et réessayez.",
    signupSuccess:"Compte créé avec succès.",
    emailConfirm:"Pour créer un compte sans lien de confirmation, désactivez Confirm email dans les paramètres Supabase Auth.",
    phoneConfirm:"Pour créer un compte sans SMS, désactivez Confirm phone dans les paramètres Supabase Auth.",
    loginSuccess:"Connexion réussie.", signupError:"Inscription impossible. Vérifiez les données et Supabase.",
    loginError:"Connexion impossible. Vérifiez vos identifiants.", signedIn:"Vous êtes connecté."
  }
};
let language="ar", authMode="login";
const $=id=>document.getElementById(id);
const welcomeScreen=$("welcomeScreen"), authScreen=$("authScreen"), authOptions=$("authOptions"), authForm=$("authForm"), formMessage=$("formMessage");
const t=key=>translations[language][key]||translations.ar[key]||key;
const supabaseClient=()=>window.mercobSupabase||null;
function showMessage(message,success=false){formMessage.textContent=message;formMessage.classList.toggle("success",success);}
function applyLanguage(){
 document.documentElement.lang=language;document.documentElement.dir=language==="ar"?"rtl":"ltr";
 $("languageSwitch").innerHTML=language==="ar"?'عربي <span aria-hidden="true">⌄</span>':'Français <span aria-hidden="true">⌄</span>';
 document.querySelectorAll("[data-i18n]").forEach(node=>{const key=node.dataset.i18n;if(translations[language][key])node.innerHTML=translations[language][key];});
 $("identifier").placeholder=language==="ar"?"name@example.com أو 0555123456":"nom@exemple.com ou 0555123456";
 updateFormCopy();
}
function showAuth(){welcomeScreen.hidden=true;authScreen.hidden=false;authScreen.classList.add("is-active");authOptions.hidden=false;authForm.hidden=true;window.scrollTo({top:0,behavior:"smooth"});}
function showWelcome(){authScreen.hidden=true;welcomeScreen.hidden=false;welcomeScreen.classList.add("is-active");window.scrollTo({top:0,behavior:"smooth"});}
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
 let digits=v.replace(/\D/g,"");
 if(digits.startsWith("00213"))digits=digits.slice(5);else if(digits.startsWith("213"))digits=digits.slice(3);
 if(digits.startsWith("0"))digits=digits.slice(1);
 if(/^[5-7]\d{8}$/.test(digits))return {type:"phone",value:"+213"+digits};
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
document.querySelector("[data-home]").addEventListener("click",event=>{event.preventDefault();showWelcome();});
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
   let data,error;
   if(identifier.type==="email")({data,error}=await client.auth.signUp({email:identifier.value,password,options}));
   else ({data,error}=await client.auth.signUp({phone:identifier.value,password,options}));
   if(error)throw error;
   if(!data.session){
    showMessage(identifier.type==="email"?t("emailConfirm"):t("signupError"));
    return;
   }
   announceSignedIn(data.user);success=true;showWelcome();
  }else{
   const credentials=identifier.type==="email"?{email:identifier.value,password}:{phone:identifier.value,password};
   const {data,error}=await client.auth.signInWithPassword(credentials);if(error)throw error;
   announceSignedIn(data.user);success=true;showWelcome();
  }
 }catch(error){
  console.error("MERCOB Supabase auth error:",error);
  const msg=String(error?.message||"").toLowerCase();
  if(msg.includes("phone signups are disabled")||msg.includes("phone_provider_disabled")){
    showMessage(language==="ar"?"تسجيل الهاتف معطّل في Supabase. فعّل Phone ضمن Authentication → Sign In / Providers، ثم عطّل Confirm phone للسماح بالدخول دون SMS.":"L’inscription par téléphone est désactivée dans Supabase. Activez Phone dans Authentication → Sign In / Providers, puis désactivez Confirm phone pour autoriser la connexion sans SMS.");
  }else if(msg.includes("email not confirmed")||msg.includes("confirm")||msg.includes("confirmation")){
    showMessage(t("emailConfirm"));
  }else{
    showMessage((authMode==="signup"?t("signupError"):t("loginError"))+" ("+String(error?.message||"Unknown error")+")");
  }
 }finally{button.disabled=false;}
});
window.addEventListener("mercob-supabase-ready",async()=>{
 const client=supabaseClient();if(!client)return;
 const {data}=await client.auth.getSession();if(data.session)document.dispatchEvent(new CustomEvent("mercob:authenticated",{detail:{user:data.session.user}}));
 client.auth.onAuthStateChange((event,session)=>{
  if(event==="SIGNED_OUT")document.dispatchEvent(new CustomEvent("mercob:signed-out"));
  if(event==="SIGNED_IN"&&session)document.dispatchEvent(new CustomEvent("mercob:authenticated",{detail:{user:session.user}}));
 });
});
applyLanguage();
