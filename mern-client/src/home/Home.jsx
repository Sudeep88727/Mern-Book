import React from 'react'
import Banner from '../Components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import OtherBooks from './OtherBooks'
import PromoBanner from './PromoBanner'
import Review from './review'
function Home() {
  return (
    <div>
      <Banner />
      <BestSellerBooks />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      <Review />

    </div>
  )
}

export default Home