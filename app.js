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
    phoneLabel:"رقم الهاتف", passwordLabel:"كلمة المرور", showPassword:"إظهار", hidePassword:"إخفاء",
    acceptTerms:"أوافق على شروط الاستخدام وسياسة الخصوصية.", demoNote:"واجهة أولية للتجربة — لم يتم ربط تسجيل الدخول بخادم بعد.",
    supportLine:"خطوتك الأولى نحو مشوار أسهل.", loginTitle:"تسجيل الدخول",
    signupTitle:"إنشاء حساب", loginIntro:"أدخل رقم هاتفك وكلمة المرور للمتابعة.",
    signupIntro:"أنشئ حسابك للبدء مع MERCOB.", loginSubmit:"تسجيل الدخول",
    signupSubmit:"إنشاء حساب", phoneError:"أدخل رقم هاتف صحيحًا للمتابعة.",
    passwordError:"يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
    termsError:"يرجى الموافقة على شروط الاستخدام وسياسة الخصوصية.",
    demoSuccess:"تم التحقق من الحقول بنجاح. ربط الحساب بالخادم هو الخطوة التالية.",
    loginDemo:"تم التحقق من البيانات المدخلة. المصادقة الفعلية غير مفعّلة بعد."
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
    phoneLabel:"Numéro de téléphone", passwordLabel:"Mot de passe", showPassword:"Afficher", hidePassword:"Masquer",
    acceptTerms:"J’accepte les conditions d’utilisation et la politique de confidentialité.", demoNote:"Prototype — la connexion n’est pas encore reliée à un serveur.",
    supportLine:"Le premier pas vers un trajet plus simple.", loginTitle:"Se connecter",
    signupTitle:"Créer un compte", loginIntro:"Saisissez votre numéro et votre mot de passe.",
    signupIntro:"Créez votre compte pour commencer avec MERCOB.", loginSubmit:"Se connecter",
    signupSubmit:"Créer mon compte", phoneError:"Saisissez un numéro de téléphone valide.",
    passwordError:"Le mot de passe doit contenir au moins 6 caractères.",
    termsError:"Veuillez accepter les conditions et la politique de confidentialité.",
    demoSuccess:"Les champs sont valides. La connexion au serveur sera ajoutée ensuite.",
    loginDemo:"Les données ont été vérifiées. L’authentification réelle n’est pas encore activée."
  }
};
let language = "ar";
let authMode = "login";
const $ = (id) => document.getElementById(id);
const welcomeScreen = $("welcomeScreen");
const authScreen = $("authScreen");
const authOptions = $("authOptions");
const authForm = $("authForm");
const formMessage = $("formMessage");

function t(key) { return translations[language][key] || translations.ar[key] || key; }
function applyLanguage() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  $("languageSwitch").innerHTML = language === "ar" ? 'عربي <span aria-hidden="true">⌄</span>' : 'Français <span aria-hidden="true">⌄</span>';
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[language][key]) node.innerHTML = translations[language][key];
  });
  $("phone").placeholder = language === "ar" ? "555 12 34 56" : "555 12 34 56";
  updateFormCopy();
}
function showAuth() {
  welcomeScreen.hidden = true;
  authScreen.hidden = false;
  authScreen.classList.add("is-active");
  authOptions.hidden = false;
  authForm.hidden = true;
  window.scrollTo({top: 0, behavior: "smooth"});
}
function showWelcome() {
  authScreen.hidden = true;
  welcomeScreen.hidden = false;
  welcomeScreen.classList.add("is-active");
  window.scrollTo({top: 0, behavior: "smooth"});
}
function chooseMode(mode) {
  authMode = mode;
  authOptions.hidden = true;
  authForm.hidden = false;
  $("password").value = "";
  $("phone").value = "";
  $("terms").checked = false;
  formMessage.textContent = "";
  formMessage.classList.remove("success");
  $("password").autocomplete = mode === "signup" ? "new-password" : "current-password";
  $("termsRow").hidden = mode !== "signup";
  updateFormCopy();
  $("phone").focus({preventScroll:true});
}
function updateFormCopy() {
  const signup = authMode === "signup";
  $("formTitle").textContent = t(signup ? "signupTitle" : "loginTitle");
  $("formIntro").textContent = t(signup ? "signupIntro" : "loginIntro");
  $("submitText").textContent = t(signup ? "signupSubmit" : "loginSubmit");
  $("togglePassword").textContent = $("password").type === "password" ? t("showPassword") : t("hidePassword");
}
$("startButton").addEventListener("click", showAuth);
$("welcomeLogin").addEventListener("click", () => { showAuth(); chooseMode("login"); });
$("backButton").addEventListener("click", showWelcome);
$("formBack").addEventListener("click", () => { authForm.hidden = true; authOptions.hidden = false; formMessage.textContent = ""; });
$("loginChoice").addEventListener("click", () => chooseMode("login"));
$("signupChoice").addEventListener("click", () => chooseMode("signup"));
$("languageSwitch").addEventListener("click", () => { language = language === "ar" ? "fr" : "ar"; applyLanguage(); });
document.querySelector("[data-home]").addEventListener("click", (event) => { event.preventDefault(); showWelcome(); });
$("togglePassword").addEventListener("click", () => {
  const input = $("password");
  input.type = input.type === "password" ? "text" : "password";
  updateFormCopy();
});
$("authForm").addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.classList.remove("success");
  const phone = $("phone").value.replace(/[\s()-]/g, "");
  const password = $("password").value;
  const validPhone = /^\+?[0-9]{8,15}$/.test(phone);
  if (!validPhone) { formMessage.textContent = t("phoneError"); $("phone").focus(); return; }
  if (password.length < 6) { formMessage.textContent = t("passwordError"); $("password").focus(); return; }
  if (authMode === "signup" && !$("terms").checked) { formMessage.textContent = t("termsError"); return; }
  formMessage.textContent = t(authMode === "signup" ? "demoSuccess" : "loginDemo");
  formMessage.classList.add("success");
});
applyLanguage();