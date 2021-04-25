export interface Comments {
  id: number;
  content: string;
  user_id: number;
  book_id: number;
}

export interface Categories {
  id: number;
  name: string;
}

export interface Publishers {
  id: number;
  name: string;
}

export interface Tags{
   id: number;
   name: string;
   color: string;
   categories: Categories
}


export interface Authors {
    id: number;
    name: string;
    content: string;
    image: AuthorProfileImage;
    categories: Categories;
    pg_views: number;
}


export interface Reports {
    id: number;
    problem: string;
    describe: string;
    book_id: number;
    user_id: number;
}

export interface BookCoverImage {
    id: number;
    path: string;
    book_id: number;
}

export interface BookFile {
  id: number;
  path: string;
  book_id: number;
}

export interface ProfileImage {
  id: number;
  path: string;
  user_id: number;
}

export interface AuthorProfileImage {
  id: number;
  path: string;
  author_id: number;
}

export interface User {
  id: number;
  username: string;
}

export interface Book {
  id          : number;
  title       : string;
  description : string;
  upload_date : Date,
  size        : string;
  pages       : number;
  isbn13      : string;
  isbn10      : string;
  language    : string;
  downloads   : number;
  pg_views    : number;
  post_status : string;
  user        : User;
  image       : BookCoverImage;
  file        : BookFile;
  tags        : Array<Tags>;
  authors     : Array<Authors>;
  comments    : Array<Comments>;
  reports     : Array<Reports>;
  categories  : Array<Categories>;
  publishers  : Array<Publishers>;
}