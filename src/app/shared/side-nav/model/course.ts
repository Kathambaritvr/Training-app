import { Subject } from './subject';

export interface Course {
    id: string;
    name: string;
    description: string;
    subject: Subject[];
}
