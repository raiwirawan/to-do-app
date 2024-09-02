import BackwardButton from "@/components/BackwardButton";

export default function NotFound() {
	return (
		<div className="w-full h-screen flex justify-center items-center flex-col text-3xl">
			<div>Oops! We can&apos;t found what are you searching for!</div>
			<BackwardButton className="bg-[#93b5ff]" />
		</div>
	);
}
