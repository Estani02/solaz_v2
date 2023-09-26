import Image from 'next/image'
import React from 'react'
import StarIcon from '@mui/icons-material/Star'

export interface ItemReview {
  avatar: string
  name: string
  detail: string
  start: number
  text: string
}

function ReviewCard(props: ItemReview) {
  const starts = []

  for (let i = 1; i <= 5; i++) {
    starts.push(<StarIcon fontSize="small" />)
  }

  return (
    <div className="flex h-[240px] w-full max-w-sm flex-col gap-2 rounded-lg bg-white p-5 text-black">
      <div className="flex items-center gap-2">
        <div>
          <Image alt="_" height={32} src={props.avatar} width={32} />
        </div>
        <div className="flex flex-col">
          <p>{props.name}</p>
          <p className="text-sm text-[#70757A]">{props.detail}</p>
        </div>
      </div>
      <div className="flex  text-yellow-400">{starts}</div>
      <p className="line-clamp-5">{props.text}</p>
    </div>
  )
}

export default ReviewCard
