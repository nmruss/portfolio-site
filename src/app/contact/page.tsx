import Link from "next/link"

export default function Contact() {
  return (
    <div className="flex flex-row text-black justify-center align-items">
      <div className="flex justify-center align-middle flex-col my-20 mx-10">
          <h1 className="text-xl">Get in touch with me!</h1>
          <h2 className="mb-2 mt-4"><b>Email: </b><Link className="hover:underline text-blue-600"  href="tel:516-302-5786">nrussotech@gmail.com</Link></h2>
          <h2 className="mb-2"><b>Resume: </b><Link className="hover:underline text-blue-600" target="_blank" href="/nick_russo_resume.pdf">link to pdf</Link></h2>
          <h2 className="mb-2"><b>Github: </b><Link className="hover:underline text-blue-600" target="_blank" href="https://github.com/nmruss">https://github.com/nmruss</Link></h2>
          <h2 className="mb-2"><b>LeetCode: </b><Link className="hover:underline text-blue-600" target="_blank" href="https://leetcode.com/u/russ123/">https://leetcode.com/u/russ123/</Link></h2>
      </div>
    </div>
  );
}
