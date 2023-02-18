import React , { useEffect, useState }  from 'react'
import './chatstyle.css'
import Weather from '../components/Weather';
function Chat() {
     const [que, setQue] = useState("");
     const [note, setNote] = useState("");

  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const api = {
     key : '693c42663284cc4db93f452bc4c5c546',
     base : 'https://api.openweathermap.org/data/2.5'
  }

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${api.base}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setData(result)
        console.log(result);
      });
    }
    fetchData();
  }, [lat,long])
  

     const SendBtn = () => {
          //waking up the shiki using this command
          if (que === "/wakeup") {
               document.getElementById('answer-txt').style.display="block"; 
               document.getElementById('demo2').innerHTML = "hello world im happy to see you how can i help you! and if it your first time using me please make sure you read the help section using '/help'"
               document.getElementById('demo2').style.color = "white"; 
               
          }

          //Getting Help command
         else if (que === "/help") {
          document.getElementById('answer-txt').style.display="block"; 
          document.getElementById('demo2').innerHTML = "you can reset everything using '/reset' // use /wakeup to start chatinguse /help to get more information about how to use shiki // use /info to get more information about shiki // use /givewheather to get your locations weather // use /givedate to get your locations date and time // for taking notes you can use '/takenote' command // for show your last note you can use 'shownote'"
          document.getElementById('demo2').style.color = "white"; 
          
     }
      
     else if (que === "/takenote") {
      document.getElementById('answer-txt').style.display="block"; 
      document.getElementById('demo2').innerHTML = "note seccusfully saved"
      document.getElementById('demo2').style.color = "white";
     }
     else if (que === "/shownote") {
      document.getElementById('answer-txt').style.display="block"; 
      document.getElementById('demo2').innerHTML = note
      document.getElementById('demo2').style.color = "white";
     }

     //this command show you your locations weather
        else if (que === "/giveweather") {
          document.getElementById('answer-txt').style.display="block";
        document.getElementById('demo2').innerHTML =Weather.main.temp;
        document.getElementById('demo2').style.color = "white";
      
     }
 

     else if (que === "/reset"){
      document.getElementById('answer-txt').style.display="none"; 
    
     }

     // if theres wrong command
       else {
          document.getElementById('answer-txt').style.display="block";
          document.getElementById('demo2').innerHTML = "aa i dont understand what did you mean make sure you have bean read /help section" 
          document.getElementById('demo2').style.color = "white"; 
         
     }
     
     }
  return (<div>
    
     <div>
             <input type="text" id='inp-chat' placeholder="Chat with me if you need help you can read /help section"  onChange={(e) => setQue(e.target.value)}/>
          <button id='send-btn' onClick={SendBtn}>Send</button>
          <button id='pro-btn'>Shiki pro</button>
          </div>
          </div>
    
  )
}

export default Chat