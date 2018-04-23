export interface DummyEvent {
    title: string,
    activities: Activity[]
}

export interface Activity {
    title: string,
    imgUrl: string,
    list: List[];
}

export interface List {
    title: string,
    description: Description[]
}

export interface Description {
    title: string,
    imgUrl: string
}