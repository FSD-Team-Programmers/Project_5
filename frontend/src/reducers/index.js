const initialState = {
    places: [],
  };
  ​
  const places = (state = initialState, {type, payload}) => {

    switch (type) {
  
      case 'ADD_PLACES':
        return { places: [...state.places, payload] };
  
      case 'UPDATE_PLACES':
        return {
          places: state.places.map((place) => {
            if (place._id === payload._id) {
              return payload;
            } else {
              return place;
            }
          }),
        };
  
      case 'DELETE_PLACES':
        return {
          places: state.places.filter(
            (place) => place._id !== payload._id,
          ),
        };
  
      default:
        return state;
    }
  };
  export default places;