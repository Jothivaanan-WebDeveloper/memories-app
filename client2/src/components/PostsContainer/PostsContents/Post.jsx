import moment from 'moment';

export default function Post({ props }) {
    console.log("data", props);
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={props.selectedFile} alt="" loading='lazy' />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p><em>{moment(props.createdAt).fromNow()}</em></p>
                    <p className="card-text">{props.message}</p>
                    <ul class="list-inline">
                        {
                            (props.tags).map(el => {

                                return <li class="list-inline-item text-primary">{'#' + el}</li>
                            })
                        }
                    </ul>
                    <blockquote class="blockquote text-right">
                        <footer class="blockquote-footer">{props.creator}</footer>
                    </blockquote>
                    <div className='d-flex justify-content-between'>
                        <div><button className='btn btn-light btn-sm'>Like</button></div>
                        <div><button className='btn btn-light btn-sm' style={{ marginRight: "8px" }} onClick={() => { }}>Edit</button>
                            <button className='btn btn-light btn-sm'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}