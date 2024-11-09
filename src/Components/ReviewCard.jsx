import CommentNoteIcon from "../svg/CommentNoteIcon";
import "../css/card.css";

const ReviewCard = ({text, date, image, name, title}) => {
    return (
        <div id="reviewCardBox">
            <CommentNoteIcon />
            <p className="reviewText">{text}</p>
            <div className="dateText">{date}</div>
            <div className="flex">
                <div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div id="reviewUser" className="flex flex-col ml-5 justify-center">
                    <h3>{name}</h3>
                    <h4>{title}</h4>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;