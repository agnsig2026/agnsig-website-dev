import SectionTitle from "../Common/SectionTitle";
import memberData from "./memberData";

const TeamMember = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Leadership Council"
            mb="44px"
            center
          />
          <table className="mx-auto border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800 text-center">
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Affiliation</th>
             </tr>
            </thead>
            <tbody>
            {memberData.map((feature) => (
              <tr key={feature.id} className="text-center">
                <td className="p-3 border whitespace-pre-line">
                  {feature.name}
                </td>

                <td className="p-3 border">
                 {feature.affiliation}
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

export default TeamMember;
