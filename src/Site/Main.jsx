import '../css/home.css'
import { useRef, useState } from 'react';
import Carousel from '../Components/Carousel';
import NavBar from '../Components/NavBar';
import ScrollToTopButton from '../Components/ScrollToTop';
import Fade from '../Components/SlickCarousel';
import WatchCard from '../Components/WatchCard';
import { featuredWatches, mergedArray, newCollection, newWatches, products } from '../Data/data';
import outStory from "../Data/Images/story 1.png"
import story2 from "../Data/Images/story 2.png";
import FacebookIcon from '../svg/Facebook';
import InstagramIcon from '../svg/InstagramIcon';
import TwitterIcon from '../svg/Twitter';
import { addWatch } from '../Components/js/functions';
import RotateDevice from '../svg/RotateDevice';

// The main website that is being displayed
const MainPage = () => {
    const [buttonColor, setButtonColor] = useState("#FFFFFF");

    // references used for the scrolling to functions
    const featuredRef = useRef(null);
    const productsRef = useRef(null);
    const newRef = useRef(null);

    // add to Cart function that is being used only for the first product on the new collection section
    const addCart = (id, event) => {
        const watchesCart = JSON.parse(localStorage.getItem('watches')) || [];
        const matchedWatches = watchesCart
            .map(cartItem => {
                const watch = mergedArray.find(watch => watch.id === cartItem.id);
                return watch ? { ...watch, amount: cartItem.amount } : null;
            })
            .filter(Boolean);
    
        newCollection.forEach((item) => {
            const watch = matchedWatches.find(item => item.id === id);
    
            if (watch && watch.amount > 2) {
                setButtonColor("#ff7658");
                console.log("no");
            } else {
                addWatch(id);
                setButtonColor("var(--primary-homeImageBox-color)");
                console.log("ok");
    
                setTimeout(() => {
                    setButtonColor("#FFFFFF");
                }, 300);
            }
        });
    };

    return (
        <>
            <div id='siteBox'>
            {/* navigation bar located at the top of the screen */}
            <NavBar featured={featuredRef} products={productsRef} newWatch={newRef}/>
            
            {/* the first selection (new colletion) being mapped out from the fake data */}
            {newCollection.map((list) => {
                return (
                    <div id='firstBox' className='flex justify-center items-center gap-7' key={list.id}>
                        <div id='SocialBox2'>
                            <button>Facebook</button>
                            <button>Twitter</button>
                            <button>Instagram</button>
                          </div>
                        <div id='innerDiv' className='flex justify-end'>
                          <div id='SocialBox'>
                            <button>Facebook</button>
                            <button>Twitter</button>
                            <button>Instagram</button>
                          </div>
                          <div id='homeImageBox'>
                            <div id='imageBox'>
                               <img src={list.image} alt="" />
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
                                <button className='b2' style={{color: buttonColor}} onClick={() => addCart(list.id)}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* second section (featured products) also being mapped out from the fake data */}
            <div ref={featuredRef} id='featuredBox'>
                <div className=' flex flex-col w-full justify-center items-center gap-3'>
                   <div className='divLine'></div>
                   <h3 className='text1'>FEATURED</h3>
                </div>
                <div id='featuredBoxInner' className=' flex justify-center gap-10 items-center mt-10'>
                    {featuredWatches.map((list) => {
                        return (
                            <div id='featuredCard'>
                                 <WatchCard name={list.name} sale={true} image={list.Image} price={list.price} product={false} id={list.id} />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* third section (Our Story) hardcoded fake details */}
            <div id='ourStoryBox'>
                <div id='ourStoryBoxInner'>
                <div id='ourStory1' className=' flex flex-col w-full justify-center items-center gap-3'>
                   <div className='divLine'></div>
                   <h3 className='text1'>OUR STORY</h3>
                </div>
                <div className='ourStoryInner'>
                    <div id='ourStory2'>
                       <div className='divLine'></div>
                       <h3 className='text1'>OUR STORY</h3>
                    </div>
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

            {/* fourth section (Products) that are being mapped out from the fake data array */}
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

                {/* fifth section (Comments) that are nested inside of the products section elements */}
                <div id='commentsBoxOuter'>
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
                {/* fifth */}

            </div>
            {/* fourth */}

            {/* sixth section (New Arrivals) which has mapped out fake data */}
            <div ref={newRef} id='newArrivalsBox'>
                <div className=' flex flex-col w-full justify-center items-center gap-3'>
                   <div className='divLine'></div>
                   <h3 className='text1'>NEW ARRIVALS</h3>
                </div>
                {/* if the user is on mobile view display the elemnts as a carusel component (controlled by hiding the element in css on smaller screens */}
                <div id='newCard'>
                    <Fade />
                </div>
                {/* if the user is on desktop view display the elemnts as mapped out card all at once (controlled by hiding the element in css on smaller screens  */}
                <div id='desktopNew'>
                {newWatches.map((item) => {
                    return (
                        <div id='newCard2'>
                            <WatchCard image={item.Image} price={item.price} name={item.name} newW={true} id={item.id} />
                        </div>
                    );
                })}
                </div>
            </div>

            {/* seventh section (News Letter) that has a fake news letter sign up forum inside*/}
            <div id='newsletterBox'>
                <div id='newsletterInner'>
                    <div id='newsDiv1' className='flex flex-col w-full'>
                        <h3>Subscribe Our <br/> Newsletter</h3>
                        <p>Don't miss out on your discounts. Subscribe to our email newsletter to get the best offers, discounts, coupons, gifts and much more.</p>
                    </div>
                    <div id='newsDiv2' className='flex flex-col w-full'>
                        <input type="text" placeholder='disabeld' disabled={true} />
                        <button className='b5'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        
            {/* eigth section (siteLinks and detils) which is fake data which has been hardcoded */}
            <div id='linksBox'>
                <div className='linksOuter'>
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
            </div>
            <div id='copyrightBox'>
                <div></div>
                <span>&copy; Bedimcode. All rights reserved</span>
            </div>
            <ScrollToTopButton />
        </div>
        <div id='phoneRotateDiv'>
            <RotateDevice />
        </div>
        </>
    )
}

export default MainPage;