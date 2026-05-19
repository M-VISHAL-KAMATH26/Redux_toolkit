redux is an independent state management library.react-redux is used in order to use the redux with react.

redux toolkit has less setup and has built in middlewares and undertakes most task internally.
**npm i react-redux && npm i reduxjs/toolkit**

store is an single part of truth.
reducers anything that needs to be changed in part of store is done through the reducers.
useSelector is used to choose the particular value from the store
useDispatch is used to send some value from the store


first step: 
create a store .the store can be created anywhere .i preffered to create n app folder inside which i did a store.configureStore is used in order to create a store.

create an slice two methods included createSlice and nanoid that generates the unique identifier.
in createslice comes the name of slice the initial state and the reducers(properties+functions)

functions has the state and action state has access to all the state values and action is used as helper to perform like action payload some data required for changing.
Here you have to export 2 thing in slice one is a reducer and all the actions

dispatch uses the reducer and makes the changes in the state.

inside the dispaatch call the reducer and pass the value.
