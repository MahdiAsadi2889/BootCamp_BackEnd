let state = "fail ";
const getUserList = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (state == "success") {
      resolve([
        {
          id: 1,
          name: "user1",
        },
        {
          id: 2,
          name: "user2",
        },
      ]);
    }
    reject("not found");
  }, 1000);
});

getUserList
  .then((data) => console.log(data))
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finished");
  });
