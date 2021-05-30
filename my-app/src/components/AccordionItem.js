
//    первый вариант

// import React from "react";

// function AccordionItem(props) {
//   return (
//     <div className="card">
//       <div className="card-header" id={props.item.headerId}>
//         <h2 className="mb-0">
//           <button
//             className="btn btn-link btn-block text-left"
//             type="button"
//             data-toggle="collapse"
//             data-target={"#collapse" + props.item.headerId}
//             aria-expanded={props.item.expanded}
//             aria-controls={"collapse" + props.item.headerId}
//           >
//             {props.item.question}
//           </button>
//         </h2>
//       </div>
//       <div
//         id={"collapse" + props.item.headerId}
//         className="collapse show"
//         aria-labelledby={props.item.headerId}
//         data-parent="#accordion"
//       >
//         <div className="card-body">{props.item.answer}</div>
//       </div>
//     </div>
//   );
// }

// export default AccordionItem;

//    второй вариант
// import React, { Component } from "react";

// class AccordionItem extends Component {
//   constructor(props) {
//     super(props);
//     this.id = "accordion";
//   }

//   render() {
//     return (
//       <div className="card">
//         <div className="card-header" id={this.props.item.headerId}>
//           <h2 className="mb-0">
//             <button
//               className="btn btn-block text-left"
//               type="button"
//               data-toggle="collapse"
//               data-target={"#collapse" + this.props.item.headerId}
//               aria-expanded={this.props.item.expanded}
//               aria-controls={"collapse" + this.props.item.headerId}
//             >
//               {this.props.item.question}
//             </button>
//           </h2>
//         </div>
//         <div
//           id={"collapse" + this.props.item.headerId}
//           className="collapse show"
//           aria-labelledby={this.props.item.headerId}
//           data-parent="#accordion"
//         >
//           <div className="card-body">{this.props.item.answer}</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default AccordionItem;

//    третий вариант закрытый
import React, { Component } from "react";

class AccordionItem extends Component {
  constructor(props) {
    super(props);
    this.id = "accordion";

    if (props.item.expanded === "true") {
      this.show = "show";
    } else {
      this.show = "";
    }
  }

  render() {
    return (
      <div className="card">
        <div className="card-header" id={this.props.item.headerId}>
          <h2 className="mb-0">
            <button
              className="btn btn-block text-left"
              type="button"
              data-toggle="collapse"
              data-target={"#collapse" + this.props.item.headerId}
              aria-expanded={this.props.item.expanded}
              aria-controls={"collapse" + this.props.item.headerId}
            >
              {this.props.item.question}
            </button>
          </h2>
        </div>
        <div
          id={"collapse" + this.props.item.headerId}
          className={"collapse " + this.show}
          aria-labelledby={this.props.item.headerId}
          data-parent="#accordion"
        >
          <div className="card-body">{this.props.item.answer}</div>
        </div>
      </div>
    );
  }
}

export default AccordionItem;