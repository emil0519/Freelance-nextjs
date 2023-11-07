import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <main className="text-black"><h1 className="text-light-green">Hello world</h1>
    
    <Link href="/users">Go to users</Link></main>
  )
}
