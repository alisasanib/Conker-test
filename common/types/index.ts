import { number } from 'mathjs';

export interface AuthorProp {
  name: string;
  url: string;
}

export interface RecipeProp {
  id: number;
  title: string;
  description: string;
  ingredients: string[];
  directions: string[];
  servings: number;
  tags: string[];
  author: AuthorProp;
  source_url: string;
  prep_time_min?: number | undefined;
  cook_time_min?: number | undefined;
}
