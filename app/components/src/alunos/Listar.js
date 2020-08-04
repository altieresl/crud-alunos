import React, { Component } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

export default class List extends Component {

    constructor()
    {
        super();
        this.state = {
            arrAlunos: []
        }
    }

    componentDidMount()
    {
        axios.get("http://localhost/api/alunos/listar")
        .then(response=>{
            this.setState({arrAlunos:response.data.data});
        })
        .catch(error => {
            alert("Erro ao realizar operação");
        });
    }

    render() {
        return (
            <section class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <table class="table">
                    <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.arrAlunos.map((aluno, posicao)=>{
                            return(
                                <tr>
                                <th scope="row">{aluno.id}</th>
                                <td><img src={"../../images/alunos/"+(aluno.url_imagem != "" ? aluno.url_imagem : "default.jpg")} width="30"/></td>
                                <td>{aluno.name}</td>
                                <td>{aluno.address}</td>
                                <td>
                                <Link to={"/alunos/editar/"+aluno.id} class="btn btn-light"> Edit </Link>
                                <a class="btn btn-danger text-light" onClick={()=>this.onClickDelete(aluno.id, posicao)}> Delete </a>
                                </td>
                            </tr>
                            )
                            /* Exibo a imagem do usuário caso ela válida, caso contrário exibo a imagem padrão */
                        })
                    }
                    </tbody>
                </table>
            </section>
        )
    }

    onClickDelete(id, posicao)
    {
        let confirmacao = confirm("Tem certeza que deseja realizar essa ação?");
        if(confirmacao)
        {
            axios.delete("http://localhost/api/alunos/deletar/"+id)
            .then((response)=>{
                alert(response.data.message);
                if(response.data.success)
                {
                    const arrAlunosLocal = this.state.arrAlunos;
                    arrAlunosLocal.splice(posicao, 1);
                    this.setState({arrAlunos:arrAlunosLocal});
                    /* Em caso de sucesso na requisição de delete no servidor, utilizo o parâmetro splice para remover 1 elemento do array na
                    posição definida pela variável "posicao" e logo depois atualizo estado do array de alunos */
                }
            })
        }

    }
}