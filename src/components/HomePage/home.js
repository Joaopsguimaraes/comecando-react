import React, { Component } from "react";
import Card from "../Card";
import "./style.css";

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            card: [
                {
                    subtitle:"Componentes",
                    paragraf:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    src:"https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
                    alt: "React"
                },
                {
                    subtitle:"Componentes",
                    paragraf:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    src:"https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
                    alt: "React"
                },
                {
                    subtitle:"Componentes",
                    paragraf:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                    src:"https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png",
                    alt: "React"
                }
            ]
        }
    }
   render(){
    return (
        <div className="home-page">
            {this.state.card.map((card => 
                        <Card
                        subtitle = {card.subtitle}
                        paragraf = {card.paragraf}
                        src = {card.src}
                        alt = {card.alt}
                        />
                
                ))}
        </div>
      );
   } 
}

export default HomePage;
