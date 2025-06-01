import { RxLink2 } from "react-icons/rx";


interface ExperienceCardProps {
    link: string;
    companyPng: string;
    position: string;
    company: string;
    date: string;
    work: string[];
    buttonTitle: string;
}



function ExperienceCard ({position, company, date, work, buttonTitle, link, companyPng}: ExperienceCardProps) {
    return(
        <div>
            <h3 className="text-secundary mt-4 ml-4 text-2xl font-bold">{position}</h3>
            <div className="flex items-center mx-4 mt-4">
                <h4 className="text-greyFont text-2xl">{company}</h4>
                <img
                    src={companyPng}
                    alt={`${company} logo`}
                    className="w-10 h-10 rounded-full object-cover ml-2"
                />
            </div>            
            <p className="text-greyFont mt-4 mx-4">{date}</p>
            <ul>
                {work.map((activity) => (
                    <li key={activity} className="text-greyFont mt-4 mx-14">
                        {activity}
                    </li>
                ))}
            </ul>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secundary border border-white/20 px-4 py-2 rounded inline-flex items-center gap-2 mt-5 mx-14 hover:bg-[#2a2a2a] transition-colors duration-200"
            >
                <RxLink2 />
                <span>{buttonTitle}</span>
            
            </a>
        </div>
    );
}

export default ExperienceCard;