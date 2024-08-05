// THE 4% RULES OF COMPOUNDING MONEY

const fourPercent: number = 0.04;
const oneHundredPercent: number = 1;

function calculateTotalAmountOfMoneyNeeds(totalExpenditureEachMonth: number) {
	const oneYearTotalMonthsCount: number = 12;
	const needAmountOfMoneyOneYear: number =
		totalExpenditureEachMonth * oneYearTotalMonthsCount;

	const totalNeedOfAmountMoneyForTheReturn =
		(needAmountOfMoneyOneYear / fourPercent) * oneHundredPercent;

	console.log(totalNeedOfAmountMoneyForTheReturn);
}

// calculateTotalAmountOfMoneyNeeds(600000000)
export default calculateTotalAmountOfMoneyNeeds;
