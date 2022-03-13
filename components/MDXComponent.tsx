import {
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const MDXComponents = {
  p: (props: any) => <Text {...props} mt="5" />,
  h1: (props: any) => <Heading size="lg" {...props} my="5" />,
  h2: (props: any) => <Heading size="md" {...props} my="5" />,
  h3: (props: any) => <Heading size="sm" {...props} my="5" />,
  ol: (props: any) => <OrderedList {...props} my="5" />,
  ul: (props: any) => <UnorderedList {...props} my="4" />,
  //   li: (props: any) => <ListItem {...props} />,
};

export default MDXComponents;
