import React from 'react'
import type { SanityImageType } from '../../../typings/footer'

type SanityImg = {
  src: string | SanityImageType
  alt?: string
  className?: string
  height?: string | number
  width?: string | number
}

const SanityImage = ({ src, ...props }: SanityImg) => {

  if (typeof src === 'string') return <img src={src} {...props} />


  const imgData = src.asset._ref.split("-")

  const url = `https://cdn.sanity.io/images/o2jl7jfz/production/${imgData[1]}-${imgData[2]}.${imgData[3]}`

  return (
    <img src={url} {...props} />
  )
}

export default SanityImage