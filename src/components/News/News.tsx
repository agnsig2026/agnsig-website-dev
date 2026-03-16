import SectionTitle from "../Common/SectionTitle";
import { ListProps } from "@/types/list";

const checkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="fill-current">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
);

const News = () => {
    const List = ({ text, url } : ListProps) => (
        <p className="text-body-color mb-5 flex items-center text-lg font-medium">
          <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
            {checkIcon}
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
                    <List text="Coming Spotlight Serie Talks: 17 March 1 pm ET / 10 am PT" 
                    />
                    <List 
                      text="Dissertation Jamboree Application (Deadline: 28 March 2026)"
                      url="https://docs.google.com/forms/d/e/1FAIpQLSeufuTliApMdP2cmGTt98EdLHVEEn6C9bklxa4jD6l01lXUZQ/viewform"
                    />
                    <List text="Monthly AGN coffee (Discord)" />
                    <List text="COPAG Astro2030" />
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
