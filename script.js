// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.header');
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatbotMessages = document.getElementById('chatbot-messages');
const contactForm = document.getElementById('contactForm');
const settingsBtn = document.getElementById('settingsBtn');
const settingsMenu = document.getElementById('settingsMenu');
const themeToggle = document.getElementById('themeToggle');
const languageSelector = document.getElementById('languageSelector');
const settingsBtnMobile = document.getElementById('settingsBtnMobile');
const settingsMenuMobile = document.getElementById('settingsMenuMobile');
const themeToggleMobile = document.getElementById('themeToggleMobile');
const languageSelectorMobile = document.getElementById('languageSelectorMobile');

// Auth Elements
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const authModal = document.getElementById('authModal');
const closeBtn = document.querySelector('.close');
const tabBtns = document.querySelectorAll('.tab-btn');
const authForms = document.querySelectorAll('.auth-form');
const signinForm = document.getElementById('signinForm');
const signupForm = document.getElementById('signupForm');
const switchToSignup = document.getElementById('switchToSignup');
const switchToSignin = document.getElementById('switchToSignin');

// Profile Elements
const profileLink = document.getElementById('profileLink');
const profileSection = document.getElementById('profile');
const profileName = document.getElementById('profileName');
const profileEmail = document.getElementById('profileEmail');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const dateOfBirthInput = document.getElementById('dateOfBirth');
const genderInput = document.getElementById('gender');
const bloodGroupInput = document.getElementById('bloodGroup');
const addressStreetInput = document.getElementById('addressStreet');
const addressCityInput = document.getElementById('addressCity');
const addressStateInput = document.getElementById('addressState');
const updateProfileBtn = document.getElementById('updateProfileBtn');
const changePasswordBtn = document.getElementById('changePasswordBtn');

// Admin Elements
const adminLink = document.getElementById('adminLink');
const adminSection = document.getElementById('admin');

// Doctors Section
let doctorsGrid; // Will be initialized in DOMContentLoaded

