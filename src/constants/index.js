const navLinks = [
    { label: "About" },
    { label: "Services" },
    { label: "Advantage" },
    { label: "Operations" },
    { label: "Contact" },
];

const noChangeParts = [
    "Object_84",
    "Object_37",
    "Object_34",
    "Object_12",
    "Object_80",
    "Object_35",
    "Object_36",
    "Object_13",
    "Object_125",
    "Object_76",
    "Object_33",
    "Object_42",
    "Object_58",
    "Object_52",
    "Object_21",
    "Object_10",
];

const performanceImages = [
    { id: "p1", src: "/performance1.png" },
    { id: "p2", src: "/performance2.png" },
    { id: "p3", src: "/performance3.png" },
    { id: "p4", src: "/performance4.png" },
    { id: "p5", src: "/performance5.png" },
    { id: "p6", src: "/performance6.png" },
    { id: "p7", src: "/performance7.png" },
];

const performanceImgPositions = [
    { id: "p1", left: 5, bottom: 65 },
    { id: "p2", right: 10, bottom: 60 },
    { id: "p3", right: -5, bottom: 45 },
    { id: "p4", right: -10, bottom: 0 },
    { id: "p5", left: 20, bottom: 50 },
    { id: "p6", left: 2, bottom: 30 },
    { id: "p7", left: -5, bottom: 0 },
];

const features = [
    {
        id: 1,
        icon: "/feature-icon1.svg",
        highlight: "AI Dispatch.",
        text: "Intelligent load matching and route optimization that keeps your wheels turning and your revenue climbing.",
        styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
    },
    {
        id: 2,
        icon: "/feature-icon2.svg",
        highlight: "Cloud Operations.",
        text: "Every document, every load, every mile — managed from the cloud so your business runs from anywhere.",
        styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
    },
    {
        id: 3,
        icon: "/feature-icon3.svg",
        highlight: "Cyber Secured.",
        text: "Your data, your authority, your assets — protected by enterprise-grade cybersecurity built into every layer.",
        styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
    },
    {
        id: 4,
        icon: "/feature-icon4.svg",
        highlight: "Real-Time Visibility.",
        text: "Live tracking, instant updates, and full transparency for shippers and partners from pickup to delivery.",
        styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
    },
    {
        id: 5,
        icon: "/feature-icon5.svg",
        highlight: "Owner-Operated.",
        text: "No middlemen. No platform dependency. Direct authority, direct relationships, maximum margin.",
        styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
    },
];

const featureSequence = [
    { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
    { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
    { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
    { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
    { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const footerLinks = [
    { label: "Privacy Policy", link: "#" },
    { label: "Terms of Use", link: "#" },
    { label: "Carrier Agreement", link: "#" },
    { label: "Legal", link: "#" },
    { label: "Site Map", link: "#" },
];

export {
    features,
    featureSequence,
    footerLinks,
    navLinks,
    noChangeParts,
    performanceImages,
    performanceImgPositions,
};
