import { IRouteViewModel, Routeable } from "aurelia";


export class MyApp {
    static routes: Routeable[] = [
        {
          path: ["", "welcome-page"],
          component: import("./welcome-page")
        },
        {
            path: "about-page/:id",
            component: import("./about-page")
        },
        {
            path: "about-page2",
            component: import("./about-page")
        }
      ]
}
