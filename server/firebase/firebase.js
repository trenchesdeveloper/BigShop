import admin from "firebase-admin";

import serviceAccount from "../config/fbServiceAccountKey.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
