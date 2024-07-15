const fetchUser = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: userId, name: 'John Doe' };
      resolve(user);
      reject('There is some error')
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

fetchUser(1)
  .then((user) => {
    console.log('User fetched:', user);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log('Posts fetched:', posts);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
