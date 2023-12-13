function findNaughtyStep(original, modified) {
  if (original.length > modified.length) {
    for (let i = 0; i < original.length; i++) {
      if (original[i] != modified[i]) {
        return original[i];
      }
    }
  } else {
    for (let j = 0; j < modified.length; j++) {
      if (modified[j] != original[j]) {
        return modified[j];
      }
    }
  }

  return "";
}

const original = "abcd";
const modified = "abcde";
findNaughtyStep(original, modified);
