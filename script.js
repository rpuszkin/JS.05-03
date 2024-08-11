function isMaleName(name) {
  const formatedName = name.toLowerCase();
  if (formatedName === "bonawentura") {
    return true;
  } else if (formatedName.endsWith("a")) {
    return false;
  }
}
//przykładowy input:
const result1 = isMaleName("Ala");
const result2 = isMaleName("Jacek");
const result3 = isMaleName("Bonawentura");
console.log(result1, result2, result3);
