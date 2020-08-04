<?php namespace App\Controllers;
ini_set('display_errors', 'On');error_reporting(E_ALL);

use CodeIgniter\Controller;
use App\Models\Aluno;

class Alunos extends Controller
{
	protected $aluno;
	protected $request;

	function __construct()
	{
		$this->aluno = new Aluno;
		$this->request = \Config\Services::request();
	}

	public function index()
	{
		return view('alunos');
	}

	public function cadastrarAluno()
	{
		try {
			$arquivo = $this->request->getFile('imagem');
			$path = "../public/images/alunos/";
			$nomeArquivo = NULL;
			/* Verifica se o arquivo recebido é válido e se é uma imagem com a extensão jpg, caso seja, salva no servidor e armazena o nome do arquivo para salvar no banco */
			if ($arquivo->isValid() && ! $arquivo->hasMoved() && $arquivo->getExtension() == "jpg")
			{
				$arquivo->move($path);
				$nomeArquivo = $arquivo->getName();
			}

			$insert['name'] = $_POST['nome'];
			$insert['address'] = $_POST['endereco'];
			$insert['url_imagem'] = $nomeArquivo;

			$res = $this->aluno->insert($insert);
			$response['success'] = true;
			$response['message'] = "Operação realizada com sucesso.";
			return json_encode($response);
		} catch(\Exception $e)
		{
			$response['success'] = false;
			$response['message'] = "Erro ao realizar operação. ".$e->getMessage();
			return json_encode($response);
		}
	}

	public function listarAlunos()
	{
		try {
			$data = $this->aluno->findAll();
			$response['data'] = $data;
			$response['success'] = true;
			$response['message'] = "Operação realizada com sucesso.";
			return json_encode($response);
		} catch (\Exception $e) {
			$response['success'] = true;
			$response['message'] = "Erro ao realizar operação. ".$e->getMessage();
			return json_encode($response);
		}
	}
	
	public function getAluno($id)
	{
		try {
			$data = $this->aluno->find($id);
			$response['data'] = $data;
			$response['success'] = true;
			$response['message'] = "Operação realizada com sucesso.";
			return json_encode($response);
		} catch(\Exception $e)
		{
			$response['success'] = false;
			$response['message'] = "Erro ao realizar operação. ".$e->getMessage();
			return json_encode($response);
		}
	}

	public function editarAluno($id)
	{
		try {
			$arquivo = $this->request->getFile('imagem');
			$path = "../public/images/alunos/";
			$nomeArquivo = NULL;
			/* Verifica se o arquivo recebido é válido e se é uma imagem com a extensão jpg, caso seja, salva no servidor e armazena o nome do arquivo para salvar no banco */
			if ($arquivo->isValid() && ! $arquivo->hasMoved() && $arquivo->getExtension() == "jpg")
			{
				$arquivo->move($path);
				$nomeArquivo = $arquivo->getName();
			}

			$novosDados['name'] = $_POST['nome'];
			$novosDados['address'] = $_POST['endereco'];
			$novosDados['url_imagem'] = $nomeArquivo;

			$data = $this->aluno->update($id, $novosDados);

			$response['success'] = true;
			$response['message'] = "Operação realizada com sucesso.";
			return json_encode($response);
		} catch(\Exception $e)
		{
			$response['success'] = false;
			$response['message'] = "Erro ao realizar operação. ".$e->getMessage();
			return json_encode($response);
		}
	}

	public function deletarAluno($id)
	{
		try {
			/* Foi utilizado o esquema ->where("id",$id)->delete() ao invés de apenas ->delete() pois o CodeIgniter4 retornava erro ao deletar o aluno de id 0,
			provavelmente por causa de uma verificação se o id é == a 0, usando o esquema descrito acima o problema não ocorre */
			$data = $this->aluno->where("id",$id)->delete();

			$response['success'] = true;
			$response['message'] = "Operação realizada com sucesso.";
			return json_encode($response);
		} catch(\Exception $e)
		{
			$response['success'] = false;
			$response['message'] = "Erro ao realizar operação. ".$e->getMessage();
			return json_encode($response);
		}
	}
}
