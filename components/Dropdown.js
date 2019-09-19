import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';
import Control from './Controls.js';



export default class Dropdown extends Component {

	static propTypes = {
		type: PropTypes.oneOf(['form','filter']),
		selection: PropTypes.oneOf(['single','multiple']),
	    header: PropTypes.string,
	    listItems: PropTypes.array,
	    selectUpto: PropTypes.number,
	};

	static defaultProps = {
	    showList: false,
	    selection: 'single'
	};

	constructor(props) {
		super(props);
		this.Checked = [];
		this.state = {
		  showList: props.showList,
		  selectedItem: null,
		  activeItemExists: false,
		  listItems: props.listItems,
		};
  }

	handleShowList = () => {
    	this.setState({ showList: !this.state.showList})
	};

	handleSelectItem(title, id, selected) {
		this.setState({ activeItemExists: true})
		if (this.props.selection === 'single') {
			let temp = this.state.listItems
			temp.forEach(item => item.selected = false);
			temp[id].selected = !temp[id].selected
			this.setState({
				showList: false,
				activeItemExists: true,
				listItems: temp
			})
		}
		if (this.props.selection === 'multiple') {
			let temp = this.state.listItems
			temp[id].selected = !temp[id].selected
			this.setState({
				listItems: temp,
				activeItemExists: true
			})
			let count = this.state.listItems.filter(function(x) {return x.selected;}).length;
		}
	}

	clearAll = () => {
		let temp = this.state.listItems
		temp.forEach(item => item.selected = false)
		this.setState({
			listItems: temp,
			activeItemExists: false
		})
		let Check = this.Checked
		Check.forEach(item => item.current.deselectAll())
	}

  render() {

  	let items = this.state.listItems;
  	let check;

  	let list;
	
	if (this.props.selection === 'single') {
	  	list = items.map((item) => 
			<button className={`dropdownListItem ${item.selected}`} onClick={() => this.handleSelectItem(item.title, item.id, item.selected)}>
				{item.title}
			</button>
		);
	} else if (this.props.selection === 'multiple') {
	  	list = items.map((item) => 
	  		<div className="dropdownCheckbox">
  			    <Control ref={this.Checked[item.id] = React.createRef()} onclick={() => this.handleSelectItem(item.title, item.id, item.selected)} type='checkbox' label={item.title}/>
			</div>
		);
	}

	let show;

	if (this.state.showList) {

		if (this.props.selection ==='single') {
			show = <div className="dropdownListWrapper">{list}</div>
		}
		if (this.props.selection === 'multiple') {
			show = <div className="dropdownListWrapper">
						<div className="dropdownMultiHeader">
							{`Select up to ${this.props.selectUpto}`}
							<div className="dropdownClearAll" onClick={this.clearAll}>Clear All</div>
						</div>
						{list}
					</div>
		}
	}

	let header, label;


	if (this.props.selection === 'single') {
		if (!this.state.activeItemExists) {
			label = this.props.header;
		} else {
			if (this.props.type === 'form') {
				header = this.props.header;
			}
		label = this.state.listItems.filter(function(x) {return x.selected;})[0].title
		}
	} else if (this.props.selection === 'multiple') {
		if (!this.state.activeItemExists) {
			if (this.state.showList) {
				label = 'None Selected'
			} else {
				label = `Select up to ${this.props.selectUpto}`
			}	
		} else {
			if (this.state.listItems.filter(function(x) {return x.selected;}).length === 0) {
				label = `Select up to ${this.props.selectUpto}`
			} else {
				label = `${this.state.listItems.filter(function(x) {return x.selected;}).length} Selected`
			}
			
		}
		
 	}


    return (
    	<div className="dropdownContainer">
    			<div className="dropdownHeader">{header}</div>
           		<button className={`dropdownField ${this.props.type} ${this.state.showList}`} onClick={this.handleShowList}>
       				<div className="dropdownLabelWrapper">
	       				<div className={`dropdownLabel ${this.props.type} ${this.state.activeItemExists}`}>
	       					{label}
	       				</div>
       					<div className={`chevron ${this.props.type}`}>
       						<img src={require(`../src/Icons/Actionable/${this.state.showList ? 'chevronup' : 'chevrondown'}.svg`)}/>
   						</div>
						</div>
	   			</button>
		   		{show}	
    	</div>
     );


    }
}