/**
 * Project data for the Projects page.
 * Keep this file as the single source of truth for all project records.
 * Each project references its image via a path key resolved in ProjectSection.jsx.
 */
const projectdata = [
    {
        id: 1,
        title: "Bank Coaching Platform",
        category: "EdTech",
        image: "/assets/project/bankcoaching.png",
        clientOverview:
            "A competitive exam coaching institute focused on banking and government job preparation across India.",
        problem:
            "The client needed a scalable online platform for delivering video lectures, mock tests, and student progress tracking.",
        solution:
            "We built a full-stack LMS with course management, adaptive mock tests, real-time leaderboards, and mobile-first design.",
        features: [
            "Video lecture streaming with offline support",
            "Adaptive mock test engine with analytics",
            "Student dashboard and progress tracking",
            "Admin panel for content and batch management",
        ],
        results:
            "Enrolled 3,000+ students within 2 months of launch; 40% improvement in test completion rates.",
        feedback: "The platform exceeded our expectations in terms of performance and student engagement.",
    },
    {
        id: 2,
        title: "Sports OTT Platform",
        category: "Media & Entertainment",
        image: "/assets/project/sportsott.png",
        clientOverview:
            "A sports media company wanting to build a dedicated OTT streaming service for regional sports events.",
        problem:
            "Existing platforms couldn't handle live streaming, regional language support, and subscription billing together.",
        solution:
            "We delivered a white-label OTT platform with live and on-demand streaming, multi-language UI, and integrated payment.",
        features: [
            "Live streaming with low-latency architecture",
            "On-demand video library with categories",
            "Multi-language UI (English, Tamil, Hindi)",
            "Subscription tiers and Razorpay integration",
        ],
        results: "Successfully streamed 15+ live events; subscription conversion rate of 18%.",
        feedback: "Not provided",
    },
    {
        id: 3,
        title: "Book My Services",
        category: "Home Services",
        image: "/assets/project/bookservice.png",
        clientOverview:
            "A home services marketplace connecting customers with verified local service providers.",
        problem:
            "The client needed a two-sided marketplace with real-time booking, provider verification, and review management.",
        solution:
            "We built a full marketplace with customer app, provider portal, real-time slot booking, and admin dashboard.",
        features: [
            "Real-time availability and slot booking",
            "Provider onboarding and KYC verification",
            "Review and rating system",
            "Commission-based billing dashboard",
        ],
        results: "100+ service providers onboarded in first month; 4.6/5 average customer rating.",
        feedback: "The booking flow is seamless and our providers love the portal.",
    },
    {
        id: 4,
        title: "City Wash",
        category: "On-Demand Services",
        image: "/assets/project/citywash.png",
        clientOverview:
            "An on-demand laundry and dry-cleaning pickup/delivery service operating in Tier-2 cities.",
        problem:
            "Manual order tracking and WhatsApp-based communication was causing errors and customer dissatisfaction.",
        solution:
            "We developed a customer app, driver app, and admin panel with live order tracking and automated notifications.",
        features: [
            "Customer app with order placement and live tracking",
            "Driver app with route optimization",
            "Automated SMS and WhatsApp notifications",
            "Admin order management and analytics",
        ],
        results: "Order errors reduced by 80%; delivery SLA improved from 48hrs to 24hrs.",
        feedback: "Not provided",
    },
    {
        id: 5,
        title: "Milo Cabs",
        category: "Transport & Mobility",
        image: "/assets/project/milocabs.png",
        clientOverview:
            "A regional cab aggregator offering intercity and local rides in South India.",
        problem:
            "The client was losing business to larger players due to lack of a professional app and driver management system.",
        solution:
            "We built a Ola/Uber-style platform with customer and driver apps, dynamic pricing, and fleet management.",
        features: [
            "Real-time driver matching and GPS tracking",
            "Dynamic surge pricing engine",
            "In-app payments and trip history",
            "Fleet management and driver incentive dashboard",
        ],
        results: "Onboarded 200+ drivers; 35% increase in repeat bookings within 3 months.",
        feedback: "Finally we have a platform that matches the big players — our customers love it.",
    },
    {
        id: 6,
        title: "MyBlend Nutrition",
        category: "Health & Wellness",
        image: "/assets/project/myblend.png",
        clientOverview:
            "A personalized nutrition startup offering custom supplement blends based on health assessments.",
        problem:
            "The client needed a quiz-based product configurator, subscription management, and D2C storefront.",
        solution:
            "We built a personalized e-commerce platform with health quiz, custom product builder, and subscription billing.",
        features: [
            "Multi-step health assessment quiz",
            "Custom supplement formula configurator",
            "Subscription management with pause/cancel",
            "Shopify-integrated storefront",
        ],
        results: "Average order value 2.3x industry benchmark; 65% subscription retention at 3 months.",
        feedback: "The quiz-to-purchase flow is magical. Customers spend 8+ minutes on the site.",
    },
    {
        id: 7,
        title: "Pet Care App",
        category: "Pet Services",
        image: "/assets/project/petcare.png",
        clientOverview:
            "A pet services marketplace offering grooming, vet consultations, boarding, and training.",
        problem:
            "The client wanted to unify multiple pet services into one super-app with verified service providers.",
        solution:
            "We built a pet super-app with service discovery, provider matching, in-app chat, and vet teleconsultation.",
        features: [
            "Multi-category service booking",
            "Verified provider profiles with ratings",
            "In-app video vet consultation",
            "Pet health records and reminders",
        ],
        results: "500+ bookings in the first 6 weeks; 4.8/5 App Store rating.",
        feedback: "Not provided",
    },
    {
        id: 8,
        title: "Servyy AI",
        category: "AI / SaaS",
        image: "/assets/project/servyyai.png",
        clientOverview:
            "A B2B SaaS startup building an AI-powered customer service automation platform.",
        problem:
            "The client needed an AI agent that could handle customer queries across email, chat, and WhatsApp with human escalation.",
        solution:
            "We built an omnichannel AI agent platform with GPT-4 integration, sentiment analysis, and CRM sync.",
        features: [
            "AI agent with GPT-4 and custom fine-tuning",
            "Omnichannel: email, chat, WhatsApp",
            "Sentiment analysis and escalation routing",
            "CRM integration (HubSpot, Zoho)",
        ],
        results: "Reduced customer response time from 4hrs to under 2 minutes; 60% ticket deflection.",
        feedback: "The AI accuracy is incredible. Our support costs dropped by 40% in month one.",
    },
    {
        id: 9,
        title: "Star DMC Tourism",
        category: "Travel & Tourism",
        image: "/assets/project/stardmc-ui.png",
        clientOverview:
            "A Destination Management Company (DMC) offering curated travel packages across the Middle East.",
        problem:
            "The client needed a premium B2B portal for travel agents to browse, customize, and book packages.",
        solution:
            "We designed and built a high-end B2B travel portal with package customization, group bookings, and invoice generation.",
        features: [
            "Dynamic package builder with itinerary editor",
            "B2B agent portal with tiered pricing",
            "Group booking management",
            "Automated quotation and invoice PDF",
        ],
        results: "Onboarded 40+ travel agency partners; 3x increase in online package inquiries.",
        feedback: "The portal is exactly what the industry needed. Our agents book faster than ever.",
    },
    {
        id: 10,
        title: "StayGood",
        category: "Hospitality",
        image: "/assets/project/staygood.png",
        clientOverview:
            "A boutique hotel aggregator curating unique stay experiences across India.",
        problem:
            "The client needed a discovery and booking platform that highlighted the character of boutique properties vs OTA giants.",
        solution:
            "We built an editorial-style booking platform with immersive property pages, direct booking engine, and host dashboard.",
        features: [
            "Immersive property storytelling pages",
            "Direct booking engine with room management",
            "Host property management portal",
            "Guest review and experience highlights",
        ],
        results: "Featured 80+ boutique properties; direct booking rate 45% higher than industry average.",
        feedback: "Not provided",
    },
    {
        id: 11,
        title: "Tvaster Genkalp",
        category: "Healthcare",
        image: "/assets/project/tvaster.png",
        clientOverview:
            "A telemedicine and Ayurvedic healthcare provider offering online consultations and herbal products.",
        problem:
            "The client needed a HIPAA-compliant platform for video consultations, prescription management, and e-pharmacy.",
        solution:
            "We built a telemedicine platform with video consults, digital prescriptions, and an integrated e-pharmacy checkout.",
        features: [
            "HD video consultation with WebRTC",
            "Digital prescription with doctor e-signature",
            "Integrated Ayurvedic e-pharmacy",
            "Patient health records and appointment history",
        ],
        results: "500+ consultations in first 30 days; 92% patient satisfaction score.",
        feedback: "Our patients love the ease of the platform. The prescription flow is seamless.",
    },
    {
        id: 12,
        title: "Spectrum Homeopathy",
        category: "Healthcare",
        image: "/assets/project/spectrum-homeopathy.png",
        clientOverview:
            "A homeopathy clinic chain offering in-person and online consultations across South India.",
        problem:
            "The clinic needed a website that conveyed trust, enabled appointment booking, and supported their e-commerce for remedies.",
        solution:
            "We built a professional website with appointment booking, treatment pages, and WooCommerce-integrated remedy shop.",
        features: [
            "Treatment and condition information hub",
            "Online appointment booking system",
            "Integrated remedy e-shop",
            "Doctor profiles and testimonials",
        ],
        results: "Online appointment bookings up 200% in 60 days post-launch.",
        feedback: "Not provided",
    },
    {
        id: 13,
        title: "News & Media Portal",
        category: "Media",
        image: "/assets/project/news.png",
        clientOverview:
            "A regional digital news publication covering politics, business, and lifestyle in Tamil Nadu.",
        problem:
            "The client needed a fast, SEO-optimized news portal that could handle breaking news traffic spikes.",
        solution:
            "We built a headless CMS-powered news portal with server-side rendering, category management, and ad integration.",
        features: [
            "Headless CMS with SSR for SEO",
            "Real-time breaking news ticker",
            "Category and tag-based content organization",
            "Google AdSense and programmatic ad integration",
        ],
        results: "Achieved 50,000 monthly visitors within 90 days; Core Web Vitals score of 95.",
        feedback: "Traffic growth blew our projections. The site is lightning fast.",
    },
    {
        id: 14,
        title: "Arvesta Finance",
        category: "FinTech",
        image: "/assets/project/arvesta-finance.png",
        clientOverview:
            "A wealth management startup offering mutual fund investments, SIPs, and financial planning tools.",
        problem:
            "The client needed a SEBI-compliant investment platform with KYC, portfolio tracking, and advisor tools.",
        solution:
            "We built a full-stack FinTech platform with DigiLocker KYC, BSE StarMF integration, and advisor CRM.",
        features: [
            "DigiLocker-powered KYC onboarding",
            "BSE StarMF mutual fund transaction engine",
            "Portfolio dashboard with XIRR tracking",
            "Advisor CRM with client portfolio view",
        ],
        results: "₹2Cr+ AUM onboarded in first quarter; zero compliance incidents.",
        feedback: "The platform is robust and our advisors are more productive than ever.",
    },
];

export default projectdata;