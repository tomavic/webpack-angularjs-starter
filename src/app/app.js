import "../assets/lib/ionic/js/ionic.bundle";




import AppRun from "./app.run";
import AppRouting from "./app.routing";
import AppController from "./app.controller";


// import all app-related parts
import appDirectives from "./components";
import appServices from "./services";
import appPages from "./pages";


const AppModule = angular
  .module("ionicSeed", [
    // include ionic, and angular
    "ionic",
    // 'ngCordova',

    // high level app directives or components
    appDirectives.name,

    // high level app services
    appServices.name,

    // all other application pages
    appPages.name
  ])
  .run(AppRun)
  .config(AppRouting)
  .controller("AppController", AppController);

export default AppModule;