// Language translations
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            features: "Features",
            doctors: "Doctors",
            chatbot: "Chatbot",
            profile: "Profile",
            contact: "Contact"
        },
        auth: {
            signIn: "Sign In",
            signUp: "Sign Up",
            welcomeBack: "Welcome Back",
            createAccount: "Create Account",
            loginFailed: "Login failed",
            registrationFailed: "Registration failed",
            emailPlaceholder: "Email Address",
            passwordPlaceholder: "Password",
            firstNamePlaceholder: "First Name",
            lastNamePlaceholder: "Last Name",
            confirmPasswordPlaceholder: "Confirm Password",
            rememberMe: "Remember me",
            forgotPassword: "Forgot Password?",
            noAccount: "Don't have an account?",
            signUpLink: "Sign Up",
            haveAccount: "Already have an account?",
            signInLink: "Sign In",
            agreeToTerms: "I agree to the",
            termsAndConditions: "Terms & Conditions"
        },
        hero: {
            title: "Your Health, Our Priority",
            subtitle: "Experience personalized healthcare solutions with our AI-powered symptom checker and remedy finder.",
            tryChatbot: "Try Chatbot",
            learnMore: "Learn More"
        },
        doctors: {
            title: "Our Expert Doctors",
            subtitle: "Specialists in various fields including Ayurveda and Modern Medicine",
            contact: "Contact"
        },
        about: {
            title: "About RemedyRx",
            subtitle: "Revolutionizing healthcare with technology",
            personalAssistant: "Your Personal Health Assistant",
            description1: "RemedyRx is an innovative healthcare platform that combines artificial intelligence with medical expertise to provide instant, personalized health recommendations. Our mission is to make healthcare accessible, affordable, and convenient for everyone.",
            description2: "Using advanced algorithms and a comprehensive medical database, our system can analyze symptoms and suggest appropriate remedies, helping you make informed decisions about your health and wellness.",
            usersHelped: "Users Helped",
            diseasesCovered: "Diseases Covered",
            userSatisfaction: "User Satisfaction"
        },
        features: {
            title: "Our Features",
            subtitle: "Advanced healthcare solutions at your fingertips",
            aiDiagnosis: "AI-Powered Diagnosis",
            aiDiagnosisDesc: "Our advanced AI analyzes symptoms and provides accurate health assessments based on medical databases.",
            remedySuggestions: "Remedy Suggestions",
            remedySuggestionsDesc: "Get personalized remedy recommendations including medications, lifestyle changes, and natural solutions.",
            expertVerified: "Expert Verified",
            expertVerifiedDesc: "All recommendations are verified by medical professionals to ensure accuracy and safety.",
            availability: "24/7 Availability",
            availabilityDesc: "Access healthcare advice anytime, anywhere with our always-available chatbot assistant."
        },
        howItWorks: {
            title: "How Our Chatbot Works",
            subtitle: "Simple steps to better health",
            step1: {
                title: "Describe Symptoms",
                description: "Tell our chatbot about your symptoms in natural language"
            },
            step2: {
                title: "AI Analysis",
                description: "Our system analyzes your input using medical databases"
            },
            step3: {
                title: "Get Recommendations",
                description: "Receive personalized remedies and health advice"
            },
            step4: {
                title: "Take Action",
                description: "Implement suggestions or consult with a healthcare provider"
            }
        },
        chatbot: {
            title: "Health Assistant Chatbot",
            subtitle: "Ask about any disease or symptom for instant remedies",
            assistantTitle: "RemedyRx Assistant",
            assistantSubtitle: "Ask me about symptoms, diseases, or remedies",
            welcomeMessage: "Hello! I'm your RemedyRx assistant. How can I help you today? You can ask about any symptoms or diseases.",
            inputPlaceholder: "Type your symptoms or questions here..."
        },
        contact: {
            title: "Contact Us",
            subtitle: "Have questions? Get in touch with our team",
            getInTouch: "Get In Touch",
            description: "We'd love to hear from you. Contact us for any inquiries or feedback.",
            namePlaceholder: "Your Name",
            emailPlaceholder: "Your Email",
            subjectPlaceholder: "Subject",
            messagePlaceholder: "Your Message",
            sendMessage: "Send Message",
            phone: "Phone",
            email: "Email",
            address: "Address",
            hours: "Office Hours",
            callNow: "Call Now",
            sendEmail: "Send Email"
        },
        profile: {
            title: "Your Profile",
            subtitle: "Manage your account information",
            userName: "User Name",
            userEmail: "user@example.com",
            firstName: "First Name",
            lastName: "Last Name",
            email: "Email",
            firstNamePlaceholder: "First Name",
            lastNamePlaceholder: "Last Name",
            emailPlaceholder: "Email Address",
            updateProfile: "Update Profile",
            changePassword: "Change Password"
        },
        footer: {
            trustedCompanion: "Your trusted health companion",
            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service",
            copyright: "© 2023 RemedyRx. All rights reserved."
        },
        settings: {
            theme: "Theme",
            language: "Language",
            dark: "Dark",
            light: "Light"
        }
    },
    hi: {
        nav: {
            home: "होम",
            about: "हमारे बारे में",
            features: "विशेषताएं",
            doctors: "डॉक्टर",
            chatbot: "चैटबॉट",
            profile: "प्रोफ़ाइल",
            contact: "संपर्क करें"
        },
        auth: {
            signIn: "साइन इन करें",
            signUp: "साइन अप करें",
            welcomeBack: "वापसी पर स्वागत है",
            createAccount: "खाता बनाएं",
            loginFailed: "लॉगिन विफल",
            registrationFailed: "पंजीकरण विफल",
            emailPlaceholder: "ईमेल पता",
            passwordPlaceholder: "पासवर्ड",
            firstNamePlaceholder: "पहला नाम",
            lastNamePlaceholder: "अंतिम नाम",
            confirmPasswordPlaceholder: "पासवर्ड की पुष्टि करें",
            rememberMe: "मुझे याद रखें",
            forgotPassword: "पासवर्ड भूल गए?",
            noAccount: "क्या आपका खाता नहीं है?",
            signUpLink: "साइन अप करें",
            haveAccount: "क्या आपका पहले से एक खाता है?",
            signInLink: "साइन इन करें",
            agreeToTerms: "मैं सहमत हूं",
            termsAndConditions: "नियम व शर्तें"
        },
        hero: {
            title: "आपका स्वास्थ्य, हमारी प्राथमिकता",
            subtitle: "हमारे एआई-संचालित लक्षण चेकर और उपचार खोजकर्ता के साथ वैयक्तिकृत स्वास्थ्य सेवा समाधानों का अनुभव करें।",
            tryChatbot: "चैटबॉट आज़माएं",
            learnMore: "और जानें"
        },
        doctors: {
            title: "हमारे विशेषज्ञ डॉक्टर",
            subtitle: "आयुर्वेद और आधुनिक चिकित्सा सहित विभिन्न क्षेत्रों में विशेषज्ञ",
            contact: "संपर्क करें"
        },
        about: {
            title: "रेमेडीआरएक्स के बारे में",
            subtitle: "प्रौद्योगिकी के साथ स्वास्थ्य सेवाओं को क्रांति लाना",
            personalAssistant: "आपका व्यक्तिगत स्वास्थ्य सहायक",
            description1: "रेमेडीआरएक्स एक नवाचारी स्वास्थ्य सेवा मंच है जो तात्कालिक, व्यक्तिगत स्वास्थ्य अनुशंसाएं प्रदान करने के लिए कृत्रिम बुद्धिमत्ता को चिकित्सा विशेषज्ञता के साथ जोड़ता है। हमारा मिशन हर किसी के लिए स्वास्थ्य सेवाओं को सुलभ, सस्ता और सुविधाजनक बनाना है।",
            description2: "उन्नत एल्गोरिदम और एक व्यापक चिकित्सा डेटाबेस का उपयोग करके, हमारा सिस्टम लक्षणों का विश्लेषण कर सकता है और उचित उपचार सुझा सकता है, जिससे आप अपने स्वास्थ्य और कल्याण के बारे में सूचित निर्णय ले सकें।",
            usersHelped: "उपयोगकर्ता सहायता प्राप्त",
            diseasesCovered: "रोग कवर किए गए",
            userSatisfaction: "उपयोगकर्ता संतुष्टि"
        },
        features: {
            title: "हमारी विशेषताएं",
            subtitle: "उन्नत स्वास्थ्य सेवा समाधान आपकी उंगलियों पर",
            aiDiagnosis: "एआई-संचालित निदान",
            aiDiagnosisDesc: "हमारा उन्नत एआई लक्षणों का विश्लेषण करता है और चिकित्सा डेटाबेस के आधार पर सटीक स्वास्थ्य मूल्यांकन प्रदान करता है।",
            remedySuggestions: "उपचार सुझाव",
            remedySuggestionsDesc: "दवाएं, जीवनशैली परिवर्तन और प्राकृतिक समाधान सहित व्यक्तिगत उपचार अनुशंसाएं प्राप्त करें।",
            expertVerified: "विशेषज्ञ सत्यापित",
            expertVerifiedDesc: "सटीकता और सुरक्षा सुनिश्चित करने के लिए सभी अनुशंसाएं चिकित्सा पेशेवरों द्वारा सत्यापित की जाती हैं।",
            availability: "24/7 उपलब्धता",
            availabilityDesc: "हमारे हमेशा उपलब्ध चैटबॉट सहायक के साथ कभी भी, कहीं भी स्वास्थ्य सेवा सलाह प्राप्त करें।"
        },
        howItWorks: {
            title: "हमारा चैटबॉट कैसे काम करता है",
            subtitle: "बेहतर स्वास्थ्य के लिए सरल चरण",
            step1: {
                title: "लक्षणों का वर्णन करें",
                description: "अपने लक्षणों के बारे में हमारे चैटबॉट को प्राकृतिक भाषा में बताएं"
            },
            step2: {
                title: "एआई विश्लेषण",
                description: "हमारा सिस्टम आपके इनपुट का विश्लेषण चिकित्सा डेटाबेस का उपयोग करके करता है"
            },
            step3: {
                title: "अनुशंसाएं प्राप्त करें",
                description: "व्यक्तिगत उपचार और स्वास्थ्य सलाह प्राप्त करें"
            },
            step4: {
                title: "कार्रवाई करें",
                description: "सुझावों को लागू करें या स्वास्थ्य सेवा प्रदाता से परामर्श लें"
            }
        },
        chatbot: {
            title: "स्वास्थ्य सहायक च्याटबॉट",
            subtitle: "तुरंत उपचार के लिए किसी भी बीमारी या लक्षण के बारे में पूछें",
            assistantTitle: "रेमेडीआरएक्स सहायक",
            assistantSubtitle: "मुझसे लक्षणों, बीमारियों या उपचारों के बारे में पूछें",
            welcomeMessage: "नमस्ते! मैं आपका रेमेडीआरएक्स सहायक हूं। मैं आज आपकी कैसे मदद कर सकता हूं? आप किसी भी लक्षण या बीमारी के बारे में पूछ सकते हैं।",
            inputPlaceholder: "अपने लक्षण या प्रश्न यहां टाइप करें..."
        },
        contact: {
            title: "हमसे संपर्क करें",
            subtitle: "क्या आपके कोई प्रश्न हैं? हमारी टीम से संपर्क करें",
            getInTouch: "संपर्क में रहें",
            description: "हमें आपसे सुनना पसंद होगा। किसी भी पूछताछ या प्रतिक्रिया के लिए हमसे संपर्क करें।",
            namePlaceholder: "आपका नाम",
            emailPlaceholder: "आपका ईमेल",
            subjectPlaceholder: "विषय",
            messagePlaceholder: "आपका संदेश",
            sendMessage: "संदेश भेजें",
            phone: "फ़ोन",
            email: "ईमेल",
            address: "पता",
            hours: "कार्यालय के घंटे",
            callNow: "अभी कॉल करें",
            sendEmail: "ईमेल भेजें"
        },
        profile: {
            title: "आपकी प्रोफ़ाइल",
            subtitle: "अपनी खाता जानकारी प्रबंधित करें",
            userName: "उपयोगकर्ता नाम",
            userEmail: "उपयोगकर्ता@उदाहरण.कॉम",
            firstName: "पहला नाम",
            lastName: "अंतिम नाम",
            email: "ईमेल",
            firstNamePlaceholder: "पहला नाम",
            lastNamePlaceholder: "अंतिम नाम",
            emailPlaceholder: "ईमेल पता",
            updateProfile: "प्रोफ़ाइल अपडेट करें",
            changePassword: "पासवर्ड बदलें"
        },
        footer: {
            trustedCompanion: "आपका विश्वसनीय स्वास्थ्य साथी",
            privacyPolicy: "गोपनीयता नीति",
            termsOfService: "सेवा की शर्तें",
            copyright: "© 2023 रेमेडीआरएक्स। सर्वाधिकार सुरक्षित।"
        },
        settings: {
            theme: "थीम",
            language: "भाषा",
            dark: "डार्क",
            light: "लाइट"
        }
    },
    ne: {
        nav: {
            home: "गृह",
            about: "हाम्रो बारे",
            features: "विशेषताहरू",
            doctors: "डाक्टरहरू",
            chatbot: "च्याटबट",
            profile: "प्रोफाइल",
            contact: "सम्पर्क"
        },
        auth: {
            signIn: "साइन इन गर्नुहोस्",
            signUp: "साइन अप गर्नुहोस्",
            welcomeBack: "फिर्ता स्वागत छ",
            createAccount: "खाता सिर्जना गर्नुहोस्",
            loginFailed: "लगइन असफल भयो",
            registrationFailed: "दर्ता असफल भयो",
            emailPlaceholder: "इमेल ठेगाना",
            passwordPlaceholder: "पासवर्ड",
            firstNamePlaceholder: "पहिलो नाम",
            lastNamePlaceholder: "अन्तिम नाम",
            confirmPasswordPlaceholder: "पासवर्ड पुष्टि गर्नुहोस्",
            rememberMe: "मलाई सम्झनुहोस्",
            forgotPassword: "पासवर्ड बिर्सनुभयो?",
            noAccount: "के तपाईंसँग खाता छैन?",
            signUpLink: "साइन अप गर्नुहोस्",
            haveAccount: "के तपाईंसँग पहिले नै खाता छ?",
            signInLink: "साइन इन गर्नुहोस्",
            agreeToTerms: "म यसलाई स्वीकार गर्छु",
            termsAndConditions: "नियम र शर्तहरू"
        },
        hero: {
            title: "तपाईंको स्वास्थ्य, हाम्रो प्राथमिकता",
            subtitle: "हाम्रो एआई-संचालित लक्षण जाँचकर्ता र उपचार खोजकर्ताको साथ व्यक्तिगत स्वास्थ्य सेवा समाधानहरूको अनुभव गर्नुहोस्।",
            tryChatbot: "च्याटबट प्रयास गर्नुहोस्",
            learnMore: "थप जान्नुहोस्"
        },
        doctors: {
            title: "हाम्रा विशेषज्ञ डाक्टरहरू",
            subtitle: "आयुर्वेद र आधुनिक चिकित्सामा विशेषज्ञहरू",
            contact: "सम्पर्क गर्नुहोस्"
        },
        about: {
            title: "रेमेडीआरएक्सको बारे",
            subtitle: "प्रविधिको साथ स्वास्थ्य सेवाहरू क्रान्ति लैजाँदै",
            personalAssistant: "तपाईंको व्यक्तिगत स्वास्थ्य सहायक",
            description1: "रेमेडीआरएक्स एउटा नवाचारी स्वास्थ्य सेवा मञ्च हो जुन तुरुन्त, व्यक्तिगत स्वास्थ्य सिफारिसहरू प्रदान गर्न कृत्रिम बुद्धिलाई चिकित्सा विशेषज्ञतासँग जोड्छ। हाम्रो मिशन हरेक व्यक्तिको लागि स्वास्थ्य सेवाहरू पहुँच योग्य, सस्तो र सुविधाजनक बनाउनु हो।",
            description2: "उन्नत एल्गोरिदमहरू र एउटा व्यापक चिकित्सा डाटाबेसको प्रयोग गरेर, हाम्रो प्रणालीले लक्षणहरूको विश्लेषण गर्न सक्छ र उपयुक्त उपचारहरू सुझाव दिन सक्छ, जसले तपाईंलाई आफ्नो स्वास्थ्य र कल्याणको बारेमा सूचित निर्णयहरू लिन मद्दत गर्छ।",
            usersHelped: "प्रयोगकर्ताहरूलाई मद्दत गरियो",
            diseasesCovered: "रोगहरू कभर गरियो",
            userSatisfaction: "प्रयोगकर्ता सन्तुष्टि"
        },
        features: {
            title: "हाम्रा विशेषताहरू",
            subtitle: "उन्नत स्वास्थ्य सेवा समाधानहरू तपाईंका औंलाहरूमा",
            aiDiagnosis: "एआई-संचालित निदान",
            aiDiagnosisDesc: "हाम्रो उन्नत एआईले लक्षणहरूको विश्लेषण गर्छ र चिकित्सा डाटाबेसमा आधारित सटीक स्वास्थ्य मूल्याङ्कन प्रदान गर्छ।",
            remedySuggestions: "उपचार सुझावहरू",
            remedySuggestionsDesc: "औषधि, जीवनशैली परिवर्तन र प्राकृतिक समाधानहरू सहित व्यक्तिगत उपचार सिफारिसहरू प्राप्त गर्नुहोस्।",
            expertVerified: "विशेषज्ञ रूपमा प्रमाणित",
            expertVerifiedDesc: "शुद्धता र सुरक्षाको निश्चय गर्न सबै सिफारिसहरू चिकित्सा पेशेवरहरूद्वारा प्रमाणित गरिन्छ।",
            availability: "२४/७ उपलब्धता",
            availabilityDesc: "हाम्रो सधैं उपलब्ध च्याटबट सहायकको साथ कुनै पनि समय, कहिने पनि स्वास्थ्य सेवा सल्लाह प्राप्त गर्नुहोस्।"
        },
        howItWorks: {
            title: "हाम्रो च्याटबट कसरी काम गर्छ",
            subtitle: "राम्रो स्वास्थ्यको लागि सरल चरणहरू",
            step1: {
                title: "लक्षणहरूको वर्णन गर्नुहोस्",
                description: "हाम्रो च्याटबटलाई तपाईंको लक्षणहरूको बारेमा प्राकृतिक भाषामा भन्नुहोस्"
            },
            step2: {
                title: "एआई विश्लेषण",
                description: "हाम्रो प्रणालीले तपाईंको इनपुटको विश्लेषण चिकित्सा डाटाबेसको प्रयोग गरेर गर्छ"
            },
            step3: {
                title: "सिफारिसहरू प्राप्त गर्नुहोस्",
                description: "व्यक्तिगत उपचार र स्वास्थ्य सल्लाह प्राप्त गर्नुहोस्"
            },
            step4: {
                title: "कार्य गर्नुहोस्",
                description: "सुझावहरू लागू गर्नुहोस् वा स्वास्थ्य सेवा प्रदायकसँग परामर्श लिनुहोस्"
            }
        },
        chatbot: {
            title: "स्वास्थ्य सहायक च्याटबट",
            subtitle: "तुरुन्तै उपचारको लागि कुनै पनि रोग वा लक्षणको बारे मा सोध्नुहोस्",
            assistantTitle: "रेमेडीआरएक्स सहायक",
            assistantSubtitle: "मलाई लक्षणहरू, रोगहरू वा उपचारहरूको बारे मा सोध्नुहोस्",
            welcomeMessage: "नमस्ते! म तपाईंको रेमेडीआरएक्स सहायक हुँ। म आज तपाईंको के मद्दत गर्न सक्छु? तपाईं कुनै पनि लक्षण वा रोगको बारेमा सोध्न सक्नुहुन्छ।",
            inputPlaceholder: "आफ्नो लक्षण वा प्रश्नहरू यहाँ टाइप गर्नुहोस्..."
        },
        contact: {
            title: "हामीलाई सम्पर्क गर्नुहोस्",
            subtitle: "के तपाईंसँग प्रश्नहरू छन्? हाम्रो टीमलाई सम्पर्क गर्नुहोस्",
            getInTouch: "सम्पर्कमा रहनुहोस्",
            description: "हामीले तपाईंबाट सुन्न चाहन्छौं। कुनै पनि पृच्छा वा प्रतिक्रियाको लागि हामीलाई सम्पर्क गर्नुहोस्।",
            namePlaceholder: "तपाईंको नाम",
            emailPlaceholder: "तपाईंको इमेल",
            subjectPlaceholder: "विषय",
            messagePlaceholder: "तपाईंको सन्देश",
            sendMessage: "सन्देश पठाउनुहोस्",
            phone: "फोन",
            email: "इमेल",
            address: "ठेगाना",
            hours: "कार्यालयका घण्टाहरू",
            callNow: "अहिले कल गर्नुहोस्",
            sendEmail: "इमेल पठाउनुहोस्"
        },
        profile: {
            title: "तपाईंको प्रोफाइल",
            subtitle: "आफ्नो खाता जानकारी प्रबन्ध गर्नुहोस्",
            userName: "प्रयोगकर्ता नाम",
            userEmail: "प्रयोगकर्ता@उदाहरण.कम",
            firstName: "पहिलो नाम",
            lastName: "अन्तिम नाम",
            email: "इमेल",
            firstNamePlaceholder: "पहिलो नाम",
            lastNamePlaceholder: "अन्तिम नाम",
            emailPlaceholder: "इमेल ठेगाना",
            updateProfile: "प्रोफाइल अपडेट गर्नुहोस्",
            changePassword: "पासवर्ड परिवर्तन गर्नुहोस्"
        },
        footer: {
            trustedCompanion: "तपाईंको विश्वसनीय स्वास्थ्य साथी",
            privacyPolicy: "गोपनीयता नीति",
            termsOfService: "सेवाका शर्तहरू",
            copyright: "© २०२३ रेमेडीआरएक्स। सबै अधिकार सुरक्षित।"
        },
        settings: {
            theme: "थिम",
            language: "भाषा",
            dark: "डार्क",
            light: "लाइट"
        }
    }
};

