import axios from "axios";
import React, { Component } from "react";
import Btn from "./button";
import styles from '../styles/Photo.module.css';

class Photo extends Component {
  state = {
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  onFileUpload = () => {
    if (this.state.selectedFile) {
      // Create an object of formData
      const formData = new FormData();
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
      console.log(this.state.selectedFile);
      axios.post("http://localhost:8080/add", formData);
    } else {
      console.log("No file found");
    }
  };

  // File content
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <div className={styles.frc}>
          <label className={styles.label_styles} htmlFor='code-file'>Choose File </label> 
          <input id='code-file' className={styles.input_styles} type="file" onChange={this.onFileChange} name="photo" />
          <Btn darkText={true} onClick={this.onFileUpload}> 🦄 Upload!</Btn>
        </div>
        {this.fileData()}
      </div>
    );
  }
}

export default Photo;
