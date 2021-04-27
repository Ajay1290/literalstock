import { Book } from ".";

export const comment = {
  id: 1,
  content: "This is my comment on this",
  user_id: 1,
  book_id: 1
}

export const categories = {
  id: 1,
  name: "Programming"
}

export const publishers = {
  id: 1,
  name: "Surchar"
}

export const tag = {
  id: 1,
  name: "Python",
  color: "info",
  categories: categories
}



export const reports = {
  id: 1,
  problem: "This is the Problem.",
  describe: "Due to this is the problem.",
  book_id: 1,
  user_id: 1
}

export const bookCoverImage = {
  id: 1,
  path: "data:image/jpeg;base64,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",
  book_id: 1
}

export const bookFile = {
  id: 1,
  path: "https://cfm.ehu.es/ricardo/docs/python/Learning_Python.pdf",
  book_id: 1
}

export const profileImage = {
  id: 1,
  path: "data:image/jpeg;base64,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",
  user_id: 1
}

export const authorProfileImage = {
  id: 1,
  path: "data:image/jpeg;base64,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",
  author_id: 1
}

export const user = {
  id: 1,
  username: "Ajay"
}

export const authors = {
  id: 1,
  name: "Ajay Patil",
  content: "The Samaj Darshnik, Nation Builder, NirmanKarta, Industrialist ",
  image: authorProfileImage,
  categories: categories,
  pg_views: 200
}

export const book: Book = {
  id          : 1,
  title       : "Exercitation est ullamco nulla duis mollit excepteur irure do adipisicing.",
  description : "Ullamco minim reprehenderit quis dolore culpa do non tempor. Anim duis nisi consectetur anim cillum sit do magna labore. Nisi quis ea qui et id. Culpa voluptate mollit amet dolor qui id ullamco aute dolore ea est dolore deserunt. Qui adipisicing Lorem tempor anim dolor qui sunt aute.",
  upload_date : new Date(2020,2,2),
  size        : "20.03",
  pages       : 100,
  isbn13      : "012-34567890123",
  isbn10      : "01234567890",
  language    : "English",
  downloads   : 12,
  pg_views    : 10001231,
  post_status : "Live",
  user        : user,
  image       : bookCoverImage,
  file        : bookFile,
  tags        : [tag],
  authors     : [authors],
  comments    : [comment],
  reports     : [reports],
  categories  : [categories],
  publishers  : [publishers]
};