// Set initial theme based on user preference or system preference
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> <span data-i18n="settings.light">Light</span>';
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> <span data-i18n="settings.dark">Dark</span>';
    }
    translatePage(localStorage.getItem('language') || 'en');
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> <span data-i18n="settings.light">Light</span>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> <span data-i18n="settings.dark">Dark</span>';
        localStorage.setItem('theme', 'light');
    }
    translatePage(localStorage.getItem('language') || 'en');
}

// Set initial language
function setInitialLanguage() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    languageSelector.value = savedLanguage;
    translatePage(savedLanguage);
}

// Translate page content
function translatePage(language) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(element => {
        const keys = element.getAttribute('data-i18n').split('.');
        let translation = translations[language];
        
        // Navigate through the translation object
        for (const key of keys) {
            translation = translation[key];
        }
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update mobile menu content to match desktop
    updateMobileMenuContent(language);
    
    // Update all elements with data-i18n attributes, including those in dynamically generated content
    updateAllTranslations(language);
}

// Update all translations throughout the page
function updateAllTranslations(language) {
    // Update doctor section content
    const doctorCards = document.querySelectorAll('.doctor-card');
    doctorCards.forEach(card => {
        const specialtyElement = card.querySelector('.specialty');
        const experienceElement = card.querySelector('.experience');
        const contactButton = card.querySelector('.contact-btn');
        
        if (specialtyElement && translations[language].doctors?.specialty) {
            specialtyElement.textContent = translations[language].doctors.specialty;
        }
        
        if (experienceElement && translations[language].doctors?.experience) {
            // Update the experience text to maintain the dynamic value
            const experienceText = experienceElement.textContent;
            const yearsMatch = experienceText.match(/(\d+)\s*years\s*experience/);
            if (yearsMatch) {
                experienceElement.textContent = `${yearsMatch[1]} ${translations[language].doctors.experience}`;
            }
        }
        
        if (contactButton && translations[language].doctors?.contact) {
            contactButton.innerHTML = `<i class="fas fa-phone"></i> ${translations[language].doctors.contact}`;
        }
    });
    
    // Update contact buttons in doctor contact modal if it exists
    const contactModal = document.getElementById('doctorContactModal');
    if (contactModal) {
        const phoneHeader = contactModal.querySelector('h3:nth-child(1)');
        const emailHeader = contactModal.querySelector('h3:nth-child(2)');
        const addressHeader = contactModal.querySelector('h3:nth-child(3)');
        const hoursHeader = contactModal.querySelector('h3:nth-child(4)');
        const callButton = contactModal.querySelector('.call-btn');
        const emailButton = contactModal.querySelector('.email-btn');
        
        if (phoneHeader && translations[language].contact?.phone) {
            phoneHeader.innerHTML = `<i class="fas fa-phone"></i> ${translations[language].contact.phone}`;
        }
        
        if (emailHeader && translations[language].contact?.email) {
            emailHeader.innerHTML = `<i class="fas fa-envelope"></i> ${translations[language].contact.email}`;
        }
        
        if (addressHeader && translations[language].contact?.address) {
            addressHeader.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[language].contact.address}`;
        }
        
        if (hoursHeader && translations[language].contact?.hours) {
            hoursHeader.innerHTML = `<i class="fas fa-clock"></i> ${translations[language].contact.hours}`;
        }
        
        if (callButton && translations[language].contact?.callNow) {
            callButton.innerHTML = `<i class="fas fa-phone-alt"></i> ${translations[language].contact.callNow}`;
        }
        
        if (emailButton && translations[language].contact?.sendEmail) {
            emailButton.innerHTML = `<i class="fas fa-envelope"></i> ${translations[language].contact.sendEmail}`;
        }
    }
    
    // Update all section headers
    const sectionHeaders = document.querySelectorAll('.section-header h2, .section-header p');
    sectionHeaders.forEach(element => {
        const i18nKey = element.getAttribute('data-i18n');
        if (i18nKey) {
            const keys = i18nKey.split('.');
            let translation = translations[language];
            
            // Navigate through the translation object
            for (const key of keys) {
                if (translation && translation[key]) {
                    translation = translation[key];
                } else {
                    translation = null;
                    break;
                }
            }
            
            if (translation) {
                element.textContent = translation;
            }
        }
    });
    
    // Update all buttons and links with i18n attributes
    const buttonsAndLinks = document.querySelectorAll('button[data-i18n], a[data-i18n]');
    buttonsAndLinks.forEach(element => {
        const i18nKey = element.getAttribute('data-i18n');
        if (i18nKey) {
            const keys = i18nKey.split('.');
            let translation = translations[language];
            
            // Navigate through the translation object
            for (const key of keys) {
                if (translation && translation[key]) {
                    translation = translation[key];
                } else {
                    translation = null;
                    break;
                }
            }
            
            if (translation) {
                element.textContent = translation;
            }
        }
    });
    
    // Update form placeholders
    const formInputs = document.querySelectorAll('input[placeholder], textarea[placeholder]');
    formInputs.forEach(element => {
        const i18nKey = element.getAttribute('data-i18n');
        if (i18nKey) {
            const keys = i18nKey.split('.');
            let translation = translations[language];
            
            // Navigate through the translation object
            for (const key of keys) {
                if (translation && translation[key]) {
                    translation = translation[key];
                } else {
                    translation = null;
                    break;
                }
            }
            
            if (translation) {
                element.placeholder = translation;
            }
        }
    });
    
    // Update footer content
    const footerElements = document.querySelectorAll('.footer a, .footer p, .footer-bottom p');
    footerElements.forEach(element => {
        const i18nKey = element.getAttribute('data-i18n');
        if (i18nKey) {
            const keys = i18nKey.split('.');
            let translation = translations[language];
            
            // Navigate through the translation object
            for (const key of keys) {
                if (translation && translation[key]) {
                    translation = translation[key];
                } else {
                    translation = null;
                    break;
                }
            }
            
            if (translation) {
                element.textContent = translation;
            }
        }
    });
}

// Update mobile menu content
function updateMobileMenuContent(language) {
    const mobileMenu = document.getElementById('settingsMenuMobile');
    if (mobileMenu) {
        const themeText = translations[language].settings?.light || translations.en.settings.light;
        const darkMode = document.body.classList.contains('dark-mode');
        
        mobileMenu.innerHTML = `
            <div class="settings-item">
                <span data-i18n="settings.theme">${translations[language].settings?.theme || translations.en.settings.theme}</span>
                <button id="themeToggleMobile" class="theme-btn">
                    <i class="fas ${darkMode ? 'fa-sun' : 'fa-moon'}"></i> 
                    <span data-i18n="settings.${darkMode ? 'light' : 'dark'}">${darkMode ? themeText : (translations[language].settings?.dark || translations.en.settings.dark)}</span>
                </button>
            </div>
            <div class="settings-item">
                <span data-i18n="settings.language">${translations[language].settings?.language || translations.en.settings.language}</span>
                <select id="languageSelectorMobile">
                    <option value="en" ${languageSelector.value === 'en' ? 'selected' : ''}>English</option>
                    <option value="hi" ${languageSelector.value === 'hi' ? 'selected' : ''}>हिंदी</option>
                    <option value="ne" ${languageSelector.value === 'ne' ? 'selected' : ''}>नेपाली</option>
                </select>
            </div>
        `;
        
        // Add event listeners for mobile controls
        const themeToggleMobile = document.getElementById('themeToggleMobile');
        const languageSelectorMobile = document.getElementById('languageSelectorMobile');
        
        if (themeToggleMobile) {
            themeToggleMobile.addEventListener('click', toggleTheme);
        }
        
        if (languageSelectorMobile) {
            languageSelectorMobile.addEventListener('change', function() {
                languageSelector.value = this.value;
                changeLanguage();
            });
        }
    }
}

// Change language
function changeLanguage() {
    const selectedLanguage = languageSelector.value;
    localStorage.setItem('language', selectedLanguage);
    translatePage(selectedLanguage);
}

// Toggle settings menu
function toggleSettingsMenu() {
    settingsMenu.classList.toggle('show');
}

// Toggle mobile settings menu
function toggleMobileSettingsMenu() {
    settingsMenuMobile.classList.toggle('show');
    
    // Update mobile menu content when opening
    if (settingsMenuMobile.classList.contains('show')) {
        const currentLanguage = localStorage.getItem('language') || 'en';
        updateMobileMenuContent(currentLanguage);
    }
}

// Close settings menu when clicking outside
function closeSettingsMenu(event) {
    if (settingsMenu.classList.contains('show') && 
        !settingsBtn.contains(event.target) && 
        !settingsMenu.contains(event.target)) {
        settingsMenu.classList.remove('show');
    }
    
    if (settingsMenuMobile.classList.contains('show') && 
        !settingsBtnMobile.contains(event.target) && 
        !settingsMenuMobile.contains(event.target)) {
        settingsMenuMobile.classList.remove('show');
    }
}

// Event listeners for theme toggle and language selector
settingsBtn.addEventListener('click', toggleSettingsMenu);
settingsBtnMobile.addEventListener('click', toggleMobileSettingsMenu);
themeToggle.addEventListener('click', toggleTheme);
languageSelector.addEventListener('change', changeLanguage);

// Close settings menu when clicking outside
document.addEventListener('click', closeSettingsMenu);

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('toggle');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('toggle');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Auth Modal Functionality
loginBtn.addEventListener('click', () => {
    authModal.style.display = 'block';
    showAuthForm('signin');
});

signupBtn.addEventListener('click', () => {
    authModal.style.display = 'block';
    showAuthForm('signup');
});

closeBtn.addEventListener('click', () => {
    authModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});

// Tab switching
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        showAuthForm(tab);
    });
});

// Switch between forms
switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    showAuthForm('signup');
});

switchToSignin.addEventListener('click', (e) => {
    e.preventDefault();
    showAuthForm('signin');
});

function showAuthForm(formType) {
    // Update active tab
    tabBtns.forEach(btn => {
        if (btn.getAttribute('data-tab') === formType) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Show active form
    authForms.forEach(form => {
        if (form.id === formType + 'Form') {
            form.classList.add('active');
        } else {
            form.classList.remove('active');
        }
    });
}

// Form submissions
signinForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    // Simple frontend validation
    if (!email || !password) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
    submitBtn.disabled = true;
    
    // Call login API
    fetch('/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            // Store token in localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            // Close modal and show success
            authModal.style.display = 'none';
            
            // Show success message
            showMessage(`Welcome back, ${data.user.firstName}!`, 'success');
            
            // Update UI to show user is logged in
            updateAuthUI(true, data.user);
        } else {
            showMessage(data.message || 'Login failed. Please check your credentials.', 'error');
        }
    })
    .catch(error => {
        console.error('Login error:', error);
        showMessage('An error occurred during login. Please try again.', 'error');
    })
    .finally(() => {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
});

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');
    const firstNameInput = inputs[0];
    const lastNameInput = inputs[1];
    const emailInput = inputs[2];
    const passwordInput = inputs[3];
    const confirmPasswordInput = inputs[4];
    
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    // Simple frontend validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        showMessage('Please fill in all fields', 'error');
        return;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
        showMessage('Passwords do not match!', 'error');
        return;
    }
    
    // Validate password length
    if (password.length < 6) {
        showMessage('Password must be at least 6 characters long', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing Up...';
    submitBtn.disabled = true;
    
    // Call register API
    fetch('/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ firstName, lastName, email, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            // Store token in localStorage
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            
            // Close modal and show success
            authModal.style.display = 'none';
            
            // Show success message
            showMessage(`Welcome, ${data.user.firstName}! Your account has been created.`, 'success');
            
            // Update UI to show user is logged in
            updateAuthUI(true, data.user);
        } else {
            showMessage(data.message || 'Registration failed. Please check your information.', 'error');
        }
    })
    .catch(error => {
        console.error('Registration error:', error);
        showMessage('An error occurred during registration. Please try again.', 'error');
    })
    .finally(() => {
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
});

// Update UI based on auth state
function updateAuthUI(isLoggedIn, user) {
    const authButtons = document.querySelector('.auth-buttons');
    if (isLoggedIn && user) {
        authButtons.innerHTML = `
            <span class="user-greeting">Hi, ${user.firstName}</span>
            <button class="btn secondary-btn" id="logoutBtn">Logout</button>
        `;
        
        // Show profile link
        profileLink.style.display = 'block';
        
        // Show admin link if user is admin
        if (user.role === 'admin' && adminLink) {
            adminLink.style.display = 'block';
        }
        
        // Add logout event listener
        document.getElementById('logoutBtn').addEventListener('click', () => {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            updateAuthUI(false);
            profileSection.style.display = 'none';
            if (adminSection) adminSection.style.display = 'none';
            showMessage('You have been logged out.', 'success');
        });
    } else {
        authButtons.innerHTML = `
            <button class="btn secondary-btn" id="loginBtn">Sign In</button>
            <button class="btn primary-btn" id="signupBtn">Sign Up</button>
        `;
        
        // Hide profile and admin links when logged out
        profileLink.style.display = 'none';
        if (adminLink) adminLink.style.display = 'none';
        profileSection.style.display = 'none';
        if (adminSection) adminSection.style.display = 'none';
        
        // Re-add event listeners
        document.getElementById('loginBtn').addEventListener('click', () => {
            authModal.style.display = 'block';
            showAuthForm('signin');
        });
        
        document.getElementById('signupBtn').addEventListener('click', () => {
            authModal.style.display = 'block';
            showAuthForm('signup');
        });
    }
    
    // Re-attach event listeners for all navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
            
            // Hide profile and admin sections when navigating
            if (profileSection && !link.getAttribute('href').includes('profile')) {
                profileSection.style.display = 'none';
            }
            if (adminSection && !link.getAttribute('href').includes('admin')) {
                adminSection.style.display = 'none';
            }
        });
    });
}

// Profile functionality
profileLink.addEventListener('click', (e) => {
    e.preventDefault();
    showProfile();
});

function showProfile() {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        if (!section.classList.contains('header') && !section.classList.contains('footer')) {
            section.style.display = 'none';
        }
    });
    
    // Show profile section
    profileSection.style.display = 'block';
    
    // Load user data
    loadProfileData();
}

function loadProfileData() {
    const token = localStorage.getItem('token');
    if (!token) return;
    
    fetch('/api/auth/profile', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(user => {
        profileName.textContent = `${user.firstName} ${user.lastName}`;
        profileEmail.textContent = user.email;
        firstNameInput.value = user.firstName || '';
        lastNameInput.value = user.lastName || '';
        emailInput.value = user.email || '';
        phoneInput.value = user.phone || '';
        if (user.dateOfBirth) {
            dateOfBirthInput.value = user.dateOfBirth.split('T')[0];
        }
        genderInput.value = user.gender || '';
        bloodGroupInput.value = user.medicalHistory?.bloodGroup || '';
        addressStreetInput.value = user.address?.street || '';
        addressCityInput.value = user.address?.city || '';
        addressStateInput.value = user.address?.state || '';
    })
    .catch(error => {
        console.error('Error loading profile:', error);
        showMessage('Error loading profile data', 'error');
    });
}

updateProfileBtn.addEventListener('click', () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
        showMessage('You must be logged in to update your profile.', 'error');
        return;
    }
    
    const updatedData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        phone: phoneInput.value,
        dateOfBirth: dateOfBirthInput.value,
        gender: genderInput.value,
        address: {
            street: addressStreetInput.value,
            city: addressCityInput.value,
            state: addressStateInput.value
        },
        medicalHistory: {
            bloodGroup: bloodGroupInput.value
        }
    };
    
    fetch('/api/auth/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.user) {
            // Update localStorage
            const user = JSON.parse(localStorage.getItem('user'));
            localStorage.setItem('user', JSON.stringify({...user, ...data.user}));
            
            profileName.textContent = `${data.user.firstName} ${data.user.lastName}`;
            profileEmail.textContent = data.user.email;
            showMessage('Profile updated successfully!', 'success');
        }
    })
    .catch(error => {
        console.error('Error updating profile:', error);
        showMessage('Error updating profile', 'error');
    });
});

changePasswordBtn.addEventListener('click', () => {
    alert('Password change functionality would be implemented in a full application with backend support.');
});

// Chatbot Functionality
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        // Add user message to chat
        addMessageToChat(message, 'user');
        userInput.value = '';
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.className = 'message bot-message typing-indicator';
        typingIndicator.innerHTML = '<p>Thinking...</p>';
        chatbotMessages.appendChild(typingIndicator);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        
        // Send to backend API for processing
        fetch('/api/symptoms/remedy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ symptom: message })
        })
        .then(response => {
            // Remove typing indicator
            typingIndicator.remove();
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            addMessageToChat(data.remedy, 'bot');
        })
        .catch(error => {
            console.error('Error:', error);
            // Remove typing indicator
            typingIndicator.remove();
            addMessageToChat("Sorry, I'm having trouble processing your request. Please try again.", 'bot');
        });
    }
}

function addMessageToChat(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(sender + '-message');
    
    // Format text with markdown-like styling
    let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
        .replace(/\n/g, '<br>'); // Line breaks
    
    messageDiv.innerHTML = `<p>${formattedText}</p>`;
    chatbotMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Form submission
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelector('input[placeholder="Subject"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple frontend validation
    if (!name || !email || !message) {
        showMessage('Please fill in all required fields', 'error');
        return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please provide a valid email address', 'error');
        return;
    }
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (in a real app, you would send this to a backend)
    setTimeout(() => {
        // Show success message
        showMessage(`Thank you ${name}! Your message has been sent. We'll get back to you soon.`, 'success');
        
        // Reset form
        this.reset();
        
        // Reset button state
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Show message function for user feedback
function showMessage(message, type) {
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `message-popup ${type}`;
    messageElement.innerHTML = `
        <p>${message}</p>
        <button class="close-btn">&times;</button>
    `;
    
    // Add to body
    document.body.appendChild(messageElement);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageElement.parentNode) {
            messageElement.parentNode.removeChild(messageElement);
        }
    }, 5000);
    
    // Close button event
    messageElement.querySelector('.close-btn').addEventListener('click', () => {
        document.body.removeChild(messageElement);
    });
}

