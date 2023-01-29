export default function SocialMedia({size,margin}){
  const divClass="flex justify-center md:justify-start "+{margin}+" gap-7";
    return(
        <div className={divClass}>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/stefania-steaburdea-7b7b29209/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" className={size}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/StefaniaSteaburdea"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="../assets/github.png" className={size}/>
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/stefania.steaburdea/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src="../assets/instagram.png" className={size} />
        </a>
      </div>
    );
}