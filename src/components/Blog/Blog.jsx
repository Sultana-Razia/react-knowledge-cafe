import { CiBookmark } from "react-icons/ci";
import PropTypes from 'prop-types';

const Blog = ({ blog, handleAddToBookmark }) => {
    const { cover, title, reading_time, author, author_img, posted_date, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full h-[450px] mb-8' src={cover} alt={`Cover picture of thr title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex '>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmark} className="ml-2"><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a>#{hashtag}</a></span>)
                }
            </p>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;