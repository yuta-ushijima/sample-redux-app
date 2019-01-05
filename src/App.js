// Reactのアプリ本体となるコンポーネント
// index.jsから呼び出され、divタグにマウントされる(className="App"の部分)
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 個別のコンポーネントからStoreの情報にアクセスするため、
// connect関数をインポートする
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Redux Todo list</h1>
        </header>
          <ul>
              {this.props.todos.map(todo => {
                  return (
                      <li key={todo}>{todo}</li>
                  );
              })}
          </ul>
      </div>
    );
  }
}

// mapStateToProps...Storeの情報をpropsに反映させる、1つのオブジェクトを返す関数
// stateを引数(中身はstate.todosとして保存されているstoreの値)にしている。
const mapStateToProps = state => {
    return {
        todos: state.todos.list
    }
};

// Appを引数にして、connect経由でApp呼び出す。
export default connect(mapStateToProps)(App);
