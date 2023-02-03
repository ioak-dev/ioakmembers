export interface IArticle {
    id?: string;
    title: string;
    thumbnail: any;
    tags: string[];
    description: string;
    author: IAuthor;
}

export interface IAuthor {
    img: any;
    name: string,
    position: string;
}
