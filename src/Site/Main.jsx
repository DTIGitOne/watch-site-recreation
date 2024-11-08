import NavBar from '../Components/NavBar';
import WatchCard from '../Components/WatchCard';
import '../css/home.css'
import { featuredWatches, newCollection } from '../Data/data';

const MainPage = () => {
    return (
        <div>
            <NavBar />
            {newCollection.map((list) => {
                return (
                    <div className='flex flex-col justify-center items-center gap-7' key={list.id}>
                        <div className='flex justify-end'>
                          <div id='SocialBox'>
                            <button>Facebook</button>
                            <button>Twitter</button>
                            <button>Instagram</button>
                          </div>
                          <div id='homeImageBox'>
                            <div id='imageBox'>
                               <img src={list.Image} alt="" />
                            </div>
                          </div>
                        </div>
                        <div id='TopDiv'>
                            <h1 id='titleTop'>{list.text}</h1>
                            <p id='descriptionText'>{list.desctiption}</p>
                            <div id='priceBox' className=' w-full'>
                                <h2>${list.price}</h2>
                            </div>
                            <div className=' mt-11 w-full'>
                                <button className='b1' disabled>Discover</button>
                                <button className='b2'>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div id='featuredBox'>
                <div className=' flex flex-col w-full justify-center items-center gap-3'>
                   <div className='divLine'></div>
                   <h3 className='text1'>FEATURED</h3>
                </div>
                <div className=' flex flex-col justify-center items-center gap-10 mt-10'>
                    {featuredWatches.map((list) => {
                        return (
                            <WatchCard name={list.name} image={list.Image} price={list.price} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default MainPage;