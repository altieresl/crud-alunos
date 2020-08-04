import React, { Component } from 'react';
import axios from 'axios';
export default class Form extends Component {
    constructor()
    {
        super();
        this.state = {
            fieldNome:"",
            fieldEndereco:"",
            fieldImagem:null,
            urlImagem:"../images/alunos/default.jpg"
        }
        /* Monta o estado configurando a imagem de usuário padrão */
    }
    render() {
        return (
        <div class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
            <h4>Cadastrar Aluno</h4>
            <hr/>
            <form id="formCadastrar">
                <div class="row">
                    <div class="col mb-3">
                        <label for="nome">Nome</label>
                        <input type="text" class="form-control" placeholder="Nome" name="nome" id="nome" value={this.state.fieldNome} onChange={(value)=>this.setState({fieldNome:value.target.value})}/>
                    </div>
                </div>

                <div class="row">
                    <div class="col mb-3">
                        <label for="endereco">Endereço</label>
                        <input type="text" class="form-control" placeholder="Endereço" name="endereco" id="endereco" value={this.state.fieldEndereco} onChange={(value)=>this.setState({fieldEndereco:value.target.value})} />
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="imagem">Foto de perfil</label>
                        <input type="file" class="form-control" name="imagem" id="imagem" onChange={(foto)=>this.manipularArquivo(foto)} />
                        <img src={this.state.urlImagem} id="previewFoto"/>
                    </div>
                </div>

                <div class="row">
                    <div class="col mb-3">
                        <button class="btn btn-primary btn-block" type="button" onClick={()=>this.onClickSave()}>Save</button>
                    </div>
                </div>
            </form>
            
        </div>
        )
    }

    manipularArquivo(paramArquivo)
    {
        let arquivo = paramArquivo.target.files[0];
        var regex = /(\.jpg)$/i;
        /* Garante que a extensão do arquivo é .jpg */
        if(arquivo != undefined && !regex.exec(arquivo.name))
        {
            document.getElementById("imagem").value = "";
            alert("Atenção: a imagem deve ser do tipo .jpg");
        }else
        {
            this.setState({
                fieldImagem:arquivo,
                urlImagem: (arquivo == undefined ? "../images/alunos/default.jpg" : URL.createObjectURL(arquivo))
            });
            /* A função URL.createObjectURL é utilizada para pegar a imagem enviada pelo usuário e gerar uma preview que é exibida no formulário */
        }
    }

    onClickSave()
    {
        var formData = new FormData(document.getElementById("formCadastrar"));
        /* Utilizei o formData para enviar a imagem junto com os outros campos do formulário */
        axios.post("http://localhost/api/alunos/cadastrar", formData)
        .then(response => {
            alert(response.data.message);
        })
        .catch(erro => {
            alert(erro);
        });
    }
}