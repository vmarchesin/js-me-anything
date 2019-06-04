/* eslint-disable camelcase */
function composeEvent({
  action: event_action,
  callback: event_callback,
  category: event_category = 'game',
  label: event_label,
  transport: transport_type,
  value: event_value,
  ...rest
}) {
  if (typeof event_callback === 'function') {
    event_callback();
  }

  return {
    event_category,
    ...(event_action !== undefined && { event_action }),
    ...(event_label !== undefined && { event_label }),
    ...(event_value !== undefined && { event_value }),
    ...(transport_type !== undefined && { transport_type }),
    ...rest,
  };
}

export function composeClickEvent({ action, category, label, value, ...rest }) {
  return {
    type: 'click',
    payload: {
      ...composeEvent({ action, category, label, value, ...rest }),
    },
  };
}

export function composeErrorEvent({ label, ...rest }) {
  return {
    type: 'error',
    payload: {
      ...composeEvent({ category: 'error', label, ...rest }),
    },
  };
}

export function composeNonInteractiveEvent({
  category,
  data,
  label,
  value,
  ...rest
}) {
  return {
    type: 'event',
    payload: {
      ...composeEvent({
        category,
        data,
        label,
        value,
        nonInteraction: true,
        ...rest,
      }),
    },
  };
}
