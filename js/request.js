export class Request {
  constructor() {
    this.baseUrl = "http://localhost:3000";
  }

  async sendRequest(path, method = "GET", data = null) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: method,
      body: data ? JSON.stringify(data) : null,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    return response.json();
  }

  get(path) {
    return this.sendRequest(path);
  }

  post(path, data) {
    return this.sendRequest(path, "POST", data);
  }

  put(path, data) {
    return this.sendRequest(path, "PUT", data);
  }

  delete(path) {
    return this.sendRequest(path, "DELETE");
  }
}
