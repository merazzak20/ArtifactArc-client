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
        element: <AddArtifacts></AddArtifacts>,
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
        element: <ArtiCraftsDetails></ArtiCraftsDetails>,
      },
      {
        path: "/myArtifacts",
        element: <MyArtifact></MyArtifact>,
      },
      {
        path: "/likedArtifacts",
        element: <LikedArtifact></LikedArtifact>,
      },
      {
        path: "/updateArtifact/:id",
        element: <UpdateArtifacts></UpdateArtifacts>,
      },
    ],
  },
]);

export default router;
