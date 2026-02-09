const post = async (_, { id }, { getPosts }) => {
  const post = await getPosts(`/${id}`);
  return post.json();
};

const posts = async (_, { input }, { getPosts }) => {
  const apiFiltersInput = new URLSearchParams(input);
  const posts = await getPosts('/?' + apiFiltersInput);
  return posts.json();
};

export const postResolvers = {
  Query: {
    post,
    posts,
  },
  // Post: {
  //   unixTimestamp: ({ createdAt }) => {
  //     const timestamp = new Date(createdAt).getTime() / 1000;
  //     return Math.floor(timestamp);
  //   },
  // },
}
