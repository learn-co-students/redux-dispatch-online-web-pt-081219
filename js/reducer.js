function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action)
  document.body.textContent = state.count
  
  return state
}


let state = {count: 0}
let action = {type: 'INCREASE_COUNT'}


// console.log(changeState(state, action))
// changeState(state, action)


// console.log(dispatch({type: 'INCREASE_COUNT'}))
