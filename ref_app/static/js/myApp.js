var app = angular.module('myApp', ["ngRoute", 'pascalprecht.translate', "firebase", "mobile-angular-ui"]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/', {templateUrl: '/static/js/views/home.html', controller: homeController}).
        when('/language/', {templateUrl: '/static/js/views/language.html', controller: languageController}).
//        when('/housing/', {templateUrl: '/static/js/views/housing.html', controller: housingController}).
        when('/help/', {templateUrl: '/static/js/views/help.html', controller: helpController}).
//        when('/health/', {templateUrl: '/static/js/views/health.html', controller: healthController}).
        when('/modal/', {templateUrl: '/static/js/views/modal.html', controller: function () {
            window.ModalEffects()
        }}).
        otherwise({redirectTo: '/'});

}]);

app.config(function ($translateProvider) {

    $translateProvider.translations('en', {
        REFUGEE_RESOURCES: 'Refugee Resources',

        HEALTH: 'Health',
        LEARN_ENGLISH: 'English',
        HOUSING: 'Housing',
        CONNECT: 'Connect',
        JOBS: 'Jobs',
        CHAT: 'Chat',

        EXIT: 'Close Me!',
        <!--Language Modal Text-->
        ONLINE_ENGLISH_PRACTICE: 'ONLINE ENGLISH PRACTICE',
        CALL: 'Call',
        TO_SIGN_UP: 'to sign up for an ESL class near you!',
        HERE_IS_A_VIDEO: 'Here is a video to get you started!',

        <!--Health Modal Text-->
        FIND_A_DOCTOR: 'Find a doctor',
        EMERGENCY_NUMBERS: 'Emergency phone numbers',

        <!--Housing Modal Text-->
        SEARCH_FOR_HOUSING: 'Click to search for housing',
        TENANTS_RIGHTS: 'TENANTS RIGHTS',
        LEGAL_ASSISTANCE: '(legal assistance)',

        <!--Connect Modal Text-->
        QUESTIONS: 'Questions?',
        CLICK_CIRCLE: '(click the blue circle)',

    })
        .translations('sp', {
            REFUGEE_RESOURCES: 'Recursos para Refugiados',

            HEALTH: 'Salud',
            LEARN_ENGLISH: 'Inglés',
            HOUSING: 'Vivienda',
            CONNECT: 'Ayuda',
            JOBS: 'Trabajo',
            CHAT: 'Charlar',

            EXIT: 'Salir',
            <!--Language Modal Text-->
            ONLINE_ENGLISH_PRACTICE: ' PRACTICA TU INGLÉS',
            CALL: 'Llame',
            TO_SIGN_UP: 'para inscribirse en una clase de ESL cerca de usted!',
            HERE_IS_A_VIDEO: 'Un video para empezar a practicar!',

            <!--Health Modal Text-->
            FIND_A_DOCTOR: 'Buscar un médico',
            EMERGENCY_NUMBERS: 'Números de emergencia',

            <!--Housing Modal Text-->
            SEARCH_FOR_HOUSING: 'Buscar vivienda',
            TENANTS_RIGHTS: 'DERECHOS DE LOS INQUILINOS',
            LEGAL_ASSISTANCE: '(asistencia legal)',

            <!--Connect Modal Text-->
            QUESTIONS: ' ¿Preguntas?',
            CLICK_CIRCLE: '(haga clic en el círculo azul para pedir ayuda)'

        }).translations('ar', {
            REFUGEE_RESOURCES: 'Refugee Resources',

            HEALTH: 'الصحة',
            LEARN_ENGLISH: 'تعلم اللغة الإنجليزية',
            HOUSING: 'الإسكان',
            CONNECT: 'مساعدة',
            JOBS: 'وظائف',
            CHAT: 'بريد',

            EXIT: 'خروج',
            <!--Language Modal Text-->
            ONLINE_ENGLISH_PRACTICE: 'على الانترنت الانجليزية الممارسة',
            CALL: 'دعوة',
            TO_SIGN_UP: 'للتسجيل للحصول على الدرجة ESL بالقرب منك!',
            HERE_IS_A_VIDEO: 'فيديو للمساعدة في ممارسة اللغة الإنجليزية',

            <!--Health Modal Text-->
            FIND_A_DOCTOR: 'ابحث عن طبيب',
            EMERGENCY_NUMBERS: 'أرقام الطوارئ',

            <!--Housing Modal Text-->
            SEARCH_FOR_HOUSING: 'انقر هنا للبحث عن سكن',
            TENANTS_RIGHTS: 'حقوق المستأجرين',
            LEGAL_ASSISTANCE: '(المساعدة القانونية)',

            <!--Connect Modal Text-->
            QUESTIONS: 'الأسئلة؟',
            CLICK_CIRCLE: '(اضغط على الدائرة الزرقاء لطلب المساعدة)',

        }).translations('ne', {
            REFUGEE_RESOURCES: 'Refugee Resources',
            HEALTH: 'स्वास्थ्य',
            LEARN_ENGLISH: 'अंग्रेजी जान्नुहोस्',
            HOUSING: 'आवास',
            CONNECT: 'मदत',
            JOBS: 'काम',
            CHAT: 'Chat',

            EXIT: 'निकास',
            <!--Language Modal Text-->
            ONLINE_ENGLISH_PRACTICE: 'अनलाइन English धर्मअनुसार',
            CALL: 'कल',
            TO_SIGN_UP: 'तपाईं नजिकै एक ESL वर्ग लागि साइन अप गर्न!',
            HERE_IS_A_VIDEO: 'यहाँ एक भिडियो अभ्यास सुरु तपाईं मदत गर्नु हो!',

            <!--Health Modal Text-->
            FIND_A_DOCTOR: 'एक डाक्टर खोज्न',
            EMERGENCY_NUMBERS: 'आपतकालीन संख्या',

            <!--Housing Modal Text-->
            SEARCH_FOR_HOUSING: 'आवास खोजी गर्न यहाँ क्लिक',
            TENANTS_RIGHTS: 'डेरावालहरु अधिकार',
            LEGAL_ASSISTANCE: '(कानुनी सहायता)',

            <!--Connect Modal Text-->
            QUESTIONS: 'प्रश्न?',
            CLICK_CIRCLE: '(मदत माग्न नीलो घेरा क्लिक)'

        }).translations('so', {
            REFUGEE_RESOURCES: 'Refugee Resources',

            HEALTH: 'Caafimaadka',
            LEARN_ENGLISH: 'Baro English',
            HOUSING: 'Guryaha',
            CONNECT: 'Caawin',
            JOBS: 'Shaqo',
            CHAT: 'sheekeysto',

            EXIT: 'tago',
            <!--Language Modal Text-->
            ONLINE_ENGLISH_PRACTICE: 'ENGLISH CAAFIMAADKA',
            CALL: 'garaac',
            TO_SIGN_UP: 'inay la soo wareegto ilaa fasalka ESL ah oo aad u dhaw!',
            HERE_IS_A_VIDEO: 'Halkan waa video ah oo kaa caawinaya in aad bilowdo barbarta!',

            <!--Health Modal Text-->
            FIND_A_DOCTOR: 'raadi dhakhtar',
            EMERGENCY_NUMBERS: 'Nambarrada gurmadka deg dega',

            <!--Housing Modal Text-->
            SEARCH_FOR_HOUSING: 'Riix halkan si aad u baadhid guryaha',
            TENANTS_RIGHTS: 'DADKA DEGAN RIGHTS',
            LEGAL_ASSISTANCE: '(gargaar sharci)',

            <!--Connect Modal Text-->
            QUESTIONS: "Su'aalo?",
            CLICK_CIRCLE: '(riix goobaabin ee buluugga ah uu caawino kugu weydiisto)'

        }).translations('hy', {
            REFUGEE_RESOURCES: 'Refugee Resources',

            HEALTH: 'առողջություն',
            LEARN_ENGLISH: 'Սովորեք անգլերեն',
            HOUSING: 'ծածկոց',
            CONNECT: 'միացնել',
            JOBS: 'Աշխատանք',

            EXIT: 'Ելք',
            <!--Language Modal Text-->
            ONLINE_ENGLISH_PRACTICE: 'ENGLISH ՊՐԱԿՏԻԿԱՆ',
            CALL: 'կոչ',
            TO_SIGN_UP: 'գրանցվել է ESL դասի մոտ ձեզ',
            HERE_IS_A_VIDEO: 'Ահա մի տեսահոլովակ է ստանալ Դուք սկսել',

            <!--Health Modal Text-->
            FIND_A_DOCTOR: 'Գտնել բժիշկ',
            EMERGENCY_NUMBERS: 'Արտակարգ հեռախոսահամարներ',

            <!--Housing Modal Text-->
            SEARCH_FOR_HOUSING: 'Սեղմեք որոնել բնակարանի',
            TENANTS_RIGHTS: 'վարձակալները ԻՐԱՎՈՒՆՔՆԵՐԸ',
            LEGAL_ASSISTANCE: '(իրավաբանական օգնություն)',

            <!--Connect Modal Text-->
            QUESTIONS: 'Հարցեր?',
            CLICK_CIRCLE: 'սեղմեք կապույտ շրջանակը',

            BUTTON_TEXT_EN: '',
            BUTTON_TEXT_DE: ''
        }).translations('fr', {
            REFUGEE_RESOURCES: 'Refugee Resources',

            HEALTH: 'Santé',
            LEARN_ENGLISH: "L'anglais",
            HOUSING: 'Logement',
            CONNECT: 'Aide',
            JOBS: 'Travail',
            CHAT: 'Discutter',

            EXIT: 'Sortie',
            <!--Language Modal Text-->
            ONLINE_ENGLISH_PRACTICE: "Apprendre l'anglais en ligne",
            CALL: 'Appeler le',
            TO_SIGN_UP: " pour s'enregister",
            HERE_IS_A_VIDEO: 'Une vidéo pour démarrer',

            <!--Health Modal Text-->
            FIND_A_DOCTOR: 'Chercher un médecin',
            EMERGENCY_NUMBERS: "Numéros d'urgence",

            <!--Housing Modal Text-->
            SEARCH_FOR_HOUSING: 'Chercher un hébergement',
            TENANTS_RIGHTS: 'Droits des locataires',
            LEGAL_ASSISTANCE: '(assistance légale)',

            <!--Connect Modal Text-->
            QUESTIONS: 'Questions',
            CLICK_CIRCLE: 'Cliquez le button bleu',

            BUTTON_TEXT_EN: '',
            BUTTON_TEXT_DE: ''
        });
    $translateProvider.preferredLanguage('en');
    $translateProvider.useStaticFilesLoader({
        prefix: '/languages/',
        suffix: '.json'
    });
});


//.translations('ar', {
//    REFUGEE_RESOURCES: 'Refugee Resources',
//
//    HEALTH: '',
//    LEARN_ENGLISH: '',
//    HOUSING: '',
//    CONNECT: '',
//
//    EXIT: '',
//   <!--Language Modal Text-->
//    ONLINE_ENGLISH_PRACTICE: '',
//    CALL: '',
//    TO_SIGN_UP: '',
//    HERE_IS_A_VIDEO: '',
//
//    <!--Health Modal Text-->
//    FIND_A_DOCTOR: '',
//    EMERGENCY_NUMBERS: '',
//
//    <!--Housing Modal Text-->
//    SEARCH_FOR_HOUSING: '',
//    TENANTS_RIGHTS: '',
//    LEGAL_ASSISTANCE: '',
//
//    <!--Connect Modal Text-->
//    QUESTIONS: '',
//    CLICK_CIRCLE: '',
//
//    BUTTON_TEXT_EN: '',
//    BUTTON_TEXT_DE: ''
//  });