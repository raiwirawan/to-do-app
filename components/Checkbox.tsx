import styles from "./Checkbox.module.css";

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
				checked={isChecked}
			/>
			<label htmlFor={id} className={styles.checkbox} />
		</div>
	);
}
