import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">no-phish</h1>
      <p className="text-xl mt-2">
        A simple phishing detection tool. Paste the link below to get started.
      </p>
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
    </main>
  )
}
