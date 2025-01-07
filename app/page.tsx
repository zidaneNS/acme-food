import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black px-10 py-8">
      <section className="flex flex-col justify-center bg-gradient-to-r from-orange-500 to-yellow-400 h-fit rounded-lg py-12 px-6 text-white mb-4">
        <h2 className="text-4xl font-bold">Acme Food</h2>
        <p className="">Fill your day With Acme</p>
      </section>
      <section className="flex flex-col-reverse md:grid grid-cols-2 gap-4">
        <div className="bg-yellow-500/5 rounded-xl py-4 px-4 flex flex-col justify-between">
          <p className="text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, obcaecati!</p>
          <div className="flex flex-col items-center px-2 mt-4 gap-y-4">
            <button className="py-2 px-4 rounded-xl text-lg bg-blue-500 text-white w-full hover:bg-blue-400 transtition duration-300">Sign In</button>
            <Link href="/home" className="py-2 px-4 rounded-xl text-lg w-full bg-slate-600 text-white hover:bg-slate-500 transtition duration-300 text-center">Continue as Guest</Link>
            
          </div>
        </div>
        <div className="flex items-center">
          <Image
            src="/hero-desktop.jpg"
            alt="Food Photo"
            width={1200}
            height={800}
            className="hidden md:block rounded-xl"
          />
          <Image
            src="/hero-mobile.jpg"
            alt="Food Photo"
            width={640}
            height={427}
            className="block md:hidden"
          />
        </div>
      </section>
    </main>
  );
}
