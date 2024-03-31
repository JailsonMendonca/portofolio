import React from 'react'
import Image from 'next/image'

const hero = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image src={"/image/foto.jpg"} 
            width="192"
            height="192"
            quality="95"
            alt='foto'
            priority={true}
            className="h-48 w-48 rounded-full
              object-cover shadow-xl
              border-[0.35rem] border-white"
          />
          <span className="absolute bottom-4 right-4  text-5xl"
          >
            👋
          </span>
        </div>
        <div>

        </div>
      </div>
    </section>
  )
}

export default hero