/* eslint-disable react/no-array-index-key */
import React from 'react'

import { Reseñas } from '@/assets/Reseñas'

import ReviewCard from './ReviewCard'

function Review() {
  return (
    <div className="hidden w-full justify-between gap-3 md:flex">
      {Reseñas.map((item, index) =>
        index < 3 ? (
          <ReviewCard
            key={index}
            avatar={item.avatar}
            detail={item.detail}
            name={item.name}
            start={item.start}
            text={item.text}
          />
        ) : null,
      )}
    </div>
  )
}

export default Review
