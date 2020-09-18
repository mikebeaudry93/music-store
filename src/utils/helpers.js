// extract image / flatten
export function flattenProducts(data) {
  return data.map((item) => {
    let image = item.image.url;
    return { ...item, image };
  });
}

// helper functions
export function featuredProducts(data) {
  return data.filter((item) => {
    return item.featured === true;
  });
}

export function filterBass(data) {
  return data.filter((item) => {
    return item.bass === true;
  });
}

export function filterDrums(data) {
  return data.filter((item) => {
    return item.drums === true;
  });
}

export function filterGuitars(data) {
  return data.filter((item) => {
    return item.guitar === true;
  });
}

export function filterAmps(data) {
  return data.filter((item) => {
    return item.amps === true;
  });
}
