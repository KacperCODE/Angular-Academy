// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'deploy-angulara-preview-001',
    appId: '1:688775338496:web:5b8bf6eb005d44ffc096e5',
    storageBucket: 'deploy-angulara-preview-001.appspot.com',
    locationId: 'europe-central2',
    apiKey: 'AIzaSyArOA0gHX0-RIC_4Q5qdPOgC97yr6FegUE',
    authDomain: 'deploy-angulara-preview-001.firebaseapp.com',
    messagingSenderId: '688775338496',
  },
  production: false,
  baseUrl: "http://localhost:8080/",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
