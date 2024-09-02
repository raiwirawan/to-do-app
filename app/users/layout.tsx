export default function UsersLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="max-w-[70rem] pt-[5rem] mx-auto">{children}</main>;
}
