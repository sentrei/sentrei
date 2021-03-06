import { Box, Center, Text, useColorModeValue } from "@chakra-ui/react";
import type { ComponentProps, FC } from "react";

import { Gradient } from "@sentrei/components/atoms/Gradient";

export type SectionTextProps = {
  flag: string;
  title: string;
  subtitle: string;
  bgGradient: ComponentProps<typeof Gradient>["bgGradient"];
  range: ComponentProps<typeof Gradient>["range"];
};

export const SectionText: FC<SectionTextProps> = ({
  flag,
  title,
  subtitle,
  bgGradient,
  range,
}) => (
  <Box
    maxW="3xl"
    mx="auto"
    px={{ base: "6", lg: "8" }}
    pb={{ base: "4", sm: "8" }}
    textAlign="center"
  >
    <Center>
      <Text
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="lg"
        color={useColorModeValue("purple.600", "purple.400")}
        letterSpacing="wide"
      >
        {flag}
      </Text>
    </Center>
    <Gradient
      bgGradient={bgGradient}
      range={range}
      lineHeight="shorter"
      fontSize={{ base: "4xl", md: "5xl" }}
      fontWeight="extrabold"
      letterSpacing="tight"
    >
      {title}
    </Gradient>
    <Text
      fontSize={{ base: "md", md: "lg" }}
      mt={1}
      colorScheme="gray"
      color={useColorModeValue("gray.600", "gray.400")}
      fontWeight="medium"
    >
      {subtitle}
    </Text>
  </Box>
);
