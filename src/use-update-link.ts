import { useCallback, useEffect, useState } from "react";
import { useEditorContext } from "./EditorProvider";

export function useUpdateLink() {
  const editor = useEditorContext();
  const previousUrl: string = editor?.getAttributes("link").href ?? "";
  const [link, setLink] = useState(previousUrl);

  useEffect(() => {
    setLink(previousUrl);
  }, [previousUrl]);

  const updateLink = useCallback(
    (url: string) => {
      setLink(url);

      if (!editor) {
        return;
      }

      // update link
      editor.chain().extendMarkRange("link").setLink({ href: url }).run();
    },
    [editor],
  );

  return [link, updateLink] as const;
}
