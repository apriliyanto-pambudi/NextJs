import { Roboto } from '@next/font/google';
import Link from 'next/link';

const roboto = Roboto({
	weight: '500',
});

export default function RootLayout({ children }) {
	return (
		<html className={roboto.className}>
			<head>
				<title>Apriliyanto Pambudi</title>
			</head>
			<body>
				<nav style={{ padding: 16, margin: 8 }}>
					<Link href='/' style={{ padding: '0 10px 0 0' }}>
						HOME
					</Link>
					<Link href='/post' style={{ padding: '0 10px 0 0' }}>
						POST
					</Link>
				</nav>
				<div>{children}</div>
			</body>
		</html>
	);
}
