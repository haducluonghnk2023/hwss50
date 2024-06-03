import { useEffect, useState } from "react";
import "./LazyLoadComp.css";

export default function LazyLoadComp() {
  const [content, setContent] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const generateLoremIpsum = () => {
    return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam velit dolor porro sed non nemo doloremque explicabo molestiae possimus, deleniti, rerum officiis accusamus eveniet vero sunt in id aspernatur.
    Assumenda voluptate distinctio velit nisi aliquam placeat eaque ad saepe pariatur aspernatur repellat omnis doloremque delectus dignissimos sint laborum molestiae sapiente, quisquam labore consequatur possimus. Quam tempora totam voluptate voluptatibus!
    Ea aliquam, animi assumenda ipsam praesentium, eveniet at rerum pariatur modi voluptas magni. Possimus nobis, cumque consectetur voluptates quo consequuntur sit assumenda ea ducimus dicta corporis, mollitia debitis, harum vitae.
    Eligendi dignissimos molestias maiores. Velit deserunt dolor sed rerum. Adipisci cumque dolorem tenetur minima eum tempore beatae consequuntur expedita nam delectus, quibusdam aperiam, quas provident perferendis ipsum dicta repellendus itaque?
    Consectetur amet praesentium assumenda numquam esse officia, saepe reiciendis maiores distinctio minima unde, deleniti voluptatem non quae sed, soluta facilis quia voluptatibus beatae. Doloremque natus eveniet assumenda nesciunt obcaecati neque.
    Molestiae exercitationem in aliquid! Adipisci similique ab deserunt quam porro sed nulla inventore, quas ipsam modi at pariatur atque totam accusamus natus eaque quidem voluptas aliquam, nobis velit maxime? Labore.
    Atque perspiciatis iusto veritatis dolore quod, similique animi nisi quam modi, eius cupiditate repudiandae temporibus corporis repellendus tempora. Minus, deleniti. Cum reprehenderit itaque ut voluptatem explicabo nulla repellat, aspernatur laborum!
    Quisquam illum, suscipit esse praesentium ex soluta eligendi laudantium rerum earum consectetur asperiores maiores minima nam qui fugiat voluptatem libero aliquam dicta, sed tempora quis quibusdam molestias non. Modi, vero.
    Voluptas quisquam, nesciunt deserunt, consequuntur laborum possimus consectetur impedit repellat quidem sit ratione aspernatur itaque dicta incidunt nam totam unde omnis repudiandae corporis natus facere exercitationem commodi, quibusdam magnam. Modi.
    Eius excepturi sunt autem. Ad commodi iure sequi qui, tenetur delectus quae vel facere at molestias excepturi aut laborum minus nostrum necessitatibus, cupiditate nemo repellat exercitationem assumenda? A, necessitatibus corrupti. `;
  };

  const loadMoreContent = () => {
    setLoading(true);
    setTimeout(() => {
      setContent((prevContent) => [
        ...prevContent,
        ...Array.from({ length: 5 }, () => generateLoremIpsum()),
      ]);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    loadMoreContent();

    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 50
      ) {
        loadMoreContent();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}
