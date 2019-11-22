import React,{Component} from 'react'

class ToDoCard extends Component{
	render(){
		return(
			<div className="cardStyles">
				
				<h3>{this.props.card.title}</h3>
						
				<p>{this.props.card.content}</p>
			</div>
		)
	}
}

export default ToDoCard