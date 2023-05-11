import { HStack } from "@chakra-ui/react";
import { BubbleMenu } from "@tiptap/react";
import { FC } from "react";
import { useEditorContext } from "./EditorProvider";
import { MarkButtons } from "./MarkButtons";
import { ShowShowProps } from "./types";

export const MarkBubbleMenu: FC = () => {
  const editor = useEditorContext();

  if (!editor) {
    return null;
  }

  return (
    <HStack
      as={BubbleMenu}
      editor={editor}
      updateDelay={100}
      shouldShow={({ from, to }: ShowShowProps) => {
        return to - from > 0 && !editor.isActive("link");
      }}
      bg="chakra-body-bg"
      borderWidth="1px"
      borderColor="gray.600"
      borderRadius="md"
    >
      <MarkButtons />
    </HStack>
  );
};
