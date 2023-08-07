const Cart = () => {
    let monsteraPrix = 8;
    let lierrePrix = 10;
    let bouquetFleurPrix = 15;

    return (
        <>
        <ul>
            <li>Monstera : {monsteraPrix}</li>
            <li>Lierre : {lierrePrix}</li>
            <li>Bouquet de fleurs : {bouquetFleurPrix}</li>
        </ul>
        <h4>Prix total du panier : {monsteraPrix + lierrePrix + bouquetFleurPrix} €</h4>
        </>
    )
}

export default Cart;