import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Jumbotron = () => {
    return (
        <div className= "container">
            <div className="jumbotron jumbotron-fluid d-felx bg-secondary-light pb-5">
                <div className="container">
                    <h1 className="display-4">A Warm Welcome!</h1>
                    <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas voluptates blanditiis repudiandae illo aspernatur libero laborum magnam consequatur vel ducimus? Voluptatem dicta culpa est laudantium eaque omnis delectus nam, possimus dolorem magnam eum asperiores exercitationem minus atque, maiores ab. </p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Call To Action!</a>
                    </p>
                </div>
            </div>
        </div>
    );
   
}

export default Jumbotron;