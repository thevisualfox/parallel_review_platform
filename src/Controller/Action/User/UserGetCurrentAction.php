<?php

namespace App\Controller\Action\User;

use App\Controller\AbstractApiController;
use App\Dto\Response\Transformer\UserResponseDtoTransformer;
use App\Entity\User;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

final class UserGetCurrentAction extends AbstractApiController
{
    /** @var Security $security */
    private $security;

    /** @var User|null $User */
    private $user;

    /** @var UserResponseDtoTransformer  $userResponseDtoTransformer */
    private $userResponseDtoTransformer;

    public function __construct(Security $security, UserResponseDtoTransformer $userResponseDtoTransformer)
    {
        $this->security = $security;
        $this->user = $this->security->getUser();
        $this->userResponseDtoTransformer = $userResponseDtoTransformer;
    }

    /**
     * @Route("/api/users/get/{id}", defaults={"id" = null}, requirements={"id" = "\d+"}, name="app_get_current_user", methods="GET")
     */
    public function __invoke(User $user = null): Response
    {
        $currentUser = null !== $this->user ? $this->user : $user;

        return $this->respond($this->userResponseDtoTransformer->transformFromObject($currentUser));
    }
}
