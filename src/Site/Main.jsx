import { useRef } from 'react';
import Carousel from '../Components/Carousel';
import NavBar from '../Components/NavBar';
import ReviewCard from '../Components/ReviewCard';
import ScrollToTopButton from '../Components/ScrollToTop';
import Fade from '../Components/SlickCarousel';
import WatchCard from '../Components/WatchCard';
import '../css/home.css'
import { featuredWatches, newCollection, products } from '../Data/data';
import outStory from "../Data/Images/story 1.png"
import story2 from "../Data/Images/story 2.png";
import FacebookIcon from '../svg/Facebook';
import InstagramIcon from '../svg/InstagramIcon';
import TwitterIcon from '../svg/Twitter';
import { addWatch } from '../Components/js/functions';

const MainPage = () => {

    const featuredRef = useRef(null);
    const productsRef = useRef(null);
    const newRef = useRef(null);

    return (
        <div>
            <NavBar  featured={featuredRef} products={productsRef} newWatch={newRef}/>
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
                                <button className='b2' onClick={() => addWatch(list.id)}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div ref={featuredRef} id='featuredBox'>
                <div className=' flex flex-col w-full justify-center items-center gap-3'>
                   <div className='divLine'></div>
                   <h3 className='text1'>FEATURED</h3>
                </div>
                <div className=' flex flex-col justify-center items-center gap-10 mt-10'>
                    {featuredWatches.map((list) => {
                        return (
                            <div id='featuredCard'>
                                 <WatchCard name={list.name} sale={true} image={list.Image} price={list.price} product={false} id={list.id} />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div id='ourStoryBox'>
                <div className=' flex flex-col w-full justify-center items-center gap-3'>
                   <div className='divLine'></div>
                   <h3 className='text1'>OUR STORY</h3>
                </div>
                <div className='outStoryInner'>
                    <h2 className='heading1'>
                        Inspirational Watch of 
                        this year
                    </h2>
                    <p className='description1'>
                        The latest and modern watches of this year, is available in various presentations in this store, discover them now.
                    </p>
                    <div>
                        <button className='b3'>
                            Discover
                        </button>
                    </div>
                </div>
                <div id='ourStoryOuterBox'>
                    <div id='ourStoryImageBox1'>
                        <div id='outStoryInnerBox1'>
                            <img src={outStory} alt="" />
                        </div>
                        <div id='outStoryInnerBox2'></div>
                    </div>
                </div>
            </div>
            <div ref={productsRef} id='productsBox'>
                <div className=' flex flex-col w-full justify-center items-center gap-3'>
                   <div className='divLine'></div>
                   <h3 className='text1'>PRODUCTS</h3>
                </div>
                <div className=' w-full justify-center flex'>
                <div id='productsListBox'>
                    {products.map((product) => {
                        return (
                            <div id='cardProduct'>
                                <WatchCard name={product.name} image={product.Image} price={product.price} product={true} id={product.id} />
                            </div>
                        );
                    })}
                </div>
                </div>
                <div id='commentBox'>
                    <div id='commentInner'>
                        <Carousel />
                    </div>
                </div>
                <div id='ProductsImageOuterBox'>
                    <div id='ProductsImageImageBox1'>
                        <div id='ProductsImageInnerBox1'>
                            <img src={story2} alt="" />
                        </div>
                        <div id='ProductsImageInnerBox2'></div>
                    </div>
                </div>
            </div>
            <div ref={newRef} id='newArrivalsBox'>
                <div className=' flex flex-col w-full justify-center items-center gap-3'>
                   <div className='divLine'></div>
                   <h3 className='text1'>NEW ARRIVALS</h3>
                </div>
                <div id='newCard'>
                    <Fade />
                </div>
            </div>
            <div id='newsletterBox'>
                <div id='newsletterInner'>
                    <h3>Subscribe Our <br/> Newsletter</h3>
                    <p>Don't miss out on your discounts. Subscribe to our email newsletter to get the best offers, discounts, coupons, gifts and much more.</p>
                    <input type="text" placeholder='disabeld' disabled={true} />
                    <button className='b5'>SUBSCRIBE</button>
                </div>
            </div>
            <div id='linksBox'>
                <div className='linksInner'>
                    <h4>Our information</h4>
                    <ul>
                        <li>1234 - Peru</li>
                        <li>La Libertad 43210</li>
                        <li>123-456-789</li>
                    </ul>
                </div>
                <div className='linksInner'>
                    <h4>About Us</h4>
                    <ul>
                        <li>Support Center</li>
                        <li>Customer Support</li>
                        <li>About Us</li>
                        <li>Copy Right</li>
                    </ul>
                </div>
                <div className='linksInner'>
                    <h4>Product</h4>
                    <ul>
                        <li>Road bikes</li>
                        <li>Mountain bikes</li>
                        <li>Electric</li>
                        <li>Accesories</li>
                    </ul>
                </div>
                <div className='linksInner'>
                    <h4>Social</h4>
                    <div>
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                    </div>
                </div>
            </div>
            <div id='copyrightBox'>
                <div></div>
                <span>&copy; Bedimcode. All rights reserved</span>
            </div>
            <ScrollToTopButton />
        </div>
    )
}

export default MainPage;