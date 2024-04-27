// // export default NavBar;
// import React, { Component } from 'react';
// import './NavBar.css';

// export class NavBar extends Component {

//   // let make function for toggle 
//   handleToggle = () => {
//     const toggles = document.getElementById('toggles');
//     if (toggles.checked) {
//       this.props.onChangeCountry('us');
//     } else {
//       this.props.onChangeCountry('in');
//     }
//   };

//   render() {
//     return (
//       <div>
//         <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="./all">KTNews</a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item"><a className="nav-link active" aria-current="page" href="/all">Home</a></li>
//                 <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
//                 <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>
//                 <li className="nav-item"><a className="nav-link" href="/general">General</a></li>
//                 <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
//                 <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>
//                 <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
//                 <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>
//               </ul>
//               <div className="toggle-button-cover">
//                 <div id="button-3" className="button r">
//                   <input className="checkbox" type="checkbox" id="toggles" onChange={this.handleToggle}/>
//                   <div className="knobs"></div>
//                   <div className="layer"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }
     
// export default NavBar;
import React, { Component } from 'react';
import './NavBar.css';

export class NavBar extends Component {
  state = {
    searchQuery: ''
  };

  handleToggle = () => {
    const toggles = document.getElementById('toggles');
    if (toggles.checked) {
      this.props.onChangeCountry('us');
    } else {
      this.props.onChangeCountry('in');
    }
  };

  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="./all">KTNews</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/all">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
                <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>
                <li className="nav-item"><a className="nav-link" href="/general">General</a></li>
                <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
                <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>
                <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
                <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>
              </ul>
              <div className="d-flex align-items-right">
                <div className="toggle-button-cover ms-3">
                  <div id="button-3" className="button r">
                    <input className="checkbox" type="checkbox" id="toggles" onChange={this.handleToggle}/>
                    <div className="knobs"></div>
                    <div className="layer"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
