import React,{Component} from 'react'
import ToDoCard from './ToDoCard'
function ToDoCardContainer (props){
	function renderCards(){
		return props.cards.map(todo=>{
			return<ToDoCard card={todo}/>
		})
	}	

	return(
		<>
			{renderCards()}
		</>
	)
}

export default ToDoCardContainer