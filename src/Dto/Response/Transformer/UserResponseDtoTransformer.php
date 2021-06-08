<?php

declare(strict_types=1);

namespace App\Dto\Response\Transformer;

use App\Dto\Response\UserResponseDto;
use App\Entity\User;

class UserResponseDtoTransformer extends AbstractResponseDtoTransformer
{
    /**
     * @param User $user
     * @return UserResponseDto
     */
    public function transformFromObject($user): UserResponseDto
    {
        $dto = new UserResponseDto();
        $dto->id = $user->getId();
        $dto->email = $user->getEmail();
        $dto->roles = $user->getRoles();
        $dto->display = $user->getUsername();
        $dto->organisation = $user->getOrganisation();
        $dto->userColor = $user->getColor();

        return $dto;
    }
}