// Enhanced Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.glass-card, .feature-card, .step, .about-text, .about-image, .doctor-card');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
};

// Set initial state for animated elements
document.querySelectorAll('.glass-card, .feature-card, .step, .about-text, .about-image, .doctor-card').forEach(element => {
    element.classList.add('animate-on-scroll');
});

// Trigger animations on scroll
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Display static doctors (no database required)
function displayStaticDoctors() {
    // Initialize doctorsGrid if not already done
    if (!doctorsGrid) {
        doctorsGrid = document.querySelector('.doctors-grid');
    }
    
    if (!doctorsGrid) {
        console.error('Doctors grid element not found');
        return;
    }
    
    // Static doctor data with placeholder images
    const doctors = [
        {
            name: 'Dr. Sarah Johnson',
            specialty: 'General Physician',
            experience: 15,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
            phone: '+1 (555) 123-4567',
            email: 'sarah.johnson@remedyrx.com'
        },
        {
            name: 'Dr. Michael Chen',
            specialty: 'Ayurvedic Specialist',
            experience: 12,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
            phone: '+1 (555) 234-5678',
            email: 'michael.chen@remedyrx.com'
        },
        {
            name: 'Dr. Emily Rodriguez',
            specialty: 'Pediatrician',
            experience: 10,
            rating: 4.7,
            image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
            phone: '+1 (555) 345-6789',
            email: 'emily.rodriguez@remedyrx.com'
        },
        {
            name: 'Dr. Rajesh Sharma',
            specialty: 'Cardiologist',
            experience: 20,
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
            phone: '+1 (555) 456-7890',
            email: 'rajesh.sharma@remedyrx.com'
        },
        {
            name: 'Dr. Lisa Anderson',
            specialty: 'Dermatologist',
            experience: 8,
            rating: 4.6,
            image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop',
            phone: '+1 (555) 567-8901',
            email: 'lisa.anderson@remedyrx.com'
        },
        {
            name: 'Dr. James Wilson',
            specialty: 'Orthopedic Surgeon',
            experience: 18,
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=400&fit=crop',
            phone: '+1 (555) 678-9012',
            email: 'james.wilson@remedyrx.com'
        }
    ];
    
    doctorsGrid.innerHTML = '';
    
    doctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card glass-card animate-on-scroll';
        doctorCard.innerHTML = `
            <div class="doctor-image">
                <img src="${doctor.image}" alt="${doctor.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/400x400?text=Doctor';">
            </div>
            <div class="doctor-info">
                <h3>${doctor.name}</h3>
                <p class="specialty">${doctor.specialty}</p>
                <p class="experience">${doctor.experience} years experience</p>
                <div class="rating">
                    ${generateStarRating(doctor.rating)}
                    <span>(${doctor.rating})</span>
                </div>
                <div class="doctor-contact">
                    <button class="btn secondary-btn contact-btn" 
                        data-doctor-name="${doctor.name}" 
                        data-doctor-specialty="${doctor.specialty}" 
                        data-doctor-experience="${doctor.experience}" 
                        data-doctor-rating="${doctor.rating}" 
                        data-doctor-image="${doctor.image}"
                        data-doctor-phone="${doctor.phone}"
                        data-doctor-email="${doctor.email}">
                        <i class="fas fa-phone"></i> Contact
                    </button>
                </div>
            </div>
        `;
        doctorsGrid.appendChild(doctorCard);
    });
    
    // Add event listeners for contact buttons
    document.querySelectorAll('.contact-btn').forEach(button => {
        button.addEventListener('click', function() {
            const doctorName = this.getAttribute('data-doctor-name');
            const doctorSpecialty = this.getAttribute('data-doctor-specialty');
            const doctorExperience = this.getAttribute('data-doctor-experience');
            const doctorRating = this.getAttribute('data-doctor-rating');
            const doctorImage = this.getAttribute('data-doctor-image');
            const doctorPhone = this.getAttribute('data-doctor-phone');
            const doctorEmail = this.getAttribute('data-doctor-email');
            
            showDoctorContactInfo({
                name: doctorName,
                specialty: doctorSpecialty,
                experience: doctorExperience,
                rating: doctorRating,
                image: doctorImage,
                phone: doctorPhone,
                email: doctorEmail
            });
        });
    });
    
    // Re-apply animation triggers with a small delay to ensure DOM is updated
    setTimeout(() => {
        animateOnScroll();
    }, 100);
}

