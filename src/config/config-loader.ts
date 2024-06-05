export const configLoader = () => {
  return {
    port: process.env.PORT,
    database: {
      uri: process.env.DATABASE_URL,
    },
    apiKey: process.env.API_KEY,
  };
};
