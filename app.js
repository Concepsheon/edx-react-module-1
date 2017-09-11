//STYLE
var table = {
  margin: '1em 0',
  width: '100%',
  overflow: 'hidden',
  background: 'white',
  color: '#024457',
  border: '1px solid #167F92'
};

var tr = {
    border: '1px solid #D9E4E6'
};

var th = {
    border: '1px solid #FFF',
    backgroundColor: '#167F92',
    color: '#FFF',
    padding: '1em',
    textAlign: 'center',
    margin: '.5em 1em'
};


var td = {
    textAlign: 'center',
    padding: '10px'
};

//COMPONENTS
function AppInfo(props) {
    return (
        <div>
          <h1>{props.title}</h1>
          <h2>{props.desc}</h2>
        </div>
    );
}

function Options(props) {
    return (
        <div>
          <h3>{props.label}</h3>
          New Only <input type="checkbox" value="New Only"/>
          <p>Select Type <select>
            <option value={props.options[0]}>{props.options[0]}</option>
            <option value={props.options[1]}>{props.options[1]}</option>
            <option value={props.options[2]}>{props.options[2]}</option>
            <option value={props.options[3]}>{props.options[3]}</option>
          </select></p>
        </div>
    )
}

function Type(props) {
    return (
        <div>
          <h4>{props.type}</h4>
          {props.info.map(function(item, i) {
              return <ListInfo item = {item} key={i}/>;
          })}
        </div>
    );
}

function ListInfo(props) {
    return (
        <div>
          <table style={table}>
            <tbody>
            <tr style={tr}>
              <th style={th}>Year</th>
              <th style={th}>Model</th>
              <th style={th}>Price (USD)</th>
              <th style={th}>Buy</th>
            </tr>
            <tr>
              <td style={td}>{props.item.year}</td>
              <td style={td}>{props.item.model}</td>
              <td style={td}>${props.item.price}</td>
              <td style={td}><button>Buy Now</button></td>
            </tr>
            </tbody>
        </table>
        </div>
    );
}

//MAIN
function App(props) {
    return (
        <div>
          <AppInfo title="Welcome to React Transportation" desc="The best place to buy vehicles online"/>
          
          <Options label="Choose Options" options={["All", "Cars", "Trucks", "Convertibles"]}/>
          
          <Type type="Cars" info = {[
            {year: 2013,model: "A",price: 15500}, 
            {year: 2011,model: "B",price: 4400}, 
            {year: 2016, model: "B",price: 32000}
          ]}/>
          
          <Type type="Trucks" info = {[
            {year: 2014,model: "D",price: 18000}, 
            {year: 2013,model: "E",price: 5200}
          ]}/>
          
          <Type type="Convertibles" info = {[
            {year: 2009,model: "F",price: 2000}, 
            {year: 2010,model: "G",price: 6000},
            {year: 2012,model: "H",price: 2500}, 
            {year: 2017,model: "M",price: 5000}
          ]}/>
        </div>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));