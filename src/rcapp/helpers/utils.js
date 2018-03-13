/*
 * =============================================================================
 * Project: boilerplate
 * Created Date: 2018-03-12, 09:15:53
 * Author: Przemysław Drzewicki <przemyslaw.drzewicki@gmail.com>
 * =============================================================================
 * Last Modified: 2018-03-13, 11:45:55
 * Modified By: Przemysław Drzewicki
 * =============================================================================
 * Copyright (c) 2018 webonweb
 * =============================================================================
 */

/**
 * Generate a random hash.
 * 
 * @export
 * @param {number} [len=10] 
 * @returns 
 */
export function hash(len = 10) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return `${text}${Math.floor(Math.random() * 9999) + 1}`;
}

/**
 * Prepare a standard action.
 * 
 * @export
 * @param {any} [types={}] 
 * @param {string} [url=''] 
 * @param {string} [action=''] 
 * @param {any} [data={}] 
 * @returns 
 */
export function createAction(types = {}, url = '', action = '', data = {}) {
  return {
    types: Object.values(types),
    promise: client => client[action](url, { data })
  };
}

/**
 * Change the object to query params url.
 * 
 * @export
 * @param {any} [object={}] 
 * @returns 
 */
export function httpBulidQuery(object = {}) {
  const filter = Object.entries(object)
    .map(([key, val]) => `${key}=${val}`)
    .join("&");
  return filter === "" ? "" : `&${filter}`;
}

/**
 * Change image to base64 string.
 * 
 * @export
 * @param {string} [img=""] 
 * @param {any} [callback=() => {}] 
 */
export function getBase64Image(img = "", callback = () => {}) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

/**
 * Change seconds on time.
 * 
 * @export
 * @param {number} [secs=0] 
 * @param {boolean} [addHour=false] 
 * @returns 
 */
export function seconds2Time(secs = 0, addHour = false) {
  secs = Math.round(secs);
  var hours = Math.floor(secs / (60 * 60));

  var divisor_for_minutes = secs % (60 * 60);
  var minutes = Math.floor(divisor_for_minutes / 60);

  var divisor_for_seconds = divisor_for_minutes % 60;
  var seconds = Math.ceil(divisor_for_seconds);

  hours = hours < 10 ? `0${hours}` : hours;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return addHour? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`;
}

/**
 * Sort object by key.
 * 
 * @export
 * @param {any} [object={}] 
 * @param {string} [key=''] 
 * @returns 
 */
export function sortByKey(object = {}, key = '') {
  return object.sort((elementA, elementB) => {
    if(elementA[key] < elementB[key]) return -1;
    if(elementA[key] > elementB[key]) return 1;
    return 0;
  });
}

/**
 * Check if the specified element is a function.
 * 
 * @export
 * @param {string} [element=''] 
 * @returns 
 */
export function isFunction(element = "") {
  return typeof element === "function";
}

/**
 * Check if the specified element is a object.
 * 
 * @export
 * @param {string} [element=''] 
 * @returns 
 */
export function isObject(element = "") {
  return typeof element === "object";
}