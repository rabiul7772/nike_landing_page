import { copyrightSign } from '../assets/icons';
import { footerLogo } from '../assets/images';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer
      id="footer"
      className=" flex flex-col md:flex-row w-full justify-between items-start gap-12 p-2 relative"
    >
      <div className=" w-full md:max-w-sm flex flex-col gap-4">
        <img src={footerLogo} alt="footer logo" height={100} width={130} />
        <p className="text-gray-400 text-lg md:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store & get rewards.
        </p>

        <ul className="flex gap-6 mt-2">
          {socialMedia.map(social => (
            <li key={social.alt}>
              <img
                src={social.src}
                height={40}
                width={40}
                className="bg-white rounded-full p-2"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full   grid grid-cols-2 md:grid-cols-3  text-lg gap-12 ">
        {footerLinks.map(footerEl => (
          <div key={footerEl.title} className="flex flex-col md:gap-2 gap-1 ">
            <h4 className="mb-2 md:mb-4 text-xl text-white">
              {footerEl.title}
            </h4>
            {footerEl.links.map(link => (
              <div
                key={link.name}
                className="text-gray-400 hover:text-gray-300"
              >
                <a href={link.link}>{link.name}</a>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="text-gray-400 text-base md:text-lg flex text-center  absolute -bottom-1 left-36 md:left-0">
        <img src={copyrightSign} height={16} width={16} alt="copy right sign" />{' '}
        Rabiul {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
