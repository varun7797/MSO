import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.css';


class TopBar extends Component {
    static propTypes = {
        theme: PropTypes.oneOf(['light', 'dark']),
        children: PropTypes.instanceOf(Array).isRequired,
    }


    render() {
      
      const {theme, children} = this.props

        return (

            <div className={`TopBar ${theme}`}>
                <div className="TopBarContents">
                    <div className={`TopBarWelcome ${theme}`}>Welcome</div>
                    {children}
                 </div>
            </div>

            )

    }
}

class TopBarButton extends Component {
    static PropTypes = {
        theme: PropTypes.oneOf(['light', 'dark']),
        onClick: PropTypes.func,
        children: PropTypes.element.isRequired
    }

    render() {
        const {theme, onClick, children} = this.props

        return (

                <div onClick={onClick} className={`TbButton ${theme}`}>
                    {children}
                </div>
            )
    }
}

class NavBar extends Component {

    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }


    render() {

        const {children} = this.props;

        return(
            <div className="NavBar">
                <div className="NavBarContents">
                    {children}
                </div>
            </div>

        )        
    }

}

class NavBarButton extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        onClick: PropTypes.func
    }

    render () {

        const {children, onClick} = this.props;

        return (
            <div className="NavBarbtn" onClick={onClick}>
                {children}
            </div>
        )
    }
}

class NavBarDropdown extends Component {
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
        text: PropTypes.string
    }

    constructor(props) {
        super();
        this.state = {
            visibility: 'hidden',
            pointerEvents: 'none'
        }
    }

    show = () => {
        this.setState({
            visibility: '',
            pointerEvents: 'all'
        })
    }

    hide = () => {
        this.setState({
            visibility: 'hidden',
            pointerEvents: 'none'
        })
    }
    

    render () {
        
        const {children, text} = this.props

        return (
        <div onMouseOver={this.show} onMouseLeave={this.hide} className="NavBarDropdownWrapper">
            <div className="NavBarDropdown">{text}</div>

            <div style={{visibility: `${this.state.visibility}`, pointerEvents: `${this.state.pointerEvents}`}} className="NavBarDropdownList">
                {children}
            </div>      
        </div>


        )

    }
}

class NavBarDropdownItem extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        onClick: PropTypes.func
    }


    render () {

        const {children, onClick} = this.props;

        return (
            <li className="NavBarDropdownItem" onClick={onClick}>
                {children}
            </li>
        )
    }
}

class NavBarIconButton extends Component {
    static propTypes = {
        onClick: PropTypes.func,
        icon: PropTypes.string
    }

    render () {
        const {onClick, icon} = this.props
        let str = icon
        let string = require(`../src/Icons/Actionable/${icon}.svg`)

  
        return (

            <button style={{backgroundImage: `url(${string})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'top 50% right 50%'}} 
                    className="NavIconbtn" 
                    onClick={onClick}/>
        )
    }
}


class NavBarIcons extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    }

    render () {
        const {children} = this.props

        return (

           <div className="NavBarIcons">
            {children}
            </div>
        )
    }
}


export default class Header extends Component {

    static propTypes = {
        theme: PropTypes.oneOf(['light', 'dark']),
        children: PropTypes.instanceOf(Array).isRequired,
    };

    render() {

        let topbarbuttons = this.props.children[0]
        let navbarbuttons = this.props.children[1].props.children[0]
        let navdropdown = this.props.children[1].props.children[1].props.text
        let navdropdownitems = this.props.children[1].props.children[1].props.children;
        let naviconbtns = this.props.children[1].props.children[2].props.children

        const {theme,children} = this.props

        topbarbuttons = topbarbuttons.props.children.map(x => {
            return <TopBarButton theme={theme}>{x}</TopBarButton>
        })

        navbarbuttons = navbarbuttons.props.children.map(x => {
            return <NavBarButton>{x}</NavBarButton>
        })

        navdropdownitems = navdropdownitems.map(x => {
            return <NavBarDropdownItem>{x.props.children}</NavBarDropdownItem>
        })

        naviconbtns = naviconbtns.map(x => {
            return <NavBarIconButton icon={x.props.icon}/>
        })

            return (
            <div className={`headerWrapper ${theme}`}>
                <div style={{minWidth: '780px', maxWidth: '1280px', width: '100%'}}>
                    <TopBar theme={theme}>              
                        {topbarbuttons}
                    </TopBar>
                    <NavBar>
                        {navbarbuttons}
                        <NavBarDropdown text={navdropdown}>
                            {navdropdownitems}
                        </NavBarDropdown>
                         <NavBarIcons>
                            {naviconbtns}
                        </NavBarIcons>
                    </NavBar>
                </div>
            </div>
                )
    }

}
    
    