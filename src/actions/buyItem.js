const BUY_ITEM = 'BUY_ITEM';

export const buyItem = item => {
    return { 
        type: BUY_ITEM,
        payload: item
     };
};