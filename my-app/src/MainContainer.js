import React,{Component} from 'react'
import CreateCard from './CreateCard'
import axios from 'axios'
import ToDoCardContainer from './ToDoCardContainer'
class MainContainer extends Component{
	state={
		cards:[]
	}

	componentDidMount(){
		axios.get('http://127.0.0.1:8000/api/diary/')
		.then(resp=>{
			this.setState({
				cards: resp.data
			})
		}
		)
	}
	createNewCard = (input,content)=>{
		axios.post('http://127.0.0.1:8000/api/diary/',{
			title:input,
			content:content
		})
			.then(res=>{
				console.log(res)
				console.log(res.data)
			})
			.then(newCard=>{
				this.setState({
					cards: [...this.state.cards,newCard]
				})
			})
		window.location.reload();


	}

	render(){
		return(
			<div >
				<CreateCard createNewCard={this.createNewCard}/>
				<br/>
				<h2>All Cards</h2>

				<div className="main-container">

					<ToDoCardContainer cards={this.state.cards} />
				</div>
			</div>
		)
	}
}

export default MainContainer

