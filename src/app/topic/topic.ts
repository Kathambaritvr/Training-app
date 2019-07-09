import { Playlist } from './playlist';
import { Slide } from './slide';
import { Program } from './model/program';
import { Site } from './model/site';
import { Document } from './model/document';

export interface Topic {
    id: string;
    name: string;
    description: string;
    playlists: Playlist[];
    slides: Slide[];
    programs: Program[];
    sites: Site[];
    documents: Document[];
}