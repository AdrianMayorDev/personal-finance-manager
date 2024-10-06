import "./styles/main.scss";
import styles from "./test.module.scss";

export default function Home() {
	return <div className={styles.test}>Texto de prueba</div>;
}
