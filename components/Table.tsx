import { cn } from "@/lib/utils";

interface TableDefaultAttr {
	children: React.ReactNode;
	classname?: string;
	colspan?: number;
	rowspan?: number;
}

function TableRow({ children, classname }: TableDefaultAttr) {
	return <tr className={cn("", classname)}>{children}</tr>;
}

function TableData({ children, classname }: TableDefaultAttr) {
	return <td className={cn("", classname)}>{children}</td>;
}

function TableHead({ children, classname }: TableDefaultAttr) {
	return <thead className={cn("", classname)}>{children}</thead>;
}

function TableBody({ children, classname }: TableDefaultAttr) {
	return <tbody className={cn("", classname)}>{children}</tbody>;
}

function TableField({ children, classname }: TableDefaultAttr) {
	return <th className={cn("", classname)}>{children}</th>;
}

function Table({ children, classname }: TableDefaultAttr) {
	return <table className={cn("", classname)}>{children}</table>;
}

export { Table, TableHead, TableBody, TableRow, TableField, TableData };
