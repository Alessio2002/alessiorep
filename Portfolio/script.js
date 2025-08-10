// Toggle Mobile Menu
function toggleMenu() {
    document.getElementById('nav').classList.toggle('active');
  }
  
  // Modal Functions
  function openModal() {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "flex";
    }
  }
  function closeModal() {
    const modal = document.getElementById("modal");
    if (modal) {
      modal.style.display = "none";
    }
  }
  
  // Scroll to Top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  window.addEventListener("scroll", function () {
    const btn = document.getElementById("backToTop");
    if (btn) {
      btn.style.display = window.scrollY > 200 ? "block" : "none";
    }
  });
  
  // Language Change
  function changeLanguage(lang) {
    alert('Language switched to: ' + lang);
  }
  
  // Language translations

  const translations = {
    en: {
        heroTitle: "Welcome to my portfolio",
        heroSubtitle: "Student",
        aboutHeading: "About Me:",
        aboutText: "Hello! I'm Alessio. I'm a student at Business College Helsinki",
        projectsHeading: "Projects",
        projectDescription: "A brief description of the project.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        contactPlaceholder: "Your Message",
        sendButton: "Send",
        navLogo: "Alessio's portfolio",
        navHome: "Home",
        navAbout: "About",
        navProjects: "Projects",
        navGallery: "Gallery",
        navContact: "Contact",
        moreInfo: "More Info",
        modalText: "Here are more detail about the project",
        languageLabel: "🌐 Languages:",
        langEnglish: "🇬🇧 English",
        langFinnish: "🇫🇮 Finnish",
        langIonian: "🏛️ Ionian (standard)",
        langItalian: "🇮🇹 Italian",
        langGreek: "🇬🇷 Greek",
        messageSent: "Message sent!",
        formLabelName: "Name:",
        formLabelEmail: "Email:",
        formLabelMessage: "Message:",
        messageSent: "Message sent!",
        nameSent: "Name:",
        mailSent: "Email:",
        messSent: "Your message:",
        projectTitle: "Project One",
      },
      fi: {
        heroTitle: "Tervetuloa portfoliooni",
        heroSubtitle: "Opiskelija",
        aboutHeading: "Minusta tietoa:",
        aboutText: "Hei! Olen Alessio. Olen opiskelija Business College Helsingissä",
        projectsHeading: "Projektit",
        projectDescription: "Lyhyt kuvaus projektista.",
        namePlaceholder: "Nimesi",
        emailPlaceholder: "Sähköpostisi",
        contactPlaceholder: "Viestisi",
        sendButton: "Lähetä",
        navLogo: "Alession Portfolio",
        navHome: "Etusivu",
        navAbout: "Tietoa",
        navProjects: "Projektit",
        navGallery: "Galleria",
        navContact: "Yhteystiedot",
        moreInfo: "Enemmän Tietoa",
        modalText: "Tässä on lisää tietoa projektista",
        languageLabel: "🌐 Kielet:",
        langEnglish: "🇬🇧 englannin kieli",
        langFinnish: "🇫🇮 suomen kieli",
        langIonian: "🏛️ joonian kieli",
        langItalian: "🇮🇹 italian kieli",
        langGreek: "🇬🇷 kreikan kieli",
        messageSent: "Viesti lähetetty!",
        nameSent: "Nimi:",
        mailSent: "Sähköposti:",
        messSent: "Viestisi:",
        projectTitle: "Projekti Yksi",
      },
    ion: {
        heroTitle: "Benvêno nila porterapêra ma",
        heroSubtitle: "Studiento",
        aboutHeading: "Di Me:",
        aboutText: "Salvê! Me is clâmo Alessio. Esso un studiento ale Business College Helsinki",
        projectsHeading: "Progeitsi",
        projectDescription: "Una descrîbsion picîta dil progeito.",
        namePlaceholder: "Il nôme tûe",
        emailPlaceholder: "L'email tûe",
        contactPlaceholder: "Le nuntso tûo",
        sendButton: "Anvia",
        navLogo: "La porterapêra d'Alessio",
        navHome: "Pâgia d'initsiâl ",
        navAbout: "Informasion",
        navProjects: "Progeitsi",
        navGallery: "Gallêria",
        navContact: "Manirar",
        moreInfo: "Plê d'informasion",
        modalText: "Qi e plê d'informasion dil progeitso",
        languageLabel: "🌐 Lingue:",
        langEnglish: "🇬🇧 Lingua d'Anglêse",
        langFinnish: "🇫🇮 Lingua di Finlandêse",
        langIonian: "🏛️ Lingua Ioniâna",
        langItalian: "🇮🇹 Lingua Italiâna",
        langGreek: "🇬🇷 Hellênichonêse",
        messageSent: "Nuntso anviùito!",
        nameSent: "Nôme:",
        mailSent: "L'email tûe:",
        messSent: "Le nuntso tûo:",
        projectTitle: "Progeito Ûno",
    },
    it: {
      heroTitle: "Benvenuto nel mio portafoglio",
      heroSubtitle: "Studente",
      aboutHeading: "Chi sono:",
      aboutText: "Ciao! Mi chiamo Alessio. Sono uno studente al Business College Helsinki",
      projectsHeading: "Progetti",
      projectDescription: "Una breve descrizione del progetto.",
      namePlaceholder: "Il tuo nome",
      emailPlaceholder: "La tua email",
      contactPlaceholder: "Il tuo messaggio",
      sendButton: "Invia",
      navLogo: "Portafoglio di Alessio",
      navHome: "Pagina iniziale",
      navAbout: "Chi sono",
      navProjects: "Progetti",
      navGallery: "Galleria",
      navContact: "Contatto",
      moreInfo: "Più info",
      modalText: "Ecco ulteriori dettagli sul progetto",
      languageLabel: "🌐 Lingue:",
      langEnglish: "🇬🇧 Inglese",
      langFinnish: "🇫🇮 Finlandese",
      langIonian: "🏛️ Ionico",
      langItalian: "🇮🇹 Italiano",
      langGreek: "🇬🇷 Greco",
      messageSent: "Messagio anviato!",
      nameSent: "Nome:",
      mailSent: "La tua email:",
      messSent: "Il tuo messaggio:",
      projectTitle: "Progetto Uno",
    },
    gr: {
      heroTitle: "Καλώς ήρθατε στο χαρτοφυλάκιό μου",
      heroSubtitle: "Φοιτητής",
      aboutHeading: "Σχετικά με εμένα:",
      aboutText: "Γεια! Το όνομά μου είναι Αλέσιο. Είμαι φοιτητής στο Κολλέγιο επιχειρήσεων Ελσίνκι",
      projectsHeading: "Έργα",
      projectDescription: "Μια σύντομη περιγραφή του έργου.",
      namePlaceholder: "Το όνομά σας",
      emailPlaceholder: "Το ηλεκτρονικό ταχυδρομείο σας",
      contactPlaceholder: "Το μήνυμά σας",
      sendButton: "Αποστολή",
      navLogo: "Χαρτοφυλάκιο του Αλέσιο",
      navHome: "Αρχική",
      navAbout: "Σχετικά",
      navProjects: "Έργα",
      navGallery: "Συλλογή",
      navContact: "Επικοινωνία",
      moreInfo: "Περισσότερες πληροφορίες",
      modalText: "Εδώ είναι περισσότερες λεπτομέρειες για το έργο",
      languageLabel: "🌐 Γλώσσες:",
      langEnglish: "🇬🇧 Αγγλικά",
      langFinnish: "🇫🇮 Φινλανδικά",
      langIonian: "🏛️ Ιωνικά",
      langItalian: "🇮🇹 Ιταλικά",
      langGreek: "🇬🇷 Ελληνικά",
      messageSent: "Το μήνυμα εστάλη!",
      formLabelName: "Όνομα:",
      formLabelEmail: "Ηλεκτρονικό ταχυδρομείο:",
      formLabelMessage: "Μήνυμα:",
      nameSent: "Όνομα:",
      mailSent: "Ηλεκτρονικό ταχυδρομείο:",
      messSent: "Το μήνυμά σας:",
      projectTitle: "Έργο Ένα"
    }
  };

// Language switch function

function changeLanguage(lang) {
  // Update text content
  const textElements = document.querySelectorAll('[data-i18n]');
  textElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update placeholders
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update the send button text
  const sendBtn = document.querySelector('#contact-form button[data-i18n="sendButton"]');
  if (sendBtn && translations[lang].sendButton) {
    sendBtn.textContent = translations[lang].sendButton;
  }

  // Optional: update the language dropdown labels (if needed)
  const options = document.querySelectorAll('#language-select option');
  options.forEach(opt => {
    const key = opt.getAttribute('data-i18n');
    if (translations[lang][key]) {
      opt.textContent = translations[lang][key];
    }
  });
}


  