# CRIB FINDER WEB APP
a react app on searching houses using React and Firebase 
web version of Crib Finder Flutter app  [housing](https://github.com/muchirajunior/housing)

hosted at at firebase [housing-web](https://housingweb.web.app/)

### setup
- run command  to install the firebase tools
``` 
    npm install -g firebase-tools 
```
- run `firebase login` to login to your firebase projects
- run `firebase init` in your project directory and start new instace 

### hosting 
- firebase-config file copy from firebase app setupand add the initialize lines
```javascript
    import { initializeApp } from "firebase/app";
    import { getFirestore  } from "@firebase/firestore";
    import { getAuth } from "@firebase/auth"


    const firebaseConfig = {
    apiKey: "****************",
    authDomain: "**********.firebaseapp.com",
    databaseURL: "https://******.firebaseio.com",
    projectId: "***************",
    storageBucket: "*********.appspot.com",
    messagingSenderId: "**********",
    appId: "1:904808986763:web:********",
    measurementId: "G-********"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    export const db= getFirestore(app)
    export const auth= getAuth(app)
    export const imgUrl=(name)=> `*********`;

```

- specify web app for multiple web app
```bash
    firebase target:apply hosting target target-name  
```
- add target in firebase.json. target is `web` in this case
```JSON
    {
    "hosting": {
        "public": "build",
        "target":"web",
        "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
        ],
        "rewrites": [
        {
            "source": "**",
            "destination": "/index.html"
        }
        ]
    }
    }
```
for more visit [firebase-hosting-multiple-web](https://firebase.google.com/docs/hosting/multisites)

### deploy 
- run `npm run build`
- run the command  `firebase deploy` 

