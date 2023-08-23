import Head from "next/head";
import { Box, Button, Flex, Text, VStack, Image, Grid } from "@chakra-ui/react";
import { Layout } from "@/components/Layout";
import Link from "next/link";
import styled from "@emotion/styled";
import { description } from "@/utils/constants";
import { motion } from "framer-motion";

export default function Home() {
  const today = new Date();
  const hour = today.getHours();
  const amountOfImages = 9;
  const bgImgNumber = (hour % amountOfImages) + 1;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero backgroundImage={`bg_${bgImgNumber}.png`}>
          <Flex p="0 2rem" justifyContent="space-between" alignItems="center">
            <Text textTransform="uppercase" fontWeight={700}>
              Pockets.gg
            </Text>
            <Text
              filter="drop-shadow(0 2px 0.5rem rgba(0, 0, 0, 0.75))"
              fontWeight={700}
            >
              Requires a Solana wallet
            </Text>
            <Link href="https://app.pockets.gg">
              <Button variant="outline">Play Pockets!</Button>
            </Link>
          </Flex>
          <Grid placeItems="center" flexGrow={1}>
            <Flex gap="2rem">
              <Link href="https://app.pockets.gg">
                <Image
                  w="200px"
                  src="logo.png"
                  alt="logo"
                  borderRadius="2rem"
                  transition="all 0.25s ease-in-out"
                  _hover={{
                    transform: "scale(1.1)",
                  }}
                />
              </Link>
              <Box>
                <HeroText>Level-up</HeroText>
                <HeroText>Join Factions</HeroText>
                <HeroText>Build your city</HeroText>
                <Flex gap="1rem" alignItems="center">
                  <Link href="https://spacemandev.notion.site/Pockets-GG-f4681aac8fc24cf99ad304af3335f394?pvs=4">
                    <Button
                      variant="outline"
                      size="md"
                      filter="drop-shadow(0 2px 2px rgba(0,0,0,0.75))"
                      _hover={{
                        bg: "#222",
                        borderColor: "transparent",
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                  <Link href="https://app.pockets.gg">
                    <Button py="1.5rem">Play Now</Button>
                  </Link>
                </Flex>
                {/* https://spacemandev.notion.site/Pockets-GG-f4681aac8fc24cf99ad304af3335f394?pvs=4 */}
              </Box>
            </Flex>
          </Grid>
        </Hero>
        <Grid placeItems="center" p="3rem">
          <Text
            fontWeight="700"
            fontSize="3rem"
            letterSpacing="1px"
            opacity="0.5"
          >
            What is this?
          </Text>
          <Link href="https://www.loom.com/share/8f7b332616794f3e89a0d7e61fd7e650?sid=37518785-741e-47e9-b76b-aaf2c09c4284">
            <Image
              src="demo.png"
              alt="demo-vid-thumbnail"
              borderRadius="2rem"
              transition="all 0.25s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
                filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.4))",
              }}
            />
          </Link>
        </Grid>

        {description.map((d, index) => (
          <Flex
            key={d.title}
            p="2rem"
            h={"700px"}
            justifyContent={"center"}
            alignItems="center"
            flexDirection={"column"}
            bg={index % 2 == 0 ? "whiteAlpha.200" : ""}
          >
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={PreviewAnimation}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <VStack spacing="2rem" maxW="800px" alignItems="start">
                <HeroText pb="28">{d.title}</HeroText>
                <HeroBodyText>{d.description}</HeroBodyText>
              </VStack>
            </motion.div>
          </Flex>
        ))}

        <Box maxW="600px" m="0 auto" py="4rem" letterSpacing="0.25px">
          <Text opacity="0.4" py="2rem">
            Better landing page coming soon! In meantime, here is the gist...
          </Text>
          {`  **Welcome to Pockets.GG!:**

Enter a world where social coordination meets thrilling challenges and endless rewards. In Pockets, you'll be part of a faction and work with other players to achieve victory through various means. Here's a sneak peek at what awaits you:

**Create Your Character:**
Mint characters from unique NFT collections. Level up combat and non-combat skills to strengthen your character and aid your faction.

**Join a Faction:**
Create or join a faction and become a citizen, working together with others to achieve one or more victory conditions. Harvest resources, engage in governance, and contribute to the overall success of your faction.

**Explore Resource Fields:**
Discover, prospect, and harvest resource fields. Turn common resources into rarer forms, and use them for upgrading skills, construction, or XP gain.

**Build and Utilize Stations:**
Build stations to process resources or train units for combat. Expand your faction's defenses and utilize different tiers of resources.

**Engage in Battle:**
Take part in thrilling battles using units trained at your faction's combat stations. Win Domination Points for victory and work towards the Domination victory condition.

**Govern Your Faction:**
Participate in collective decision-making through voting, delegating, or transferring power. Influence the building, upgrading, or changing of your faction's rules.

**Complete AI City Favors:**
Mint and complete requests from AI City States, gaining fame for your faction and moving closer to the Favor victory.

**Win Prizes:**
Participate in seasonal competitions to win prizes. The prize pot grows with activities costing $BONK, and it's distributed among various winning categories.

**What's at Stake:**

- 20% to game developers
- 20% burned
- 15% to the Faction with the most battles won ,
- 15% to the Faction with the highest total level
- 15% to the Faction with the highest fame amongst AI City States
- 15% to the Faction that burned the most resources

**The More You Play, the More You Win:**
Factions can win multiple categories to get the full 60% of the prize pool.

Whether you're into resource management, strategic combat, or social coordination, Pockets offers something for everyone. Join today and become part of an ever-growing world of fun, challenge, and reward. The more players, the bigger the prize! Join now and carve your path to victory!
`
            .split(`**`)
            .map((e) => (
              <Text key={e}>{e}</Text>
            ))}
        </Box>
      </Layout>
    </>
  );
}

const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
};

const Hero = styled(Flex)`
  flex-direction: column;
  background-position: 50% 50%;
  animation: zoom 20s infinite ease-in-out;
  padding: 2rem 2rem 4rem;
  min-height: 59vh;

  @keyframes zoom {
    from {
      background-size: 120%;
    }
    50% {
      background-size: 100%;
    }
    to {
      background-size: 120%;
    }
  }

  @keyframes slide {
    from {
      background-position: 0%;
    }
    50% {
      background-position: 100%;
    }
    to {
      background-position: 0%;
    }
  }

  @media only screen and (max-width: 1050px) {
    animation: slide 40s infinite ease-in-out;
  }
`;

const HeroText = styled(Text)`
  font-weight: 700;
  font-size: 4rem;

  filter: drop-shadow(0 2px 0.5rem rgba(0, 0, 0, 0.75));
`;

const HeroBodyText = styled(Text)`
  text-align: start;
  font-weight: 500;
  font-size: 3rem;
  filter: drop-shadow(0 2px 0.5rem rgba(0, 0, 0, 0.75));
`;
