import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag"



const GET_BLOGS = gql`
query{
    getAllBlogs{
        id
        title
        description
        
    }
}
`

// author
// category
// feedback

function BlogList() {

    const { loading, error, data } = useQuery(GET_BLOGS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error:{error.message}</p>
    return (
        <div>
            <h1>Blog List using GRAPHQL</h1>
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
                {data.getAllBlogs.map((blog) => {
                    return (
                        <div className='blog-item'>
                            <div className='blog-title'></div>
                            <h4>{blog.title}</h4>
                            <div className='blog-desc'>
                                <p>{blog.description}</p>
                                <p>Author: {blog.author}</p>
                                <p>Category: {blog.category}</p>
                                <p>{blog.feedback}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BlogList
