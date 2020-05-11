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

export interface BackendOps {
    title: string;
    content: string[];
    logos: Logo[];
}

export interface ClientTech {
    title: string;
    content: string[];
    logos: Logo[];
}

export interface Pages {
    about: About;
    contact: Contact;
    backendOps: BackendOps;
    clientTech: ClientTech;
}

export interface DB {
    pages: Pages;
}
