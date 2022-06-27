import Avatar from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import Link from 'next/link'

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  heroImg = coverImage?.node.sourceUrl ? coverImage?.node.sourceUrl : "https://xeroblogwp.devt/wp-content/uploads/2019/01/image1.png"
}) {
  return (
    <section>
      <div className="mb-4 md:mb-4" style={{
                    backgroundImage: "url(" + heroImg + ")",
                    width: "100%",
                    height: "70vh",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                  }}>
                  
      </div>
      {/* <div className="mb-8 md:mb-16">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div> */}
      <div className="md:grid md:grid-cols-1 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/posts/${slug}`}>
              <a
                className="text-grey hover:text-sky-400"
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          <div
            className="text-lg leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Avatar author={author} />
        </div>
      </div>
    </section>
  )
} ()=>{console.log(coverImage)}
