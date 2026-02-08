const post = {
  id: '1',
  title: 'First Post',
};

const posts = [
  {
    id: '1',
    title: 'First Post',
  },
  {
    id: '2',
    title: 'Second Post',
  },
  {
    id: '3',
    title: 'Third Post',
  },
];

export const postResolvers = {
  Query: {
    post: () => post,
    posts: () => posts,
  },
};
