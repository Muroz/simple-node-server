export type Indexable<T extends {}> = T & {
  [key: string]: any;
}
