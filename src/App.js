// Reactのアプリ本体となるコンポーネント
// index.jsから呼び出され、divタグにマウントされる(className="App"の部分)
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// 個別のコンポーネントからStoreの情報にアクセスするため、
// connect関数をインポートする
import { connect } from 'react-redux';
// actionsの関数を呼び出す
import { addTodo, removeTodo } from "./actions";

class App extends Component {
    constructor() {
        super();
        // このコンポーネント内でのみ使用する変数stateを宣言
        this.state = {
            input: ""
        };
    }
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
                      <li key={todo}>
                          <span>{todo}</span>
                      <button onClick={() =>
                  this.props.dispatch(removeTodo(todo))}>削除
                      </button>
                      </li>
                  );
              })}
          </ul>
          <input type="text" onChange={e =>
          this.setState({input: e.target.value})}/>
          {/* this.state.inputで入力欄の内容を呼び出してaddTodoの引数に渡し、
              this.props.dispatchでDispatchを実行している
          */}
          <button onClick={()=>
          this.props.dispatch(addTodo(this.state.input))}>追加
          </button>
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
