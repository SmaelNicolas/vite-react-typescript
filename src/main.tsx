import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PokemonProvider from "./context/PokemonContext";

import "./index.scss";
import { Home, PokeDetail } from "./pages";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/:pokeId",
		element: <PokeDetail />,
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<PokemonProvider>
		<RouterProvider router={router} />
	</PokemonProvider>
);
