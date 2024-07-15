// example#1
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation (e.g., a network request)
  const success = true;

  if (success) {
    resolve('Operation was successful!');
  } else {
    reject('Operation failed!');
  }
});

myPromise.then((message) => {
  console.log(message); // "Operation was successful!"
}).catch((error) => {
  console.error(error); // "Operation failed!"
});

// example#2
const fetchData = () => {
  return new Promise((resolve, reject) => {
    const isAuthorized = false;
    setTimeout(() => {
      const data = { id: 1, name: 'John Doe' };
      if (isAuthorized) {
        resolve(data);

      } else {
        reject('You are not allowd to access this data')
      }
    }, 2000);
  });
};

fetchData()
.then((data) => {
  console.log('Data fetched:', data); // "Data fetched: { id: 1, name: 'John Doe' }"
})
.catch((error) => {
  console.error('Error:', error);
});
