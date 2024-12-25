import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllArtifacts from "../pages/AllArtifacts";
import AddArtifacts from "../pages/AddArtifacts";
import Error from "../pages/Error";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
import ArtiCraftsDetails from "../pages/ArtiCraftsDetails";
import MyArtifact from "../pages/MyArtifact";
import LikedArtifact from "../pages/LikedArtifact";
import UpdateArtifacts from "../pages/UpdateArtifacts";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allArtifacts",
        element: <AllArtifacts></AllArtifacts>,
      },
      {
        path: "/addArtifacts",
        element: (
          <PrivateRouter>
            <AddArtifacts></AddArtifacts>
          </PrivateRouter>
        ),
      },
      {
        path: "/signIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/articraft/:id",
        element: (
          <PrivateRouter>
            <ArtiCraftsDetails></ArtiCraftsDetails>
          </PrivateRouter>
        ),
      },
      {
        path: "/myArtifacts",
        element: (
          <PrivateRouter>
            <MyArtifact></MyArtifact>
          </PrivateRouter>
        ),
      },
      {
        path: "/likedArtifacts",
        element: (
          <PrivateRouter>
            <LikedArtifact></LikedArtifact>
          </PrivateRouter>
        ),
      },
      {
        path: "/updateArtifact/:id",
        element: <UpdateArtifacts></UpdateArtifacts>,
      },
    ],
  },
]);

export default router;
