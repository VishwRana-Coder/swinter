const { username, password } = process.env;

export const connectionStr =
  "mongodb+srv://" +
  username +
  ":" +
  password +
  "@cluster.pezvg.mongodb.net/swinter?retryWrites=true&w=majority&appName=Cluster";
