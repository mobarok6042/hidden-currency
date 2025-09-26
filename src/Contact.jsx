import skyImage from './assets/sky.jpg'
import { Link } from 'react-router-dom';
import ContactForm from './Mail'; 

const Contact = () => {
    return (
         <div
              className="relative h-screen w-full bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${skyImage})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        
              {/* Content */}
              <div className="relative flex flex-col items-center justify-center text-center px-4 space-y-6">
              <div className="mb-64">
                <ContactForm></ContactForm>
              </div>
                <Link to ="/">
                  <button className="btn btn-outline btn-secondary font-bold text-gray-700 border-b-8 border-6 border-green-800 text-2xl w-54 h-14 hover:bg-primary hover:text-white">
                    Go to home
                  </button>
                </Link>
              </div>
            </div>
    );
};

export default Contact;