import { PokeballIconSmall } from "../../assets/pokeball";
import styles from "./styles.module.scss";

export const Home = () => {
	return (
		<div className={styles.home}>
			<header>
				<div>
					<PokeballIconSmall />
					<span>Pokedex</span>
				</div>
			</header>
		</div>
	);
};
