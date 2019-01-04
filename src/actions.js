export  function addTodo(todo) {
    return {
        /*
        * case "ADD_TO_DO": state.list = state.list.concat(action.todo);
        * return Object.assign({}, state); ←要素を追加する処理の確定
        *
        * Reducers側で上記の部分を利用するための記述
        * */
        type: 'ADD_TO_DO',
        todo
        /*
        * action.todoの箇所にdispatchされた値(=todoの値)が入る
        * */
    }
}

export function removeTodo(todo) {
    return {
        /*
        * case "REMOVE_TO_DO": state.list = state.list.filter(todo => {
            if(action.todo != todo) {
                return true;
            }else {
                return false
            }
        });
        return Object.assign({}, state);

        * Reducers側で上記の部分を利用するための記述
        * */
        type: 'REMOVE_TO_DO',
        todo
    }
}