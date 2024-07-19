import React from "react";
import Offer from "../Components/Offer/Offer";
import Popular from "../Components/Popular/Popular";
import Banner from "../Components/Banner/Banner";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
    return(
        <div>
            <Offer/>
            <Popular/>
            <Banner/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}

export default Shop