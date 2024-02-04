const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="fixed inset-x-0 bottom-0 w-full bg-pink-200 text-center p-4">
      <p>
        ❤ Created By -
        <i className="fa-solid fa heart"></i>
        <a
          href="https://www.linkedin.com/in/tanishq-kadam"
          target="_blank"
          title="Tanishq linkedin profile"
        >
          Tanishq Kadam
        </a>
        <i className="fa-solid fa-copyright"></i>
        {year} - Food<span>Zone</span>
      </p>
    </div>
  );
};

export default Footer;