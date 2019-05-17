import axios from 'axios';
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';


export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      console.log(res);
      dispatch({
        type: SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: FAILURE,
        payload: err
      });
    })
}

export const addSmurf = smurf => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      dispatch({ 
        type: SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FAILURE,
        payload: err
      });
    })
}

export const deleteSmurf = id => dispatch => {
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      dispatch({ 
        type: SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FAILURE,
        payload: err
      });
    })
}



/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
