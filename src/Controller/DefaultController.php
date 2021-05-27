<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/{reactRouting}", name="default", requirements={"reactRouting"="^(?!api).+"}, defaults={"reactRouting": null})
     */
    public function default(): Response
    {
        return $this->render('pages/default.html.twig');
    }
}
