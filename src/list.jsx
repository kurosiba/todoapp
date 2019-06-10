import React from 'react';


class ToDoList extends React.Component{ 
  constructor(props){ 
    super(props);
    this.state = { 
      toDoList: props.toDoList,
      textTitle: '',
      textContent: '',
      textDate:'',
      
    };
    this.addToDo = this.addToDo.bind(this); 
    this.deleteToDo = this.deleteToDo.bind(this);
    
  }　

  addToDo(){ 
    let list = this.state.toDoList; 
    list.push({ title: this.state.textTitle, content: this.state.textContent, date: this.state.textDate }); 
    this.setState({toDoList: list,textTitle: '',textContent:'',textDate:''}); 
  }

  deleteToDo(i){ 
    let list = this.state.toDoList;
    list.splice(i, 1); 
    this.setState({toDoList: list});
  }

  render(){
    const domList = this.state.toDoList.map((m, i) =>{                                                                                               
      return <li key={i}> 
        タイトル：{m.title}<br/> 
        内容：{m.content}<br/>
        期限：{m.date}<br/>
        <button onClick={() => this.deleteToDo(i)}>削除</button> 
      </li>
    });


    return(
      
    <div> 
        <div>
           <font size ="4">　ToDoリスト</font>
           <br/>
           <br/>
          　タイトル:<input type="text" value={this.state.textTitle} 
            onChange={e => this.setState({textTitle: e.target.value})}/> 
           <br/>
          　　内容：<input type="text" value={this.state.textContent} 
            onChange={e => this.setState({textContent: e.target.value})}/>
            <br/>
          　　期限：<input type="text" value={this.state.textDate}
            onChange={e => this.setState({textDate: e.target.value})}/>  
         </div>    
        　<button onClick={this.addToDo}>追加</button>
          
        <ul>{domList}</ul> 
    </div>
    );
  }
}


export default ToDoList;
