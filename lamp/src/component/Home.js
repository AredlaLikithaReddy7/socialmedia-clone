import trending from '../images/trending.png'
import coming_soon from '../images/coming_soon.png'
import followers from '../images/followers.png'
import following from '../images/following.png'
import login from '../images/login.png'
import register from '../images/register.png'
import chat from '../images/chat.png'
import hashtag from '../images/hashtag.png'
import profile from '../images/profile.png'
import post from '../images/post.png'
import videos from '../images/videos.png'
import join from '../images/join.png'
import contact from '../images/contact.png'
import donate from '../images/donate.png'
import settings from '../images/settings.png'
import score from '../images/score.png'
import share from '../images/share.png'
import groups from '../images/groups.png'
import completed from '../images/completed.png'
import pending from '../images/pending.png'
import Creaters from './Creaters'
import Knowmore from './Knowmore'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Header from '../component/Header'
function Home() {
  
  return (
    <div className="all_links">
    
      <Header/>
      <h1 className='text-center'>This Is Us:</h1>
                        <div className="row align-content-center">
                               <div className="col-3 one ">
                               <img src={trending} className="w-50 d-block mx-auto"></img>
                            <a href='/Trendingnews'><button className='btn1 w-50 d-block mx-auto'>Trending</button></a>
                               </div>
                               <div className="col-3 one"><img src={coming_soon} className="w-50 d-block mx-auto"></img>
                               <button className='btn2 w-50 d-block mx-auto' to="/Global_chat">coming soon</button>
                               </div>
                               <div className="col-3 one">  <img src={followers} className="w-50 d-block mx-auto"></img> <button className='btn3 w-50 d-block mx-auto'>followers</button></div>
                               <div className="col-3 one"> <img src={following} className="w-50 d-block mx-auto"></img> <button className='btn4 w-50 d-block mx-auto'>following</button></div>

                        </div>
                        <div className="row align-content-center mt-2">
                                 <div className="col-3 one"><img src={login} className="w-50 d-block mx-auto"></img><a href="/Login"><button className='btn5 w-50 d-block mx-auto'>login</button></a></div>
                                 <div className="col-3 one"> <img src={register} className="w-50 d-block mx-auto"></img><a href='/Register'> <button className='btn6 w-50 d-block mx-auto'>register</button></a></div>
                                 <div className="col-3 one"> <img src={chat} className="w-50 d-block mx-auto"></img> <button className='btn7 w-50 d-block mx-auto'>chat</button></div>
                                 <div className="col-3 one"> <img src={hashtag} className="w-50 d-block mx-auto"></img> <a href='/Hashtag'><button className='btn8 w-50 d-block mx-auto'>hashtag</button></a></div>
                        </div>
                        <div className="row align-content-center mt-2">
                           <div className="col-3 one"><img src={profile} className="w-50 d-block mx-auto"></img> <button className='btn9 w-50 d-block mx-auto'>profile</button></div>
                           <div className="col-3 one"><img src={post} className="w-50 d-block mx-auto"></img> <button className='btn10 w-50 d-block mx-auto'>post</button></div>
                           <div className="col-3 one"><img src={videos} className="w-50 d-block mx-auto"></img> <a href='/Trendingnews'><button className='btn11 w-50 d-block mx-auto'>Trending News</button></a></div>
                           <div className="col-3 one"><img src={join} className="w-50 d-block mx-auto"></img> <button className='btn12 w-50 d-block mx-auto'>join</button></div>
                        </div>
                       
                        <div className="row align-content-center mt-2">
                        <div className="col-3 one"><img src={score} className="w-50 d-block mx-auto"></img> <button className='btn13 w-50 d-block mx-auto'>score</button></div>
                        <div className="col-3 one"><img src={groups} className="w-50 d-block mx-auto"></img> <button className='btn14 w-50 d-block mx-auto'>groups</button></div>
                        <div className="col-3 one"><img src={completed} className="w-50 d-block mx-auto"></img> <button className='btn15 w-50 d-block mx-auto'>completed</button></div>
                        <div className="col-3 one"><img src={pending} className="w-50 d-block mx-auto"></img> <button className='btn16 w-50 d-block mx-auto'>pending</button></div>
                        </div>
                        <div className="row align-content-center mt-2 mb-4">
                        <div className="col-3 one"><img src={contact} className="w-50 d-block mx-auto"></img> <button className='btn17 w-50 d-block mx-auto'>contact</button></div>
                        <div className="col-3 one"><img src={donate} className="w-50 d-block mx-auto"></img><a href='/Donate'><button className='btn18 w-50 d-block mx-auto'>donate</button></a> </div>
                        <div className="col-3 one"><img src={settings} className="w-50 d-block mx-auto"></img> <button className='btn19  w-50 d-block mx-auto'>settings</button></div>
                        <div className="col-3 one"><img src={share} className="w-50 d-block mx-auto"></img> <button className='btn20 w-50 d-block mx-auto'>share</button></div>
                        </div>
                    
                        <Knowmore/>
              <Creaters/>       

                </div> 
              
  )
}

export default Home