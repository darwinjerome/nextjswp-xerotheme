import Image from 'next/image'

export default function Avatar({ author }) {
  const name = author
    ? author.node.firstName && author.node.lastName
      ? `${author.node.firstName} ${author.node.lastName}`
      : author.node.name
    : null

  return (
    <div className="flex items-center mb-4">by 
      {/* <div className="w-6 h-6 relative mr-4 mx-2">
        <Image
          src={author.node.avatar.url}
          layout="fill"
          className="rounded-full"
          alt={name}
        />
      </div> */}
      <div className="text-xl font-bold mx-2">{name}</div>
    </div>
  )
}
