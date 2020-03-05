<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Login_model extends CI_Model
{
  function __construct(){
      parent::__construct();
      $this->load->database();
    }
    
    // Se connecter
   public function login($email, $password){
      $query = $this->db->get_where('utilisateur', array('email_user'=>$email, 'password_user'=>$password, 'statut'=>1));
      return $query->row_array();
    }
}