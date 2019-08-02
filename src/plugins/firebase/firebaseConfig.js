var firebaseConfig = {
  apiKey: process.env.VUE_APP_FB_API_KEY,
  authDomain: `${process.env.VUE_APP_FB_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.VUE_APP_FB_PROJECT_ID}.firebaseio.com`,
  projectId: process.env.VUE_APP_FB_PROJECT_ID,
  storageBucket: `${process.env.VUE_APP_FB_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.VUE_APP_FB_APP_ID,
  appId: process.env.VUE_APP_FB_APP_ID
}
export default firebaseConfig
