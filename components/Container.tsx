import { cn } from "@/lib/utils";
import createRandomChars from "@/lib/randomchars";

interface Container {
	children: React.ReactNode;
	id?: string;
	className?: string;
}

const theId = createRandomChars(9);

function Container({ children, id = undefined, className }: Container) {
	return (
		<div
			id={id !== undefined ? id : theId}
			className={cn("the-container", className)}
		>
			{children}
		</div>
	);
}

export default Container;
