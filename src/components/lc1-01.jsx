
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
        <li className="rkListCollapse101_content" 
        key={i.itemName}>
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
      <span className="rkListCollapse101_icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M19 13H5v-2h14v2z"/></svg>
      </span>
    );
  } else {
    return (
      <span className="rkListCollapse101_icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </svg>
      </span>
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
      <nav className="rkListCollapse101">
      <header onClick={() => { this.toggleCollapse() }}>
      <Rklc1_iconToggle pr_collapse={this.state.collapse}/>
      <p>Items:</p>
      </header>
      <Rklc1_listToggle pr_collapse={this.state.collapse}/>
      </nav>
      );
  }
}