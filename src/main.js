import { Router } from '@vaadin/router';
import "./main-components/home-component"
import "./main-components/destinations-component"
import "./section-components/destination-page"
import "./main-components/main-wrapper"

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
    {   path:"/", component:"main-wrapper",
        children:[
            {path: "/", component: "home-component"},
            { path: '/destinations', component: 'destinations-component' },
        { path: "/destinations2/:id", component: "destination-page" }
    ] }
    
]);