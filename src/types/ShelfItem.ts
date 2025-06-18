export interface ShelfItemProps {
  id: string;
  title: string;
  author: string;
  category: "book" | "article" | "video" | "course";
  completedDate?: string;
  rating?: number;
  summary?: string;
  link?: string;
}
