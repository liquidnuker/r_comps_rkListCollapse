
class Rklc1_listItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          itemName: "item1"
        },
        {
          itemName: "item2"
        },
        {
          itemName: "item3"
        }
      ]
    };

    // binders    
  }

  render() {
    return (

      <ul>
      {this.state.items.map((i) =>
        <li key={i.itemName}>
          {i.itemName}
        </li>
      )}
      </ul>

    );
  }
}

function Rklc1_listToggle(props) {
  if (props.pr_collapse === true) {
    return (
      <Rklc1_listItems />
    );
  } else {
    return null;
  }
}

function Rklc1_iconToggle(props) {
  if (props.pr_collapse === true) {
    return (
      <span>-</span>
    );
  } else {
    return (
      <span>+</span>
    );
  }
}

export default class Rklc1_container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };

    // binders 
  }

  // lifecycle hooks
  
  // methods
  toggleCollapse() {
    this.setState(prevState => ({
      collapse: !prevState.collapse
    }));
  }
  
  render() {
    return (
      <nav className="rk_listcollapse1">
      <header onClick={() => { this.toggleCollapse() }}>
      <p>Items:</p>
      <Rklc1_iconToggle pr_collapse={this.state.collapse}/>
      </header>
      <Rklc1_listToggle pr_collapse={this.state.collapse}/>
      </nav>
      );
  }
}