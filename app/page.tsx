import ToDoCard from "@/components/ToDoCard";
import ToDoList from "@/data/ToDoList";

export default function Home() {
	return (
		<>
			<header className="flex w-full h-[10rem] justify-center items-center text-5xl font-bold mb-10">
				<h1>TO DO LIST APP</h1>
			</header>
			<main className="flex min-h-screen flex-col items-center justify-between">
				<section className="flex justify-start items-center flex-col w-[50em] px-5">
					{ToDoList.map((todo) => (
						<ToDoCard
							key={todo.id}
							id={todo.id}
							title={todo.title}
							description={todo.description}
						/>
					))}
				</section>
			</main>
		</>
	);
}
