export interface AppState {
  guestMode: boolean;
  setMode: (guestMode: boolean) => void;
  blocks: Block[];
  setBlocks: (blocks: Block[]) => void;
}

export interface Block {
  id: string;
  type: 'text' | 'image' | 'input' | 'selectbox';
  order: number;
  content: string;
  label?: string;
  options?: string[];
}
