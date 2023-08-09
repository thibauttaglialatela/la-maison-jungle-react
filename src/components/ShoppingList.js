import { plantList } from "../datas/plantList"

/* À partir de cette liste de plantes, vous devrez :

Constituer une nouvelle liste de manière dynamique qui extrait les catégories uniques de plantes (que nous utiliserons également plus tard). 

Il existe plusieurs solutions pour créer une liste d'éléments uniques, mais je vous conseille de vous pencher sur la méthode reduce()  ou bienforEach().

Afficher la liste des catégories de plantes au-dessus de la liste des plantes à vendre. */

const uniqueCategoriesSet = new Set();
plantList.forEach(plant => {
    uniqueCategoriesSet.add(plant.category);
});
const uniqueCategory = [...uniqueCategoriesSet];

function ShoppingList() {
    return (
        <>
        <h3>Les categories de plantes</h3>
        <ul>
            {uniqueCategory.map((category, index) => (
                <li key={index}>{ category }</li>
            ))}
        </ul>
        <h3>Liste des plantes</h3>
        <ul>
            {plantList.map((plant, index) => (
                <li key={ plant.id}>{ plant.name } { plant.isBestSale && <span>'🔥'</span> }</li>
            ))}
        </ul>
        </>
    )
}

export default ShoppingList

