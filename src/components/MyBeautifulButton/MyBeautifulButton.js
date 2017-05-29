import React from 'react'
import './MyBeautifulButton.scss'
import { Link } from 'react-router'
import { Icon } from 'react-fa'

class MyBeautifulButton extends React.Component {
  getContainerClassName (props) {
    if (props.isNext === true) {
      return 'loading next'
    }
    const status = Number(props.status || 0)
    let className = 'loading'
    if (!status || status === 0) {
      className += ' incomplete'
    } else if (status < 100) {
      className += ' started'
    } else if (status === 100) {
      className += ' completed'
    }
    return className
  }

  leftFill (props) {
    if (props.isNext) {
      return 'fill'
    }

    if (props.status > 0) {
      return 'fill'
    }
  }

  rightFill (props) {
    if (props.isNext) {
      return 'fill'
    }

    if (props.status === 100) {
      return 'fill'
    }
  }

  render () {
    return (
      <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 myBeautifulButton text-center'>
        <Link to={this.props.path || '/404'} className={this.props.disabled?'disabled-link':'enabled-link'} onClick={e => this.props.disabled ? e.preventDefault() : ''}>
          <div className={this.getContainerClassName(this.props)}>
            <div className='outer-shadow'>

            </div>
            <div className='inner-shadow'>
              <Icon name={this.props.icon} />
            </div>
              <div className='hold left'>
                <div className={this.leftFill(this.props)}></div>
              </div>
              <div className='hold right'>
                <div className={this.rightFill(this.props)}></div>
              </div>
          </div>
        </Link>
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}

export default MyBeautifulButton