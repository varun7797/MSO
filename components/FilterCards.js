import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './FilterCards.css';


class FilterCardSmall extends Component {
    static propTypes = {
        activeFilterCard: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        stock: PropTypes.string,
        index: PropTypes.number,
        indexHigh: PropTypes.number,
        indexLow: PropTypes.number,
        indexChange: PropTypes.number
    }

  constructor(props) {
        super();
        this.state = {
            hover: false
        };
    }

      onClick = () => {
        const { activeFilterCard, onClick, stock, index, indexHigh, indexLow, indexChange } = this.props;
        onClick(stock);
      }

      hover = () => {
        this.setState({
            hover: true
        })
      }

      unhover = () => {
        this.setState({
            hover: false
        })
      }

    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    render () {
        const {
            onClick,
            props: {
                activeFilterCard,
                stock,
                index,
                indexChange,
                indexLow,
                indexHigh
                },
            } = this;

            let plusminus
            let posneg
            let icon

            if (indexChange > 0) {
                plusminus = '+'
                posneg = 'plus'
                icon = "FilterStockUp"
            } else {
                plusminus = ''
                posneg = 'minus'
                icon = "FilterStockDown"
            }


            let url = require(`../src/Icons/Actionable/${icon}.svg`)

            let percent

            let high= this.formatNumber(indexHigh)
            let low = this.formatNumber(indexLow)

            percent = ((indexChange*100)/index).toFixed(2)

            let delta;

            if (indexChange < 0) {
                delta = 0 - indexChange
                delta = delta.toString()
                delta = "-$" + delta
            } else {
                delta = indexChange
                delta = delta.toString()
                delta = "+$" + delta
            }

        if (activeFilterCard === stock) {

            return (
                <li 
                    onMouseOver={this.hover}
                    onMouseLeave={this.unhover}
                    className="filterCardSmallActive"
                    onClick={onClick}>
                        <div className="filterCardSmallText">
                            <div className="filterCardSmallLeft">
                                <div className="filterCardSmallStock">{stock}</div>
                                <div className="filterCardSmallIndex">
                                    <div style={{marginRight: '4px'}}>{this.formatNumber(index)}</div>
                                    <div style={{backgroundImage: "url("+`${url}`+")"}} className={`filterCardSmallIndexChange ${posneg}`}>
                                        <div>{delta}/{plusminus}{percent}%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="filterCardSmallRight">
                                <div style={{overflow: 'none', whiteSpace: 'nowrap'}}>High {high}</div>
                                <div style={{overflow: 'none', whiteSpace: 'nowrap'}}>Low {low}</div>
                            </div>
                        </div>
                        <div className="filterSelected"/>
                        {this.state.hover ? <div className="filterHover"/> : null}
                </li>
            )
          }

        return (
                
                <li 
                    onMouseOver={this.hover}
                    onMouseLeave={this.unhover}
                    className="filterCardSmall"
                    onClick={onClick}>
                        <div className="filterCardSmallText">
                            <div className="filterCardSmallLeft">
                                <div className="filterCardSmallStock">{stock}</div>
                                <div className="filterCardSmallIndex">
                                    <div style={{marginRight: '4px'}}>{this.formatNumber(index)}</div>
                                    <div style={{backgroundImage: "url("+`${url}`+")"}} className={`filterCardSmallIndexChange ${posneg}`}>
                                        <div>{delta}/{plusminus}{percent}%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="filterCardSmallRight">
                                <div style={{overflow: 'none', whiteSpace: 'nowrap'}}>High {high}</div>
                                <div style={{overflow: 'none', whiteSpace: 'nowrap'}}>Low {low}</div>
                            </div>
                        </div>
                    {this.state.hover ? <div className="filterHover"/> : null}
                </li>


            )
        }
    }


class FilterCardLarge extends Component {
    static propTypes = {
        activeFilterCard: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        stock: PropTypes.string,
        index: PropTypes.number,
        indexHigh: PropTypes.number,
        indexLow: PropTypes.number,
        indexChange: PropTypes.number,
        details: PropTypes.string,
        change: PropTypes.number,
        gainLoss: PropTypes.string,
        value: PropTypes.number
    }

  constructor(props) {
        super();
        this.state = {
            hover: false
        };
    }

      onClick = () => {
        const { activeFilterCard, onClick, stock, index, indexHigh, indexLow, indexChange } = this.props;
        onClick(stock);
      }

      hover = () => {
        this.setState({
            hover: true
        })
      }

      unhover = () => {
        this.setState({
            hover: false
        })
      }

