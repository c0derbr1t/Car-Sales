const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const removeFeature = item => {
    return { 
        type: REMOVE_FEATURE,
        payload: item
    };
};