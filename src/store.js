// reduxからcreateStoreをインポート
import { createStore } from 'redux';
// 同一階層のreducers.jsをインポート
import reducers from './reducers';

/* reducersを引数とし、戻り値としてのstoreを取得
* reducersの中身は、reducers.jsでcombineReducersとしてまとめられたreducer(=todos)
* */
const store = createStore(reducers);

// 外部から呼び出せるようにexportする
export default store;