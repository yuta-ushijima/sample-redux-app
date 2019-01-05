/* Reactアプリのエントリポイントとなるファイル。
* ブラウザがコードを読み込んだときに最初に実行されるコード。*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 動作確認として、React側からStoreの中のデータを利用するため、Providerをインポート
import { Provider } from 'react-redux';
import store from "./store";

ReactDOM.render(
    // store={store}という属性値を渡すことで、Storeの持つ情報(todosの中身)にアクセスできる
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
