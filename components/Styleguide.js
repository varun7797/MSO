import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Styleguide.css';
import Accordion from '../GuideComponents/Components/Accordion.js'
import Buttons from '../GuideComponents/Components/Buttons.js'
import Cards from '../GuideComponents/Components/Cards.js'
import Carousel from '../GuideComponents/Components/Carousel.js'
import ConfirmationDialog from '../GuideComponents/Components/ConfirmationDialog.js'
import Control from '../GuideComponents/Components/Controls.js'
import DatePicker from '../GuideComponents/Components/Datepicker.js'
import Dividers from '../GuideComponents/Components/Dividers.js'
import HeaderFooter from '../GuideComponents/Components/HeaderFooter.js'
import Dropdown from '../GuideComponents/Components/Dropdown.js'
import FilterCards from '../GuideComponents/Components/FilterCards.js'
import GradientTakeover from '../GuideComponents/Components/GradientTakeover.js'
import HelpDrawer from '../GuideComponents/Components/HelpDrawer.js'
import Input from '../GuideComponents/Components/Input.js'
import MessageBox from '../GuideComponents/Components/MessageBox.js'
import MessageFlash from '../GuideComponents/Components/MessageFlash.js'
import Modals from '../GuideComponents/Components/Modal.js'
import Search from '../GuideComponents/Components/Search.js'
import Skeleton from '../GuideComponents/Components/Skeleton.js'
import Steppers from '../GuideComponents/Components/Steppers.js'
import Table from '../stories/Button/Table.js'
import Tabs from '../GuideComponents/Components/Tabs.js'
import Tooltip from '../GuideComponents/Components/Tooltip.js'
import VerticalOptions from '../GuideComponents/Components/VerticalOptions.js'
import Typography from '../GuideComponents/Basics/Typography.js'
import Color from '../GuideComponents/Basics/Color.js'
import Grid from '../GuideComponents/Basics/Grid.js'
import Text from '../GuideComponents/Basics/Text.js'

import Icons from '../GuideComponents/Basics/Icons.js'


class StyleguideAccordion extends Component {
    static propTypes = {
        header: PropTypes.string,
        items: PropTypes.array,
        onClick: PropTypes.func.isRequired,
        activeContent: PropTypes.string.isRequired,
    }




    constructor(props) {
        super();
        this.state = {
            show: false,
            height: 0,
            deg: 0
        };
    }


    toggleShow = () => {
        this.setState({
           show: !this.state.show 
       })

        if (this.state.show === true) {
            this.setState({
                height: '0',
                deg: '0'
            })
        }
        else {
            let h = document.getElementById(this.props.header).scrollHeight
            console.log(h)
            this.setState({
                height: h,
                deg: '-180'
            })
        }
    }

    onClick = (e) => {
        console.log(e.target.id)
        this.props.onClick(e.target.id)
    }

    render() {

 
        const {header, items} = this.props
        const {show} = this.state


        let listitems = []

        for(let i=0; i<items.length; i++) {
            if (items[i] === this.props.activeContent) {
                 listitems.push(<li className="navlistItem + Active" id={items[i]} onClick={this.onClick}>{items[i]}</li>)
             } else {
                 listitems.push(<li className="navlistItem" id={items[i]} onClick={this.onClick}>{items[i]}</li>)
             }
        }

        return(

            <div>
                <div onClick={this.toggleShow} className="navHeader">{header}<div style={{transform :`rotate(${this.state.deg}deg)`}} className="navChevron"/></div>
                <div id={header} className="navList" style={{overflow: 'hidden', maxHeight: `${this.state.height}px`}}>{listitems}</div>
            </div>


            )

    }

} 


export default class Styleguide extends Component {


    constructor(props) {
        super();
     
        this.state = {
            activeContent: 'Typography'
        };
    }

    renderSwitch(x) {
        switch(x) {
            case 'Typography':
                return <Typography/>;
            case 'Text':
                return <Text/>;
            case 'Color':
                return <Color/>;
            case 'Grid':
                return <Grid/>;
            case 'Accordion':
                return <Accordion/>;
            case 'Buttons':
                return <Buttons/>;
            case 'Cards':
                return <Cards/>;
            case 'Carousel':
                return <Carousel/>;
            case 'Confirmation Dialog':
                return <ConfirmationDialog/>;
            case 'Controls':
                return <Control/>;
            case 'Date Picker':
                return <DatePicker/>;
            case 'Dividers':
                return <Dividers/>;
            case 'Dropdown':
                return <Dropdown/>;
            case 'Filter Bar':
                return <div>Filter bar</div>;
            case 'Filter Cards':
                return <FilterCards/>;
            case 'Gradient Takeover':
                return <GradientTakeover/>;
            case 'Header + Footer':
                return <HeaderFooter/>;
            case 'Help Drawer':
                return <HelpDrawer/>;
            case 'Icons':
                return <Icons/>;
            case 'Input Field':
                return <Input/>;
            case 'Message Box':
                return <MessageBox/>;
            case 'Message Flash':
                return <MessageFlash/>;
            case 'Modals':
                return <Modals/>;
            case 'Search':
                return <Search/>;
            case 'Skeletons':
                return <Skeleton/>;
            case 'Steppers':
                return <Steppers/>;
            case 'Tables':
                return <Table/>;
            case 'Tabs':
                return <Tabs/>;
            case 'Tooltips':
                return <Tooltip/>; 
            case 'Vertical Options':
                return <VerticalOptions/>;                 
        default:
            return '';
        }
    }

      onClickActiveContent = (content) => {
        this.setState({ activeContent: content });
      }

    dangerousbullshit(x) {
        return {__html: x};
    }


    render() {


        const componentitems = ['Accordion', 'Buttons', 'Cards',
         'Carousel', 'Confirmation Dialog', 'Controls', 'Date Picker', 'Dividers',
         'Dropdown', 'Filter Cards', 'Gradient Takeover', 'Header + Footer', 
         'Help Drawer', 'Input Field', 'Message Box', 'Message Flash', 'Modals', 'Search',
         'Skeletons', 'Steppers', 'Tabs', 'Tooltips', 'Vertical Options']

            return (
                    <body className="sgbody">

                    <div className="leftNav">
                        <div className="MSOheader">
                           MSO Style Guide
                        </div>
                    <StyleguideAccordion activeContent={this.state.activeContent} onClick={this.onClickActiveContent} header="Basic Elements" items ={['Typography', 'Text styles', 'Icons', 'Color', 'Grid']}/>
                    <StyleguideAccordion activeContent={this.state.activeContent} onClick={this.onClickActiveContent} header="Components" items={componentitems}/>
                    
                    </div>


                    <div className="mainContent">
                 
                    {this.renderSwitch(this.state.activeContent)}
                    </div>

                    </body>
                )
    }

}
    
    