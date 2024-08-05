export default function Financial() {
	return (
		<div className="h-screen flex w-full items-center justify-center flex-col">
			<div className="h-24 text-5xl font-bold mb-10">Calculate 4% Rules!</div>
			<div
				data-role="calculator-section"
				className="flex items-start justify-center flex-col w-full"
			>
				<div
					data-name="monthly-total-spending"
					data-role="wrapper"
					className="w-full flex flex-row items-start justify-center"
				>
					<form className="w-full flex flex-row items-start justify-center">
						<div className="w-[50%] flex flex-col items-start justify-center">
							<label
								htmlFor="number-input"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Input your monthly total spending :
							</label>
							<input
								type="number"
								id="number-input"
								aria-describedby="helper-text-explanation"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="10000000"
								required
							/>
						</div>
						<div className="w-[50%] flex items-start justify-center flex-1">
							<button
								type="button"
								data-role="button"
								data-name="calculate-button"
								className=""
							>
								Calculate
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
