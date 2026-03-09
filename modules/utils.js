function getUserData(username, age, email) {
   return [
    `Username: ${username}`,
    `Age: ${age}`,
    `Email: ${email}`
  ].join('\n');
}

module.exports = {getUserData}