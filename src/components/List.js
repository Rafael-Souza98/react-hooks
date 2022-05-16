
import Item from "./Item";
function List() {
    return (
        <div>
            <h1> Minha Lista </h1>
            <ul>
                <Item marca= "Ferrari" lancamento= {1981}/>
                <Item marca = "Fiat" lancamento= {1964}/>
                <Item marca = "Fiat" />
                <Item marca = "Fiat" />

            </ul>
        </div>
    )
}


export default List;