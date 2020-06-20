const postOld = {
    id          :'',
    postTitle   :'',
    image       :'',
    short       :'',
    time        :'',
    author      :'',
    accepted    :'',
    tags        :'',
    facebook    :'',
    instagram   :'',
    googleplus  :'',
}
const editPostReducer = (state = postOld, action) => {
    switch (action.type) {
        case 'EDIT_POST':
            state = action.postData;
            return state
        
        case 'UPDATE_POST':
            state = action.postDataNew;
            console.log(action.postDataNew);
            
            return state
        
        default:
            return state
    }
}

export default editPostReducer;