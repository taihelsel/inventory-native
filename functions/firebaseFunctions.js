export const db_uploadInventoryItem = ({ itemData, firebase, shopId }) => {
    const database = firebase.database();
    const dbInsert = {};
    dbInsert[itemData.barcode] = { ...itemData };
    const inventoryItemsRef = database.ref(`/shops/${shopId}/inventoryItems/`);
    inventoryItemsRef.update(dbInsert);
}
export const db_removeInventoryItem = ({ barcode, shopId, firebase }) => {
    const database = firebase.database();
    database.ref(`/shops/${shopId}/inventoryItems/${barcode}`).remove();
}
export const db_updateInventoryItem = ({ firebase, shopId, oldBarcode, itemData }) => {
    const database = firebase.database();
    if (oldBarcode !== itemData.barcode) {
        //remove existing item from db. create new item with new key
        db_removeInventoryItem({ barcode: oldBarcode, firebase, shopId });
        db_uploadInventoryItem({ itemData, firebase, shopId });
    } else {
        //key is the same. update existing item in db.
        const inventoryItemRef = database.ref(`/shops/${shopId}/inventoryItems/${oldBarcode}`)
        inventoryItemRef.set({ ...itemData });
    }
}