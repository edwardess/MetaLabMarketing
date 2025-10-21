export interface HeroProps {
  videoSrc?: {
    mp4: string;
    webm: string;
  };
  overlayImageSrc?: string;
  backgroundTextSrc?: string;
  backgroundColor?: string;
  className?: string;
}

export interface VideoSource {
  mp4: string;
  webm: string;
}
