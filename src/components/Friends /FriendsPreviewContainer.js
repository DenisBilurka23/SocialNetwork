import FriendsPreview from "./FriendsPreview";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friendsState: state.FriendsReducer
    }
}
const FriendsPreviewContainer = connect(mapStateToProps)(FriendsPreview)
export default FriendsPreviewContainer