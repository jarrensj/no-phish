export default function Tool() {
  return (
    <div>
      <div className="flex flex-col items-center mt-4">
        <input
          className="w-96 h-12 rounded-md px-4 border-2 border-gray-300"
          type="text"
          placeholder="Paste link here"
        />
        <button className="mt-4 w-96 h-12 rounded-md bg-blue-500 text-white font-bold">
          Check
        </button>
      </div>
    </div>
  )
}