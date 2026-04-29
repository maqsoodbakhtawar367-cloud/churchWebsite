export interface GalleryImageItem {
  src: string;
  alt: string;
}

export interface MomentsGallerySectionProps {
  id?: string;
  images: GalleryImageItem[];
  className?: string;
}
