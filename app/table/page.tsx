import createTable from "@/data/CreateTable";

const table1 = createTable({
	name: "School Clubs",
	head: ["Id", "Name", "Member Count", "Location"],
	body: [
		["C1", "Basketball", 23, "Basketball Zone, Dalung"],
		["C2", "Badminton", 45, "Geenas Arena Badminton Court, Denpasar"],
		["C3", "Volleyball", 56, "Volleyball Parties, Kuta"],
	],
});

export default function Table() {
	return (
		<div>
			<div className="table-example">
				<table className="border">
					<thead>
						<tr>
							{table1.head.map((th, i) => (
								<th className="border p-5" key={i}>
									{th}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{table1.body.map((tableBody, j) => (
							<tr key={j}>
								{tableBody.map((tb, i) => (
									<td className="border p-5" key={i}>
										{tb}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
