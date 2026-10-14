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
    signedIn:"أنت مسجل الدخول الآن.", pickupSection:"نقطة الانطلاق", destinationSection:"الوجهة", wilayaLabel:"الولاية", communeLabel:"البلدية", neighborhoodLabel:"الحي / الشارع (اختياري)", chooseWilaya:"اختر الولاية", communePlaceholder:"اختر أو اكتب اسم البلدية", neighborhoodPlaceholder:"اكتب اسم الحي أو الشارع",languageSwitchLabel:"تغيير اللغة",brandHome:"MERCOB — الصفحة الرئيسية",
    homeKicker:"مساحتك في MERCOB",welcomeHome:"مرحبًا",homeSubtitle:"إلى أين تريد الذهاب اليوم؟",readyBadge:"جاهز لمشوارك القادم",homeHeroTitle:"مشوارك يبدأ من هنا",homeHeroText:"حدد نقطة الانطلاق والوجهة، وابدأ طلبك بسهولة.",quickRequest:"طلب سريع",requestRide:"اطلب مشوارًا",mapTitle:"حدد المواقع على الخريطة",mapHelp:"اختر نقطة الانطلاق أو الوجهة ثم اضغط على الخريطة.",myLocation:"موقعي الحالي",choosePickupMap:"تحديد الانطلاق",chooseDestinationMap:"تحديد الوجهة",mapAria:"خريطة تحديد الانطلاق والوجهة",mapHintPickup:"اضغط على الخريطة لتحديد نقطة الانطلاق.",priceLabel:"السعر المقترح (دج)",pricePlaceholder:"مثال: 500",serviceType:"نوع الخدمة",rideStandard:"عادي",rideComfort:"مريح",rideVan:"سيارة كبيرة",rideDelivery:"توصيل",submitRide:"إرسال طلب المشوار",priceNote:"السعر المقترح بالدينار الجزائري، ويمكن أن يتغير حسب الاتفاق.",activity:"نشاطك",recentRides:"آخر الطلبات",noRides:"لا توجد طلبات بعد",noRidesHint:"ستظهر طلباتك هنا بعد إرسال أول طلب.",logout:"تسجيل الخروج",statusRequested:"قيد البحث عن سائق",statusOffered:"توجد عروض",statusAccepted:"تم قبول الطلب",statusDriverArriving:"السائق في الطريق",statusInProgress:"المشوار جارٍ",statusCompleted:"مكتمل",statusCancelled:"ملغي",mapLoading:"جارٍ تحميل الخريطة. تحقق من اتصال الإنترنت ثم أعد تحميل الصفحة.",mapNoLocationSupport:"المتصفح لا يدعم تحديد الموقع.",mapLocating:"جارٍ تحديد موقعك…",mapLocationFailed:"تعذر تحديد موقعك. اسمح بالوصول للموقع أو اختر نقطة على الخريطة.",mapResolvingPickup:"جارٍ تحديد عنوان نقطة الانطلاق…",mapResolvingDestination:"جارٍ تحديد عنوان الوجهة…",mapPickupFilled:"تم ملء ولاية وبلدية نقطة الانطلاق تلقائيًا. يمكنك تعديل العنوان قبل إرسال الطلب.",mapDestinationFilled:"تم ملء ولاية وبلدية الوجهة تلقائيًا. يمكنك تعديل العنوان قبل إرسال الطلب.",mapPickupReview:"تم تحديد موقع الانطلاق. راجع الولاية والبلدية وأكمل أي خانة لم تُملأ تلقائيًا.",mapDestinationReview:"تم تحديد الوجهة. راجع الولاية والبلدية وأكمل أي خانة لم تُملأ تلقائيًا.",mapAddressFailed:"تم تحديد الموقع، لكن تعذر قراءة العنوان تلقائيًا. أدخل الولاية والبلدية يدويًا.",mapPickupManual:"تم تحديد نقطة الانطلاق. تعذر جلب العنوان تلقائيًا؛ أدخل الولاية والبلدية يدويًا.",mapDestinationManual:"تم تحديد الوجهة. تعذر جلب العنوان تلقائيًا؛ أدخل الولاية والبلدية يدويًا.",mapNotSet:"لم تُحدد بعد",mapPickup:"الانطلاق",mapDestination:"الوجهة",mapDirectDistance:"المسافة المباشرة",mapCalculating:"جارٍ حساب مسار الطريق…",mapRoadDistance:"مسافة الطريق التقريبية",mapMinutes:"دقيقة قيادة تقديرية",mapRouteFailed:"تعذر حساب مسار الطرق الآن.",mapChoosePickup:"اضغط على الخريطة لتحديد نقطة الانطلاق.",mapChooseDestination:"اضغط على الخريطة لتحديد الوجهة.",mapBothSelected:"تم تحديد النقطتين. يمكنك تحريك العلامات لتعديل الموقع.",mapPickupSelected:"تم تحديد نقطة الانطلاق. اختر الوجهة الآن.",mapDestinationSelected:"تم تحديد الوجهة. اختر نقطة الانطلاق إذا لم تحددها بعد.",rideValidation:"اختر ولاية واكتب البلدية للانطلاق والوجهة، ثم أدخل سعرًا صحيحًا.",rideSaved:"تم حفظ طلبك بنجاح.",rideSaveFailed:"تعذر حفظ الطلب: ",logoutFailed:"تعذر تسجيل الخروج. تحقق من الاتصال ثم حاول مجددًا.",mapPickupPopup:"نقطة الانطلاق",mapDestinationPopup:"الوجهة",ridePriceUnit:"دج"
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
    loginError:"Connexion impossible. Vérifiez vos identifiants.", signedIn:"Vous êtes connecté.", pickupSection:"Point de départ", destinationSection:"Destination", wilayaLabel:"Wilaya", communeLabel:"Commune", neighborhoodLabel:"Quartier / rue (facultatif)", chooseWilaya:"Choisir la wilaya", communePlaceholder:"Choisissez ou saisissez une commune", neighborhoodPlaceholder:"Saisissez le quartier ou la rue",languageSwitchLabel:"Changer de langue",brandHome:"MERCOB — Accueil",
    homeKicker:"Votre espace MERCOB",welcomeHome:"Bonjour",homeSubtitle:"Où souhaitez-vous aller aujourd’hui ?",readyBadge:"Prêt pour votre prochain trajet",homeHeroTitle:"Votre trajet commence ici",homeHeroText:"Définissez le départ et la destination, puis commandez facilement.",quickRequest:"Demande rapide",requestRide:"Commander un trajet",mapTitle:"Choisissez les lieux sur la carte",mapHelp:"Choisissez le départ ou la destination, puis touchez la carte.",myLocation:"Ma position",choosePickupMap:"Choisir le départ",chooseDestinationMap:"Choisir la destination",mapAria:"Carte de sélection du départ et de la destination",mapHintPickup:"Touchez la carte pour définir le point de départ.",priceLabel:"Prix proposé (DZD)",pricePlaceholder:"Ex. : 500",serviceType:"Type de service",rideStandard:"Standard",rideComfort:"Confort",rideVan:"Grand véhicule",rideDelivery:"Livraison",submitRide:"Envoyer la demande",priceNote:"Le prix est proposé en dinars algériens et peut varier selon l’accord.",activity:"Votre activité",recentRides:"Demandes récentes",noRides:"Aucun trajet pour le moment",noRidesHint:"Vos demandes apparaîtront ici après votre première commande.",logout:"Déconnexion",statusRequested:"Recherche d’un chauffeur",statusOffered:"Offres reçues",statusAccepted:"Trajet accepté",statusDriverArriving:"Le chauffeur est en route",statusInProgress:"Trajet en cours",statusCompleted:"Terminé",statusCancelled:"Annulé",mapLoading:"Impossible de charger la carte. Vérifiez votre connexion puis actualisez la page.",mapNoLocationSupport:"Votre navigateur ne prend pas en charge la géolocalisation.",mapLocating:"Localisation en cours…",mapLocationFailed:"Position introuvable. Autorisez la géolocalisation ou choisissez un point sur la carte.",mapResolvingPickup:"Recherche de l’adresse de départ…",mapResolvingDestination:"Recherche de l’adresse de destination…",mapPickupFilled:"La wilaya et la commune de départ ont été remplies automatiquement. Vous pouvez modifier l’adresse avant l’envoi.",mapDestinationFilled:"La wilaya et la commune de destination ont été remplies automatiquement. Vous pouvez modifier l’adresse avant l’envoi.",mapPickupReview:"Position de départ définie. Vérifiez la wilaya et la commune et complétez les champs manquants.",mapDestinationReview:"Destination définie. Vérifiez la wilaya et la commune et complétez les champs manquants.",mapAddressFailed:"Position définie, mais l’adresse n’a pas pu être récupérée. Saisissez la wilaya et la commune manuellement.",mapPickupManual:"Départ défini. Adresse introuvable automatiquement ; saisissez la wilaya et la commune manuellement.",mapDestinationManual:"Destination définie. Adresse introuvable automatiquement ; saisissez la wilaya et la commune manuellement.",mapNotSet:"Non défini",mapPickup:"Départ",mapDestination:"Destination",mapDirectDistance:"Distance à vol d’oiseau",mapCalculating:"Calcul de l’itinéraire…",mapRoadDistance:"Distance routière estimée",mapMinutes:"min de conduite estimées",mapRouteFailed:"Impossible de calculer l’itinéraire pour le moment.",mapChoosePickup:"Touchez la carte pour définir le départ.",mapChooseDestination:"Touchez la carte pour définir la destination.",mapBothSelected:"Les deux points sont définis. Vous pouvez déplacer les marqueurs.",mapPickupSelected:"Départ défini. Choisissez maintenant la destination.",mapDestinationSelected:"Destination définie. Choisissez le départ si nécessaire.",rideValidation:"Choisissez les wilayas et saisissez les communes du départ et de la destination, puis un prix valide.",rideSaved:"Votre demande a bien été enregistrée.",rideSaveFailed:"Impossible d’enregistrer la demande : ",logoutFailed:"Déconnexion impossible. Vérifiez votre connexion puis réessayez.",mapPickupPopup:"Départ",mapDestinationPopup:"Destination",ridePriceUnit:"DZD"
  }
};
let language="fr", authMode="login", currentDashboardUser=null;
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
 $("pickupCommune").placeholder=t("communePlaceholder");$("destinationCommune").placeholder=t("communePlaceholder");
 $("pickupNeighborhood").placeholder=t("neighborhoodPlaceholder");$("destinationNeighborhood").placeholder=t("neighborhoodPlaceholder");
 document.querySelectorAll(".location-wilaya").forEach(select=>{if(select.options.length)select.options[0].textContent=t("chooseWilaya");});
 updateFormCopy();
 document.querySelectorAll("[data-i18n-placeholder]").forEach(node=>{const key=node.dataset.i18nPlaceholder;if(translations[language][key])node.placeholder=translations[language][key];});
 document.querySelectorAll("[data-i18n-aria]").forEach(node=>{const key=node.dataset.i18nAria;if(translations[language][key])node.setAttribute("aria-label",translations[language][key]);});
 const rideType=$("rideType");if(rideType){["rideStandard","rideComfort","rideVan","rideDelivery"].forEach((key,i)=>{if(rideType.options[i])rideType.options[i].textContent=t(key);});}
 if(rideMap){updateMapTargetButtons();updateMapSummary();if(pickupMapMarker)pickupMapMarker.setPopupContent(t("mapPickupPopup"));if(destinationMapMarker)destinationMapMarker.setPopupContent(t("mapDestinationPopup"));}
 loadLocationData();
 if(currentDashboardUser&&!homeScreen.hidden)loadDashboard(currentDashboardUser);
 document.dispatchEvent(new CustomEvent("mercob:language-changed",{detail:{language}}));
}
function showAuth(){if(homeScreen)homeScreen.hidden=true;welcomeScreen.hidden=true;authScreen.hidden=false;authScreen.classList.add("is-active");authOptions.hidden=false;authForm.hidden=true;window.scrollTo({top:0,behavior:"smooth"});}
function showWelcome(){currentDashboardUser=null;if(homeScreen)homeScreen.hidden=true;authScreen.hidden=true;welcomeScreen.hidden=false;welcomeScreen.classList.add("is-active");window.scrollTo({top:0,behavior:"smooth"});}
function showDashboard(user){
 if(!homeScreen){showWelcome();return;}
 currentDashboardUser=user||null;
 welcomeScreen.hidden=true;authScreen.hidden=true;homeScreen.hidden=false;homeScreen.classList.add("is-active");
 if(rideMap)setTimeout(()=>rideMap.invalidateSize(),120);
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
  const statuses={requested:t("statusRequested"),offered:t("statusOffered"),accepted:t("statusAccepted"),driver_arriving:t("statusDriverArriving"),in_progress:t("statusInProgress"),completed:t("statusCompleted"),cancelled:t("statusCancelled")};
  $("recentRides").innerHTML=data.map(r=>'<article class="ride-item"><div class="ride-item-icon">↗</div><div class="ride-item-main"><strong>'+escapeHtml(r.destination_address)+'</strong><p>'+escapeHtml(r.pickup_address)+'</p><span class="ride-status">'+(statuses[r.status]||escapeHtml(r.status))+'</span></div><div class="ride-item-price">'+Number(r.agreed_price||r.requested_price||0).toLocaleString('fr-DZ')+' <small>'+t("ridePriceUnit")+'</small></div></article>').join("");
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

let rideMap=null, pickupMapMarker=null, destinationMapMarker=null, rideRouteLine=null, routeRequestId=0, activeMapTarget="pickup";
let pickupCoordinates=null, destinationCoordinates=null;
const mapAddressRequestIds={pickup:0,destination:0};
function normalizeLocationName(value){
 return String(value||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLocaleLowerCase().replace(/[’'`]/g,"").replace(/[^\p{L}\p{N}]+/gu," ").trim();
}
function findWilayaByName(value){
 const key=normalizeLocationName(value);if(!key||!algeriaLocationData?.wilayas)return null;
 return algeriaLocationData.wilayas.find(w=>{
  const names=[w.nom_ar,w.nom_fr,w.name,w.name_ar,w.name_fr].map(normalizeLocationName).filter(Boolean);
  return names.some(n=>n===key||n.includes(key)||key.includes(n));
 })||null;
}
function findCommuneByName(wilaya,value){
 const key=normalizeLocationName(value);if(!key||!wilaya)return null;
 for(const daira of wilaya.dairas||[]){
  for(const commune of daira.communes||[]){
   const names=[commune.nom_ar,commune.nom_fr,commune.name,commune.name_ar,commune.name_fr].map(normalizeLocationName).filter(Boolean);
   if(names.some(n=>n===key||n.includes(key)||key.includes(n)))return commune;
  }
 }
 return null;
}
async function fillLocationFieldsFromCoordinates(target,point){
 const requestId=++mapAddressRequestIds[target];
 const isPickup=target==="pickup";
 const wilayaSelect=$(isPickup?"pickupWilaya":"destinationWilaya");
 const communeInput=$(isPickup?"pickupCommune":"destinationCommune");
 const neighborhoodInput=$(isPickup?"pickupNeighborhood":"destinationNeighborhood");
 setMapHint(t(isPickup?"mapResolvingPickup":"mapResolvingDestination"));
 try{
  const response=await fetch("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="+encodeURIComponent(point.lat)+"&lon="+encodeURIComponent(point.lng)+"&zoom=16&addressdetails=1",{headers:{Accept:"application/json"}});
  if(!response.ok)throw new Error("Reverse geocoding unavailable");
  const data=await response.json();
  if(requestId!==mapAddressRequestIds[target])return;
  const address=data.address||{};
  const wilayaName=address.state||address.province||address.region||"";
  const communeName=address.city||address.town||address.municipality||address.village||address.county||"";
  const neighborhoodName=address.suburb||address.neighbourhood||address.residential||address.road||"";
  let matchedWilaya=findWilayaByName(wilayaName);
  if(matchedWilaya){
   wilayaSelect.value=String(matchedWilaya.code??matchedWilaya.wilaya_num??"");
   refreshCommuneLists();
  }
  const communeKey=normalizeLocationName(communeName);
  const matchedCommune=matchedWilaya?findCommuneByName(matchedWilaya,communeName):null;
  if(matchedCommune){
   communeInput.value=(language==="fr"?matchedCommune.nom_fr:matchedCommune.nom_ar)||matchedCommune.nom_ar||matchedCommune.nom_fr||communeName;
  }else if(communeName){
   communeInput.value=communeName;
  }
  if(neighborhoodName)neighborhoodInput.value=neighborhoodName;
  if(matchedWilaya&&matchedCommune){
   setMapHint(t(isPickup?"mapPickupFilled":"mapDestinationFilled"));
  }else if(data.display_name){
   setMapHint(t(isPickup?"mapPickupReview":"mapDestinationReview"));
  }else{
   setMapHint(t("mapAddressFailed"));
  }
 }catch(error){
  if(requestId!==mapAddressRequestIds[target])return;
  console.warn("Could not resolve map coordinates to an address",error);
  setMapHint(t(isPickup?"mapPickupManual":"mapDestinationManual"));
 }
}
function setMapHint(message){const el=$("mapHint");if(el)el.textContent=message;}
async function updateMapSummary(){
 const summary=$("mapRouteSummary");if(!summary)return;
 const fmt=p=>p? p.lat.toFixed(5)+", "+p.lng.toFixed(5):t("mapNotSet");
 summary.hidden=false;
 summary.innerHTML='<div><strong>'+t("mapPickup")+'</strong><span>'+fmt(pickupCoordinates)+'</span></div><div><strong>'+t("mapDestination")+'</strong><span>'+fmt(destinationCoordinates)+'</span></div>';
 const requestId=++routeRequestId;
 if(rideRouteLine&&rideMap){rideMap.removeLayer(rideRouteLine);rideRouteLine=null;}
 if(!pickupCoordinates||!destinationCoordinates||!rideMap)return;
 const straightDistance=rideMap.distance([pickupCoordinates.lat,pickupCoordinates.lng],[destinationCoordinates.lat,destinationCoordinates.lng])/1000;
 summary.innerHTML+='<p>'+t("mapDirectDistance")+": "+straightDistance.toFixed(1)+" km. "+t("mapCalculating")+"</p>";
 try{
  const coords=pickupCoordinates.lng+","+pickupCoordinates.lat+";"+destinationCoordinates.lng+","+destinationCoordinates.lat;
  const response=await fetch("https://router.project-osrm.org/route/v1/driving/"+coords+"?overview=full&geometries=geojson");
  if(!response.ok)throw new Error("Routing service unavailable");
  const data=await response.json();if(requestId!==routeRequestId)return;
  const route=data.routes?.[0];if(!route)throw new Error("No route");
  rideRouteLine=L.geoJSON(route.geometry,{style:{color:"#f97316",weight:5,opacity:.85}}).addTo(rideMap);
  summary.lastElementChild.textContent=t("mapRoadDistance")+": "+(route.distance/1000).toFixed(1)+" km · "+Math.round(route.duration/60)+" "+t("mapMinutes")+".";
  rideMap.fitBounds(rideRouteLine.getBounds().pad(0.15),{maxZoom:14});
 }catch(error){
  console.warn("Route calculation unavailable",error);if(requestId===routeRequestId)summary.lastElementChild.textContent=t("mapRouteFailed")+" "+t("mapDirectDistance")+": "+straightDistance.toFixed(1)+" km.";
 }
}
function updateMapTargetButtons(){
 $("choosePickupMap")?.classList.toggle("active",activeMapTarget==="pickup");
 $("chooseDestinationMap")?.classList.toggle("active",activeMapTarget==="destination");
 setMapHint(t(activeMapTarget==="pickup"?"mapChoosePickup":"mapChooseDestination"));
}
function setMapPoint(target,latlng){
 const point={lat:Number(latlng.lat.toFixed(6)),lng:Number(latlng.lng.toFixed(6))};
 if(target==="pickup"){
  pickupCoordinates=point;
  if(!pickupMapMarker)pickupMapMarker=L.marker(latlng,{draggable:true}).addTo(rideMap).bindPopup(t("mapPickupPopup"));
  else pickupMapMarker.setLatLng(latlng);
  pickupMapMarker.off("dragend").on("dragend",()=>{const p=pickupMapMarker.getLatLng();pickupCoordinates={lat:Number(p.lat.toFixed(6)),lng:Number(p.lng.toFixed(6))};updateMapSummary();fillLocationFieldsFromCoordinates("pickup",pickupCoordinates);});
 }else{
  destinationCoordinates=point;
  if(!destinationMapMarker)destinationMapMarker=L.marker(latlng,{draggable:true}).addTo(rideMap).bindPopup(t("mapDestinationPopup"));
  else destinationMapMarker.setLatLng(latlng);
  destinationMapMarker.off("dragend").on("dragend",()=>{const p=destinationMapMarker.getLatLng();destinationCoordinates={lat:Number(p.lat.toFixed(6)),lng:Number(p.lng.toFixed(6))};updateMapSummary();fillLocationFieldsFromCoordinates("destination",destinationCoordinates);});
 }
 updateMapSummary();
 fillLocationFieldsFromCoordinates(target,point);
 if(pickupCoordinates&&destinationCoordinates){
  const bounds=L.latLngBounds([[pickupCoordinates.lat,pickupCoordinates.lng],[destinationCoordinates.lat,destinationCoordinates.lng]]);
  rideMap.fitBounds(bounds.pad(0.25),{maxZoom:14});
  setMapHint(t("mapBothSelected"));
 }else setMapHint(t(target==="pickup"?"mapPickupSelected":"mapDestinationSelected"));
}
function initRideMap(){
 const el=$("rideMap");
 if(!el||!window.L){if(el)el.innerHTML='<p class="map-unavailable">'+t("mapLoading")+"</p>";return;}
 if(rideMap){rideMap.invalidateSize();return;}
 rideMap=L.map(el,{scrollWheelZoom:false}).setView([34.6728,3.2631],11);
 L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'}).addTo(rideMap);
 rideMap.on("click",event=>setMapPoint(activeMapTarget,event.latlng));
 $("choosePickupMap").addEventListener("click",()=>{activeMapTarget="pickup";updateMapTargetButtons();});
 $("chooseDestinationMap").addEventListener("click",()=>{activeMapTarget="destination";updateMapTargetButtons();});
 $("useMyLocation").addEventListener("click",()=>{
  if(!navigator.geolocation){setMapHint(t("mapNoLocationSupport"));return;}
  setMapHint(t("mapLocating"));
  navigator.geolocation.getCurrentPosition(position=>{
   const p={lat:position.coords.latitude,lng:position.coords.longitude};
   rideMap.setView(p,16);setMapPoint(activeMapTarget,p);
  },error=>{console.warn("Geolocation unavailable",error);setMapHint(t("mapLocationFailed"));},{enableHighAccuracy:true,timeout:10000,maximumAge:60000});
 });
 updateMapTargetButtons();
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
 catch(error){console.error("MERCOB sign out error:",error);$("rideRequestMessage").textContent=t("logoutFailed");}
 finally{button.disabled=false;}
});
$("rideRequestForm").addEventListener("submit",async event=>{
 event.preventDefault();const client=supabaseClient(),message=$("rideRequestMessage"),button=$("requestRideButton");message.classList.remove("success");
 if(!client){message.textContent=t("authNotReady");return;}
 const {data:{user},error:authError}=await client.auth.getUser();if(authError||!user){message.textContent=t("authNotReady");return;}
 const pW=$("pickupWilaya"),dW=$("destinationWilaya"),pC=$("pickupCommune").value.trim(),dC=$("destinationCommune").value.trim(),pN=$("pickupNeighborhood").value.trim(),dN=$("destinationNeighborhood").value.trim(),price=Number($("requestedPrice").value);
 if(!pW.value||!pC||!dW.value||!dC||!Number.isFinite(price)||price<=0){message.textContent=t("rideValidation");return;}
 const pWilaya=pW.selectedOptions[0].textContent.trim(),dWilaya=dW.selectedOptions[0].textContent.trim();
 const pickup=[pN,pC,pWilaya].filter(Boolean).join("، "),destination=[dN,dC,dWilaya].filter(Boolean).join("، ");
 button.disabled=true;
 try{
  const {error}=await client.from("rides").insert({rider_id:user.id,pickup_address:pickup,destination_address:destination,pickup_latitude:pickupCoordinates?.lat??null,pickup_longitude:pickupCoordinates?.lng??null,destination_latitude:destinationCoordinates?.lat??null,destination_longitude:destinationCoordinates?.lng??null,requested_price:price,currency:"DZD",ride_type:$("rideType").value,payment_method:"cash"});
  if(error)throw error;message.textContent=t("rideSaved");message.classList.add("success");
  $("rideRequestForm").reset();pickupCoordinates=null;destinationCoordinates=null;if(pickupMapMarker){rideMap.removeLayer(pickupMapMarker);pickupMapMarker=null;}if(destinationMapMarker){rideMap.removeLayer(destinationMapMarker);destinationMapMarker=null;}updateMapSummary();refreshCommuneLists();await loadDashboard(user);
 }catch(error){console.error("MERCOB ride request error:",error);message.textContent=t("rideSaveFailed")+(error?.message||"");}
 finally{button.disabled=false;}
});
loadLocationData();
initRideMap();
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
