import { Video } from './mentor/video';

export interface Discussion {
    id: string;
    name: string;
    description: string;
    videos: Video[];
}