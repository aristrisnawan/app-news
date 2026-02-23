interface newsSource {
    id: string | null,
    name: string
}
interface article {
    source: newsSource,
    author: string,
    title: string,
    description: string,
    url: string | null,
    urlToImage: string | null,
    publishedAt: string,
    content: string
}
export interface allNews {
    status: string,
    totalResults: number,
    articles: article[]
}
