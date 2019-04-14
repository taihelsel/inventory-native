import React from "react";
import Swipeout from "react-native-swipeout";
/*Components*/
import InventoryListItem from "./InventoryListItem";

export default InventoryListItemSwipeout = ({ buildSwipeoutBtns, data, handleTouch }) => {
    return Object.keys(data).map((k, i) => {
        const btns = buildSwipeoutBtns(k);
        const itemData = data[k];
        return (
            <Swipeout backgroundColor="transparent" right={btns} buttonWidth={90} key={`${itemData.title}-${i}`} >
                <InventoryListItem handleTouch={handleTouch} data={itemData} />
            </Swipeout>
        )
    });
}