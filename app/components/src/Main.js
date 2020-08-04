import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Nav from './Nav';
import Editar from './alunos/Editar';
import Formulario from './alunos/Formulario';
import Listar from './alunos/Listar';

export default class Main extends Component {
    render()
    {
        return(
            <Router>
                <main class="row">
                    <Nav />
                    <Switch>
                        <Route path="/alunos/index" exact component={Listar} />
                        <Route path="/alunos/formulario" component={Formulario} />
                        <Route path="/alunos/editar/:id" component={Editar} />
                    </Switch>
                </main>
            </Router>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('conteudo-alunos'));