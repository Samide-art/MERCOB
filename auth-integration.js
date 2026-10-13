// MERCOB Supabase auth adapter. Loaded as a module after the prototype script;
// capture the form submit before the demo-only prototype handler can run.
const waitForClient = () => new Promise((resolve) => {
  if (window.mercobSupabase) return resolve(window.mercobSupabase);
  window.addEventListener("mercob-supabase-ready", () => resolve(window.mercobSupabase), { once: true });
  setTimeout(() => resolve(window.mercobSupabase || null), 8000);
});

const translations = {
  ar: {
    phoneError: "أدخل رقمًا جزائريًا صحيحًا مثل 0555123456.",
    passwordError: "كلمة المرور يجب أن تحتوي على 6 أحرف على الأقل.",
    termsError: "يرجى الموافقة على شروط الاستخدام وسياسة الخصوصية.",
    loading: "جارٍ الاتصال الآمن…",
    signupSuccess: "تم إنشاء الحساب بنجاح.",
    otpSent: "أُرسل رمز تحقق إلى هاتفك. أدخل الرمز المكوّن من 6 أرقام.",
    otpLabel: "رمز التحقق عبر SMS",
    verify: "تأكيد رقم الهاتف",
    loginSuccess: "تم تسجيل الدخول بنجاح.",
    signupError: "تعذّر إنشاء الحساب. تحقق من إعدادات Phone Auth وSMS في Supabase.",
    loginError: "تعذّر تسجيل الدخول. تحقق من رقم الهاتف وكلمة المرور.",
    otpError: "رمز التحقق غير صحيح أو انتهت صلاحيته.",
    unexpected: "حدث خطأ. تحقق من إعدادات Supabase ثم حاول مجددًا."
  },
  fr: {
    phoneError: "Saisissez un numéro algérien valide, par ex. 0555123456.",
    passwordError: "Le mot de passe doit contenir au moins 6 caractères.",
    termsError: "Veuillez accepter les conditions et la politique de confidentialité.",
    loading: "Connexion sécurisée…",
    signupSuccess: "Compte créé avec succès.",
    otpSent: "Un code SMS a été envoyé. Saisissez les 6 chiffres.",
    otpLabel: "Code de vérification SMS",
    verify: "Vérifier le numéro",
    loginSuccess: "Connexion réussie.",
    signupError: "Inscription impossible. Vérifiez Phone Auth et la configuration SMS dans Supabase.",
    loginError: "Connexion impossible. Vérifiez le numéro et le mot de passe.",
    otpError: "Code incorrect ou expiré.",
    unexpected: "Une erreur est survenue. Vérifiez Supabase et réessayez."
  }
};

const lang = () => document.documentElement.lang === "fr" ? "fr" : "ar";
const tr = (key) => (translations[lang()] || translations.ar)[key] || translations.ar[key] || key;
const phoneToE164 = (value) => {
  let digits = String(value || "").replace(/\D/g, "");
  if (digits.startsWith("00213")) digits = digits.slice(5);
  else if (digits.startsWith("213")) digits = digits.slice(3);
  if (digits.startsWith("0")) digits = digits.slice(1);
  return /^[5-7]\d{8}$/.test(digits) ? "+213" + digits : null;
};

function addOtpField(form) {
  let row = document.getElementById("mercobOtpRow");
  if (row) return row.querySelector("input");
  row = document.createElement("div");
  row.id = "mercobOtpRow";
  row.hidden = true;
  row.className = "field-group";
  const label = document.createElement("label");
  label.className = "field-label";
  label.htmlFor = "mercobOtp";
  label.textContent = tr("otpLabel");
  const input = document.createElement("input");
  input.id = "mercobOtp";
  input.name = "otp";
  input.type = "text";
  input.inputMode = "numeric";
  input.autocomplete = "one-time-code";
  input.maxLength = 6;
  input.pattern = "[0-9]{6}";
  input.className = "otp-input";
  input.placeholder = "123456";
  input.setAttribute("aria-label", tr("otpLabel"));
  row.append(label, input);
  const message = document.getElementById("formMessage");
  message.parentNode.insertBefore(row, message);
  return input;
}

