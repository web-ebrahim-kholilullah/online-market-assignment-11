

const DeveloperCard = ({ user }) => {
    const { image, name, description,deadline, price } = user;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="">
                <img src={image} alt="Shoes" className="rounded-xl h-[300px]" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold">{name}</h2>
                <p>{description}</p>
                <p className=" text-xl font-medium">{deadline}</p>
                <p className=" text-orange-500 font-bold">Price: {price}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default DeveloperCard;