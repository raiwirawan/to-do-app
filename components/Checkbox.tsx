import styles from "./Checkbox.module.css";
import { cn } from "@/lib/utils";

export default function Checkbox({
	id,
	isDisabled,
	isChecked,
}: {
	id: string;
	isDisabled?: boolean;
	isChecked?: boolean;
}) {
	return (
		<div className={styles.checkboxWrapper}>
			<input
				type="checkbox"
				id={id}
				disabled={isDisabled}
				defaultChecked={isChecked}
			/>
			<label
				htmlFor={id}
				className={cn(
					styles.checkbox,
					isDisabled === true ? "border-[#6b6b6b!important]" : "border-[#fff]"
				)}
			/>
		</div>
	);
}
