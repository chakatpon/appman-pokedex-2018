import React from 'react';

import cuteImg from '../cute.png';



class ShowList extends React.Component {
    
    state = { cards : []};

    componentDidMount(){
        this.fetchCards();
        console.log(this.state.cards)
    }

    fetchCards() {
        fetch(`http://localhost:3030/api/cards`)
        .then(response => {            
            return response.json()})
        .then(({cards}) => {            
            this.setState({ cards: [this.state.cards, ...cards]})
        });        
    }

    renderCard() {
        return this.state.cards.map((card, index) => {
            return (
                <div className="col-6">

                    <div className="row card--list">
                        <img className="col-6" src={card.imageUrl}/>
                        <div className="col-5 card--list__detail">
                            <div key={`${card.name}`} >{card.name}</div>
                            <div className="row">
                                <span className="col-4">HP </span>
                                <div class="progress my-1">
                                    <div class="progress-bar bg-warning" style={{ width: 200 }} ></div>
                                </div>
                            </div>
                            <div className="row">
                            <span className="col-4">STR </span>
                                <div class="progress my-1">
                                    <div class="progress-bar bg-warning" style={{ width: 200}} ></div>
                                </div>
                            </div>
                            <div className="row">
                            <span className="col-4">WEAK </span>
                                <div class="progress my-1">
                                    <div class="progress-bar bg-warning" style={{ width: 200}} ></div>
                                </div>
                            </div>
                            <div className="row">
                            <span>
                                <img className="cute--img" src={cuteImg}/>
                                <img className="cute--img" src={cuteImg}/>
                                <img className="cute--img" src={cuteImg}/>
                                <img className="cute--img" src={cuteImg}/>
                                <img className="cute--img" src={cuteImg}/>
                            </span>

                            </div>
                        </div>
                        <span className="col-1 delelt__btn">X</span>
                    
                    </div>
                </div>

            );
        })
    }


    render(){
        return(
            <div className="showList--wrapper row">{this.renderCard()}</div>
        );
    }
}

export default ShowList;