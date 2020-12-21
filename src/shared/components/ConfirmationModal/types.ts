export interface ConfirmationTypes {
    title: string;
    content: string;
    onConfirm: () => void;
    onDiscard: () => void;
}
