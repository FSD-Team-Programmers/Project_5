import React from 'react'

export default function Favorite() {
    const [favorites, setFavorites] = useState([]);

    const ShowCard = ({ place }) => {
      return (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={place.img} />
          <Card.Body>
            <Card.Title>{place.name}</Card.Title>
            <Card.Text>{place.description}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>capacity: {place.capacity}</ListGroupItem>
            <ListGroupItem>city: {place.city}</ListGroupItem>
            <ListGroupItem>address: {place.address}</ListGroupItem>
            <ListGroupItem>availability: {place.availability}</ListGroupItem>
          </ListGroup>
        </Card>
      );
    };
  
    const showPlaces = () => {
      return favorites.map((place) => (
        <div key={place.id}>
          <ShowCard place={place} />
        </div>
      ));
    };
  
    useEffect(() => {
      axios
        .get(`http://localhost:5000/favorite`)
        .then((result) => {
          if (result.status == 200) {
            setFavorites(result.data);
          }
        })
        .catch((err) => {
          console.log(err)
        });
    }, []);
  
    return (
      <>
      <div className="places">
        {showPlaces()}
        </div>
      </>
    );
}
