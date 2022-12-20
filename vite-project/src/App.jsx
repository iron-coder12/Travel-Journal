import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';;


    export default function App() {
            return (
                <>
                <Navbar />
                <Card 
                    img="https://source.unsplash.com/WLxQvbMyfas"
                    country="JAPAN"
                    locationName="Mount Fuji"
                    date="12 Jan, 2021 - 24 Jan, 2021"
                    description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
                />
                <Card 
                    img="https://source.unsplash.com/JmuyB_LibRo"
                    country="AUSTRALIA"
                    locationName="Sydney Opera House"
                    date="27 May, 2021 - 8 Jun, 2021"
                    description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
                />
                <Card 
                    img="https://source.unsplash.com/3PeSjpLVtLg"
                    country="NORWAY"
                    locationName="Geirangerfjord"
                    date="01 Oct, 2021 - 18 Nov, 2021"
                    description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
                />
                <br />
                </>
            )  
}