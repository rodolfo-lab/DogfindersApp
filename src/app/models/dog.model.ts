export interface Dog {
    id: string;
    title: string;
    description: string;
    location: {
        latitude: number;
        longitude: number;
    }
    image: string;
}