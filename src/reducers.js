/* reduxからcombineReducers(複数のreducerを組み合わせて1つのreducersにまとめる)をインポート
*/
import { combineReducers } from 'redux';

/* todosというReducerを宣言。第1引数にstate={list:[]}と定義することで、
Actionsから渡された要素をStoreへどんな構造になっているかを表している。
ここでは、listというプロパティ名で配列になっていると伝えている。
第2引数のactionは、想定されるAction(ここではADD_TO_DOとREMOVE_TO_DO)を明示的に表している。
Reducersでaction.typeとして定義されていなければ、その他の値が渡されても何もおこらない。
つまり、Reducersで定義されたactionのみがstoreに伝えられることになる。
*/
export function todos(state={
    list: []
}, action) {
    switch (action.type) {
        /* concat()..配列に対して引数に与えた要素を連結し、新しい配列を返す。*/
        case "ADD_TO_DO": state.list = state.list.concat(action.todo);
        /* Object.assign()...第1引数に空のオブジェクトをコピーし、第2引数のstateを元に値をコピーして、
            その結果を返す*/
            return Object.assign({}, state);
        /* filter()... 引数todoに対して条件分岐を行い、その結果を反映した配列を生成*/
        case "REMOVE_TO_DO": state.list = state.list.filter(todo => {
            if(action.todo !== todo) {
                return true;
            }else {
                return false
            }
        });
        /* filterされた配列を返す*/
            return Object.assign({}, state);
        default:
            return state;
    }
}

export default combineReducers({
    todos
});