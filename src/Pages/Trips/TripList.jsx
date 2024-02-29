import TripCard from "./TripCard";

const TripList = () => {
  const TripsArray = [
    {
      id: '1',
      exit: 'Valencia',
      arrival: 'Madrid',
      date: '29/02/2024',
      time: '2'
    },
    {
      id: '2',
      exit: 'Valencia',
      arrival: 'Madrid',
      date: '29/02/2024',
      time: '2'
    },
    {
      id: '3',
      exit: 'Valencia',
      arrival: 'Madrid',
      date: '29/02/2024',
      time: '2'
    },
  ]
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 pt-10 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {TripsArray.length !== 0 ? (
              TripsArray.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))
            ) : (
              <h1>No existen viajes</h1>
            )}

          </div>
        </div>
      </section>
    </>
  )
}

export default TripList;