import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import EditRecord from "../home/EditRecord";
import { Modal } from "react-bootstrap";

const AllRecords = () => {
  const [searchRecord, setSearchRecord] = useState([]);
  const [show, setShow] = useState(false);
  const [measures, setMeasures] = useState([]);
  const [rerenderFlag, setRerenderFlag] = useState(false);
  const [meas, setMeas] = useState({});
  const [edit, setEdit] = useState({
    isEditing: false,
    editIndex: 0,
    editData: {},
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("mydata")) || [];
    setMeasures(arr);
    setMeas(arr);
    console.log("trying to fetch again");
    console.log("arr", arr);
  }, [rerenderFlag]);

  const filterData = (e) => {
    const value = e.target.value;
    let newArr = [];
    if (value.length >= 3) {
      newArr = searchRecord.filter((item) => {
        return item.name.toLowerCase().startsWith(value.toLowerCase());
      });
      setSearchRecord(newArr);
    } else {
      setSearchRecord(measures);
    }
  };
  useEffect(() => {
    setSearchRecord(measures);
  }, [measures]);

  const editRecord = (index) => {
    console.log("index of editrecord ", index);
    let temp = { ...edit };
    temp.isEditing = true;
    temp.editIndex = index;
    const temp1 = measures[index];
    console.log("temp1", temp1);
    setEdit({ ...edit, editData: temp1, editIndex: index });
    setMeas(temp1);
    // console.log("temp" , temp)
    handleShow();
  };
  console.log("editData ", edit);
  console.log("editIndex ", edit.editIndex);
  console.log("meas", meas);
  // console.log("measures" ,measures[0])
  // console.log("edit " , edit)

  const deletRecord = (i) => {
    const newData = [...measures];
    newData.splice(i, 1);
    localStorage.setItem("mydata", JSON.stringify(newData));
    setMeasures(newData);
  };
  const RerenderComponent = () => {
    setRerenderFlag(!rerenderFlag);
    console.log("I have been rerendered !");
  };
  return (
    <div className="form-section search-area">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="search...."
          onChange={filterData}
        ></input>
      </div>
      {/* <EditRecord modal = {modal}/> */}
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">F_Name</th>
            <th scope="col">Address</th>
            <th scope="col">Contact</th>
            <th scope="col">More</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {searchRecord &&
            searchRecord?.map((person, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{person.name}</td>
                  <td>{person.fname}</td>
                  <td>{person.address}</td>
                  <td>{person.contact}</td>
                  <td className="more">
                    <Link to={`/singleRecord/${i}`}>More</Link>
                  </td>
                  <td>
                    <span className="edit" onClick={() => editRecord(i)}>
                      <i className="fa fa-edit"></i>{" "}
                    </span>
                    <span
                      className="trash"
                      onClick={() => {
                        if (window.confirm("DO you want to delete record"))
                          deletRecord(i);
                      }}
                    >
                      <i className="fa fa-trash"></i>{" "}
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DO you want to edit Record?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditRecord
            handleClose={handleClose}
            meas={meas}
            edit={edit.editData}
            editIndex={edit.editIndex}
            rerender={RerenderComponent}
          />
        </Modal.Body>

        {/* <button variant="secondary" onClick={handleClose}>
            Close
          </button> */}
        <button className="btn btn-info" onClick={handleClose}>
          Save Changes
        </button>
      </Modal>
    </div>
  );
};

export default AllRecords;
