import moment from 'moment';

export default function Post({data, setCurrentId}) {
    console.log("data", data);
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={data.props.selectedFile} alt="" loading='lazy' />
                <div className="card-body">
                    <h5 className="card-title">{data.props.title}</h5>
                    <p><em>{moment(data.props.createdAt).fromNow()}</em></p>
                    <p className="card-text">{data.props.message}</p>
                    <ul class="list-inline">
                        {
                            (data.props.tags).map(el => {

                                return <li class="list-inline-item text-primary">{'#'+el }</li>
                            })
                        }
                    </ul>
                    <blockquote class="blockquote text-right">
                        <footer class="blockquote-footer">{data.props.creator}</footer>
                    </blockquote>
                    <div className='d-flex justify-content-between'>
                        <div><button className='btn btn-light btn-sm'>Like</button></div>
                        <div><button className='btn btn-light btn-sm' style={{marginRight:"8px"}} onClick={() => {setCurrentId(post._id)}}>Edit</button>
                            <button className='btn btn-light btn-sm'>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}