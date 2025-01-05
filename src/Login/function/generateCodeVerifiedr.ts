export const generateCodeVerifier = () => {
  const randomBytes = new Uint8Array(32);

  crypto.getRandomValues(randomBytes);

  return Array.from(randomBytes)
    .map((byte) => String.fromCharCode((byte % 26) + 97))
    .join("");
};
