<?php

declare(strict_types=1);

namespace App\Dto\Response;

use JMS\Serializer\Annotation as Serialization;

class UserResponseDto
{
    /**
     * @Serialization\Type("int")
     */
    public int $id;

    /**
     * @Serialization\Type("string")
     */
    public string $email;

    /**
     * @Serialization\Type("array<string>")
     */
    public array $roles;

    /**
     * @Serialization\Type("string")
     */
    public string $username;

    /**
     * @Serialization\Type("string")
     */
    public string $userColor;
}
