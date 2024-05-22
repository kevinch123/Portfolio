const PortfolioBox = ({ data }) => {
    const { id, title, image, urlGithub } = data;
  
    return (
      <div key={id} className="p-3 border border-gray-700 rounded-xl bg-gray-800">
        <h3 className="mb-4 text-xl text-blue-700 text-center">{title}</h3>
        <img
          src={image}
          alt={title}
          className="w-full md:w-[200px] rounded-2xl h-auto mx-auto"
        />
        <div className="flex justify-center gap-4 mt-4">
          <a
            href={urlGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 transition duration-150 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Github
          </a>
        </div>
      </div>
    );
  };
  
  export default PortfolioBox;
  