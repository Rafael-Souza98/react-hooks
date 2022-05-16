import { useState } from "react";
function Form() {
    function cadastrarUsuario(e) {
        console.log(name);
        console.log(password)
        e.preventDefault();
        
    }
    

    const [name, setName] = useState();
    const [password, setPassword] = useState();
    return (
        <div>
            <h1>Meu cadastro </h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name" ></label>
                    <input type="text" name="name" id="name" placeholder="Digite o seu nome" 
                    onChange={(e)=> setName(e.target.value)}/>
                </div>
                <div>
                    <input type="password" name="password" id="" placeholder="Digite a senha" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </form>
        </div>
    )
}
export default Form