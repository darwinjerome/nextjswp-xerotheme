import Link from 'next/link'
import { CMS_TITLE } from '../lib/constants'
export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-300 tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/">
        <a className="hover:underline font-300 font-['National-Light']">{CMS_TITLE}</a>
      </Link>
    </h2>
  )
}
