import { memo, VFC } from "react";
import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { NavItem } from "../../types/navItem";
import { ChevronRightIcon } from "@chakra-ui/icons";

type Props = {
  child: NavItem;
};

export const DesktopSubNav: VFC<Props> = memo((props) => {
  const { child } = props;

  return (
    <Link
      href={child.href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      // _hover={{ bg: "gray.900" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            // _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {child.label}
          </Text>
          <Text fontSize={"sm"}>{child.subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{
            opacity: "100%",
            transform: "translateX(0)",
          }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
});
