export type RAndMChar = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: Origin,
    location: Location,
    image: string,
    episodes: string[]
    url: string,
    created: string
}

export type Origin = {
    name: string,
    url: string
}

export type Location = {
    name: string,
    url: string
}