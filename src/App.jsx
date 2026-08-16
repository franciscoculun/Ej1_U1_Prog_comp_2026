import React, { Component, useState } from 'react';

//   COMPONENTE FUNCIONAL
const ItemForm = ({ addItem }) => {
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item !== '') {
      addItem(item); 
      setItem('');   
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Añadir artículo"
        style={{ marginRight: '10px' }}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

// COMPONENTE DE CLASE
class ItemList extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.setState({ items: ['Manzanas', 'Pan'] });
  }

  addItem = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item]
    }));
  };

  render() {
    return (
      <div>
        <h3>Lista de Compras</h3>
        <ul style={{ listStylePosition: 'inside', padding: 0 }}>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

// COMPONENTE ESTÁTICO
const Title = () => <h1>Bienvenido a la Lista de Compras</h1>;

// COMPONENTE PRINCIPAL
class App extends Component {
  constructor(props) {
    super(props);
    this.itemListRef = React.createRef();
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <Title />
        <ItemForm addItem={(item) => this.itemListRef.current.addItem(item)} />
        <ItemList ref={this.itemListRef} />
      </div>
    );
  }
}

export default App;