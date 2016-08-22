var React = require('react');
var ReactDOM = require('react-dom');
require('./style.scss');
var InputBox = React.createClass({
  
  getInitialState: function() {
   
    return {
      
      text: 'Heading\n=======\n\nSub-heading\n-----------\n\n### Another deeper heading\n\nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a\nline break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n* apples\n* oranges\n* pears\n\nNumbered list:\n\n1. apples\n2. oranges\n3. pears\n\nThe rain---not the reign---in\nSpain.\n\n*[Herman Fassett](https://freecodecamp.com/hermanfassett)*'
      
    };
  },
 
  handleInput: function(event) {
    this.setState({text: marked(event.target.value)})
  },
  render() {
    
    return (
    <div className='row'>
  <textarea className='col-md-6' onChange={this.handleInput}>
    {this.state.text}
  </textarea>
          <div className='col-md-6'>
       <div id='mark' dangerouslySetInnerHTML={{__html: marked(this.state.text)}}> 
        
       </div>
     </div>
</div>      
    );
    
  }
  
});

ReactDOM.render(<InputBox />, document.getElementById('container'));
