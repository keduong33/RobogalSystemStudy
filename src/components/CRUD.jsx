// Reference: https://firebase.google.com/docs/firestore/manage-data/add-data
// https://firebase.google.com/docs/firestore/manage-data/delete-data
// https://firebase.google.com/docs/firestore/query-data/get-data

import React, { useRef } from "react";
import { db } from "../firebase";
import { doc, setDoc, deleteDoc, getDoc } from "@firebase/firestore";
function CRUD() {
  const userMessage = useRef();
  const userName = useRef();
  const userId = useRef();
  const editUserName = useRef();
  const editMessage = useRef();

  const handleSave = async (e) => {
    e.preventDefault();
    const id = userName.current.value;

    let data = {
      message: userMessage.current.value,
      username: userName.current.value,
    };

    console.log(userName.current.value);

    try {
      await setDoc(doc(db, "message", id), data);
      console.log("Saved");
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (e) => {
    const id = userName.current.value;
    try {
      await deleteDoc(doc(db, "message", id));
      console.log("Deleted");
    } catch (e) {
      console.log(e);
    }
  };

  const handleGet = async (e) => {
    console.log("Getting");
    try {
      const id = userId.current.value;
      const docRef = doc(db, "message", id);
      const message = (await getDoc(docRef)).data();

      console.log("Document Data: ", message);

      editUserName.current.value = message.username;
      editMessage.current.value = message.message;
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const id = editUserName.current.value;

    let data = {
      message: editMessage.current.value,
      username: editUserName.current.value,
    };

    //console.log(userName.current.value);

    try {
      await setDoc(doc(db, "message", id), data);
      console.log("Saved");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl">CRUD Practice</h1>
      <div className="border-2 border-">
        <form onSubmit={handleSave}>
          <label>Enter Message: </label>
          <input type="text" placeholder="Your Name" ref={userName} />
          <input type="text" placeholder="Your Message" ref={userMessage} />
          <button type="submit">Save</button>
        </form>
      </div>

      {/* A more complicated form --> where u can get & update */}
      <div className="border-2">
        <form onSubmit={handleEdit} onReset={handleGet}>
          <label>Get Document: </label>
          <input type="text" placeholder="User Id" ref={userId} />
          <button type="reset" className="btn btn-blue">
            Get Doc
          </button>
          <div>
            <label>Username: </label>
            <input type="text" ref={editUserName} />
          </div>
          <div>
            <label>Message: </label>
            <input type="text" ref={editMessage} />
          </div>
          <div>
            <button type="submit" className="btn btn-blue m-2">
              Save
            </button>
            <button
              onClick={handleDelete}
              type="button"
              className="btn btn-blue"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CRUD;
