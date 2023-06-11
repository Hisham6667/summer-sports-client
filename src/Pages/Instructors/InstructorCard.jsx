
const InstructorCard = ({ instructor }) => {

  const { name, email, photoURL } = instructor;

  return (
    <div className="card card-side glass">
      <figure className='border-4 border-teal-300 w-60'>
        <img className='w-full h-full' src={photoURL} alt="Movie" />
      </figure>
      <div className="card-body">
        <p className="card-title text-3xl text-center uppercase">{name}</p>
        <p className='text-lg'>{email}</p>
      </div>
    </div>
  );
};

export default InstructorCard;