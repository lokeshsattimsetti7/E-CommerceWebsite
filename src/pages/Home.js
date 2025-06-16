import React, { useState } from "react";
import HeroBanner from '../components/HeroBanner/HeroBanner';
import Flash from '../components/FlashSale/Flash';
import { flashProducts } from "../Data/flashData";
import Category from '../components/Categories/Category';
import BestProducts from '../components/BestProducts/BestProducts';
import MainBannerTwo from '../components/MainBannerTwo/MainBannerTwo';
import Explore from '../components/Explore/Explore';
import Service from '../components/Services/Service';

const Home = () => {
    const [flashData] = useState(flashProducts);

    return (
        <div>
            <HeroBanner />
            <Flash flashData={flashData} />
            <Category />
            <BestProducts />
            <MainBannerTwo />
            <Explore />
            <Service />
        </div>
    );
};

export default Home;
