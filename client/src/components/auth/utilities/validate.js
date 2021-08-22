// VALIDATE functions return false if field value is invalid. Returns true if valid.

export const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(String(email).toLowerCase())) {
    return false;
  } else {
    return true;
  }
};

export const validatePassword = (password) => {
  if (password.length < 6) {
    return false;
  } else return true;
};

export const validateUsername = (username) => {
  console.log(username.length);
  if (username.length > 0) {
    return true;
  } else return false;
};
