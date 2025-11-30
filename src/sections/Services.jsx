import ServiceCard from '../components/ServiceCard';
import { services } from '../constants';

const Services = () => {
  return (
    <section
      id="services"
      className=" border-2 border-pink-500 max-container w-full flex justify-between flex-wrap md:gap-2 gap-6 "
    >
      {services.map(service => (
        <div key={service.label}>
          <ServiceCard {...service} />
        </div>
      ))}
    </section>
  );
};

export default Services;
