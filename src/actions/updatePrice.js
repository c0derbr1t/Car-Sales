const UPDATE_PRICE = 'UPDATE_PRICE';

export default updatePrice = item => {
    return { 
        type: UPDATE_PRICE,
        payload: item
     };
};