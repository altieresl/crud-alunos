import React, { Component } from 'react'; 
import { Link } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
    	<nav class="col-md-2 d-none d-md-block bg-light sidebar">
    	    <ul class="nav flex-column nav-pills">
				<li class="nav-item"><Link class="nav-link" to="/alunos/index"><i class="fas fa-school"></i>Listar alunos</Link></li>
    	    	<li class="nav-item"><Link class="nav-link" to="/alunos/formulario"><i class="fas fa-child"></i>Cadastrar aluno</Link></li>
    	    </ul>
    	</nav>
    )
  }
}