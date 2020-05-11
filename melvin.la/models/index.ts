export interface About {
    title: string;
    content: string;
    resumeUrl: string;
    pictureUrl: string;
}

export interface Contact {
    email: string;
    linkedInHandle: string;
    githubHandle: string;
}

export interface Logo {
    img: string;
    name: string;
    url: string;
}

export interface TechInfo {
    title: string;
    content: string[];
    logos: Logo[];
}

export interface Pages {
    about: About;
    contact: Contact;
    backendOps: TechInfo;
    clientTech: TechInfo;
}

export interface DB {
    pages: Pages;
}
