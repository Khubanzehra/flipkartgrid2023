import React from 'react';
import './Chat.css'
import f from "./images/f.png";
import mike from "./images/mike.png";
import gal from "./images/gal.png";
import ai from "./images/ai.png";
import message from "./images/message.png";



function Chat(){

    return(
        <div>

        
        <div className='navi'>
           
            
            

         </div>
         
         <div className="maincomp">
                
         
         <div className="leftComp">
            <h1 className='head'>History</h1>
            <div className="history1">
            <img className='mess1' src={message} alt="elec" />
                    <p className='rp1'>One day ago</p>
                    <p className='rp2'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="history1">
            <img className='mess2' src={message} alt="elec" />
                    <p className='rp1'>Two days ago</p>
                    <p className='rp2'>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="history1">
            <img className='mess3' src={message} alt="elec" />
                    <p className='rp1'>One week ago</p>
                    <p className='rp2'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="history1">
            <img className='mess4' src={message} alt="elec" />
                    <p className='rp1'>One month ago</p>
                    <p className='rp2'>Lorem ipsum dolor sit amet.</p>
            </div>
         </div>

         <div className="rightcomp">
            <div className="highest">
            <img className='chatbot' src={ai} alt="elec" />
                <div className="chat1">
                
                           <p>Hello 👋! </p>
                           <p>I am flipbot , your friendly AI assistant. I will help you in selecting the right choice. Feel free to chat with me about anything</p> 
                           <p>Are you male or female?</p>    
                </div>
                <div className="chat2">
                        <p>Hi,Female</p>
                </div>
                <img className='chatbot2' src={ai} alt="elec" />
                <div className="chat1">
                <p>Do you want party wear?</p>  
                </div>
                <div className="chat2">
               <p>Yes, I need a dress for the occasion of Karwa Chauth,Dress should be red in colour,ethic and preferably a saree</p>
                </div>
                <img className='chatbot3' src={ai} alt="elec" />
                <div className="chat1">
                <p>Here are few results based on your demand</p>  
                </div>
                
            </div>
            <div className="lowest">
            <img className='gal' src={gal} alt="elec" />

                <img className='mike' src={mike} alt="elec" />
                 <input type="text " className='inputr' placeholder='Ask something!' />
                 <button className='btn'> Send</button>
            </div>
         
         </div>
         </div>
     </div>
        
        
    );
}
export default Chat;