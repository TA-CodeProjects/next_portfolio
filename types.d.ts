interface Project {
        name: string,
        slug: string,
        image: string,
        description: string,
        videoSrc: string,
        stack: string[],
        technologies: {
            backend: string[],
            frontend: string[],
        },
        github: string
}