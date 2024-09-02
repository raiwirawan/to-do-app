export default function FeaturesLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <main className="max-w-[80rem] mx-auto">{children}</main>;
}
