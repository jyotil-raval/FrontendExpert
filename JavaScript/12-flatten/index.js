function flatten(value) {
  if (typeof value !== 'object' || value === null) {
    return value;
  } else if (Array.isArray(value)) {
    return flattenArray(value);
  } else {
    return flattenObject(value);
  }
}

function flattenArray(array) {
  return array.reduce((result, currentElement) => result.concat(flatten(currentElement)), []);
}

function flattenObject(object) {
  const flattenObj = {};
  for (const [key, value] of Object.entries(object)) {
    const valueIsObject = typeof value === 'object' && value !== null && !Array.isArray(value);
    const flattenValue = flatten(value);
    if (valueIsObject) {
      Object.assign(flattenObj, flattenValue);
    } else {
      flattenObj[key] = flattenValue;
    }
  }
  return flattenObj;
}

exports.flatten = flatten;
