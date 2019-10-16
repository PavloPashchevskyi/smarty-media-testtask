<?php

namespace Application\Modules\Github\Controllers;

use Application\Core\Controller;

/**
 * Description of DefaultController
 *
 * @author ppd
 */
class RepositoryController extends Controller
{
    public function searchAction() 
    {
        $data = [];
        exit($this->view->render('Repository/search.html.twig', $data));
    }
}
