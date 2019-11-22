import React from 'react';
import axios from 'axios'
export default class CreateCard extends React.Component {
	
	constructor(props) {
    super(props);
    this.state = {
    	title:"",
		content:""};

    this.handleNewCard = this.handleNewCard.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

	
	handleNewCard=(event)=>{
		event.preventDefault()
		this.props.createNewCard(this.state.title,this.state.content)
	}

	handleInput = (event)=>{
		this.setState({
			[event.target.name]:event.target.value
		})
	}


	render() {
		return (
			<div className="createCardStyles">
				<form onSubmit={this.handleNewCard} className="new-card-form">
					<h2>Create Card</h2>
					<label for="title">Title </label> 
					<input onChange={this.handleInput} className="new-card-input" type="text" value={this.state.title} name="title"/>
					<br/>
					<label for="content">Content </label> 

					<textarea onChange={this.handleInput} className="new-card-input" type="text" value={this.state.content} name="content"/>
					<br/>
					<input type="submit" value="Create"/>
				</form>
			</div>
		);
	}
}
