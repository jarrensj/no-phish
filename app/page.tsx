import Image from 'next/image'
import Tool from '../components/Tool'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">no-phish</h1>
      <p className="text-xl mt-2">
        A simple phishing detection tool. Paste the link below to get started.
      </p>
      <Tool />
      <footer className="mt-8">
        <Link 
          href="https://github.com/jarrensj/no-phish"
          className="text-blue-600 hover:underline"
          target="_blank" 
        >
          GitHub Repo
        </Link>
      </footer>
    </main>
  )
}
