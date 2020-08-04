<?php namespace App\Models;
// ini_set('display_errors', 'On');error_reporting(E_ALL);

use CodeIgniter\Model;

class Aluno  extends Model
{
   protected $table      = 'alunos';
   protected $primaryKey = 'id';

   protected $returnType = 'array';
   protected $useSoftDeletes = false;

   protected $allowedFields = [
     'name',
     'email',
     'phone',
     'address',
     'url_imagem'
   ];

   protected $useTimestamps = true;
   protected $createdField  = 'created_at';
   protected $updatedField  = 'updated_at';
   protected $deleted_at    = 'deleted_at';
}