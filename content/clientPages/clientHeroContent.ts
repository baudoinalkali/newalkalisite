const ClientHeroContent = {
    amelia: [
        {
            name: "Amelia",
            about: "Carro is the world’s largest collaborative commerce network, with more than 25,000 brands and 6.5 million influencers. The platform seamlessly enables brands to work with influencers and each other so they can sell more, together.",
            slug: "amelia",
            heroImage: "/images/carro-header-image.png",
            heroImageWidth:"725",
            heroImageHeight:"500",
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
    ]
}

const CarroHeroContent = ClientHeroContent.carro
const AmeliaHeroContent = ClientHeroContent.amelia

export { CarroHeroContent, AmeliaHeroContent }
export default ClientHeroContent;