import React, { Component } from 'react';
import './Player.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Alert
} from 'reactstrap';
import './Modal';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            health: 100,
            combo: 0,
            points: 0,
        }

        this.stillalive = this.stillalive.bind(this);
        this.parler = this.parler.bind(this);
        this.combo = this.combo.bind(this);
    }

    stillalive() {
        if (this.state.health <= 0) {
            return `Il me reste ${this.state.health}% et je suis K.O !!!`;
        } else {
            return `Il me reste ${this.state.health}% d'énergie`;
        }
    }
    parler() {
        alert(`Je suis ${this.props.name}, je suis né le ${this.props.year}, je possède actuellement ${this.state.health} % de vie, j'ai fait ${this.state.combo} combo(s) !!!`)
    }

    levelHealth() {
        if (this.state.health > 0)
            this.setState({
                health: this.state.health - 10
            });
    }

    levelHealthplus() {
        if (this.state.health < 100)
            this.setState({
                health: this.state.health + 10
            });
    }

    combo() {
        this.setState({
            combo: this.state.combo + 1,
            points: this.state.points + 500,
        })
    }

    render() {
        const color = (this.state.health <= 0) ? 'back-dead' : 'back-alive';

        return (
            <div>
                <Container fluid className='Tuto'>
                
                    <Alert className={color}>{this.props.player}
                    </Alert><Button color="danger">{this.state.points} points</Button>
                    <div className="Kin">
                        <img src={this.props.image} height='530px' />
                        <Card>
                            <CardImg className="Ken" top width="10%" />
                            <CardBody>
                                <CardTitle className={color}>{this.props.name}</CardTitle>
                                <CardSubtitle>{this.props.year}</CardSubtitle>
                                <CardText>{this.stillalive()}</CardText>
                                <Button color="success" onClick={() => this.levelHealthplus()}>+</Button>
                                <Button color="danger" onClick={() => this.levelHealth()}>-</Button>
                                <Button color="primary" onClick={() => this.parler()}>Je Parle</Button>
                                <Button color="info" onClick={() => this.combo()}>Combo={this.state.combo}</Button>
                            </CardBody>
                        </Card>

                    </div>
                </Container>
            </div>


        );
    }
}


export default Player;