// Show doctor contact information modal
function showDoctorContactInfo(doctor) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('doctorContactModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'doctorContactModal';
        modal.className = 'auth-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <div class="doctor-contact-info">
                    <div class="doctor-contact-header">
                        <div class="doctor-contact-image">
                            <img src="" alt="" id="contactDoctorImage">
                        </div>
                        <div class="doctor-contact-details">
                            <h2 id="contactDoctorName"></h2>
                            <p class="specialty" id="contactDoctorSpecialty"></p>
                            <div class="rating" id="contactDoctorRating"></div>
                        </div>
                    </div>
                    <div class="doctor-contact-content">
                        <div class="contact-info-item">
                            <h3><i class="fas fa-phone"></i> Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div class="contact-info-item">
                            <h3><i class="fas fa-envelope"></i> Email</h3>
                            <p>doctor@example.com</p>
                        </div>
                        <div class="contact-info-item">
                            <h3><i class="fas fa-map-marker-alt"></i> Address</h3>
                            <p>123 Medical Center, Health St, City, State 12345</p>
                        </div>
                        <div class="contact-info-item">
                            <h3><i class="fas fa-clock"></i> Office Hours</h3>
                            <p>Monday-Friday: 9:00 AM - 5:00 PM</p>
                            <p>Saturday: 10:00 AM - 2:00 PM</p>
                        </div>
                        <div class="contact-actions">
                            <button class="btn primary-btn call-btn">
                                <i class="fas fa-phone-alt"></i> Call Now
                            </button>
                            <button class="btn secondary-btn email-btn">
                                <i class="fas fa-envelope"></i> Send Email
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Add event listeners for the modal
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
        
        // Handle call button
        modal.querySelector('.call-btn').addEventListener('click', () => {
            alert(`Calling Dr. ${doctor.name} at +1 (555) 123-4567`);
        });
        
        // Handle email button
        modal.querySelector('.email-btn').addEventListener('click', () => {
            alert(`Opening email to Dr. ${doctor.name} at doctor@example.com`);
        });
    }
    
    // Update the modal content with doctor information
    document.getElementById('contactDoctorImage').src = doctor.image;
    document.getElementById('contactDoctorImage').alt = doctor.name;
    document.getElementById('contactDoctorName').textContent = doctor.name;
    document.getElementById('contactDoctorSpecialty').textContent = doctor.specialty;
    document.getElementById('contactDoctorRating').innerHTML = `
        ${generateStarRating(doctor.rating)}
        <span>(${doctor.experience} years experience)</span>
    `;
    
    // Update phone and email with actual doctor info
    const phoneInfo = modal.querySelector('.contact-info-item:nth-child(1) p');
    const emailInfo = modal.querySelector('.contact-info-item:nth-child(2) p');
    if (phoneInfo) phoneInfo.textContent = doctor.phone || '+1 (555) 123-4567';
    if (emailInfo) emailInfo.textContent = doctor.email || 'doctor@example.com';
    
    // Update call and email button handlers
    const callBtn = modal.querySelector('.call-btn');
    const emailBtn = modal.querySelector('.email-btn');
    
    if (callBtn) {
        callBtn.onclick = () => {
            window.location.href = `tel:${doctor.phone || '+15551234567'}`;
        };
    }
    
    if (emailBtn) {
        emailBtn.onclick = () => {
            window.location.href = `mailto:${doctor.email || 'doctor@example.com'}`;
        };
    }
    
    // Show the modal
    modal.style.display = 'block';
}

