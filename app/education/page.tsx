import Link from "next/link";

export default function Education() {
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
      <h3 className="text-center font-bold text-red-600 p-4 text-lg bg-gray-300">Education</h3>
      <div className=" border-4 border-solid border-black m-20 p-6 w-[600px]  leading-relaxed" >
        <h3>1.Matriculation in Science from Board of Sindh Education Karachi with 90%<br />
          2.Intermediate in Commerce from Board of Intermediate Education karachi.<br />
          3.Dimploma in Generative AI from Governor Sindh Initiative (Continue).</h3>
      </div>

    </div>
  );
}