import { ItemList } from "./ItemList";
import { Title } from "./Title";

export const ItemListContainer = () => {
    return (
        <><div class="ItemListContainer">
            <Title text="Home"/>
            <ItemList/>
        </div>
        </>
    );
}