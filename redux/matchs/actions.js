import axios from "axios";
const matchActions = {
  GET_MATCHS: 'GET_MATCHS',
  GET_TOURNAMENTS: 'GET_TOURNAMENTS',
  FAVORITE: 'FAVORITE'
  
};

function getMatchs() {
  return async (dispatch) => {
    try {
      var currentDate = new Date();
      var year = currentDate.getFullYear();
      var month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
      var day = String(currentDate.getDate()).padStart(2, '0');

      var dateString = year + '-' + month + '-' + day;
      const { data } = await axios.get('https://api.sofascore.com/api/v1/sport/football/scheduled-events/'+dateString);
      dispatch({ type: matchActions.GET_MATCHS, payload: data });
    } catch (error) {
      // Handle error here
      console.error(error);
    }
  };
}
function getTournaments(){
 return async (dispatch) => {
   try {
     const { data } = await axios.get('https://api.sofascore.com/api/v1/config/top-unique-tournaments/MA/football');
     dispatch({ type: matchActions.GET_TOURNAMENTS, payload: data.uniqueTournaments });
   } catch (error) {
     console.error(error);
   }
 };
};
function favoriteMatch(match){
  return async (dispatch) => {
    dispatch({ type: matchActions.FAVORITE, payload: match });
  };
}
export { getMatchs, matchActions ,getTournaments ,favoriteMatch };