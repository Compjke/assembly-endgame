import { Fireworks } from '@fireworks-js/react';

export function FireWorks() {
	return (
		<Fireworks
			options={{ opacity: 0.5 }}
			style={{
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				position: 'fixed',
				zIndex: -1,
			}}
		/>
	);
}
