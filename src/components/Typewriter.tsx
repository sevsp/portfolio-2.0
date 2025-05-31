import { useEffect, useState } from "react";

const texts = ["Frontend Developer", "Freelancer", "Software Engineer"];

function Typewriter() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[textIndex];
    const typingSpeed = 100;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 4000); 
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <h2 className="text-secundary typewriter text-2xl my-4 mx-3 min-h-[32px] italic">
      {displayedText}
    </h2>
  );
}

export default Typewriter;
