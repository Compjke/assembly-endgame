import { ERRORS_MAX_VALUE } from '../../constans';
import style from './header.module.css';

export const Header = () => {
	return (
		<header className={style.header}>
			<h1>Assembly: Endgame</h1>
			<p>
				Guess the word within {ERRORS_MAX_VALUE} attempts to keep the
				programming world safe from Assembly!
			</p>
		</header>
	);
};
