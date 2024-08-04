import { cn } from "@/lib/utils";
import Checkbox from "./Checkbox";

export default function ToDoCard({
	wrapperClasses,
	id,
	title,
	description,
}: {
	wrapperClasses?: string;
	id: number;
	title: string;
	description: string;
}) {
	return (
		<div
			data-role="to-do-wrapper"
			className={cn(
				"flex w-full justify-around items-center border mb-5 p-6 rounded-3xl",
				wrapperClasses
			)}
			data-to-do-id={id}
		>
			<div data-layout="left" className="mr-7">
				<div data-role="to-do-logo">Logo</div>
			</div>
			<div data-layout="center" className="flex-1">
				<div data-role="to-do-title" className="font-bold text-3xl">
					{title}
				</div>
				<div data-role="to-do-desc">{description}</div>
			</div>
			<div data-layout="right">
				<div data-role="to-do-checklist">
					{id === 3 ? (
						<Checkbox id={`check-${id}`} isChecked={true} />
					) : (
						<Checkbox id={`check-${id}`} />
					)}
				</div>
			</div>
		</div>
	);
}
