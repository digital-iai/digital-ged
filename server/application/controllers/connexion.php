<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Connexion extends CI_Controller {


	public function index()
	{
		if($this->session->userdata('user')){
			redirect('connexion/home');
		}
		else{
			$this->load->view('connexion');
		}
	}

		public function seconnecter(){ // fonction qui permet la connexion

		$output = array('error' => false);

		$email = $_POST['email_user'];
		$password = md5($_POST['password_user']);

		$data = $this->login_model->login($email, $password);

		if($data){
			$this->session->set_userdata('user', $data);
			$output['message'] = 'Success. un instant svp ...';
		}
		else{
			$output['error'] = true;
			$output['message'] = 'Informations incorrectes !!';
		}

		echo json_encode($output); 
	}


		function deconnexion()

	{

		$this->session->unset_userdata();

		$this->session->sess_destroy();

		redirect(base_url() . 'connexion', 'refresh');

	}

}