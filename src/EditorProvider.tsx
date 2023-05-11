import { Editor } from "@tiptap/react";
import { createContext, FC, ReactNode, useContext } from "react";

type EditorProps = {
  editor: Editor | null;
};

const EditorContext = createContext({} as EditorProps);

type EditorProviderProps = EditorProps & {
  children: ReactNode;
};

export const EditorProvider: FC<EditorProviderProps> = ({
  children,
  editor,
}) => {
  return (
    <EditorContext.Provider value={{ editor }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditorContext = () => useContext(EditorContext).editor;
