type TPost = {
    id: number
    image: string
    date: number
    month: string
    authorName: string
    title: string
    description: string
}

const PostsList:TPost[] = [
    {
        id: 0,
        image: "/images/blog/1.png",
        date: 25,
        month: "Nov",
        authorName: "Rachi Card",
        title: "The Benefits of Vitamin D & How to Get It",
        description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
    },

    {
        id: 0,
        image: "/images/blog/2.png",
        date: 25,
        month: "Nov",
        authorName: "Rachi Card",
        title: "Our Favourite Summertime Tommeto",
        description: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
    },
]

export default PostsList