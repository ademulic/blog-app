import Card from "../../components/Card/Card";
import './Home.css';
const Home = () => {
    const blogs = [
        {
            id:0,
            title: "How to create a Website",
            author:'Mario',
            body:'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
            rating:5,
            thumbnail:'https://images.pexels.com/photos/8972791/pexels-photo-8972791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:1,
            title: "How to make video games",
            author:'Peach',
            body:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque voluptate alias iure sit nisi cum ducimus temporibus quisquam, sunt fuga, modi tempora animi quam ipsum minima necessitatibus accusamus repudiandae voluptas!',
            rating:2,
            thumbnail:'https://images.pexels.com/photos/461940/pexels-photo-461940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            
        },
        {
            id:2, 
            title: "Who is Mario?",
            body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam aspernatur sint tempore. Ea exercitationem harum dolorum veniam aperiam eius, quasi numquam illo dolores nobis quia animi quibusdam quidem quam maxime aspernatur cumque at? Id, delectus provident! Error enim, inventore fugit dolorem, maiores repudiandae aperiam nobis obcaecati sapiente quia possimus molestias?',
            rating:3,
            thumbnail:'https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            id:3, 
            title: "Youtube, broadcast yourself",
            body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, enim?',
            rating:4,
            thumbnail:'https://images.pexels.com/photos/1037994/pexels-photo-1037994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
    ]

    

    return (  
        <section className="home">
            <h1>All Blogs</h1>
            <div className="blog-list">
                
                {
                    blogs.map(blog=> <Card blog={blog} key={blog.id}/>)
                }
            </div> 
        </section>
    );
}
 
export default Home;