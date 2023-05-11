import { HStack, useMultiStyleConfig } from "@chakra-ui/react";
import { TbH1, TbH2, TbH3, TbListNumbers, TbList } from "react-icons/tb";
import { FC } from "react";
import { useEditorContext } from "./EditorProvider";
import { MarkButtons } from "./MarkButtons";
import { ToolbarButton } from "./ToolbarButton";
import { ToolbarButtonGroup } from "./ToolbarButtonGroup";

export const Toolbar: FC = () => {
  const styles = useMultiStyleConfig("Editor");
  const editor = useEditorContext();

  if (!editor) {
    return null;
  }

  return (
    <HStack sx={styles.toolbar}>
      <ToolbarButtonGroup>
        <ToolbarButton command="Heading" args={[{ level: 1 }]} icon={TbH1} />
        <ToolbarButton command="Heading" args={[{ level: 2 }]} icon={TbH2} />
        <ToolbarButton command="Heading" args={[{ level: 3 }]} icon={TbH3} />
      </ToolbarButtonGroup>

      <MarkButtons />

      <ToolbarButtonGroup>
        <ToolbarButton command="BulletList" icon={TbList} />
        <ToolbarButton command="OrderedList" icon={TbListNumbers} />
      </ToolbarButtonGroup>
    </HStack>
  );
};
