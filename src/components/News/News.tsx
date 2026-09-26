import SectionTitle from "../Common/SectionTitle";
import { ListProps } from "@/types/list";

const News = () => {
    const List = ({ text, url } : ListProps) => (
        <p className="text-body-color mb-5 flex items-center text-lg font-medium">
          <span className="text-black mr-4 flex h-[30px] w-[30px] items-center justify-center">
            —
          </span>
          <span>
            {text}
            {url && (
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-primary hover:underline"
                >
                    [link]
                </a>
            )}
          </span>
        </p>
    );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <SectionTitle
                title="News"
                paragraph="We share news and updates with the NASA AGN community."
                mb="44px"
                center
              />

              <div
                className="mb-12 max-w-[1000px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="space-y-3">
                    <List text='Applying Spotlight Series Speaker, please contact Prof. Erin Hicks (ekhicks@alaska.edu)'></List>
                    <List text="Coming Spotlight Serie Talks: 20 October 2026 1 pm ET / 10 am PT" 
                    />
                    {/* <List 
                      text="Dissertation Jamboree Application (Deadline: 28 March 2026)"
                      url="https://docs.google.com/forms/d/e/1FAIpQLSeufuTliApMdP2cmGTt98EdLHVEEn6C9bklxa4jD6l01lXUZQ/viewform"
                    /> */}
                    <List text="Monthly AGN coffee (Discord)" />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
