import NewTask from "./NewTask";

export default function Tasks({ onAdd, tasks, onDelete }) {
  return (
    <>
      <section>
        <h2 className="mb-4 text-2xl uppercase font-bold text-stone-950">
          Tasks
        </h2>
        <NewTask onAdd={onAdd} />
        {tasks.length === 0 && (
          <p className="mb-4 text-stone-800 my-4">
            This project doest not have any tasks yet.
          </p>
        )}
        {tasks.length > 0 && (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task) => (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button
                  className="text-stone-700 hover:text-red-600"
                  onClick={() => onDelete(task.id)}
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
