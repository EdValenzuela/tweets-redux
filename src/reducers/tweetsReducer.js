const initialProps = {
    tweets: []
}

export default (state=initialProps, action) => {
    switch (action.type) {
        case 'ADD_TWEET':
            return{
                ...state,
                tweets: [
                    ...state.tweets,
                    action.payload
                ]
            }
        case 'DELETE_TWEET':
            return{
                ...state,
                tweets: state.tweets.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}