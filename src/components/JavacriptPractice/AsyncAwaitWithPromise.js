const fetchUser = async (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: userId, name: 'John Doe' };
      resolve(user);
      reject('there is some error')
    }, 2000);
  });
};

const fetchPosts = async (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { id: 1, userId, title: 'Post 1' },
        { id: 2, userId, title: 'Post 2' },
      ];
      resolve(posts);
      reject('there is some error')
    }, 2000);
  });
};

const fetchComments = async (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comments = [
        { id: 1, postId, content: 'Great post!' },
        { id: 2, postId, content: 'Thanks for sharing!' },
      ];
      resolve(comments);
      reject('there is some error')
    }, 2000);
  });
};

const fetchData = async () => {
  try {
    const user = await fetchUser(1);
    console.log('User fetched:', user);

    const posts = await fetchPosts(user.id);
    console.log('Posts fetched:', posts);

    const comments = await fetchComments(posts[0].id);
    console.log('Comments fetched:', comments);
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchData();