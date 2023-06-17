export type Project = {
    title: string
    description: string
    image: string
    link: string
    tools?: Tool['id'][]
    type?: ProjectType
}

export type ProjectType = 'Project' | 'Open Source'

export type Tool = {
    id: string
    image: string
    name: string
}

export type ProjectData = {
    projects: Project[]
    tools?: Tool[]
}
