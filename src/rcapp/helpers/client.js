/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:16:02
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-12, 09:53:43
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

//==============================================================================
// Loading dependencies.
//==============================================================================
import axios from "axios";

/**
 * Ajax request class.
 * 
 * @class Client
 */
class Client {

  /**
   * A reference to a client object.
   * 
   * @memberof Client
   */
  dispatch = null;

  /**
   * Reference to the axios object.
   * 
   * @memberof Client
   */
  instance = null;

  /**
   * The object that holds the requested request.
   * 
   * @memberof Client
   */
  request = null;

  /**
   * Configuration object for axios.
   * 
   * @memberof Client
   */
  settings = {
    timeout: 5000,
    withCredentials: true,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json, text/plain, */*"
    },
    responseType: "json",
    baseURL: `${__API_URL__}`
  };

  /**
   * An array of available methods.
   * 
   * @memberof Client
   */
  methods = ["get", "post", "put", "delete", "patch"];

  /**
   * Creating a Client class instance.
   * 
   * @memberof Client
   */
  constructor() {
    this.create();
    this.methods.map(method => {
      this[method] = (path, { params, data } = {}) =>
        new Promise((resolve, reject) => {
          this.request = this.instance[method](path, data);
          this.request
            .then(response => this.responseSuccess(response, resolve))
            .catch(error => this.responseError(reject));
        });
    });
  }

  /**
   * Creation of an axios instance.
   * 
   * @memberof Client
   */
  create() {
    this.instance = axios.create(this.settings);
  }

  /**
   * Support for correct feedback.
   * 
   * @param {any} [response={}] 
   * @param {any} [resolve={}] 
   * @param {any} [reject={}] 
   * @memberof Client
   */
  responseSuccess(response = {}, resolve = {}, reject = {}) {
    resolve(response.data.data);
  }

  /**
   * Handling erroneous feedback.
   * 
   * @param {any} [reject={}] 
   * @memberof Client
   */
  responseError(reject = {}) {
    reject();
  }
}

// =============================================================================
// Export the client class.
// =============================================================================
export default Client;