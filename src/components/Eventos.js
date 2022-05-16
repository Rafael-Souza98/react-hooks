import Button from "./Button";
function Eventos() {
    function meuEvento() {
        console.log('Ativando primeiro evento')
    }
    
    return (
        <div>
            <p> Clique aqui </p>
            < Button event={meuEvento} text="Primeiro evento"/>
            
        </div>
    )
}
export default Eventos;