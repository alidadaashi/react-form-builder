export interface AppState {
  guestMode: boolean;
  setMode: (guestMode: boolean) => void;
  blocks: Block[];
  handleBlocks: (blocks: Block[]) => void;
}

export interface Block {
  id: number;
  type: 'text' | 'image' | 'input' | 'selectbox';
  order: number;
  content: string;
  label?: string;
  options?: string[];
}
