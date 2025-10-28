const previousPasswords = [];

function passwordValidator(password) {
  if (previousPasswords.includes(password)) return false;
  if (password.length < 5) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  if (!/[!#$%.*&]/.test(password)) return false;

  previousPasswords.push(password);

  return true;
}

module.exports = passwordValidator;
