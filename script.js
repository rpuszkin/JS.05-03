function isMaleName(name) {
  if (name.endsWith("a")) {
    if (name.toLowerCase() === "bonawentura") {
      return true;
    }
  } else {
    return false;
  }
}
//przykładowy input:
const result1 = isMaleName("Ala");
const result2 = isMaleName("Jacek");
const result3 = isMaleName("Bonawentura");
