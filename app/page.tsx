import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h4 className="bg-pink-500 font-bold text-center">Simple Resume</h4>
      <ul className="flex justify-center bg-blue-300">
        <Link href="/"><li className="inline-block m-3"> Home</li></Link>
        <Link href="about"><li className="inline-block m-3">About</li></Link>
      <Link href="skills"> <li className="inline-block m-3">Skills</li></Link> 
        <Link href="education"><li className="inline-block m-3">Education</li></Link>
        <Link href="contact"><li className="inline-block m-3">Contact</li></Link>

      </ul>
      <h3 className="text-center font-bold text-red-600 p-4  bg-gray-300">HOME PAGE</h3>
      <h1 className="pt-40 text-center font-bold text-blue-900 text-7xl">---WELCOME TO MY PROTFOLIO---</h1>
    </div>
  );
}
