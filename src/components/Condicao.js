import {  useEffect, useState } from "react";

function Condicao() {
   
const[email,setEmail] = useState('');
const [password, setPassword] = useState('');


useEffect(() => {
    console.log(email)
}, [email]);

useEffect(() => {
    console.log(password)
}, [password]);




const handleEnter = () => {
    console.log(email);
    console.log(password);
    
}
    return(
        <div>
            <form>
              <input type="email" id="email" placeholder="Enter e-mail" value={email} onChange ={e => setEmail(e.target.value)}/>
              <p>
                  <input type="password" id="password" placeholder="Enter password" value={password} onChange ={e => setPassword(e.target.value)}/>
             </p>
              <input type="button" value="Send" onClick={handleEnter} />
            {email && (
                <div>
                    <p>{email} </p>
                </div>
            )}
        
            </form>  
        </div>
    )

}
export default Condicao;