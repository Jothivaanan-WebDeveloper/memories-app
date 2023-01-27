import { React, useState } from "react";
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createPost } from "../../action/posts";

export default function Form() {
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
    }

    const clearForm = () => {

    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 class="card-title">Create a memory</h5>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form-group mb-3">
                            <input type="text"
                                placeholder="Your Name"
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
                                name="ags"
                                label="Tags"
                                className="form-control"
                                value={postData.tags}
                                onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
                            />
                        </div>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                        />
                        <input type="submit" value="Create" className="btn btn-light btn-sm m-1" />
                        <input type="reset" value="Clear" className="btn btn-outline-light btn-sm" onClick={clearForm()} />
                    </form>
                </div>
            </div>

        </>
    )
}