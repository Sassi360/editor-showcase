import { Box, useMultiStyleConfig } from "@chakra-ui/react";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import { EditorContent, EditorEvents, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { FC } from "react";
import { EditorProvider } from "./EditorProvider";
import { LinkBubbleMenu } from "./LinkBubbleMenu";
import { MarkBubbleMenu } from "./MarkBubbleMenu";
import { Toolbar } from "./Toolbar";

type Props = {
  content: string;
  onUpdate?: (props: EditorEvents["update"]) => void;
};

export const TiptapEditor: FC<Props> = ({ content, onUpdate = () => {} }) => {
  const styles = useMultiStyleConfig("Editor");

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
      Underline,
    ],
    content,
    onUpdate,
  });

  return (
    <EditorProvider editor={editor}>
      {/* menus */}
      <Toolbar />
      <LinkBubbleMenu />
      <MarkBubbleMenu />

      {/* editor */}
      <Box __css={styles.container}>
        <EditorContent editor={editor} tabIndex={-1} />
      </Box>
    </EditorProvider>
  );
};
