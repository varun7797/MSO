import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Dropdowns.css';
import Control from './Control.js';

export default class Dropdowns extends Component {

    static propTypes = {
        type: PropTypes.oneOf(['form','filter']),
        selection: PropTypes.oneOf(['single','multiple']),
        header: PropTypes.string,
        headerLeft: PropTypes.string,
        options: PropTypes.array,
        limit: PropTypes.number,
        formId: PropTypes.string,
        onChange: PropTypes.func
    };

    constructor(props) {
        super();
        this.node = React.createRef()
        this.state = {
            label: null,
            selection: null,
            showMulti: false,
            selectedMulti: [],
            numSelected: 0,
            multiActive: false,
            exceededLimit: '',
            dropWidth: 0
        };
    }

    componentWillMount() {
      document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClick, false);
    }

    handleClick = (e) => {
      if (this.node.current.contains(e.target)) {
          return
      } else {
          if (this.state.showMulti === true) {
              this.setState({
                  showMulti: false,
              })
          }
      }
    }

    label = () => {
        this.setState({
            label: this.props.header
        })
    }

    select = (e) => {
        this.setState({
            selection: e.target.value
        })
    }

    openMulti = () => {
        this.setState({
            showMulti: !this.state.showMulti,
            multiActive: true
        })
        this.label()
        if (this.props.headerLeft) {
            let x = this.dropdownWidth()
            this.setState({
                dropWidth: x - 32
            })
        } else {
            this.setState({
                dropWidth: 'calc(100% - 32px)'
            })
        }
    }

    clear = () => {
        let checks = document.getElementsByName(this.props.formId);
        let numchecks = checks.length
        for(let i=0; i<numchecks; i++) {
            checks[i].checked = false
        }
        this.setState({
            selectedMulti: [],
            numSelected: 0,
            exceededLimit: ''
        })
        console.log(this.state.selectedMulti)

    }

    form = () => {
        let checks = document.getElementsByName(this.props.formId);
        console.log(checks)
        let numchecks = checks.length
        let selected = []
        for(let i=0; i<numchecks; i++) {
            if (checks[i].checked === true) {
                selected.push(checks[i].id)
            }
        }
        console.log(selected)
        let numselected = selected.length 
        this.setState({
            selectedMulti: selected,
            numSelected: numselected
        })
        if (numselected > this.props.limit) {
            this.setState({
                exceededLimit: 'exceeded'
            })
        } else {
            this.setState({
                exceededLimit: ''
            })
        }
    }
    
    dropdownWidth = () => {
        let x = document.getElementById(this.props.headerLeft).clientWidth
        console.log(x)
        return x

    }
   

    render() {

        let options = this.props.options;

        if (this.props.selection === 'single') {
            options = options.map(x => {
                return <option>{x}</option>
            })
        } else {
            options = options.map(x => {
                return <li className="dropMultiItem"><Control name={this.props.formId} label={x} /></li>
            })
        }

        let header;
        let placeholder;
        let headerLeft

        if (this.props.header) {
            header = "header"
            placeholder = this.props.header
        } else {
                header = "noheader"
                placeholder = "Select"

        }

        if (this.props.headerLeft) {
            headerLeft = "headerLeft"
        } else {
            headerLeft = "noheaderLeft"
        }

        let counter;

        let active;
        
        let somethingSelected;

        if (this.state.numSelected > 0) {
            somethingSelected = 'yes'
        } else {
            somethingSelected = ''
        }

        if (this.state.showMulti) {
            active = 'active'
        } else {
            active = ''
        }

        if (this.state.multiActive) {
            counter = `${this.state.numSelected} Selected`
        }



        if (this.props.selection === 'single') {
            return (
                <div ref={this.node} className={`selectWrapper ${header} ${headerLeft}`}>
                    {this.props.headerLeft ? <div className="dropHeaderLeft">{this.props.headerLeft}</div> : (null)}
                    <select onChange={this.props.onChange} onClick={this.label} className={`dropdown ${this.props.type} ${header}`}>
                     <option value="" hidden selected>{placeholder}</option>
                      <option disabled>please select</option>
                      {options}
                    </select>
                   {this.props.header ? <div className="dropHeader">{this.state.label}</div> : (null)}
                    
                </div>

                )            
        }

        if (this.props.selection === 'multiple') {
            return (
                <div ref={this.node} className={`multiselectWrapper ${header}  ${headerLeft}`}>
                    {this.props.headerLeft ? <div className="dropHeaderLeft">{this.props.headerLeft}</div> : (null)}
                    {this.props.header ? <div className="dropHeader">{this.state.label}</div> : (null)}
                    <div className={`dropMultiWrapper ${header} ${headerLeft}`}>
                        <button id={this.props.headerLeft} onClick={this.openMulti} className={`dropMulti ${this.props.type} ${active} ${somethingSelected} ${this.state.exceededLimit}`}>{this.state.multiActive ? counter : placeholder}</button>
                        <div style={{width: this.state.dropWidth}}className={`dropMultiForm ${this.state.showMulti}`}>
                            <div className="dropMultiSubhead">
                                <div>Select up to {this.props.limit}</div>
                                <div onClick={this.clear} className="dropClearall">Clear All</div>
                            </div>
                            <div className="dropMultiDivider"/>
                            <form onChange={this.form}>
                                {options}
                            </form>
                        </div>
                    </div>

                </div>

                )      
        }


    }

}
    
    