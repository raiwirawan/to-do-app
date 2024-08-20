import ToDoCard from "@/components/ToDoCard";
import ToDoList from "@/data/ToDoList";
import firebaseClient from "@/lib/firebase";
import {
	collection,
	Firestore,
	getDocs,
	getFirestore,
} from "firebase/firestore";

async function getTodos() {
	const db = getFirestore(firebaseClient);
	const citiesCol = collection(db, "todos");
	const citySnapshot = await getDocs(citiesCol);
	const cityList = citySnapshot.docs.map((doc) => doc.data());
	return cityList;
}

export default async function Home() {
	const todos = await getTodos();
	return (
		<>
			<header className="flex w-full h-[10rem] justify-center items-center text-5xl font-bold mb-10">
				<h1>TO DO LIST APP</h1>
			</header>
			<main className="flex min-h-screen flex-col items-center justify-between">
				<section className="flex justify-start items-center flex-col w-[50em] px-5">
					{todos.map((todo, i) => (
						<ToDoCard
							key={i + 1}
							id={i + 1}
							title={todo.title}
							description={todo.description}
						/>
					))}
				</section>
			</main>
		</>
	);
}
