// THE 4% RULES OF FINANCIAL FREEDOM

const fourPercent: number = 0.04;
const oneHundredPercent: number = 1;

function fourPercentCalc(totalExpenditureEachMonth: number) {
	const oneYearTotalMonthsCount: number = 12;
	const needAmountOfMoneyOneYear: number =
		totalExpenditureEachMonth * oneYearTotalMonthsCount;

	const totalNeedOfAmountMoneyForTheReturn =
		(needAmountOfMoneyOneYear / fourPercent) * oneHundredPercent;

	console.log(totalNeedOfAmountMoneyForTheReturn);
}

// calculateTotalAmountOfMoneyNeeds(600000000)
export default fourPercentCalc;
