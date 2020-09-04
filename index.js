const { version } = require("./package.json");
const http = require("http");
const querystring = require("querystring");

/**
 * Client is the base class for interacting with the API.
 * @param {Object} [options] - Options for the client.
 * @param {Number} [options.port=3030] The port to the server.
 * @param {String} [options.host=localhost] The host of the server.
 * @param {?String} [options.password] Password for authentication if any.
 */
class Client {
  constructor({ port = 3030, password, host = "localhost" } = {}) {

    /**
     * The port of the server.
     * @type {Number}
     */
    this.port = port;

    /**
     * The host of the server.
     * @type {String}
     */
    this.host = host;

    /**
     * The authentication password if any.
     * @type {?String}
     */
    this.password = password;
  }

  /**
   * Performs a request to an endpoint.
   * @param {String} endpoint - The endpoint to request.
   * @param {Object} [query={}] - Request query string.
   * @returns {Promise<Buffer>}
   */
  _get(endpoint, query = {}) {
    return new Promise((resolve, reject) => {
      const options = {};
      if(this.password) options.headers = { Authorization: this.password };

      const req = http.get(`http://${this.host}:${this.port}${endpoint}?${querystring.stringify(query)}`, options);

      req
        .once("response", (res) => {
          const body = [];
          return res
            .on("data", (chunk) => body.push(chunk))
            .once("error", (err) => reject(err))
            .once("end", () => {
              // If there is a JSON response then show the error message.
              if(res.statusCode !== 200 && res.getHeader("Content-Type").includes("application/json"))
                return reject(new Error(JSON.parse(Buffer.concat(body)).message));
              else if(res.statusCode !== 200) // Otherwise just reject with the status code.
                return reject(new Error(`${res.statusCode}: ${res.statusMessage}`));

              return resolve(Buffer.concat(body))
            }); 
        })
        .once("error", (err) => reject(err))
        .once("abort", () => reject(new Error("Request Aborted.")))

      return req.end();
    });
  }

  /**
   * Ping the server.
   * @returns {Promise<Object>}
   */
  ping() {
    return this._get("/ping")
      .then(JSON.parse);
  }

  /**
   * Get server statistics.
   * @param {Boolean} [stats=true] - Wether to request memory statistics.
   * @returns {Promise<Object>}
   */
  stats(stats = true) {
    return this._get("/stats", { noStats: !stats })
      .then(JSON.parse);
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  religion(avatar) {
    return this._get("/religion", { avatar });
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  beautiful(avatar) {
    return this._get("/beautiful", { avatar });
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  fear(avatar) {
    return this._get("/fear", { avatar });
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  sacred(avatar) {
    return this._get("/sacred", { avatar });
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  painting(avatar) {
    return this._get("/painting", { avatar });
  }

  /**
   * @param {String} color - Color Hex like '#FFFFFF' (# optional) or a name like 'blue'
   * @returns {Promise<Buffer>}
   */
  color(color) {
    return this._get("/color", { color });
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  delete(avatar) {
    return this._get("/delete", { avatar });
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer}
   */
  garbage(avatar) {
    return this._get("/garbage", { avatar });
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  tom(avatar) {
    return this._get("/tom", { avatar });
  }

  /**
   * @param {String} avatar
   * @param {String} target
   * @returns {Promise<Buffer>}
   */
  bed(avatar, target) {
    return this._get("/bed", { avatar, target });
  }

  /**
   * @param {String} avatar
   * @param {String} target
   * @returns {Promise<Buffer>}
   */
  crush(avatar, target) {
    return this._get("/crush", { avatar, target });
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  patrick(avatar) {
    return this._get("/patrick", { avatar });
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  respect(avatar) {
    return this._get("/respect", { avatar });
  }

  /**
   * @param {String} text
   * @returns {Promise<Buffer>}
   */
  dipshit(text) {
    return this._get("/dipshit", { text });
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  picture(avatar) {
    return this._get("/picture", { avatar });
  }

  /**
   * @param {String} text
   * @returns {Promise<Buffer>}
   */
  tweet(text) {
    return this._get("/tweet", { text })
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  truth(avatar) {
    return this._get("/truth", { avatar });
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  bobross(avatar) {
    return this._get("/bobross", { avatar });
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  mask(avatar) {
    return this._get("/mask", { avatar });
  }

  /**
   * @param {String} avatar
   * @param {String} text
   * @returns {Promise<Buffer>}
   */
  father(avatar, text) {
    return this._get("/father", { avatar, text });
  }

  /**
   * @param {String} avatar
   * @param {String} text
   * @returns {Promise<Buffer>}
   */
  achievement(avatar, text) {
    return this._get("/achievement", { avatar, text });
  }

  /**
   * Returns dominant color of an image.
   * @param {String} avatar
   * @returns {Object}
   */
  dominantColor(avatar) {
    return this._get("/dominantColor", { avatar })
      .then(JSON.parse);
  }

  /**
   * @param {String} avatar
   * @returns {Promise<Buffer>}
   */
  kaguya(avatar) {
    return this._get("/kaguya", { avatar });
  }
}

module.exports = { Client, version };
