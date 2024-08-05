export default function FinancialLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="max-w-[60rem] mx-auto">{children}</main>;
}
