module.exports = function createDreamTeam(a) {
  if (!Array.isArray(a)) {
    return false;
  }
  return a.map(x => {
    if (typeof x !== "string"){
      return ""
    } else {
      return x.trim()[0].toUpperCase();
    }
  }).sort().join("");
};