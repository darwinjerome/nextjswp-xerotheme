import Container from './container'
import { EXAMPLE_PATH, CMS_NAME, CMS_TITLE } from '../lib/constants'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="footer-top py-10 flex flex-col lg:flex-row items-center">
          <div className="lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/12">
            <Image
              width={70}
              height={70}
              src="https://xeroblogwp.devt/wp-content/uploads/2016/08/nav-logo.svg"
              />
          </div>
          <div className="lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-6/12">

            <h3 className="text-4xl lg:text-5xl font-100 tracking-tighter leading-tight text-left ">
              {CMS_TITLE}
            </h3>
            <div className="text-1xl lg:text-1xl font-100 tracking-tighter leading-tight text-left">
              {CMS_NAME}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-end items-right lg:pl-4 lg:w-5/12">
            <a href="https://www.xero.com/signup/" className="button-footer">
              Try Xero for free
            </a>
          </div>
        </div>
        <div className="footer-bottom py-10">
            © 2022 Xero Limited. All rights reserved. "Xero" and "Beautiful business" are trademarks of Xero Limited.
        </div>
      </Container>
    </footer>
  )
}
