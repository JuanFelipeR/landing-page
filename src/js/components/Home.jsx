import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';
import img from './../../img/big-project-image.png'

const Home = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card title={"CardTitle1"} text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."} button={"Findout More"} img ={img}/>
                    </div>
                    <div className="col-md-3">
                        <Card title="CardTitle2" text="Recusandae ullam itaque voluptas ducimus laboriosam mollitia aut hic." button="Findout More"img ={img}/>
                    </div>
                    <div className="col-md-3">
                        <Card title="CardTitle3" text="Nostrum eum obcaecati non repudiandae placeat laboriosam cupiditate possimus." button="Findout More"img ={img}/>
                    </div>
                    <div className="col-md-3">
                        <Card title="CardTitle4" text="voluptas neque accusantium pariatur quia ex optio officiis rerum." button="Findout More" img ={img}/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home
