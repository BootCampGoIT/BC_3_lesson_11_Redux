import React, { useState, Component } from "react";
import { connect } from "react-redux";
import {
  addNewCamp,
  deleteCamp,
  setAlert,
} from "../../../redux/actions/bootCampActions";

const initialCamp = {
  campName: "",
  campNumber: "",
};

class BootCampForm extends Component {
  state = { ...initialCamp };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewCamp(this.state);
    this.setState({ ...initialCamp });
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.props.alert && this.props.setAlert();
    this.setState({ [name]: value });
  };
  render() {
    return (
      <>
        {this.props.alert && <h2>Something went wrong</h2>}
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Camp name
            <input
              type='text'
              name='campName'
              onChange={this.onHandleChange}
              value={this.state.campName}
            />
          </label>
          <label>
            Camp number
            <input
              type='text'
              name='campNumber'
              onChange={this.onHandleChange}
              value={this.state.campNumber}
            />
          </label>
          <button type='submit'>Save</button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alert: state.alert,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNewCamp: (camp) => {
      dispatch(addNewCamp(camp));
    },
    setAlert: () => {
      dispatch(setAlert());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BootCampForm);

// =============================================

// const BootCampForm = ({ addNewCamp }) => {
//   const [camp, setCamp] = useState({ ...initialCamp });

//   const onHandleSubmit = (e) => {
//     e.preventDefault();
//     addNewCamp(camp);
//     setCamp({ ...initialCamp });
//   };

//   const onHandleChange = (e) => {
//     const { name, value } = e.target;
//     setCamp((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
// <form onSubmit={onHandleSubmit}>
//   <label>
//     Camp name
//     <input
//       type='text'
//       name='campName'
//       onChange={onHandleChange}
//       value={camp.campName}
//     />
//   </label>
//   <label>
//     Camp number
//     <input
//       type='text'
//       name='campNumber'
//       onChange={onHandleChange}
//       value={camp.campNumber}
//     />
//   </label>
//   <button type='submit'>Save</button>
// </form>
//   );
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addItem: (data) => {
//       dispatch(addNewCamp(data));
//     },
//     deleteItem: (data) => {
//       dispatch(deleteCamp(data));
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(BootCampForm);
// export default connect(null, { addNewCamp })(BootCampForm);

// const mapStateToProps = (state) => {
//   return {
//     bootCamps: state.bootCamps,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCamp: (camp) => {
//       dispatch(addNewCamp(camp));
//     },
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BootCampForm);
