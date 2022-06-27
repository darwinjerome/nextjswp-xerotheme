import { CMS_NAME, CMS_URL } from '../lib/constants'
import Image from 'next/image'

export default function Intro() {
  return (
    <section className="headerTitle">
      <a href='/' className="flex my-5 gap-x-5">
        <div className="flex-none w-14 h-30">
          <Image
            width={90}
            height={90}
            src="https://xeroblogwp.devt/wp-content/uploads/2016/08/nav-logo.svg"
            />
        </div>
      
        <h1 className="text-6xl md:text-6xl font-300 font-['National-Light'] tracking-tighter leading-tight grow h-30">
          Xero Blog
        </h1>
      </a>
    </section>
  )
}
