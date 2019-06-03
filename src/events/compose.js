/* eslint-disable camelcase */
function composeEvent({
  callback = () => undefined,
  category = 'game',
  data = {},
  label = '',
  transport = '',
  ...rest
}) {
  return {
    event_callback: callback,
    event_category: category,
    event_data: data,
    event_label: label,
    transport_type: transport,
    ...rest,
  };
}
export function composeClickEvent({ category, data, label, ...rest }) {
  return {
    type: 'click',
    payload: {
      ...composeEvent({ category, data, label, ...rest }),
    },
  };
}

export function composeErrorEvent({ label, data, ...rest }) {
  return {
    type: 'error',
    payload: {
      ...composeEvent({ category: 'error', data, label, ...rest }),
    },
  };
}

export function composeTriggerEvent({ category, data, label, ...rest }) {
  return {
    type: 'trigger',
    payload: {
      ...composeEvent({ category, data, label, ...rest }),
    },
  };
}
