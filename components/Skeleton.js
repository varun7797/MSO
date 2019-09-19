import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Skeleton.css';

export default class Skeleton extends Component {

    static propTypes = {
        type: PropTypes.oneOf(['title', 'paragraph', 'number', 'icon', 'button', 'table', 'card', 'card2', 'background'])
    };

    constructor(props) {
        super();
        this.state = {

        };
    }


    render() {

            const {type} = this.props

            let tablecontent = []

            for(let i = 0; i < 8; i++) {
                tablecontent.push( <div className="skeletonTable2">
                                        <Skeleton type="title"/>
                                        <Skeleton type="number"/>
                                        <Skeleton type="number"/>
                                    </div>)
            }
    
    
            if ((type === 'title') || (type === 'paragraph') || (type === 'number') || (type === 'icon') || (type === 'button')) {
                return (
                        <div className={`skeletonElement ${type}`}/>

                    )
            }

            if ((type === 'card') || (type === 'background')) {
                return (

                    <div className={`skeletonTemplate ${type}`}/>
                )      
            }

            if (type === 'card2') {
                return (
                    <div className="skeletonCard2">
                        <div className="card2">
                            <Skeleton type="title"/>
                            <Skeleton type="paragraph"/>
                        </div> 
                    </div>
                )
            }

            if (type === 'table') {
                return (

                    <div className="skeletonTable">
                        <div className="skeletonTable1">
                            <Skeleton type="title"/>
                            <Skeleton type="number"/>
                            <Skeleton type="number"/>
                        </div>
                        {tablecontent}
                    </div>
                )
            }

    }

}
    
    