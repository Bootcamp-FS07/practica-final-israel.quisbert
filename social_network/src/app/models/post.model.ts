export interface Author {
    _id: string;
    username: string;
    password: string;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Post {
    _id: string;
    text: string;
    author: Author;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }