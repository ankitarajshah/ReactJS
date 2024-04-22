export default function Button({ children, ...props }) {
  return (
    <>
      <button
        className="text-center bg-stone-400 hover:bg-slate-700 mt-4 px-8 py-4 rounded-md"
        {...props}
      >
        {children}
      </button>
    </>
  );
}
