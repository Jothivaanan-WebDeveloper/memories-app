import axios from "axios";
import { React, useState } from "react";
import FileBase from 'react-file-base64';
import { updatePost } from "../api";
import Posts from "./PostsContainer/Posts";

export default function Form({ currentId, setCurrentId }) {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            try {
                axios.patch(`http://localhost:5000/memory/${currentId}`, postData).then(res => {
                    console.log("updatedData", res.data);
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                axios.post("http://localhost:5000/memory", postData).then(res => {
                    console.log("postdata", res.data);
                });
            } catch (error) {
                console.log(error);
            }
        }

    }

    const clearForm = () => {

    }

    return (
        <>
            <div className="card" style={{ position: 'sticky', top: 0 }}>
                <div className="card-body">
                    <h4 className="card-title mb-3">Share your thoughts ...</h4><hr />
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input type="text"
                                placeholder="Name"
                                name="creator"
                                label="Creator"
                                className="form-control"
                                value={postData.creator}
                                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text"
                                placeholder="Title"
                                name="title"
                                label="Title"
                                className="form-control"
                                value={postData.title}
                                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <textarea
                                placeholder="Message"
                                name="message"
                                label="Message"
                                className="form-control"
                                value={postData.message}
                                onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <input type="text"
                                placeholder="Tags"
                                name="tags"
                                label="Tags"
                                className="form-control"
                                value={postData.tags}
                                onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <span className="font-weight-bold">Photos</span><br />
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                            />
                        </div>

                        <div className="d-flex justify-content-end mt-3">
                            <input type="submit" value="Create" className="btn btn-danger btn-sm" style={{ marginRight: "5px" }} />
                            <input type="reset" value="Clear" className="btn btn-secondary btn-sm" onClick={clearForm()} />
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}