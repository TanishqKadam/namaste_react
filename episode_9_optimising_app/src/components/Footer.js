const Footer = ()=>{
    const year = new Date().getFullYear();
    return(
        <div className='footer'>
           Cretated By
           <i className='fa-solid fa heart'></i>
           <a href='https://www.linkedin.com/in/tanishq-kadam' target='_blank' title='Tanishq linkedin profile'>
           Tanishq Kadam
           </a>
           <i className='fa-solid fa-copyright'></i>
           {year}
           <strong>
               Food<span>Zone</span>
           </strong>
        </div>
    );
};

export default Footer;