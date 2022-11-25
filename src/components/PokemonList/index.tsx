import { PokemonCard } from "../PokemonCard";
import styles from "./styles.module.scss";

interface Props {
	pokemonsUrl?: string[] | null;
	page: number;
	perPage: number;
}

export const PokemonList = ({ pokemonsUrl, page, perPage }: Props) => {
	return (
		<div>
			{pokemonsUrl?.map((pokemonsUrl) => (
				<PokemonCard key={pokemonsUrl} url={pokemonsUrl} />
			))}
		</div>
	);
};
