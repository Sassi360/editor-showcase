import { FC } from "react";
import {
  TbBold,
  TbItalic,
  TbLink,
  TbStrikethrough,
  TbUnderline,
  TbUnlink,
} from "react-icons/tb";
import { useEditorContext } from "./EditorProvider";
import { ToolbarButton } from "./ToolbarButton";
import { ToolbarButtonGroup } from "./ToolbarButtonGroup";

export const MarkButtons: FC = () => {
  const editor = useEditorContext();

  if (!editor) {
    return null;
  }

  return (
    <ToolbarButtonGroup>
      <ToolbarButton command="Bold" icon={TbBold} />
      <ToolbarButton command="Italic" icon={TbItalic} />
      <ToolbarButton command="Underline" icon={TbUnderline} />
      <ToolbarButton command="Strike" icon={TbStrikethrough} />
      <ToolbarButton command="Link" icon={TbLink} activeIcon={TbUnlink} />
    </ToolbarButtonGroup>
  );
};
