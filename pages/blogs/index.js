import BlogItem from "../../components/blog/BlogItem";
import Container from "../../components/Container";
import { H1, H2, H3, P } from "../../components/Typography";
import Section from "../../components/Section";

function Home() {
  return (
    <Section>
      <Container>
        <H1 text="Blogs" styles="uppercase" />
        <BlogItem
          title="Blog Title"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet."
        />
        <BlogItem
          title="Blog Title"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet."
          reversed={true}
        />
        <BlogItem
          title="Blog Title"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet."
        />
        <BlogItem
          title="Blog Title"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet."
          reversed={true}
        />
      </Container>
    </Section>
  );
}

export default Home;
