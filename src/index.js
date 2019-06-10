import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import ToDoList from './list';



const list = [];
const list2 = [];


ReactDOM.render( // ()内のものを画面上に表示させているよ
    <ToDoList toDoList={list}/>,
    
    document.getElementById('root'),
    
);

serviceWorker.unregister();