export const validateString = (value: unknown) => {
  if (!value || typeof value !== "string") return false;
  return true;
};
