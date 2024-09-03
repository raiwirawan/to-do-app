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
	name: "User List",
	head: ["ID", "Name", "Email", "Phone"],
	body: [
		["U1", "James O'Connor", "james.oconnor@icloud.com", "0889342734234"],
		["U2", "Ivan Kusznetsov", "ivan.kusznetsov@gmail.com", "083423426734"],
		["U3", "Dmitri Volkov", "dimitri.volkov@gmail.com", "087642382342"],
		["U4", "Lamile Yaman", "lamile.yaman@gmail.com", "087642382342"],
		["U5", "Chris Raymond", "chris.raymond@gmail.com", "087642382342"],
	],
});

export default function Users() {
	return (
		<div>
			<h1 className="text-5xl font-bold py-8 mb-5 text-center bg-[#7eb0ff] uppercase">
				{table1.name}
			</h1>
			<div className="table-example flex items-center justify-center">
				<Table classname={"border border-separate"}>
					<TableHead>
						<TableRow>
							{table1.head.map((th, i) => (
								<TableField classname={"border p-5 bg-[#765389]"} key={i}>
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
