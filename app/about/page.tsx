import Link from "next/link";

export default function About() {
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
      <h3 className="text-center font-bold text-red-600 p-4 text-lg bg-gray-300">About Me</h3>
      <div className=" border-4 border-solid border-black m-20 p-6 w-[300px]  leading-relaxed  ">
        <h3>Father&apos;s name: Syed Naseem Uddin</h3>
        <h3>Nationality: Pakistani</h3>
        <h3>Date of Birth: 5-march-2006</h3>
        <h3>Religious: Islam</h3>
      </div>
    </div>
  );
}