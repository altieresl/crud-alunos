<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>CRUD Alunos</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css">
	<style>
		.navbar{margin-bottom: 20px;}
		.sidebar .nav-link {
			font-weight: 500;
			color: #333;
		}
		.fas, .fa{
			margin-right:10px;
			width:20px;
		}
		h1 a{
			color: #343a40;
		}
		table .btn{
			margin-right: 5px;
		}
		#formCadastrar{
			width:40%;
			float:left;
		}
		#divFoto{
			float:left;
			padding:10px;
			text-align:center;
			margin-left:20px;
			cursor:pointer;
		}
		#divFoto p{
			margin-top:10px;
		}
		#previewFoto {
			margin-top:15px;
			max-width:250px;
			max-height:300px
		}
	</style>
</head>
<body>
<div class="container-fluid">
	<h1 style="text-align:center;">
		<a href="/alunos">
			CRUD Alunos
		</a>
	</h1>
	<hr>
  <!-- components react -->
  <div id="conteudo-alunos">
  </div>
</div>
<script src="/dist/main.js" charset="utf-8"></script>
</body>
</html>