import React, { Component } from 'react'

export class Categories extends Component {
    constructor (props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Всё'
                },
                {
                    key: 'Aurus',
                    name: 'Aurus'
                },
                {
                    key: 'Cadillac',
                    name: 'Cadillac'
                },
                {
                    key: 'Ford Mustang',
                    name: 'Ford Mustang'
                },
                {
                    key: 'UAZ',
                    name: 'UAZ'
                },
                {
                    key: 'Tank',
                    name: 'Tank'
                },

            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories