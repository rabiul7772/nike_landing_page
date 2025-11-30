const ServiceCard = ({ imgURL, label, subtext }) => {
  console.log(imgURL);

  return (
    <div className="flex flex-1 flex-col justify-start  sm:w-[400px] w-full gap-4 p-8 shadow-3xl">
      <img
        src={imgURL}
        alt={label}
        height={45}
        width={45}
        className="bg-coral-red p-2 rounded-full"
      />
      <h4 className="mt-2 text-2xl font-semibold">{label}</h4>
      <p className="text-slate-gray text-lg mb-4">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
