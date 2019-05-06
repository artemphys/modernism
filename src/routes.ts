import { App } from "./modules/MainContainer";
import { HomePage } from "./modules/HomePage";
import { RouteConfig } from "react-router-config";
import { ArtistPage } from "./modules/ArtistsPage/ArtistPage";
import { GenrePage } from "./modules/GenrePage";
//import { ArtistList } from "./modules/ArtistsPage";
// import { ArtistCard } from "./modules/ArtistsPage/ArtistCard";

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
        path: "/artists"
      },
      {
        component: GenrePage,
        path: "/genre"
      }
    ]
  }
];
