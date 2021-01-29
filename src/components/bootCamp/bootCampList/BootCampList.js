import React from "react";
import { connect } from "react-redux";
import { deleteCamp, setFilter } from "../../../redux/actions/bootCampActions";

const BootCampList = ({ bootCamps, filter, deleteCamp, setFilter }) => {
  const onHandleDelete = (e) => {
    const { id } = e.target;
    deleteCamp(id);
  };
  const onHandleChange = (e) => {
    const { value } = e.target;
    setFilter(value);
  };
  return (
    <div>
      <input type='text' onChange={onHandleChange} value={filter} />
      <ul>
        {bootCamps.map((camp) => (
          <li key={camp.id}>
            <p>{camp.campName}</p>
            <p>{camp.campNumber}</p>
            <button id={camp.id} onClick={onHandleDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    bootCamps: state.bootCamps.filter(item=> item.campName.toLowerCase().includes(state.filter.toLowerCase())),
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteCamp: (id) => {
      dispatch(deleteCamp(id));
    },
    setFilter: (id) => {
      dispatch(setFilter(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BootCampList);
