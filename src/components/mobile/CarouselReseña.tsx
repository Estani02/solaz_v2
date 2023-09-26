'use client'
/* eslint-disable react/no-array-index-key */
import type { ItemReview } from '../ReviewCard'

import React from 'react'
import Carousel from 'react-material-ui-carousel'

import ReviewCard from '../ReviewCard'

function CarouselReseña({ itemMap }: { itemMap: ItemReview[] }) {
  return (
    <Carousel
      autoPlay
      fullHeightHover
      indicators
      navButtonsAlwaysInvisible
      animation="slide"
      className="rounded-lg md:hidden"
      duration={400}
      indicatorIconButtonProps={{
        className: 'hover:text-red-900',
      }}
    >
      {itemMap.map((item, index) => (
        <ReviewCard
          key={index}
          avatar={item.avatar}
          detail={item.detail}
          name={item.name}
          start={item.start}
          text={item.text}
        />
      ))}
    </Carousel>
  )
}

export default CarouselReseña
