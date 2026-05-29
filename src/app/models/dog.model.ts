export interface Dog {
    id: number;
    title: string;
    description: string;
    location: {
        latitude: number;
        longitude: number;
    }
    image: string;
    timestamp?: string;
}