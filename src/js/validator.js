export default class Validator {
  validateUsername(username) {
    return !(!username.match(/^[a-z\-_\d]+$/i) || /[0-9]{4}/.test(username) || /^[\d\-_]/.test(username) || /[\d\-_]$/.test(username));
  }
}
