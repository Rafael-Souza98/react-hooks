import PropTypes from 'prop-types'
function Item({marca, lancamento}) {
    return (
        <>
        <li>{marca} - {lancamento}</li>
        </>
    )
}

Item.prototype = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: 'Faltou colocar a marca',
    lancamento: 1981,

}

export default Item