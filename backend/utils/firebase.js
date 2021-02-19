import admin from "firebase-admin";

import serviceAccount from "../config/fbServiceAccountKey.js";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
