const SubscriptionSystem = require("./SubscriptionSystem");
const mySubs = new SubscriptionSystem();

mySubs.emitter.on("subscribe", (subscribe) => {
  console.log("You Subscribed", subscribe);
});

mySubs.emitter.on("unsubscribe", (unsubscribe) => {
  console.log("You Unsubscribed", unsubscribe);
});

mySubs.subscribe({ userName: "mm_asadi", pass: "1234" });
mySubs.subscribe({ userName: "mr_asadi", pass: "2468" });
mySubs.subscribe({ userName: "ms_asadi", pass: "1357" });
mySubs.subscribe({ userName: "mh_asadi", pass: "1396" });
mySubs.subscribe({ userName: "mj_asadi", pass: "1351" });
console.log("----------------------");

console.log("This Subscribes In My List", mySubs.getSubscribers());
console.log("----------------------");

mySubs.publish("Hello");
console.log("----------------------");

mySubs.unsubscribe("mh_asadi");
console.log("----------------------");
console.log("This Subscribes In My List", mySubs.getSubscribers());