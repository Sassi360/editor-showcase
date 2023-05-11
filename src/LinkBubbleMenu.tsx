import {
  Box,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { BubbleMenu } from "@tiptap/react";
import { FC } from "react";
import { TbExternalLink, TbUnlink } from "react-icons/tb";
import { useEditorContext } from "./EditorProvider";
import { LinkButton } from "./LinkButton";
import { useUpdateLink } from "./use-update-link";

export const LinkBubbleMenu: FC = () => {
  const editor = useEditorContext();
  const [link, setLink] = useUpdateLink();

  if (!editor) {
    return null;
  }

  return (
    <Box
      as={BubbleMenu}
      editor={editor}
      updateDelay={100}
      shouldShow={() => editor.isActive("link")}
      tippyOptions={{
        placement: "bottom",
      }}
      bg="chakra-body-bg"
      p="1"
      borderWidth="1px"
      borderColor="gray.600"
      borderRadius="md"
    >
      <InputGroup size="sm">
        <InputLeftElement>
          <LinkButton
            aria-label="go to link"
            onClick={() => window.open(link, "_blank")}
            borderRightRadius="none"
          >
            <Icon as={TbExternalLink} />
          </LinkButton>
        </InputLeftElement>
        <Input pl="10" value={link} onChange={(e) => setLink(e.target.value)} />
        <InputRightElement>
          <LinkButton
            aria-label="unlink"
            borderLeftRadius="none"
            onClick={() =>
              editor.chain().focus().extendMarkRange("link").unsetLink().run()
            }
          >
            <Icon as={TbUnlink} />
          </LinkButton>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
