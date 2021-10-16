import { ItemCount } from "./ItemCount";
import { Title } from "./Title";

export const ItemListContainer = () => {
    return (
        <><div class="ItemListContainer">
            <Title text="Home"/>
            <ItemCount initial={1} stock={10}/>
        </div>
        </>
    );
}