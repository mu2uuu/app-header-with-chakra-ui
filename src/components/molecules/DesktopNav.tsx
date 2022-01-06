import { memo, VFC } from "react";
import {
  Box,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
} from "@chakra-ui/react";
import { NAV_ITEMS } from "../../data/nav_items";
import { DesktopSubNav } from "./DesktopSubNav";

export const DesktopNav: VFC = memo(() => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={"white"}
                _hover={{ textDecoration: "none", color: "gray.200" }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={"white"}
                p={4}
                rounded={"xl"}
                minW={"sm"}
                color="gray.900"
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} child={child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
});
