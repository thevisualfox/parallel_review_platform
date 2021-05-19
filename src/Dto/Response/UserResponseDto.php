<?php

declare(strict_types=1);

namespace App\Dto\Response;

use JMS\Serializer\Annotation as Serialization;

class UserResponseDto
{
    /**
     * @var int $id
     * @Serialization\Type("int")
     */
    public $id;

    /**
     * @var string $email
     * @Serialization\Type("string")
     */
    public $email;

    /**
     * @var array $roles
     * @Serialization\Type("array<string>")
     */
    public $roles;

    /**
     * @var string $username
     * @Serialization\Type("string")
     */
    public $username;

    /**
     * @var string $userColor
     * @Serialization\Type("string")
     */
    public $userColor;
}