function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Set initial theme based on user preference or system preference
function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> <span data-i18n="settings.light">Light</span>';
        if (themeToggleMobile) {
            themeToggleMobile.innerHTML = '<i class="fas fa-sun"></i> <span data-i18n="settings.light">Light</span>';
        }
    } else {
        document.body.classList.remove('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> <span data-i18n="settings.dark">Dark</span>';
        if (themeToggleMobile) {
            themeToggleMobile.innerHTML = '<i class="fas fa-moon"></i> <span data-i18n="settings.dark">Dark</span>';
        }
    }
    translatePage(localStorage.getItem('language') || 'en');
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> <span data-i18n="settings.light">Light</span>';
        if (themeToggleMobile) {
            themeToggleMobile.innerHTML = '<i class="fas fa-sun"></i> <span data-i18n="settings.light">Light</span>';
        }
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> <span data-i18n="settings.dark">Dark</span>';
        if (themeToggleMobile) {
            themeToggleMobile.innerHTML = '<i class="fas fa-moon"></i> <span data-i18n="settings.dark">Dark</span>';
        }
        localStorage.setItem('theme', 'light');
    }
}

// Toggle settings menu
function toggleSettingsMenu() {
    settingsMenu.classList.toggle('show');
}

// Toggle mobile settings menu
function toggleMobileSettingsMenu() {
    settingsMenuMobile.classList.toggle('show');
}

