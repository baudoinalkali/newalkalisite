const ClientHeroContent = {
    amelia: [
        {
            name: "Amelia",
            about: "Carro is the world’s largest collaborative commerce network, with more than 25,000 brands and 6.5 million influencers. The platform seamlessly enables brands to work with influencers and each other so they can sell more, together.",
            slug: "amelia",
            heroImage: "/images/carro-header-image.png",
            heroImageWidth: "725",
            heroImageHeight: "500",
            backgroundOverlay: "true",
            sub: "Home Service",
            title: "Homewatch Amelia Island",
            service: ["Web Development", "Branding"],
            serviceSlug: ["/services/web-development/wordpress-website-development", "/services/design/branding"],
            backgroundImg: "/images/amelia-hero.jpg"
        }
    ],
    carro: [
        {
            backgroundImg: "",
            name: "Carro",
            about: "Carro is the world’s largest collaborative commerce network, with more than 25,000 brands and 6.5 million influencers. The platform seamlessly enables brands to work with influencers and each other so they can sell more, together.",
            slug: "carro",
            heroImage: "/images/carro-header-image.png",
            backgroundOverlay: "",
            sub: "Technology",
            title: "Carro",
            service: ["Web Development"],
            serviceSlug: ["/services/web-development/wordpress-website-development"]
        }
    ],
    chattr: [
        {
            
            name: "Chattr",
            about: "Chattr’s AI-powered digital assistant manages the retail hiring experience from engagement to offer.",
            slug: "chattr",
            heroImage: "/images/clients/chattr/chattr-hero-image.svg",
            backgroundOverlay: "bg-clients-chattr",
            sub: "Technology",
            title: "Chattr",
            service: ["Custom Web Development", "Web Design"],
            serviceSlug: ["/services/web-development/wordpress-website-development"]
        }
    ],
    ben: [
        {
            
            name: "Blockchain Education Network",
            about: "The Blockchain Education Network (BEN) is an international nonprofit organization dedicated to forming a robust network of student organizations for blockchain education, innovation, and development. . BEN was designed to help nascent, burgeoning, and not-yet existing college organizations build a presence on their respective campuses, receive administrative recognition and funding, and to help students connect with similar college groups. We provide educational and professional resources, contacts, speakers, and guidance in order to usher in a new era of electronic finance and innovation.",
            slug: "ben",
            heroImage: "/images/clients/ben/ben-hero-image.png",
            backgroundOverlay: "bg-clients-chattr",
            sub: "Non-profit",
            title: "Blockchain Education Network",
            service: ["Custom Web Development"],
            serviceSlug: ["/services/web-development/wordpress-website-development"]
        }
    ],
    bobtail: [
        {
            
            name: "Bobtail",
            about: "Bobtail empowers carriers with powerful financial tools that help them grow their business and serve them with honesty, transparency, and fairness.",
            slug: "ben",
            backgroundOverlay: "true",
            heroImage: "/images/clients/ben/ben-hero-image.png",
            backgroundImg: "/images/clients/bobtail/hero-background.jpg",
            sub: "Technology",
            title: "Bobtail",
            service: ["WordPress Web Development"],
            serviceSlug: ["/services/web-development/wordpress-website-development"]
        }
    ],
}

const CarroHeroContent = ClientHeroContent.carro
const AmeliaHeroContent = ClientHeroContent.amelia
const ChattrHeroContent = ClientHeroContent.chattr
const BenHeroContent = ClientHeroContent.ben
const BobtailContent = ClientHeroContent.bobtail

export { CarroHeroContent, AmeliaHeroContent, ChattrHeroContent, BenHeroContent, BobtailContent }
export default ClientHeroContent;