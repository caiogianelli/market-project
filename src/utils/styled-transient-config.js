export const transientConfig = {
  shouldForwardProp: (prop) => !prop.startsWith("$"),
};
