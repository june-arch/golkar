export type CardIdiom = {
    title : string;
    description : string;
    href : string;
    image : string;
};

export type NewsItem = {
    title : string;
    description : string;
    author : string;
    createdAt : string;
    image: string;
    tags: string[];
    href: string;
}

export type VideoItem = {
    path : string;
    tag : string;
}

export type NavItem = {
    'nav-items' : string[];
    description : string;
    'image-kita-satu': string;
}
