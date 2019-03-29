import { App } from "./modules/MainContainer";
import { HomePage } from "./modules/HomePage";
import { RouteConfig } from "react-router-config";
import { ArtistPage } from "./modules/ArtistPage";
import { GenrePage } from "./modules/GenrePage";

export const routes = <Array<RouteConfig>>[
  {
    component: App,
    path: "/",
    routes: [
      {
        component: HomePage,
        path: "/",
        exact: true
      },
      {
        component: ArtistPage,
        path: "/artist"
      },
      {
        component: GenrePage,
        path: "/genre"
      }
    ]
  }
];
