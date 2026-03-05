function greet(name) {
  return `👋 Hello, ${name}! Welcome to the Turborepo Demo.`;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

module.exports = {
  greet,
  formatDate,
  capitalize,
};
