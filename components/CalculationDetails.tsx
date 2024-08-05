import styles from "./CalculationDetail.module.css";
import infoData from "@/data/CalcDefinition";

export default function CalculationDetails({
	monthlySpendingAvg,
}: {
	monthlySpendingAvg: number | string;
}) {
	return (
		<div>
			<div className="font-bold text-2xl mb-4">Calculation Detail :</div>
			<div className="flex flex-row items-center justify-start mb-3">
				Monthly Average Spending :{" "}
				{Intl.NumberFormat("id-ID", {
					style: "currency",
					currency: "IDR",
				}).format(
					typeof monthlySpendingAvg === "number"
						? monthlySpendingAvg
						: parseInt(monthlySpendingAvg)
				)}
				<DisplayInfo
					id={infoData[0].id}
					title={infoData[0].title}
					description={infoData[0].desc}
				/>
			</div>
			<div className="flex flex-row items-center justify-start">
				Yearly Total Spending :{" "}
				{Intl.NumberFormat("id-ID", {
					style: "currency",
					currency: "IDR",
				}).format(
					(typeof monthlySpendingAvg === "number"
						? monthlySpendingAvg
						: parseInt(monthlySpendingAvg)) * 12
				)}
				<b className="ml-3">| (4% of Calculation Results)</b>
				<DisplayInfo
					id={infoData[1].id}
					title={infoData[1].title}
					description={infoData[1].desc}
				/>
			</div>
			<hr className="my-5" />
			<div className="flex flex-row items-center justify-start">
				Calculation Results :{" "}
				{Intl.NumberFormat("id-ID", {
					style: "currency",
					currency: "IDR",
				}).format(
					((typeof monthlySpendingAvg === "number"
						? monthlySpendingAvg
						: parseInt(monthlySpendingAvg)) *
						12) /
						0.04
				)}
				<DisplayInfo
					id={infoData[2].id}
					title={infoData[2].title}
					description={infoData[2].desc}
				/>
			</div>
		</div>
	);
}

function DisplayInfo({
	id,
	title,
	description,
}: {
	id: number;
	title: string;
	description: string;
}) {
	return (
		<span
			className={`inline-block relative displayInfoTrigger ml-3 ${styles.displayInfoTrigger}`}
			id={`info-${id}`}
		>
			<div
				className="relative"
				data-name="display-info-logo text-white displayInfoLogo"
			>
				<svg
					width="20"
					height="20"
					viewBox="0 0 20 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8.5 10H10V14H12M10 6H10.01M11.5628 18.8633C12.7268 18.658 13.8389 18.2256 14.8357 17.5905C15.8325 16.9555 16.6945 16.1303 17.3724 15.1622C18.0503 14.194 18.5309 13.1018 18.7867 11.948C19.0425 10.7941 19.0685 9.60111 18.8633 8.43717C18.658 7.27322 18.2256 6.1611 17.5905 5.1643C16.9555 4.1675 16.1303 3.30554 15.1622 2.62763C14.194 1.94972 13.1018 1.46914 11.948 1.21334C10.7941 0.957527 9.60111 0.931496 8.43717 1.13673C7.27322 1.34196 6.1611 1.77444 5.1643 2.40948C4.1675 3.04451 3.30554 3.86966 2.62763 4.83781C1.94972 5.80597 1.46914 6.89816 1.21334 8.05205C0.957527 9.20593 0.931496 10.3989 1.13673 11.5628C1.34197 12.7268 1.77445 13.8389 2.40948 14.8357C3.04451 15.8325 3.86966 16.6945 4.83781 17.3724C5.80597 18.0503 6.89816 18.5309 8.05205 18.7867C9.20593 19.0425 10.3989 19.0685 11.5628 18.8633Z"
						stroke="#6e6d6d"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</div>
			<div
				className={`absolute top-0 left-0 pt-8 w-[20rem] h-auto displayInfoContent z-[2] ${styles.displayInfoContent}`}
			>
				<div className="w-full h-full bg-blue-500 p-3 rounded-2xl">
					<h3 className="text-[1rem] font-bold">{title}</h3>
					<p className="text-[1rem] mt-2">{description}</p>
				</div>
			</div>
		</span>
	);
}
