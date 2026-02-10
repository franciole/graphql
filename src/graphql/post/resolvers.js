const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(`/${id}`);
  const post = await response.json();
  if(typeof post.id === 'undefined') {
    return {
      statusCode: 404,
      message: `Post id ${id} not found`
    };
  }
  return post;
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
  PostResult: {
    __resolveType(obj) {
      if (obj.statusCode !== undefined) {
        return 'PostNotFoundError';
      }
      if (obj.id !== undefined) {
        return 'Post';
      }
      return null;
    },
  }
}
