import React, { useState } from 'react'

function CreateBlog() {
    const [formData, setFormData] = useState({ title: '', description: '', category: '', author: '' })

    const onfieldChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const CreateBlog = (e) => {
        e.preventDefault();
    }

    return (
        <div className='blog-container'>
            <div>
                <label htmlFor="title">Blog Title:</label>
                <input type="text" value={formData.title} placeholder='enter blog title' onChange={(e) => onfieldChange(e)} name='title' />
            </div>
            <div>
                <label htmlFor="title">Blog Description:</label>
                <input type="text" value={formData.description} placeholder='enter blog desc' onChange={(e) => onfieldChange(e)} name='Description' />
            </div>
            <div>
                <label htmlFor="title">Blog Catgory:</label>
                <input type="text" value={formData.category} placeholder='enter blog catgory' onChange={(e) => onfieldChange(e)} name='category' />
            </div>
            <div>
                <label htmlFor="title">Blog Author:</label>
                <input type="text" value={formData.author} placeholder='enter blog author' onChange={(e) => onfieldChange(e)} name='author' />
            </div>
            <button onClick={(e) => CreateBlog(e)}>Create</button>

        </div>
    )
}

export default CreateBlog
