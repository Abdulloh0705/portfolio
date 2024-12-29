

const initialState ={
    order: '', 
    limit: 6,
    offdet: 0,
}
export const page = createSlide ({
    name: "product",
    initialState,
    reducers: {
        setOrder: (state, action) => {
            state.order = action.payload
        },
    }
})
export const {setOrder} =productStore.actions