// Close settings menu when clicking outside
function closeSettingsMenu(event) {
    if (settingsMenu.classList.contains('show') && 
        !settingsBtn.contains(event.target) && 
        !settingsMenu.contains(event.target)) {
        settingsMenu.classList.remove('show');
    }
    
    if (settingsMenuMobile.classList.contains('show') && 
        !settingsBtnMobile.contains(event.target) && 
        !settingsMenuMobile.contains(event.target)) {
        settingsMenuMobile.classList.remove('show');
    }
}

// Initialize chatbot with welcome message
document.addEventListener('DOMContentLoaded', () => {
    // Set initial theme and language
    setInitialTheme();
    setInitialLanguage();
    
    // Initialize mobile menu content
    const currentLanguage = localStorage.getItem('language') || 'en';
    updateMobileMenuContent(currentLanguage);
    
    // Initialize doctorsGrid element
    doctorsGrid = document.querySelector('.doctors-grid');
    
    // Add welcome message
    setTimeout(() => {
        addMessageToChat("Welcome to RemedyRx! I'm your comprehensive health assistant. I can help you with:\n\n• Common ailments (headaches, fever, cold, cough)\n• Digestive issues (stomach ache, nausea, constipation)\n• Chronic conditions (diabetes, high blood pressure, arthritis)\n• Mental health (anxiety, depression, insomnia)\n• And many more health concerns!\n\nSimply describe your symptoms or ask about any disease, and I'll provide detailed remedies and health advice. How can I help you today?", 'bot');
    }, 1000);
    
    // Add pulse animation to hero buttons
    const heroButtons = document.querySelector('.hero-buttons');
    if (heroButtons) {
        heroButtons.classList.add('pulse');
    }
    
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    if (token && user) {
        updateAuthUI(true, user);
    }
    
    // Display static doctors
    displayStaticDoctors();
    
    // Admin link click handler
    if (adminLink) {
        adminLink.addEventListener('click', (e) => {
            e.preventDefault();
            showAdminDashboard();
        });
    }
});

