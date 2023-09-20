function object_properties_swap(obj) {
  const swapped_obj = {};
  for (const key in obj) {
    const temp = obj[key];
    swapped_obj[temp] = key;
  }
  return swapped_obj;
}

// Testing
const car = {
  model: "ford mustang",
  year: "1970",
  color: "black",
};
console.log(object_properties_swap(car));
