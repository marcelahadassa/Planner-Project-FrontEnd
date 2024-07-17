import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import { CreateTripPage } from "./pages/create-trip";
import { TripDetailsPage } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />
  }
]);

export function App() {
  return <RouterProvider router={router} />
}

//array com toda as pages (objetos) da aplicação no router
//path são as rotas da url que o caminho vai ser