import Link from "next/link";

export default function Contact() {
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
      <h3 className="text-center font-bold text-red-600 p-4 text-lg bg-gray-300">Contact Me</h3>
      <div className=" border-4 border-solid border-black m-20 p-6 w-[300px]  leading-relaxed">
        <h3>Email:alishbanasem345@gmail.com
          <br />
          Phone Number: 0312567894 | 0312567887
          <br />
          Linkdin profile: <a href="https://www.linkedin.com/in/syeda-alishba-2826112b6"  target="_blank">Syeda Alishba</a>
          <br />
          GitHub profile: <a href="https://github.com/AlishbaNasim"  target="_blank"> AlishbaNasim</a>
        </h3>
      </div>
    </div>
  );
}