import { GlowingEffect } from "./ui/glowing-effect";

const About = () => {
    return (
        <section id="about">
            <div className="bg-white pt-24 sm:pt-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            About Me
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Hello! I&apos;m Aman Bhoria, a Software Developer with over 2.5 years of experience in full-stack development and a strong passion for creating innovative solutions to real-world problems.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            I co-founded <span className="font-bold">Crewgage</span>, a workforce management software, where I developed a <span className="font-bold">React Native</span> app using <span className="font-bold">Firebase</span> to manage teams and data. At BITQIT Pvt. Ltd., I contributed to developing <span className="font-bold">AutoDM v1.2.0</span>, streamlining data migration processes and enhancing efficiency for various clients.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            I&apos;ve also worked as a freelancer, building robust web applications using <span className="font-bold">Laravel</span>, <span className="font-bold">PHP</span>, and <span className="font-bold">MySQL</span> for various clients. This experience has strengthened my backend and database skills, and given me a broader perspective on delivering tailored solutions.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            With expertise in technologies like <span className="font-bold">React</span>, <span className="font-bold">React Native</span>, <span className="font-bold">Node.js</span>, and <span className="font-bold">Firebase</span>, I&apos;m dedicated to delivering exceptional user experiences. Beyond development, I enjoy exploring new technologies like <span className="font-bold">Rust</span> and <span className="font-bold">GraphQL</span> and contributing to open-source projects.
                        </p>
                        <p className="mt-4 text-lg text-gray-600">
                            When I&apos;m not coding, you&apos;ll find me producing music, diving into creative projects, or exploring the world around me. My journey as a developer is driven by a desire to continuously learn, collaborate, and push boundaries.
                        </p>
                    </div>
                    
    <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
      >
        
        </GridItem>
                </div>
            </div>
        </section>
    );
};

const GridItem = ({ area, icon, title, description }) => {
    return (
      <li className={`min-h-[14rem] list-none ${area}`}>
        <div className="relative h-full rounded-2xl border mt-10">
          <GlowingEffect
            blur={0}
            borderWidth={3}
            spread={80}
            glow={true}
            disabled={false}    
            proximity={64}
            inactiveZone={0.01}
          />
          <div className="border-0.75 gap-6 relative flex h-full flex-col p-3 md:p-3 justify-between overflow-hidden rounded-xl">
            <div className="relative flex flex-1 flex-col justify-between">
              <div className="mx-auto lg:mx-0 lg:max-w-none">
                        <img
                            src="./techBanner.webp"
                            alt="Aman Bhoria"
                            className="rounded-lg shadow-lg"
                        />
                </div>
            </div>
          </div>
        </div>
      </li>
    );
  };

export default About;
