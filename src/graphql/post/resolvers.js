const posts = async (_, __, { getPosts }) => {
  const posts = await getPosts();
  return posts.json();
};

const post = async (_, { id }, { getPosts }) => {
  const post = await getPosts(`/${id}`);
  return post.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
};
