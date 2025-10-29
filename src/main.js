import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import AOS from "aos";
/**styling */
import "./style.css";
// import "./assets/tailwind.css"; //tailwind
import "aos/dist/aos.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons"; // Import the brand icons
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faGithub,
    faGoogle,
    faAndroid,
    faJava,
  } from '@fortawesome/free-brands-svg-icons'

  import {
    faDatabase,
    faNetworkWired,
    faBolt,
    faCubes,
    faLayerGroup,
    faCodeBranch,
  } from '@fortawesome/free-solid-svg-icons'

library.add(fas, fab);
library.add(
    faGithub,
    faGoogle,
    faAndroid,
    faJava,
    faDatabase,
    faNetworkWired,
    faBolt,
    faCubes,
    faLayerGroup,
    faCodeBranch
  )
  
AOS.init();
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
