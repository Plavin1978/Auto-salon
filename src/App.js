import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {id: 1,
          title: 'Aurus белый',
          img: 'Aurus белый.jpg',
          desc: 'Aurus Внимание к деталям рождает совершенство. Чтобы двигаться вперёд нужна лишь цель. ',
          category: 'Aurus',
          price: '552859.50'
        },
        {id: 2,
          title: 'Aurus золотой',
          img: 'Aurus золотой.jpg',
          desc: 'Aurus Внимание к деталям рождает совершенство. Чтобы двигаться вперёд нужна лишь цель.',
          category: 'Aurus',
          price: '589899.99'
        },
        {id: 3,
          title: 'Aurus Комендант',
          img: 'Aurus Комендант.jpg',
          desc: 'Aurus Внимание к деталям рождает совершенство. Чтобы двигаться вперёд нужна лишь цель.',
          category: 'Aurus',
          price: '500480.50'
        },
        {id: 4,
          title: 'Aurus чёрный',
          img: 'Aurus чёрный.jpg',
          desc: 'Aurus Внимание к деталям рождает совершенство. Чтобы двигаться вперёд нужна лишь цель.',
          category: 'Aurus',
          price: '535390.50'
        },
        {id: 5,
          title: 'Cadillac',
          img: 'Cadillac Эскалэйд белый.jpg',
          desc: 'Cadillac Эскалэйд. Полноразмерный внедорожник, выпускаемый Cadillac, являющимся люксовым подразделением General Motors.',
          category: 'Cadillac',
          price: '200475.50'
        },
        {id: 6,
          title: 'Cadillac',
          img: 'Cadillac Эскалэйд 2022.jpg',
          desc: 'Cadillac Эскалэйд. Полноразмерный внедорожник, выпускаемый Cadillac, являющимся люксовым подразделением General Motors.',
          category: 'Cadillac',
          price: '200790.50'
        },
        {id: 7,
          title: 'Cadillac',
          img: 'Cadillac Эскалэйд Пикап.jpg',
          desc: 'Cadillac Эскалэйд. Полноразмерный внедорожник, выпускаемый Cadillac, являющимся люксовым подразделением General Motors.',
          category: 'Cadillac',
          price: '230790.50'
        },
        {id: 8,
          title: 'Cadillac',
          img: 'Cadillac Эскалэйд.jpg',
          desc: 'Cadillac Эскалэйд. Полноразмерный внедорожник, выпускаемый Cadillac, являющимся люксовым подразделением General Motors.',
          category: 'Cadillac',
          price: '230790.50'
        },
        {id: 9,
          title: 'UAZ Patriot',
          img: 'UAZ Patriot Silver 2023.jpg',
          desc: 'UAZ Patriot. Полноприводный автомобиль повышенной проходимости (вседорожник) для эксплуатации на дорогах всех категорий, а также по пересечённой местности.',
          category: 'UAZ',
          price: '71790.50'
        },
        {id: 10,
          title: 'UAZ Patriot',
          img: 'UAZ Patriot 2023.jpg',
          desc: 'UAZ Patriot. Полноприводный автомобиль повышенной проходимости (вседорожник) для эксплуатации на дорогах всех категорий, а также по пересечённой местности.',
          category: 'UAZ',
          price: '81790.50'
        },
        {id: 11,
          title: 'UAZ Patriot',
          img: 'UAZ patriot2022.jpg',
          desc: 'UAZ Patriot. Полноприводный автомобиль повышенной проходимости (вседорожник) для эксплуатации на дорогах всех категорий, а также по пересечённой местности.',
          category: 'UAZ',
          price: '73790.50'
        },
        {id: 12,
          title: 'UAZ Patriot',
          img: 'UAZ Patriot 2021.jpg',
          desc: 'UAZ Patriot. Полноприводный автомобиль повышенной проходимости (вседорожник) для эксплуатации на дорогах всех категорий, а также по пересечённой местности.',
          category: 'UAZ',
          price: '75790.50'
        },
        {id: 13,
          title: 'Ford Mustang',
          img: 'Ford Mustang white.jpg',
          desc: 'Ford Mustang. Культовый автомобиль класса Pony Car производства Ford Motor Company.',
          category: 'Ford Mustang',
          price: '211790.50'
        },
        {id: 14,
          title: 'Ford Mustang',
          img: 'Ford Mustang black.jpg',
          desc: 'Ford Mustang. Культовый автомобиль класса Pony Car производства Ford Motor Company.',
          category: 'Ford Mustang',
          price: '211790.50'
        },
        {id: 15,
          title: 'Ford Mustang',
          img: 'Ford Mustang Red 2023.jpg',
          desc: 'Ford Mustang. Культовый автомобиль класса Pony Car производства Ford Motor Company.',
          category: 'Ford Mustang',
          price: '211790.50'
        },
        {id: 16,
          title: 'Ford Mustang',
          img: 'Ford Mustang Green 2024-.jpg',
          desc: 'Ford Mustang. Культовый автомобиль класса Pony Car производства Ford Motor Company.',
          category: 'Ford Mustang',
          price: '211790.50'
        },
        {id: 17,
          title: 'Tank',
          img: 'Tank 300 great Wall.jpg',
          desc: 'Tank. Tank 300 — среднеразмерный внедорожник, выпускаемый с 2020 года компанией Tank — внедорожным подразделением Great Wall Motors.',
          category: 'Tank',
          price: '171790.50'
        },
        {id: 18,
          title: 'Tank',
          img: 'Tank 500.jpg',
          desc: 'Tank. Tank 500 — полноразмерный внедорожник, выпускаемый с 2021 года компанией Tank — внедорожным подразделением Great Wall Motors',
          category: 'Tank',
          price: '171790.50'
        },
        {id: 19,
          title: 'Tank',
          img: 'Tank 500 2023.jpg',
          desc: 'Tank. Tank 500 — полноразмерный внедорожник, выпускаемый с 2021 года компанией Tank — внедорожным подразделением Great Wall Motors',
          category: 'Tank',
          price: '171790.50'
        },
        {id: 20,
          title: 'Tank',
          img: 'Tank 600.jpg',
          desc: 'Tank. Tank 600 — полноразмерный внедорожник, выпускаемый с 2022 года компанией Tank — внедорожным подразделением Great Wall Motors ',
          category: 'Tank',
          price: '171790.50'
        },
      ],
      ShowFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
  return (
   <div className="wrapper">
    <Header orders={this.state.orders} onDelete={this.deleteOrder} />
    <Categories chooseCategory={this.chooseCategory}/>
    <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

    {this.state.ShowFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
    <Footer />
   </div>
  )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({ShowFullItem: !this.state.ShowFullItem})
  }

  chooseCategory(category) {
      if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
   this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
      isInArray = true
    })

    if(!isInArray)

    this.setState({orders: [...this.state.orders, item] })
    
  }
}


export default App;
