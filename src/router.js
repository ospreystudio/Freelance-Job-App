import {createRouter, createWebHistory} from "vue-router";
import DevList from "./pages/devs/DevList";
import DevDetails from "./pages/devs/DevDetails";
import ContactDev from "./pages/requests/ContactDev";
import RequestsReceived from "./pages/requests/RequestsReceived";
import DevRegistration from "./pages/devs/DevRegistration";
import NotFound from "./pages/NotFound";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", redirect: '/devs'},
        {path: '/devs', component: DevList},
        {path: '/devs/:id',
         component: DevDetails,
         props: true,
         children: [ // devs/c1
                {path: 'contact', component: ContactDev}  //  /devs/1c/contact
            ]},
        {path: '/register', component: DevRegistration},
        {path: '/requests', component: RequestsReceived},
        {path: '/:notFound(.*)', component: NotFound},
    ]
})

export default router