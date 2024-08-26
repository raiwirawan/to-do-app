export default function TableLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="max-w-[60rem] pt-[5rem] mx-auto">{children}</main>;
}
