import React, { Component } from 'react';
import { AlertStripeSuksess } from './../../../packages/node_modules/nav-frontend-alertstriper';
import { Hovedknapp, Fareknapp } from './../../../packages/node_modules/nav-frontend-knapper';
import { EtikettInfo, EtikettAdvarsel } from './../../../packages/node_modules/nav-frontend-etiketter';
import Chevron      from './../../../packages/node_modules/nav-frontend-chevron';
import Autocomplete from './../../../packages/node_modules/nav-frontend-autocomplete';

/*
 * Her er komponenten som benyttes til utvikling av eksisterende og nye moduler til nav-frontend.
 * Appen blir kjørt opp fra npm start-scriptet i package.json på rot, og tar utgangspunkt i
 * webpack-configen som ligger under /development/conf/webpack.config.js.
 *
 * Når du endrer på filene under /src i den aktuelle nav-frontend modulen du sitter og utvikler på, vil dette bli
 * kompilert og reloades av seg selv i browseren, gitt at komponenten blir brukt her inne (hvis ikke
 * vil Webpack la være å gjøre dette pga. sin tree-shaking).
 *
 * Det er i utgangspunktet ikke ønskelig å sjekke inn endringer som gjøres her til repository, ettersom det er tenkt
 * som et rent utviklingsmiljø og ikke trenger å versjonskontrolleres. Om det er nødvendig å endre på ting her,
 * forklar hvorfor i en PR, eller ta det opp i frontend-forum.
 *
 * Enjoy!
 */


// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {value: null}
    }

    onSelect(value, item) {
        this.setState({value: value.toString()});
        console.warn("onselect " + value + " " + JSON.stringify(item, null, 4));
    }

    render() {
        console.warn("render value: " + this.state.value);
        return (
            <div>
                <AlertStripeSuksess>Heisann Hoppsann!</AlertStripeSuksess>
                <Hovedknapp>Hovedknapp</Hovedknapp>
                <Fareknapp>Fareknapp</Fareknapp>
                <Chevron />
                <h3>Autcomplete komponent test</h3>
	            <br/>
	            <Autocomplete
		            items={[{111:'Banan'}, {222:'Ananas'}, {333:'Jordbær'}]}
		            value={this.state.value}
		            placeholder="Velg frukt type"
		            onSelect={(value, item) => this.onSelect(value, item)}
	            />
            </div>
        );
    }
}
