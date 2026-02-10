const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts(`/${id}`);
  const post = await response.json();
  if(Math.random() > 0.5) {
    return {
      statusCode: 500,
      message: `Post timeout error for post id ${id}`,
      timeout: 5000,
    };
  }
  if(typeof post.id === 'undefined') {
    return {
      statusCode: 404,
      message: `Post id ${id} not found`,
      postId: id
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
      if (typeof obj.postId !== 'undefined') {
        return 'PostNotFoundError';
      }
      if (typeof obj.timeout !== 'undefined') {
        return 'PostTimeoutError';
      }
      if (obj.id !== undefined) {
        return 'Post';
      }
      return null;
    },
  },
  PostError:{
     __resolveType(obj) {
      if (typeof obj.postId !== 'undefined') {
        return 'PostNotFoundError';
      }
      if (typeof obj.timeout !== 'undefined') {
        return 'PostTimeoutError';
      }
      return null;
    },
  }
}
