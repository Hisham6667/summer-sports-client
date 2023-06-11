
const CompoInstructorCard = ({instructor}) => {

  const { name, email, photoURL } = instructor;

  return (
    <div className="card card-side glass">
      <figure className='border-4 border-teal-300 w-40'>
        <img className='w-full h-full' src={photoURL} alt="Movie" />
      </figure>
      <div className="card-body">
        <p className="card-title text-2xl text-center uppercase text-white">{name}</p>
        <p className='text-white'>{email}</p>
      </div>
    </div>
  );
};

export default CompoInstructorCard;