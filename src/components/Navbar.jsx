import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

const Navbar = () => {
  const [active, setActive] = useState(false);
  const controls = useAnimation();

  const handleToggle = () => {
    setActive(prevState => !prevState);
    controls.start({
      opacity: active ? 0 : 1,
      transition: { duration: 0.3 }
    });
  };

  const closeMenu = () => {
    setActive(false);
    controls.start({
      opacity: 0,
      transition: { duration: 0.3 }
    });
  };

  return (
    <nav>
      <motion.div
        animate={controls}
        initial={{ opacity: 0 }}
        className={twMerge(
          'fixed top-0 right-0 w-full h-full bg-gray-900 text-white transform transition-transform duration-500 ease-in-out',
          active ? 'translate-x-0 z-10' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-12 text-3xl">
          <motion.a href="#works" className="hover:text-yellow-500" onClick={closeMenu}>
            works
          </motion.a>
          <motion.a href="#about" className="hover:text-yellow-500" onClick={closeMenu}>
            about
          </motion.a>
          <motion.a href="#contact" className="hover:text-yellow-500" onClick={closeMenu}>
            contact
          </motion.a>
        </div>
      </motion.div>

      {/* Contenedor del ícono del menú */}
      <div
        onClick={handleToggle}
        className={clsx(
          'fixed top-3 right-5 cursor-pointer z-20 flex flex-col items-center justify-center h-16'
        )}
      >
        {/* Primera barra */}
        <div
          className={clsx(
            'w-6 h-[2px] rounded mb-1 transition-transform duration-300 ease-in-out bg-gray-800',
            active && 'rotate-45 translate-y-[5px] bg-white'
          )}
        ></div>
        <div
          className={clsx(
            'w-6 h-[2px] rounded mb-1 transition-opacity duration-300 ease-in-out bg-gray-800',
            active && 'opacity-0'
          )}
        ></div>

        <div
          className={clsx(
            'w-6 h-[2px] rounded transition-transform duration-300 ease-in-out bg-gray-800',
            active && '-rotate-45 -translate-y-[7px] bg-white'
          )}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
