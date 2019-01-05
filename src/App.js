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
    /* this.propsをonAddToDoとonRemoveToDoにそれぞれオブジェクトの分割代入を行う
    *  onAddToDoとonRemoveTodoはプロパティ名(mapDispatchToPropsで定義している箇所)から参照していることに注意。
    *  inputについては、constructor内で定義されている空文字のリテラルを参照している。
    * */
    const { onAddToDo, onRemoveToDo } = this.props;
    const { input } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Redux Todo list</h1>
        </header>
          <h2>やることリスト</h2>
          <ul>
              {this.props.todos.map(todo => {
                  return (
                      <li key={todo} className="listStyle">
                          <span>{todo}</span>
                      <button onClick={() => onRemoveToDo(todo)}>
                          削除
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
          <button onClick={()=> onAddToDo(input)}>
              追加
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

// mapDispatchToProps...引数にdispatchをおくことで、ActionのDispatchを行い、1つのオブジェクトを返す関数
const mapDispatchToProps = dispatch => {
    return {
        onAddToDo(todo) {
            dispatch(addTodo(todo))
        },
        onRemoveToDo(todo) {
            dispatch(removeTodo(todo))
        }
    };
};

// Appを引数にして、connect経由でApp呼び出す。
// connectの第2引数にmapDispatchToPropsを渡すと、this.propsの要素として追加することでDispatchを行うための関数を使うことができる
export default connect(mapStateToProps, mapDispatchToProps)(App);
