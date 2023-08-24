import "./Home.css";
import Product from "./Product";
const homeImg = "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/MFD/Aug/BOB/Deals-Unrec-PC-3000-1-min._CB596646459_.png";

function Home() {
    return(
        <div className="home">
            <div className="home__container">
                <img className="home__image" src={homeImg}></img>

                <div className="home__row">
                    
                    <Product 
                    title='Bheem Ki Chaddi'
                    price={9990}
                    img={'https://m.media-amazon.com/images/I/61W5d4LSr+L._AC_UL400_.jpg'}
                    rating={5}
                    />

                    <Product 
                    title='Raju ki wig'
                    price={99990}
                    img={'https://m.media-amazon.com/images/I/51FpJyOpJFL._AC_UL400_.jpg'}
                    rating={3}
                    />
                </div>


                <div className="home__row">

                <Product 
                    title='Chutki ki sindoor'
                    price={999}
                    img={'https://m.media-amazon.com/images/I/711+d6lqjaL._AC_UL400_.jpg'}
                    rating={5}
                    />

                <Product 
                    title='Kichak ka balla'
                    price={90}
                    img={'https://m.media-amazon.com/images/I/71z8b0IJFML._AC_UL400_.jpg'}
                    rating={2}
                    />

                <Product 
                    title='Kirmada Ka Hathoda'
                    price={999990}
                    img={'https://m.media-amazon.com/images/I/51wIbn2HUtL._AC_UL400_.jpg'}
                    rating={1}
                    />

                </div>


                <div className="home__row">
                <Product 
                    title='Indumati ki Angoothi'
                    price={9999999990}
                    img={'https://m.media-amazon.com/images/I/31zXhlRKgeL._AC_UL400_.jpg'}
                    rating={8}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;