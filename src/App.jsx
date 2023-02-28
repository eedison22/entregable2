import React from 'react';

import academloLogo from './assets/academlo-icon-shadow.png';

const App = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center p-10">
      <div className="max-w-7xl flex flex-col md:flex-row gap-5">
        <a
          className="float md:basis-1/3 hover:drop-shadow-[0_0_2rem_#d8272780] flex justify-center items-center"
          href="https://www.academlo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={academloLogo} alt="Academlo Logo" />
        </a>
        <div className="md:basis-2/3 border-t-4 md:border-l-4 md:border-t-0 border-[#d8272780] p-6">
          <h1 className="text-white text-5xl font-semibold">Template React Gen 23 - 1</h1>
          <p className="text-white mt-10 text-2xl">
            Esta template fue creada por la Generación 23 de Academlo y esta configurada
            con Prettier, ESLint y Tailwind para que solo empieces a codear.{' '}
            <span className="italic text-red-500">Happy coding!</span>
          </p>
          <ul className="mt-5 flex flex-row gap-8 text-2xl">
            <li>
              <a
                className="block opacity-50 hover:opacity-100 text-cyan-300 border-b-2 border-transparent hover:text-cyan-500 hover:border-cyan-500"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
            </li>
            <li>
              <a
                className="block opacity-50 hover:opacity-100 text-violet-300 border-b-2 border-transparent hover:text-violet-500 hover:border-violet-500"
                href="https://vitejs.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vite
              </a>
            </li>
            <li>
              <a
                className="block opacity-50 hover:opacity-100 text-green-300 border-b-2 border-transparent hover:text-green-500 hover:border-green-500"
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tailwind
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
