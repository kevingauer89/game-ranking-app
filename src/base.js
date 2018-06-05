import Rebase from 're-base'
import Firebase from 'firebase'

const config = {
    apiKey: REACT_APP_DB_API_KEY,
    authDomain: REACT_APP_DOMAIN,
    databaseURL: REACT_APP_URL,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_SENDER_ID
}
const app = Firebase.initializeApp(config)
const base = Rebase.createClass(app.database())

export {base}