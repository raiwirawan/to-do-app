"use client";

import { cn } from "@/lib/utils";

interface BackwardButton {
	button_text?: string;
	className?: string;
}

export default function BackwardButton({
	button_text,
	className,
}: BackwardButton) {
	const goesBackward = () => {
		window.history.back();
	};
	return (
		<button
			className={cn(
				"bg-[#0004ff] text-[#fff] font-bold text-2xl w-[12rem] h-[4rem] mt-4 rounded-xl",
				className
			)}
			onClick={() => goesBackward()}
		>
			{button_text !== undefined ? button_text : "Back"}
		</button>
	);
}
