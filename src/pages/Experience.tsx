import ExperienceCard from "../components/ExperienceCard";
import continentalLogo from "../assets/continental.png";
import cltLogo from "../assets/clt.jpeg";

function Experience() {
    return (
    <section id="experience" className="flex flex-col items-center md:mt-40 pt-24 mx-5">
        <h2 className="text-secundary mt-20 mb-10 text-3xl font-bold">
        Work Experience
        </h2>

        <div className="flex items-start relative w-full max-w-4xl">
            <div className=" flex justify-center ml-3 h-[calc(100%+40px)] w-px bg-borderGrey absolute top-0">
                <div className="w-3 h-3 bg-white rounded-full z-10 absolute top-[25px]"></div>
                <div className="h-[calc(100%+32px)] w-px absolute top-0"></div>
            </div>

            <div className="pl-4 w-full">
                <ExperienceCard
                    link="https://www.bancontinental.com.py/#/"
                    position="Frontend Web Developer"
                    company="Continental Bank S.A.E.C.A"
                    companyPng={continentalLogo}
                    date="03/2024 - Present"
                    work={[
                    "• I resolved technical issues related to front-end development, ensuring a quick resolution to maintain project deadlines.",
                    "• I optimized website content for mobile devices using responsive design techniques.",
                    "• I worked closely with UX/UI designers to translate their designs into functional web applications.",
                    "• I collaborated with back-end developers to enhance website functionality and integrate new features.",
                    "• I was part of the team responsible for optimizing platform security by integrating TopazOFD, a solution based on artificial intelligence and a risk engine for real-time threat detection.",
                    "• I maintained constant collaboration with multidisciplinary teams to implement new features aimed at preventing fraud and strengthening system security.",
                    ]}
                    buttonTitle="View Website"
                />
            </div>
        </div>

        <div className="flex items-start relative w-full max-w-4xl mt-10">
            <div className=" flex justify-center ml-3 h-[calc(100%+40px)] w-px absolute top-0">
                <div className="h-full w-px bg-borderGrey absolute top-0"></div>
                <div className="w-3 h-3 bg-white rounded-full z-10 absolute top-[25px]"></div>
            </div>

            <div className="pl-4 w-full">
                <ExperienceCard
                    link="https://www.clt.com.py/"
                    position="Frontend Web Developer"
                    company="CLT S.A."
                    companyPng={cltLogo}
                    date="03/2024 - Present"
                    work={[
                            "• I worked as part of a cross-functional team at CLT, a technology consulting company, contributing to the development of projects for major financial institutions.",
                            "• I was assigned to the Continental Bank project, where I focused on building scalable and maintainable front-end components tailored to banking requirements.",
                            "• I followed industry standards and client-specific practices to deliver high-quality code within a secure and performance-oriented environment.",
                            "• I participated in code reviews, contributed to architectural decisions, and helped ensure consistency between multiple front-end modules developed across teams.",
                            "• I collaborated with project managers and business analysts from CLT to align the bank's functional requirements with technical deliverables.",
                    ]}
                    buttonTitle="View Website"
                />
            </div>
        </div>
    </section>
  );
}

export default Experience;
