import createTable from "@/data/CreateTable";
import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableField,
	TableData,
} from "@/components/Table";

const table1 = createTable({
	name: "School Clubs",
	head: ["Id", "Name", "Member Count", "Location"],
	body: [
		["C1", "Basketball", 23, "Basketball Zone, Dalung"],
		["C2", "Badminton", 45, "Geenas Arena Badminton Court, Denpasar"],
		["C3", "Volleyball", 56, "Volleyball Parties, Kuta"],
	],
});

export default function Users() {
	return (
		<div>
			<div className="table-example">
				<Table classname={"border"}>
					<TableHead>
						<TableRow>
							{table1.head.map((th, i) => (
								<TableField classname={"border p-5"} key={i}>
									{th}
								</TableField>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{table1.body.map((tableBody, j) => (
							<TableRow key={j}>
								{tableBody.map((tb, i) => (
									<TableData classname={"border p-5"} key={i}>
										{tb}
									</TableData>
								))}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
