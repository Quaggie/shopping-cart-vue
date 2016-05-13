import Vue from 'vue';

// RETURNS

export const get = (dev) => {
  let item;
  if (typeof dev === 'string') item = localStorage.getItem(dev);
  else if (typeof dev === 'object')item = localStorage.getItem(dev.username);
  if (!item) return undefined;
  return JSON.parse(item);
}

export const edit = (dev) => {
  const item = localStorage.getItem(dev.username);
  if (!item) return undefined;
  return JSON.parse(item);
}

export const getAll = () => {
  if (!localStorage.length) return [];

  const items = Object.keys(localStorage);
  const result = items.map( (i) => JSON.parse(localStorage.getItem(i)));
  return result
}

// NO RETURNS

export const add = (dev) => {
  if (localStorage.getItem(dev.username)) return dev;
  localStorage.setItem(dev.username, JSON.stringify(dev));
}

export const remove = (dev) => {
  localStorage.removeItem(dev.username);
}

export const removeAll = () => {
  localStorage.clear();
}
