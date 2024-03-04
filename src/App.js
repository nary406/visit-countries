import './App.css'
import {Component} from 'react'

const initialCountriesList = [
  {
    id: '53c9c67a-c923-4927-8a75-fdfc4bc5ec61',
    name: 'Australia',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-australia-img.png',
    isVisited: false,
  },
  {
    id: '8baa8029-fb2c-4f06-bfcc-3dc9ad12b24d',
    name: 'Canada',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-canada-img.png',
    isVisited: false,
  },
  {
    id: '1b520f98-6548-41f3-816e-c8b887865172',
    name: 'Greenland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-greenland-img.png',
    isVisited: false,
  },
  {
    id: '25841996-fbfd-4554-add4-4c94082c8ccd',
    name: 'India',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-india-img.png',
    isVisited: true,
  },
  {
    id: '603c3568-13b0-11ec-82a8-0242ac130003',
    name: 'Netherlands',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-netherland-img.png',
    isVisited: false,
  },
  {
    id: '3c988dec-55e1-477d-a9e2-b354fd559849',
    name: 'Portugal',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-portugal-img.png',
    isVisited: false,
  },
  {
    id: 'd766f754-34f7-413e-81ec-9992821b97fa',
    name: 'Switzerland',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-switzerland-img.png',
    isVisited: false,
  },
  {
    id: '7ebb4e04-b124-417f-a69e-564a456d70f1',
    name: 'Thailand',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-thailand-img.png',
    isVisited: false,
  },
  {
    id: '1e4b1dcd-6ace-4dde-ad8d-675927d5ae47',
    name: 'United Kingdom',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-united-kingdom-img.png',
    isVisited: true,
  },
  {
    id: 'e76da8ca-bc48-4981-902b-a4d2d46feb6d',
    name: 'Venezuela',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/visit-countries-venezuela-img.png',
    isVisited: false,
  },
]

// Replace your code here
class App extends Component {
  state = {flagsList: initialCountriesList, flag: ''}

  onClickVisit = e => {
    const {flagsList} = this.state
    const updatedList = flagsList.map(item => {
      if (item.id === e.target.id) {
        const newList = {...item, isVisited: !item.isVisited}
        return newList
      }
      return item
    })

    this.setState({flagsList: updatedList})
  }

  displayView = filteredList => {
    const {flagsList} = this.state
    if (filteredList.length < 1) {
      return <p>No Countries Visited Yet</p>
    }
    return filteredList.map(item => (
      <li key={item.id} className="flag_div">
        <img src={item.imageUrl} style={{width: '200px'}} alt="thumbnail" />
        <p>{item.name}</p>
        <button type="button" id={item.id} onClick={this.onClickVisit}>
          Remove
        </button>
      </li>
    ))
  }

  render() {
    const {flagsList} = this.state
    const filteredList = flagsList.filter(item => item.isVisited === true)
    console.log(flagsList)

    return (
      <div className="main_div">
        <div>
          <h1>Countries</h1>
          <ul className="un_order_list">
            {flagsList.map(item => (
              <li className="list_item" key={item.id}>
                <p style={{margin: '0px'}}>{item.name}</p>

                {item.isVisited ? (
                  <p>Visited</p>
                ) : (
                  <button
                    id={item.id}
                    type="button"
                    onClick={this.onClickVisit}
                  >
                    Visit
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Visited Countries</h1>
          <ul className="un_order_list2">{this.displayView(filteredList)}</ul>
        </div>
      </div>
    )
  }
}

export default App
