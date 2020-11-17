export interface CategoryCardTypes {
    id: string,
    title: string,
    photoUrl: string,
    isSelected: boolean,
    onSelect?: (id: string) => void;
}
