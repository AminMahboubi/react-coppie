var React = require("react");
var Croppie = require("./Croppie.react");

var Thing = React.createClass({
	getInitialState(){
		return {
			result : null
		}
	},
	render(){
		return (
			<div>
				<p>this is gonna hold the avatar editor component</p>
				<Croppie  url="image.jpg" ref="croppie"/>
					<span onClick={this.showResult}>result</span>
				<div style={{height:"200px"}}></div>
				{this.state.result && 
					<img src={this.state.result} alt=""/>
				}
			</div>
		)
	},
	showResult(){
		this.setState({
			result : this.refs.croppie.result()
		})
	}
});

module.exports= Thing;