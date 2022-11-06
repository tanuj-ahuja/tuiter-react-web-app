import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import TuitStats from "../tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks";

const TuitItem = (
    {
        tuit
    }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        console.log(id);
        dispatch(deleteTuitThunk(id));
    }

    let hasContent = true;
    let hasTitle = true;
    let titleClass = "pt-2 pb-1";
    let contentClass = "pb-2";

    if (tuit.title === "") {
        hasTitle = false;
        titleClass = "";
    }
    if (tuit.content === "") {
        hasContent = false;
        contentClass = "";
    }

    return(
        <div className="row wd-border-color-grey pt-2">
            <div className="col-1">
                <img src={tuit.image} height="40px" width="40px" className="rounded-circle"/>
            </div>
            <div className="col-11">
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(tuit._id)}></i>
                <b className="text-black">{tuit.userName} </b> <span className="text-muted" style={{"fontSize": "14px"}}> <FontAwesomeIcon style={{"color": "dodgerblue"}} icon={faCircleCheck} /> {tuit.handle} · {tuit.time}</span>
                <p style={{"fontSize": "15px"}} dangerouslySetInnerHTML={{__html: tuit.tuit}}></p>
                <div className="row pt-2 pb-2">
                    <TuitStats tuit={tuit} />

                </div>

            </div>
        </div>
    );
}

export default TuitItem;