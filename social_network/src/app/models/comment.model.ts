export interface Author {
  _id: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Post {
  _id: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Comment {
  _id: string;
  text: string;
  author: Author;
  post: Post;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
