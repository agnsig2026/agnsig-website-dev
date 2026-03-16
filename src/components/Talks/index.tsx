import SectionTitle from "../Common/SectionTitle";
import talksData from "./talksData";

const Talks = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container mx-auto">
          <SectionTitle
            title="Talks"
            paragraph={`We host two talk series: the Vision Series and the Spotlight Series. 
            The Vision Series features colloquium-style talks by senior astronomers that provide broad perspectives 
            on specific topics, while the Spotlight Series highlights recent progress and new results from recent papers.
            The speakers’ names, affiliations, talk titles, and links to the YouTube recordings are listed here.`}
            center
          />
          <table className="mx-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800 text-center">
                <th className="p-3 border">Series</th>
                <th className="p-3 border">Date</th>
                <th className="p-3 border">Speaker</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Link</th>
             </tr>
            </thead>
            <tbody>
            {talksData.map((feature) => (
              <tr key={feature.id} className="text-center">
                <td className="p-3 border">
                  {feature.type}
                </td>

                <td className="p-3 border">
                 {feature.date}
                </td>

                <td className="p-3 border whitespace-pre-line">
                 {feature.name}
                </td>

                <td className="p-3 border font-semibold">
                 {feature.title}
                </td>
                
                <td className="p-3 border font-semibold">
                  <a
                    href={feature.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    [link]
                  </a>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Talks;
