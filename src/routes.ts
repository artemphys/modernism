import { App } from "./modules/MainContainer";
import { RouteConfig } from "react-router-config";
import ArtistsPage from "./modules/ArtistsPage";
import { GenrePage } from "./modules/GenresPage/GenrePage";
import MuseumsPage from "./modules/MuseumsPage";
import ArtistPage from "./modules/ArtistsPage/ArtistPage";
import { GenresPage } from "./modules/GenresPage";

export const routes = <Array<RouteConfig>>[
  {
    component: App,
    path: "/",
    routes: [
      {
        component: ({ history }: { history: any }) => {
          history.replace("/artists");
          return null;
        },
        path: "/",
        redirect: "/artists",
        exact: true
      },
      {
        component: ArtistsPage,
        path: "/artists",
        exact: true
      },
      {
        component: ArtistPage,
        path: "/artists/:id",
        exact: true
      },
      {
        component: GenresPage,
        path: "/genres",
        exact: true
      },
      {
        component: GenrePage,
        path: "/genres/:id",
        exact: true
      },
      {
        component: MuseumsPage,
        path: "/museums",
        exact: true
      }
    ]
  }
];
