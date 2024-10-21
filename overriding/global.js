app.response.sendStatus = function (statusCode, type, message) {
    // code is intentionally kept simple for demonstration purpose
    return this.contentType(type)
      .status(statusCode)
      .send(message)
  }