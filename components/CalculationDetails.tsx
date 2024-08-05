export default function CalculationDetails({
	monthlySpendingAvg,
}: {
	monthlySpendingAvg: number | string;
}) {
	return (
		<div>
			<div className="font-bold text-2xl mb-4">Calculation Detail :</div>
			<div>Monthly Average Spending : Rp{monthlySpendingAvg} </div>
			<div>
				Yearly Total Spending : Rp
				{(typeof monthlySpendingAvg === "number"
					? monthlySpendingAvg
					: parseInt(monthlySpendingAvg)) * 12}{" "}
				<b>| (4% of Calculation Results)</b>
			</div>
			<hr className="my-5" />
			<div>
				Calculation Results : Rp
				{(((typeof monthlySpendingAvg === "number"
					? monthlySpendingAvg
					: parseInt(monthlySpendingAvg)) *
					12) /
					0.04) *
					1}
			</div>
		</div>
	);
}
