import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Table.css';


{/*export default class Table extends Component {

    static propTypes = {
        type: PropTypes.oneOf(['basic']),
        children: PropTypes.instanceOf(Array).isRequired,
    }


    constructor(props) {
        super();
        this.state = {

        };
    }

    componentDidMount() {

        console.log(this.props.children[4].props.children[0].props.children)
    }



    render() {

        const {children} = this.props

        let theader = children[0].props.children

        theader = theader.map(x => {
            return <th className="tableBasicHeader">{x}</th>   
        })

        let tlength = children.length
        let tdata = []


        for(let x=1; x<tlength;x++){
            tdata.push(children[x])
        }


        let td = []
        let banter
        for(let i=0; i<tdata.length; i++) {
            let temp = []
            if (tdata[i].props.style === 'expanded') {
                let tempheader = tdata[i].props.children[0]
                let th = []
                th.push(<td className="tableExpandHeader"><div className="expandIcon"/>{tempheader.props.children[0]}</td>)
                for(let j=1; j<tempheader.props.children.length;j++){
                    if (tempheader.props.children[j].props.onClick) {
                        th.push(<td onClick={tempheader.props.children[j].props.onClick} className="tableDataOnclick">{tempheader.props.children[j]}</td>)    
                    } else {
                        th.push(<td className="tableBasicData">{tempheader.props.children[j]}</td>)    
                    }  
                }
                let thdata = []
                banter = tdata[i].props.children.length
                for(let k=1; k<tdata[i].props.children.length; k++) {
                    thdata.push(tdata[i].props.children[k].props.children)
                }
                let temphdata = []
                for (let l=0; l<thdata.length;l++){
                    let temperhdata =[]
                    for(let m=0; m<thdata[l].length;m++) {
                            if (thdata[l][m].props.onClick) {
                                temperhdata.push(<td onClick={thdata[l][m].props.onClick} className="tableDataOnclick">{thdata[l][m]}</td>)    
                            } else {
                                temperhdata.push(<td className="tableBasicData">{thdata[l][m]}</td>)    
                            }  
                    } 
                    temphdata.push(temperhdata)
                }
                td.push(<tr>{th}</tr>)
                td.push(temphdata)

            }
            else if ((typeof tdata[i].props.children) === 'string') {
                temp.push(<div className="tableSectionHeader">{tdata[i].props.children}</div>)
                td.push(<tr>{temp}</tr>)
            } else {
                for(let j=0; j<tdata[i].props.children.length; j++) { 
                    if (tdata[i].props.children[j].props.onClick) {
                        temp.push(<td onClick={tdata[i].props.children[j].props.onClick} className="tableDataOnclick">{tdata[i].props.children[j]}</td>)    
                    } else {
                        temp.push(<td className="tableBasicData">{tdata[i].props.children[j]}</td>)    
                    }   
                }
                td.push(<tr>{temp}</tr>)                
            }
            
        }

            return (
                <table className="table">
                    <tr >{theader}</tr>
                    {td}
                </table>

                )
        }
    

}
 */}   
    