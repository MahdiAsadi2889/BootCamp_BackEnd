const EventEmitter = require("events");

class SubscriptionSystem {
  constructor() {
    this.subscribers = [];
    this.emitter = new EventEmitter();
  }
  getSubscribers() {
    return this.subscribers;
  }
  subscribe(user) {
    if (!this.subscribers.includes(user)) {
      this.subscribers.push(user);
      this.emitter.emit("subscribe", user);
    } else {
      console.log("This user is already a member.");
    }
  }
  unsubscribe(userName) {
    if (this.subscribers.some((u) => u.userName === userName)) {
      const index = this.subscribers.findIndex((u) => u.userName === userName);
      if (index !== -1) {
        const unsubscribed = this.subscribers.splice(index, 1)[0];
        this.emitter.emit("unsubscribe", unsubscribed);
      }
    } else {
      console.log("This user is not subscribed.");
    }
  }

  publish(message) {
    this.subscribers.forEach((user) => {
      console.log(`Message to ${user.userName}: ${message}`);
    });
  }
}

module.exports = SubscriptionSystem;
