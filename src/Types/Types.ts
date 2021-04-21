export type photosType = {
    small: string | null
    large: string | null
}
export type usersType = {
    id: number
    name: string
    status: string | null
    photos: photosType
    followed: boolean
}
export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: number
        youtube: string
        mainLink: string
        photos: photosType
    }
}