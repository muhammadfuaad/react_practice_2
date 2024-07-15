// Example using try/catch with async/await
async function fetchDataTryCatch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Change this to false to test the catch block
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data.");
      }
    }, 1000);
  });
}

async function handleDataWithTryCatch() {
  try {
    const data = await fetchDataTryCatch();
    console.log(data); // Output: Data fetched successfully!
  } catch (error) {
    console.error(error); // Output: Error fetching data.
  }
}

handleDataWithTryCatch();