    formatNumber(num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    render () {
        const {
            onClick,
            props: {
                activeFilterCard,
                stock,
                index,
                indexChange,
                indexLow,
                indexHigh,
                details,
                change,
                gainLoss,
                value,
                },
            } = this;

            let plusminus
            let posneg
            let icon

            if (change > 0) {
                plusminus = '+'
                posneg = 'plus'
                icon = "FilterStockUp"
            } else {
                plusminus = ''
                posneg = 'minus'
                icon = "FilterStockDown"
            }

            let delta

            if (change < 0) {
                delta = 0 - change
                delta = delta.toString()
                delta = '-$' + delta
            } else {
                delta = change
                delta = delta.toString()
                delta = "+$" + delta
            }


            let url = require(`../src/Icons/Actionable/${icon}.svg`)

            let percent

            percent = ((change*100)/value).toFixed(2)
            percent = this.formatNumber(percent)

            let high= this.formatNumber(indexHigh)
            let low = this.formatNumber(indexLow)


        if (activeFilterCard === stock) {

            return (
                <li 
                    onMouseOver={this.hover}
                    onMouseLeave={this.unhover}
                    className="filterCardSmallActive"
                    onClick={onClick}>
                        <div className="filterCardLargeText">
                            <div style={{paddingBottom: '16px'}} className="filterCardLargeTop">
                                <div className="filterCardLargeName">{stock}</div>
                                <div className="filterCardLargeDetails">{details}</div>
                            </div>
                            <div className="filterCardLargeBottom">
                                <div className="filterCardLargeLeft">
                                    <div style={{overflow: 'none', whiteSpace: 'nowrap', marginBottom: '8px'}}>Today's Change</div>
                                    <div style={{overflow: 'none', whiteSpace: 'nowrap', marginBottom: '8px'}}>Gain/Loss %</div>
                                    <div style={{overflow: 'none', whiteSpace: 'nowrap'}}>Total Value</div>
                                </div>
                                <div className="filterCardLargeRight">
                                    <div style={{overflow: 'none', whiteSpace: 'nowrap', marginBottom: '8px'}} className={`filterCardLargeChange ${posneg}`}>{delta} / {plusminus}{percent}%</div>
                                    <div style={{overflow: 'none', whiteSpace: 'nowrap', marginBottom: '8px'}} className={`filterCardLargeGainLoss`}>{gainLoss}</div>
                                    <div style={{overflow: 'none', whiteSpace: 'nowrap'}} className="filterCardLargeTotal">${this.formatNumber(value)}</div>
                                </div>
                            </div>
                        </div>
                        <div className="filterSelected"/>
                        {this.state.hover ? <div className="filterHover"/> : null}
                </li>
            )
          }

        return (
                
                <li 
                    onMouseOver={this.hover}
                    onMouseLeave={this.unhover}
                    className="filterCardSmall"
                    onClick={onClick}>
                        <div className="filterCardLargeText">
                            <div style={{paddingBottom: '16px'}} className="filterCardLargeTop">
                                <div className="filterCardLargeName">{stock}</div>
                                <div className="filterCardLargeDetails">{details}</div>
                            </div>
                            <div className="filterCardLargeBottom">
                                <div className="filterCardLargeLeft">
                                    <div style={{overflow: 'none', whiteSpace: 'nowrap', marginBottom: '8px'}}>Today's Change</div>
                                    <div style={{overflow: 'none', whiteSpace: 'nowrap', marginBottom: '8px'}}>Gain/Loss %</div>
                                    <div style={{overflow: 'none', whiteSpace: 'nowrap'}}>Total Value</div>
                                </div>
                                <div className="filterCardLargeRight">
                                    <div style={{overflow: 'none', whiteSpace: 'nowrap', marginBottom: '8px'}} className={`filterCardLargeChange ${posneg}`}>{delta} / {plusminus}{percent}%</div>
                                    <div style={{overflow: 'none', whiteSpace: 'nowrap', marginBottom: '8px'}} className={`filterCardLargeGainLoss`}>{gainLoss}</div>
                                    <div style={{overflow: 'none', whiteSpace: 'nowrap'}} className="filterCardLargeTotal">${this.formatNumber(value)}</div>
                                </div>
                            </div>
                        </div>
                    {this.state.hover ? <div className="filterHover"/> : null}
                </li>


            )
        }
    }




class FilterCards extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array),
    type: PropTypes.oneOf(['small', 'large', 'date'])
  }

  constructor(props) {
    super(props);

    this.state = {
      activeFilterCard: this.props.children[0].props.label,
    };
  }

  onClickFilterCardItem = (FilterCard) => {
    this.setState({ activeFilterCard: FilterCard });
  }

  render() {
    const {
      onClickFilterCardItem,
      props: {
        children,
      },
      state: {
        activeFilterCard,
      }
    } = this;

    if (this.props.type === 'small') {

            return (
              <div className="FilterCards">
                <ol className="FilterCardlist">
                  {children.map((child) => {
                    const { label } = child.props;
                    const {index, indexChange, indexLow, indexHigh} = child.props
                    const {icon} = child.props;
                    return (
                      <FilterCardSmall
                        activeFilterCard={activeFilterCard}
                        stock={label}
                        index={index}
                        indexChange={indexChange}
                        indexHigh={indexHigh}
                        indexLow={indexLow}
                        onClick={onClickFilterCardItem}
                      />
                    );
                  })}
                </ol>
                <div className="FilterCard-content">
                  {children.map((child) => {
                    if (child.props.label !== activeFilterCard) return undefined;
                    return child.props.children;
                  })}
                </div>
              </div>
            );        
    }


    if (this.props.type === 'large') {

            return (
              <div className="FilterCards">
                <ol className="FilterCardlist">
                  {children.map((child) => {
                    const { label } = child.props;
                    const {index, indexChange, indexLow, indexHigh} = child.props
                    const {icon} = child.props;
                    const {details, value, change, gainLoss} = child.props
                    return (
                      <FilterCardLarge
                        activeFilterCard={activeFilterCard}
                        stock={label}
                        index={index}
                        indexChange={indexChange}
                        indexHigh={indexHigh}
                        indexLow={indexLow}
                        onClick={onClickFilterCardItem}
                        details={details}
                        value = {value}
                        change = {change}
                        gainLoss = {gainLoss}
                      />
                    );
                  })}
                </ol>
                <div className="FilterCard-content">
                  {children.map((child) => {
                    if (child.props.label !== activeFilterCard) return undefined;
                    return child.props.children;
                  })}
                </div>
              </div>
            );        
    }

  }
}

export default FilterCards;    