// Admin Dashboard Functionality
function showAdminDashboard() {
    const token = localStorage.getItem('token');
    if (!token) {
        showMessage('Please log in to access admin dashboard', 'error');
        return;
    }
    
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        if (!section.classList.contains('header') && !section.classList.contains('footer')) {
            section.style.display = 'none';
        }
    });
    
    // Show admin section
    if (adminSection) {
        adminSection.style.display = 'block';
        loadAllUsers();
    }
}

function loadAllUsers() {
    const token = localStorage.getItem('token');
    
    fetch('/api/auth/users', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Access denied');
        }
        return response.json();
    })
    .then(data => {
        displayUsers(data.users, data.count);
    })
    .catch(error => {
        console.error('Error loading users:', error);
        showMessage('Access denied. Admin privileges required.', 'error');
    });
}

function displayUsers(users, totalCount) {
    // Update stats
    document.getElementById('totalUsers').textContent = totalCount;
    
    const today = new Date().toDateString();
    const newToday = users.filter(u => new Date(u.createdAt).toDateString() === today).length;
    document.getElementById('newUsersToday').textContent = newToday;
    
    const admins = users.filter(u => u.role === 'admin').length;
    document.getElementById('adminUsers').textContent = admins;
    
    // Update table
    const tbody = document.getElementById('usersTableBody');
    tbody.innerHTML = '';
    
    if (users.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; padding: 30px;">No users found</td></tr>';
        return;
    }
    
    users.forEach(user => {
        const row = document.createElement('tr');
        row.style.borderBottom = '1px solid var(--light-gray)';
        row.innerHTML = `
            <td style="padding: 15px;">${user.firstName} ${user.lastName}</td>
            <td style="padding: 15px;">${user.email}</td>
            <td style="padding: 15px;">${user.phone || 'N/A'}</td>
            <td style="padding: 15px;"><span style="padding: 5px 10px; border-radius: 20px; background: ${user.role === 'admin' ? 'var(--secondary)' : 'var(--primary)'}; color: white; font-size: 0.85rem;">${user.role}</span></td>
            <td style="padding: 15px;">${new Date(user.createdAt).toLocaleDateString()}</td>
            <td style="padding: 15px;">
                <button class="btn-view" data-id="${user._id}" style="padding: 8px 15px; background: var(--primary); color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 5px;">View</button>
                ${user.role !== 'admin' ? `<button class="btn-delete" data-id="${user._id}" style="padding: 8px 15px; background: #e74c3c; color: white; border: none; border-radius: 5px; cursor: pointer;">Delete</button>` : ''}
            </td>
        `;
        tbody.appendChild(row);
    });
    
    // Add event listeners for view and delete buttons
    document.querySelectorAll('.btn-view').forEach(btn => {
        btn.addEventListener('click', () => viewUser(btn.dataset.id, users));
    });
    
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => deleteUserConfirm(btn.dataset.id));
    });
}

function viewUser(userId, users) {
    const user = users.find(u => u._id === userId);
    if (!user) return;
    
    const details = `
        <strong>Name:</strong> ${user.firstName} ${user.lastName}<br>
        <strong>Email:</strong> ${user.email}<br>
        <strong>Phone:</strong> ${user.phone || 'N/A'}<br>
        <strong>Gender:</strong> ${user.gender || 'N/A'}<br>
        <strong>Blood Group:</strong> ${user.medicalHistory?.bloodGroup || 'N/A'}<br>
        <strong>Address:</strong> ${user.address?.city || 'N/A'}, ${user.address?.state || 'N/A'}<br>
        <strong>Role:</strong> ${user.role}<br>
        <strong>Joined:</strong> ${new Date(user.createdAt).toLocaleString()}
    `;
    
    alert(details);
}

function deleteUserConfirm(userId) {
    if (confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
        deleteUserById(userId);
    }
}

function deleteUserById(userId) {
    const token = localStorage.getItem('token');
    
    fetch(`/api/auth/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        showMessage('User deleted successfully', 'success');
        loadAllUsers(); // Reload the list
    })
    .catch(error => {
        console.error('Error deleting user:', error);
        showMessage('Error deleting user', 'error');
    });
}

// Close settings menu when clicking outside
document.addEventListener('click', closeSettingsMenu);