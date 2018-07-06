export const select = (contact) => {
  return {
      type: "CLIENTS_SELECTED",
      payload : contact
  }
};
