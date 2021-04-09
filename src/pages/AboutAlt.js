/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import PropTypes from 'prop-types';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link';
import Heading from '../components/Heading';
import Header from '../components/Header';
import Image from '../components/Image';
import routeUrls from '../router/routeUrls';
import ContentWrap from '../components/ContentWrap';
import SubscribeContentBlock from '../components/SubscribeContentBlock';
import Footer from '../components/Footer';
import { imgAvatar, imgLogoTest2 } from '../assets/assetLoader';
import Nav from '../components/Nav';
import ContentBlock from '../components/ContentBlock';
import Polaroid from '../components/Polaroid';

const About = ({ posts }) => {
  return (
    <div>
      <header>
        <Nav />

        <ContentWrap sx={{}}>
          <ContentBlock sx={{ pt: 7 }}>
            <Flex>
              <div
                sx={{
                  // textAlign: 'center',
                  pt: 8,
                  width: '60%',
                  pr: 6,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
              >
                <Heading as="h1" variant="heading2" sx={{ mb: 5 }}>
                  Me, myself and I
                </Heading>
                <Paragraph variant="callout" sx={{ pb: 5 }}>
                  Hi, I&apos;m Phillip Miles, an Australian{' '}
                  <span role="img" aria-label="Australian flag emoji">
                    🇦🇺
                  </span>{' '}
                  and I love to make things with technology.
                </Paragraph>
                <Paragraph>
                  Professionally I'm a front-end developer. Front-end
                  development has been my game for a while now. It's where I've
                  felt comfortable and I liked the idea of making things that
                  people would directly interact with.
                </Paragraph>
                <Paragraph>
                  However, I've discovered that I crave to make more then what
                  the realm of front-end development has to offer.
                </Paragraph>
                <Paragraph>
                  Loosly defined{' '}
                  <strong>
                    I'd like to be creating more value for more people.
                  </strong>
                </Paragraph>
                <Paragraph>
                  Front-end development, whilst important and expansive in it's
                  creative possibilities, has always felt like a
                  cog-in-the-machine discipline to me. One small part in service
                  to what was really creating the value.
                </Paragraph>
                <Paragraph>
                  That being an <strong>idea</strong>, promised as an offering{' '}
                  <strong>unique</strong> and <strong>delightful</strong>. A{' '}
                  <strong>complete experience</strong> that would require the
                  combining of many disciplines in order to realise and to reach
                  many people.
                </Paragraph>
                <Paragraph>This is what I want to be making.</Paragraph>
              </div>
              <Flex
                sx={{
                  width: '40%',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-start',
                }}
              >
                <Polaroid sx={{ transform: 'rotate(6deg)' }}>
                  <Image
                    src={imgAvatar}
                    sx={{
                      width: '380px',
                      height: '400px',
                      objectFit: 'cover',
                    }}
                  />
                </Polaroid>
              </Flex>
            </Flex>
            {/* <ContentBlock sx={{ justifyContent: 'center', display: 'flex' }}>
            <Image
              src={imgLogoTest2}
              sx={{
                objectFit: 'contain',
                // height: '400px',
                width: '440px',
              }}
            />
          </ContentBlock> */}
            {/* <div
            sx={{
              // textAlign: 'center',
              // pt: 9,
              maxWidth: 'contentSmall',
              width: '100%',
              margin: 'auto',
              // pl: 6,
              // alignItems: 'center',
              // justifyContent: 'center',
            }}
          >
            <Heading as="h2" variant="heading3" sx={{ mt: 7, mb: 5 }}>
              What is Dev Indie?
            </Heading>
            <Paragraph>
              Dev Indie is a site I created as a place to share my journey and
              anything that I learn in creating complete digital products,
              experiences or services.
            </Paragraph>
            <Paragraph>
              I want this site to be{' '}
              <strong>
                a valuable resource to other developers and designers looking to
                build their own ideas.
              </strong>
            </Paragraph>
            <Heading as="h3" variant="heading4" sx={{ mt: 6, mb: 4 }}>
              Project breakdowns
            </Heading>
            <Paragraph>
              For each of my <a href="">projects</a> I'm breaking down as much
              as I can about it's development, as it happens.
            </Paragraph>
            <Paragraph>
              What decisions I'm making and why. What my priorities and goals
              currently are within the project. What's going well and what
              isn't. Where my time is being spent. What resources I'm spending.
              What I'm working on and more.
            </Paragraph>
            <Paragraph>
              The answer to these I'll be presenting through the individual
              project's progress reports.
            </Paragraph>
            <Paragraph>
              Additionally, for any projects that have made it live I'm showing
              usage data, revenue (if any) and running costs displayed over
              time.
            </Paragraph>
            <Heading as="h3" variant="heading4" sx={{ mt: 6, mb: 4 }}>
              Shared learnings
            </Heading>
            <Paragraph>
              As I develop these projects I'm having to learn a lot more about
              design and development then what my old role as a front-end
              developer previously required. I'm also exploring completely fresh
              ground for me like marketing and monetisation strategies.
            </Paragraph>
            <Paragraph>
              Whatever I learn along they way I'll be sharing as much as I can
              with you.
            </Paragraph>
            <Paragraph>
              Right now the only place I'll be doing this is over on my{' '}
              <a href="">blog</a>. I have some more exciting ideas coming
              further down the line.
            </Paragraph>
            <Heading as="h3" variant="heading4" sx={{ mt: 6, mb: 4 }}>
              Newsletter
            </Heading>
            <Paragraph>
              This will likely be messy experience with me making a lot of
              mistakes but that's where the fun is and it's also where the best
              learning happens.
            </Paragraph>
            <Paragraph>
              If you want to come along for the ride and hopefully learn
              something too make sure to subscribe to the Dev Indie newsletter
              to get all this content delivered straight to your inbox.
            </Paragraph>
          </div> */}
          </ContentBlock>
        </ContentWrap>
        <ContentWrap sx={{ bg: 'neutral.9' }}>
          <ContentBlock>
            <Flex sx={{ flexDirection: 'row-reverse' }}>
              <Flex
                sx={{
                  width: '40%',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  mt: 4,
                }}
              >
                <Image
                  src={imgLogoTest2}
                  sx={{
                    objectFit: 'contain',
                    // height: '400px',
                    // width: '380px',
                  }}
                />
                {/* <Polaroid sx={{ transform: 'rotate(-4deg)' }}>
                <Image
                  src={imgLogoTest2}
                  sx={{
                    objectFit: 'contain',
                    height: '400px',
                    width: '380px',
                  }}
                />
              </Polaroid> */}
              </Flex>
              <div
                sx={{
                  // textAlign: 'center',
                  // pt: 9,
                  width: '60%',
                  pr: 6,
                  // alignItems: 'center',
                  // justifyContent: 'center',
                }}
              >
                <Heading as="h2" variant="heading3" sx={{ mb: 5 }}>
                  What is Dev Indie?
                </Heading>
                <Paragraph>
                  Dev Indie is a site I created as a place to share my journey
                  and anything that I learn in creating complete digital
                  products, experiences or services.
                </Paragraph>
                <Paragraph>
                  I want this site to be{' '}
                  <strong>
                    a valuable resource to other developers and designers
                    looking to build their own ideas.
                  </strong>
                </Paragraph>
                <Paragraph>
                  For each of my <a href="">projects</a> I post regular progress
                  reports explaining what it is I am working on and why. What's
                  going well and what isn't. You'll be able to observe the
                  development process as it happens and gain an understanding as
                  to what goes into making these projects.
                </Paragraph>
                <Paragraph>
                  I'll also be showing how successful (or unsuccessful) released
                  projects are doing using metrics like usage data, revenue and
                  operation costs.
                </Paragraph>
                <Paragraph>
                  As I make these projects I'm learning a lot about design,
                  development, marketing and more. For now this knowledge I
                  share in my <a href="">blog</a> but I have some more ideas for
                  how else I might better share this further down the line.
                </Paragraph>
                <Paragraph>
                  This will likely be messy experience with me making a lot of
                  mistakes but that's where the fun is and it's also where the
                  best learning happens.
                </Paragraph>
                <Paragraph>
                  If you want to come along for the ride and hopefully learn
                  something too make sure to subscribe to the Dev Indie
                  newsletter to get all this content delivered straight to your
                  inbox.
                </Paragraph>

                {/* <Heading as="h3" variant="heading4" sx={{ mt: 6, mb: 4 }}>
                  Project breakdowns
                </Heading>
                <Paragraph>
                  For each of my <a href="">projects</a> I'm breaking down as
                  much as I can about it's development, as it happens.
                </Paragraph>
                <Paragraph>
                  What decisions I'm making and why. What my priorities and
                  goals currently are within the project. What's going well and
                  what isn't. Where my time is being spent. What resources I'm
                  spending. What I'm working on and more.
                </Paragraph>
                <Paragraph>
                  The answer to these I'll be presenting through the individual
                  project's progress reports.
                </Paragraph>
                <Paragraph>
                  Additionally, for any projects that have made it live I'm
                  showing usage data, revenue (if any) and running costs
                  displayed over time.
                </Paragraph>
                <Heading as="h3" variant="heading4" sx={{ mt: 6, mb: 4 }}>
                  Shared learnings
                </Heading>
                <Paragraph>
                  As I develop these projects I'm having to learn a lot more
                  about design and development then what my old role as a
                  front-end developer previously required. I'm also exploring
                  completely fresh ground for me like marketing and monetisation
                  strategies.
                </Paragraph>
                <Paragraph>
                  Whatever I learn along they way I'll be sharing as much as I
                  can with you.
                </Paragraph>
                <Paragraph>
                  Right now the only place I'll be doing this is over on my{' '}
                  <a href="">blog</a> but I have some more ideas coming further
                  down the line.
                </Paragraph>
                <Heading as="h3" variant="heading4" sx={{ mt: 6, mb: 4 }}>
                  Newsletter
                </Heading>
                <Paragraph>
                  This will likely be messy experience with me making a lot of
                  mistakes but that's where the fun is and it's also where the
                  best learning happens.
                </Paragraph>
                <Paragraph>
                  If you want to come along for the ride and hopefully learn
                  something too make sure to subscribe to the Dev Indie
                  newsletter to get all this content delivered straight to your
                  inbox.
                </Paragraph> */}
              </div>
              {/* I'm learning a lot as I develop these projects and want to share
                this knowledge here too.  */}
              {/* On my blog I explore topics such as
                idea conception, design, development, dev lifestyle, business
                strategy and marketing.
                 */}
              {/* <br />
                - Conception
                <br />
                - Design
                <br />
                - Development
                <br />
                - Testing
                <br />
                - Motivation / development lifestyle
                <br />
                - Monetisation strategies
                <br />
                - Marketing
                <br />
                - Gathering user data - Analytics
                <br /> */}

              {/* As I work on all these areas I'll be sharing all that I learn in
              various and hopefully engaging ways. Knowledge vault
              <Paragraph>
                I doesn't have to be a big idea. It also doesn't have to be just
                one idea. In fact on both accounts it won't be as I'd like to be
                producing a variety of ideas quickly. This will allow me to
                experiement more freely and prevent me from investing too much
                time into bad ideas.
              </Paragraph>
              <Paragraph>
                It does have to involve technology though. Technology is so
                incredibly powerful in it's ability to scale and provide value
                to many people and with the state of technology today it's
                feasible for a single developer to accomplish this.
              </Paragraph>
              <Paragraph>
                It's also where my skills lie sooo... no brainer right.
              </Paragraph> */}
              {/* <Heading as="h2" variant="heading3" sx={{ mt: 7, mb: 5 }}>
                This site
              </Heading>
              <Paragraph>
                Dev Indie is a site I created as a place to share my journey and
                of what I learn whilst attempting to make web and mobile apps.
              </Paragraph>
              <Paragraph>
                I hope to show what cool things a motivated solo developer and
                designer can create by themselves with the right skills and to
                I'd like to be transparent about my process
              </Paragraph>
              <Paragraph>
                I expected to learn a lot about design, development and
                marketing throughout the process and thought a place to share
                this knowledge would be valuable with others who may be hoping
                to do something similar.
              </Paragraph>
              <Paragraph>
                In order to allow others get the most out of this site, I want
                to be brutally honest and show transparency into how the apps
                are performing. What the usage numbers are, what the running
                costs are, how much (if any) revenue is coming in.
              </Paragraph>
              <Paragraph>
                This data I could then align with any key actions and decisions
                I have made to maybe suggest what works and doesn&apos;t work in
                building successful apps.
              </Paragraph> */}
            </Flex>
          </ContentBlock>
        </ContentWrap>
        {/* </ContentBlock> */}
      </header>

      <SubscribeContentBlock />
      <Footer />
    </div>
  );
};

About.propTypes = {
  posts: PropTypes.array,
};

export default About;
