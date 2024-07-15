const fetchUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: userId, name: 'John Doe' };
      resolve(user);
      reject('There is some error');
    }, 2000);
  });
};

const fetchPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { id: 1, userId, title: 'Post 1' },
        { id: 2, userId, title: 'Post 2' },
      ];
      resolve(posts);
      reject('There is some error')
    }, 2000);
  });
};

const fetchComments = (postId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const comments = [
        { id: 1, postId, content: 'Great post!' },
        { id: 2, postId, content: 'Thanks for sharing!' },
      ];
      resolve(comments);
      reject('There is some error')
    }, 2000);
  });
};

Promise.all([fetchUser(1), fetchPosts(1), fetchComments(1)])
  .then((results) => {
    const [user, posts, comments] = results;
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Comments:', comments);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
