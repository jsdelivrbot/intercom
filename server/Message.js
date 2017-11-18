class Message {
  constructor(userId, text) {
    this.userId = userId;
    this.text = text;
    this.timestamp = Date.now();
  }
}

module.exports = Message;