function composeEvent(src, data) {
  return {
    payload: {
      src,
      data: {
        ...data,
      },
    },
  };
}
export function composeClickEvent(src, data) {
  return {
    type: 'click',
    ...composeEvent(src, data),
  };
}

export function composePassiveEvent(src, data) {
  return {
    type: 'trigger',
    ...composeEvent(src, data),
  };
}
