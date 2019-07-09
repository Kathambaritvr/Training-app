import { Discussion } from './discussion';

export interface Slide {
    id: string;
    name: string;
    description: string;
    img: string;
    master: Discussion;
    student: Discussion;
} 