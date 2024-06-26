import { createStore, combineReducers, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

import { userLoginReducer, userRegisterReducer, userViewReducer, userUpdateReducer } from "./reducers/authServiceReducers/authReducers";
import { updateUserByIdReducer, instructorListReducer, learnerListReducer, deleteUserByIdReducer } from "./reducers/authServiceReducers/adminReducers";
import { courseCreateReducer, courseViewReducer, courseListReducer, courseUpdateReducer, courseDeleteReducer, coursesByInstructorReducer } from "./reducers/courseServiceReducers/courseReducers";
import { addContentReducer, contentListReducer, contentViewReducer , contentUpdateReducer} from "./reducers/courseServiceReducers/contentReducers";

const reducer = combineReducers({
    user_Login: userLoginReducer,
    user_Register: userRegisterReducer,
    user_View: userViewReducer,
    user_Update: userUpdateReducer,
    learner_List: learnerListReducer,
    instructor_List: instructorListReducer,
    updateUserById : updateUserByIdReducer,
    deleteUserById : deleteUserByIdReducer,
    course_Create : courseCreateReducer,
    course_View : courseViewReducer,
    course_List : courseListReducer,
    course_Update : courseUpdateReducer,
    course_Delete : courseDeleteReducer,
    CourseById_List : coursesByInstructorReducer,
    content_Create : addContentReducer,
    content_List : contentListReducer,
    content_View : contentViewReducer,
    content_Update : contentUpdateReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;

const initialState = {
    user_Login : { userInfo : userInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;