function setMessage(text, success = false) {
  const node = document.getElementById("formMessage");
  node.textContent = text;
  node.classList.toggle("success", success);
}
function setBusy(busy) {
  const button = document.getElementById("submitAuth");
  button.disabled = busy;
  button.setAttribute("aria-busy", String(busy));
}
function announceSession(user) {
  document.dispatchEvent(new CustomEvent("mercob:authenticated", { detail: { user } }));
}

document.addEventListener("submit", async (event) => {
  if (!event.target || event.target.id !== "authForm") return;
  event.preventDefault();
  event.stopImmediatePropagation();
  setMessage("");
  setBusy(true);

  const form = event.target;
  const otpInput = addOtpField(form);
  const otpRow = document.getElementById("mercobOtpRow");
  const isOtpStep = !otpRow.hidden;
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const mode = document.getElementById("termsRow").hidden ? "login" : "signup";
  // The prototype mode is tracked through its visible signup terms row.
  const signupMode = !document.getElementById("termsRow").hidden;
  try {
    const client = await waitForClient();
    if (!client) throw new Error("client-not-ready");

    if (isOtpStep) {
      const phone = form.dataset.mercobPhone;
      const token = otpInput.value.replace(/\D/g, "");
      if (!/^\d{6}$/.test(token)) {
        setMessage(tr("otpError"));
        return;
      }
      const { data, error } = await client.auth.verifyOtp({ phone, token, type: "sms" });
      if (error) throw error;
      otpRow.hidden = true;
      phoneInput.readOnly = false;
      passwordInput.closest(".password-field").hidden = false;
      document.getElementById("termsRow").hidden = true;
      setMessage(tr("loginSuccess"), true);
      announceSession(data.user);
      document.getElementById("formIntro").textContent = tr("loginSuccess");
      setBusy(true);
      return;
    }

    const phone = phoneToE164(phoneInput.value);
    const password = passwordInput.value;
    if (!phone) { setMessage(tr("phoneError")); phoneInput.focus(); return; }
    if (password.length < 6) { setMessage(tr("passwordError")); passwordInput.focus(); return; }
    if (signupMode && !document.getElementById("terms").checked) {
      setMessage(tr("termsError"));
      return;
    }

    if (signupMode) {
      const { data, error } = await client.auth.signUp({
        phone,
        password,
        options: { data: { account_type: "rider", preferred_language: lang() } }
      });
      if (error) throw error;
      if (data.session) {
        setMessage(tr("signupSuccess"), true);
        announceSession(data.user);
        document.getElementById("formIntro").textContent = tr("signupSuccess");
        setBusy(true);
      } else {
        form.dataset.mercobPhone = phone;
        phoneInput.value = phone.slice(4);
        phoneInput.readOnly = true;
        passwordInput.closest(".password-field").hidden = true;
        document.getElementById("termsRow").hidden = true;
        otpRow.hidden = false;
        otpInput.focus();
        document.getElementById("submitText").textContent = tr("verify");
        document.getElementById("formTitle").textContent = tr("otpLabel");
        document.getElementById("formIntro").textContent = tr("otpSent");
        setMessage(tr("otpSent"), true);
      }
    } else {
      const { data, error } = await client.auth.signInWithPassword({ phone, password });
      if (error) throw error;
      setMessage(tr("loginSuccess"), true);
      announceSession(data.user);
      document.getElementById("formIntro").textContent = tr("loginSuccess");
      setBusy(true);
    }
  } catch (error) {
    console.error("MERCOB Supabase authentication error:", error);
    const msg = String(error?.message || "").toLowerCase();
    const friendly = msg.includes("otp") || msg.includes("token") ? tr("otpError") :
      (signupMode ? tr("signupError") : tr("loginError"));
    setMessage(friendly);
  } finally {
    if (!document.getElementById("formMessage").classList.contains("success")) setBusy(false);
  }
}, true);

window.addEventListener("mercob-supabase-ready", async () => {
  const client = window.mercobSupabase;
  if (!client) return;
  const { data } = await client.auth.getSession();
  if (data.session) announceSession(data.session.user);
  client.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT") document.dispatchEvent(new CustomEvent("mercob:signed-out"));
    if (event === "SIGNED_IN" && session) announceSession(session.user);
  });
});
