"use strict";

// options for markdown
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

// React Component used to display markdown text
var Content = React.createClass({
  displayName: "Content",

  // setting the initial state
  getInitialState: function getInitialState() {
    return { text: "**Enter Markdown in the textbox and see the output**\nHeading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*" };
  },
  // function to update the output as user edits the text in textarea
  update: function update() {
    var newText = this.refs.markText.value;
    this.setState({ text: newText });
  },
  // Returns a textarea and a div element for taking input from the
  // user and diplaying data
  render: function render() {
    return React.createElement(
      "div",
      { id: "content", className: "row" },
      React.createElement(
        "div",
        { className: "col-xs-12 col-sm-6 " },
        React.createElement(
          "textarea",
          { rows: "18", className: "form-control", onChange: this.update, ref: "markText" },
          this.state.text
        ),
        React.createElement("br", null),
        React.createElement("br", null)
      ),
      React.createElement("div", { className: "col-xs-12 col-sm-6", dangerouslySetInnerHTML: { __html: marked(this.state.text) } })
    );
  }
});

ReactDOM.render(React.createElement(Content, null), document.getElementById("root"));