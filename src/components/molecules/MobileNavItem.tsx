import { memo, VFC } from "react";
import {
  Box,
  Collapse,
  Flex,
  Icon,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { NavItem } from "../../types/navItem";

type Props = {
  child: NavItem;
};

export const MobileNavItem: VFC<Props> = memo((props) => {
  const { isOpen, onToggle } = useDisclosure();
  const { child } = props;

  return (
    <Box key={child.label}>
      <Stack spacing={4} onClick={child.children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={child.href ?? "#"}
          justify={"space-between"}
          align={"center"}
          _hover={{ textDecoration: "none" }}
        >
          <Text
            fontWeight={600}
            // color={useColorModeValue("gray.600", "gray.200")}
          >
            {child.label}
          </Text>
          {child.children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
        <Collapse
          in={isOpen}
          animateOpacity
          style={{ marginTop: "0!important" }}
        >
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={"solid"}
            // borderColor={useColorModeValue("gray.200", "gray.700")}
            align={"start"}
          >
            {child.children &&
              child.children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    </Box>
  );
});
