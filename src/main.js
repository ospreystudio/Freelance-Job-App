import { createApp } from 'vue';
import App from "./App";
import router from "./router";
import store from "./store/modules/store";
import BaseCard from "./pages/components/ui/BaseCard";
import BaseButton from "./pages/components/ui/BaseButton";
import BaseSpinner from "./pages/components/ui/BaseSpinner";
import BaseBadge from "./pages/components/ui/BaseBadge";
import BaseDialog from "./pages/components/ui/BaseDialog";

const app = createApp(App)

app.use(store)
app.use(router)
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-spinner', BaseSpinner)
app.component('base-dialog', BaseDialog)
app.mount('#app');
