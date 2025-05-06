let user = {
  firstName: "Mohammad Mahdi",
  lastName: "Asadi",
  Age: 21,
  fields: "Software",
};
const address = {
  city: "Kerman",
  street: "Hakim",
  alley: 16,
};

Object.assign(user, { address: { ...address } });
console.log(user);
