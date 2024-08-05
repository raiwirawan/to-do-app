"use client";

import Accordion from "@/components/Accordion";
import CalcAccordion from "@/data/CalcAccordion";
import CalculationDetails from "@/components/CalculationDetails";
import { useEffect, useState } from "react";

export default function Financial() {
	const [input, setInput] = useState<number | string>(0);

	useEffect(() => {
		if (typeof input === "number") {
			return;
		}
		if (input === "") {
			setInput(0);
		}
	}, [input]);

	return (
		<div className="h-screen flex w-full items-center justify-start flex-col">
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
					<form className="w-full flex flex-row items-center justify-center h-full">
						<div className="w-[50%] flex flex-col items-start justify-center">
							<label
								htmlFor="rules-number-input"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Input your monthly total spending (IDR / Rp) :
							</label>
							<input
								type="number"
								id="rules-number-input"
								aria-describedby="helper-text-explanation"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="10000000"
								required
								onChange={(e) => setInput(e.target.value)}
							/>
						</div>
						<div className="w-[45%] ml-auto h-full items-start justify-center hidden">
							<button
								type="button"
								data-role="button"
								data-name="calculate-button"
								className="mr-auto mt-auto rounded-3xl bg-transparent border-[2px] border-[#758fef] text-[#758fef] py-3 px-10 hover:bg-[#758fef] hover:text-black transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
							>
								Calculate
							</button>
						</div>
					</form>
				</div>
			</div>
			<hr className="w-full mt-10" />
			<div
				data-role="calculation-details-section"
				className="w-full flex items-center justify-start mt-8"
			>
				<CalculationDetails monthlySpendingAvg={input} />
			</div>
			<div data-name="accordion-wrapper" className="mt-[4rem] w-full pb-[8rem]">
				<h2
					data-name="faq"
					className="font-bold my-3 w-full text-center text-[2rem]"
				>
					FAQ
				</h2>
				{CalcAccordion.map((elm) => (
					<Accordion
						key={elm.id}
						id={elm.id}
						title={elm.title}
						description={elm.description}
					/>
				))}
			</div>
		</div>
	);
}
