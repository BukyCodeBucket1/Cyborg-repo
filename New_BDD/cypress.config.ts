import { defineConfig } from "cypress";

export default defineConfig({
  
  watchForFileChanges:true,
  requestTimeout:10000,
  trashAssetsBeforeRuns:true,
  chromeWebSecurity:false,modifyObstructiveCode:true,
  screenshotOnRunFailure:true,
  viewportHeight:1080,
  viewportWidth:1920,
  video:true,
  //modifyObstructivecode:true,


  env:{
    "USERNAMEw":"",
  },
  
  
  
  e2e: {

    baseUrl:"",
    video:true,
    experimentalModifyObstructiveThirdPartyCode:true,
   
    
    specPattern:"cypress/e2e/features/**/*.{feature,features}",
    
    
    setupNodeEvents(on, config) {
      // implement node event listeners here

      return require("./cypress/plugin.index.ts")(on, config);


    },
  },
});
