import React from 'react';
import { Link } from'react-router-dom';
//import Reveal from 'react-reveal';
//import 'animate.css/animate.css';
import Slide from 'react-reveal/Slide';


const Blocks = (props) => {
    const generateBlocks = ({blocks}) => {
        if (blocks) {
            return blocks.map(item => {
                return (
                    <Slide 
                        key={item.id} 
                        bottom    
                    >
                        <div className={`item ${item.type}`}>
                            <div className="veil"></div>
                            <img
                                className="image" 
                                src={`/images/blocks/${item.image}`}
                            />
                            <div className="title">
                                <Link to={item.link}>{item.title}</Link>
                            </div>
                        </div>
                    </Slide>
                )
            });
        }
    }

    return (
        <div className="home_blocks">
            {generateBlocks(props)}
        </div>
    )
}

export default Blocks;